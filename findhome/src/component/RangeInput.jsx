import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

class NumberFilter extends Component {
  constructor(props) {
    super(props);
    this.handleMinChange = this.handleMinChange.bind(this);
    this.handleMaxChange = this.handleMaxChange.bind(this);
  }

  callOnChanged(value) {
    const { onChanged } = this.props;
    let newMin, newMax;
    try {
      newMin = value.min.trim() ? Number(value.min) : undefined;
    } catch {}
    try {
      newMax = value.max.trim() ? Number(value.max) : undefined;
    } catch {}
    onChanged?.(newMin, newMax);
  }

  handleMinChange(e) {
    const { fieldValueMax } = this.props;
    this.callOnChanged({ min: e.target.value, max: fieldValueMax?.toString() || '' });
  }

  handleMaxChange(e) {
    const { fieldValueMin } = this.props;
    this.callOnChanged({ max: e.target.value, min: fieldValueMin?.toString() || '' });
  }

  render() {
    const { title, minText, maxText, fieldValueMin, fieldValueMax,to } = this.props;

    return (
        <div className="d-flex ">
          <span className="input-group-text border-0"> {title}</span>
          <div className="input-group">
            <input
                type="text"
                className="form-control"
                placeholder={minText}
                value={fieldValueMin?.toString() || ''}
                onChange={this.handleMinChange}
            />
            <span className="input-group-text border-0"> {to}</span>
            <input
                type="text"
                className="form-control"
                placeholder={maxText}
                value={fieldValueMax?.toString() || ''}
                onChange={this.handleMaxChange}
            />
          </div>
        </div>
    );
  }
}

NumberFilter.propTypes = {
  title: PropTypes.string.isRequired,
  minText: PropTypes.string,
  maxText: PropTypes.string,
  fieldValueMin: PropTypes.number,
  fieldValueMax: PropTypes.number,
  to: PropTypes.string,
  onChanged: PropTypes.func
};

export default React.memo(NumberFilter);