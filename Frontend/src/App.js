import "./myApp.css";
import RightDivFirst from "./Compnents/RightDivFirst";
import RightDivSecond from "./Compnents/RightDivSecond";
import Footer from "./Compnents/Footer";
import LastPage from "./Compnents/lastPage";
import TalkToNoura from "./Compnents/talkToNoura";
function App() {
  return (
    <div className="App">
      <div className="left-div"></div>
      <div className="right-div">
        <div className="right-div-inner-first">
          <RightDivFirst />
        </div>
        {/* <div className="right-div-inner-second">
          <div className="topHeading">
            <h1>Solar Energy Solutions</h1>
            <p>Illuminate your homes with solar energy</p>
          </div>
          <div className="bottom">
            <button className="button button-1">Talk with Noura</button>
            <button className="button button-2">Learn more!</button>
          </div>
        </div> */}
        <RightDivSecond
          heading="How Noura Works?"
          desc="Interactive Guide"
          backgroundImage="./noura/i1.jpeg"
          color="black"
        />
        <RightDivSecond
          heading="Solar Energy Solutions"
          desc="Illuminate your homes with solar energy"
          backgroundImage="./noura/i2.jpeg"
          color="black"
        />
        <RightDivSecond
          heading="Electrical Vehicles"
          desc="Dive into the future with an electric car"
          backgroundImage="./noura/i3.jpeg"
          color="white"
        />
        <RightDivSecond
          heading="Eco-Friendly Products?"
          desc="Noura guides you to eco-friendly products"
          backgroundImage="./noura/i4.jpeg"
          color="black"
        />
        <RightDivSecond
          heading="Sustainability Made Simple?"
          desc="Breaking down the sustainability into actionable"
          backgroundImage="./noura/i5.jpeg"
          color="white"
        />
        <div className="right-div-inner-third blackOne"></div>
          <TalkToNoura />
        {/* <div className="right-div-inner-third blackOne">
          <div className="rightDivFirstText">
            <h1>noura</h1>
            <h2 className="headingBottom">Explore our services</h2>
            <h2 className="description">Witness the Transformative Power</h2>
            <h2 className="description">of sustainable energy</h2>
          </div>
          <Footer />
        </div> */}
        <div className="right-div-inner-third blueOne">
          <LastPage />
        </div>
      </div>
    </div>
  );
}

export default App;
