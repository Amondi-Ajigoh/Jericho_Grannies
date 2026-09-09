function GalleryPage() {
  return (
    <main className="inner-page">
      <section className="inner-hero">
        <div className="container">
          <div className="section-label">CAPTURED MOMENTS</div>
          <h1>Gallery</h1>
          <p>
            Training days, match days, celebrations and community moments.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="empty-state">
            <i className="bi bi-images"></i>
            <div className="section-label">PHOTO ARCHIVE</div>
            <h2>Our gallery will live here.</h2>
            <p>
              Official team photographs and match-day images can be added once
              the club's media collection is ready.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default GalleryPage
