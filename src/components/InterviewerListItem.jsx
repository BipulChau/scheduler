import React from "react";
import "components/InterviewerListItem.scss"
import classNames from "classnames";


const InterviewerListItem = (props) => {
  const{key, name, avatar, selected, setInterviewer,interviewer} = props;
  let interviewerClass = classNames("interviewers__item", {
    "interviewers__item--selected":selected
  })
  
  return(
    <li className={interviewerClass} key={key} onClick={setInterviewer}>
  <img
    className="interviewers__item-image"
    src={avatar}
    alt={name}
  />
  {selected?name:""}
</li>
  )
}

export default InterviewerListItem;

