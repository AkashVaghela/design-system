/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Select from "./select";

const options = [
  { label: "Staraw hat pirates", value: "1" },
  { label: "Red haired pirates", value: "2" },
];

test("renders all options passed to it", () => {
  const { getAllByRole, getByTestId } = render(<Select options={options} />);

  fireEvent.click(getByTestId("DscSelectButton"));

  expect(getAllByRole("menuitemradio")).toHaveLength(options.length);
});
