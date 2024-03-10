import React from "react";
import { data } from "../restApi.json";
const Whoarewe = () => {
  return (
    <section className="who_are_we" id="who_are_we">
      <div className="container">
        <div className="text_banner">
          {data[0].who_we_are.slice(0, 2).map((elem) => {
            return (
              <div className="card" key={elem.id}>
                <h1 style={{ fontWeight: 300 }} className="heading">
                  {elem.number}
                </h1>
                <p>{elem.title}</p>
              </div>
            );
          })}
        </div>
        <div className="image_banner">
          <img src="/center.svg" alt="center svg" className="gradient_bg" />
          <img src="/whoweare.png" alt="who" />
        </div>
        <div className="text_banner">
          {data[0].who_we_are.slice(2).map((elem) => {
            return (
              <div className="card" key={elem.id}>
                <h1 style={{ fontWeight: 300 }} className="heading">
                  {elem.number}
                </h1>
                <p>{elem.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Whoarewe;
