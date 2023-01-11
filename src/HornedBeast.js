import React from 'react';
import './HornedBeast.css';


class HornedBeast extends React.Component{
    render(){
        return(
            <>
            <article>
             <h2>{this.props.title}</h2>
             onClick={this.handleLikeClick} src={this.props.imageURL} alt={this.props.title} title={this.props.title}/>
             </article>
             </>
        );
    }
}

export default HornedBeast;