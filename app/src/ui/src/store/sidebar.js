import {sidebarType} from "../utils/typeHandler/sidebarType";

const initialState = {
    open: false
};

const sidebar = (state = initialState, action) => {
    switch (action.type) {
        case sidebarType.SET_OPEN:
            return state, { open : action.open }
        default:
            return state;
    }
};

export default sidebar;