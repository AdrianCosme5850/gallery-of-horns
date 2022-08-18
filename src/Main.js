import React from 'react';
import HornedBeast from './HornedBeast.js'
import Row from 'react-bootstrap/Row';
class Main extends React.Component{
render(){
    let hornedBeasts = this.props.data.map((newBeast, idx) =>{
           return <HornedBeast
            name={newBeast.title}
            img={newBeast.image_url}
            description={newBeast.description}
            key={idx}
            modalOn={this.props.modalOn}
            modalOff={this.props.modalOff}
            />} )
    return(
    <>
    <Row xs={4} md={4} lg={4}>
    {hornedBeasts}
    </Row>
    </>
    )
}
}

export default Main;