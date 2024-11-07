import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Nav from "./Pages/Nav";

function App() {
  AOS.init();
  return (
    <div>
      <Nav />
    </div>
  );
}

export default App;
