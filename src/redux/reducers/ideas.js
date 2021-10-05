import {
	USER_LOGIN_SUCCESS,
	CREATE_IDEA_SUCCESS,
	VIEW_IDEAS_SUCCESS,
	SUBSCRIBE_IDEA_SUCCESS,
	VIEW_SUBSCRIBE_SUCCESS
} from '../../constants/ActionTypes';

const INIT_STATE = {
	loader: false,
	ideas: [],
	newidea: {},
	jwt_token: null,
	subscriptions: [],
	newsubscription: {}
}

export default function ideasReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case USER_LOGIN_SUCCESS: {
      return {
        ...state,
        loader: false,
        jwt_token: action.payload,
      };
    }
    case VIEW_IDEAS_SUCCESS: {
      return {
        ...state,
        loader: false,
        ideas: action.payload,
      };
    }
    case VIEW_SUBSCRIBE_SUCCESS: {
      return {
        ...state,
        loader: false,
        subscriptions: action.payload,
      };
    }
    case CREATE_IDEA_SUCCESS: {
      return {
        ...state,
        loader: false,
        newidea: action.payload,
      };
    }
    case SUBSCRIBE_IDEA_SUCCESS: {
      return {
        ...state,
        loader: false,
        newsubscription: action.payload,
      };
    }
    default:
      return state;
  }
}