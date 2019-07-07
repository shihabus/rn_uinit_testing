import {types} from './types'
const initialState = {

  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case types.TITLE:
        console.log('I am triggered');
        return { ...state, title:action.payload };
  
      default:
        return state;
    }
  };
  