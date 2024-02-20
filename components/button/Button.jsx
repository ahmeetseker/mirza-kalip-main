import styled from "styled-components";
import PropTypes from "prop-types";
import { variant, space, flexbox } from "styled-system";

const buttonVariants = ({ theme }) =>
  variant({
    variants: {
      primary: {
        color: "white",
        bg: theme.colors.primary,
      },
      secondary: {
        color: "white",
        bg: theme.colors.secondary,
      },
      outline: {
        color: "#000",
        bg: theme.colors.outline,
        border: "1px solid black",
      },
      square: {
        width: "50px",
        height: "50px",
        minWidth: "50px",
        padding: "0",
      },
    },
  });

const Button = styled.a`
  padding: 12px 35px;
  min-width: 220px;
  font-size: 18px;
  border: none;
  display: inline-flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: #e0c47d;
  color: #fff;
  position: relative;
  cursor: pointer;

  :after {
    content: "";
    background-color: #000;
    position: absolute;
    transform-origin: right center;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    margin: auto;
    transform: scaleX(0);
    transition: transform 0.3s cubic-bezier(0.37, 0.31, 0.2, 0.85);
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: left center;
  }
  &:hover span {
    z-index: 9999;
    position: inherit;
  }
  ${flexbox}
  ${space}
  ${buttonVariants}
`;

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]),
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

export default Button;
