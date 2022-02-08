import art_thumbnail from "./images/art_images/Art_Portfolio_Thumbnail.png";
import baking_thumbnail from "./images/baking_images/Cake_Portfolio_Thumbnail.png";
import code_thumbnail from "./images/coding_images/Coding_Portfolio_Thumbnail.jpg";

function Home() {
    return (
    <>
        <h1>The ABC Creative</h1>
        <h2>A Digital Portfolio by Lisa Primeaux-Redmond</h2>
        <h3>A place for what I create</h3>
        <a href="/art"><img src={art_thumbnail} width="500" /></a>
        <a href="/baking"><img src={baking_thumbnail} width="500" /></a>
        <a href="/code"><img src={code_thumbnail} width="500" /></a>
    </>
    )
}
    
export default Home;