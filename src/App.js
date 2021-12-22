import { Container, CssBaseline, Typography } from "@material-ui/core";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import Footer from "./Components/Navbar/Footer.js/Footer";

function App() {
  return (
    <>
      <Router>
        <CssBaseline />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
