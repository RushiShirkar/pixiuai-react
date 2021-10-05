import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import Ideas from "./ideas";

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  ideas: Ideas
});

export default createRootReducer