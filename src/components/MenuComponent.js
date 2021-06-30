 
import { Card, CardImg, CardImgOverlay,  CardTitle } from 'reactstrap';
 
const RenderMenuItem = (props) => {
  const imgLoc = props.dish.image;
  console.log(imgLoc);
  return ( 
    <Card key={props.dish.id} 
    onClick={() => props.clickon(props.dish.id)}>
    <CardImg width="100%" src={process.env.PUBLIC_URL +'/' +imgLoc}  alt={props.dish.name} />
    <p>{imgLoc}</p>
    <CardImgOverlay>
    <CardTitle>{props.dish.name} </CardTitle>
    </CardImgOverlay>
  </Card> 
  );
}


const Menu = (props) => {
    const menufile = props.dishes;
 
    const menu = menufile.map((dish) => {
        return (
          <div key={dish.id} className="col-12 col-md-5 m-1">
            <RenderMenuItem dish={dish} clickon={() => props.clickon(dish.id)}/>
          </div>
        );
    });

    return (
          <div className="row"> 
            {menu}
          </div>
      );
}
 
export default Menu;
 