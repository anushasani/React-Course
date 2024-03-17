import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import {
  RestaurantCard,
  withRestaurantPromoted,
} from "../../components/RestaurantCard";
import MOCK_DATA from "../Mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should contain Hotel Name name EkDum Donne Biryani", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const RestaurantCardName = screen.getByText("EkDum Donne Biryani");

  expect(RestaurantCardName).toBeInTheDocument();
});
it("Should contain Promoted Lable in the card", () => {
  render(<withRestaurantPromoted />);

  console.log("screen", screen.debug());

  const promotedLabel = screen.queryByText(/Promoted/i);
  expect(promotedLabel).toBeInTheDocument();
});
