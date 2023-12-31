import Layout from "../../components/section/Layout";
import rootReducer from "../../utils/reducer";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

const Main = () => {
    return (
        <Provider store={store}>
            <Layout>
            </Layout>
        </Provider>
    );
}

export default Main;