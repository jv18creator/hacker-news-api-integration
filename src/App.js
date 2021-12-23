import { CssBaseline } from '@material-ui/core';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import UserInfoPage from './pages/UserInfoPage';
import NewestNewsPage from './pages/NewestNewsPage';

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
                    <Route exact path="/newest">
                        <NewestNewsPage />
                    </Route>
                    <Route path="/:id">
                        <UserInfoPage />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </>
    );
}

export default App;
