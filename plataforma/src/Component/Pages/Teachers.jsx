import React, {useEffect} from 'react'
import Banner from '../Organism/Banner'
import { getAllTeachers } from '../../redux/actionCreators'
import store from '../../redux/store'
import { connect } from "react-redux"
import Teacher from '../Organism/Teacher'


const Teachers = ({match,teachers}) => {

  
  useEffect(() => {
    store.dispatch(getAllTeachers())
  }, [match])
  
  return (
    <>
      <Banner
        color="accent-color"
        imagen={{
          src: 'https://image.freepik.com/foto-gratis/profesor-mediana-edad-sonriente-gafas-escribiendo-atentamente_2221-3534.jpg',
          alt: "Banner_profesores"
        }}
        title="Nuestros profesores"
        subtitle="Nuestros profesores están altamente calificados para guiarte en tu educación"

      />

      {teachers &&
        <main className='ed-grid m-grid-3 l-grid-4 row-gap'>
          {
            teachers.map(t => (
              <Teacher
                key = {t.id}
                name = {t.name}
                picture = {t.picture}
                country = {t.country}
              />
            ))
          }
        </main>

      }

    </>
  )
}

const mapStateToProps = state => ({
  teachers: state.teacherReducer.teachers
})

export default connect(mapStateToProps, {})(Teachers)

