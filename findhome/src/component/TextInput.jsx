import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

class TextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.fieldValue || ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.fieldValue !== prevState.value) {
            return { value: nextProps.fieldValue || '' };
        }
        return null;
    }

    handleChange(e) {
        const { maxLength = 100, onChanged } = this.props;
        const value = e.target.value;
        if (value.length <= maxLength) {
            this.setState({ value }, () => {
                onChanged?.(value);
            });
        } else {
            console.log(`Maximum length of ${maxLength} characters exceeded`);
        }
    }

    render() {
        const { fieldTitle, hintText } = this.props;
        const { value } = this.state;

        return (
            <div className="input-group align-items-center">
                {fieldTitle && <span className="input-group-text border-0">{fieldTitle}</span>}
                <input
                    type="text"
                    className="form-control"
                    value={value}
                    placeholder={hintText}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

TextInput.propTypes = {
    fieldTitle: PropTypes.string,
    hintText: PropTypes.string,
    fieldValue: PropTypes.string,
    maxLength: PropTypes.number,
    onChanged: PropTypes.func
};

export default React.memo(TextInput);