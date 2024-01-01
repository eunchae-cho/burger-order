'use client'

import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {Menu, menuListState, menuSelector, menuTabState} from "@/lib/states/menu";
import {useEffect} from "react";
import {menuApi} from "@/lib/apis/menuApi";
import uuid from "react-uuid";
import {Order, orderState} from "@/lib/states/order";
import toast from "react-hot-toast";
import {successToast} from "@/lib/utils/toastUtils";

const MenuList = () => {
    const setMenus = useSetRecoilState(menuListState)
    const menuTab = useRecoilValue(menuTabState)
    const selectedMenus = useRecoilValue(menuSelector(menuTab))
    const [order, setOrder] = useRecoilState(orderState)

    useEffect(() => {
        menuApi.getAll()
            .then(res => {
                if (res.status === 200 && res.data.code ===  '20000') {
                    setMenus(res.data.data)
                }
            })
    }, []);

    const handleClickAdd = (item: Menu) => {
        const addOrder: Order = {
            menus: [...order.menus, item],
            amount: order.amount + 1,
            total: order.total + item.price
        }
        setOrder(addOrder)
        successToast('주문이 담겼습니다.')
    }

    return (
        <div className="grid grid-cols-3 gap-10">
            {selectedMenus.map(item => (
                <div key={uuid()} className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={item.imageUrl} alt="Images" /></figure>
                    <div className="card-body justify-between">
                        <article className="prose">
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                        </article>
                        <div className="flex gap-2 justify-between">
                            <p className="self-center">{item.price} 원</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary" onClick={() => handleClickAdd(item)}>담기</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MenuList