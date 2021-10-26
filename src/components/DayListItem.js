import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss"

export default function DayListItem(props) {
  let dayClass =classNames("day-list__item",{
    "--selected":props.selected,
    "--full":props.full
 })
  return(
    <li onClick={() => props.setDay(props.name)}>
      <h2 className={dayClass.replace(/ /g,'')}>{props.name}</h2>
      <h3 className={dayClass.replace(/ /g,'')}>{props.spots} spots remaining</h3>
    </li>
  )
}