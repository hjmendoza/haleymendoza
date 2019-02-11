import React from 'react';

import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import '../styles/landing.css'

const Landing = () => {
  return(
    <Container>
      <Image src="https://via.placeholder.com/250x275" roundedCircle />
      <Card className="text-center">
        <Card.Header>Haley Mendoza</Card.Header>
        <Card.Body>
          <Card.Title>Software Developer</Card.Title>
          <Card.Text>
            JavaScript | HTML/CSS | React | NodeJS | Express | MongoDB 
          </Card.Text>
        </Card.Body>
        <Card.Footer>icon icon icon icon</Card.Footer>
      </Card>
    </Container>
  )
}

export default Landing;