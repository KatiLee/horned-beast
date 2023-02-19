import React from 'react';
import './HornedBeast.css';
// import Button from 'react-bootstrap/Button';
import { Card, Button, Col } from 'react-bootstrap';

class HornedBeast extends React.Component{
constructor(props){
    super(props);
    this.state = {
        likes: 0,
        tooScary: false,
    };
}

handleLikes = () => {
    this.setState({
        likes: this.state.likes + 1,
        });
        console.log('how many likes? ', this.state.likes)
    }

tooScary = () => {
    this.setState({
        tooScary: true,
    });
}


notScary = () => {
    this.setState({
        tooScary: false,
    });
}

    render(){
        return(
            <>
            <Col className="mt-4">
                <Card className="h-100 p-3">
                    <Card.Title onClick={this.helpHandleOnShow}>
                        {this.props.title}
                    </Card.Title>
                    <Card.Img
                    className='mb-4'
                    src={this.props.image_url}
                    alt={this.props.description}
                    title={this.props.title}
                    onClick={this.props.addSmooch}
                    />
                <p>{this.state.likes} Likes</p>
                <p onClick={this.handleLikes}>Click to Love this beast!</p>
                <div>{this.state.tooScary ? 'Give the cutie a smooch!' : ''}</div>
                <Button onClick={this.needsSmooch} className="buttonMargin">This beast is too scary!</Button>
                <Button variant="success" onClick={this.tooScary}>
                    I'm not scared at all!
                </Button>
                </Card>
            </Col>
             </>
        );
    }
}

export default HornedBeast;