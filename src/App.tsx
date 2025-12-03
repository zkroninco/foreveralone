import './App.css'

function App() {
  return (
    <div>
      <div id="header">
        <div id="header-img" aria-label="Reddit Home"></div>
        <ul className="tab-menu">
          <li className="selected"><a href="#">hot</a></li>
          <li><a href="#">new</a></li>
          <li><a href="#">rising</a></li>
          <li><a href="#">controversial</a></li>
          <li><a href="#">top</a></li>
          <li><a href="#">gilded</a></li>
        </ul>
      </div>
      <div className="content">
        <div className="main-content">
          <div className="post">
            <div className="voting">
              <div className="arrow up"></div>
              <div className="score">1337</div>
              <div className="arrow down"></div>
            </div>
            <div className="thumbnail">
              <img src="https://i.imgur.com/626O22F.jpeg" alt="Forever Alone" style={{ width: '70px', height: '70px' }} />
            </div>
            <div className="entry">
              <p className="title">
                <a href="#">I made this face for a rage comic... now it's everywhere.</a>
              </p>
              <p className="tagline">
                submitted 12 hours ago by <a href="#" className="author">berandito</a> to <a href="#" className="subreddit">r/fffffffuuuuuuuuuuuu</a>
              </p>
              <ul className="buttons">
                <li><a href="#">312 comments</a></li>
                <li><a href="#">share</a></li>
                <li><a href="#">save</a></li>
                <li><a href="#">hide</a></li>
                <li><a href="#">report</a></li>
              </ul>
            </div>
          </div>

          <div className="post">
            <div className="voting">
              <div className="arrow up"></div>
              <div className="score">420</div>
              <div className="arrow down"></div>
            </div>
            <div className="thumbnail">
            </div>
            <div className="entry">
              <p className="title">
                <a href="#">[AMA] I'm the guy who drew the 'Forever Alone' face. AMA.</a>
              </p>
              <p className="tagline">
                submitted 2 hours ago by <a href="#" className="author">berandito</a> to <a href="#" className="subreddit">r/IAmA</a>
              </p>
              <ul className="buttons">
                <li><a href="#">1024 comments</a></li>
                <li><a href="#">share</a></li>
                <li><a href="#">save</a></li>
                <li><a href="#">hide</a></li>
                <li><a href="#">report</a></li>
              </ul>
            </div>
          </div>

        </div>
        <div className="sidebar">
          {/* Sidebar content will go here */}
        </div>
      </div>
    </div>
  )
}

export default App;