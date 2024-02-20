import Head from "next/head";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Layout,
  View,
  Title,
  Container,
  Section,
  Grid,
  Image,
  Text,
  Service,
  News,
  Button,
  Input,
  Checkbox,
  Slider,
} from "@/components";
import { Tabs, Tab, Content } from "../components/tab/Tab";

export default function Home() {
  const [active, setActive] = useState(0);
  const [submitStatus, setSubmitStatus] = useState("");
  const handleClick = (e) => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      phone: "",
      sozlesme: false,
      message: "",
    },
  });
  const onSubmit = async (data) => {
    try {
      setSubmitStatus("LOADING");

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      setSubmitStatus(responseData.status);
      reset();
    } catch (error) {
      setSubmitStatus("ERROR");
    }
  };

  return (
    <>
      <Head>
        <title>Mirza Kalıp - Ana sayfa</title>
        <meta
          name="description"
          content="Mirza Kalıp, plastik enjeksiyon kalıpları ve ürünleri konusunda teknolojinin son gelişmelerini takip ederek robot ve otomasyon sistemlerine dayalı üretimi, tecrübeli kadrosu ve müşteri beklentilerine odaklı hizmet anlayışı ile faaliyetlerini sürdürmektedir."
        />
        <meta
          name="keywords"
          content="Mirza Kalıp, Plastik enjeksiyon kalıpları, Medikal Kalıplar, Mutfak Eşya Kalıpları, Plastik Kalıp Üretimi"
        />
        <meta
          property="og:title"
          content="Mirza Kalıp - Plastik Enjeksiyon Kalıpları"
        />
        <meta
          property="og:description"
          content="Mirza Kalıp, plastik enjeksiyon kalıpları ve ürünleri konusunda teknolojinin son gelişmelerini takip ederek robot ve otomasyon sistemlerine dayalı üretimi, tecrübeli kadrosu ve müşteri beklentilerine odaklı hizmet anlayışı ile faaliyetlerini sürdürmektedir."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://www.mirzakalip.com/" />
        <meta
          name="twitter:title"
          content="Mirza Kalıp - Plastik Enjeksiyon Kalıpları"
        />
        <meta
          name="twitter:description"
          content="Mirza Kalıp, plastik enjeksiyon kalıpları ve ürünleri konusunda teknolojinin son gelişmelerini takip ederek robot ve otomasyon sistemlerine dayalı üretimi, tecrübeli kadrosu ve müşteri beklentilerine odaklı hizmet anlayışı ile faaliyetlerini sürdürmektedir."
        />
        <meta name="twitter:image" content="/logo.png" />
      </Head>
      <Layout>
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
          <Image style={{ objectFit: "cover" }} src="/slider.jpg" alt="team" />
        </Slider> */}
        <Image style={{ objectFit: "cover" }} src="/slider.webp" alt="Slider Resmi" />

        <Section>
          <Container>
            <View
              textAlign="center"
              my="50px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Title as="h2" fontSize={["30px", "30px", "50px"]}>
                HİZMETLERİMİZ
              </Title>
              <View display={["none", "none", "block"]}>
                <Button href="/hizmetler" title="Tüm Hizmetleri Görüntüle">
                  <span>Tümünü Görüntüle</span>
                </Button>
              </View>
            </View>
            <Tabs>
              <Tab onClick={handleClick} active={active === 0} id={0}>
                Medikal Kalıplar
              </Tab>
              <Tab onClick={handleClick} active={active === 1} id={1}>
                Mutfak Eşya ve Ev Gereçleri
              </Tab>
            </Tabs>
            <Content active={active === 0}>
              <Grid
                gridTemplateColumns={["1fr", "1fr", "1fr 1fr 1fr"]}
                gridGap="50px"
              >
                <News>
                  <News.Image
                    src="/medikalkaliplar/Model-1.6.jpg"
                    alt="Model-1.6 Kalıp"
                  />
                  <News.Date>Medikal Kalıplar</News.Date>
                  <News.Content>
                    <Title as="h4" fontSize="18px">
                      Model-1.6
                    </Title>
                    <News.Link
                      href="/hizmetler/medikal-kaliplar/model-1.6"
                      title="Model-1.6 Detayları"
                    >
                      Detayları Görüntüle
                    </News.Link>
                  </News.Content>
                </News>
                <News>
                  <News.Image
                    src="/medikalkaliplar/Model-2.7.jpg"
                    alt="Model-2.7 Kalıp"
                  />
                  <News.Date>Medikal Kalıplar</News.Date>
                  <News.Content>
                    <Title as="h4" fontSize="18px">
                      Model-2.7
                    </Title>
                    <News.Link
                      href="/hizmetler/medikal-kaliplar/model-2.7"
                      title="Model-2.7 Detayları"
                    >
                      Detayları Görüntüle
                    </News.Link>
                  </News.Content>
                </News>
                <News>
                  <News.Image
                    src="/medikalkaliplar/Model-3.8.jpg"
                    alt="Model-3.8 Kalıp"
                  />
                  <News.Date>Medikal Kalıplar</News.Date>
                  <News.Content>
                    <Title as="h4" fontSize="18px">
                      Model-3.8
                    </Title>
                    <News.Link
                      href="/hizmetler/medikal-kaliplar/model-3.8"
                      title="Model-3.8 Detayları"
                    >
                      Detayları Görüntüle
                    </News.Link>
                  </News.Content>
                </News>
                <View display={["block", "block", "none"]} margin="0 auto">
                  <Button href="/hizmetler" title="Tüm Hizmetleri Görüntüle">
                    <span>Tümünü Görüntüle</span>
                  </Button>
                </View>
              </Grid>
            </Content>
            <Content active={active === 1}>
              <Grid
                gridTemplateColumns={["1fr", "1fr", "1fr 1fr 1fr"]}
                gridGap="50px"
              >
                <News>
                  <News.Image
                    src="/mutfakaracgerecleri/Model-1.13.jpg"
                    alt="Model-1.13 Kalıp"
                  />
                  <News.Date>Mutfak Eşya ve Ev Gereçleri</News.Date>
                  <News.Content>
                    <Title as="h4" fontSize="18px">
                      Model-1.13
                    </Title>
                    <News.Link
                      href="/hizmetler/mutfakaracgerecleri/model-1.13"
                      title="Model-1.13 Detayları"
                    >
                      Detayları Görüntüle
                    </News.Link>
                  </News.Content>
                </News>
                <News>
                  <News.Image
                    src="/mutfakaracgerecleri/Model-2.14.jpg"
                    alt="Model-2.14 Kalıp"
                  />
                  <News.Date>Mutfak Eşya ve Ev Gereçleri</News.Date>
                  <News.Content>
                    <Title as="h4" fontSize="18px">
                      Model-2.14
                    </Title>
                    <News.Link
                      href="/hizmetler/mutfakaracgerecleri/model-2.14"
                      title="Model-2.14 Detayları"
                    >
                      Detayları Görüntüle
                    </News.Link>
                  </News.Content>
                </News>
                <News>
                  <News.Image
                    src="/mutfakaracgerecleri/Model-7.19.jpg"
                    alt="Model-7.19 Kalıp"
                  />
                  <News.Date>Mutfak Eşya ve Ev Gereçleri</News.Date>
                  <News.Content>
                    <Title as="h4" fontSize="18px">
                      Model-7.19
                    </Title>
                    <News.Link
                      href="/hizmetler/mutfakaracgerecleri/model-7.19"
                      title="Model-7.19 Detayları"
                    >
                      Detayları Görüntüle
                    </News.Link>
                  </News.Content>
                </News>
                <View display={["block", "block", "none"]} margin="0 auto">
                  <Button title="Tüm Hizmetleri Görüntüle" href="/hizmetler">
                    <span>Tümünü Görüntüle</span>
                  </Button>
                </View>
              </Grid>
            </Content>
          </Container>
        </Section>

        <Section
          my="55px"
          style={{
            backgroundSize: "cover",
            backgroundImage:
              "linear-gradient(to right, #0000008f, #0000008f), url('/h4_carousel_1.jpg')",
          }}
        >
          <Container>
            <View
              display="grid"
              gridTemplateColumns={["1fr", "1fr", "500px 1fr"]}
              gridGap="100px"
              alignItems="center"
            >
              <View border="1px dotted #fff" borderRadius="100%" p="20px">
                <Image borderRadius="50%" src="/ss1.jpg" alt="image" />
              </View>
              <View>
                <Title
                  fontSize={["30px", "30px", "60px"]}
                  fontWeight="normal"
                  color="#fff"
                >
                  Mirza Kalıp{" "}
                </Title>
                <Text color="#fff" mt="20px">
                  2019 yılında İstanbul İkitelli Organize Sanayi Bölgesindeki
                  250 metrekarelik kapalı alandaki tesislerinde faaliyete
                  başlayan Mirza Kalıp SAN. VE TİC.LTD.STİ. alanında uzman
                  kadrosu ile dünyanın en tanınmış firmalarına hizmet eden bir
                  sanayi kuruluşudur.
                </Text>
                <Text color="#fff" my="30px">
                  Sürekli gelişen teknolojiyle birlikte kendisini yenileyen
                  firmamız, yeni yatırımları ile tamamen bilgisayar kontrollü
                  hat sayısını arttırmış ve üretim süreçlerini üst seviyelere
                  taşımıştır. Hizmet verdiği Mutfak eşyaları ve Medikal
                  sektörlerinde aranan tedarikçi konumuna gelmiştir.
                </Text>
                <Button href="/hakkimizda">
                  <span>Devam</span>
                </Button>
              </View>
            </View>
          </Container>
        </Section>

        <Section bg="#f6f6f6">
          <Container>
            <View textAlign="center" my="50px">
              <Title as="h2" fontSize={["30px", "30px", "50px"]}>
                MAKİNA PARKURU
              </Title>
            </View>
            <Grid
              gridTemplateColumns={["1fr", "1fr", "1fr 1fr 1fr"]}
              gridGap="50px"
            >
              <>
                <Service href="/">
                  <Service.Image src="/m1.webp" alt="WELE VQ 1060 Makina" />
                  <Service.Content>
                    <Title fontWeight="500" as="h3">
                      WELE VQ 1060
                    </Title>
                    <Text my="10px">
                      Açıklama veya detaylar buraya gelebilir.
                    </Text>
                  </Service.Content>
                </Service>
                <Service href="/">
                  <Service.Image src="m2.webp" alt="WELE AQ 1265 Makina" />
                  <Service.Content>
                    <Title fontWeight="500" as="h3">
                      WELE AQ 1265
                    </Title>
                    <Text my="10px">
                      Açıklama veya detaylar buraya gelebilir.
                    </Text>
                  </Service.Content>
                </Service>
                <Service href="/">
                  <Service.Image src="m3.webp" alt="TOS TORNA Makina" />
                  <Service.Content>
                    <Title fontWeight="500" as="h3">
                      TOS TORNA
                    </Title>
                    <Text my="10px">
                      Açıklama veya detaylar buraya gelebilir.
                    </Text>
                  </Service.Content>
                </Service>
                <Service href="/">
                  <Service.Image
                    src="m4.jpeg"
                    alt="GENTIGER SHCM-97VS Makina"
                  />
                  <Service.Content>
                    <Title fontWeight="500" as="h3">
                      GENTIGER SHCM-97VS
                    </Title>
                    <Text my="10px">
                      Açıklama veya detaylar buraya gelebilir.
                    </Text>
                  </Service.Content>
                </Service>
                <Service href="/">
                  <Service.Image src="m5.jpeg" alt="JOEMARS Makina" />
                  <Service.Content>
                    <Title fontWeight="500" as="h3">
                      JOEMARS
                    </Title>
                    <Text my="10px">
                      Açıklama veya detaylar buraya gelebilir.
                    </Text>
                  </Service.Content>
                </Service>
                <Service href="/">
                  <Service.Image
                    src="m6.jpeg"
                    alt="Equiptop ESG-1020TD Makina"
                  />
                  <Service.Content>
                    <Title fontWeight="500" as="h3">
                      Equiptop ESG-1020TD
                    </Title>
                    <Text my="10px">
                      Açıklama veya detaylar buraya gelebilir.
                    </Text>
                  </Service.Content>
                </Service>
              </>
            </Grid>
          </Container>
        </Section>

        <Section
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundImage="url(/ctac_bg.jpg)"
        >
          <Container>
            <Grid
              gridTemplateColumns={["1fr", "1fr", "600px 1fr"]}
              alignItems="center"
            >
              <View>
                <Title mb="20px" size={["md", "md", "lg"]} color="white">
                  Kahveye Bekleriz
                </Title>
                <Text color="white">
                  Projelerimiz hakkında daha detaylı bilgi sahibi olmanız adına,
                  sizi ofisimizde misafir etmekten mutluluk duyarız.
                </Text>
              </View>
              <View
                display="flex"
                my={["10px", "10px", "0"]}
                justifyContent={["flex-start", "flex-start", "flex-end"]}
              >
                <Button href="/iletisim">
                  <span>Bizimle İletişime Geçin</span>
                </Button>
              </View>
            </Grid>
          </Container>
        </Section>

        <Section bg="#f3f3f3">
          <Container>
            <View
              display="flex"
              flexDirection={["column", "column", "row"]}
              alignItems="center"
            >
              <View
                width={["100%", "100%", "45%"]}
                mr={["0px", "0px", "60px"]}
                border="5px solid #dedede"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.2759896866605!2d28.799775876125658!3d41.084816114708424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caafca7f482d51%3A0xab206d4779a86fb!2sM%C4%B0RZA%20KALIP!5e0!3m2!1sen!2str!4v1684768326698!5m2!1sen!2str"
                  style={{
                    width: "100%",
                    height: "600px",
                    allowfullscreen: "",
                    border: "none",
                    loading: "lazy",
                    referrerpolicy: "no-referrer-when-downgrade",
                  }}
                ></iframe>{" "}
              </View>
              <View
                width={["100%", "100%", "55%"]}
                my={["30px", "30px", "0px"]}
              >
                <View maxWidth={["100%", "100%", "450px"]}>
                  <Title size={["md", "md", "lg"]}>
                    Bizimle İletişime Geçin
                  </Title>
                  <Text m="20px 0 35px 0"></Text>
                </View>
                {submitStatus === "OK" ? (
                  <View>
                    <Text fontSize="18px">
                      Bize iletmiş olduğunuz mesajınız için teşekkür ederiz.
                      <br /> En kısa sürede sizinle iletişime geçeceğiz.
                      Mesajınızı değerlendirmemiz biraz zaman alabilir, ancak
                      mümkün olan en kısa sürede yanıt vermeye çalışacağız.
                    </Text>
                  </View>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid
                      display="grid"
                      gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
                      gridGap="30px"
                    >
                      <View>
                        <Controller
                          control={control}
                          name="name"
                          rules={{
                            required: {
                              value: true,
                              message: "Lütfen İsim alanını doldurunuz",
                            },
                          }}
                          render={({ field, fieldState: { error } }) => (
                            <Input
                              placeholder="Adınız"
                              error={error}
                              type="text"
                              {...field}
                            ></Input>
                          )}
                        />
                      </View>
                      <View>
                        <Controller
                          control={control}
                          name="surname"
                          rules={{
                            required: {
                              value: true,
                              message: "Lütfen Soyisim alanını doldurunuz",
                            },
                          }}
                          render={({ field, fieldState: { error } }) => (
                            <Input
                              placeholder="Soyadınız"
                              error={error}
                              type="text"
                              {...field}
                            ></Input>
                          )}
                        />
                      </View>
                      <View>
                        <Controller
                          control={control}
                          name="phone"
                          rules={{
                            required: {
                              value: true,
                              message: "Lütfen Telefon alanını doldurunuz",
                            },
                          }}
                          render={({ field, fieldState: { error } }) => (
                            <Input
                              placeholder="Telefon numaranız."
                              error={error}
                              type="tel"
                              {...field}
                            ></Input>
                          )}
                        />
                      </View>

                      <View>
                        <Controller
                          control={control}
                          name="email"
                          rules={{
                            required: {
                              value: true,
                              message: "Lütfen Email alanını doldurunuz",
                            },
                          }}
                          render={({ field, fieldState: { error } }) => (
                            <Input
                              placeholder="Email adresiniz"
                              error={error}
                              type="email"
                              {...field}
                            ></Input>
                          )}
                        />
                      </View>
                    </Grid>

                    <View my="30px">
                      <Controller
                        control={control}
                        name="message"
                        rules={{
                          required: {
                            value: true,
                            message: "Lütfen mesaj alanını doldurunuz",
                          },
                        }}
                        render={({ field, fieldState: { error } }) => (
                          <Input
                            placeholder="Mesajınız"
                            type="textarea"
                            pt="40px"
                            pb="120px"
                            {...field}
                          ></Input>
                        )}
                      />
                    </View>

                    <View mt="30px">
                      <Controller
                        control={control}
                        name="sozlesme"
                        rules={{
                          required: {
                            value: true,
                            message: "Lütfen Sözleşmeyi kabul ediniz",
                          },
                        }}
                        render={({ field, fieldState: { error } }) => (
                          <Checkbox
                            error={error}
                            type="email"
                            {...field}
                            id="checkbox"
                            label="İçerikleri almak için iletişim izni vermeyi kabul ediyorum."
                            value={!!field.value}
                            onChange={(event) => {
                              field.onChange(event.target.checked);
                            }}
                          />
                        )}
                      />
                    </View>

                    <View mt="30px">
                      <Button
                        as="button"
                        type="submit"
                        disabled={submitStatus === "LOADING"}
                      >
                        <span>Gönder</span>
                      </Button>
                    </View>
                  </form>
                )}
              </View>
            </View>
          </Container>
        </Section>
      </Layout>
    </>
  );
}
