import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import "video-react/dist/video-react.css"
import { Player, BigPlayButton } from 'video-react';
class Video extends Component {
    constructor(){
        super();
        this.state={
            show:false
        }
    }
    modalClose=()=>this.setState({show:false})
    modalOpen=()=>this.setState({show:true})
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <Row>
                         <Col lg={12} md={12}sm={12} className="videoCard">
                        <div>
                            <p className="videoTitle" > How I do</p>
                            <p className="videoDes">I will build an Amazing WordPress website design based on the latest trends in the market, tools, and technology. I am a professional WordPress developer with over 3 years of experience in website building.</p>
                            <p ><FontAwesomeIcon onClick={this.modalOpen} className="iconBullet playBtn " icon={faPlayCircle}/></p>
                        </div>
                        </Col>
                    </Row>
                    <Modal size="lg"show={this.state.show} onHide={this.modaClose}>
        
        <Modal.Body>
            <Player>
            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>
           <BigPlayButton position="center"/>
            </Player>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.modalClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>
                </Container>
                
            </Fragment>
        );
    }
}

export default Video;
