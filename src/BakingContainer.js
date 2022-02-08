import first_bday from "./images/baking_images/IMG_1768.JPG";
import miller_wedding from "./images/baking_images/IMG_3475.JPG";
import mermaid_cupcakes from "./images/baking_images/IMG_4025.JPG";
import flower_cupcakes from "./images/baking_images/IMG_4292.JPG";
import shr_cake from "./images/baking_images/IMG_4401.JPG";
import bday_Cake from "./images/baking_images/IMG_4452.JPG";
import shr_wedding from "./images/baking_images/IMG_4820.JPG";
import caro_wedding from "./images/baking_images/IMG_9712.JPG";

function Baking() {
    return (
    <>
    <h1>Baking</h1>
    <h2>a collection of cakes and more made with food-allergy-friendly ingredients</h2>
    <div className="item-wrapper">
    <img src={first_bday} className="item"/>
    <img src={miller_wedding} className="item"/>
    <img src={shr_wedding} className="item"/>
    <img src={caro_wedding} className="item"/>
    <img src={shr_cake} className="item"/>
    <img src={mermaid_cupcakes} className="item"/>
    <img src={flower_cupcakes } className="item"/>
    <img src={bday_Cake} className="item"/>
    </div>
    </>
    )
}
  
export default Baking;