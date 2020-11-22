import React, { Component, createRef } from 'react';
import { TaskListConsumer } from 'context/taskList.context';
import Task from 'components/Task';

import { StyledHeight, StyledList } from './styles';

class List extends Component {
    constructor(props) {
        super(props);

        this.listRef = createRef();

        this.state = {
            height: 0,
        };
    }

    componentDidUpdate() {
        const height = this.listRef.current && this.listRef.current.offsetHeight;

        if (height && this.state.height !== height) {
            this.setState({ height });
        }
    }

    componentDidMount() {
        const height = this.listRef.current && this.listRef.current.offsetHeight;

        if (height && this.state.height !== height) {
            this.setState({ height });
        }
    }

    render() {
        const { taskList = [] } = this.props;

        return (
            <StyledList ref={this.listRef}>
                {taskList.map(({ text, id }) => (
                    <Task 
                        key={id} 
                        onDelete={this.props.removeTask}
                        onSave={this.props.addTask}
                        id={id}
                    >
                        {text}
                    </Task>
                ))}

                <StyledHeight>
                    List height: {this.state.height} px
                </StyledHeight>
            </StyledList>
        );
    }
}

export default (componentProps) => (
    <TaskListConsumer>
        {(props) => <List {...props} {...componentProps} />}
    </TaskListConsumer>
);