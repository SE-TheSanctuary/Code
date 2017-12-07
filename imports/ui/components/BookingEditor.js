/* eslint-disable max-len, no-return-assign */

import React, { PropTypes } from 'react';
import { FormGroup, ControlLabel, FormControl, Button ,Row,Col} from 'react-bootstrap';
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
        <ControlLabel>Reservation Name</ControlLabel>
        <FormControl
          type="text"
          name="title"
          defaultValue={ doc && doc.title }
          placeholder="your name"
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Pet Detail</ControlLabel>
        <FormControl
          type="text"
          name="detail1"
          defaultValue={ doc && doc.detail1 }
          placeholder="enter pet detail"  //here
        />
      </FormGroup>

<FormGroup>
      <ControlLabel>Start date (DD/MM/YYYY)</ControlLabel>
      <Row>
        <Col xs={12} md={4} sm={4}>
          <FormControl
            type="text"
            name="startDate1"
            defaultValue={ doc && doc.startDate1 }
            placeholder="days"  //here
          />
        </Col>
        <Col xs={12} md={4} sm={4}>
          <FormControl
            type="text"
            name="startDate2"
            defaultValue={ doc && doc.startDate2 }
            placeholder="mouth"  //here
          />
        </Col>
        <Col xs={12} md={4} sm={4}>
          <FormControl
            type="text"
            name="startDate3"
            defaultValue={ doc && doc.startDate3 }
            placeholder="year"  //here
          />
        </Col>
      </Row>
  </FormGroup>

  <FormGroup>
      <ControlLabel>End date (DD/MM/YYYY)</ControlLabel>
      <Row>
        <Col xs={12} md={4} sm={4}>
          <FormControl
            type="text"
            name="endDate1"
            defaultValue={ doc && doc.endDate1 }
            placeholder="days"  //here
          />
        </Col>
        <Col xs={12} md={4} sm={4}>
          <FormControl
            type="text"
            name="endDate2"
            defaultValue={ doc && doc.endDate2 }
            placeholder="mouth"  //here
          />
        </Col>
        <Col xs={12} md={4} sm={4}>
          <FormControl
            type="text"
            name="endDate3"
            defaultValue={ doc && doc.endDate3 }
            placeholder="year"  //here
          />
        </Col>
      </Row>
  </FormGroup>


      <FormGroup>
        <ControlLabel>Detail</ControlLabel>
        <FormControl
          componentClass="textarea"
          name="detail2"
          defaultValue={ doc && doc.detail2 }
          placeholder="enter your pet detail or special request"
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
