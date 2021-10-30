import React from "react";
import "components/Appointment/styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import useVisualMode from "hooks/useVisualMode";

const Appointment = (props) => {
  const { time, interview } = props;
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const { mode, transition, back } = useVisualMode(interview ? SHOW : EMPTY);
  return (
    <article className="appointment">
      <Header time={time} />
      {/* {props.time ? `Appointment at ${props.time}` : "No Appointments"} */}
      {interview ? (
        <Show student={interview.student} interviewer={interview.interviewer} />
      ) : (
        <Empty />
      )}
    </article>
  );
};

export default Appointment;
