import React from 'react';
import { Card, CardImg, CardLink, CardBody,
  } from 'reactstrap'; 

const Cards = (props) => {
  return (
      <Card>
        <CardBody>
          <CardImg top width="100%" src="https://i.imgur.com/4LxhKiH.jpg" alt="PawPaw" />
        </CardBody>
        <CardBody>
          <CardLink href="/pawpaw">Pawpaw Farming</CardLink>
        </CardBody>
      </Card>
  );
};

export default Cards;