'use client'
import {useRecoilState} from "recoil";
import {menuTabState, MenuType} from "@/lib/states/menu";

const MenuTab = () => {
    const [title, setTitle] = useRecoilState(menuTabState)

    return (
        <div role="tablist" className="tabs tabs-boxed py-1.5 mb-10">
            <a role="tab" className={`tab ${title === MenuType.BURGER && 'tab-active'}`} onClick={() => setTitle(MenuType.BURGER)}>
                <article className="prose font-bold">
                    <h2>버거</h2>
                </article>
            </a>
            <a role="tab" className={`tab ${title === MenuType.SIDE && 'tab-active'}`} onClick={() => setTitle(MenuType.SIDE)}>
                <article className="prose font-bold">
                <h2>사이드</h2>
            </article>
            </a>
            <a role="tab" className={`tab ${title === MenuType.DRINK && 'tab-active'}`} onClick={() => setTitle(MenuType.DRINK)}>
                <article className="prose font-bold">
                    <h2>음료</h2>
                </article>
            </a>
        </div>
    )
}

export default MenuTab