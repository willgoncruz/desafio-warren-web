import './App.css';
import TransactionSearchPage from './pages/TransactionSearch';
import TransactionDetailsPage from './pages/TransactionDetails';
import { LocationState } from './model/location';
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";

const App = () => {
  const location = useLocation<LocationState>();
  const background = location.state && location.state.background;

  return (
    <>
      <Switch location={background || location}>
        <Route exact path='/' component={TransactionSearchPage} />
      </Switch>

      { background && <Route path='/transaction/:id' component={TransactionDetailsPage} />}
    </>
  );
};

export default App;
