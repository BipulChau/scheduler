import React from "react";
import "components/Appointment/styles.scss"

const Appointment = (props) => {
  return (
    <article className="appointment">{props.time?`Appointment at ${props.time}`:"No Appointments"}</article>
  )
}

export default Appointment;