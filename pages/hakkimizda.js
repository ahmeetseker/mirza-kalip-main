import Head from "next/head";
import {
  Layout,
  Section,
  BreadCrumb,
  Title,
  Container,
  View,
  Image,
  Text,
} from "components";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Mirza Kalıp - Plastik Enjeksiyon Kalıpları</title>
        <meta
          name="description"
          content="Mirza Kalıp, 2019 yılında İstanbul İkitelli Organize Sanayi Bölgesinde faaliyete başlayan plastik enjeksiyon kalıpları ve ürünleri üreten bir firmadır. Kalite, teknoloji ve müşteri memnuniyetine odaklanarak hizmet veriyoruz."
        />
      </Head>
      <Layout>
        <BreadCrumb>
          <Title fontSize="50px">HAKKIMIZDA</Title>
        </BreadCrumb>
        <Section
          my="55px"
          style={{
            backgroundSize: "cover",
          }}
        >
          <Container>
            <View
              display="grid"
              gridTemplateColumns={["1fr", "1fr", "500px 1fr"]}
              gridGap={["30px", "30px", "100px"]}
              alignItems="center"
            >
              <View border="1px dotted #000" borderRadius="100%" p="20px">
                <Image
                  borderRadius="50%"
                  src="/ss1.jpg"
                  alt="Mirza Kalıp Logo"
                />
              </View>
              <View>
                <Title
                  fontSize={["30px", "30px", "60px"]}
                  fontWeight="normal"
                  color="#000"
                >
                  Mirza Kalıp
                </Title>
                <Text color="#000" mt="25px">
                  2019 yılında İstanbul İkitelli Organize Sanayi Bölgesindeki
                  250 metrekaralik kapalı alandaki tesislerinde faaliyete
                  başlayan Mirza Kalıp SAN. VE TİC.LTD.STİ. alanında uzman
                  kadrosu ile dünyanın en tanınmış firmalarına hizmet eden bir
                  sanayi kuruluşudur.
                </Text>
                <Text color="#000" my="25px">
                  Sürekli gelişen teknolojiyle birlikte kendisini yenileyen
                  firmamız, yeni yatırımları ile tamamen bilgisayar kontrollü
                  hat sayısını arttırmış ve üretim süreçlerini üst seviyelere
                  taşımıştır. Hizmet verdiği Mutfak eşyaları ve Medikal
                  sektörlerinde aranan tedarikçi konumuna gelmiştir.
                </Text>
                <Text color="#000">
                  Plastik enjeksiyon kalıpları ve ürünleri konusunda
                  teknolojinin son gelişmelerini takip ederek robot ve otomasyon
                  sistemlerine dayalı üretimi, tecrübeli kadrosu ve müşteri
                  beklentilerine odaklı hizmet anlayışı ile faaliyetlerini
                  sürdürmektedir.
                </Text>
                <Text color="#000" my="25px">
                  Firmamız bünyesinde 100 kg ile 5000 kg arasındaki Plastik
                  Enjeksiyon Kalıpları zamanında ve kaliteli bir şekilde
                  üreterek sizlere hizmet vermeye devam etmekteyiz.
                </Text>
                <Text color="#000">
                  Kalitemizden ödün vermeden, müşterilerimizin taleplerine en
                  uygun kalıbı mümkün olan en kısa sürede imal etmektir. Plastik
                  kalıp sektöründe aranan tedarikçi olma, plastik kalıp
                  sektöründe söz sahibi ve güçlü bir yer edinmek.
                </Text>
              </View>
            </View>
          </Container>
        </Section>
      </Layout>
    </>
  );
};

export default AboutPage;
