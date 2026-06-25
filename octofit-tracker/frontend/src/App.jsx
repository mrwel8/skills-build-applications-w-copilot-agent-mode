import './App.css'

function App() {
  return (
    <main className="container py-5">
      <div className="row align-items-center g-4">
        <div className="col-lg-7">
          <h1 className="display-5 fw-bold">OctoFit Tracker</h1>
          <p className="lead text-muted">
            A modern multi-tier fitness platform for logging workouts, building teams,
            and tracking progress in real time.
          </p>
          <div className="d-flex gap-3">
            <a className="btn btn-primary btn-lg" href="#features">
              Explore features
            </a>
            <a className="btn btn-outline-secondary btn-lg" href="http://localhost:8000/api/health">
              Check API
            </a>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <h2 className="h4">Ready for your next workout</h2>
              <p className="text-muted mb-0">
                Connect the React frontend to the Express API and MongoDB data tier as
                you continue building OctoFit.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section id="features" className="row mt-5 g-4">
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h3 className="h5">Activity Tracking</h3>
              <p className="text-muted mb-0">Log workouts and monitor your daily performance.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h3 className="h5">Team Challenges</h3>
              <p className="text-muted mb-0">Create teams and compete on leaderboards.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h3 className="h5">Smart Suggestions</h3>
              <p className="text-muted mb-0">Get personalized plans based on your activity.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
