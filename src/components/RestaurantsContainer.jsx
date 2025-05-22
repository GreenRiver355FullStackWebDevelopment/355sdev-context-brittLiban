import Restaurant from "./Restaurant";
import { useRestaurants } from "../context/RestaurantContext";
function RestaurantsContainer() {
  const { restaurants } = useRestaurants();
  //so each restauraunt is coming in from the useContext. Almost like seeding info to a db
  return (
    <div className="restaurantContainer">
      {restaurants.map((restaurant) => (
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}

export default RestaurantsContainer;
