import React, {useState} from "react";
import {Button, Icon, Modal, Image} from "semantic-ui-react";
import WhiteFrame from '../../assets/images/white_frame.png'

const AddMenuModal = ({ item }) => {
    const [open, setOpen] = useState(false);

    return (
        <Modal
            open={open}
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

                <Modal.Description>
                    <p>
                        {item.description}
                    </p>

                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => setOpen(false)} primary>
                    담기
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default AddMenuModal