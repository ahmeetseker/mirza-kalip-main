import { useRef, useState } from "react";

import { useForm, Controller } from "react-hook-form";

import {
  Container,
  View,
  Link,
  Checkbox,
  Grid,
  Title,
  Section,
  Input,
  Button,
  Image,
  SocialBox,
  Text,
} from "@/components";

import Facebook from "../../assets/icons/facebook.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Youtube from "../../assets/icons/youtube.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Location from "../../assets/icons/location.svg";
import Phone from "../../assets/icons/phone.svg";
import Mail from "../../assets/icons/mail.svg";

import { FooterWrapper } from "./FooterStyled";

const Footer = () => {
  return (
    <FooterWrapper
      as="footer"
      id="footer"
      borderTop="2px solid rgba(0, 0, 0, .1)"
    >
      <Section py="80px" backgroundColor="#1A191D">
        <Container>
          <Grid gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}>
            <View maxWidth={["100%", "100%", "300px"]}>
              <Link href="/" mr="40px">
                {/* <Logo /> */}
                <Image src="/logo.png" width="170px" alt="logo" />
              </Link>
              <Text mt="20px" mb="40px">
               
              </Text>
              <SocialBox>
                <SocialBox.Item href="/">
                  <Facebook />
                </SocialBox.Item>
                <SocialBox.Item href="/"> 
                  <Youtube />
                </SocialBox.Item>
                <SocialBox.Item href="/">
                  <Instagram />
                </SocialBox.Item>
                <SocialBox.Item href="/">
                  <Twitter />
                </SocialBox.Item>
              </SocialBox>
            </View>
            <View
              display="flex"
              flexDirection={["column", "column", "row"]}
              my={["30px", "30px", "0px"]}
            >
              <View width={["100%", "100%", "50%"]}>
                <Title as="h4" size="sm" mb="20px">
                  Menü
                </Title>
                <View
                  display="grid"
                  gridTemplateColumns="1fr"
                  gridRowGap="10px"
                >
                  <Link href="/">ANASAYFA</Link>
                  <Link href="/hakkimizda">HAKKIMIZDA</Link>
                  <Link href="/hizmetler">HİZMETLER</Link>

                  {/* <Link href="/ekibimiz">EKİBİMİZ</Link> */}
                  {/* <Link href="/galeri">FOTORAFLAR</Link> */}
                  {/* <Link href="/galeri/videolar">VİDEOLAR</Link> */}
                  <Link href="/iletisim">İLETİŞİM</Link>
                  <Link href="/gizlilik-politikasi">GİZLİLİK POLİTİKASI</Link>
                </View>
              </View>
              <View width={["100%", "100%", "50%"]}>
                <Title as="h4" size="sm" mb="20px" mt={["50px", "50px", "0px"]}>
                  İletişim Bilgilerimiz
                </Title>
                <View
                  display="grid"
                  gridTemplateColumns="1fr"
                  gridRowGap="10px"
                >
                  <Link href="tel:02126711188" display="flex" alignItems="center">
                    <Text as="span" mr="7px">
                      <Phone />
                    </Text>
                    0212 671 11 88
                  </Link>
                  <Link
                    href="mailto:info@mirzakalip.com"
                    display="flex"
                    alignItems="center"
                  >
                    <Text as="span" mr="7px">
                      <Mail />
                    </Text>
                    info@mirzakalip.com
                  </Link>
                  <Link href="https://www.google.com/maps/place/M%C4%B0RZA+KALIP/@41.0608954,28.8186605,12.49z/data=!4m6!3m5!1s0x14caafca7f482d51:0xab206d4779a86fb!8m2!3d41.0848121!4d28.8023508!16s%2Fg%2F11q32y8w07?hl=en&entry=ttu" display="flex" alignItems="center">
                    <Text as="span" mr="7px">
                      <Location />
                    </Text>
                    İKİTELLİ İOSB ESKOOP SANAYİ SİTESİ, C2 Blok NO : 78-80, 34490 İkitelli Osb/Başakşehir/İstanbul
                  </Link>
                </View>
              </View>
            </View>
          </Grid>
        </Container>
      </Section>
      <Container>
        <View
          my="30px"
          display="flex"
          flexDirection={["column", "column", "row"]}
          justifyContent={["center", "center", "space-between"]}
        >
          <View>2023 ©Mirza Kalıp - Tüm Hakları Saklıdır </View>

          <View fontWeight="bold">
            Created by
            <Link
              color="red !important"
              href="https://www.orjinfinity.com/"
            >
              {" "}
              Orjinfinity
            </Link>
          </View>
        </View>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
