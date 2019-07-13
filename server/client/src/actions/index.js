import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
            const res = await axios.get('/api/current_user')
            dispatch({type: FETCH_USER, payload: res.data})  // since data in the res object is what we care about
            }

            // above is re factored version
    
