import React from 'react';
import './HornedBeast.css';


class HornedBeast extends React.Component{
constructor(props){
    super(props);
    this.state = {
        likes: 0
    }
}

handleLikes = () => {
    this.setState = ({
        likes: this.state.likes + 1,
        });
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
            <p onClick={this.handleLikes}>Do you Love this beast? Let us know by CLICKING HERE!</p>

             <Button onClick={this.tooScary} className="buttonMargin"></Button>
             <Button vartiant="success" ></Button>
             
             
             
             
             </article>
             </>
        );
    }
}

export default HornedBeast;