 
import { Card, CardImg, CardImgOverlay,  CardTitle } from 'reactstrap';
 

const Menu = (props) => {
    const menufile = props.dishes;
    const menu = menufile.map((dish) => {
        return (
          <div key={dish.id} className="col-12 col-md-5 m-1">
              <Card key={dish.id} 
                onClick={() => props.clickon(dish.id)}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
              </Card> 
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
 