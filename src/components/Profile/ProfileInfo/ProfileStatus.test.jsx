/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="I am react-samurai!" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("I am react-samurai!");
  });

  test("after creating span should be displayed", () => {
    const component = create(<ProfileStatus status="I am react-samurai!" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span).not.toBeNull();
  });

  test("2 after creating span with correct status should be displayed", () => {
    const component = create(<ProfileStatus status="I am react-samurai!" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(() => {
      let input = root.findByType("input");
    }).toThrow();
  });

  test("after creation span contain correct status", () => {
    const component = create(<ProfileStatus status="I am react-samurai!" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span.children[0]).toBe("I am react-samurai!");
  });

  test("input dispyed editMode instead span", () => {
    const component = create(<ProfileStatus status="I am react-samurai!" />);
    const root = component.root;
    let span = root.findByType("span");
    span.props.onDoubleClick();
    let input = root.findByType("input");
    expect(input.props.value).toBe("I am react-samurai!");
  });

  test("callback called", () => {
    const mockCallback = jest.fn();
    const component = create(
      <ProfileStatus status="I am react-samurai!" updateStatus={mockCallback} />
    );
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
