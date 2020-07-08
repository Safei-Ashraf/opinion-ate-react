import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Alert from '@material-ui/lab/Alert';
import {loadRestaurants} from '../store/restaurants/actions';
import nicCage from './nic-cage.jpg';

export const RestaurantList = ({
  loadRestaurants,
  restaurants,
  loading,
  loadError,
}) => {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  return (
    <>
      {loading && <CircularProgress data-testid="loading-indicator" />}
      {loadError && (
        <Alert severity="error">Restaurants could not be loaded.</Alert>
      )}
      <img src={nicCage} alt="Nic Cage with long hair" />
      <List>
        {restaurants.map(restaurant => (
          <li key={restaurant.id}>
            <ListItemLink href="#">
              <ListItemText>{restaurant.name}</ListItemText>
            </ListItemLink>
          </li>
        ))}
      </List>
    </>
  );
};

const ListItemLink = props => <ListItem button component="a" {...props} />;

const mapStateToProps = state => ({
  restaurants: state.restaurants.records,
  loading: state.restaurants.loading,
  loadError: state.restaurants.loadError,
});

const mapDispatchToProps = {loadRestaurants};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
