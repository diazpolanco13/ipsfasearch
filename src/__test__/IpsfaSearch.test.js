import React from "react";
import "@testing-library/react-hooks";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import IpsfaSearch from "../IpsfaSearch";

describe("Pruebas en el IpsfaDescribe", () => {
  it("Debe cerear un SnapShot", () => {
    const wrapper = shallow(<IpsfaSearch />);
    expect(wrapper).toMatchSnapshot();
  });
});
