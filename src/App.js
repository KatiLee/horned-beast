import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js'
import Footer from './Footer.js'
import data from './data.json';
import Modal from 'react-bootstrap/Modal';
import HornedBeast from './HornedBeast';
import SelectedBeast from './SelectedBeast';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      heartEmoji: '',
      showModal: false,
      selectBeast: '',
    }
  }

  addHeartEmoji = () => {
    this.setState({
      heartEmoji: this.state.heartEmoji + "💖"
    });
  };

  handleOnShow = (selectBeast) => {
    this.setState({
      showModal: true,
      selectBeast: selectBeast
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
      selectBeast = {this.state.selectBeast}
      handleOnShow = {this.state.showModal}
      handleClose = {this.handleClose}
      />
      <Footer/>
      <SelectedBeast/>
      <Modal show={this.state.showModal} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.state.selectBeast}</Modal.Title>
        </Modal.Header>
        </Modal>
      </div>
    );
  }
}

export default App;
