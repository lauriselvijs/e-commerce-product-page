import { Helmet, HelmetProvider } from "react-helmet-async";

import { fontWeightObjToString } from "../../utils/Font.util";
import { FontProvider as IFontProvider } from "../../types/FontProvider";

const FontProvider = ({
  fontFamilyName,
  fontWeight,
  children,
}: IFontProvider) => {
  return (
    <HelmetProvider>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href={`https://fonts.googleapis.com/css2?family=${fontFamilyName.replace(
            /\s/g,
            "+"
          )}:wght@${fontWeightObjToString(fontWeight)}&display=swap`}
          rel="stylesheet"
        />
      </Helmet>
      {children}
    </HelmetProvider>
  );
};

export default FontProvider;
