import React, {useState} from "react";
import './App.css';
import img1 from './components/images/longsleeve.png';
import img2 from './components/images/logo.png';
import img3 from './components/images/price.png';
import img4 from './components/images/Frame 7.png';
import img5 from './components/images/text3.png';
import img6 from './components/images/fabric.png';
import img7 from './components/images/sleeve.png';
import img8 from './components/images/collar.png';
import img9 from './components/images/cuff.png';
import img10 from './components/images/placket.png';
import img11 from './components/images/pocket.png';
import img12 from './components/images/backdetails.png';
import img13 from './components/images/backyoke.png';
import img14 from './components/images/bottomcut.png';
import img15 from './components/images/button.png';
import img16 from './components/images/buttonthread.png';
import img17 from './components/images/contrasts.png';
import img18 from './components/images/embroidery.png';
import img19 from './components/images/handkerchief.png';
import img20 from './components/images/continue.png';
import img21 from './components/images/Short Sleeve.png';
import img22 from './components/images/Long Sleeve.png';
import img23 from './components/images/shortsleeve.png';

const App = () => {
  // State variables to control the visibility of sleeve options
  const [showSleeveOptions, setShowSleeveOptions] = useState(false);
  const [selectedSleeveOption, setSelectedSleeveOption] = useState(img1); // Default to long sleeve

  // Function to handle click on sleeve options
  const handleSleeveOptionClick = (option) => {
    // Set the selected option based on the clicked option
    if (option === "short") {
      setSelectedSleeveOption(img23); // Set the short sleeve image source
    } else if (option === "long") {
      setSelectedSleeveOption(img1); // Set the long sleeve image source
    }
    setShowSleeveOptions(false); // Hide the options
  };

  // Function to handle click on the sleeve image
  const handleSleeveClick = () => {
    setShowSleeveOptions(prevShowSleeveOptions => !prevShowSleeveOptions); // Toggle the visibility of options
  };

  const handleCut = () => {
    console.log("Cut action performed");
    // Add your cut logic here
  };
  

  return (
    <div className="container">
      <div className="sidebar">
        <div className="sidebar-content">
          <div className="pn">
            <p>Product Name</p>
          </div>
          <div className="fabric">
            <img src={img6} />
            <p>Fabric</p>
          </div>
          <div className="sleeve" onClick={handleSleeveClick}>
            <img src={img7} />
            <p>Sleeve</p>

            {showSleeveOptions && (
  <div className="sleeve-options-container">
    <div className="cut-button" onClick={handleCut}>Cut</div> {/* Add the cut button */}
    <div className="sleeve-option" onClick={() => handleSleeveOptionClick("long")}>
      <img src={img22} alt="Long Sleeve" />
      <p>Long Sleeve</p>
    </div>
    <hr className="divider" />
    <div className="sleeve-option" onClick={() => handleSleeveOptionClick("short")}>
      <img src={img21} alt="Short Sleeve" />
      <p>Short Sleeve</p>
          </div>
        </div>
      )}
          </div>
          <div className="collar">
            <img src={img8} />
            <p>Collar</p>
          </div>
          <div className="cuff">
            <img src={img9} />
            <p>Cuff</p>
          </div>
          <div className="placket">
            <img src={img10} />
            <p>Placket</p>
          </div>
          <div className="pocket">
            <img src={img11} />
            <p>Pocket</p>
          </div>
          <div className="backdetails">
            <img src={img12} />
            <p>Back Details</p>
          </div>
          <div className="backyoke">
            <img src={img13} />
            <p>Back Yoke</p>
          </div>
          <div className="bottomcut">
            <img src={img14} />
            <p>Bottom Cut</p>
          </div>
          <div className="button">
            <img src={img15} />
            <p>Button</p>
          </div>
          <div className="buttonthread">
            <img src={img16} />
            <p>Button Thread</p>
          </div>
          <div className="contrasts">
            <img src={img17} />
            <p>Contrasts</p>
          </div>
          <div className="embroidery">
            <img src={img18} />
            <p>Embroidery</p>
          </div>
          <div className="handkerchief">
            <img src={img19} />
            <p>Handkerchief</p>
          </div>
          <div className="continue">
            <img src={img20} />
            <p>Continue</p>
          </div>
        </div>
      </div>

        
          <div className="text1">
            <img src={img3} alt="Image 3" />
          </div>
            <div className="text2">
              <img src={img4} alt="Image 4" />
            </div>
                <div className="text3">
                  <img src={img5} alt="Image 5" />
                </div>

      <div className="image2-container">
        <img src={img2} alt="Image 2" />
      </div>

      <div className="main-display">
        {selectedSleeveOption === img1 && <img src={selectedSleeveOption} alt="Long Sleeve" className="long-sleeve" />}
        {selectedSleeveOption === img23 && <img src={selectedSleeveOption} alt="Short Sleeve" className="short-sleeve" />}
      </div>  
    </div>
  );
}

export default App;
