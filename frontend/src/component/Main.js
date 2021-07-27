import React, { Component } from 'react'
import axios from 'axios';
import Showcoffee from './Showcoffee';

export class Main extends Component {
    constructor(props){
        super(props);
        this.state={
        REACT_APP_BACKEND_URL:process.env.REACT_APP_BACKEND_URL,
        allDrink:[],
        showstate:false
        }
    }

    componentDidMount=async (item)=>{
        let allDrink= await axios.get(`${this.state.REACT_APP_BACKEND_URL}/retreive`)
        this.setState({
            allDrink:allDrink.data,
            showstate:true
        })
    }
    render() {
        return (
            <div>
                {this.state.showstate &&(
                    <Showcoffee allDrink={this.state.alldrink}/>
                ) 
                }
            </div>
        )
    }
}

export default Main
