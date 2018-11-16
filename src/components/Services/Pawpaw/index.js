import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle } from 'reactstrap';
import '../Services.css';

const Service = (props) => {
  return (
    <div>
      <Card className="card-services">
        <CardBody className="card-body-services">
          <CardTitle>Pawpaw Farming</CardTitle>
        </CardBody>
        <CardBody >
          <CardImg className="col-lg-6" width="100%" src="https://i.imgur.com/4LxhKiH.jpg" alt="PawPaw" />
          <CardText className="col-md-12 col-lg-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</CardText>
          <CardLink href="/login" className="service-link">Click to continue...</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default Service;