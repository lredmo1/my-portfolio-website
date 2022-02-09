import art_thumbnail from "./images/art_images/Art_Portfolio_Thumbnail.png";
import baking_thumbnail from "./images/baking_images/Cake_Portfolio_Thumbnail.png";
import code_thumbnail from "./images/coding_images/Coding_Portfolio_Thumbnail.jpg";

function Home() {
  return (
    <>
      <h1 id="home-title">The ABC Creative</h1>
      <h2>A Digital Portfolio of Creations by Lisa Primeaux-Redmond</h2>
      <div id="home-thumbnails">
        <div className="item-wrapper">
          <div className="img__wrap-home">
            <a href="/art">
              <img src={art_thumbnail} className="item-home" />
              <p class="img__description">ART</p>
            </a>
          </div>
          <div className="img__wrap-home">
            <a href="/baking">
              <img src={baking_thumbnail} className="item-home" />
              <p class="img__description">Baking</p>
            </a>
          </div>
          <div className="img__wrap-home">
            <a href="/code">
              <img src={code_thumbnail} className="item-home" />
              <p class="img__description">Code</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
