import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  DESELECT_PLACE,
  MANAGE_FAVOURITE_PLACE
} from '../actions/actionTypes';
const initiaState = {
  places: [],
  selectedPlace: null
};

const reducer = (state = initiaState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random(),
          name: action.placeName,
          isFavourite: false,
          image: {
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg'
          }
        })
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter((place, i) => {
          return place.key !== action.placeKey;
        }), 
        selectedPlace: null
      };
    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(place => {
          return place.key === action.placeKey;
        })
      };

    case DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: null
      };
    case MANAGE_FAVOURITE_PLACE:
      return {
        ...state,
        places: state.places.forEach((place, i) => {
          if (place.key) {
            alert(place.key)
            // place.isFavourite = !place.isFavourite;
          }
        })
      };

    default:
      return state;
  }
};

export default reducer;
