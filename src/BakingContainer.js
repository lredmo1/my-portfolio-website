import cleopatra from "./images/baking_images/IMG_1768.JPG";
import hirono from "./images/baking_images/IMG_3475.JPG";
import oconnor from "./images/baking_images/IMG_4025.JPG";
import rbg from "./images/baking_images/IMG_4292.JPG";
import tugboat from "./images/baking_images/IMG_4401.JPG";
import moon from "./images/baking_images/IMG_4452.JPG";
import sun2 from "./images/baking_images/IMG_4820.JPG";
import sun3 from "./images/baking_images/IMG_9712.JPG";

function Baking() {
    return (
    <div>
    <h1>Baking</h1>
    <h2>a collection of cakes and more made with food-allergy-friendly ingredients</h2>
    <img src={cleopatra} width="200" height="300"/>
    <img src={hirono} width="200" height="300"/>
    <img src={oconnor} width="200" height="300"/>
    <img src={rbg} width="200" height="300"/>
    <img src={tugboat} width="200" height="300"/>
    <img src={moon} width="200" height="300"/>
    <img src={sun2} width="200" height="300"/>
    <img src={sun3} width="200" height="300"/>

    </div>
    )
}
  
export default Baking;