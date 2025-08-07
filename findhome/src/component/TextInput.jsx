import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

class TextInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    callOnChanged(value) {
        const { onChanged } = this.props;
        const trimmedValue = value.trim();
        onChanged?.(trimmedValue || null);
    }

    handleChange(e) {
        this.callOnChanged(e.target.value);
    }

    render() {
        const { fieldTitle, hintText, fieldValue } = this.props;
        return (
            <div className="d-flex ">
                <span className="input-group-text border-0"> {fieldTitle}</span>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder={hintText}
                        value={fieldValue || ''}
                        onChange={this.handleChange}
                    />
                </div>
            </div>
        );
    }
}

TextInput.propTypes = {
    fieldTitle: PropTypes.string,
    hintText: PropTypes.string,
    fieldValue: PropTypes.string,
    onChanged: PropTypes.func
};

export default React.memo(TextInput );