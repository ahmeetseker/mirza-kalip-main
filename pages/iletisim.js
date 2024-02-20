import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import Head from "next/head";

import {
  Layout,
  View,
  Title,
  Container,
  Section,
  Grid,
  Link,
  Text,
  Button,
  Input,
  Checkbox,
  SocialBox,
  BreadCrumb,
} from "@/components";

import Location1 from "../assets/icons/location1.svg";
import PhoneEmail from "../assets/icons/phone-email.svg";
import Working from "../assets/icons/working.svg";
import Facebook from "../assets/icons/facebook.svg";
import Instagram from "../assets/icons/instagram.svg";
import Twitter from "../assets/icons/twitter.svg";
import Youtube from "../assets/icons/youtube.svg";

const ContactPage = () => {
  const [submitStatus, setSubmitStatus] = useState("");

  const { handleSubmit, control, watch, reset } = useForm({
    defaultValues: {
      ad: "",
      soyad: "",
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
        <title>İletişim - Mirza Kalıp</title>
        <meta
          name="description"
          content="Mirza Kalıp ile iletişime geçin. Adres, telefon, email bilgileri ve çalışma saatleri. Sorularınızı yanıtlamaktan mutluluk duyarız."
        />
        <meta property="og:title" content="İletişim - Mirza Kalıp" />
        <meta
          property="og:description"
          content="Mirza Kalıp ile iletişime geçin. Adres, telefon, email bilgileri ve çalışma saatleri. Sorularınızı yanıtlamaktan mutluluk duyarız."
        />
      </Head>
      <Layout>
        <BreadCrumb>
          <Title fontSize="50px">İLETİŞİM</Title>
        </BreadCrumb>

        <Section>
          <Container>
            <Grid
              gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
              gridGap={["10px", "10px", "100px"]}
            >
              <View width={["100%", "100%", "100%%"]}>
                <View maxWidth={["100%", "100%", "100%"]} mt="100px">
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
              <View
                bg="black"
                p={[
                  "30px 15px 30px 15px",
                  "30px 15px 30px 15px",
                  "100px 70px 100px 70px",
                ]}
              >
                <View>
                  <Title color="#fff" fontSize="40px" mb="10px">
                    İLETİŞİM BİLGİLERİMİZ
                  </Title>
                  <Text mt="2px" color="#fff">
                    Bizi arayın veya istediğiniz zaman uğrayın, tüm soruları iş
                    günlerinde 24 saat içinde yanıtlamaya çalışıyoruz.
                    Sorularınızı yanıtlamaktan mutluluk duyacağız.
                  </Text>
                </View>
                <View mt="40px">
                  <View display="flex" alignItems="center">
                    <Location1 fill="white" />
                    <View ml="25px">
                      <Title color="#fff">ADRES</Title>
                      <Text mt="2px" color="#fff">
                        İKİTELLİ İOSB ESKOOP SANAYİ SİTESİ, C2 Blok NO : 78-80,
                        34490 İkitelli Osb/Başakşehir/İstanbul
                      </Text>
                    </View>
                  </View>
                  <View my="40px" display="flex" alignItems="center">
                    <PhoneEmail fill="white" />
                    <View ml="25px">
                      <Title color="#fff">EMAİL VE TELEFON</Title>
                      <View mt="2px">
                        <Link color="#fff" href="mailto:info@mirzakalip.com">
                          info@mirzakalip.com
                        </Link>
                        <Link ml="10px" color="#fff" href="tel:02126711188">
                          0212 671 11 88
                        </Link>
                      </View>
                    </View>
                  </View>
                  <View display="flex" alignItems="center">
                    <Working fill="white" />
                    <View ml="25px">
                      <Title color="#fff">ÇALIŞMA SAATLERİ</Title>
                      <Text color="#fff" size="xs">
                        Pazartesi - Cuma (08:30 - 18:30) <br />
                        C.Tesi-Pazar: Kapalı
                      </Text>
                    </View>
                  </View>

                  <View
                    display="flex"
                    gridGap="20px"
                    alignItems="center"
                    mt="50px"
                  >
                    <SocialBox>
                      <SocialBox.Item>
                        <Facebook />
                      </SocialBox.Item>
                      <SocialBox.Item>
                        <Youtube />
                      </SocialBox.Item>
                      <SocialBox.Item>
                        <Instagram />
                      </SocialBox.Item>
                      <SocialBox.Item>
                        <Twitter />
                      </SocialBox.Item>
                    </SocialBox>
                  </View>
                </View>
              </View>
            </Grid>
          </Container>
        </Section>

        <Section>
          <Container>
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
            ></iframe>
          </Container>
        </Section>
      </Layout>
    </>
  );
};

export default ContactPage;
