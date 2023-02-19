import React from 'react';
import HornedBeast from './HornedBeast.js';
import data from './data.json';
import './Main.css';
import { Container, Row } from 'react-bootstrap';

class Main extends React.Component {
    render() {
        let beast = [];
        data.forEach((newBeast, index) => {
            beast.push(
                <HornedBeast 
                beastName={newBeast.title} 
                image_url={newBeast.image_url} 
                description={newBeast.description} 
                key={index}
                addHeartEmoji={this.props.addHeartEmoji}
                handleOnShow={this.props.handleOnShow} 
                />
            );
        });
        return (
            <main>
                <Container>
                    <Row lg={4} md={3} sm={2} xs={1}>
                        {beast}
                    </Row>
                </Container>
            </main>
        );
    };
}
export default Main;






