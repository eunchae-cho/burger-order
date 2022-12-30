import {Button, Card, Dimmer, Grid, Header, Icon, Image, Tab} from "semantic-ui-react";
import {useRef, useState} from "react";
import WhiteFrame from '../../assets/images/white_frame.png'
import uuid from "react-uuid";

const TabPane = ({ type, dataList }) => {

    const content = (
        <div className='menu-plus-icon'>
            {/*<Header as='h3' inverted textAlign='center'>*/}
            {/*    추가*/}
            {/*</Header>*/}
            <Icon name='plus square outline' size='big'/>
        </div>
    )

    const activeArr = new Array(dataList.length);
    activeArr.fill(false);
    const handleMouseEnter = (e, index) => {

    }

    return (
        <Tab.Pane>
            <div className='menu-title'>
                {type} 메뉴
            </div>
            <Grid>
                <Grid.Row id='grid-menu-row' columns={3}>
                    {
                        dataList.map((item, index) => (
                        <Grid.Column id='grid-menu-col' key={uuid()}>
                            <Card>
                                <Image src={WhiteFrame}
                                       wrapped
                                       ui={false} />
                                {/*<div className='menu-plus-icon'>*/}
                                {/*    <Icon name='plus square outline' size='big'/>*/}
                                {/*</div>*/}
                                <Card.Content>
                                    <Card.Description>{item.name}</Card.Description>
                                    <br/>
                                    <Card.Meta>{item.description}</Card.Meta>
                                </Card.Content>
                                <Card.Content extra>
                                    <div className='card-price'>
                                        {item.price} 원
                                    </div>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        ))
                    }
                </Grid.Row>
            </Grid>
        </Tab.Pane>
    );
}

export default TabPane;