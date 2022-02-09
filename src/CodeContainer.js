import music from "./images/music-thumbnail.JPG";
import trivia from "./images/trivia-thumbnail.JPG";
import planner from "./images/planner-thumbnail.JPG";
import shelter from "./images/shelter-thumbnail.JPG";
import sketch from "./images/sketch-thumbnail.JPG";

function Code() {
  return (
    <>
      <h1>Code</h1>
      <h2>a collection of works in javascript, react, ruby, and rails</h2>
      <div className="code-wrapper">
        <div className="code-card">
          <h3>Music Lessons</h3>
          <a href="https://music-lessons-app.herokuapp.com/" target="_blank">
            <img src={music} className="website-thumbnail"/>
          </a>
          <h5>
            A React frontend, Rails backend app that leverages Vexflow library
            and Soundfont Player to create a digital instrument and teaching
            tool. This edtech app is designed to be used in introduction to
            music or music theory classes in schools lacking instruments and
            other necessary resources for students.
          </h5>
          <ul>
            <li>
              <a href="https://music-lessons-app.herokuapp.com/" target="_blank">
                Live Website
              </a>
            </li>
            <li>
              <a href="https://vimeo.com/662859653" target="_blank">Video Demo</a>
            </li>
            <li>
              <a href="https://github.com/lredmo1/musiclessons" target="_blank">Github Repo</a>
            </li>
          </ul>
        </div>

        <div className="code-card">
          <h3>Cookie Monster In Danger!</h3>
          <a href="https://monster-in-danger-695bb.web.app/" target="_blank">
            <img src={trivia} className="website-thumbnail"/>
          </a>
          <h5>
            An interactive trivia game created using HTML, CSS, and vanilla
            Javascript, and an external trivia API. Users select a category and
            difficulty level to view a question and then input their answers
            below. Correct answers advance the blue monster toward a plate of
            cookies, and the game is won when the monster reaches his goal.
          </h5>
          <ul>
            <li>
              <a href="https://monster-in-danger-695bb.web.app/" target="_blank">
                Live Website
              </a>
            </li>
            <li>
              <a href="https://vimeo.com/667545278" target="_blank">Video Demo</a>
            </li>
            <li>
              <a href="https://github.com/lredmo1/cookie-monster-in-jeopardy" target="_blank">
                Github Repo
              </a>
            </li>
            <li>
              <a href="https://javascript.plainenglish.io/a-beginners-guide-to-the-levenshtein-distance-algorithm-part-1-d581fef7588f" target="_blank">
                Associated Blog Series
              </a>
            </li>
          </ul>
        </div>

        <div className="code-card">
          <h3>Productivity Planner</h3>
          <a href="https://personal-weekly-planner.web.app/" target="_blank">
            <img src={planner} className="website-thumbnail"/>
          </a>
          <h5>
            A React single page app using components, props, state management,
            client-side routing, a json-server, and FullCalendar library. This app is a planner with a
            weekly/monthly/daily calendar for scheduling, a to do list section,
            and a place for daily focus and gratitude entries.
          </h5>
          <ul>
            <li>
              <a href="https://personal-weekly-planner.web.app/" target="_blank">
                Live Website
              </a>
            </li>
            <li>
              <a href="https://vimeo.com/669611459" target="_blank">Video Demo</a>
            </li>
            <li>
              <a href="https://github.com/lredmo1/Phase-2-project---Productivity-App" target="_blank">
                Github Repo Front End
              </a>
            </li>
            <li>
              <a href="https://github.com/lredmo1/weekly-personal-planner-backend" target="_blank">
                Github Repo Back End
              </a>
            </li>
          </ul>
        </div>

        <div className="code-card">
          <h3>The Best Friend Business</h3>
          <img src={shelter} className="website-thumbnail"/>
          <h5>A React frontend with a Sinatra API backend that uses Active Record to access and persist data to the database. This app is a management tool for animal shelter organizations that allows them to keep track of animals, adoption applications, and shelter data all in one location. </h5>
          <ul>
            <li>
              <a href="" target="_blank">Live Website (Coming Soon)</a>
            </li>
            <li>
              <a href="https://vimeo.com/667555457" target="_blank">Video Demo</a>
            </li>
            <li>
              <a href="https://github.com/lredmo1/pet-shelter-front" target="_blank">
                Github Repo Front End
              </a>
            </li>
            <li>
              <a href="https://github.com/lredmo1/phase-3-sinatra-react-project" target="_blank">
                Github Repo Back End
              </a>
            </li>
          </ul>
        </div>

        <div className="code-card">
          <h3>Fetch-A-Sketch</h3>
          <img src={sketch} className="website-thumbnail"/>
          <h5>A Rails frontend and React Backend application using HTML Canvas functionality. This is a drawing app that allows artists to create multi-layer drawings. User drawings are saved as a string of data and "redrawn" when viewed, allowing the user to continue editing after saving. </h5>
          <ul>
            <li>
              <a href="" target="_blank">Live Website (Coming Soon)</a>
            </li>
            <li>
              <a href=""  target="_blank">Video Demo (Coming Soon)</a>
            </li>
            <li>
              <a href="https://github.com/lredmo1/gestate" target="_blank">Github Repo</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Code;
