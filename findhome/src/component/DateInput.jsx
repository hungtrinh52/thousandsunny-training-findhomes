import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class DateInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            min: props.fieldValue?.min ? new Date(props.fieldValue.min) : null,
            max: props.fieldValue?.max ? new Date(props.fieldValue.max) : null
        };
        this.handleMinChange = this.handleMinChange.bind(this);
        this.handleMaxChange = this.handleMaxChange.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.fieldValue?.min !== prevState.min || nextProps.fieldValue?.max !== prevState.max) {
            return {
                min: nextProps.fieldValue?.min ? new Date(nextProps.fieldValue.min) : null,
                max: nextProps.fieldValue?.max ? new Date(nextProps.fieldValue.max) : null
            };
        }
        return null;
    }

    handleMinChange(date) {
        const { max, onChanged } = this.props;
        if (date && max && date >= max) {
            console.log('Min date cannot be greater than or equal to max date');
            return;
        }
        this.setState({ min: date }, () => {
            const minStr = date ? date.toISOString().split('T')[0] : null;
            onChanged?.({ min: minStr, max: this.state.max ? this.state.max.toISOString().split('T')[0] : max });
        });
    }

    handleMaxChange(date) {
        const { min, onChanged } = this.props;
        if (date && min && date <= min) {
            console.log('Max date cannot be less than or equal to min date');
            return;
        }
        this.setState({ max: date }, () => {
            const maxStr = date ? date.toISOString().split('T')[0] : null;
            onChanged?.({ min: this.state.min ? this.state.min.toISOString().split('T')[0] : min, max: maxStr });
        });
    }

    render() {
        const { fieldTitle, to } = this.props;
        const { min, max } = this.state;

        return (
            <div className="d-flex align-items-center">
                {fieldTitle && <span className="input-group-text border-0">{fieldTitle}</span>}
                <DatePicker
                    selected={min}
                    onChange={this.handleMinChange}
                    className="form-control input-group-text"
                    dateFormat="yyyy-MM-dd"
                    placeholderText="YYYY-MM-DD"
                    isClearable
                    maxDate={max ? new Date(max.getTime() - 86400000) : null}
                    minDate={null}
                />
                {to && <span className="mx-2">{to}</span>}
                <DatePicker
                    selected={max}
                    onChange={this.handleMaxChange}
                    className="form-control input-group-text"
                    dateFormat="yyyy-MM-dd"
                    placeholderText="YYYY-MM-DD"
                    isClearable
                    minDate={min ? new Date(min.getTime() + 86400000) : null}
                    maxDate={null}
                />
            </div>
        );
    }
}

DateInput.propTypes = {
    fieldTitle: PropTypes.string,
    fieldValue: PropTypes.shape({
        min: PropTypes.string,
        max: PropTypes.string
    }),
    to: PropTypes.string,
    onChanged: PropTypes.func
};

export default React.memo(DateInput);