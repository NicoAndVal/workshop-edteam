import {createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import  thunk from 'redux-thunk'
import { postReducers, courseReducers, teacherReducer, specialityReducer, fragmentReducers } from './reducers'


export default createStore(
  combineReducers(
  {  postReducers,
    courseReducers,
    teacherReducer,
    specialityReducer,
    fragmentReducers}
  ),
  composeWithDevTools(applyMiddleware(thunk))
)

