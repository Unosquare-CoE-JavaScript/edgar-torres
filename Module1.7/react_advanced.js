// General guidelines when it comes to building or designing an app.

/*
1) The default state of the component - for instance a button and that button is unclicked
2) The button functionality-- counting for instance and alert or message shown
3) The button resolve and displays a result
*/

// Creating a Custom Hook

/*
- A custom hook is a JS function whose name starts with "use" and that may call other hooks.
- Hooks don't need to have a specific signature, but should always start with "use"
- We can decide what it takes as arguments and what, if anything, should return.
- For example, the purpose of the following hook is to subscribe us to a friend's status as if I was using Facebook, 
and lastly, it takes friendID as an argument and returns whether this friend is online or not:
*/

import { useState, useEffect } from "react";

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}

// Using it the previous code in a different example

function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id);

  if (isOnline === null) {
    return "Loading...";
  }

  return isOnline ? "Online" : "Offline";
}

// Compound Components Pattern

/* 
- They help the dev build more expressive and flexible APIs to share state and logic within components
- It should be used to solve issues related to building reusable components
- To develop highly cohesive components with minimal coupling
- CONS: Only direct children of the parent component will have access to the prop, watch out!
*/

// Compound component example:

<TabSwitcher>
  <header>
    <ul className="tablist">
      <li>
        <Tab id="a">
          <button>Tab A</button>
        </Tab>
      </li>
    </ul>
  </header>
  <main>
    <TabPanel whenActive="a">
      <div>a panel</div>
    </TabPanel>
    <TabPanel whenActive="b">
      <div>b panel</div>
    </TabPanel>
  </main>
</TabSwitcher>;

// Controlled Props

/* 
 They allow users to completely control state values within your component. This differs from the state reducer pattern in the fact
 that you can not only change the state changes based on actions dispatched, but you also can trigger state changes from
 outside the comp or hook as well. 
*/

function MyCapitalizedInput() {
  const [capitalizedValue, setCapitalizedValue] = useState("");

  return (
    <input
      value={capitalizedValue}
      onChange={(e) => setCapitalizedValue(e.target.value.toUpperCase())}
    />
  );
}

// Prop Collection and Getters

/* 
The prop collections and getters pattern allows hooks to support common use cases for UI elements people build with the hook.
In typical UI components, accessibility should be taken into account. For instance, a button functioning as a toggle, it should
have the "aria-pressed" attribute set to "true" or "false" if it's toggled on or off. In addition, people need to remember
to also add the onClick handler to call toggle. 

Prop collections work well for specific requirements, but they aren't very flexible.
We may want to pass in our own click handler for custom scenarios where an event is emitted onClick
*/

// Prop collection

function useToggle() {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);

  return {
    on,
    toggle,
    toggleProps: {
      on,
      onClick: toggle,
      "aria-pressed": on,
    },
  };
}

const PropCollectionAndGetters = () => {
  const { on, toggleProps } = useToggle();

  return (
    <Wrapper>
      <Animation on={on}>
        <Button {...toggleProps} aria-label="toggle-button" />
      </Animation>
      <Switch {...toggleProps} />
    </Wrapper>
  );
};

// Prop Getters

function useToggle() {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);

  const callAll =
    (...fns) =>
    (...args) =>
      fns.forEach((fn) => fn?.(...args));

  function getToggleProps({ onClick, ...props } = {}) {
    return {
      "aria-pressed": on,
      onClick: callAll(onClick, toggle),
      on,
      ...props,
    };
  }
  return {
    on,
    toggle,
    getToggleProps,
  };
}

// State Initialiser Pattern

/* 
This pattern allows me to expose an API to users to be able to reset your component to its original state
without having to completely unmount and remount the component. So what this pattern is for is to allow 
outside users of your component to control that initial state value. 
*/

function Counter({ initialCount = 0 }) {
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount((c) => c + 1);
  const reset = () => setCount(initialCount);
  return (
    <div>
      <button onClick={increment}>{count}</button>
      <button onClick={reset}>{reset}</button>
    </div>
  );
}

/* 
But in a fatal scenario, what happens is the user of my component changes the value of "initialCount" after
the component is mounted?

Resetting state via "key" could potentially solve that case, because it doesn't need any API at all. It's a built-in
React API for all components. 
*/

function KeyPropReset() {
  const [key, setKey] = useState(0);
  const resetCounter = () => setKey((k) => k + 1);
  return <KeyPropResetCounter key={key} reset={resetCounter} />;
}
function KeyPropResetCounter({ reset }) {
  const [count, setCount] = useState(0);
  const increment = () => setCount((c) => c + 1);
  return <CountUI count={count} increment={increment} reset={reset} />;
}

// the outcome is a slightly better structure for the previously stated function "Counter" with a reset functionality

// State Reducer Pattern

/* 
It allows greater control of our state changes and the luxury of keeping out dumb components, dumb. Essentially what it does
is to allow users to control how a child's state is managed

That brings me to the topic of reducers, these are functions that takes in a state and an action. 
Components with many state updates spread across many event handlers can get overwhelming. For these cases,
I can consolidate all the state update logic outside my compoent in a single function called "reducer".
*/

import {useReducer} from 'react';

function reducer(state,action){
    {/**/}
}
function someComponent() {
    const [state, dispatch] = useReducer(reducer, {age: 10});
    //...
}
