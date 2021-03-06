//***********This function will return an array of appointments for the given day ********************************

export function getAppointmentsForDay(state, day) {
  // filtering days array based on day
  const dayObject = state.days.filter((element) => element.name === day);
  if (dayObject.length === 0) {
    return [];
  }
  // each dayObject is an array with a single element at index 0 and appointments is also an array
  const appointmentIDs = dayObject[0].appointments;
  // creating a new array out of appointmentIDs using map function and returning object of appointments which matches the element of appointmentIDs,i.e. id.
  const appointmentDetails = appointmentIDs.map((id) => state.appointments[id]);

  return appointmentDetails;
}

// Output will be something like this if the day is "Monday"***************************************************
// [
//   { id: 1, time: '12pm', interview: null },
//   { id: 2, time: '1pm', interview: null },
//   {
//     id: 3,
//     time: '2pm',
//     interview: { student: 'Archie Cohen', interviewer: 2 }
//   }
// ]
//*************************************************** Data ***************************************************

// const state = {
//   days: [
//     {
//       id: 1,
//       name: "Monday",
//       appointments: [1, 2, 3],
//       interviewers: [1, 2]
//     },
//     {
//       id: 2,
//       name: "Tuesday",
//       interviewers: [2, 3],
//       appointments: [4, 5]
//     }
//   ],
//   appointments: {
//     "1": { id: 1, time: "12pm", interview: null },
//     "2": { id: 2, time: "1pm", interview: null },
//     "3": {
//       id: 3,
//       time: "2pm",
//       interview: { student: "Archie Cohen", interviewer: 2 }
//     },
//     "4": { id: 4, time: "3pm", interview: null },
//     "5": {
//       id: 5,
//       time: "4pm",
//       interview: { student: "Chad Takahashi", interviewer: 2 }
//     }
//   },
//   interviewers: {
//     "1": {
//       "id": 1,
//       "name": "Sylvia Palmer",
//       "avatar": "https://i.imgur.com/LpaY82x.png"
//     },
//     "2": {
//       id: 2,
//       name: "Tori Malcolm",
//       avatar: "https://i.imgur.com/Nmx0Qxo.png"
//     },
//     "3": {
//       "id": 3,
//       "name": "Mildred Nazir",
//       "avatar": "https://i.imgur.com/T2WwVfS.png"
//       }
//   }
// };

//********************************           function getInterview                       ****************************/

// The function should return a new object containing the interview data when we pass it an object that contains the interviewer....
//  Otherwise, the function should return null. The object it returns should look like this:.....
// {
//   "student": "Lydia Miller-Jones",
//   "interviewer": {
//     "id": 1,
//     "name": "Sylvia Palmer",
//     "avatar": "https://i.imgur.com/LpaY82x.png"
//   }
// }

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }

  const interviewerID = interview.interviewer;
  const interviewerObject = state.interviewers[interviewerID];

  return { ...interview, interviewer: interviewerObject };
}

//********************************           function getInterviewersForDay                       ****************************/

export function getInterviewersForDay(state, day) {
  const dayObject = state.days.filter((element) => element.name === day);
  if (dayObject.length === 0) {
    return [];
  }

  const interviewersIDs = dayObject[0].interviewers;
  const interviewers = interviewersIDs.map((id) => state.interviewers[id]);

  return interviewers;
}

// Sample Output of getInterviewersForDay **********************
// [
//   {
//     id: 1,
//     name: 'Sylvia Palmer',
//     avatar: 'https://i.imgur.com/LpaY82x.png'
//   },
//   {
//     id: 2,
//     name: 'Tori Malcolm',
//     avatar: 'https://i.imgur.com/Nmx0Qxo.png'
//   }
// ]
