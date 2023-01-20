import React, {useState} from "react";
import {Button, Modal, Image, Divider, Table, Checkbox, Segment} from "semantic-ui-react";
import WhiteFrame from '../../assets/images/white_frame.png'
import {ingredients} from "../../mock";
import {optionType} from "../../utils/typeHandler/optionType";

const AddMenuModal = ({ item }) => {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);

    // 추가 옵션 이벤트 - plus
    const handleAddPlus = (item) => {
        // 옵션이 존재할 때
        if (hasOption(options, item.id)) {
            const option = options.filter((opt) => opt.optionId === item.id);
            option[0].cnt += 1;
            setOptions([...options.filter((opt) => opt.optionId !== item.id), option[0]]);
        } else {
            const option ={
                optionId: item.id,
                parentId: item.parentId,
                name: item.name,
                cnt: 1,
                type: optionType.ADD
            };
            setOptions([...options, option]);
        }
    }

    // 추가 옵션 이벤트 - minus
    const handleAddMinus = (item) => {
        // 옵션이 존재할 때
        if (hasOption(options, item.id) || item.cnt < 0) {
            const option = options.filter((opt) => opt.optionId === item.id);
            option[0].cnt = option[0].cnt - 1;

            // cnt 0 이하 일 시 옵션 삭제
            if (option[0].cnt <= 0) {
                setOptions(options.filter((opt) => opt.optionId !== item.id));
                return;
            }

            setOptions([...options.filter((opt) => opt.optionId !== item.id), option[0]]);
        }
    }

    // 제외 옵션 이벤트
    const handleExceptional = (item) => {
        // 옵션이 존재할 때
        if (hasOption(options, item.id)) {
            setOptions(options.filter((opt) => opt.optionId !== item.id));
        } else {
            const option ={
                optionId: item.id,
                parentId: item.parentId,
                name: item.name,
                cnt: 0,
                type: optionType.EXCEPT
            };
            setOptions([...options, option]);
        }
    }

    // 기타 옵션 이벤트
    const handleRequest = (item) => {
        // 옵션이 존재할 때
        if (hasOption(options, item.id)) {
            setOptions(options.filter((opt) => opt.optionId !== item.id));
        } else {
            const option ={
                optionId: item.id,
                parentId: item.parentId,
                name: item.name,
                cnt: 0,
                type: optionType.REQUEST
            };
            setOptions([...options, option]);
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
                                ingredients.map((item) => (
                                    item.addable &&
                                    <Table.Row>
                                        <Table.Cell width={4}>{item.name}</Table.Cell>
                                        <Table.Cell textAlign='right'>
                                            <Button.Group size='mini'>
                                                <Button icon='plus' onClick={() => handleAddPlus(item)}/>
                                                <Button icon='minus' onClick={() => handleAddMinus(item)}/>
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
                                ingredients.map((item) => (
                                    item.exceptional &&
                                    <Table.Row>
                                        <Table.Cell width={4} warning>{item.name}</Table.Cell>
                                        <Table.Cell textAlign='right'>
                                            <Checkbox
                                                defaultChecked={false}
                                                onChange={() => handleExceptional(item)}
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
                            {
                                ingredients.map((item) => (
                                    item.request &&
                                    <Table.Row>
                                        <Table.Cell width={4}>{item.name}</Table.Cell>
                                        <Table.Cell textAlign='right'>
                                            <Checkbox
                                                defaultChecked={false}
                                                onChange={() => handleRequest(item)}
                                            />
                                        </Table.Cell>
                                    </Table.Row>
                                ))
                            }
                        </Table.Body>
                    </Table>

                    {/* 옵션 내역 */}
                    <Segment style={{ marginBlock: '30px'}}>
                        {
                            options.map((item) => (
                                item.type === optionType.ADD ?
                                <div style={{ fontSize: 'small' }}>
                                    {item.name} {item.cnt} 추가
                                </div>
                                    :
                                (
                                    item.type === optionType.EXCEPT ?
                                        <div style={{ fontSize: 'small' }}>
                                            {item.name} 빼기
                                        </div>
                                        :
                                        (
                                            item.type === optionType.REQUEST &&
                                            <div style={{ fontSize: 'small' }}>
                                                {item.name}
                                            </div>
                                        )
                                )
                            ))
                        }
                    </Segment>

                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button color='grey' onClick={() => setOpen(false)}>
                    취소
                </Button>
                <Button onClick={() => setOpen(false)} primary>
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

export default AddMenuModal