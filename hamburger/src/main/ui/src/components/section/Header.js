import {Grid, Icon, Image, Message, Segment, Sidebar} from "semantic-ui-react";
import {useType} from "../../utils/typeHandler/useType";
import {useDispatch, useSelector} from "react-redux";
import {sidebarType} from "../../utils/typeHandler/sidebarType";



const Header = ({ type }) => {
    const dispatch = useDispatch();
    const visible = useSelector(state => state.sidebar.open)

    const clickCart = () => {
        dispatch({ type: sidebarType.SET_OPEN, open: !visible})
    }

    return (
            <Grid className='grid-header'>
                <Grid.Column className='grid-header-col' width={3}>
                    <div className='header'>
                        OhBrand Burger
                    </div>
                </Grid.Column>
                {
                    type === useType.FOR_HERE
                    &&
                    <Grid.Column className='grid-header-col-2' width={3}>
                        <div className='header'>
                            매 장 식 사
                        </div>
                    </Grid.Column>

                }
                {
                    type === useType.TAKE_AWAY
                    &&
                    <Grid.Column className='grid-header-col-2' width={3}>
                        <div className='header'>
                            포 장 하 기
                        </div>
                    </Grid.Column>

                }
                <Grid.Column className='grid-header-col' width={1}>
                        <Grid.Row>
                            <Grid.Column>
                                <Message id='cart-num'>
                                    0
                                </Message>
                            </Grid.Column>
                            <Grid.Column className='grid-cart-icon' onClick={clickCart}>
                                <Icon name='cart plus' size='large' />
                            </Grid.Column>
                        </Grid.Row>
                </Grid.Column>
            </Grid>
    );
}

export default Header;