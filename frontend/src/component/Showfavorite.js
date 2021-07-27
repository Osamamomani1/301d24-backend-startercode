import React, { Component } from 'react'

export class Showcoffee extends Component {
    constructor(props){
        super(props);
        this.state={
        REACT_APP_BACKEND_URL:process.env.REACT_APP_BACKEND_URL,
        allfavDrink:[],
        showstate:false
        }
    }

    componentDidMount=async (item)=>{
        let allfavDrink= await axios.get(`${this.state.REACT_APP_BACKEND_URL}//fav-list`)
        this.setState({
            allfavDrink:allfavDrink.data,
            showstate:true
        })
    }
    render() {
        return (
            <div>
               {this.state.showstate &&(
                    <Favdrink allfavDrink={this.state.alldrink}/>
                ) 
                }  
            </div>
        )
    }
}

export default Showfavorite
