import React from 'react'
import {data} from '../restApi.json'

function Qualities() {
  return (
    <section className='qualities' id='qualities'>
      <div className="container">
       {
        data[0].ourQualities.map(elem=>{
            return(
                <div className="card" key={elem.id}>
                    <img src={elem.image} alt={elem.title} />
                    <p className='title'>{elem.title}</p>
                    <p className="description">{elem.description}</p>
                </div>
            )
        })
       }
      </div>
    </section>
  )
}

export default Qualities
