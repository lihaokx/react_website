import {useState} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem , Modal, Button, ModalHeader, ModalBody,Row, Col, Label,
    Form, FormGroup, Input  } from 'reactstrap';
  
import { Link } from 'react-router-dom';
import React from 'react';
import { Loading } from './LoadingComponent';
import { Control, LocalForm, Errors } from 'react-redux-form';
import reactDom from 'react-dom';



const RenderComments = (props) => {
    const comments = props.comments;
        if(comments){            
            return (
                <div>
                    <ul>
                        {comments.map(element => (
                            <li key={element.id}>
                                <div  key={element.id}>
                                    <p>{element.comment}</p>
                                    {/* {console.log("element.date: ", element.date)} */}
                                    <p>-- {element.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(element.date)))}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <CommentForm 
                            addComment={props.addComment}
                            dishId={props.dishId}
                    />
                </div>
                
            )}
        else{
            return(
                <div></div>
            )
        }
}

const RenderDish = (props) => {
    return ( 
        <Card>
        <CardImg top src={process.env.PUBLIC_URL +'/'+ props.dish.image} alt={props.dish.name} />
        <CardBody>
            <CardTitle>{props.dish.name}       
            </CardTitle>
            <CardText>{props.dish.description}</CardText>
        </CardBody>
        </Card> 
     );
}

const CommentForm  = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const required = (val) => val && val.length;
    const maxLength = (len) =>{
        return function  manLength (val) {
                return (!val || (val.length <=len));
        }
    }
    
    const minLength = (len) =>{
        return function valLen (val) {
                return( val && (val.length >=len));
            }
    }

    function toggleModal () {
        setIsModalOpen(!isModalOpen);
    }
    function handleSubmit(values) {
        // console.log('Current State is: ' + JSON.stringify(values));
        // alert('Current State is: ' + JSON.stringify(values));
        props.addComment(props.dishId, values.rating, values.author, values.comment);
        // event.preventDefault();
    }
    return ( 
        <React.Fragment> 
        <Button outline onClick={toggleModal}><span className="fa fa-sign-in fa-lg"></span> Submit Comment</Button>
        <Modal isOpen={ isModalOpen} toggle={ toggleModal}>
        <ModalHeader toggle={ toggleModal}> Submit Comment</ModalHeader>
        <ModalBody>
        <LocalForm onSubmit={(values) => handleSubmit(values)}>
                <Row className="form-group">
                    <Label htmlFor="rating" md={2}>Rating</Label>
                </Row>
                <Row className="form-group"> 
                    <Col >
                        <Control.select  model=".rating" id="rating" name="rating"
                            placeholder="rating"
                            className="form-control">
                             <option value="none" selected disabled hidden> Select an Option</option>
                            <option value="1" >1</option>
                            <option value="2">2</option>
                            <option value="3"  >3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </Control.select>
                    </Col>
                </Row>
                <Row className="form-group">
                    <Label htmlFor="author" md={4}>Your Name</Label>
                </Row>
                <Row className="form-group"> 
                    <Col >
                        <Control.text model=".author" id="author" name="author"
                            placeholder="Your Name"
                            className="form-control"
                            validators={{
                                required, minLength: minLength(3), maxLength: maxLength(15)
                            }}
                                />
                        <Errors
                            className="text-danger"
                            model=".author"
                            show="touched"
                            messages={{
                                required: 'Required',
                                minLength: 'Must be greater than 2 characters',
                                maxLength: 'Must be 15 characters or less'
                            }}
                            />
                    </Col>
                </Row>
                
                <Row className="form-group">
                    <Label htmlFor="comment" md={2}>Comment</Label>
                </Row>
                <Row className="form-group"> 
                    <Col >
                        <Control.textarea model=".comment" id="comment" name="comment"
                            rows="6"
                            className="form-control" />
                    </Col>
                </Row>
                <Row className="form-group">
                    <Col >
                        <Button type="submit" color="primary" md={4}>
                        Submit
                        </Button>
                    </Col>
                </Row>
            </LocalForm>
        </ModalBody>
        </Modal>
         </React.Fragment> 
    );
}
 
 

const Dishdetail = (props) => { 
    // console.log("dish details: props" );
    // console.log( props);

    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish != null) {  
        // console.log(props.selectedDish.comments[0]);
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row"> 
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">                
                        <h4>Comments</h4>                    
                        <RenderComments comments = {props.comments}
                                addComment={props.addComment}
                                dishId={props.dish.id}
                        />
                        
                    </div>
                </div>
            </div>
        )   
    }
    else{
        return(
          <div>
            <p></p>
          </div>
        )
      }         
}
export default Dishdetail;
 