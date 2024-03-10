import React from "react";
import {data} from '../restApi.json'
const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
            <h1 className="heading">OUR TEAM</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus modi delectus, quam quia eos iste?</p>
        </div>
        <div className="team_container">
            {
                data[0].team.map(elem=>{
                    return(
                        <div className="card" key={elem.id}>
                            <img src={elem.image} alt={elem.name} />
                            <h3>{elem.name}</h3>
                            <p>{elem.designation}</p>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </section>
  );
};

export default Team;
