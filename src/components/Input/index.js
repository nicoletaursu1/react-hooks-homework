import React, { Component } from 'react';
import { StyledLabel, StyledInput } from './styles';

class Input extends Component {
    onChange = ({ currentTarget: { value } }) => this.props.onChange(value);

    render() {
        const { value, placeholder, label, disabled = false, type = 'text' } = this.props;

        return (
            <StyledLabel>
                {label && <span>{label}</span>}
                <StyledInput autoFocus={true} {...{ value, placeholder, type, disabled, onChange: this.onChange }} />
            </StyledLabel>
        );
    }
}

export default Input;