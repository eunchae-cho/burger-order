import {Container, Tab} from "semantic-ui-react";

const panes = [
    { menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
    { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

const Order = () => {
    return (
        <Container style={{ margin: 20, width: '95%', minHeight: '850px' }}>
            <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
        </Container>
    );
}

export default Order;