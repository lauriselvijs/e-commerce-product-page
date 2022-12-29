import { useTheme } from "../../hooks/Theme.hook";
import { ThemeBtnStyle } from "./ThemeBtn.style";
import { themes } from "../../styles/theme";
import { keys } from "../../utils/Object.util";

const ThemeBtn = () => {
  const { setTheme, clearTheme } = useTheme();

  const renderThemeBtn = keys(themes).map((theme) => {
    const {
      name,
      color: { primary },
    } = themes[theme];

    const onDarkThemeBtnClick = () => {
      name ? setTheme(name) : clearTheme();
    };

    return (
      <ThemeBtnStyle
        key={name}
        bgColor={primary}
        aria-label="Change theme"
        onClick={onDarkThemeBtnClick}
      />
    );
  });

  return <>{renderThemeBtn}</>;
};

export default ThemeBtn;
