import React, { PropTypes } from 'react';
import { ButtonToolbar, ButtonGroup, Button,Carousel,Col,Row } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { removeShop } from '../../api/shops/methods';
import NotFound from './NotFound';
import { Meteor } from 'meteor/meteor';
import MessagesList from '../containers/MessagesList.js';
import { Link } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
import Reviews from '../containers/ReviewsList.js';

const handleEdit = (history, _id) => {
  history.push(`/shops/${_id}/edit`);
};

//<div className="circle-1">{text}</div>
//<div className="circle-1">xxxx</div>
const AnyReactComponent = ({ text }) => (
  <div>
    <img alt="Shop here" src="/shop2.png" height="50" width="50" />
  </div>
);

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
                <Col xs={ 12 } md ={8} sm={ 8 }>
                <div>
                  <Carousel>
                    <Carousel.Item>
                      <img alt="640x360" src={doc.pic1} responsive/>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img alt="640x360" src={doc.pic2} responsive/>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img alt="640x360" src={doc.pic3} responsive/>
                    </Carousel.Item>
                  </Carousel>
                  </div>
                </Col>
                <Col xs={ 12 } md ={4} sm={ 4 }>
                <br/>
                  <h4>Description</h4>
                    <div className="description">
                      <p>
                        { doc && doc.detail2 }
                      </p>
                    </div>
                  <br/>
                  <h4>Starting price</h4>
                  <p>{doc.price} Bath</p><br/>
                  <ButtonGroup vertical block>
                    <Button bsSize="large" disabled>ติดต่อสอบถาม</Button>
                  </ButtonGroup>
                  <ButtonGroup vertical block>
                    <Button bsStyle="primary" bsSize="large" disabled>จองเลย</Button>
                  </ButtonGroup>
                </Col>
              </Row>
              <div className="space-1"></div>
              <h4 className="pull-left">Shop location</h4>
              <div className="page-header clearfix"></div>
              <div className="map">
                <GoogleMapReact
                  defaultCenter={{lat:parseFloat(doc.lat), lng:parseFloat(doc.long)}}
                  defaultZoom={17}
                    >
                  <AnyReactComponent
                    lat={parseFloat(doc.lat)}
                    lng={parseFloat(doc.long)}
                    text={'Shop'}
                  />
              </GoogleMapReact>
              <div className="space-1"></div>
              </div>
            </div>
          </div>

          <div className="space-1"></div>
          <div className="page-header clearfix">
          <h4 className="pull-left">Review</h4><ButtonToolbar className="pull-right">
                <ButtonGroup bsSize="small">
                  <Link to="/reviews/new">
                    <Button
                      onClick={() => handleReview(doc._id)}
                      className="pull-right" disabled
                    >review</Button>
                  </Link>
                </ButtonGroup>
              </ButtonToolbar>
          </div>

          <div className="JDT18">
              <Reviews history={history} />
          </div>

          <div className="page-header clearfix"></div>


      </div> :
      userRole() == "customer" ?
      <div className="ViewShop">
        <div className="page-header clearfix">
        <h4 className="pull-left">{ doc && doc.title }</h4><ButtonToolbar className="pull-right">
              <ButtonGroup bsSize="small">
                <Link to="/reviews/new">
                  <Button
                    onClick={() => handleReview(doc._id)}
                    className="pull-right"
                  >review</Button>
                </Link>
              </ButtonGroup>
            </ButtonToolbar>
        </div>
          <div>
            <div>
              <Row>
                <Col xs={ 12 } md ={8} sm={ 8 }>
                <div>
                  <Carousel>
                    <Carousel.Item>
                      <img alt="640x360" src={doc.pic1} responsive/>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img alt="640x360" src={doc.pic2} responsive/>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img alt="640x360" src={doc.pic3} responsive/>
                    </Carousel.Item>
                  </Carousel>
                  </div>
                </Col>
                <Col xs={ 12 } md ={4} sm={ 4 }>
                <br/>
                  <h4>Description</h4>
                    <div className="description">
                      <p>
                        { doc && doc.detail2 }
                      </p>
                    </div>
                  <br/>
                  <h4>Starting price</h4>
                  <p>{doc.price} Bath</p><br/>
                  <Link to="/messages/new">
                    <ButtonGroup vertical block>
                    <Button bsSize="large" onClick={() => handleSendMessage(doc.userId)}>ติดต่อสอบถาม</Button>
                    </ButtonGroup>
                  </Link>
                  <div className="JDT13"></div>
                  <Link to="/bookings/new">
                    <ButtonGroup vertical block>
                    <Button bsStyle="primary" bsSize="large" onClick={() => handleSendMessage(doc.userId)}>จองเลย</Button>
                    </ButtonGroup>
                  </Link>
                </Col>
              </Row>
              <div className="space-1"></div>
              <h4 className="pull-left">Shop location</h4>
              <div className="page-header clearfix"></div>
              <div className="map">
                <GoogleMapReact
                  defaultCenter={{lat:parseFloat(doc.lat), lng:parseFloat(doc.long)}}
                  defaultZoom={17}
                    >
                  <AnyReactComponent
                    lat={parseFloat(doc.lat)}
                    lng={parseFloat(doc.long)}
                    text={'Shop'}
                  />
              </GoogleMapReact>
              <div className="space-1"></div>
              </div>
            </div>
          </div>

          <div className="space-1"></div>
          <div className="page-header clearfix">
          <h4 className="pull-left">Review</h4><ButtonToolbar className="pull-right">
                <ButtonGroup bsSize="small">
                  <Link to="/reviews/new">
                    <Button
                      onClick={() => handleReview(doc._id)}
                      className="pull-right"
                    >review</Button>
                  </Link>
                </ButtonGroup>
              </ButtonToolbar>
          </div>

          <div className="JDT18">
              <Reviews history={history} />
          </div>

          <div className="page-header clearfix"></div>

      </div> :
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
