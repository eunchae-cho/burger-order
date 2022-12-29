import {Grid, Icon, Image, Segment, Sidebar} from "semantic-ui-react";
import {useDispatch} from "react-redux";
import {sidebarType} from "../utils/typeHandler/sidebarType";

const HorizontalSidebar = ({ animation, direction, visible }) => {
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch({ type: sidebarType.SET_OPEN, open: !visible})
    }

    return(
        <Sidebar
            className='horizontal-sidebar'
            animation={animation}
            direction={direction}
            visible={visible}
        >
            <Grid textAlign='center'>
                <Grid.Row columns={1}>
                    <Grid.Column id='grid-sidebar-col' onClick={handleClose}>
                        <Icon name='close' color='white'/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={3}>
                    <Grid.Column>
                        <Image src='/images/wireframe/media-paragraph.png'/>
                    </Grid.Column>
                    <Grid.Column>
                        <Image src='/images/wireframe/media-paragraph.png'/>
                    </Grid.Column>
                    <Grid.Column>
                        <Image src='/images/wireframe/media-paragraph.png'/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Sidebar>
    )
}

export default HorizontalSidebar;