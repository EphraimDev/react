import React from 'react';
import { Card, CardImg, CardLink, CardBody,
  } from 'reactstrap';
 
import './Cards.css';  

const Cards = (props) => {
  return (
      <Card>
        <CardBody>
          <CardImg top width="100%" src="https://i.imgur.com/1ftRMNA.jpg" alt="Training" />
        </CardBody>
        <CardBody>
        <CardLink href="/training and consultancy">We offer consultancy services to new or existing agriculture entrepreneurs</CardLink>
        </CardBody>
      </Card>
  );
};

export default Cards;