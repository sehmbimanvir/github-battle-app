import popularReposReducer from './reducers/popularReposReducer'
import battleReducer from './reducers/battleReducer'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'


const reducers = combineReducers({
  popular: popularReposReducer,
  battle: battleReducer
})

export default createStore(reducers, applyMiddleware(thunk))