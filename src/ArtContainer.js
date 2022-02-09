import cleopatra from "./images/art_images/20180912_180721.jpg";
import hirono from "./images/art_images/20180928_102308.jpg";
import oconnor from "./images/art_images/20181108_153508.jpg";
import williams from "./images/art_images/20181209_124509.jpg";
import rbg from "./images/art_images/20190209_203547.jpg";
import tugboat from "./images/art_images/IMG_0684.JPG";
import moon from "./images/art_images/moon illustration photo.jpg";
import sun from "./images/art_images/sun illustration photo.jpg";

function Art() {
  return (
    <>
      <h1>Art</h1>
      <h2>a collection of works in watercolor, acrylic, and oil pastel</h2>
      <div className="item-wrapper">
        <div className="img__wrap">
          <img src={cleopatra} className="item" />
          <p class="img__description">This image looks super neat.</p>
        </div>
        <div className="img__wrap">
          <img src={hirono} className="item" />
          <p class="img__description">This image looks super neat.</p>
        </div>
        <div className="img__wrap">
          <img src={oconnor} className="item" />
          <p class="img__description">This image looks super neat.</p>
        </div>
        <div className="img__wrap">
          <img src={williams} className="item" />
          <p class="img__description">This image looks super neat.</p>
        </div>
        <div className="img__wrap">
          <img src={rbg} className="item" />
          <p class="img__description">This image looks super neat.</p>
        </div>
        <div className="img__wrap">
          <img src={tugboat} className="item" />
          <p class="img__description">This image looks super neat.</p>
        </div>
        <div className="img__wrap">
          <img src={moon} className="item" />
          <p class="img__description">This image looks super neat.</p>
        </div>
        <div className="img__wrap">
          <img src={sun} className="item" />
          <p class="img__description">This image looks super neat.</p>
        </div>
      </div>
    </>
  );
}

export default Art;
