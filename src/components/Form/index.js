import React, { Component } from 'react';
import Input from 'components/Input';
import { TaskListConsumer } from 'context/taskList.context';

import { StyledForm, StyledAddButton } from './styles';

class Form extends Component {
    state = {
        inputValue: '',
    };

    onChange = (value) => this.setState({ inputValue: value });

    addTask = (e) => {
        e.preventDefault();
        const { inputValue } = this.state;

        if (inputValue) {
            this.props.addTask({ text: inputValue });
            this.setState({ inputValue: '' });
        }
    };

    render() {
        const { inputValue } = this.state;
        const isTaskExists = this.props.taskList.some(({ text }) => inputValue === text);

        return (
            <StyledForm onSubmit={this.addTask}>
                <Input value={inputValue} onChange={this.onChange} />

                <StyledAddButton disabled={isTaskExists || !this.state.inputValue}>ADD TASK</StyledAddButton>
            </StyledForm>
        );
    }
}

export default (componentProps) => (
    <TaskListConsumer>
        {props => <Form {...props} {...componentProps} />}
    </TaskListConsumer>
);