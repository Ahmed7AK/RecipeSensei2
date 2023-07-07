import './App.css';
import Navbar from "./components/Navbar"
import Footer from './components/Footer';
import dphoto from "./images/desktop-picture.jpg"

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div id="body-div">
        <div id="body-pic-text-div">
          <img id="desktop-photo" src={dphoto} alt="Desktop Japanese Design"/>
          <div id="bg-text-div">
            <div id="bg-text-title">
              <p>What is <span id='red'>Recipe Sensei</span> ?</p>
            </div>
            <div id="bg-text-middle">
              <p>Recipe Sensei is a recipe website that is perfect for anyone who loves to cook or wants to try new and exciting recipes. The site generates random recipes for you to try, taking the hassle out of meal planning and giving you the opportunity to experiment with new flavors and ingredients.
 One of the great things about Recipe Sensei is that it offers a wide variety of recipes from around the world. Whether you are in the mood for a spicy Thai curry, a hearty Italian pasta dish, or a comforting bowl of Japanese ramen, you are sure to find something that will satisfy your cravings.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
