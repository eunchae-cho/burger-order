import {atom} from "recoil";
import {Menu} from "@/lib/states/menu";

export interface Order {
    menus: Menu[]
    amount: number
    total: number
}

export const initOrder = {
    menus: [],
    amount: 0,
    total: 0
}

export const orderState = atom<Order>({
    key: 'orderState',
    default: initOrder
})