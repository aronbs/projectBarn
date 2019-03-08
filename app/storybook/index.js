import { getStorybookUI, configure } from "@storybook/react-native";

import "./rn-addons";

// import stories
configure(() => {
  require("./stories");
}, module);

const StorybookUI = getStorybookUI({});

export default StorybookUI;
