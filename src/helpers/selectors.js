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
