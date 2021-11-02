/* we are rendering <Appointment> down below, so we need React.createElement*/
import React from "react";

/* We import our helper functions from the react-resting-library 
   The render function allows us to render Components
*/
import { render } from "@testing-library/react";

/* We import the component that we are testing */

import Appointment from "components/Appointment";

/* A test that renders a React component */

describe("Appointment", () => {
  it("renders without crashing", () => {
    render(<Appointment />);
  });
});
