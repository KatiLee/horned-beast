import React from 'react';

class HornedBeast extends React.Component{
    render(){
        return(
            <>
            <article>
                <h1>(this.props.name)</h1>
                <h2>(this.props.picture)</h2>
                <h3>(this.props.blerb)</h3>
            </article>
            </>
        );
    }
}

export default HornedBeast;