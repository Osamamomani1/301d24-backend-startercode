import React, { Component } from 'react'
import { Form,Modal,Button } from 'react-bootstrap'

export class Updatefav extends Component {
    render() {
        return (
            <div>
              <Modal show={true}>
            <Modal.Header>
                <Modal.Title>Drink</Modal.Title>
            </Modal.Header>
            <Modal.Body>


                <Form onSubmit={(e)=>{this.props.updateFavdrink(e)}}> 
            <Form.Label for='fname'>Name</Form.Label>
            <Form.Control type="text" value={this.props.title} onChange={(e)=> {this.props.onchangetitle(e)}}></Form.Control>

            <Form.Label for='fname'>Ingredients</Form.Label>
            <Form.Control type="text" value={this.props.ingredients} onChange={(e)=> {this.props.onchangeingredients(e)}}></Form.Control>
                
                <Button variant="primary" type="submit">
                    Update
                </Button>
                </Form>
            </Modal.Body>

                  </Modal>  
            </div>
        )
    }
}

export default Updatefav
