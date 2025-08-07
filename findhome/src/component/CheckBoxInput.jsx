import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

class CheckboxInput extends Component {
    constructor(props) {
        super(props);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    handleCheckboxChange(tag) {
        const { current, allTags, onChanged } = this.props;
        const newSelected = [...(current || [])];
        const index = newSelected.indexOf(tag);

        if (index !== -1) {
            newSelected.splice(index, 1);
        } else {
            newSelected.push(tag);
        }

        const isAllSelected = newSelected.length === allTags.length;
        const valueToSend = isAllSelected ? null : newSelected;

        onChanged?.(valueToSend);
    }

    render() {
        const { fieldTitle, allTags, current } = this.props;

        return (
            <div className="d-flex flex-column">
                {fieldTitle && <label className="mb-2">{fieldTitle}</label>}
                {allTags.map((tag) => (
                    <div key={tag.toString()} className="form-check d-flex align-items-center me-3">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id={`cb-${tag.toString()}`}
                            checked={(current || []).includes(tag)}
                            onChange={() => this.handleCheckboxChange(tag)}
                        />
                        <label className="form-check-label ms-2" htmlFor={`cb-${tag.toString()}`}>
                            {tag.toString()}
                        </label>
                    </div>
                ))}
            </div>
        );
    }
}

CheckboxInput.propTypes = {
    fieldTitle: PropTypes.string,
    allTags: PropTypes.array.isRequired,
    current: PropTypes.array,
    onChanged: PropTypes.func
};

export default React.memo(CheckboxInput);