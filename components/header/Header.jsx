import { useState, useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useLockedBody } from "@/hooks";

import {
  Sidebar,
  View,
  Link,
  Portal,
  Image,
  Button,
  ToggleButton,
  Text,
} from "@/components";

import Arrow from "../../assets/icons/arrow.svg";
import Hamburger from "../../assets/icons/hamburger.svg";
import Mail from "../../assets/icons/mail.svg";
import Phone from "../../assets/icons/phone.svg";

import { HamburgerMenu, HamburgerItem, HeadNav, NavLink } from "./HeaderStyled";

const Header = ({ ...props }) => {
  const router = useRouter();
  const url = router.pathname;

  const [navbar, setNavbar] = useState(false);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 11) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    const listener = window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", listener)
  });

  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const [, setLocked] = useLockedBody();

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const toggleSidebar = () => {
    setIsOpenSidebar((prev) => !prev);
  };

  useEffect(() => {
    setLocked(isOpen);
  }, [isOpen, setLocked]);

  return (
    <>
      <Portal mounted={isOpen}>
        <View
          position="sticky"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="overlay"
          zIndex="9"
        />
      </Portal>

      <Portal mounted={isOpenSidebar}>
        <Sidebar onClose={toggleSidebar} />
      </Portal>

      <View
        position={url === "/" ? ["static", "static", "fixed"] : "static"}
        background="transparent"
        className={navbar ? "navbar active" : "navbar"}
        ref={ref}
        color="#fff"
        as="header"
        px={{ default: 0, lg: 0 }}
        py={{ default: 0, lg: 0 }}
        width="100%"
        bg={
          isOpen || navbar || router.pathname === "/iletisim"
            ? "white"
            : "white"
        }
        zIndex={isOpen ? "foremost" : "header"}
        {...props}
      >
        <View
          bg="#1a191d"
          minHeight="50px"
          display={["none", "none", "flex"]}
          justifyContent="space-between"
          alignItems="center"
          px="10px"
        >
          <View display="flex" alignItems="center">
            <View
              height="5px"
              width="5px"
              backgroundColor="#e0c47d"
              marginRight="5px"
            />
            <Text fontSize="14px" color="#fff">
              Mirza Kalıp
            </Text>
          </View>
          <View display="flex" justifyContent="flex-end">
            <View
              display="grid"
              gridTemplateColumns="1fr 1fr"
              gridGap="15px"
            >
              <Link href="tel:02126711188" display="flex" justifyContent="flex-end">
                <View display="flex" alignItems="center">
                  <Phone />
                  <Text as="span" ml="7px" color="#fff" fontSize="14px">
                  0212 671 11 88
                  </Text>
                </View>
              </Link>
              <Link
                href="mailto:info@mirzakalip.com"
                display="flex"
                justifyContent="flex-end"
              >
                <View display="flex" alignItems="center">
                  <Mail />
                  <Text as="span" ml="7px" color="#fff" fontSize="14px">
                  info@mirzakalip.com
                  </Text>
                </View>
              </Link>
              {/* <Link href="tel:111111" display="flex" justifyContent="flex-end">
                <View display="flex" alignItems="center">
                  <Location />
                  <Text as="span" ml="7px" color="#bbb" fontSize="14px">
                    yakuplu sadasdsa
                  </Text>
                </View>
              </Link> */}
            </View>
          </View>
        </View>
        <View
          height="80px"
          display="flex"
          justifyContent="space-between"
          borderBottom="1px solid #e0c47d"
          backgroundColor={url === "/" ? "rgba(0,0,0,.5)" : "black"}
        >
          <View display="flex" alignItems="center">
            <Link
              display="flex"
              justifyContent="center"
              alignItems="center"
              height={["70%", "70%", "100%"]}
              objectFit="cover"
              href="/"
            >
              {/* <Logo /> */}
              <Image src="/logo.png" objectFit="contain" alt="logo" />
            </Link>
            <HeadNav className={isOpen ? "active" : ""}>
              <NavLink href="/">Anasayfa</NavLink>
              <NavLink href="/hakkimizda">Hakkımızda</NavLink>
              {/* <NavLink href="/ekibimiz">Ekibimiz</NavLink> */}
              <NavLink href="/hizmetler">Hizmetler</NavLink>
              {/* <NavLink href="/galeri">Fotoğraflar</NavLink> */}
              {/* <NavLink href="/galeri/videolar">Videolar</NavLink> */}
              <NavLink href="/iletisim">İletişim</NavLink>
            </HeadNav>{" "}
          </View>
          <View display="flex" height="100%" alignItems="center">
            {/* <View paddingRight="20px" borderRight="1px solid white">
              <select
                style={{
                  appearance: "none",
                  outline: "0",
                  border: "0",
                  boxShadow: "none",
                  flex: "1",
                  padding: "17px",
                  color: "#fff",
                  backgroundColor: "#d0d0d0",
                  backgroundImage: "none",
                  cursor: "pointer",
                }}
              >
                <option value="en">EN</option>
                <option value="tr">TR</option>
              </select>
            </View> */}
            <Button href="/iletisim" marginLeft="20px" variant="square">
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Arrow />
              </span>
            </Button>
            <View
              display={["none", "none", "flex"]}
              alignItems="center"
              justifyContent="center"
              height="100%"
              width="80px"
              marginLeft="20px"
              backgroundColor="#fff"
            >
              <ToggleButton onClick={toggleSidebar}>
                <Hamburger />
              </ToggleButton>
            </View>
          </View>
          <View
            display={["flex", "flex", "none"]}
            alignItems="center"
            justifyContent="center"
            height="100%"
            width="80px"
            marginLeft="20px"
            backgroundColor="#fff"
          >
            <HamburgerMenu
              aria-label="Menü"
              isOpen={isOpen}
              onClick={toggleMenu}
            >
              <HamburgerItem />
              <HamburgerItem />
              <HamburgerItem />
            </HamburgerMenu>
          </View>
        </View>
      </View>
    </>
  );
};

Header.defaultProps = {};

Header.propTypes = {};

export default Header;
