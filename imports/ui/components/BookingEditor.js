/* eslint-disable max-len, no-return-assign */

import React, { PropTypes } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import bookingEditor from '../../modules/booking-editor.js';

export default class BookingEditor extends React.Component {
  componentDidMount() {
    bookingEditor({ component: this });
    setTimeout(() => { document.querySelector('[name="title"]').focus(); }, 0);
  }
//update
  render() {
    const getInitialState = () => {
      value = new Date().toISOString();
      return {
        value: value
      }
    }
    value = new Date().toISOString();
    const handleChange = (value, formattedValue) => {
      this.setState({
        value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
        formattedValue: formattedValue // Formatted String, ex: "11/19/2016"
      });
    }

    const { doc } = this.props;
    return (<form
      ref={ form => (this.bookingEditorForm = form) }
      onSubmit={ event => event.preventDefault() }
    >
      <FormGroup>
        <ControlLabel>Booking name</ControlLabel>
        <FormControl
          type="text"
          name="title"
          defaultValue={ doc && doc.title }
          placeholder="Oh, The Places You'll Go!"
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Detail</ControlLabel>
        <FormControl
          type="text"
          name="detail1"
          defaultValue={ doc && doc.detail1 }
          placeholder="Oh, The Places You'll Go!"  //here
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Detail</ControlLabel>
        <FormControl
          componentClass="textarea"
          name="detail2"
          defaultValue={ doc && doc.detail2 }
          placeholder="Congratulations! Today is your day. You're off to Great Places! You're off and away!"
        />
      </FormGroup>
      <ControlLabel>Label</ControlLabel>
        <DatePicker id="example-datepicker" value={value} onChange={this.handleChange} />
      <HelpBlock>Help</HelpBlock>
      <Button type="submit" bsStyle="success">
        { doc && doc._id ? 'Save Changes' : 'Add Document' }
      </Button>
    </form>);
  }
}

BookingEditor.propTypes = {
  doc: PropTypes.object,
};
