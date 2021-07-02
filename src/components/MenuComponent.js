import { Card, CardImg, CardImgOverlay,
  CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
 
const RenderMenuItem = (props) => {
  const imgLoc = props.dish.image;
 
  return ( 
    <Card>
      <Link to={`/menu/${props.dish.id}`}>
        <CardImg width="100%" src={process.env.PUBLIC_URL +'/' +imgLoc}  alt={props.dish.name} />
        <CardImgOverlay>
          <CardTitle>{props.dish.name} </CardTitle>
        </CardImgOverlay>
     </Link>
  </Card> 
  );
}


const Menu = (props) => {
  console.log("Menu component: props" );
  console.log(props.match);
    const menufile = props.dishes;
 
    const menu = menufile.map((dish) => {
        return (
          <div key={dish.id} className="col-xs-12 col-md-5 m-4">
            <RenderMenuItem dish={dish} clickon={() => props.clickon(dish.id)}/>
          </div>
        );
    });

    return (
      <div className="container">
          <div className="row"> 
            <Breadcrumb>
              <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
              <BreadcrumbItem active>Menu</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>Menu</h3>
                <hr />
            </div>   
          </div>
          <div className="row"> 
            {menu}
          </div>
      </div>
      );
}
 
export default Menu;
 