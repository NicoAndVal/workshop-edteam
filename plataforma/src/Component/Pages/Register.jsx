import React from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'


const registratation = e =>{
  e.preventDefault()
  const form = e.target

  const data = {
    "email": form.email.value,
    "name": form.fullName.value,
    "password": form.password.value
  }

  Axios.post('https://api-edteam.alejogs4.now.sh/signup',data)
  .then(() =>{
      alert('Usuario Creado')
      window.location = "/login"  
    })
  .catch(e => alert('Error al crear el usuario'))

}

const Register = () => {
  return (
    <div className='ed-grid'>
      <div className = 'l-block'></div>
      <div className='m-to-center m-60 lg-40'>
        <h1 className='center'>CREAR CUENTA</h1>
        <form onSubmit={registratation.bind()}>
        <div className='form__item'>
            <label htmlFor='fullName'>
                NOMBRE COMPLETO
              <input type ='text' id='fullName' name='fullName' required/>
            </label>
          </div>
          <div className='form__item'>
            <label htmlFor='email'>
                CORREO ELECTRONICO
              <input type ='email' id='email' name='email' required/>
            </label>
          </div>
          <div className='form__item'>
            <label htmlFor='password'>
                CONTRASEÑA
              <input type ='password' name='password' id='password' required/>
            </label>
          </div>
          <div className='form-item'>
              <input type="submit" className='button full' value='Crear Cuenta'/>
          </div>
        </form>
        <div className='center'>
          <p>¿Ya tienes cuenta de usuario <Link to='/login'>Iniciar Sesión</Link> </p>
        </div>
      </div>
    </div>
  )

  
}

export default Register
