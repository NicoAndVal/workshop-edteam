import React , {useEffect}from 'react'
import Banner from '../Organism/Banner'
import {connect} from 'react-redux'
import store from '../../redux/store'
import { getAllCourses } from '../../redux/actionCreators'
import Card from '../Organism/Card'

const Courses = ({courses}) => {

  useEffect(() =>{
    store.dispatch(getAllCourses())
  },[])

  return (
    <>
    <Banner
      color="dark-color"
      imagen={{
          src: 'https://image.freepik.com/foto-gratis/profesor-mediana-edad-sonriente-gafas-escribiendo-atentamente_2221-3534.jpg',
          alt: "Banner_profesores"
        }}
        title="NUESTROS CURSOS"
        subtitle="COMIENZA DESDE 0 HOY PARA DOMINAR UNA TECNOLOGÍA"

      />

      {courses &&
        <main className='ed-grid m-grid-5'>
          {
            courses.map(c => (
              <Card 
              key={c.id} 
              picture={c.picture} 
              name={c.name}
              path='cursos'
              cardId ={c.id} />

            ))
          }

        </main>
      }
    </>
  )
}

const mapStateToProps = state =>({
  courses: state.courseReducers.courses
})

export default connect(mapStateToProps,{})(Courses)
