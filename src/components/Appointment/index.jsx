import React from "react";
import "components/Appointment/styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";

const Appointment = (props) => {
  const { time, interview } = props;
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";

  // ******* save function *********

  const save = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer,
    };
    transition(SAVING);
    props.bookInterview(props.id, interview).then(() => transition(SHOW));
  };

  const deleteAppointment = () => {
    transition(DELETING);
    props.cancelInterview(props.id).then(() => transition(EMPTY));
  };

  const { mode, transition, back } = useVisualMode(interview ? SHOW : EMPTY);
  return (
    <article className="appointment">
      <Header time={time} />
      {/* {props.time ? `Appointment at ${props.time}` : "No Appointments"} */}
      {/* {interview ? (
        <Show student={interview.student} interviewer={interview.interviewer} />
      ) : (
        <Empty />
      )} */}

      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => transition(CONFIRM)}
        />
      )}
      {mode === CONFIRM && (
        <Confirm
          message="Are you sure you would like to delete?"
          onCancel={back}
          onConfirm={deleteAppointment}
        />
      )}
      {mode === CREATE && (
        <Form interviewers={props.interviewers} onCancel={back} onSave={save} />
      )}
      {mode === SAVING && <Status message="Saving" />}
      {mode === DELETING && <Status message="Deleting" />}
    </article>
  );
};

export default Appointment;
