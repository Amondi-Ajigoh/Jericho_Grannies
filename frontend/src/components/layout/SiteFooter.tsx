import { Link } from 'react-router-dom'

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="brand">
              <span className="brand-mark">
                <i className="bi bi-trophy-fill"></i>
              </span>
              <span>
                <strong>JERICHO</strong>
                <small>GRANNIES</small>
              </span>
            </div>
            <p>Football. Friendship. Community. Legacy.</p>
          </div>

          <div className="footer-links">
            <Link to="/team">Our Team</Link>
            <Link to="/matches">Matches</Link>
            <Link to="/stories">Stories</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Jericho Grannies. All rights reserved.</span>
          <span>
            Made with <i className="bi bi-heart-fill"></i> for the beautiful game.
          </span>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
