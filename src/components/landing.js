import React from 'react';

import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { LinkedIn } from '@fortawesome/free-brands-svg-icons'
// import { faLinkedIn} from '@fortawesome/free-brands-svg-icons'


import '../styles/landing.css'

const Landing = () => {
  return(
    <Container>
      <Image src="https://avatars2.githubusercontent.com/u/28276872?s=400&u=54938bb1b70036c10c0e2b82ca732cdf121cc96c&v=4" roundedCircle />
      <Card className="text-center">
        <Card.Header>Haley Mendoza</Card.Header>
        <Card.Body>
          <Card.Title>Software Developer</Card.Title>
          <Card.Text>
            JavaScript | HTML/CSS | React | NodeJS | Express | MongoDB 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <a className="LinkedIn" href="#linkedIn"><FontAwesomeIcon className="LinkedIn" icon={['fab', 'linkedin']} /></a>
          <a className="Github" href="#github"><FontAwesomeIcon className="Github" icon={['fab', 'github']} /></a>
        </Card.Footer>
      </Card>
    </Container>
  )
}

export default Landing;