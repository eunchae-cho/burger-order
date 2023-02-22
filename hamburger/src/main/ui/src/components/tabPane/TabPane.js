import {Button, Card, Grid, Icon, Image, Tab} from "semantic-ui-react";
import WhiteFrame from '../../assets/images/white_frame.png'
import uuid from "react-uuid";
import AddMenuModal from "../modal/AddMenuModal";
import {useState} from "react";

const TabPane = ({ type, data }) => {

    const [dataList, setDataList] = useState([]);
    data.then(value => setDataList(value.data))

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
                                           ui={false}
                                    />
                                    <Card.Content>
                                        <Card.Description>{item.name}</Card.Description>
                                        <br/>
                                        <Card.Meta>{item.description}</Card.Meta>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <div className='card-price'>
                                            {item.price} 원
                                        </div>
                                        <div className='btn-cart'>
                                            <AddMenuModal item={item}/>
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