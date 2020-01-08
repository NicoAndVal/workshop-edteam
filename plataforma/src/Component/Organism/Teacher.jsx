import React from 'react'

const Teacher = ({picture, name, country }) => (
  <article>
    <div className='s-px-4 s-mb-3'>
      <div className='img-container circle'>
        <img src={picture} alt={name} />
      </div>
    </div>
    <div className='s-center'>
      <p className='t3'>{name}</p>
      <p className='t3 s-mb-1'>{country}</p>
    </div>
  </article>
)

export default Teacher
