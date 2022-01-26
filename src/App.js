import Home from "./pages/Home";
import Footer from "./views/Layouts/Footer/Footer";
import { BrowserRouter as Router,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Home></Home>
      <Footer/>
    </Router>
  );
}

export default App;
