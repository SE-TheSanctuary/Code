/* eslint-disable max-len, no-return-assign */
import React, { PropTypes } from 'react';
import { Row, Col,FormGroup, ControlLabel, FormControl, Button ,DropdownButton,MenuItem,ButtonGroup,ButtonToolbar} from 'react-bootstrap';
import documentEditor from '../../modules/document-editor.js';

export default class DocumentEditor extends React.Component {
  constructor(props){
    super(props)
    this.handleDropdown = this.handleDropdown.bind(this)
    this.state = {
      dropDownValue: "dog"
    }
  }

  componentDidMount() {
    documentEditor({ component: this });
    setTimeout(() => { document.querySelector('[name="title"]').focus(); }, 0);
  }

  handleDropdown(e){
    this.setState({
        dropDownValue: e
    });
  }

  render() {
    const { doc } = this.props;
    return (
      <div className="AddPet">
        <Row>
          <Col xs={ 12 } sm={ 6 } md={ 4 }>
          <form
            ref={ form => (this.documentEditorForm = form) }
            onSubmit={ event => event.preventDefault() }>
              <Row>
                <Col xs={ 12 } sm={ 12 }>
                  <FormGroup>
                    <ControlLabel>Pet Name</ControlLabel>
                    <FormControl
                      type="text"
                      name="title"
                      defaultValue={ doc && doc.title }
                      placeholder=" Enter you pet name"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs={ 12 } sm={ 12 }>
                <FormGroup controlId="formControlsSelect">
                  <ControlLabel>Select</ControlLabel>
                  <FormControl componentClass="select" name="petType" placeholder="dog">
                    <option value="dog">dog</option>
                    <option value="cat">cat</option>
                    <option value="bird">bird</option>
                    <option value="other">other</option>
                  </FormControl>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs={ 12 } sm={ 12 }>
                  <FormGroup>
                    <ControlLabel>Breed</ControlLabel>
                    <FormControl
                      type="text"
                      name="breed"
                      defaultValue={ doc && doc.breed }
                      placeholder=" Enter your pet breed"  //here
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs={ 12 } sm={ 12 }>
                  <FormGroup>
                    <ControlLabel>Optional</ControlLabel>
                    <FormControl
                      componentClass="textarea"
                      name="body"
                      defaultValue={ doc && doc.body }
                      placeholder=" decriptiont abount your pet"
                    />
                  </FormGroup>
                  </Col>
                </Row>
            <Button type="submit" bsStyle="success">
              { doc && doc._id ? 'Save Changes' : 'Add Document' }
            </Button>
          </form>
          </Col>
        </Row>
      </div>
        );

  }
}

DocumentEditor.propTypes = {
  doc: PropTypes.object,
};
