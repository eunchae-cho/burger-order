import Layout from "../../components/Layout";
import Order from "../../components/Order";
import {useEffect, useState} from "react";
import {isNotEmpty} from "../../utils/ObjectUtils";
import {useLocation} from "react-router-dom";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "../../utils/reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

const Ordering = () => {
    const location = useLocation();
    const [useType, setUseType] = useState('');

    useEffect(() => {
        if (isNotEmpty(location.state)) {
            setUseType(location.state)
        }
    })

    return (
        <Provider store={store}>
            <Layout type={useType}>
                <Order />
            </Layout>
        </Provider>
    );
}

export default Ordering;