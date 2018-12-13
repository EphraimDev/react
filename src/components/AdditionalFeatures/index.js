import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const Features = (props) => {
  return (
    <Row>
      <Col className="features" sm="4">
        <Card>
          <img top="true" width="100%" src="https://i.imgur.com/tFCqcHL.jpg" alt="Home Delivery" />
          <CardTitle>Home Delivery</CardTitle>
          <CardText>Distance is not a barrier. We will deliver your ordered package to your doorsteps wherever your location is.</CardText>
        </Card>
      </Col>
      <Col className="features" sm="4">
        <Card>
          <img top="true" width="100%" src="https://i.imgur.com/WwMDusf.jpg" alt="Invest" />
          <CardTitle>Investment Opportunity</CardTitle>
          <CardText>At WizzyAgro, we are open to angel or active investors that seek to take advantage of a booming sector</CardText>
          <Button>Continue</Button>
        </Card>
      </Col>
    </Row>
    );
  };

export default Features;