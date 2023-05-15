import defaultInstance from '../utils/axios'

const getTest = () => {
    return defaultInstance({
        method: 'get',
        url: '/home'
    });
}

export {
    getTest
}