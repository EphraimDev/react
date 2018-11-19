import React from 'react';
import { Card, CardImg, CardLink, CardBody,
  } from 'reactstrap';
 
import './Cards.css';  

const CardOne = (props) => {
  return (
      <Card>
        <CardBody>
          <CardImg top width="100%" src="https://i.imgur.com/eQEUyNl.jpg" alt="banana" />
        </CardBody>
        <CardBody>
          <CardLink href="/">Crop Production</CardLink>
          </CardBody>
      </Card>
  );
};

export default CardOne;