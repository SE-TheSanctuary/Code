import React, { PropTypes } from 'react';
import { ButtonToolbar, ButtonGroup, Button,Carousel,Col,Row } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { removeShop } from '../../api/shops/methods';
import NotFound from './NotFound';
import { Meteor } from 'meteor/meteor';
import MessagesList from '../containers/MessagesList.js';
import { Link } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';

const handleEdit = (history, _id) => {
  history.push(`/shops/${_id}/edit`);
};

const AnyReactComponent = ({ text }) => (<div>{text}</div>);

const handleRemove = (history, _id) => {
  if (confirm('Are you sure? This is permanent!')) {
    removeShop.call({ _id }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Shop deleted!', 'success');
        history.push('/shops');
      }
    });
  }
};
//
const handleSendMessage = (userId) => {
  console.log("send");
  console.log(userId);
  receiveId = userId;
  console.log(receiveId);
};

const handleReview = (_id) => {
  console.log("review");
  console.log(_id);
  reviewId = _id;
  console.log(reviewId);
};

const userID = () => {
  const user = Meteor.user();
  return user ? `${user._id}` : '';
};

const userRole = () => {
  const user = Meteor.user();
  const profile = user ? user.profile : '';
  return user ? `${profile.roles}` : '';
};

const ViewShop = ({ doc, history }) => {
  console.log("ViewShop");
  console.log(doc.userId);
  return doc ? (
    userID() == doc.userId ?
      <div className="ViewShop">
        <div className="page-header clearfix">
        <h4 className="pull-left">{ doc && doc.title }</h4>
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
            <div>
              <Row>
                <Col xs={ 12 } sm={ 8 }>
                <div>
                  <Carousel>
                    <Carousel.Item>
                      <img alt="640x360" src="/pet1.jpg" responsive/>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img alt="640x360" src="/pet2.jpg" responsive/>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img alt="640x360" src="/pet3.jpg" responsive/>
                    </Carousel.Item>
                  </Carousel>
                  </div>
                </Col>
                <Col xs={ 12 } sm={ 4 }>
                <br/>
                  <h4>Description</h4>
                    <div className="description">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in consectetur purus, et porta eros. Sed convallis blandit velit
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in consectetur purus, et porta eros. Sed convallis blandit velit. Nulla id lorem convallis, venenatis justo in, sollicitudin neque. Morbi non nibh metus. Curabitur at mauris felis. Cras velit mauris, pharetra id risus vitae, rutrum eleifend urna. Nunc est sapien, consectetur sit amet tortor at, egestas congue elit.
                      </p>
                    </div>
                  <br/>
                  <h4>Starting price</h4>
                  <p>1500 Bath</p><br/>
                  <ButtonGroup vertical block>
                    <Button bsSize="large">ติดต่อสอบถาม</Button>
                  </ButtonGroup>
                  <ButtonGroup vertical block>
                    <Button bsStyle="primary" bsSize="large">จองเลย</Button>
                  </ButtonGroup>
                </Col>
              </Row>
              <div className="space-1"></div>
              <h4 className="pull-left">Shop location</h4>
              <div className="page-header clearfix"></div>
              <div className="map">
                <GoogleMapReact
                  defaultCenter={{lat: 13.728990, lng: 100.775297}}
                  defaultZoom={17}
                    >
                  <AnyReactComponent
                    lat={13.728990}
                    lng={100.775297}
                    text={'Shop'}
                  />
              </GoogleMapReact>
              <div className="space-1"></div>
              </div>
            </div>
          </div>
      </div> :
      userRole() == "customer" ?
      <div className="ViewShop">
        <div className="page-header clearfix">
          <h4 className="pull-left">My Message</h4>
            <ButtonToolbar className="pull-right">
              <ButtonGroup bsSize="small">
                <Link to="/messages/new">
                  <Button
                    onClick={() => handleSendMessage(doc.userId)}
                    bsStyle="success"
                    className="pull-right"
                  >send message</Button>
                </Link>
                <Link to="/bookings/new">
                  <Button
                    onClick={() => handleSendMessage(doc.userId)}
                    bsStyle="success"
                    className="pull-right"
                  >booking</Button>
                </Link>
                <Link to="/reviews/new">
                  <Button
                    onClick={() => handleReview(doc._id)}
                    bsStyle="success"
                    className="pull-right"
                  >review</Button>
                </Link>
              </ButtonGroup>
            </ButtonToolbar>
        </div>
        shopName: { doc && doc.title }<br/>
        shopOwnerId: { doc && doc.userId }<br/>
        shopDetail1: { doc && doc.detail1 }<br/>
        shopDetail2: { doc && doc.detail2 }
      </div>:
        <div className="ViewShop">
          <div className="page-header clearfix">
            <h4 className="pull-left">My Message</h4>
              <ButtonToolbar className="pull-right">
                <ButtonGroup bsSize="small">
                  <Link to="/messages/new">
                    <Button
                      onClick={() => handleSendMessage(doc.userId)}
                      bsStyle="success"
                      className="pull-right"
                    >send message</Button>
                  </Link>
                </ButtonGroup>
              </ButtonToolbar>
          </div>
        shopName: { doc && doc.title }<br/>
        shopOwnerId: { doc && doc.userId }<br/>
        shopDetail1: { doc && doc.detail1 }<br/>
        shopDetail2: { doc && doc.detail2 }
      </div>
  ) : <NotFound />;
};

ViewShop.propTypes = {
  doc: PropTypes.object,
  history: PropTypes.object,
  receiveId: PropTypes.object,
};

export default ViewShop;
