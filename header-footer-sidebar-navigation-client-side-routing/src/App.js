import './App.css';
import { Switch, Route } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import SideBarNav from './Components/SideBarNav';
import HomePage from './Components/HomePage';
import NewsPage from './Components/NewsPage';
import UserPage from './Components/UserPage';
import SettingsPage from './Components/SettingsPage';

function App() {
  return (
    <div className="App">
      <Header />
      <SideBarNav />
      
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/news">
          <NewsPage />
        </Route>
        <Route path="/user">
          <UserPage />
        </Route>
        <Route path="/settings">
          <SettingsPage />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
