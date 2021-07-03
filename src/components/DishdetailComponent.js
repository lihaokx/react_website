
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


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
                                    <p>-- {element.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(element.date)))}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
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
 

const Dishdetail = (props) => { 
 
    console.log("dish details: props" );
    console.log( props);
 

    if(props.dish){  
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
                        <RenderComments comments = {props.comments}/>
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
 