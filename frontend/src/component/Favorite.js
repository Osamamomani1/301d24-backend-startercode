// import axios from 'axios'
// import React, { Component } from 'react'
// import Showfavorite from './Showfavorite'

// export class Favorite extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }

// export default Favorite

import React, { Component } from 'react'
import axios from 'axios'
import Favdrink from './Favdrink';

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

export default Showcoffee

