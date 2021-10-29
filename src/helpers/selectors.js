//***********This function will return an array of appointments for the given day ********************************


const state = {
  days: [
    {
      id: 1,
      name: "Monday",
      appointments: [1, 2, 3]
    },
    {
      id: 2,
      name: "Tuesday",
      appointments: [4, 5]
    }
  ],
  appointments: {
    "1": { id: 1, time: "12pm", interview: null },
    "2": { id: 2, time: "1pm", interview: null },
    "3": {
      id: 3,
      time: "2pm",
      interview: { student: "Archie Cohen", interviewer: 2 }
    },
    "4": { id: 4, time: "3pm", interview: null },
    "5": {
      id: 5,
      time: "4pm",
      interview: { student: "Chad Takahashi", interviewer: 2 }
    }
  }
};

 function getAppointmentsForDay(state, day) {
  const dayObject = state.days.filter(element => element.name === day)
  if (dayObject.length === 0) {
    return [];
  }
  
  const appointmentIDs = dayObject[0].appointments;
  console.log("appointmentIDs: ",appointmentIDs)
  console.log(`\n*************************\n`)
  const appointmentDetails = appointmentIDs.map(id => state.appointments[id])
  
  console.log("appointmentDetails: ",appointmentDetails)
  return appointmentDetails;

}

getAppointmentsForDay(state,"Monday")

