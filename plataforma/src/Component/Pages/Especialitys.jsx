import React,{useEffect} from 'react'
import Banner from '../Organism/Banner'
import store from '../../redux/store'
import { getAllEspecialtys } from '../../redux/actionCreators'
import { connect } from 'react-redux'
import Card from '../Organism/Card'

const Especialitys = ({specialitys}) => {

  useEffect(() =>{
    store.dispatch(getAllEspecialtys())
  },[])

  return (
   <>
    <Banner
      color="first-color"
      imagen={{
        src: 'https://image.freepik.com/foto-gratis/profesor-mediana-edad-sonriente-gafas-escribiendo-atentamente_2221-3534.jpg',
        alt: "Banner_profesores"
      }}
      title="Especialidades"
      subtitle="Especializate con las rutas de aprendizaje que tenemos creadas para tí"
    />

      {specialitys &&
        <main className='ed-grid m-grid-3'>
          {
            specialitys.map(s => (
              <Card 
              key={s.id} 
              picture={s.picture} 
              name={s.name}
              cardId = {s.id}
              path='especialidad' />

            ))
          }

        </main>
      }


   </>
  )
}

const mapStateToProps = state =>({
  specialitys: state.specialityReducer.specialitys
})


export default connect(mapStateToProps,{})(Especialitys)
