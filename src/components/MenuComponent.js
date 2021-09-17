import { Card, CardImg, CardImgOverlay,
  CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
 
import { Loading } from './LoadingComponent';

const RenderMenuItem = (props) => {
  const imgLoc = props.dish.image;
  // console.log("RenderMenuItem props: ", props);
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

const Rendermenu = (props) => {
  // console.log("Rendermenu props: ", props);
  if (props.dishes.isLoading) {
    return(
        <div className="container">
            <div className="row">            
                <Loading />
            </div>
        </div>
    );
  }
  else if (props.dishes.errMess) {
      return(
          <div className="container">
              <div className="row"> 
                  <div className="col-12">
                      <h4>{props.dishes.errMess}</h4>
                  </div>
              </div>
          </div>
      );
  } 
  else{
    // console.log("Rendermenu props.dishes.isLoading ", props.dishes.isLoading);
    return (
      props.dishes.dishes.map( (dish) => 
        <div key={dish.id} className="col-xs-12 col-md-5 m-4"> 
         <RenderMenuItem dish={dish} clickon={() => props.clickon(dish.id)}/> 
        </div>)
        
      )
    }
}



const Menu = (props) => {
  // console.log("Menu component: props" );
  // console.log(props);
    // const menufile = props.dishes.dishes;
    
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
            <Rendermenu dishes= {props.dishes} clickon={props.clickon}/>
          </div>
      </div>
      );
}
 
export default Menu;
 