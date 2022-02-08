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
    <div>
    <h1>Art</h1>
    <h2>a collection of works in watercolor, acrylic, and oil pastel</h2>
    <img src={cleopatra} width="200" height="300"/>
    <img src={hirono} width="200" height="300"/>
    <img src={oconnor} width="200" height="300"/>
    <img src={williams} width="200" height="300"/>
    <img src={rbg} width="200" height="300"/>
    <img src={tugboat} width="200" height="300"/>
    <img src={moon} width="200" height="300"/>
    <img src={sun} width="200" height="300"/>
    </div>
    )
}
  
export default Art;