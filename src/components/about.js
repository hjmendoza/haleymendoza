import React from 'react';

import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
  return(
    <div>
    <Carousel style={{ 
      width: '60em',
      margin: '2em auto 0 auto', 
      float: 'none', 
      }}>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://c1.staticflickr.com/3/2941/15248037137_ca496819f7_b.jpg"
        alt="Seattle skyline slide"
        width="1050"
        height="450"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://i.imgur.com/aJUv6OK.jpg"
        alt="Reflection lake slide"
        width="1050"
        height="450"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img 
        className="d-block w-100"
        src="https://i.imgur.com/Uoc1am0.jpg"
        alt="Heather lake slide"
        width="1050"
        height="450"
      />
    </Carousel.Item>
  </Carousel>
  
    <Card style={{ 
      width: '60em',
      margin: '0 auto 0 auto', 
      float: 'none', 
      }}>
    <Card.Body>
      <Card.Title>Haley Mendoza</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Software Developer</Card.Subtitle>
      <Card.Text>
        Hi! I'm Haley - a Seattle-based full-stack developer with a background in psychology and research. I have always had a keen interest in technology and thus sought to empower myself with technical skills. Through programming, I found everything that I love about research but in tenfold! I am passionate about combining research fundamentals with technology to create impactful products and am currently looking for new opportunities!
   
        In my free time, I enjoy running, taking advantage of Seattle summers, hiking, and learning new skills. Connect with me below! 
      </Card.Text>
      <Card.Link href="https://www.linkedin.com/in/haleymendoza/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="LinkedIn" icon={['fab', 'linkedin']} /></Card.Link>
      <Card.Link href="https://github.com/hjmendoza" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="Github" icon={['fab', 'github']} /></Card.Link>
    </Card.Body>
  </Card>
  </div>
  )
}

export default About;