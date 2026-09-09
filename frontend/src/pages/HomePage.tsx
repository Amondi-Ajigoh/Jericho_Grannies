import { Link } from 'react-router-dom'
import heroImage from '../assets/hero.png'

function HomePage() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-pattern"></div>

        <div className="container hero-content">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="hero-kicker">
                <span></span>
                FOOTBALL • COMMUNITY • LEGACY
              </div>

              <h1>
                Age is just a number.
                <em> Passion is forever.</em>
              </h1>

              <p className="hero-text">
                Meet the women of Jericho who continue to prove that the
                beautiful game belongs to everyone, at every age.
              </p>

              <div className="hero-actions">
                <Link to="/team" className="btn btn-primary-custom">
                  Meet the Grannies
                  <i className="bi bi-arrow-right"></i>
                </Link>

                <Link to="/stories" className="btn btn-outline-custom">
                  Our Story
                </Link>
              </div>

              <div className="hero-trust">
                <div>
                  <strong>01</strong>
                  <span>Community First</span>
                </div>
                <div>
                  <strong>02</strong>
                  <span>Football Forever</span>
                </div>
                <div>
                  <strong>03</strong>
                  <span>Stronger Together</span>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="hero-visual">
                <div className="hero-image-wrap">
                  <img
                    src={heroImage}
                    alt="Jericho Grannies football"
                    className="hero-image"
                  />
                </div>

                <div className="hero-card hero-card-top">
                  <i className="bi bi-heart-fill"></i>
                  <span>Playing with purpose</span>
                </div>

                <div className="hero-card hero-card-bottom">
                  <strong>100%</strong>
                  <span>Heart on the pitch</span>
                </div>

                <div className="hero-circle circle-one"></div>
                <div className="hero-circle circle-two"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="container">
          <div className="section-label">WELCOME TO JERICHO GRANNIES</div>

          <div className="row align-items-end g-4">
            <div className="col-lg-7">
              <h2>
                Football brought us together.
                <span> Friendship keeps us moving.</span>
              </h2>
            </div>

            <div className="col-lg-5">
              <p>
                Jericho Grannies is more than a football team. We are a
                community of women who believe in staying active, supporting
                one another and showing the next generation what is possible.
              </p>

              <Link to="/stories" className="text-link">
                Discover our story
                <i className="bi bi-arrow-up-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="match-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="section-label">ON THE PITCH</div>
              <h2>Latest Match Information</h2>
            </div>

            <Link to="/matches" className="section-link">
              View all matches
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

          <div className="match-card">
            <div className="match-date">
              <span>FIXTURES & RESULTS</span>
              <strong>JG</strong>
              <small>FOOTBALL</small>
            </div>

            <div className="match-teams">
              <div className="match-team">
                <div className="team-crest">
                  <i className="bi bi-shield-fill"></i>
                </div>
                <strong>Jericho Grannies</strong>
                <span>Home Team</span>
              </div>

              <div className="match-vs">
                <span>VS</span>
                <small>UPDATES</small>
              </div>

              <div className="match-team">
                <div className="team-crest opponent">
                  <i className="bi bi-shield"></i>
                </div>
                <strong>Official Fixture</strong>
                <span>Coming Soon</span>
              </div>
            </div>

            <div className="match-venue">
              <i className="bi bi-calendar-event"></i>
              <span>Official match information will be published here.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="row g-0">
            <div className="col-md-4 stat-item">
              <strong>01</strong>
              <span>Team</span>
              <p>One community united by football.</p>
            </div>

            <div className="col-md-4 stat-item">
              <strong>∞</strong>
              <span>Passion</span>
              <p>There is no age limit on loving the game.</p>
            </div>

            <div className="col-md-4 stat-item">
              <strong>100%</strong>
              <span>Heart</span>
              <p>Every match is played with purpose.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="story-preview">
        <div className="container">
          <div className="story-panel">
            <div className="story-content">
              <div className="section-label">MORE THAN FOOTBALL</div>

              <h2>Our game. Our stories. Our legacy.</h2>

              <p>
                From training sessions to match days, every moment tells a
                story of friendship, resilience and community.
              </p>

              <Link to="/stories" className="btn btn-light-custom">
                Read Our Stories
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>

            <div className="story-symbol">
              <i className="bi bi-people-fill"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="support-section">
        <div className="container text-center">
          <div className="section-label">JOIN THE JOURNEY</div>

          <h2>Stand with the Grannies.</h2>

          <p>
            Support community football and help us keep the game alive for
            generations to come.
          </p>

          <Link to="/contact" className="btn btn-primary-custom">
            Get Involved
            <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default HomePage
