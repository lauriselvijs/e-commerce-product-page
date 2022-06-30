import { DefaultTheme } from "styled-components";
import { colors } from "./LightTheme.color";
import { font } from "./LightTheme.font";
import { typography } from "./LightTheme.typography";
import { media } from "./LightTheme.media";
import { themeId } from "../../../constants/LightTheme.const";

const LightTheme: DefaultTheme = {
  themeId,
  font,
  typography,
  colors,
  media,
};

export default LightTheme;
