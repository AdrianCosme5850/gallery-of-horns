import React from 'react';
import HornedBeast from './HornedBeast.js'
import data from './data.json'
import Row from 'react-bootstrap/Row';
class Main extends React.Component{
render(){
    let hornedBeasts = [];
    data.forEach((newBeast, idx) =>{
        hornedBeasts.push(
            <HornedBeast
            name={newBeast.title}
            img={newBeast.image_url}
            description={newBeast.description}
            key={idx}
            />
        )
    })
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