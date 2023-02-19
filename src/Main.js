import React from 'react';
import HornedBeast from './HornedBeast.js';
import data from './data.json';
import './Main.css';

class Main extends React.Component {
    render() {
        let beast = [];
        data.forEach((newBeast, index) => {
            beast.push(
                <HornedBeast beastName={newBeast.title} image_url={newBeast.image_url} description={newBeast.description} key={index} />
            );
        });
        return (
            <main>
                {beast}
            </main>
        );
    };
}
export default Main;






