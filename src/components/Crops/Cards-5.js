import React from 'react';
import { Card, CardImg, CardLink, CardBody,
  } from 'reactstrap';
 
import './Cards.css';  

const Cardfive = (props) => {
  return (
      <Card>
        <CardBody>
          <CardImg top width="100%" src="https://i.imgur.com/CGeTokH.jpg" alt="Orange" />
        </CardBody>
        <CardBody>
          <CardLink href="/orange">Orange Farming</CardLink>
          </CardBody>
      </Card>
  );
};

export default Cardfive;