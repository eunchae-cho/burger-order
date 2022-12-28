import defaultInstance from '../utils/axios'

const getTest = () => {
    return defaultInstance({
        method: 'get',
        url: '/api/home'
    })
}

export {
    getTest
}