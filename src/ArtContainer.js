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
    <img src={cleopatra} className="item"/>
    <img src={hirono} className="item"/>
    <img src={oconnor} className="item"/>
    <img src={williams} className="item"/>
    <img src={rbg} className="item"/>
    <img src={tugboat} className="item"/>
    <img src={moon} className="item"/>
    <img src={sun} className="item"/>
    </div>
    </>
    )
}
  
export default Art;