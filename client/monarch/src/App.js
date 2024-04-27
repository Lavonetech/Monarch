import "./App.css";

function App() {
  return (
    <div className="section-container">
      <div className="flex flex-col md:flex-row-reverse justify-between">
        {/* Right */}
        <div className="md:w-5/6 h-screen bg-gradient-to-r from-[#BBBBBB] via-white to-[#BBBBBB]">
          <div className="flex flex-col md:flex-row justify-between"></div>
        </div>

        {/* Left */}
        <div className="md:w-1/6 space-y-7 px-4 py-6 bg-black flex flex-col items-center overflow-y-auto max-h-screen "></div>
      </div>
    </div>
  );
}

export default App;
