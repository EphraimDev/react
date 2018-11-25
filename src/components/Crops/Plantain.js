import React from 'react';
import { Card, CardImg, CardLink, CardBody,
  } from 'reactstrap';

const Cards = (props) => {
  return (
      <Card>
        <CardBody>
          <CardImg top width="100%" src="https://i.imgur.com/IRT9h51.jpg" alt="Plantain" />
        </CardBody>
        <CardBody>
          <CardLink href="/plantain">Plantain Plantaintion</CardLink>
          </CardBody>
      </Card>
  );
};

export default Cards;