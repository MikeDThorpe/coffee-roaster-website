import './App.scss';
import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, MobileNavigation } from './components/global'
import { HomePage, AboutPage, SubscriptionPage } from './pages'

function App() {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <div className="App">
      <Router>
        <Header toggleNav={() => setMobileNav(!mobileNav)}/>
        <MobileNavigation toggleNav={() => setMobileNav(!mobileNav)} show={mobileNav}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/subscription" component={SubscriptionPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
