import {Button, Confirm, Container, Icon, Sidebar, Tab} from "semantic-ui-react";
import {useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";
import HorizontalSidebar from "./HorizontalSidebar";
import {useDispatch, useSelector} from "react-redux";
import {sidebarType} from "../utils/typeHandler/sidebarType";

const MAIN_URL = '/';

const panes = [
    { menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
    { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

const Order = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const visible = useSelector(state => state.sidebar.open)
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        if (location.pathname !== MAIN_URL) {
            setOpen(prevState => !prevState)
        }
    }

    const handleClose = () => {
        dispatch({ type: sidebarType.SET_OPEN, open: false})
    }

    return (
        <Sidebar.Pushable style={{ overflow: 'hidden' }}>
            {/* 장바구니 사이드바 */}
            <HorizontalSidebar
                animation='overlay'
                direction='right'
                visible={visible}
            />

            <Sidebar.Pusher dimmed={visible} onMouseDown={handleClose}>
                {/* 뒤로가기 버튼 */}
                <div className='btn-back-div'>
                    <Button id='btn-back' onClick={handleClick}>
                        <Icon name='arrow left' />
                        뒤로가기
                    </Button>
                </div>

                {/* 초기화 확인창 */}
                <Confirm
                    open={open}
                    size='mini'
                    cancelButton={<Button color='grey'>아니요</Button>}
                    confirmButton={<Button color='purple'>예</Button>}
                    content={
                        <div style={{ padding: '18px' }}>
                            <p>선택하신 내용이 모두 초기화됩니다.</p>
                            <p>처음으로 돌아가시겠습니까?</p>
                        </div>
                    }
                    onCancel={() => setOpen(false)}
                    onConfirm={() => navigate('/')}
                />

                {/* 주문창 */}
                <Container style={{ margin: 20, width: '95%', minHeight: '850px' }}>
                    <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
                </Container>

            </Sidebar.Pusher>
        </Sidebar.Pushable>
    );
}

export default Order;