import React, {useEffect} from 'react'
import Banner from '../Organism/Banner'
import Publication from '../Organism/Publication'
import { connect } from 'react-redux'
import store from '../../redux/store'
import { getAllPosts } from '../../redux/actionCreators'

const Home = ({posts}) => {

  useEffect(() =>{
    store.dispatch(getAllPosts())
  },[])

  return (
    <>
      <Banner
        color="dark-color"
        imagen={{
          src: 'https://image.freepik.com/foto-gratis/profesor-mediana-edad-sonriente-gafas-escribiendo-atentamente_2221-3534.jpg',
          alt: "Banner_profesores"
        }}
        title="La plataforma de educación más increible"
        subtitle="Está plataforma está pensada en tí y para que crezcas profesionalmente"
        home
        poster = "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-11/js-poo.png"

      />
        <main className='ed-grid m-grid-3'>
          <div className='l-section m-cols-2'>
              <h2>ULTIMAS PUBLICACIONES</h2>
              {
                posts ? 
              <div>{posts.map(p=><Publication 
                title={p.title} 
                author={p.author}
                fecha = {p.fecha}
                content = {p.content}
                key={p.id} />)}</div>:
              <p>NO EXISTEN PUBLICACIONES EN LA BASE DE DATOS</p>
              }
          </div>
          <div>
            <h3>LISTA DE CATEGORIAS</h3>
            <ul className='feature-list'>
              <li><span>REACT JSX</span></li>
              <li><span>REACT NATIVE</span></li>
              <li><span>VUE</span></li>
              <li><span>ANGULAR</span></li>
              <li><span>HTML</span></li>
              <li><span>CSS</span></li>
              <li><span>JAVASCRIPT</span></li>
            </ul>
          </div>
        </main>

    </>
  )
}

const mapStateToProps = state => ({

  posts: state.postReducers.posts
})



export default connect(mapStateToProps, {})(Home)
