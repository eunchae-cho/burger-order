import React, {useState} from "react";
import {Button, Modal, Image, Grid} from "semantic-ui-react";
import WhiteFrame from '../../assets/images/white_frame.png'

const OtherOptionModal = ({ item }) => {
    const [open, setOpen] = useState(false);
    const [amount, setAmount] = useState(1);

    const plusAmount = () => {
        if (amount >= 20) {
            alert('최대 수량 20개까지 가능합니다.');
            return;
        }
        setAmount(prevState => prevState + 1);
    }

    const minusAmount = () => {
        if (amount === 1) { return; }
        setAmount(prevState => prevState - 1);
    }

    // 취소 버튼  클릭 시
    const handleCancel = () => {
        setOpen(false);
    }

    // 담기 버튼 클릭 시
    const handleAdd = () => {
        setOpen(false);
    }

    return (
        <Modal
            open={open}
            closeIcon='close'
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            trigger={<Button icon='plus cart' />}
        >
            <Modal.Header>
                <div id='menu-header-modal'>
                    {item.name}
                </div>
            </Modal.Header>
            <Modal.Content image scrolling>
                <Image size='medium' src={WhiteFrame} wrapped />

                <Modal.Description style={{ width: '100%' }}>
                    <p>
                        {item.description}
                    </p>

                    <Grid columns='equal'>
                        <Grid.Column width={14} textAlign="right" style={{ alignSelf: 'center' }}>
                            <p> {amount} </p>
                        </Grid.Column>
                        <Grid.Column>
                            <Button.Group size='mini' style={{ textAlign: 'right' }}>
                                <Button icon='plus' onClick={plusAmount}/>
                                <Button icon='minus' onClick={minusAmount}/>
                            </Button.Group>
                        </Grid.Column>
                    </Grid>

                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button color='grey' onClick={handleCancel}>
                    취소
                </Button>
                <Button onClick={handleAdd} primary>
                    담기
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default OtherOptionModal