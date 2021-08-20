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

    /**
     * Nessa configuração do React Router, temos apenas uma rota dentro do switch que sempre aparecerá (Search page)
     * Para controlar a visualização do modal de detalhes, é usada a variável 'background'
     *      Essa variável controla a localização da página, e exibe ao fundo (background) a última página que chamou o modal
     */
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
