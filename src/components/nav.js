import React from "react";
import { Link } from "react-router-dom";
import IcoSlogo from "../assets/Icons/Ico_slogo";
import IcoUser from "../assets/Icons/Ico_user";
import IcoMenu from "../assets/Icons/Ico_menu";
import { fadeinTop } from "../Styles/keyframes";
import Flex from "../Styles/styledComponent/Flex";
import Text from "../Styles/styledComponent/Text";

function Nav() {
  return (
    <Flex
      align="center"
      justify="between"
      css={{
        width: "100%",
        paddingTop: "$2",
        "& svg": {
          fill: "$onBg",
        },
        "& svg[id=menu]": {
          display: "none",
          cursor: "pointer",
          fill: "$onBg800",
          "&:hover": {
            fill: "$onBg",
          },
        },
        "@bp2": {
          "& svg[id=menu]": {
            display: "block",
          },
        },
        animation: fadeinTop + " 1s ",
      }}
    >
      <Flex align="center" cursor="pointer">
        <IcoSlogo width="35" height="35" />
        <Text cursor="click" css={{ headline4_i: "600", marginLeft: "15px" }}>
          <Link to="/">Helping Hands</Link>
        </Text>
      </Flex>
      <Flex justify="end" align="center" css={{ "@bp2": { display: "none" } }}>
        <Flex
          css={{
            "& p": {
              headline6: "700",
              cursor: "pointer ",
              padding: "0 $3",
              color: "$onBg800",
              "&:hover": { color: "$onBg" },
            },
            marginRight: "$6",
            "@bp2": { marginRight: "$3" },
          }}
        >
          <Link to="/volunteer">
            <Text>Volunteer</Text>
          </Link>
          <Link to="/testimonials">
            <Text>Testimonials</Text>
          </Link>
          <Link to="/about">
            <Text>About</Text>
          </Link>
          <Link to="/register">
            <Text>Sign Up</Text>
          </Link>
          <Link to="/signin">
            <Text>Sign In</Text>
          </Link>
        </Flex>
        <Flex
          justify="around"
          align="center"
          css={{
            "& svg": {
              cursor: "pointer",
              "&:hover": { transform: "scale(1.1)" },
            },
            "& svg[id=userSvg]": {
              backgroundColor: "$primary600",
              fill: "$onPrimary",
              borderRadius: "$50",
              padding: "4px",
              "&:hover": { backgroundColor: "$primary" },
            },
          }}
        >
          <IcoUser width="35" height="35" id="userSvg" />
        </Flex>
      </Flex>
      <IcoMenu width="32" height="32" id="menu" />
    </Flex>
  );
}

export default Nav;
