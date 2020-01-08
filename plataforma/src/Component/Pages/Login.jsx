import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const authentication = e =>{
    e.preventDefault()
    const form = e.target
    const data = {
      "email": form.email.value,
      "password": form.password.value
    }
    axios.post('https://api-edteam.alejogs4.now.sh/login',data)
    .then(res => {
      localStorage.setItem('token', res.data.token)
      window.location = '/'
    })
    .catch(() => alert('Hubo un problema al iniciar sesión'))
    
}
const Login = () => {
  return (
    <div className='ed-grid'>
      <div className = 'l-block'></div>
      <div className='m-to-center m-60 lg-40'>
        <h1 className='center'>Iniciar sesión</h1>
        <form onSubmit={authentication.bind()}>
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
              <input type="submit" className='button full' value='Iniciar Sesión'/>
          </div>
        </form>
        <div className='center'>
          <p>¿No tienes cuenta? <Link to='/registro'>Crear Cuenta</Link> </p>
        </div>
      </div>
    </div>
  )
}

export default Login
