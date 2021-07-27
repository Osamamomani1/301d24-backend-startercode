import React, { Component } from 'react'
import axios from 'axios';
import { Card,Button } from 'react-bootstrap';
import Updatefav from './Updatefav';

export class Favdrink extends Component {
    constructor(props){
        super(props);
        this.state={
            REACT_APP_BACKEND_URL: process.env.REACT_APP_BACKEND_URL,
            allfavDrink:this.props.allfavDrink,
            id:'',
            title:'',
            ingredients:'',
            img:'',
            showstate:false

        }
    }

    //delet
    deletFavdeink=async(item)=>{
        let id= item._id
        let deletedData= await axios.delete(`${this.state.REACT_APP_BACKEND_URL}/delete/${id}`)
        this.setState({
            allfavDrink:deletedData.data
        })
    }

    // show

    showForm=(item)=>{
        this.setState({
            id:item._id,
            title:item.title,
            ingredients:item.ingredients,
            ingredients:item.img,
            showstate:true
        })
    }

    //onchange

    onchangetitle=(e)=>{
        this.setState({
            title:e.target.value  
        })
    }

    onchangeingredients=(e)=>{
        this.setState({
            ingredients:e.target.value  
        })
    }

    //update 

    updateFavdrink= async (e)=> {
        e.preventDefault();
        let updateData= {
            title:this.state.title, 
            ingredients:this.state.ingredients
        }

        let updateFavdata= await axios.put(`${this.state.REACT_APP_BACKEND_URL}/update/${this.state.id}`,updateData)
        this.setState({
            allfavDrink:updateFavdata.data,
            showstate:true
        })
    }



    render() {
        return (
            <div>
                {
                    this.state.showstate && (
                        <Updatefav
                        updateFavdrink={this.updateFavdrink}
                        onchangetitle={this.onchangetitle}
                        onchangeingredients={this.onchangeingredients}
                        title={this.state.title}
                        ingredients={this.state.ingredients}
                        />
                    )
                }

                {
                    this.state.allfavDrink.map((item,index)=>{
                        return(
                        <Card style={{ width: '18rem' , display:'inline-block'}}>
                            <Card.Img variant="top" src={item.image_url} />
                            <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                           {item.ingredients}
                            </Card.Text>
                            <Button variant="primary" onClick={()=> {this.deletFavdeink(item)}}>Add to Favorite</Button>
                            <Button variant="primary" onClick={()=> {this.showForm(item)}}>Add to Favorite</Button>
                            </Card.Body>
                        </Card>
                        )
                    })
                }
            </div>
        )
    }
}

export default Favdrink
