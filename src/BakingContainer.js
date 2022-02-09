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
      <h2>
        A collection of cakes and more made with food-allergy-friendly
        ingredients
      </h2>
      <div className="item-wrapper">
          <div className="img__wrap">
            <img src={first_bday} className="item" />
            <p class="img__description">Baby's first birthday <br></br> Vanilla <br></br> Gluten free.</p>
          </div>
          <div className="img__wrap">
            <img src={miller_wedding} className="item" />
            <p class="img__description">Wedding Cake <br></br> Almond <br></br> Top Layer Gluten and dairy free.</p>
          </div>
          <div className="img__wrap">
            <img src={shr_wedding} className="item" />
            <p class="img__description">Wedding Cake <br></br> Earl Gray and Lavendar</p>
          </div>
          <div className="img__wrap">
            <img src={caro_wedding} className="item" />
            <p class="img__description">Wedding Cake <br></br> Cream Cheese Carrot Cake</p>
          </div>
          <div className="img__wrap">
            <img src={shr_cake} className="item" />
            <p class="img__description">Engagement Party Cake <br></br> Hazelnut Cardamom Carrot Cake <br></br>  Gluten free.</p>
          </div>
          <div className="img__wrap">
            <img src={mermaid_cupcakes} className="item" />
            <p class="img__description">Mermaid Cupcakes <br></br>  Cinnamon Vanilla <br></br> Gluten free.</p>
          </div>
          <div className="img__wrap">
            <img src={flower_cupcakes} className="item" />
            <p class="img__description">Floral Cupcakes <br></br>  Chocolate <br></br> Gluten free.</p>
          </div>
          <div className="img__wrap">
            <img src={bday_Cake} className="item" />
            <p class="img__description">Birthday Cake<br></br>  Chocolate Cinnamon Roll <br></br> Gluten free.</p>
          </div>
        </div>
    </>
  );
}

export default Baking;
