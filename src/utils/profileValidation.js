const MAX_NAME_LENGTH = 30
const NAME_REGEX = /^[\p{L}\s-]+$/u

const createDateFromInput = (value = '') => {
  const [year, month, day] = value.split('-').map(Number)
  if (!year || !month || !day) {
    return new Date(NaN)
  }
  return new Date(year, month - 1, day)
}

export const sanitizeNameInput = (value = '') => {
  const lettersOnly = value.replace(/[^\p{L}\s-]/gu, '')
  return lettersOnly.slice(0, MAX_NAME_LENGTH)
}

export const getPhoneDigits = (value = '') => value.replace(/\D/g, '')

export const formatPhoneFromDigits = (digits = '') => {
  if (!digits) {
    return ''
  }

  const parts = [
    digits.slice(0, 3),
    digits.slice(3, 6),
    digits.slice(6, 9)
  ].filter(Boolean)

  return parts.join('-')
}

export const normalizePhoneInput = (value = '') => {
  const digits = getPhoneDigits(value).slice(0, 9)
  return formatPhoneFromDigits(digits)
}

export const validateProfileForm = (data = {}) => {
  const errors = {}
  const nameValue = (data.imie || '').trim()

  if (!nameValue) {
    errors.imie = 'Imię jest wymagane.'
  } else if (!NAME_REGEX.test(nameValue)) {
    errors.imie = 'Imię może zawierać tylko litery, spacje i myślniki.'
  } else if (nameValue.length > MAX_NAME_LENGTH) {
    errors.imie = `Imię może mieć maksymalnie ${MAX_NAME_LENGTH} znaków.`
  }

  const birthDateValue = data.dataUrodzenia
  if (!birthDateValue) {
    errors.dataUrodzenia = 'Data urodzenia jest wymagana.'
  } else {
    const chosenDate = createDateFromInput(birthDateValue)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    if (Number.isNaN(chosenDate.getTime())) {
      errors.dataUrodzenia = 'Podaj poprawną datę.'
    } else if (chosenDate > today) {
      errors.dataUrodzenia = 'Data urodzenia nie może być z przyszłości.'
    }
  }

  const phoneDigits = getPhoneDigits(data.telefon || '')
  if (phoneDigits.length !== 9) {
    errors.telefon = 'Telefon musi zawierać dokładnie 9 cyfr.'
  }

  return errors
}

export { MAX_NAME_LENGTH }
