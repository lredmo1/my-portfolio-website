import music from "./images/music-thumbnail.JPG";
import trivia from "./images/trivia-thumbnail.JPG";
import planner from "./images/planner-thumbnail.JPG";
import shelter from "./images/shelter-thumbnail.JPG";
import sketch from "./images/coding_images/comingsoon.jpg";

function Code() {
  return (
    <>
      <h1>Code</h1>
      <h2>a collection of works in javascript, react, ruby, and rails</h2>
      <div className="code-wrapper">
        <div className="code-card">
          <h3>Music Lessons</h3>
          <img src={music} className="website-thumbnail"/>
          <h5>
            A React frontend, Rails backend app that leverages Vexflow library
            and Soundfont Player to create a digital instrument and teaching
            tool. This edtech app is designed to be used in introduction to
            music or music theory classes in schools lacking instruments and
            other necessary resources for students.
          </h5>
          <ul>
            <li>
              <a href="https://music-lessons-app.herokuapp.com/">
                Live Website
              </a>
            </li>
            <li>
              <a href="https://vimeo.com/662859653">Video Demo</a>
            </li>
            <li>
              <a href="https://github.com/lredmo1/musiclessons">Github Repo</a>
            </li>
          </ul>
        </div>

        <div className="code-card">
          <h3>Cookie Monster In Danger!</h3>
          <img src={trivia} className="website-thumbnail"/>
          <h5>
            An interactive trivia game created using HTML, CSS, and vanilla
            Javascript, and an external trivia API. Users select a category and
            difficulty level to view a question and then input their answers
            below. Correct answers advance the blue monster toward a plate of
            cookies, and the game is won when he reaches his goal.
          </h5>
          <ul>
            <li>
              <a href="https://monster-in-danger-695bb.web.app/">
                Live Website
              </a>
            </li>
            <li>
              <a href="https://vimeo.com/667545278">Video Demo</a>
            </li>
            <li>
              <a href="https://github.com/lredmo1/cookie-monster-in-jeopardy">
                Github Repo
              </a>
            </li>
            <li>
              <a href="https://javascript.plainenglish.io/a-beginners-guide-to-the-levenshtein-distance-algorithm-part-1-d581fef7588f">
                Associated Blog Series
              </a>
            </li>
          </ul>
        </div>

        <div className="code-card">
          <h3>Productivity Planner</h3>
          <img src={planner} className="website-thumbnail"/>
          <h5>
            A React single page app using components, props, state management,
            client-side routing, and a json-server. This app is a planner with a
            weekly/monthly/daily calendar for scheduling, a to do list section,
            and a place for daily focus and gratitude entries.
          </h5>
          <ul>
            <li>
              <a href="https://personal-weekly-planner.web.app/">
                Live Website
              </a>
            </li>
            <li>
              <a href="https://vimeo.com/669611459">Video Demo</a>
            </li>
            <li>
              <a href="https://github.com/lredmo1/Phase-2-project---Productivity-App">
                Github Repo Front End
              </a>
            </li>
            <li>
              <a href="https://github.com/lredmo1/weekly-personal-planner-backend">
                Github Repo Back End
              </a>
            </li>
          </ul>
        </div>

        <div className="code-card">
          <h3>The Best Friend Business</h3>
          <img src={shelter} className="website-thumbnail"/>
          <h5>Coming Soon</h5>
          <ul>
            <li>
              <a href="">Live Website (Coming Soon)</a>
            </li>
            <li>
              <a href="https://vimeo.com/667555457">Video Demo</a>
            </li>
            <li>
              <a href="https://github.com/lredmo1/pet-shelter-front">
                Github Repo Front End
              </a>
            </li>
            <li>
              <a href="https://github.com/lredmo1/phase-3-sinatra-react-project">
                Github Repo Back End
              </a>
            </li>
          </ul>
        </div>

        <div className="code-card">
          <h3>Fetch-A-Sketch</h3>
          <img src={sketch} className="website-thumbnail"/>
          <h5>Coming Soon</h5>
          <ul>
            <li>
              <a href="">Live Website (Coming Soon)</a>
            </li>
            <li>
              <a href="">Video Demo (Coming Soon)</a>
            </li>
            <li>
              <a href="https://github.com/lredmo1/gestate">Github Repo</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Code;
