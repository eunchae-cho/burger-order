import {Grid, Icon, Message} from "semantic-ui-react";
import {useType} from "../utils/typeHandler/useType";

const Header = ({ type }) => {

    console.log(type)

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
                <Grid.Column className='grid-header-col-2' width={5}>
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
                    <Grid.Column>
                        <Icon name='cart plus' size='large' />
                    </Grid.Column>
                </Grid.Row>
            </Grid.Column>
        </Grid>

    );
}

export default Header;