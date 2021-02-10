import { combineReducers } from "redux";

import global from "./global/index";

export default () =>
  combineReducers({
    globalState: global,
  });
