import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <main className="inner-page">
      <section className="page-section not-found">
        <div className="container text-center">
          <div className="section-label">404</div>
          <h1>Page not found.</h1>
          <p>The page you are looking for does not exist.</p>
          <Link to="/" className="btn btn-primary-custom">
            Back Home
            <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default NotFoundPage
