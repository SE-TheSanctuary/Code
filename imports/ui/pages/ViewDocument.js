import React, { PropTypes } from 'react';
import { ButtonToolbar, ButtonGroup, Button,Col,Row } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { removeDocument } from '../../api/documents/methods';
import NotFound from './NotFound';

const handleEdit = (history, _id) => {
  history.push(`/documents/${_id}/edit`);
};

const handleRemove = (history, _id) => {
  if (confirm('Are you sure? This is permanent!')) {
    removeDocument.call({ _id }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Document deleted!', 'success');
        history.push('/documents');
      }
    });
  }
};

const ViewDocument = ({ doc, history }) => {
  return doc ? (
    <div className="ViewDocument">
      <div className="page-header clearfix">
        <h4 className="pull-left">PetName:{ doc && doc.title }</h4>
        <ButtonToolbar className="pull-right">
          <ButtonGroup bsSize="small">
            <Button
              onClick={() => handleEdit(history, doc._id)}
            >Edit</Button>
            <Button
              onClick={() => handleRemove(history, doc._id)}
              className="text-danger"
            >Delete</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>



      <div>
        <Row>
          <Col xs={ 12 } sm={ 4 }>
            <div className="pet-dog-bg">
              <img alt="640x360" src="/dog.png" responsive/>
            </div>
          </Col>
          <Col xs={ 12 } sm={ 8 }>
            <div className="JDT15">
                <div className="JDT17">
                  <div className="pet-text">Breed</div>
                  <br/>
                  { doc && doc.breed }
                </div>
                <div className="JDT17">
                  <div className="pet-text">Pet-type</div>
                  <br/>
                  { doc && doc.petType }
                </div>
                <div className="JDT17">
                  <div className="pet-text">UserId</div>
                  <br/>
                  { doc && doc.userId }
                </div>
                <div className="JDT16">
                  <div className="pet-text">Optional</div>
                  <br/>
                  { doc && doc.body }
                </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="page-header clearfix"></div>

    </div>
  ) : <NotFound />;
};

ViewDocument.propTypes = {
  doc: PropTypes.object,
  history: PropTypes.object,
};

export default ViewDocument;
