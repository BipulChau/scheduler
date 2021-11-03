import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });
  const setDay = (day) => setState({ ...state, day });

  // ******** Function getSpotsForDay ***********************************************************
  const updateSpots = (state, appointments) => {
    const days = state.days.map((day) => {
      const newSpot = day.appointments.reduce((prev, currID) => {
        if (appointments[currID].interview === null) {
          return prev + 1;
        } else {
          return prev;
        }
      }, 0);
      if (state.day === day.name) {
        return { ...day, spots: newSpot };
      } else {
        return { ...day };
      }
    });
    return days;
  };

  // ******** Function bookInterview ***********************************************************

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

    const days = updateSpots(state, appointments);

    return axios.put(`/api/appointments/${id}`, { interview }).then(() => {
      console.log("Axios Put request is success 😁");
      setState((prev) => ({ ...prev, appointments, days }));
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

    const days = updateSpots(state, appointments);

    return axios.delete(`/api/appointments/${id}`).then(() => {
      console.log("Deleted appointment successfully 😁🥳");
      setState((prev) => ({ ...prev, appointments, days }));
    });
  }

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

  return { state, setState, setDay, bookInterview, cancelInterview };
}
