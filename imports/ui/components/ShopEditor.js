/* eslint-disable max-len, no-return-assign */

import React, { PropTypes } from 'react';
import { FormGroup, ControlLabel, FormControl, Button,Row,Col } from 'react-bootstrap';
import shopEditor from '../../modules/shop-editor.js';

export default class ShopEditor extends React.Component {
  componentDidMount() {
    shopEditor({ component: this });
    setTimeout(() => { document.querySelector('[name="title"]').focus(); }, 0);
  }

  render() {
    const { doc } = this.props;
    return (<form
      ref={ form => (this.shopEditorForm = form) }
      onSubmit={ event => event.preventDefault() }
    >
      <FormGroup>
        <ControlLabel>Shop name</ControlLabel>
        <FormControl
          type="text"
          name="title"
          defaultValue={ doc && doc.title }
          placeholder="places enter your shop name"
        />
      </FormGroup>
      <FormGroup controlId="formControlsSelect">
        <ControlLabel>Select accepted pet</ControlLabel>
        <FormControl componentClass="select" name="petType" placeholder="dog">
          <option value="dog">dog</option>
          <option value="cat">cat</option>
          <option value="bird">bird</option>
          <option value="other">other</option>
        </FormControl>
        </FormGroup>
        <FormGroup>
          <ControlLabel>Tel</ControlLabel>
          <FormControl
            type="text"
            name="tel"
            defaultValue={ doc && doc.tel }
            placeholder="enter starting price in number"  //here
          />
        </FormGroup>
      <FormGroup>
        <ControlLabel>Starting price</ControlLabel>
        <FormControl
          type="text"
          name="price"
          defaultValue={ doc && doc.detail1 }
          placeholder="enter starting price in number"  //here
        />
      </FormGroup>


      <Row>
        <Col xs={12} sm={6}>
          <FormGroup>
            <ControlLabel>Latitude</ControlLabel>
            <FormControl
              type="text"
              name="lat"
              defaultValue={ doc && doc.lat }
              placeholder="enter latitude of your shop"  //here
            />
          </FormGroup>
        </Col>
        <Col xs={12} sm={6}>
          <FormGroup>
            <ControlLabel>Longitude</ControlLabel>
            <FormControl
              type="text"
              name="long"
              defaultValue={ doc && doc.long }
              placeholder="enter longitude of your shop"  //here
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <ControlLabel>Link images</ControlLabel>
        <FormControl
          type="text"
          name="pic1"
          defaultValue={'/default.jpg'}
          placeholder="enter link of your shop picture"  //here
        />
      </FormGroup>
      <FormGroup>
        <FormControl
          type="text"
          name="pic2"
          defaultValue={'/default.jpg'}
          placeholder="enter link of your shop picture"  //here
        />
      </FormGroup>
      <FormGroup>
        <FormControl
          type="text"
          name="pic3"
          defaultValue={'/default.jpg'}
          placeholder="enter link of your shop picture"  //here
        />
      </FormGroup>

      <FormGroup>
        <ControlLabel>Shop description</ControlLabel>
        <FormControl
          componentClass="textarea"
          name="detail2"
          defaultValue={ doc && doc.detail2 }
          placeholder="description of your shop and package"
        />
      </FormGroup>
      <Button type="submit" bsStyle="success">
        { doc && doc._id ? 'Save Changes' : 'Add Document' }
      </Button>
    </form>);
  }
}

ShopEditor.propTypes = {
  doc: PropTypes.object,
};
