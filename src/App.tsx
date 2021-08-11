import './App.css';
import TransactionSearchPage from './pages/TransactionSearch';
// import TransactionDetailsPage from './pages/TransactionDetails';
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";

const App = () => {
  const location = useLocation();
  // const background = location.state && location.state.background;

  return (
    <>
      <Switch location={location}>
        <Route exact path='/' component={TransactionSearchPage} />
      </Switch>

      {/* { background && <Route path='/character/:id' component={TransactionDetailsPage} />} */}
    </>
  );
};

export default App;
