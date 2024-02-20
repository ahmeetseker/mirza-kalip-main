import Head from "next/head";
import {
  View,
  Slider,
  Container,
  Title,
  Text,
  Image,
  Layout,
  Section,
  BreadCrumb,
  Grid,
  Link,
  Service,
  MenuServices,
  News,
} from "components";

import Phone from "../../../assets/icons/phone.svg";
import Mail from "../../../assets/icons/mail.svg";
import Location from "../../../assets/icons/location.svg";

const HizmetDetay = () => {
  return (
    <>
      <Head>
        <title>Model-5.10</title>
        <meta property="og:title" content="Model-5.10" />
        <meta
          name="description"
          content="Model-5.10 hakkında detaylı bilgi edinin. Medikal Kalıplar kategorisinde yer alan ürünümüz."
        />
        <meta
          property="og:description"
          content="Model-5.10 hakkında detaylı bilgi edinin. Medikal Kalıplar kategorisinde yer alan ürünümüz."
        />
        <meta
          property="og:url"
          content="https://mirzakalip.com/hizmetler/medikal-kaliplar/model-5.10"
        />
        <meta property="og:image" content="/medikalkaliplar/Model-5.10.jpg" />
      </Head>
      <Layout>
        <BreadCrumb>
          <Title fontSize="50px">Model-5.10</Title>
        </BreadCrumb>
        <Section>
          <Container>
            <Grid
              gridTemplateColumns={["1fr", "1fr", "1fr 300px"]}
              gridGap="40px"
            >
              <View>
                {/* <Slider
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                // itemClass="padding-10px"
                responsive={{
                  desktop: {
                    breakpoint: { max: 3000, min: 1024 },
                    items: 1,
                    slidesToSlide: 1,
                  },
                  tablet: {
                    breakpoint: { max: 1024, min: 464 },
                    items: 1,
                    slidesToSlide: 1,
                  },
                  mobile: {
                    breakpoint: { max: 464, min: 0 },
                    items: 1,
                    slidesToSlide: 1,
                  },
                }}
              >
                <Image
                  style={{ objectFit: "cover",width:"500px",height:"500px" }}
                  src="https://www.atakalip.com.tr/tema/genel/uploads/slider/FLASH-BANNER1.jpg"
                  alt="team"
                />

                <Image
                  style={{ objectFit: "cover" }}
                  src="https://www.atakalip.com.tr/tema/genel/uploads/slider/FLASH-BANNER1.jpg"
                  alt="team"
                />
              </Slider> */}
                <View>
                  <Title as="h4" fontSize="40px" mb="40px">
                    Model-5.10
                  </Title>
                  <Image
                    style={{ objectFit: "cover" }}
                    src="/medikalkaliplar/Model-5.10.jpg"
                    alt="team"
                  />
                </View>
              </View>
              <View>
                <View>
                  <View border="1px solid #dedede">
                    <View backgroundColor="gray" p="18px 24px">
                      <Title color="#fff" fontSize="24px" as="h3">
                        Hizmetlerimiz
                      </Title>
                    </View>
                    <View>
                      <MenuServices>
                        <MenuServices.Item href="/hizmetler/medikal-kaliplar">
                          Medikal Kalıplar
                        </MenuServices.Item>
                        <MenuServices.Item href="/hizmetler/mutfakaracgerecleri">
                          Mutfak Araç Gereçleri
                        </MenuServices.Item>
                      </MenuServices>
                    </View>
                  </View>

                  <View bg="#000" p="35px 25px 35px 25px" mt="40px">
                    <Title color="#fff">BİRLİKTE ÇALIŞALIM</Title>
                    <Text
                      color="#fff"
                      fontSize="13px"
                      lineHeight="1.6"
                      mt="10px"
                    >
                      Bizimle iletişime geçmekten kaçınmayın. Gün içerisinde
                      size geri döneceğiz. Ya da şimdi bizi arayın.
                    </Text>
                    <View>
                      <View
                        display="grid"
                        gridTemplateColumns="1fr"
                        gridRowGap="5px"
                        mt="30px"
                      >
                        <Link
                          href="tel:02126711188"
                          color="#fff"
                          display="flex"
                          alignItems="center"
                        >
                          <Text color="#fff" as="span" mr="7px">
                            <Phone />
                          </Text>
                          0212 671 11 88
                        </Link>
                        <Link
                          href="mailto:info@mirzakalip.com"
                          color="#fff"
                          display="flex"
                          alignItems="center"
                        >
                          <Text color="#fff" as="span" mr="7px">
                            <Mail />
                          </Text>
                          info@mirzakalip.com
                        </Link>
                        <Link
                          href="https://www.google.com/maps/place/M%C4%B0RZA+KALIP/@41.0608954,28.8186605,12.49z/data=!4m6!3m5!1s0x14caafca7f482d51:0xab206d4779a86fb!8m2!3d41.0848121!4d28.8023508!16s%2Fg%2F11q32y8w07?hl=en&entry=ttu"
                          color="#fff"
                          display="flex"
                          alignItems="center"
                        >
                          <Text color="#fff" as="span" mr="7px">
                            <Location />
                          </Text>
                          İKİTELLİ İOSB ESKOOP SANAYİ SİTESİ, C2 Blok NO :
                          78-80, 34490 İkitelli Osb/Başakşehir/İstanbul
                        </Link>
                      </View>
                    </View>
                  </View>

                  <Link
                    bg="#e0c47d"
                    py="14px"
                    display="block"
                    textAlign="center"
                    href="/iletisim"
                    color="#fff"
                    fontWeight="500"
                  >
                    ŞİMDİ BİZE ULAŞIN
                  </Link>
                </View>
              </View>
            </Grid>
          </Container>
        </Section>

        <Section bg="#f6f6f6">
          <View textAlign="center" mb="50px">
            <Title fontSize="40px">DİĞER HİZMETLERİMİZ</Title>
          </View>
          <Container p="0px !important;">
            <Slider
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass="container-with-dots"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              itemClass="padding-10px"
              // itemClass="padding-10px"
              responsive={{
                desktop: {
                  breakpoint: { max: 3000, min: 1024 },
                  items: 3,
                  slidesToSlide: 1,
                },
                tablet: {
                  breakpoint: { max: 1024, min: 464 },
                  items: 3,
                  slidesToSlide: 1,
                },
                mobile: {
                  breakpoint: { max: 464, min: 0 },
                  items: 1,
                  slidesToSlide: 1,
                },
              }}
            >
              <News>
                <News.Image src="/medikalkaliplar/Model-1.6.jpg" />
                <News.Date>Medikal Kalıplar</News.Date>
                <News.Content>
                  <Title as="h4" fontSize="18px">
                    Model-1.6
                  </Title>

                  <News.Link href="/hizmetler/medikal-kaliplar/model-1.6" />
                </News.Content>
              </News>
              <News>
                <News.Image src="/medikalkaliplar/Model-2.7.jpg" />
                <News.Date>Medikal Kalıplar</News.Date>
                <News.Content>
                  <Title as="h4" fontSize="18px">
                    Model-2.7
                  </Title>

                  <News.Link href="/hizmetler/medikal-kaliplar/model-2.7" />
                </News.Content>
              </News>
              <News>
                <News.Image src="/medikalkaliplar/Model-3.8.jpg" />
                <News.Date>Medikal Kalıplar</News.Date>
                <News.Content>
                  <Title as="h4" fontSize="18px">
                    Model-3.8
                  </Title>

                  <News.Link href="/hizmetler/medikal-kaliplar/model-3.8" />
                </News.Content>
              </News>
              <News>
                <News.Image src="/medikalkaliplar/Model-3.15.jpg" />
                <News.Date>Medikal Kalıplar</News.Date>
                <News.Content>
                  <Title as="h4" fontSize="18px">
                    Model-3.15
                  </Title>

                  <News.Link href="/hizmetler/medikal-kaliplar/model-3.15" />
                </News.Content>
              </News>
              <News>
                <News.Image src="/medikalkaliplar/Model-4.9.jpg" />
                <News.Date>Medikal Kalıplar</News.Date>
                <News.Content>
                  <Title as="h4" fontSize="18px">
                    Model-4.9
                  </Title>

                  <News.Link href="/hizmetler/medikal-kaliplar/model-4.9" />
                </News.Content>
              </News>
              <News>
                <News.Image src="/medikalkaliplar/Model-4.16.jpg" />
                <News.Date>Medikal Kalıplar</News.Date>
                <News.Content>
                  <Title as="h4" fontSize="18px">
                    Model-4.16
                  </Title>

                  <News.Link href="/hizmetler/medikal-kaliplar/model-4.16" />
                </News.Content>
              </News>

              <News>
                <News.Image src="/medikalkaliplar/Model-5.17.jpg" />
                <News.Date>Medikal Kalıplar</News.Date>
                <News.Content>
                  <Title as="h4" fontSize="18px">
                    Model-5.17
                  </Title>

                  <News.Link href="/hizmetler/medikal-kaliplar/model-5.17" />
                </News.Content>
              </News>
              <News>
                <News.Image src="/medikalkaliplar/Model-6.18.jpg" />
                <News.Date>Medikal Kalıplar</News.Date>
                <News.Content>
                  <Title as="h4" fontSize="18px">
                    Model-6.18
                  </Title>

                  <News.Link href="/hizmetler/medikal-kaliplar/model-6.18" />
                </News.Content>
              </News>
            </Slider>
          </Container>
        </Section>
      </Layout>
    </>
  );
};

export default HizmetDetay;
