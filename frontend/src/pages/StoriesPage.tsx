import { Link } from 'react-router-dom'

const storyCategories = [
  {
    icon: 'bi-journal-richtext',
    title: 'Team Stories',
    text: 'The people, experiences and friendships that make Jericho Grannies special.',
  },
  {
    icon: 'bi-trophy-fill',
    title: 'Match Reports',
    text: 'Follow the action, results and memorable moments from match day.',
  },
  {
    icon: 'bi-people-fill',
    title: 'Community',
    text: 'Stories about football, connection and the wider community around the team.',
  },
]

function StoriesPage() {
  return (
    <main className="stories-page">
      <section className="inner-hero stories-hero">
        <div className="hero-pattern"></div>

        <div className="container">
          <div className="section-label">MORE THAN FOOTBALL</div>

          <h1>
            Our
            <em> Stories.</em>
          </h1>

          <p>
            The people, memories and moments behind the Jericho Grannies
            journey.
          </p>
        </div>
      </section>

      <section className="stories-intro page-section">
        <div className="container">
          <div className="stories-intro-grid">
            <div>
              <div className="section-label">THE STORY OF US</div>

              <h2>
                Every player has
                <span> a story.</span>
              </h2>
            </div>

            <p>
              Football is more than what happens for 90 minutes. It is about
              the people we meet, the friendships we build and the memories
              we create along the way.
            </p>
          </div>
        </div>
      </section>

      <section className="featured-story-section page-section">
        <div className="container">
          <div className="featured-story">
            <div className="featured-story-visual">
              <div className="featured-story-mark">
                <i className="bi bi-book-half"></i>
              </div>

              <span>JG</span>
            </div>

            <div className="featured-story-content">
              <div className="section-label">FEATURED STORY</div>

              <h2>
                The Jericho Grannies story is waiting to be told.
              </h2>

              <p>
                This space will become the home of the team's defining
                stories, from its beginnings and the women behind it to the
                moments that have shaped its journey.
              </p>

              <div className="story-meta">
                <span>
                  <i className="bi bi-clock"></i>
                  Story archive
                </span>

                <span>
                  <i className="bi bi-people"></i>
                  Team & community
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="story-categories-section page-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="section-label">EXPLORE</div>
              <h2>Stories from the journey</h2>
            </div>
          </div>

          <div className="row g-4">
            {storyCategories.map((category, index) => (
              <div className="col-md-4" key={category.title}>
                <article className="story-category-card">
                  <div className="story-category-top">
                    <span>0{index + 1}</span>

                    <div className="story-category-icon">
                      <i className={`bi ${category.icon}`}></i>
                    </div>
                  </div>

                  <h3>{category.title}</h3>

                  <p>{category.text}</p>

                  <span className="story-coming-soon">
                    Content coming soon
                  </span>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stories-cta">
        <div className="container">
          <div className="stories-cta-panel">
            <div>
              <div className="section-label">KEEP EXPLORING</div>

              <h2>
                See the women
                <span> behind the stories.</span>
              </h2>

              <p>
                Discover the team and follow the people who make Jericho
                Grannies what it is.
              </p>
            </div>

            <Link to="/team" className="btn btn-light-custom">
              Meet the Team
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default StoriesPage
