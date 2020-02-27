webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./src/articles/reasonml-with-graphql.md":
/*!***********************************************!*\
  !*** ./src/articles/reasonml-with-graphql.md ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: ReasonML with GraphQL, the Future of Type-Safe Web Applications\npublished: true\ndescription: Build a small ReasonReact web application that consumes a GraphQL endpoint using reason-apollo\ntags: reason,graphql,javascript,fp\ndate: 2019-09-13T07:00:00.000Z\nslug: building-powerful-graphql-servers-with-rust\nhero_image: https://thepracticaldev.s3.amazonaws.com/i/aejew3ps1khqnw7gy0yk.png\n---\n\n![](https://thepracticaldev.s3.amazonaws.com/i/aejew3ps1khqnw7gy0yk.png)\n\n_I made this graphic myself_\n\nReasonML, also known as JavaScript-flavored OCaml, offers nearly impenetrable type safety for developing user interfaces. By adopting a static type system, you can eliminate an entire class of errors before your app is served.\n\nWe’re going to look into building a small web application that uses consumes a GraphQL endpoint using ReasonML. We’ll cover:\n\n- getting started with a ReasonReact project\n- setting up a client with reason-apollo\n- sending queries\n- mutating data\n\nIf you’re new to both GraphQL and ReasonML, I’d suggest learning one at a time. Learning more than one big thing at once is often difficult for me. If you’re experienced with JavaScript and GraphQL, but want to learn ReasonML, read on, but keep the [docs](https://reasonml.github.io) handy.\n\n## Getting Started - Establishing a ReasonReact Project\n\nIn order to get going with ReasonML, we must first install the cli, `bsb-platform` that handles bootstrapping the project. You should also get an editor plugin that helps with developing ReasonML apps. If you’re using VSCode, reason-vscode by Jared Forsyth is my preferred plugin.\n\n```bash\nnpm install -g bsb-platform\n```\n\nThis installs the BuckleScript compiler that turns our ReasonML into wonderful JavaScript which has already been type-checked and can be run in the browser.\n\nNow we can initialize our project and hop right in.\n\n```bash\nbsb -init reason-graphql-example -theme react\ncd reason-graphql-example\nnpm install\n```\n\n- The `init` argument specifies the name of the project we’re initializing.\n- The `theme` argument specifies the template we wish to use. I usually just choose the react theme.\n- We run `npm install` to install dependences just like in any other JavaScript project.\n\nWith the project scaffolded, we can try to build it. In two separate terminal panes, run:\n\n```bash\nnpm start\n# and\nnpm run webpack\n```\n\n- `npm start` tells BuckleScript (bsb) to build the project watch for changes to your .re files.\n- `npm run webpack` fires up webpack to build your main JavaScript bundle\n\n_Quick tip: you’ll notice that the webpack output is in the **build** folder but the index.html file is in the **src** folder. We can make serving the project a little bit easier by moving the index.html file to the build folder and rewriting the script tag to point at the adjacent Index.js file. _\n\nWith all that taken care of, you can serve your build folder using `http-server build` or `serve build` and check out the project.\n\n![initial screen](https://thepracticaldev.s3.amazonaws.com/i/sfcjd5lxm76wsycbrcny.png)\n\nWhen I’m developing a ReasonML project, I’m running 3 terminal tabs:\n\n1. `npm start` to transpile ReasonML to JavaScript\n2. `npm run webpack` to bundle JavaScript\n3. `serve build` to actually serve the build on a port\n\nBefore we can get to the fun stuff, we still must clear out the boilerplate and set up react-apollo.\n\nGo ahead and remove the Component1 and Component2 files, and then update Index.re to the following:\n\n```ocaml\nReactDOMRe.renderToElementWithId(<App />, \"root\");\n```\n\nUpdate index.html to:\n\n```html\n<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <title>ReasonML GraphQL Example</title>\n  </head>\n  <body>\n    <div id=\"root\"></div>\n\n    <script src=\"./Index.js\"></script>\n  </body>\n</html>\n```\n\nFinally, create an App.re file and add the following:\n\n```ocaml\n/* App.re */\nlet str = ReasonReact.string;\nlet component = ReasonReact.statelessComponent(\"App\");\n\nlet make = _children => {\n  ...component,\n  render: _self =>\n\t<div>\n\t  <h1> {\"Hello ReasonReact\" |> str} </h1>\n\t</div>\n};\n```\n\nYou might have to re-run your terminal commands, but with all that said and done, you should have something like this appear on your screen:\n\n![hello reason react](https://thepracticaldev.s3.amazonaws.com/i/7732nf5s6g7o93r406rp.png)\n\nIt feels like a lot of effort to get started, but accepting early friction for a smoother experience later on is the tradeoff here.\n\n## Initializing Reason Apollo\n\nIn order to get set up with Apollo we’re going to run:\n\n```bash\nnpm install -S reason-apollo react-apollo apollo-client apollo-cache-inmemory apollo-link apollo-link-context apollo-link-error apollo-link-http graphql graphql-tag apollo-link-ws apollo-upload-client subscriptions-transport-ws\n```\n\nThat looks like a big install command. It is, but only the first package, reason-apollo, is consumed in our ReasonML code. However, reason-apollo is a library of binding labels depends on these other JavaScript packages.\n\nIn order to make writing GraphQL queries more friendly we’ll need one more dev dependency.\n\n```bash\nnpm install -D graphql_ppx\n```\n\nAs that installs we can open up our bsconfig.json file and update the “bs-dependencies” and “ppx-flags” keys like so:\n\n```json\n// bsconfig.json\n{\n  \"bs-dependencies\": [\"reason-react\", \"reason-apollo\"],\n  \"ppx-flags\": [\"graphql_ppx/ppx\"]\n\n  // other fields...\n}\n```\n\nThe “bs-dependencies” array tells BuckleScript to include those npm modules in the build process. The ppx flags array lets our IDE know how to handle preprocess certain directives, GraphQL in our case.\n\nCreate a file inside the src folder called Client.re. This is where we will declare our instance of the Apollo Client.\n\n```ocaml\n/* Client.re */\nlet inMemoryCache = ApolloInMemoryCache.createInMemoryCache();\n\nlet httpLink =\n  ApolloLinks.createHttpLink(~uri=\"https://video-game-api-pvibqsoxza.now.sh/graphql\", ());\n\nlet instance =\n  ReasonApollo.createApolloClient(~link=httpLink, ~cache=inMemoryCache, ());\n```\n\n> Note: If this uri, https://video-game-api-pvibqsoxza.now.sh/graphql does not work, please send me a message on twitter or here in the comments and I’ll update that as quickly as possible\n\nWhen we work with ReasonML, any variable that we create with a `let` binding is automatically exported from the module for us.\n\nWith the instance created, we can reference it in any of our other .re files. Update Index.re to the following:\n\n```ocaml\n/* Index.re */\nReactDOMRe.renderToElementWithId(\n  <ReasonApollo.Provider client=Client.instance>\n    <App />\n  </ReasonApollo.Provider>,\n  \"root\",\n);\n```\n\nIt looks a little like a standard React JS application, with a couple caveats. Notice that there are no import statements. In ReasonML, we have access to all of the namespaces built in our application. From the perspective of Index.re, We can see the `Client` and the `App` modules.\n\nWhen we create a .re file in our src folder, it becomes a module. We could also declare our modules explicitly within our files.\n\nIt is now time to consume our API.\n\n## Sending Queries and Rendering a List\n\nWhile writing this article I created a small Node GraphQL server, the code of which is available at [this repo](https://github.com/iwilsonq/video-game-api). To keep costs low, I declared an array of mock data to return on each GraphQL request rather than host a database.\n\nRather than create a todo app, I decided to create a list of video games that I played at some point long ago. Then, I could check if I finished it or not, thus remembering the games that I still haven’t beat.\n\nAs we are working with a GraphQL server, we should be able to figure out exactly how to call it by observing the schema.\n\n```Graphql\n  type VideoGame {\n    id: ID!\n    title: String!\n    developer: String!\n    completed: Boolean!\n  }\n\n  type Query {\n    videoGames: [VideoGame!]!\n  }\n\n  type Mutation {\n    completeGame(id: ID!): VideoGame!\n  }\n```\n\nCurrently, we have one query and one mutation, both of which operate around this `VideoGame` type. A GraphQL adept will notice that every return value is non-nullable, that is, these responses cannot return unset fields or null objects.\n\nSoon we’ll see why all of the !’s are particularly important for our ReasonML code.\n\nLet’s begin by defining the query in on top of App.re, just below the `component` declaration.\n\n```ocaml\n/* App.re */\n\nmodule VideoGames = [%graphql\n  {|\n  query VideoGames {\n    videoGames {\n      id\n      title\n      developer\n      completed\n    }\n  }\n|}\n];\n\nmodule VideoGamesQuery = ReasonApollo.CreateQuery(VideoGames);\n\n/* let make = ... */\n```\n\nComparing with the JavaScript in react-apollo, this code would be most analogous to:\n\n```js\nconst VideoGames = gql`\n  query VideoGames {\n    videoGames {\n      id\n      title\n      developer\n      completed\n    }\n  }\n`\n\n// later in render\nrender() {\n  return (\n    <Query query={VideoGames}> {/* ... */} </Query>\n  )\n}\n\n```\n\nNow let’s update the render function:\n\n```ocaml\n/* App.re */\nlet make = _children => {\n  ...component,\n  render: _self => {\n\tlet videoGamesQuery = VideoGames.make();\n\t<div>\n\t\t<h1> {\"ReasonML + ReasonReact + GraphQL\" |> str} </h1>\n\t\t<VideoGamesQuery variables=videoGamesQuery##variables>\n        ...{\n             ({result}) =>\n               switch (result) {\n               | Loading => <div> {\"Loading video games!\" |> str} </div>\n               | Error(error) => <div> {error##message |> str} </div>\n               | Data(data) => <VideoGameList items=data##videoGames />\n               }\n           }\n      </VideoGamesQuery>\n\t</div>;\n  }\n};\n```\n\nHere, we’re taking advantage of ReasonML’s coolest feature - [pattern matching](https://reasonml.github.io/docs/en/pattern-matching). Pattern matching combined with [variants](https://reasonml.github.io/docs/en/variant) makes the logic that you would otherwise put in branches of if-else statements more linear and easier to follow. It is also reduces branch checking to [constant rather than linear time](https://reasonml.github.io/docs/en/variant), making it more efficient.\n\nIf the ReasonML code ever seems more verbose, just remember we’re still getting perfect type safety when it compiles. We still need to build the `VideoGamesList` component as well as define the `videoGame` record type.\n\nStarting with the record type, create a new file called VideoGame.re and add the following:\n\n```ocaml\n/* VideoGame.re */\n\n[@bs.deriving jsConverter]\ntype videoGame = {\n  id: string,\n  title: string,\n  developer: string,\n  completed: bool,\n};\n```\n\nThe `videoGame` type as we have it here, has 4 fields, none of which are optional. The BuckleScript directive above it adds a pair of exported utility methods that allow us to [convert between ReasonML records and JavaScript objects](https://bucklescript.github.io/docs/en/generate-converters-accessors).\n\n> Tip: when Apollo returns a response, it returns untyped JavaScript objects. The `jsConverter` directive gives us an exported method called `videoGameFromJs` that we can use to map the Apollo query data to fully typed ReasonML.\n\nTo see this mechanic in action, create a new file called VideoGameList.re and add:\n\n```ocaml\n/* VideoGameList.re */\nopen VideoGame;\n\nlet str = ReasonReact.string;\nlet component = ReasonReact.statelessComponent(\"VideoGameList\");\n\nlet make = (~items, _children) => {\n  ...component,\n  render: _self =>\n    <ul style={ReactDOMRe.Style.make(~listStyleType=\"none\", ())}>\n      {\n        items\n        |> Array.map(videoGameFromJs)\n        |> Array.map(item =>\n             <li key={item.id}>\n             \t<input\n                  id={item.id}\n                  type_=\"checkbox\"\n                  checked={item.completed}\n                />\n                <label htmlFor={item.id}>\n                  {item.title ++ \" | \" ++ item.developer |> str}\n                </label>\n             </li>\n           )\n        |> ReasonReact.array\n      }\n    </ul>,\n};\n```\n\n1. Open the `VideoGame` module (VideoGame.re) at the top so we can use all of it’s exports in the `VideoGameList` module.\n2. Declare the component type and string rendering shorthand.\n3. Define a make function that expects one prop, `items`.\n4. Inside the render function, pipe the items to convert JS objects to ReasonML records, map records to JSX, and finally output them as an array.\n\n> Note: Piping basically reverses the order of function calls to potentially improve readability. With the `|>` operator, the `items` object is applied to each function as the _last_ argument.\n\nThough I like prefer the piping style, the following are equivalent.\n\n```ocaml\nitems\n\t|> Array.map(videoGameFromJs)\n\t|> Array.map(renderItem)\n\t|> ReasonReact.array;\n\nReasonReact.array(\n\tArray.map(\n\t\trenderItem,\n\t\tArray.map(\n\t\t\tvideoGameFromJs,\n\t\t\titems\n\t\t)\n\t)\n);\n```\n\nI think we are ready to once again compile and serve our project. If you haven’t already, run this command in your project root:\n\n```bash\nyarn send-introspection-query https://video-game-api-pvibqsoxza.now.sh/graphql\n```\n\nThis generates a `graphql_schema.json` file that Reason Apollo uses to type check your queries. If your ReasonML app asks for a field that isn’t on the schema, or if it doesn’t properly handle optional data types, it will not compile.\n\nThe strict typing serves as a wonderful sanity check for writing queries and mutations.\n\nWhen all is said and done, you should see the following.\n\n![finished screen](https://thepracticaldev.s3.amazonaws.com/i/96prj40pfw9frc23j68r.png)\n\nDon’t yell at me for not finishing the main story in Skyrim.\n\n## Mutating Data\n\nOne thing you may notice thus far is that clicking the checkboxes doesn’t do anything. This is expected, since we have not yet wired up a mutation.\n\nLet us begin by recalling our schema above, and creating a module for the mutation to mark a game completed.\n\nInside VideoGameList.re, add these modules to the top of the file just beneath the call to create a component.\n\n```ocaml\n/* VideoGameList.re */\nmodule CompleteGame = [%graphql\n  {|\n  mutation CompleteGame($id: ID!) {\n    completeGame(id: $id) {\n      id\n      completed\n    }\n  }\n|}\n];\n\nmodule CompleteGameMutation = ReasonApollo.CreateMutation(CompleteGame);\n```\n\nFor the render prop of the mutation, it’ll look pretty similar to the JavaScript version. I’ll put this code here and then walk through it, starting from inside the `<li>` tag.\n\n```ocaml\n/* VideoGameList.re */\n\n<li key={item.id}>\n  <CompleteGameMutation>\n    ...{\n        (mutate, {result}) => {\n          let loading = result == Loading;\n          <div>\n            <input\n              id={item.id}\n              type_=\"checkbox\"\n              checked={item.completed}\n              onChange={\n                _event => {\n                  let completeGame =\n                    CompleteGame.make(~id=item.id, ());\n                  mutate(~variables=completeGame##variables, ())\n                  |> ignore;\n                }\n              }\n            />\n            <label\n              htmlFor={item.id}\n              style={\n                ReactDOMRe.Style.make(\n                  ~color=loading ? \"orange\" : \"default\",\n                  (),\n                )\n              }>\n              {item.title ++ \" | \" ++ item.developer |> str}\n            </label>\n          </div>;\n        }\n      }\n  </CompleteGameMutation>\n</li>\n```\n\nLike the Apollo `VideoGamesQuery` component we used earlier, the `CompleteGameMutation` component we see here passes to its children a mutate function as well as a results object.\n\nThis particular component is not the best example to show off how you could use that results object, as I only take advantage of it when a single item is being updated. If it is, I color the text of the item label green and call that the loading state.\n\nI’m no UX guy, but I think that’ll do for today.\n\n## Wrapping Up\n\nReasonML is a pretty powerful and expressive language. If you are new to ReasonML and itching to build some type safe user interfaces, here are some resources to learn from:\n\n1. Many of the third party tools we use in JavaScript come out of the box with ReasonML. This [article by David Kopal explains how](https://medium.freecodecamp.org/psst-heres-why-reasonreact-is-the-best-way-to-write-react-5088d434d035?source=linkShare-2467058898a1-1543182271), along with some other reasons why writing ReasonML is so cool.\n2. [Jared Forsyth’s blog](https://jaredforsyth.com) has great content about ReasonML and OCaml. He is one of the most active contributors to the community.\n3. I get most of my learning done through the [ReasonML docs](reasonml.github.io) and the [BuckleScript docs](bucklescript.github.io). They are easy to follow and contain powerful insights on the design choices when implementing language features.\n\nIf you want to quickly set up your own GraphQL server then check out my other article, [Learn to Build a GraphQL Server with Minimal Effort](https://medium.freecodecamp.org/learn-to-build-a-graphql-server-with-minimal-effort-fc7fcabe8ebd).\n\nI hope to write more articles about ReasonML and GraphQL in the future. If these interest you then by all means follow me on [Medium](https://medium.com/@iwilsonq) and on [Twitter](https://twitter.com/iwilsonq)!\n\nThis article was originally published in [Open GraphQL on Medium](_https://medium.com/open-graphql/reasonml-with-graphql-the-future-of-type-safe-web-applications-65be2e8f34c8_).\n");

/***/ })

})
//# sourceMappingURL=blog.js.b01dda1434c161bbf427.hot-update.js.map