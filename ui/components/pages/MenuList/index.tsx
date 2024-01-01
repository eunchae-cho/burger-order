'use client'

import {useRecoilValue, useSetRecoilState} from "recoil";
import {menuListState, menuSelector, menuTabState} from "@/lib/states/menu";
import {useEffect} from "react";
import {menuApi} from "@/lib/apis/menuApi";
import uuid from "react-uuid";

const MenuList = () => {
    const setMenus = useSetRecoilState(menuListState)
    const menuTab = useRecoilValue(menuTabState)
    const selectedMenus = useRecoilValue(menuSelector(menuTab))

    useEffect(() => {
        menuApi.getAll()
            .then(res => {
                if (res.status === 200 && res.data.code ===  '20000') {
                    setMenus(res.data.data)
                }
            })
    }, []);

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
                                <button className="btn btn-primary">담기</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MenuList