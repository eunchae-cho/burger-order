import React, {useEffect, useState} from "react";
import {Button, Modal, Image, Divider, Table, Checkbox, Segment} from "semantic-ui-react";
import WhiteFrame from '../../assets/images/white_frame.png'
import {ingredients} from "../../mock";
import {optionType} from "../../utils/typeHandler/optionType";
import {isEmpty} from "../../utils/ObjectUtils";

const BurgerOptionModal = ({ item }) => {
    const [open, setOpen] = useState(false);
    const [ingredients, setIngredients] = useState([]);
    const [options, setOptions] = useState([]);

    useEffect(() => {
        if (open) {
            setIngredients(item.ingredient);
        }
    }, [open])

    // 취소 버튼  클릭 시
    const handleCancel = () => {
        setOpen(false);
        setOptions([]);
    }

    // 담기 버튼 클릭 시
    const handleAdd = () => {
        setOpen(false);
        setOptions([]);
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

                    <Divider horizontal style={{ margin: '2rem 0'}}>
                            추가 옵션
                    </Divider>

                    <Table definition>
                        <Table.Body>
                            {
                                ingredients.map((ingredient) => (
                                    ingredient.addOption &&
                                    <Table.Row>
                                        <Table.Cell width={4}>{ingredient.name}</Table.Cell>
                                        <Table.Cell textAlign='right'>
                                            <Button.Group size='mini'>
                                                <Button icon='plus' />
                                                <Button icon='minus' />
                                            </Button.Group>
                                        </Table.Cell>
                                    </Table.Row>
                                ))
                            }
                        </Table.Body>
                    </Table>

                    <Divider horizontal style={{ margin: '2rem 0'}}>
                        제외 옵션
                    </Divider>

                    <Table definition>
                        <Table.Body>
                            {
                                ingredients.map((ingredient) => (
                                    ingredient.exceptOption &&
                                    <Table.Row>
                                        <Table.Cell width={4} warning>{ingredient.name}</Table.Cell>
                                        <Table.Cell textAlign='right'>
                                            <Checkbox
                                                defaultChecked={false}
                                            />
                                        </Table.Cell>
                                    </Table.Row>
                                ))
                            }
                        </Table.Body>
                    </Table>

                    <Divider horizontal style={{ margin: '2rem 0'}}>
                        기타 옵션
                    </Divider>

                    <Table definition>
                        <Table.Body>
                                <Table.Row>
                                    <Table.Cell width={4}>소스많이</Table.Cell>
                                    <Table.Cell textAlign='right'>
                                        <Checkbox
                                            defaultChecked={false}
                                        />
                                    </Table.Cell>
                                </Table.Row>
                        </Table.Body>
                    </Table>

                    {/* 옵션 내역 */}
                    <Segment style={{ marginBlock: '30px'}}>
                        {/*{*/}
                        {/*    options.map((item) => (*/}
                        {/*        item.type === optionType.ADD ?*/}
                        {/*        <div style={{ fontSize: 'small' }}>*/}
                        {/*            {item.name} {item.cnt} 추가*/}
                        {/*        </div>*/}
                        {/*            :*/}
                        {/*        (*/}
                        {/*            item.type === optionType.EXCEPT ?*/}
                        {/*                <div style={{ fontSize: 'small' }}>*/}
                        {/*                    {item.name} 빼기*/}
                        {/*                </div>*/}
                        {/*                :*/}
                        {/*                (*/}
                        {/*                    item.type === optionType.REQUEST &&*/}
                        {/*                    <div style={{ fontSize: 'small' }}>*/}
                        {/*                        {item.name}*/}
                        {/*                    </div>*/}
                        {/*                )*/}
                        {/*        )*/}
                        {/*    ))*/}
                        {/*}*/}
                    </Segment>

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

function hasOption(list, id) {
    const filter = list.filter((item) => item.optionId === id)

    if (filter.length === 0) {
        return false
    }

    return true
}

export default BurgerOptionModal