import React from 'react';
import { Card, CardImg, CardLink, CardBody,
  } from 'reactstrap';
 
import './Cards.css';  

const Cards = (props) => {
  return (
      <Card>
        <CardBody>
          <CardImg top width="100%" src="https://i.imgur.com/tFCqcHL.jpg" alt="Home Delivery" />
        </CardBody>
        <CardBody>
          <CardLink href="/home delivery">You can pick up farm produce from our stores or we have them delivered to your house</CardLink>
          </CardBody>
      </Card>
  );
};

export default Cards;