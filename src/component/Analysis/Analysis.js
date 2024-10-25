import React, { Component, Fragment } from 'react';
import { Col, Container, Row,} from 'react-bootstrap';
import { Bar, BarChart, ResponsiveContainer, XAxis, Tooltip } from 'recharts';

class Analysis extends Component {
    constructor(){
        super();
        this.state={
            data:[
            {Technology: 'Java', Projects:100},
            {Technology: 'Kotlin', Projects:40},
            {Technology: 'Sql', Projects:90},
            {Technology: 'bootstrap', Projects:95},
            {Technology: 'Jquery', Projects:60},
            {Technology: 'React', Projects:90},
            {Technology: 'PHP', Projects:100},
            {Technology: 'Angular', Projects:65}
        ]
    }
    }
    render() {
        var blue="rgba(0,115,230,0.8)"
        return (
            <Fragment>
                 <Container className="text-justify">
                    <h1 className="serviceMainTitle">Technology Used</h1>
                    <Row>
                     <Col style={{width:'50%', height: '300px' }} lg={6} md={12} sm={12}>
                    <ResponsiveContainer>
                    <BarChart width={100} height={300} data={this.state.data}>
                   <XAxis dataKey="Technology"/>
                   <Tooltip/>
                    <Bar dataKey="Projects" fill={blue}></Bar>
                    </BarChart>
                    </ResponsiveContainer>
                    
                    
                    </Col>

                    <Col lg={6} md={12} sm={12}>
                   <p className=" text-justify des">
                   Are you looking for an amazing, unique, highly SEO optimized, and responsive WordPress website design for your business?
                If yes, then you are in the right place. I am here to provide you high-quality responsive WordPress website design & development service. 
               <br/>
                My goal is to create a professional design that will beat your competitor's site.
                I will build an Amazing WordPress website design based on the latest trends in the market, tools, and technology. I am a professional WordPress developer with over 3 years of experience in website building.
                   </p>
                    </Col>

                    </Row>

                </Container>
                
            </Fragment>
        );
    }
}

export default Analysis;
