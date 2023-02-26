import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js'
import Footer from './Footer.js'
import data from './data.json';
import HornedBeast from './HornedBeast';
import SelectedBeast from './SelectedBeast';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      heartEmoji: '',
      showModal: false,
      selectedBeast: '',
    }
  }

  handleOnShow = (selectedBeast) => {
    this.setState({
      showModal: true,
      selectedBeast: selectedBeast
    });
  };

  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };

  render(){
    return(
      <div className='App'>
     <Header/>
      <Main
      handleOnShow = {this.handleOnShow}
      data = {data}
      />
      <HornedBeast
      selectedBeast = {this.state.selectedBeast}
      handleOnShow = {this.state.showModal}
      handleClose = {this.handleClose}
      />
      <Footer/>

      </div>
    );
  }
}

export default App;
