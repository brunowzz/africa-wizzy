import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.svg";

import InfoContact from "../InfoContact";

import * as S from "./style";

export default function Header() {
  const { pathname } = useLocation();

  return (
    <S.ContainerHeader>
      <S.ContainerSocialLinks>
        <InfoContact />
      </S.ContainerSocialLinks>

      <S.ContainerNavigationLinks>
        <figure>
          <Link to="/">
            <S.Img src={Logo} alt="logo" />
          </Link>
        </figure>

        <S.NavigationLinks>
          <Link className={pathname === "/" ? "isHere" : ""} to="/">
            Home
          </Link>
          <Link className={pathname === "/about" ? "isHere" : ""} to="/about">
            About
          </Link>
          <Link
            className={pathname === "/tour-package" ? "isHere" : ""}
            to="/tour-package"
          >
            Tour package
          </Link>
          <Link
            className={pathname === "/gallery" ? "isHere" : ""}
            to="/gallery"
          >
            Gallery
          </Link>
          <Link
            className={pathname === "/contact-us" ? "isHere" : ""}
            to="/contact-us"
          >
            Contact us
          </Link>
        </S.NavigationLinks>
      </S.ContainerNavigationLinks>
    </S.ContainerHeader>
  );
}
