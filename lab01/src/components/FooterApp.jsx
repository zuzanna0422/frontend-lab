function FooterApp() {
return (
<footer className="bg-light border-top py-3 mt-5">
<div className="container d-flex flex-wrap align-items-center justify-content-between gap-3">
<div className="d-flex align-items-center gap-2">
<img src="/wsei-logo.png" alt="Logo uczelni" height="32" />
<span className="text-muted">© {new Date().getFullYear()} WSEI</span>
</div>
<div className="text-muted">
Autor: <a href="mailto:twoj.email@wsei.edu.pl">twoj.email@wsei.edu.pl</a>
</div>
</div>
</footer>
);
}


export default FooterApp;