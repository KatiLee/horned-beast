import React from 'react';
import './HornedBeast.css';


class HornedBeast extends React.Component{
constructor(props){
    super(props);
    this.state = {

    }
}

handleLikes = () => {
    
}

    render(){
        return(
            <>
            <article>
             <h2>{this.props.beastName}</h2>
             <img src={this.props.image_url} alt={this.props.title} title={this.props.title}/>
             <p>{this.props.description}</p>
            <p>Do you love this beast?</p>
            <p onClick={this.handleLikes}>Let us know by CLICKING HERE!</p>

             </article>
             </>
        );
    }
}

export default HornedBeast;