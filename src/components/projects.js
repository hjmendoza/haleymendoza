import React from 'react';

import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'

import '../styles/projects.css'

const Projects = () => {
  return(
<CardColumns>
  <Card className="top-card" style={{ width: '20rem' }}>
    <Card.Img variant="top" style={{height: '10em', width: '20em'}}src="https://placehold.it/50x50" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        First card.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>

  <Card className="bottom-card" style={{ width: '20rem' }}>
    <Card.Img variant="top" style={{height: '10em', width: '20em'}} src="https://placehold.it/50x50" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        Second card.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>


  <Card className="top-card" style={{ width: '20rem' }}>
    <Card.Img variant="top" style={{height: '10em', width: '20em'}}src="https://placehold.it/50x50" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        Third card.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>

  <Card className="bottom-card" style={{ width: '20rem' }}>
  <Card.Img variant="top" style={{height: '10em', width: '20em'}}src="https://placehold.it/50x50" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        Fourth card.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>

  <Card className="top-card" style={{ width: '20rem' }}>
    <Card.Img variant="top" style={{height: '10em', width: '20em'}}src="https://placehold.it/50x50" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        Fifth card.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>

  <Card className="bottom-card" style={{ width: '20rem' }}>
   <Card.Img variant="top" style={{height: '10em', width: '20em'}}src="https://placehold.it/50x50" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        Sixth card.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardColumns>
  )
}

export default Projects;