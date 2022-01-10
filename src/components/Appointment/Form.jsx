// import React, { useState } from "react";
// import Button from "components/Button";
// import InterviewerList from "components/InterviewerList";

// const Form = (props) => {
//   const [student, setStudent] = useState(props.name || "");
//   const [error, setError] = useState("");

//   const [interviewer, setInterviewer] = useState(props.interviewer || null);

//   //Reset Function that sets student and interviewer to ""
//   const reset = () => {
//     setStudent("");
//     setInterviewer(null);
//     setError("");
//   };

//   // Function that calls both reset function and props.onCancel
//   const cancel = () => {
//     reset();
//     props.onCancel();
//   };

// //this function will check if the interviewer is selected or not and if name is written or not in the form
// const validate = () => {
//   if (!interviewer && !student) {
//     setError("Student name cannot be blank");
//     return;
//   }
//   if (!interviewer) {
//     alert("Please select an interviewer!!!");
//     return;
//   }
//   if (student === "") {
//     setError("Student name cannot be blank");
//     return;
//   }

//   setError("");
//   props.onSave(student, interviewer);
// };

//   return (
//     <main className="appointment__card appointment__card--create">
//       <section className="appointment__card-left">
//         <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
//           <input
//             className="appointment__create-input text--semi-bold"
//             name="name"
//             type="text"
//             placeholder="Enter Student Name"
//             value={student}
//             onChange={(e) => setStudent(e.target.value)}
//             data-testid="student-name-input"
//           />
//         </form>
//         <section className="appointment__validation">{error}</section>
//         <InterviewerList
//           interviewers={props.interviewers}
//           value={interviewer}
//           onChange={setInterviewer}
//         />
//       </section>
//       <section className="appointment__card-right">
//         <section className="appointment__actions">
//           <Button danger onClick={cancel}>
//             Cancel
//           </Button>
//           <Button confirm onClick={validate}>
//             Save
//           </Button>
//         </section>
//       </section>
//     </main>
//   );
// };

// export default Form;

import React, { useState } from "react";

/* Component imports */
import Button from "../Button";
import InterviewerList from "../InterviewerList";

/* Form Component */
export default function Form(props) {
  /* Define states for student, interviewer, error */
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");

  /* reset student name textbox, interviewer and error */
  const reset = () => {
    setStudent("");
    setInterviewer(null);
    setError("");
  };

  /* cancel current activity */
  const cancel = () => {
    reset();
    props.onCancel();
  };

  /* validate form to check student name is not empty */
  //this function will check if the interviewer is selected or not and if name is written or not in the form
  const validate = () => {
    if (!interviewer && !student) {
      setError("Student name cannot be blank");
      return;
    }
    if (!interviewer) {
      alert("Please select an interviewer!!!");
      return;
    }
    if (student === "") {
      setError("Student name cannot be blank");
      return;
    }

    setError("");
    props.onSave(student, interviewer);
  };

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        {/* on submit of form prevent default behavior */}
        <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={student}
            onChange={(event) => setStudent(event.target.value)}
            data-testid="student-name-input"
          />
          <section className="appointment__validation">{error}</section>
        </form>
        {/* call InterviewerList component by passing interviewers, interviewer id, setInterviewer */}
        <InterviewerList
          interviewers={props.interviewers}
          value={interviewer}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          {/* chow button components with cancel and save butttons */}
          <Button danger onClick={cancel}>
            Cancel
          </Button>
          <Button confirm onClick={validate}>
            Save
          </Button>
        </section>
      </section>
    </main>
  );
}
