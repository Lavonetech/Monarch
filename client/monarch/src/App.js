import "./App.css";
import logo from "./assets/logo.png";
import img1 from "./assets/img1.png";

function App() {
  return (
    <div className="section-container">
      <div className="flex flex-col md:flex-row-reverse justify-between">
        {/* Right */}
        <div className="md:w-5/6 h-screen bg-gradient-to-r from-[#BBBBBB] via-white to-[#BBBBBB]">
          <div className="flex flex-col md:flex-row justify-between">

            {/*Logo */}
            <div className="max-w-sm py-7 px-7 mx-auto">
              <img className="w-24 md:w-auto" src={logo} alt="" />
            </div>

            {/*Main Images */}
            <div className="flex flex-1 justify-center ">
              <img className="md:max-w-md mx-auto" src={img1} alt="" />
            </div>

            {/*Main Text */}
            <div className="py-20 px-20 flex flex-col items-end">
                <h1 className="text-5xl font-bold">$110</h1>
              </div>
          </div>
        </div>

        {/* Left */}
        <div className="md:w-1/6 space-y-7 px-4 py-6 bg-black flex flex-col items-center overflow-y-auto max-h-screen "></div>
      </div>
    </div>
  );
}

export default App;
