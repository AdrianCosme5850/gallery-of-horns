import React from 'react';
import data from './data.json'
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Foot.js';
import SelectedBeast from './SelectedBeast.js';
import Filter from './Form.js';
import './App.css';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false,
      image: '',
      filter: '',
      data: data
    }
  }
  modalOn = (image) => {
    this.setState({
      showModal: true,
      image: image
    }) 
  }
  modalOff = () => {
    this.setState({
      showModal: false,
      image: '',
    }) 
    console.log(this.state.showModal);
  }
  filterState = (event) => {
    let filterNumber = event.target.value;
    this.setState({
      filter: filterNumber
  })
  console.log(this.state.filter)
  }
  filterBeasts = (event) =>{
    event.preventDefault();
    let filteredBeasts = []
    this.state.filter === 'one' ? filteredBeasts = data.filter(beasts => beasts.horns === 1):
    this.state.filter === 'two' ? filteredBeasts = data.filter(beasts => beasts.horns === 2):
    this.state.filter === 'three' ? filteredBeasts = data.filter(beasts => beasts.horns === 3):
    this.state.filter === 'more than three' ? filteredBeasts = data.filter(beasts => beasts.horns > 3): console.log('no filter')
    this.setState({
      data: filteredBeasts,
    })
    console.log(data)
  }
  render(){
    return (
      <div>
       <Header/>
       <Filter
       filterState={this.filterState}
       filterBeasts={this.filterBeasts}/>
       <Main
       modalOn={this.modalOn}
       data={this.state.data}/>
       <SelectedBeast
       showModal={this.state.showModal}
       modalOff={this.modalOff}
       image={this.state.image}/>
       <Footer/>
      </div>
    )
  }
}

export default App;