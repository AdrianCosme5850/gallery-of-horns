import React from 'react';
import Card from 'react-bootstrap/Card';
class HornedBeast extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            vote : 0,
        }
    };
    bigPicture = () =>{
        this.props.modalOn(this.props.img)
        this.setState({
            vote: this.state.vote + 1
        })
    }
render(){
    return(
        <Card bg= "secondary" border="success">
            <Card.Img variant="top" src={this.props.img} onClick={this.bigPicture}/>
            <Card.Body>
                <Card.Title>{this.props.name}</Card.Title>
                <Card.Text>
                    {this.props.description}
                    <br></br>
                    Vote for your favorite! 
                    <br></br>
                    {this.state.vote}❤️
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
}
export default HornedBeast;