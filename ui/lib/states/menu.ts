import {atom, selectorFamily} from "recoil";

/**
 * Menu
 * */
export interface Menu {
    id: number
    name: string
    type: string
    description: string,
    price: number,
    imageUrl: string
}

export const menuListState = atom<Menu[]>({
    key: 'menuListState',
    default: []
})

export const menuSelector = selectorFamily({
    key: 'menuSelector',
    get: (type) => ({get}) => {
        return get(menuListState).filter(value => value.type === type)
    }
})

/**
 * Menu Tab
 * */
export enum MenuType {
    BURGER = 'BURGER',
    DRINK = 'DRINK',
    SIDE = 'SIDE',
    SET = 'SET'
}

export const menuTabState = atom<string>({
    key: 'menuTabState',
    default: MenuType.BURGER
})