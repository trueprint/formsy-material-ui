import React from 'react';
import PropTypes from 'prop-types';
import { withFormsy } from 'formsy-react';
import Checkbox from 'material-ui/Checkbox';
import { setMuiComponentAndMaybeFocus } from './utils';

class FormsyCheckbox extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.setMuiComponentAndMaybeFocus = setMuiComponentAndMaybeFocus.bind(this)
  }

  componentDidMount() {
    this.props.setValue(this.muiComponent.isChecked());
  }

  handleChange(event, value) {
    this.props.setValue(value);
    if (this.props.onChange) this.props.onChange(event, value);
  }

  render() {
    const {
      defaultChecked, // eslint-disable-line no-unused-vars
      validations, // eslint-disable-line no-unused-vars
      validationErrors, // eslint-disable-line no-unused-vars
      validationError, // eslint-disable-line no-unused-vars
      ...rest } = this.props;
    let value = this.props.getValue();

    if (typeof value === 'undefined') {
      value = (typeof defaultChecked !== 'undefined') ? defaultChecked : false;
    }
    return (
      <Checkbox
        disabled={this.props.isFormDisabled()}
        {...rest}
        checked={value}
        onCheck={this.handleChange}
        ref={this.setMuiComponentAndMaybeFocus}
      />
    );
  }
}

FormsyCheckbox.propTypes = {
  defaultChecked: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  validationError: PropTypes.string,
  validationErrors: PropTypes.object,
  validations: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

export default withFormsy(FormsyCheckbox)
