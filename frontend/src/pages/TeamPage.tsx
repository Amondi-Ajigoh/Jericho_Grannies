import { Link } from 'react-router-dom'

const teamValues = [
  {
    icon: 'bi-heart-fill',
    title: 'Community',
    text: 'Football creates a space where women connect, encourage one another and build lasting friendships.',
  },
  {
    icon: 'bi-lightning-charge-fill',
    title: 'Passion',
    text: 'The love of the beautiful game is at the heart of every training session and every match.',
  },
  {
    icon: 'bi-people-fill',
    title: 'Together',
    text: 'Every player brings experience, character and energy to a team built on togetherness.',
  },
]

function TeamPage() {
  return (
    <main className="team-page">
      <section className="inner-hero team-hero">
        <div className="hero-pattern"></div>

        <div className="container">
          <div className="section-label">THE WOMEN BEHIND THE GAME</div>

          <h1>
            Meet the
            <em> Grannies.</em>
          </h1>

          <p>
            A football team built around friendship, community and a lifelong
            love of the game.
          </p>
        </div>
      </section>

      <section className="team-intro page-section">
        <div className="container">
          <div className="row align-items-end g-5">
            <div className="col-lg-7">
              <div className="section-label">ONE TEAM</div>

              <h2>
                Experience on the pitch.
                <span> Strength in the community.</span>
              </h2>
            </div>

            <div className="col-lg-5">
              <p>
                Jericho Grannies brings women together through football,
                friendship and community. This is a team where every player
                has a story and every match is another opportunity to celebrate
                the game.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="squad-section page-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="section-label">THE SQUAD</div>
              <h2>Our Players</h2>
            </div>

            <span className="squad-status">
              <i className="bi bi-circle-fill"></i>
              Official profiles coming soon
            </span>
          </div>

          <div className="squad-placeholder">
            <div className="squad-placeholder-icon">
              <i className="bi bi-people-fill"></i>
            </div>

            <div>
              <div className="section-label">SQUAD PROFILES</div>

              <h3>
                The women who wear the Jericho Grannies shirt.
              </h3>

              <p>
                Official player names, photographs, positions and squad
                numbers will be published here once the team's information is
                ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <div className="values-heading">
            <div className="section-label">WHAT WE STAND FOR</div>

            <h2>
              More than
              <span> football.</span>
            </h2>
          </div>

          <div className="row g-4">
            {teamValues.map((value, index) => (
              <div className="col-md-4" key={value.title}>
                <article className="team-value-card">
                  <div className="team-value-number">
                    0{index + 1}
                  </div>

                  <div className="team-value-icon">
                    <i className={`bi ${value.icon}`}></i>
                  </div>

                  <h3>{value.title}</h3>

                  <p>{value.text}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="team-cta page-section">
        <div className="container">
          <div className="team-cta-panel">
            <div>
              <div className="section-label">FOLLOW THE JOURNEY</div>

              <h2>
                See the Grannies
                <span> in action.</span>
              </h2>

              <p>
                Follow fixtures, results, stories and moments from the team.
              </p>
            </div>

            <div className="team-cta-actions">
              <Link to="/matches" className="btn btn-light-custom">
                View Matches
                <i className="bi bi-arrow-right"></i>
              </Link>

              <Link to="/gallery" className="btn btn-outline-light-custom">
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default TeamPage
