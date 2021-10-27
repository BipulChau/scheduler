import React from "react";
import "components/InterviewerListItem.scss"
import classNames from "classnames";


const InterviewerListItem = (props) => {
  const{id, name, avatar, selected, setInterviewer} = props;
  let interviewerClass = classNames("interviewers__item", {
    "interviewers__item--selected":selected
  })

  return(
    <li className={interviewerClass} onClick={()=>setInterviewer(id)}>
  <img
    className="interviewers__item-image"
    src={avatar}
    alt={name}
  />
  {name}
</li>
  )
}

export default InterviewerListItem;

