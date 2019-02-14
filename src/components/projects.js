import React from 'react';

import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../styles/projects.css'
import PN from '../assets/PN-screen.png'
import WR from '../assets/WR-screen.png'
import AR from '../assets/AR-screen.png'


const Projects = () => {
  return(
<CardColumns>
  <Card className="top-card" style={{ width: '20rem' }}>
    <Card.Img variant="top" style={{height: '15em', width: '20em'}} src={PN}/>
    <Card.Body>
      <Card.Title><a href="https://play-nine-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">Play Nine</a></Card.Title>
      <Card.Text>
      This is a simple React math game. Given a random number of stars, use a range of numbers from 1-9 to sum up to the total number of displayed stars. Use up every number, without repeating, before you run out of attempts!
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">
      <Card.Link href="https://github.com/hjmendoza/play-nine" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="Github" icon={['fab', 'github']} /></Card.Link></small>
    </Card.Footer>
  </Card>

  <Card className="top-card" style={{ width: '20rem' }}>
    <Card.Img variant="top" style={{height: '15em', width: '20em'}} src={WR}/>
    <Card.Body>
      <Card.Title><a href="http://weighted-randomizer.herokuapp.com/" target="_blank" rel="noopener noreferrer">Weighted Randomizer</a></Card.Title>
      <Card.Text>
      Customizable weighted randomizer NPM package. It allows data input through array(s) and selects a specified number of random items to return a weighted result. The function also has an optional shuffler function to rearrange the order of items.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">
      <Card.Link href="https://github.com/icantbelieveitsnotrandom/imeanireallycantbelieveitsnotrandom" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="Github" icon={['fab', 'github']} /></Card.Link></small>
    </Card.Footer>
  </Card>


  <Card className="top-card" style={{ width: '20rem' }}>
    <Card.Img variant="top" style={{height: '15em', width: '20em'}} src={AR}/>
    <Card.Body>
      <Card.Title><a href="https://artistree.herokuapp.com/" target="_blank" rel="noopener noreferrer">Aristree</a></Card.Title>
      <Card.Text>
      A fresh way to discover new music from Spotify, curated directly from your top artists. Upon log in, your Spotify top artists are displayed. Through an interactive D3.js tree, explore recommended artists based on your current favorites. 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">
      <Card.Link href="https://github.com/Seattle-Artistree/artistree" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="Github" icon={['fab', 'github']} /></Card.Link></small>
    </Card.Footer>
  </Card>

</CardColumns>
  )
}

export default Projects;