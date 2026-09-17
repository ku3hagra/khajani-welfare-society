const nav = [
  ["About", "/about"],
  ["Our Work", "/our-work"],
  ["Projects & Initiatives", "/projects"],
  ["Impact", "/impact"],
  ["Stories / Media", "/stories"],
  ["Get Involved", "/get-involved"],
  ["Contact", "/contact"],
];

export function Header() {
  return (
    <header className="siteHeader">
      <div className="shell headerInner">
        <a className="brand" href="/">Khajani Welfare Society</a>
        <nav className="desktopNav">
          {nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          <a className="navDonate" href="/donate">Donate</a>
        </nav>
        <details className="mobileMenu">
          <summary>Menu</summary>
          <nav>
            {nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
            <a href="/donate">Donate</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
