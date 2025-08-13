import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

class DateInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            min: props.fieldValue?.min || '',
            max: props.fieldValue?.max || ''
        };
        this.handleMinChange = this.handleMinChange.bind(this);
        this.handleMaxChange = this.handleMaxChange.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.fieldValue?.min !== prevState.min || nextProps.fieldValue?.max !== prevState.max) {
            return {
                min: nextProps.fieldValue?.min || '',
                max: nextProps.fieldValue?.max || ''
            };
        }
        return null;
    }

    handleMinChange(date) {
        const { max } = this.state;
        if (max && date && new Date(date) > new Date(max)) {
            console.log('Min date cannot be greater than max date');
            return;
        }
        this.setState({ min: date }, () => {
            this.props.onChanged?.({ min: date, max });
        });
    }

    handleMaxChange(date) {
        const { min } = this.state;
        if (min && date && new Date(date) < new Date(min)) {
            console.log('Max date cannot be less than min date');
            return;
        }
        this.setState({ max: date }, () => {
            this.props.onChanged?.({ min, max: date });
        });
    }

    render() {
        const { fieldTitle, to } = this.props;
        const { min, max } = this.state;

        return (
            <div className="d-flex align-items-center">
                {fieldTitle && <span className="input-group-text border-0">{fieldTitle}</span>}
                <input
                    type="date"
                    className="form-control input-group"
                    value={min}
                    onChange={(e) => this.handleMinChange(e.target.value)}
                />
                {to && <span className="mx-2">{to}</span>}
                <input
                    type="date"
                    className="form-control input-group"
                    value={max}
                    onChange={(e) => this.handleMaxChange(e.target.value)}
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