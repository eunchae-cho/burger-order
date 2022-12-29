import Layout from "../../components/Layout";
import Home from "../../components/Home";
import rootReducer from "../../utils/reducer";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

const Main = () => {
    return (
        <Provider store={store}>
            <Layout>
                <Home />
            </Layout>
        </Provider>
    );
}

export default Main;