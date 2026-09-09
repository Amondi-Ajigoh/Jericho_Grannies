import { Link } from 'react-router-dom'

function MatchesPage() {
  return (
    <main className="matches-page">
      <section className="inner-hero matches-hero">
        <div className="hero-pattern"></div>

        <div className="container">
          <div className="section-label">ON THE PITCH</div>

          <h1>
            Matches
            <em> & Results.</em>
          </h1>

          <p>
            Follow the fixtures, results and match-day moments of Jericho
            Grannies.
          </p>
        </div>
      </section>

      <section className="matches-overview page-section">
        <div className="container">
          <div className="matches-overview-grid">
            <div>
              <div className="section-label">MATCH CENTRE</div>

              <h2>
                Every match.
                <span> Every memory.</span>
              </h2>
            </div>

            <p>
              This is where the Jericho Grannies match calendar will bring
              fixtures, results and important match-day information together
              in one place.
            </p>
          </div>
        </div>
      </section>

      <section className="fixtures-section page-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="section-label">FIXTURES</div>
              <h2>Upcoming Matches</h2>
            </div>

            <span className="match-status-pill">
              <i className="bi bi-circle-fill"></i>
              Awaiting official fixtures
            </span>
          </div>

          <div className="fixture-empty">
            <div className="fixture-empty-mark">
              <i className="bi bi-calendar2-event-fill"></i>
            </div>

            <div className="fixture-empty-content">
              <div className="section-label">NO PUBLISHED FIXTURES</div>

              <h3>
                The next match will appear here.
              </h3>

              <p>
                Official fixture information will be displayed once the team
                has published the next match date, opponent, venue and kick-off
                time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="results-section page-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="section-label">MATCH HISTORY</div>
              <h2>Recent Results</h2>
            </div>
          </div>

          <div className="results-empty">
            <div className="results-empty-icon">
              <i className="bi bi-trophy-fill"></i>
            </div>

            <div>
              <h3>No results published yet.</h3>
              <p>
                Official scores and match reports will appear here as the
                Jericho Grannies match history is added.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="match-info-section">
        <div className="container">
          <div className="match-info-panel">
            <div className="match-info-icon">
              <i className="bi bi-info-circle-fill"></i>
            </div>

            <div>
              <div className="section-label">MATCH INFORMATION</div>

              <h2>Follow the journey.</h2>

              <p>
                Once official match data is available, this section will
                provide opponents, venues, kick-off times, results and links to
                full match stories.
              </p>
            </div>

            <Link to="/stories" className="btn btn-light-custom">
              Read Team Stories
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default MatchesPage
