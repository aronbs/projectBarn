/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { AppRegistry } from "react-native";
import App from "./App";
import StorybookUI from "./app/storybook/index";
import { name as appName } from "./app.json";

const displayApp = __DEV__ ? StorybookUI : App;

AppRegistry.registerComponent(appName, () => App);
