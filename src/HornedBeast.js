import React from 'react';
import Card from 'react-bootstrap/Card';
class HornedBeast extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            vote : 0,
        }
    };
    countVotes = () => {
        this.setState({
            vote: this.state.vote + 1
        })
    }
    bigPicture = () =>{
        this.props.modalOn(this.props.img)
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
        // <main>
        //     <h2>{this.props.name}</h2>
        //     <img src={this.props.img} alt={this.props.alt} title={this.props.title} onClick={this.countVotes} />
        //     <p>{this.props.description} Vote for your favorite! {this.state.vote}❤️</p>
        // </main>
    )
}
}
export default HornedBeast;