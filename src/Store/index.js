import { configureStore } from 'redux';
import rootReducer from '../Reducer';

const store = configureStore(rootReducer, {});
export default store;
