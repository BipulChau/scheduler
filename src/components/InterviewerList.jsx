import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss"

const InterviewerList = (props) => {
  const{interviewers, setInterviewer, interviewer} = props;
  const interviewersListItem = interviewers.map(interviewere =>{
    return (<InterviewerListItem
    id = {interviewere.id}
    name = {interviewere.name}
    avatar = {interviewere.avatar}
    setInterviewer = {setInterviewer}
    selected = {interviewere.id === interviewer}
    />)
  })
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewersListItem}</ul>
    </section>
  );
};

export default InterviewerList; 
