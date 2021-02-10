# Movie Search

## Setup

In the project directory, you can run:

> `npm install`

To install all the dependencies of the project. Then:

> `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

> `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

> `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Considerations

I decided to implement the redux and the redux-saga just to show off a bit of my skills. Normally I would use no state manager on such a small project (if I really need to share states I'd probably choose the ContextAPI, again because is a small project). Also for show some saga skills I've created an alert system, useful to send alerts for the user in replacement of the traditional JS alert function.

### Project Structure:

The project structure on the src/ folder goes like this:

- assets/
All the midia files, like images, audio and videos, goes here

- components/
Here you find components made using the smaller components found on UI/ folder. Components here normally doesn't have any bussiness logic, they only have some interface logic. Usually I separete my components in three folders, UI/ for smalls components, components/ for big components with some iterface logic and pages/ for bigger components with lots of bussiness logic.

- pages/
As metion before, in this folder I store my bigger and complicated components. This components will reflect direct into the routing, representing one route each. This components have the bussiness logic, and are responsable for wrapping the smaller components, fetch data, dispatch redux actions and so on.

- services/
Here I put my HTTPS related functions. It's a good way to separete the logic, so I can test this functions individually, and also makes easier to reuse this functions and change api parameters in the future.

- store/
This folder holds the state manager. If I decided to use redux then it'll have a index file, where i built the store itself and a reducers folder with all the reducers, actions, types and saga files inside, also a rootReducer file, and a rootSaga file.

- styles/
In this folder I set up a GlobalStyles file, where I put all my shared style settings.

- UI/
Here you can find the smallest components of the application. Normally the are highly reusables, and are all inside a index file (if needed it can be splited into small files) using only styled-components.

### Libraries:


>[Axios](https://github.com/axios/axios)

- To make my requests easier and faster.


>[react-redux](https://react-redux.js.org/)

- My choice of state manager. Good for medium to big apps, I've decided to use on this particular application just to show some skills.


>[redux-saga](https://redux-saga.js.org/)

- Also used just to show off, make hard asynchronous flows easier to use and more readable.


>[react-router-dom](https://reactrouter.com/web/guides/quick-start)

- Easy, big and well documented, I always go with this library to manage my routing on react.


>[react-stars](https://www.npmjs.com/package/react-stars)

- I've decided to use this because creating stars with CSS is really a painfull job (could be easy if you are kind of a photoshop pro or something, but since I don't). It's super simple to use, and have a well enough documentation, so I decided to go with it.


>[redux-persist](https://github.com/rt2zz/redux-persist)

- Largely used library, just to preserve the redux state on some refresh.

>[styled-components](https://styled-components.com/)

- JS-in-CSS, once you use it, you'll probably get addicted to it. It's has amazing powers, and make interface effects and transitions so much easy. Also I go with the [styled-icons](https://styled-icons.js.org/), for any icon that I may need.