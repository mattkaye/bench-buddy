import { IconContext } from "react-icons";
import { FaCircleChevronUp } from "react-icons/fa6";
import "./common.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ExerciseGrid from "./components/ExerciseGrid";

function App() {
  return (
    <>
      <Header />
      <main>
        <ExerciseGrid />
      </main>
      <Footer />
      <IconContext.Provider value={{ className: "backToTopIcon" }}>
        <a href='#' className='backToTop'>
          <FaCircleChevronUp />
        </a>
      </IconContext.Provider>
    </>
  );
}

export default App;
