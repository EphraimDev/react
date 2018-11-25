import React from 'react';
import { Card, CardImg, CardLink, CardBody,
  } from 'reactstrap';
 
import './Cards.css';  

const Cards = (props) => {
  return (
      <Card>
        <CardBody>
          <CardImg top width="100%" src="https://i.imgur.com/z4R8rk7.jpg" alt="Snail" />
        </CardBody>
        <CardBody>
          <CardLink href="/animal rearing">We will oversee the successful rearing of your farm animals</CardLink>
          </CardBody>
      </Card>
  );
};

export default Cards;