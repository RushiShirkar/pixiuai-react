import axios from 'axios';
import {
	USER_LOGIN_SUCCESS,
	CREATE_IDEA_SUCCESS,
	VIEW_IDEAS_SUCCESS,
	SUBSCRIBE_IDEA_SUCCESS,
	VIEW_SUBSCRIBE_SUCCESS
} from '../../constants/ActionTypes';
import { notification } from "antd";

const config = {
    'Authorization': 'Bearer' + localStorage.getItem('jwt_token'),
    'Content-Type': 'application/json'
}
const config1 = {
    'Authorization': 'Bearer' + localStorage.getItem('jwt_token'),
}

export const login = async(data,dispatch) => {
	try {
        const result = await axios.post(`/user/login`, data, {
            'Content-Type': 'application/json'
        });
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: result.data
        })
        if(result.data.jwt_token){
            localStorage.setItem("jwt_token",result.data.jwt_token);
            localStorage.setItem("user",result.data.user);
            window.location.href = '/'
        }
    } catch (err) {
        notification["error"]({
            message: err?.response?.data.detail,
            description: "",
        });
        console.log(err.message);
    }
}

export const createIdea = async (data, dispatch) => {
    try {
        const idea = await axios.post(`/idea/create`, data,config);
        dispatch({
                type: CREATE_IDEA_SUCCESS,
                payload: idea.data
        })
        await getAllIdeas(dispatch);
    } catch (err) {
        notification["error"]({
            message: err?.response?.data.detail,
            description: "",
        });
        console.log(err.message);
    }
};

export const getAllIdeas = async (dispatch) => {
    try {
        const ideas = await axios.get(`/idea/view`,config1);
        console.log(ideas)
        dispatch({
            type: VIEW_IDEAS_SUCCESS,
            payload: ideas.data
        })
    } catch (err) {
        console.log(err);
    }
};

export const subscribeIdea = async (data, dispatch) => {
    try {
        const subscription = await axios.post(`/subscription/create/`, data);
        dispatch({
                type: SUBSCRIBE_IDEA_SUCCESS,
                payload: subscription.data
        })
        await getAllSubscriptions(dispatch);
    } catch (err) {
        notification["error"]({
            message: err?.response?.data.detail,
            description: "",
        });
        console.log(err.message);
    }
};

export const getAllSubscriptions = async (dispatch) => {
    try {
        const subscriptions = await axios.get(`/subscription/view/`);
        dispatch({
                type: VIEW_SUBSCRIBE_SUCCESS,
                payload: subscriptions.data
        })
    } catch (err) {
        console.log(err);
    }
};