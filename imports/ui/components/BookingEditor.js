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
      <Button type="submit" bsStyle="success">
        { doc && doc._id ? 'Save Changes' : 'Add Document' }
      </Button>
    </form>);
  }
}

BookingEditor.propTypes = {
  doc: PropTypes.object,
};
