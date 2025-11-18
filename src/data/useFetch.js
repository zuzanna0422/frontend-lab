import { useEffect, useState } from 'react'

const RETRY_LIMIT = 2
const RETRY_DELAY_MS = 800

const canUseSessionStorage = () => {
  try {
    return typeof window !== 'undefined' && typeof window.sessionStorage !== 'undefined'
  } catch {
    return false
  }
}

const readCache = (key) => {
  if (!key || !canUseSessionStorage()) return null
  try {
    const raw = window.sessionStorage.getItem(key)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

const writeCache = (key, value) => {
  if (!key || !canUseSessionStorage()) return
  try {
    window.sessionStorage.setItem(key, JSON.stringify(value))
  } catch {
    // ignore quota/circular errors
  }
}

function useFetch(url) {
  const storageKey = url ? `useFetch:${url}` : null
  const [data, setData] = useState(() => readCache(storageKey))
  const [loading, setLoading] = useState(() => (readCache(storageKey) ? false : true))
  const [error, setError] = useState(null)

  useEffect(() => {
    let ignore = false
    let retryTimeout = null

    const cached = readCache(storageKey)
    if (cached != null) {
      setData(cached)
      setLoading(false)
    } else {
      setLoading(true)
    }
    setError(null)

    const load = async (attempt = 0) => {
      if (!url) {
        setData(null)
        setLoading(false)
        setError(new Error('Brak adresu URL do pobrania danych.'))
        return
      }

      if (!cached || attempt > 0) {
        setLoading(true)
      }

      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`)
        }

        const payload = await response.json()
        if (!ignore) {
          setData(payload)
          writeCache(storageKey, payload)
          setError(null)
          setLoading(false)
        }
      } catch (err) {
        if (ignore) return

        if (attempt < RETRY_LIMIT) {
          retryTimeout = setTimeout(() => load(attempt + 1), RETRY_DELAY_MS * (attempt + 1))
          return
        }

        const fallback = readCache(storageKey)
        if (fallback != null) {
          setData(fallback)
          setError(null)
        } else {
          console.error('useFetch error:', err)
          setData((prev) => (Array.isArray(prev) ? [] : null))
          setError(err)
        }
        setLoading(false)
      }
    }

    load()

    return () => {
      ignore = true
      if (retryTimeout) clearTimeout(retryTimeout)
    }
  }, [url, storageKey])

  return [data, loading, error]
}

export default useFetch
