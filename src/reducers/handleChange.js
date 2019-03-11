import {HANDLE_CHANGE} from '../actions/type';

const INITIAL_STATE={}

export default (state=INITIAL_STATE, action)=>{
    switch (action.type) {
        case HANDLE_CHANGE:
        /*
            *This is what your action. payload looks like
            *action.payload==={name:'nameOfField', value 'valueOfField'}
        */
            return { ...state, [action.payload.name]: action.payload.value }
        default:
            return state;
    }
}