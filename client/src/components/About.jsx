import React from 'react'
import {Link} from 'react-router-dom'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
function About() {
  return (
    <section className='about' id='about'>
    <div className="container">
        <div className="banner">
            <div className="top">
                <h1 className="heading">ABOUT US</h1>
                <p>the only thing we 're serious about is food </p>
            </div>
            <p className="mid">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vitae impedit dolorum vero aperiam unde illo id, excepturi quisquam nisi pariatur eos officiis. Molestiae, atque. Modi id nisi quibusdam sunt labore veritatis. Reiciendis reprehenderit distinctio, saepe, laborum fuga suscipit rem omnis error illum natus praesentium tenetur corrupti totam dicta est.
            </p>
            <Link to="/">Explore menu <span>
                <HiOutlineArrowNarrowRight />
            </span></Link>
        </div>
        <div className="banner">
            <img src="/about.png" alt="about" />
        </div>
    </div>
      
    </section>
  )
}

export default About
