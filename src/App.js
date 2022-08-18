import React from 'react';
import data from './data.json'
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Foot.js';
import SelectedBeast from './SelectedBeast.js';
import './App.css';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false,
      image: ''
    }
  }
  modalOn = (image) => {
    this.setState({
      showModal:this.state.showModal + true,
      image: image
    }) 
  }
  modalOff = () => {
    this.setState({
      showModal:this.state.showModal + false
    }) 
  }
  render(){
    return (
      <div>
       <Header/>
       <Main
       modalOn={this.modalOn}
       modalOff={this.modalOff}
       data={data}/>
       <SelectedBeast
       showModal={this.state.showModal}/>
       <Footer/>
      </div>
    )
  }
}

export default App;