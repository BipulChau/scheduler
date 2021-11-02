import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss";
import PropTypes from "prop-types";

const InterviewerList = (props) => {
  const { interviewers, onChange, value } = props;
  const interviewersListItem = interviewers.map((interviewere) => {
    return (
      <InterviewerListItem
        key={interviewere.id}
        name={interviewere.name}
        avatar={interviewere.avatar}
        setInterviewer={(e) => onChange(interviewere.id)}
        selected={interviewere.id === value}
      />
    );
  });

  console.log("interviewerListItem", interviewersListItem); //test

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewersListItem}</ul>
    </section>
  );
};

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired,
};

export default InterviewerList;
