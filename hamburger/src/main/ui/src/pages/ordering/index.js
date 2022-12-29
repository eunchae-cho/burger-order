import Layout from "../../components/Layout";
import Order from "../../components/Order";
import {useEffect, useState} from "react";
import {isNotEmpty} from "../../utils/ObjectUtils";
import {useLocation} from "react-router-dom";

const Ordering = () => {
    const location = useLocation();
    const [useType, setUseType] = useState('');

    useEffect(() => {
        if (isNotEmpty(location.state)) {
            setUseType(location.state)
        }
    })

    return (
        <Layout type={useType}>
            <Order />
        </Layout>
    );
}

export default Ordering;