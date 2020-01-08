import Axios from 'axios'
import { GET_ALL_POSTS, GET_ALL_SPECIALITYS, GET_POST, GET_COURSE, GET_FRAGMENT, GET_SPECIALITY, GET_ALL_COURSES, GET_ALL_TEACHERS} from './actions'

const API_URL = process.env.REACT_APP_API_LOCAL

console.log(API_URL)

export const getAllPosts = () => dispatch  => {
  Axios.get(`${API_URL}/posts`)
  .then(res => {
    return dispatch({
      type: GET_ALL_POSTS,
      posts: res.data
    })
  })
}

export const getAllEspecialtys = () => dispatch  => {
  Axios.get(`${API_URL}/especialidades`)
  .then(res => {
    return dispatch({
      type: GET_ALL_SPECIALITYS,
      specialitys: res.data
    })
  })
}

export const getAllCourses = () => dispatch  => {
  Axios.get(`${API_URL}/cursos`)
  .then(res => {
    return dispatch({
      type: GET_ALL_COURSES,
      courses: res.data
    })
  })
}

export const getAllTeachers = () => dispatch => {
  Axios.get(`${API_URL}/profesores`)
  .then(res => {
    return dispatch({
      type: GET_ALL_TEACHERS,
      teachers: res.data
    })
  })
}


export const getPost = id => dispatch => {
  Axios.get(`${API_URL}/post/${id}`)
  .then(res =>{
    dispatch({
      type:GET_POST,
      post: res.data
    })
  })
}

export const getSpeciality = id => dispatch => {
  Axios.get(`${API_URL}/especialidad/${id}`)
  .then(res =>{
    dispatch({
      type:GET_SPECIALITY,
      speciality: res.data
    })
  })
}



export const getCourse = id => dispatch => {
  Axios.get(`${API_URL}/curso/${id}`)
  .then(res =>{
    dispatch({
      type:GET_COURSE,
      course: res.data
    })
  })
}
export const getFragment = id => dispatch => {
  Axios.get(`${API_URL}/clase/${id}`)
  .then(res =>{
    dispatch({
      type:GET_FRAGMENT,
      fragment: res.data
    })
  })
}
