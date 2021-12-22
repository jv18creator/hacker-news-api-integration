import { Container, CssBaseline, Typography } from '@material-ui/core';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Welcome from './Components/Home/Welcome';
import Footer from './Components/Footer.js/Footer';
import HomePage from './Pages/HomePage';

function App() {
    return (
        <>
            <Router>
                <CssBaseline />
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </>
    );
}

export default App;
