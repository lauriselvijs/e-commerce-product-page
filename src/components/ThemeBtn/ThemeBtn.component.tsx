import { useTheme } from "../../hooks/Theme.hook";
import { theme } from "../../types/styles/Theme.style";
import { ThemeBtnBtnStyle } from "./ThemeBtn.style";

const ThemeBtn = ({ theme: { name, primary } }: theme) => {
  const { setTheme } = useTheme();

  const onDarkThemeBtnClick = () => {
    setTheme(name);
  };

  return (
    <ThemeBtnBtnStyle aria-label="Change theme" onClick={onDarkThemeBtnClick} />
  );
};

export default ThemeBtn;
