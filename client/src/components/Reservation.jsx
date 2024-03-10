import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Reservation = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState(0);
  const [date, setdate] = useState("");
  const [time, settime] = useState("");
  const navigate = useNavigate();

  const handleReservation = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost/8000/api/v1/reservation/send",
        { firstname, lastname, email, phone, date, time },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setFirstname("");
      setlastname("");
      setemail("");
      setdate("");
      settime("");
      navigate("/success");
    } catch (error) {
      toast.error(error.message || "An error occurred");
    }
  };

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="/reservation.png" alt="res" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <p>For Forther Question Please Call</p>
            <form>
              <input
                type="text"
                name=""
                id=""
                placeholder="Firstname"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />

              <input
                type="text"
                name=""
                id=""
                placeholder="lastname"
                value={lastname}
                onChange={(e) => setlastname(e.target.value)}
              />
              <div>
                <input
                  type="date"
                  value={date}
                  placeholder="date"
                  onChange={(e) => setdate(e.target.value)}
                />
                <input
                  type="time"
                  placeholder="time"
                  value={time}
                  onChange={(e) => settime(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="email"
                  value={email}
                  className="email_tag"
                  onChange={(e) => setemail(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="number"
                  value={phone}
                  className="email_tag"
                  onChange={(e) => setphone(e.target.value)}
                />
              </div>
              <button type="submit" onClick={handleReservation}>
                RESERVE NOW {""}
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
