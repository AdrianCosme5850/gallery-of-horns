import React from 'react';
import Header from './header.js';
import Main from './Main.js';
import Footer from './Foot.js';
class App extends React.Component {
  render(){
    return (
      <div>
       <Header/>
       <Main/>
       <Footer/>
      </div>
    )
  }
}

export default App;