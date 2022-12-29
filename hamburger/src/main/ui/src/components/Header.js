import {Button, Confirm} from "semantic-ui-react";
import {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

const MAIN_URL = '/';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        if (location.pathname !== MAIN_URL) {
            setOpen(prevState => !prevState)
        }
    }
    return (
        <>
            <div
                className='header'
                onClick={handleClick}
            >
                OhBrand Burger
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
        </>
    );
}

export default Header;