
import { Card, CardBody, CardImg,  CardText, CardTitle } from 'reactstrap';
const Dishdetail = (props) => {
    const renderComments = ()=>{
        const comments = props.dish.comments;
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
 
    if(props.isImgSelected){  
        // console.log(props.selectedDish.comments[0]);
        return(
            <div className="row"> 
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={props.dish.image} alt={props.dish.name} />
                        <CardBody>
                            <CardTitle>{props.dish.name}       
                            </CardTitle>
                            <CardText>{props.dish.description}</CardText>
                        </CardBody>
                    </Card> 
                </div>
                <div className="col-12 col-md-5 m-1">                
                    <h4>Comments</h4>                    
                    {renderComments()}
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