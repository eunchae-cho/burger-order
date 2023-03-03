import {Divider, Grid, Image, Message, Segment, Transition} from "semantic-ui-react";
import EatingImg from '../assets/icons/healthy-food.png'
import TakeAwayImg from '../assets/icons/take-away.png'
import {useState} from "react";
import { useNavigate } from 'react-router-dom';
import {useType} from "../utils/typeHandler/useType";

const Home = () => {
    const navigate = useNavigate();
    const [animation, setAnimation] = useState('');
    const [duration, setDuration] = useState('');
    const [visible, setVisible] = useState(true);

    const [animationTwo, setAnimationTwo] = useState('');
    const [durationTwo, setDurationTwo] = useState('');
    const [visibleTwo, setVisibleTwo] = useState(true);

    // 바운스 애니매이션 효과 1
    const handleForHere = () => {
        setAnimation('bounce');
        setDuration('300');
        setVisible(prevState => !prevState);
    }

    // 바운스 애니매이션 효과 2
    const handleTakeAway = () => {
        setAnimationTwo('bounce');
        setDurationTwo('300');
        setVisibleTwo(prevState => !prevState);
    }

    const clickForHere = () => {
        navigate('/order', { state: useType.FOR_HERE });
    }

    const clickTakeAway = () => {
        navigate('/order', { state: useType.TAKE_AWAY });
    }

    return (
        <div className='home'>

            {/*<Message id='home-msg'>*/}
            {/*    WELCOME*/}
            {/*    <br/>*/}
            {/*    <br/>*/}
            {/*    어서오세요! :)*/}
            {/*</Message>*/}

            <Grid reversed='vertically'>
                <Grid.Row>
                    <Segment placeholder id='segment-choose'>
                        <Grid columns={2} stackable textAlign='center'>
                            <Divider id='divider-or' vertical>Or</Divider>

                            <Grid.Row verticalAlign='middle'>
                                <Grid.Column
                                    className='grid-for-here'
                                    onMouseEnter={handleForHere}
                                    onClick={clickForHere}
                                >
                                    <Transition
                                        animation={animation}
                                        duration={duration}
                                        visible={visible}
                                    >
                                        <Image centered size='small' src={EatingImg} />
                                    </Transition>
                                    <div className='eating-type'> 매장식사 </div>
                                </Grid.Column>

                                <Grid.Column
                                    className='grid-for-here'
                                    onMouseEnter={handleTakeAway}
                                    onClick={clickTakeAway}
                                >
                                    <Transition
                                        animation={animationTwo}
                                        duration={durationTwo}
                                        visible={visibleTwo}
                                    >
                                        <Image centered size='small' src={TakeAwayImg} />
                                    </Transition>
                                    <div className='eating-type'> 포장하기 </div>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                </Grid.Row>
                <Grid.Row>
                    <Segment id='segment-fortune'>
                        {/*<Image src='/images/wireframe/paragraph.png' />*/}
                    </Segment>
                </Grid.Row>
            </Grid>

        </div>
    );
}

export default Home;