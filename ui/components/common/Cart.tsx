'use client'
import React from "react";
import {useRecoilState} from "recoil";
import {initOrder, orderState} from "@/lib/states/order";
import uuid from "react-uuid";
import Image from "next/image";
import {Menu} from "@/lib/states/menu";
import {successToast} from "@/lib/utils/toastUtils";

const Cart = () => {
    const [order, setOrder] = useRecoilState(orderState)

    const handleClickRemove = (item: Menu) => {
        // TODO
    }

    const handleSubmit = () => {
        setOrder(initOrder)
        successToast('주문이 완료되었습니다.')
    }

    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    <span className="badge badge-sm indicator-item">{order.amount}</span>
                </div>
            </div>
            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-72 bg-base-100 shadow">
                <div className="card-body">
                    <span className="font-bold text-lg">{order.amount} Items</span>

                    {/* 주문 내역 */}
                    <ul className="w-full rounded-box text-gray-700">
                        {order.menus.map(menu => (
                            <li key={uuid()} className="flex gap-2 flex-row">
                                <span className="font-bold text-md">{menu.name} {menu.price}원</span>
                                <Image width={14}
                                       height={14}
                                       src={'/images/minus.png'}
                                       alt="icon"
                                       className="cursor-pointer rounded-badge hover:bg-accent-content/15"
                                />
                            </li>
                        ))}
                    </ul>

                    <span className="text-info">Total: {order.total} 원</span>
                    <div className="card-actions">
                        <button className="btn btn-primary btn-block" onClick={handleSubmit}>주문하기</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart