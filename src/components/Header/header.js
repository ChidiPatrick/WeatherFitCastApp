// import React, { Children } from "react";
import styled from "styled-components";
const Header = (props) => {
  const { children, className, weatherData } = props;
  return <header className={className}>{children}</header>;
};

export default Header;
