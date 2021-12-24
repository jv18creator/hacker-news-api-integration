import { CssBaseline } from '@material-ui/core';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import UserInfoPage from './pages/UserInfoPage';
import NewestNewsPage from './pages/NewestNewsPage';
import AskPage from './pages/AskPage';
import ShowStoryPage from './pages/ShowStoryPage';
import JobStoryPage from './pages/JobStoryPage';
import SignIn from './pages/LoginSubmitPage';
import SignUp from './pages/SingUp';

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
                    <Route path="/ask">
                        <AskPage />
                    </Route>
                    <Route path="/show">
                        <ShowStoryPage />
                    </Route>
                    <Route path="/jobs">
                        <JobStoryPage />
                    </Route>
                    <Route path="/submit">
                        <SignIn />
                    </Route>
                    <Route path="/login">
                        <SignIn />
                    </Route>
                    <Route path="/sign-up">
                        <SignUp />
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
