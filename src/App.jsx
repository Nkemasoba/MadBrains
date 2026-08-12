
import Workflow from "./Components/Workflow";
import PreferredListings from "./Components/PreferredListings";
import Ratings from "./Components/Ratings";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Workflow />
        <Ratings/>
        <PreferredListings />
      </div>
    </>
  );
};

export default App;