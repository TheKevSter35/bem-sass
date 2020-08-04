import React from 'react';
import Nav from '../partials/Nav';
function App() {
return (
<div id="page">
  <Nav />
  <main>
    <section class="overview">
      <div class="container">
        <ul>
          <li>
            <div class="content" id="luna" >
              <article class="content__detail">
                <h2>
                  Schoolproject Luna
                </h2>
                  <a href="/" alt="test">Link</a>
              </article>
            </div>
          </li>
           <li>
            <div class="content" id="cttr">
              <article class="content__detail">
                <h2>
                  CSS to the rescue
                </h2>
                <a href="/" alt="test">Link</a>
              </article>
            </div>
          </li>
          <li>
            <div class="content" id="projectweb">
              <article class="content__detail">
                <h2>
                  Browser technologies
                </h2>
                <a href="/" alt="test">Link</a>
              </article>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  </main>
</div>
);
}

export default App;