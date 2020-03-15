exports.ids = [6];
exports.modules = {

/***/ "./src/articles/reason-react-hooks-tutorial.md":
/*!*****************************************************!*\
  !*** ./src/articles/reason-react-hooks-tutorial.md ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: ReasonML with React Hooks Tutorial — Building a Pomodoro Timer\ndate: 2019-04-15T21:25:04.540Z\nslug: reason-react-hooks-tutorial\ndescription: Learn Reason React by building a Pomodoro Timer with React hooks\ntags: reason,javascript,react,tutorial\nhero_image: timer.png\n---\n\n![](/timer.png)\n\nReasonML is a programming language that combines the simplicity of JavaScript with the performance of OCaml. JavaScript programmers should give ReasonML a try. Reason's inherits OCaml's typesystem as well as the approachability of JavaScript.\n\nWith [ReasonReact](https://reasonml.github.io/reason-react/) and [BuckleScript](https://bucklescript.github.io/), we can compile Reason code to JavaScript that works like good old React.\n\nBut that's not all, things are getting even better for the Reason ecosystem. Earlier last week, ReasonReact [version 0.7.0 dropped](https://reasonml.github.io/reason-react/blog/2019/04/10/react-hooks), with support for React hooks. We can now build robust components with React hooks that:\n\n- eliminate duplicated lifecycle logic (like in componentDidMount, componentDidUpdate, and componentWillUnmount)\n- eliminate the need for complicated patterns like higher-order components or render props\n- allow _easier refactoring_ of stateful components\n\nThink for a moment about that last point, what else give us easier refactorability?\n\nA rock solid typesystem and a helpful compiler!\n\nToday, we're going to build a Pomodoro Timer [like this](https://tomato-timer.com/) using Reason and React.\n\nA pomodoro timer allows you to set a timer for say 25 or 30 minutes that lets you know when to stop working. Because sometimes taking a break is good, and you better believe I'm using one while writing this.\n\n## Initializing a Project\n\nThe first step is to install BuckleScript, a tool that will compile our Reason code to JavaScript.\n\n```sh\nnpm install -g bs-platform\n```\n\nAfter that, we can scaffold our project with the `init` command, and setting the `theme` to react-hooks.\n\n```sh\nbsb -init pomodoro-timer -theme react-hooks\ncd pomodoro-timer && npm install\n```\n\nNow that our project set up, we can mention our folder layout. Our Reason code belongs in the src directory. Where we usually have an index.js file in a JavaScript React project, we have an Index.re file. These files serve the same purpose: render the app root.\n\nSince our code will compile to JavaScript, I still like to have a bundler like Webpack to bundle those files.\n\n> Tip: It is generally considered a best practice to keep your folder structure as flat as possible with ReasonML, using captialized file names (like Timer.re). See the [ReasonML docs](https://reasonml.github.io/docs/en/project-structure#folders) for a discussion on project structure.\n\n### Running the code\n\nBefore I clean up the environment, let us try running the code. This will need two or three separate terminal tabs:\n\n```sh\n# in one tab\nnpm start\n```\n\nThis runs `bsb -make-world -w` which compiles your Reason files on every change. It does this quickly, mind you.\n\n```sh\n# in another tab\nnpm run webpack\n```\n\nThis command takes our compiled JavaScript and spits out a bundle that we can then open in a browser using:\n\n```sh\nopen build/index.html\n```\n\nI prefer use a static file server like [zeit/serve](https://github.com/zeit/serve).\n\n```sh\n# install `serve` globally\nnpm i -g serve\n\n# serve it!\nserve build/\n```\n\n![initial project](./initial_project.png)\n\n### Cleaning up the Environment\n\nI want to clean up the default project structure before writing an implementation.\n\n1. Remove the Component1.re and Component2.re files, we will not be using these. You can still read them and try to making sense of how hooks are working in our new environment.\n2. Replace index.html with the following:\n\n```html\n<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <title>Pomodoro Timer</title>\n  </head>\n  <body>\n    <div id=\"root\"></div>\n    <script src=\"Index.js\"></script>\n  </body>\n</html>\n```\n\nReplace Index.re with the following:\n\n```reason\nReactDOMRe.renderToElementWithId(<Timer />, \"root\");\n```\n\nOpen up bsconfig.json and change the field \"in-source\" from true to false. This will output our compiled JavaScript into the lib/js directory. I prefer this over leaving them inside of our root src directory.\n\nTell webpack to build from the new location by changing webpack.config.js to the following:\n\n```js\nmodule.exports = {\n  entry: './lib/js/src/Index.bs.js',\n  // rest of webpack config\n};\n```\n\nAnd now with all out that taken care of, we can begin the fun part, the implementation.\n\n## Building a Stateless Component\n\nAfter cleaning up, notice that we are trying to render a `Timer` component but we have not even defined one. Let us write a stateless component to render to the page.\n\n```reason\n[@react.component]\nlet make = () => {\n  <div> {ReasonReact.string(\"One day this will be a timer\")} </div>;\n};\n```\n\nI want to highlight how simple this code is. Writing a stateless React component in the previous version was more verbose:\n\n```reason\n/* DO NOT WRITE THIS */\nlet component = ReasonReact.statelessComponent(\"Timer\");\nlet make = () => {\n  ...component,\n  render: _children =>  <div> {ReasonReact.string(\"One day this will be a timer\")} </div>;\n};\n```\n\nEven compared to regular JavaScript with React, this new syntax is incredibly slick. With Reason projects, we do not need to layer imports on top of the file every time we make a new file.\n\n## The useReducer Hook\n\nNow we are going to introduce some state into this equation. We do not have any \"class\" components, we are still using functional components. But now we are going to use React hooks to compose a solution.\n\nFor our timer, we need to keep track of at least two things:\n\n1. The seconds on the clock\n2. Whether it is ticking or not\n\nWhen we consider any timer, we usually have three buttons: `Start`, `Stop`, and `Reset`. These map to directly to user interactions, but there is one more: the `Tick` itself. Even though the tick is not controlled by the user, it is still an action that should return a new state for our reducer.\n\nAt the top of Timer.re, where we will build this whole app, add the following:\n\n```reason\ntype state = {\n  seconds: int,\n  isTicking: bool\n};\n\ntype action =\n  | Start\n  | Stop\n  | Reset\n  | Tick;\n```\n\nHow easy it is, to implement an application after you have described your states needs and actions!\n\nNext we'll update our make function to use a reducer:\n\n```reason\n[@react.component]\nlet make = () => {\n  let (state, dispatch) =\n    React.useReducer(\n      (state, action) =>\n        switch (action) {\n        | Start => {...state, isTicking: true}\n        | Stop => {...state, isTicking: false}\n        | Reset => {...state, seconds: 30}\n        | Tick => {...state, seconds: state.seconds - 1}\n        },\n      {isTicking: false, seconds: 30},\n    );\n\n  <div>\n    {ReasonReact.string(\n       \"There are \" ++ string_of_int(state.seconds) ++ \" on the clock\",\n     )}\n  </div>;\n};\n```\n\nThe syntax is like that of ReactJS. The `useReducer` function returns a tuple as opposed an array. This is because JavaScript does not know what the heck a tuple is. We make sure to handle each of our action types inside this reducer, returning a whole copy of the state.\n\nThe second argument to `useReducer` is the initial state of the reducer. It would make sense for the time to receive the initial time as a prop but I'll leave it this way for now.\n\nNow we need a way to invoke these actions. Let us start with the `Tick` because it is the most complicated bit.\n\n## The useEffect hook\n\nTo update the timer every second, we need to create an effect. In the JavaScript world, this means putting a callback function within `setInterval`.\n\nLet us add this hook between the `useReducer` function and the returned JSX.\n\n```reason\nReact.useEffect0(() => {\n  let timerId = Js.Global.setInterval(() => dispatch(Tick), 1000);\n  Some(() => Js.Global.clearInterval(timerId));\n});\n```\n\nIf you recall the way `useEffect` works:\n\n- The first argument is a callback function that runs when the component mounts, updates, or unmounts.\n- Optionally, the callback function can return another function that performs cleanup. This includes unsubscribing from sockets or clearing a setInterval so it does not persist forever.\n\nIf you run the code and refresh your browser, you'll see that our timer is going to run indefinitely.\n\nIt should not do this, so lets update our reducer again to account for whether the `isTicking` flag is true or false. We will also make sure that `seconds` are greater than zero so we do not go negative.\n\n```reason\nlet (state, dispatch) =\n    React.useReducer(\n      (state, action) =>\n        switch (action) {\n        | Start => {...state, isTicking: true}\n        | Stop => {...state, isTicking: false}\n        | Reset => {...state, seconds: 30}\n        | Tick => state.isTicking && state.seconds > 0\n            ? {...state, seconds: state.seconds - 1} : state\n        },\n      {isTicking: false, seconds: 30},\n    );\n```\n\nNow you can verify this by setting `isTicking` to true and `seconds` to 3. Lovely, this app is functional now. If you wanted to actually use it, refresh your browser and watch it count down.\n\n## Interactivity with Buttons\n\nTo make this Timer even better, I am going to add buttons.\n\nLet us define a Button module in the same file as our Timer, right above the make function.\n\n```reason\nmodule Button = {\n  [@react.component]\n  let make = (~label, ~onClick) => {\n    <button onClick> {label |> ReasonReact.string} </button>;\n  };\n};\n```\n\nThis button takes a label and an onClick prop. We can add them to our Timer, at the bottom of the make function like so:\n\n```reason\n\n[@react.component]\nlet make = () => {\n  /* useReducer */\n\n  /* useEffect0 */\n\n  <div>\n      {ReasonReact.string(\n        \"There are \" ++ string_of_int(state.seconds) ++ \" seconds on the clock\",\n      )}\n      {state.isTicking\n        ? <Button label=\"STOP\" onClick={_event => dispatch(Stop)} />\n        : <>\n            <Button label=\"START\" onClick={_event => dispatch(Start)} />\n            <Button label=\"RESET\" onClick={_event => dispatch(Reset)} />\n          </>}\n    </div>;\n};\n```\n\nTry running this in your browser, you should see:\n\n![start and stop buttons](./start_stop.png)\n\nIf you click START, it will start. If you click STOP it will stop. RESET will bring the timer back up to the initial time. Pretty straightforward how it just works!\n\nAt this point, our app is **feature-complete**. Read on to make it even cooler, with style and other aesthetic details.\n\n## Aesthetic Concerns\n\nLet us add some styles and make this timer look pretty. Or at least better.\n\nUpdate the JSX in Timer to the following:\n\n```reason\n[@react.component]\nlet make = () => {\n  /* useReducer */\n\n  /* useEffect0 */\n<div\n    style={ReactDOMRe.Style.make(\n      ~border=\"1px solid black\",\n      ~borderRadius=\"8px\",\n      ~maxWidth=\"180px\",\n      ~textAlign=\"center\",\n      (),\n    )}>\n    <p\n      style={ReactDOMRe.Style.make(\n        ~color=\"#444444\",\n        ~fontSize=\"42px\",\n        ~margin=\"16px 0\",\n        (),\n      )}>\n      {state.seconds |> formatTime |> str}\n    </p>\n    {state.isTicking\n       ? <Button label=\"STOP\" onClick={_event => dispatch(Stop)} />\n       : <>\n           <Button label=\"START\" onClick={_event => dispatch(Start)} />\n           <Button label=\"RESET\" onClick={_event => dispatch(Reset)} />\n         </>}\n  </div>;\n};\n```\n\nI have introduced the default styles that come with ReasonReact. They are not my preferred style solution as I like [bs-css](https://github.com/SentiaAnalytics/bs-css) better, but for this small project, they will do fine.\n\nI also introduce a `formatTime` function. Let us implement that function so our project compiles:\n\n```reason\nlet padNumber = numString =>\n  if (numString |> int_of_string < 10) {\n    \"0\" ++ numString;\n  } else {\n    numString;\n  };\n\nlet formatTime = seconds => {\n  let mins = seconds / 60;\n  let minsString = mins |> string_of_int |> padNumber;\n  let seconds = seconds mod 60;\n  let secondsString = seconds |> string_of_int |> padNumber;\n  minsString ++ \":\" ++ secondsString;\n};\n```\n\nI included `padNumber` as well, a useful utility that pads minutes and seconds which are less than 10. This makes the timer more reader friendly.\n\nI will be honest, this timer looks pretty good right now and I have not even styled the buttons. I will leave that as a task for the reader if they are so inclined.\n\n![finished timer](./finished_timer.png)\n\n## Update the Document Title\n\nThe concept of a timer in the browser can be further improved. If we have the time remaining persist in the browser tab itself, it would be visible if the user is in another tab.\n\nAll we have to do to get that going is update our `Tick` action in the reducer. I'll even show off ReasonML's interop with JavaScript by updating the document title. Note the `%bs.raw` directive, this allows us to put on the JavaScript training wheels and use it directly.\n\n```reason\nlet updateTitle: string => unit = [%bs.raw\n  {|\n  function updateTitle(remaining) {\n    document.title = \"⏰ \" + remaining + \" ⏰\";\n  }|}\n];\n\n[@react.component]\nlet make = () => {\nlet (state, dispatch) =\n    React.useReducer(\n      (state, action) =>\n        switch (action) {\n        | Start => {...state, isTicking: true}\n        | Stop => {...state, isTicking: false}\n        | Reset => {...state, seconds: 30}\n        | Tick =>\n          state.isTicking && state.seconds > 0\n            ? {\n              updateTitle(formatTime(state.seconds - 1));\n              {...state, seconds: state.seconds - 1};\n            }\n            : state\n        },\n      {isTicking: false, seconds: 30},\n    );\n\n/* useEffect0 */\n\n\n/* JSX return */\n};\n```\n\nAnd with that, I am finished with the implementation of the timer:\n\n![finished timer with title update](./finished_timer_title.png)\n\n## Summary\n\nWith this tutorial we tackled the updated ReasonReact syntax with React hooks. when React hooks dropped late last year I could not wait to be able to use them in Reason projects. Now that they are here, we can take advantage of strong typed, composable, functional code.\n\nWe learned:\n\n- how to make a basic stateless component\n- how to use the `useReducer` hook\n- how to use the `useEffect` hook\n- how to define other React components in the same file/module.\n- how to use basic styles in ReasonReact\n- how to do interon with `%bs.raw`\n\nI hope this has been a fun or useful experience, be sure to follow me @iwilsonq on [dev.to](https://dev.to/iwilsonq), [Twitter](https://twitter.com/iwilsonq), [Medium](https://medium.com/@iwilsonq) or anywhere else I roam.\n\nIf you want to how ReasonML works seamlessly with GraphQL, check out this article I wrote on [ReasonML with GraphQL, the Future of Type-Safe Web Applications](https://medium.com/open-graphql/reasonml-with-graphql-the-future-of-type-safe-web-applications-65be2e8f34c8).\n\nIf you'd like to keep up with future posts, [sign up for my newsletter here](https://buttondown.email/iwilsonq)!\n");

/***/ })

};;
//# sourceMappingURL=6.js.map