import React from "react";
import Cart from "@/components/common/Cart";

const Header = () => {
    return (
        <div className="navbar bg-base-100 w-full border border-b-base-300">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Oh Burger</a>
            </div>
            <div className="flex-none">
                <Cart />
            </div>
        </div>
    )
}

export default Header