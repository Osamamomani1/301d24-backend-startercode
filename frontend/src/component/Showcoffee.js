import React, { Component } from 'react'
import axios from 'axios';
import { Card,Button } from 'react-bootstrap';


export class Showcoffee extends Component {
    constructor(props){
        super(props);
        this.state={
        REACT_APP_BACKEND_URL: process.env.REACT_APP_BACKEND_URL
        }
    }

    addFavdrink= async (item)=>{
        let favDrink=item;
        await axios.post(`${this.state.REACT_APP_BACKEND_URL}//create`,favDrink)
    }

    render() {
        return (
            <div>
                {this.props.allDrink.map((item, index)=>{
                    return(
            <Card style={{ width: '18rem' , display:'inline-block'}}>
                <Card.Img variant="top" src={item.image_url} />
                <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
               {item.ingredients}
                </Card.Text>
                <Button variant="primary" onClick={()=> {this.addFavdrink(item)}}>Add to Favorite</Button>
                </Card.Body>
            </Card>

                    )
                })}
            </div>
        )
    }
}

export default Showcoffee
