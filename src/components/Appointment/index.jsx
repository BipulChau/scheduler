// import React from "react";
// import "components/Appointment/styles.scss";
// import Header from "./Header";
// import Show from "./Show";
// import Empty from "./Empty";
// import useVisualMode from "hooks/useVisualMode";
// import Form from "./Form";
// import Status from "./Status";
// import Confirm from "./Confirm";
// import Error from "./Error";

// const Appointment = (props) => {
//   const { time, interview } = props;
//   const EMPTY = "EMPTY";
//   const SHOW = "SHOW";
//   const CREATE = "CREATE";
//   const SAVING = "SAVING";
//   const DELETING = "DELETING";
//   const CONFIRM = "CONFIRM";
//   const EDIT = "EDIT";
//   const ERROR_DELETE = "ERROR_DELETE";
//   const ERROR_SAVE = "ERROR_SAVE";

//   // ******* save function ********************************************************************************

//   const save = (name, interviewer) => {
//     const interview = {
//       student: name,
//       interviewer,
//     };
//     transition(SAVING);
//     props
//       .bookInterview(props.id, interview)
//       .then(() => transition(SHOW))
//       .catch((error) => transition(ERROR_SAVE, true));
//   };

//   const deleteAppointment = () => {
//     transition(DELETING);
//     props
//       .cancelInterview(props.id)
//       .then(() => transition(EMPTY))
//       .catch((error) => transition(ERROR_DELETE, true));
//   };

//   const { mode, transition, back } = useVisualMode(interview ? SHOW : EMPTY);
//   return (
//     <article className="appointment">
//       <Header time={time} />

//       {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
//       {mode === SHOW && (
//         <Show
//           student={props.interview.student}
//           interviewer={props.interview.interviewer}
//           onDelete={() => transition(CONFIRM)}
//           onEdit={() => transition(EDIT)}
//         />
//       )}
//       {mode === CONFIRM && (
//         <Confirm
//           message="Are you sure you would like to delete?"
//           onCancel={back}
//           onConfirm={deleteAppointment}
//         />
//       )}
//       {mode === CREATE && (
//         <Form interviewers={props.interviewers} onCancel={back} onSave={save} />
//       )}
//       {mode === SAVING && <Status message="Saving" />}
//       {mode === DELETING && <Status message="Deleting" />}
//       {mode === EDIT && (
//         <Form
//           name={props.interview.student}
//           interviewer={props.interview.interviewer.id}
//           interviewers={props.interviewers}
//           onCancel={back}
//           onSave={save}
//         />
//       )}
//       {mode === ERROR_DELETE && (
//         <Error message="Request failed on Delete operation." onClose={back} />
//       )}
//       {mode === ERROR_SAVE && (
//         <Error message="Request failed on Save operation." onClose={back} />
//       )}
//     </article>
//   );
// };

// export default Appointment;

import React from "react";

/* Components imports */
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";
import useVisualMode from "../../hooks/useVisualMode";

import "./styles.scss";

/* Appointment Component */
export default function Appointment(props) {
  /* Constants */
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";

  /* initialize visual mode */
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  /* save appointment and transition to display Show Component */
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    /* transition to Saving before Showing Appointment */
    transition(SAVING);
    props.bookInterview(props.id, interview)
      .then(() => transition(SHOW))
      .catch(error => transition(ERROR_SAVE, true));
  }

  function deleteConfirm() {
    /* before delete display Confirm Component */
    transition(CONFIRM);
  }

  /* Delete an interview */
  function deleteInterview() {
    /* Transition to Deleting Status while Deleting interview */
    transition(DELETING, true);
    props.cancelInterview(props.id)
      .then(() => transition(EMPTY))
      .catch(error => transition(ERROR_DELETE, true));
  }

  /* Transistion to Edit */
  function editInterview() {
    transition(EDIT);
  }

  return (
    <article className="appointment">
      {/* if time is passed show time otherwise show appropriate message */}
      {props.time ? <Header time={props.time} /> : <p>No Appointments</p>}
      {/* if mode is EMPTY call Empty component */}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {/* for mode is SHOW */}
      {mode === SHOW && (
        /* call Show Component with student name, interviewer, editInterview and deleteConfirm */
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onEdit={editInterview}
          onDelete={deleteConfirm}
        />
      )}
      {/* for mode is CREATE, call Form Component */}
      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onSave={save}
          onCancel={() => back()} />
      )}
      {/* for mode is EDIT, call Form Component with existing student and interviewer value */}
      {mode === EDIT && (
        <Form
          student={props.interview.student}
          interviewer={props.interview.interviewer.id}
          interviewers={props.interviewers}
          onSave={save}
          onCancel={() => back()} />
      )}
      {/* for mode is SAVING, Show Saving Status Component */}
      {mode === SAVING && <Status message="Saving" />}
      {/* for mode is CONFIRM */}
      {mode === CONFIRM && (
        <Confirm 
          message="Delete the appointment?"
          onConfirm={deleteInterview} 
          onCancel={() => back()}
        />)}
      {/* for mode is DELETING, Show Deleting Status Component */}
      {mode === DELETING && <Status message="Deleting" />}
      {/* for mode is ERROR_SAVE, Show Error Component with appropriate message */}
      {mode === ERROR_SAVE && (
        <Error
          message="Could not add appointment"
          onClose={() => back()}
        />)}
      {/* for mode is ERROR_DELETE, Show Error Component with appropriate message */}
      {mode === ERROR_DELETE && (
        <Error
          message="Could not cancel appointment"
          onClose={() => back()}
        />)}
    </article>
  );
};
