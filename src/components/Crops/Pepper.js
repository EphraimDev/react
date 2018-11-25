import React from 'react';
import { Card, CardImg, CardLink, CardBody,
  } from 'reactstrap'; 

const CardTwo = (props) => {
  return (
      <Card>
        <CardBody>
          <CardImg top width="100%" src="https://i.imgur.com/V3XW5o4.jpg" alt="Pepper Farming" />
        </CardBody>
        <CardBody>
          <CardLink href="/pepper">Pepper Farming</CardLink>
          </CardBody>
      </Card>
  );
};

export default CardTwo;