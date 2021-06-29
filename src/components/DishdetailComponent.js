
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap';
const Dishdetail = (props) => {
    const renderComments = ()=>{
        const comments = props.selectedDish.comments;
            if(comments){
            return (
                <div>
                    <ul>
                        {comments.map(element => (
                            <li key={element.id}>
                                <div  key={element.id}>
                                    <p>{element.comment}</p>
                                    <p>-- {element.author} {element.date}</p>
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
                        <CardImg top src={props.selectedDish.image} alt={props.selectedDish.name} />
                        <CardBody>
                            <CardTitle>{props.selectedDish.name}       
                            </CardTitle>
                            <CardText>{props.selectedDish.description}</CardText>
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