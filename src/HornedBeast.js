import React from 'react';
import './HornedBeast.css';


class HornedBeast extends React.Component{
    render(){
        return(
            <>
            <article>
             <h2>{this.props.beastName}</h2>
             <img src={this.props.image_url} alt={this.props.title} title={this.props.title}/>
             <p>{this.props.description}</p>
             </article>
             </>
        );
    }
}

export default HornedBeast;