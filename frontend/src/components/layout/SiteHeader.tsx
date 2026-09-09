import { Link, NavLink } from 'react-router-dom'

function SiteHeader() {
  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="brand" to="/">
            <span className="brand-mark">
              <i className="bi bi-trophy-fill"></i>
            </span>
            <span>
              <strong>JERICHO</strong>
              <small>GRANNIES</small>
            </span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavigation"
            aria-controls="mainNavigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list"></i>
          </button>

          <div className="collapse navbar-collapse" id="mainNavigation">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/team">Our Team</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/matches">Matches</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/stories">Stories</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav-link-cta" to="/contact">Support Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default SiteHeader
