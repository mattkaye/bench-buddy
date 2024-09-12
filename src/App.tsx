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
    </>
  );
}

export default App;
