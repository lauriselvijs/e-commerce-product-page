import { FooterStyle } from "./Footer.style";

const Footer = () => {
  return (
    <FooterStyle>
      <div>
        {" "}
        Challenge by &nbsp;
        <a
          rel="noreferrer"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          {" "}
          Frontend Mentor
        </a>
        .
      </div>
      <div>
        {" "}
        Coded by &nbsp;
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/lauriselvijs/"
        >
          Lauris
        </a>
        .
      </div>
    </FooterStyle>
  );
};

export default Footer;
