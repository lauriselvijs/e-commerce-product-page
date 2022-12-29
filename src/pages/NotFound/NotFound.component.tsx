import {
  NOT_FOUND_ERROR_CODE,
  NOT_FOUND_POSTFIX_MSG,
  NOT_FOUND_PREFIX_MSG,
} from "../../constants/NotFound.const";
import {
  NotFoundContainerStyle,
  NotFoundTextStyle,
  NotFoundUrlStyle,
} from "./NotFound.style";

const NotFound = () => {
  return (
    <NotFoundContainerStyle>
      <NotFoundTextStyle>
        {NOT_FOUND_ERROR_CODE} {NOT_FOUND_PREFIX_MSG}{" "}
        <NotFoundUrlStyle href={window.location.pathname}>
          {window.location.pathname}
        </NotFoundUrlStyle>{" "}
        {NOT_FOUND_POSTFIX_MSG}
      </NotFoundTextStyle>
    </NotFoundContainerStyle>
  );
};

export default NotFound;
