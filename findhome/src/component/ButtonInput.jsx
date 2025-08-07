import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

class CheckBoxBtnInput extends Component {
    constructor(props) {
        super(props);
        this.handleTagChange = this.handleTagChange.bind(this);
    }

    handleTagChange(tag) {
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
                <div className="btn-group" role="group">
                    {allTags.map((tag) => {
                        const tagText = tag.toString();
                        const isSelected = (current || []).includes(tag);

                        return (
                            <label
                                key={tagText}
                                className={`btn btn-outline-dark ${isSelected ? 'active' : ''}`}
                                onClick={() => this.handleTagChange(tag)}
                            >
                                <input
                                    type="checkbox"
                                    className="btn-check"
                                    autoComplete="off"
                                    checked={isSelected}
                                    onChange={() => this.handleTagChange(tag)}
                                />
                                {tagText}
                            </label>
                        );
                    })}
                </div>
            </div>
        );
    }
}

CheckBoxBtnInput.propTypes = {
    fieldTitle: PropTypes.string,
    allTags: PropTypes.array.isRequired,
    current: PropTypes.array,
    onChanged: PropTypes.func
};

export default React.memo(CheckBoxBtnInput);