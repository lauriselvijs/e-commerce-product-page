import { useTheme } from "../../hooks/Theme.hook";
import { Theme } from "../../types/styles/Theme.style";
import { ThemeBtnStyle } from "./ThemeBtn.style";

const ThemeBtn = ({ name, color: { primary } }: Theme) => {
  const { setTheme, clearTheme } = useTheme();

  const onDarkThemeBtnClick = () => {
    name ? setTheme(name) : clearTheme();
  };

  return (
    <ThemeBtnStyle
      bgColor={primary}
      aria-label="Change theme"
      onClick={onDarkThemeBtnClick}
    />
  );
};

export default ThemeBtn;
