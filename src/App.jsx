
import Workflow from "./Components/Workflow";
import Ratings from "./Components/Ratings";
import Navbar from "./Components/Navbar";
import Testi from "./Components/Testi";
function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Workflow />
       <Ratings/>
       <Testi/>
      </div>
    </>
  );
};

export default App;