import React from 'react';
import './HornedBeast.css';
import Button from 'react-bootstrap/Button';

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
            <article>
             <h2>{this.props.beastName}</h2>
             <img src={this.props.image_url} alt={this.props.title} title={this.props.title}/>
             <p>{this.props.description}</p>
            <p>{this.state.likes}   Likes!</p>
            <p onClick={this.handleLikes}>Do you Love this beast?💋  Let us know by CLICKING HERE!</p>

             <div>{this.state.tooScary ? 'RUN AWAY!' : 'Awe, give em a little smooch!'}</div>
             <Button 
             variant="success" 
             onClick={this.tooScary} 
             className="buttonMargin">This horned beast is TOO scary!</Button>
             <Button 
             variant="primary" 
             onClick={this.notScary}>I'm not scared of this beast, it seems nice.</Button>

             </article>
             </>
        );
    }
}

export default HornedBeast;