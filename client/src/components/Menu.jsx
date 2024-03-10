import React from 'react'
import {data} from '../restApi.json'
function Menu() {
  return (
    <section className="menu" id='menu'>
    <div className="container">
        <div className="heading_section">
            <h1 className='heading'>POPULAR DISHES</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita deleniti sit eius adipisci a velit maiores cupiditate esse nobis! Laborum!</p>
        </div>
        <div className="dishes_container">
           {
            data[0].dishes.map(elem=>{
                return(
                    <div className="card" key={elem.id}>
 <img src={elem.image} alt={elem.title} />
 <h3>{elem.title}</h3>
 <button>{elem.category}</button>
                    </div>
                )
            })
           }
           </div>
        </div>
    </section>
  )
}

export default Menu
