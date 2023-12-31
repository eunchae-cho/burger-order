import defaultInstance from '../utils/axios'

const getAllBurgers = () => {
    return defaultInstance({
        method: 'get',
        url: '/burger'
    })
}

const getAllSides = () => {
    return defaultInstance({
        method: 'get',
        url: '/side'
    })
}

const getAllDrinks = () => {
    return defaultInstance({
        method: 'get',
        url: '/drink'
    })
}

export {
    getAllBurgers,
    getAllSides,
    getAllDrinks,
}