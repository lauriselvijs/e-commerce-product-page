import { useTheme } from "../../hooks/Theme.hook";
import { SecondaryBtnStyle } from "../../styles/shared/Button.style";

const ThemeBtn = () => {
  const { setTheme } = useTheme();

  const onDarkThemeBtnClick = () => {
    setTheme("dark-theme");
  };

  return (
    <SecondaryBtnStyle
      style={{ backgroundColor: "yellow" }}
      aria-label="Change theme"
      onClick={onDarkThemeBtnClick}
    />
  );
};

export default ThemeBtn;
