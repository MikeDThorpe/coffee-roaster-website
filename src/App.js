import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from './components'
import { HomePage, AboutPage, SubscriptionPage } from './pages'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
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
