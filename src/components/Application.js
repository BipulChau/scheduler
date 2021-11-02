import React, { useState, useEffect } from "react";

import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "./Appointment";
import axios from "axios";
import {
  getAppointmentsForDay,
  getInterview,
  getInterviewersForDay,
} from "../helpers/selectors";

// Application Component ********************************************************************************//

export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const dailyAppointments = getAppointmentsForDay(state, state.day);
  const appointments = dailyAppointments.map((appointment) => appointment);
  const interviewers = getInterviewersForDay(state, state.day);

  console.log("Interviewers are: ", interviewers); //test

  console.log(state.day); // test

  const setDay = (day) => setState({ ...state, day });

  // const setDays = (days) => setState((prev) => ({ ...prev, days }));

  //useEffect ******************************************************************************************************
  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  console.log("State is :", state); //  test

  console.log("Interviewers are: ", interviewers); // test

  // ******** Function bookInterview **************

  const bookInterview = (id, interview) => {
    console.log(
      "calling bookInterview fn at index.jsx in Form component",
      id,
      interview
    );
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    setState({
      ...state,
      appointments,
    });

    return axios.put(`/api/appointments/${id}`, { interview }).then(() => {
      console.log("Axios Put request is success 😁");
      setState((prev) => ({ ...prev, appointments }));
    });
  };

  //******* Function cancelInterview  ***************************/

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    return axios.delete(`/api/appointments/${id}`).then(() => {
      console.log("Deleted appointment successfully 😁🥳");
      setState((prev) => ({ ...prev, appointments }));
    });
  }

  // creating an array of appointment date*********************************************************************//

  const eachAppointment = appointments.map((appointment) => {
    const interview = getInterview(state, appointment.interview);
    console.log("Interview from Application.js: ", interview) // test
    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={interview}
        interviewers={interviewers}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
      />
    );
  });

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList days={state.days} value={state.day} onChange={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {/* Replace this with the schedule elements durint the "The Scheduler" activity. */}
        {eachAppointment}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
