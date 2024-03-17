import { fireEvent, render, screen } from "@testing-library/react";

import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render header component with login button", () => {
  render(
    //linl is there
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  expect(loginButton).toBeInTheDocument();
});
it("it shpuld render logout button when hit on the login button", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const Login = screen.getByRole("button", { name: "Login" });
  fireEvent.click(Login);

  const Logout = screen.getByRole("button", { name: "Logout" });

  expect(Logout).toBeInTheDocument();
});
