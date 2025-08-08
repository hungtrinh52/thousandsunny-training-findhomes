import React, { Component } from 'react';
import PropTypes from 'prop-types';
/*import 'react-datepicker/dist/react-datepicker.css';*/
import 'bootstrap/dist/css/bootstrap.min.css';

class DateInput extends Component {
    constructor(props) {
        super(props);
        this.handleMinChange = this.handleMinChange.bind(this);
        this.handleMaxChange = this.handleMaxChange.bind(this);
    }

    handleMinChange(dateMin) {
        const { fieldValue, onChanged } = this.props;
        const max = fieldValue?.max || null;
        if (dateMin && max && dateMin >= max) {
            dateMin = new Date(max.getTime() - 24 * 60 * 60 * 1000);
        }
        onChanged?.(dateMin, max);
    }

    handleMaxChange(dateMax) {
        const { fieldValue, onChanged } = this.props;
        const min = fieldValue?.min || null;
        if (dateMax && min && dateMax <= min) {
            dateMax = new Date(min.getTime() + 24 * 60 * 60 * 1000);
        }
        onChanged?.(dateMax,min);
    }


    render() {
        const { fieldTitle, fieldValue,to } = this.props;
        const minValue = fieldValue?.min ? fieldValue.min.toISOString().split('T')[0] : '';
        const maxValue = fieldValue?.max ? fieldValue.max.toISOString().split('T')[0] : '';

        return (
            <div className="d-flex">
                <span className="input-group-text border-0"> {fieldTitle}</span>
                <div className="input-group">
                    <input
                        type="Date"
                        className="form-control"
                        value={minValue}
                        onChange={(e) => this.handleMinChange(new Date(e.target.value))}
                    />
                    <span className="input-group-text border-0">{to}</span>
                    <input
                        type="date"
                        className="form-control"
                        value={maxValue}
                        onChange={(e) => this.handleMaxChange(new Date(e.target.value))}
                    />
                </div>
            </div>
        );
    }
}

DateInput.propTypes = {
    fieldTitle: PropTypes.string,
    to: PropTypes.string,
    fieldValue: PropTypes.shape({
        min: PropTypes.instanceOf(Date),
        max: PropTypes.instanceOf(Date)
    }),
    onChanged: PropTypes.func
};

export default React.memo(DateInput);