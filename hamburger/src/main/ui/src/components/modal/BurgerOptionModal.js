import React, {useEffect, useState} from "react";
import {Button, Modal, Image, Divider, Table, Checkbox, Segment} from "semantic-ui-react";
import WhiteFrame from '../../assets/images/white_frame.png'
import {ingredients} from "../../mock";
import {optionType} from "../../utils/typeHandler/optionType";
import {isEmpty, isNotEmpty} from "../../utils/ObjectUtils";

const BurgerOptionModal = ({ item }) => {
    const [open, setOpen] = useState(false);
    const [ingredients, setIngredients] = useState([]);
    const [addOptions, setAddOptions] = useState([]);

    useEffect(() => {
        if (open) {
            setIngredients(item.ingredient);
        }
    }, [open])

    // 취소 버튼  클릭 시
    const handleCancel = () => {
        setOpen(false);
        setAddOptions([]);
    }

    // 담기 버튼 클릭 시
    const handleAdd = () => {
        setOpen(false);
        setAddOptions([]);
    }

    // 추가 옵션에서 플러스 버튼을 누를 때
    const handlePlusBtn = (ingredient) => {
        let option = addOptions.filter((i) => i.id === ingredient.id);
        // 값이 존재할 때
        if (option.length > 0) {
            if (option.count > 5) {
                alert('최대 5개까지 추가 가능합니다.');
                return;
            }
            option[0].count += 1;
            setAddOptions([...addOptions.filter((i) => i.id !== ingredient.id), option]);

        } else {
            option = {
                id: ingredient.id,
                parentId: ingredient.parentId,
                name: ingredient.name,
                count: 1
            }

            setAddOptions([...addOptions, option]);
        }

        console.log(addOptions)
    }

    // 추가 옵션에서 마이너스 버튼을 누를 때
     const handleMinusBtn = (ingredient) => {
        let option = addOptions.filter((i) => i.id === ingredient.id);
        // 값이 존재할 때
        if (option.length > 0) {
            if (option.count > 5) {
                alert('최대 5개까지 추가 가능합니다.');
                return;
            }

            option[0].count -= 1;

            // 값이 0일 때 배열에서 빼기
            if (option.count <= 0) {
                setAddOptions(addOptions.filter((i) => i.id !== ingredient.id));
                return;
            }

            setAddOptions([...addOptions, option]);

        }
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
                                                <Button icon='plus' onClick={() => handlePlusBtn(ingredient)}/>
                                                <Button icon='minus' onClick={() => handleMinusBtn(ingredient)}/>
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
                        {
                            addOptions.map((item) => (
                                <div style={{ fontSize: 'small' }}>
                                    {item.name} {item.count} 추가
                                </div>
                            ))
                        }
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