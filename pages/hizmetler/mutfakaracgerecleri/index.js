import Head from "next/head";

import {
  Layout,
  Title,
  Container,
  Section,
  Grid,
  BreadCrumb,
  News,
} from "@/components";

const ServicePage = () => {
  return (
    <>
      <Head>
        <title>Mutfak Eşya ve Ev Gereçleri</title>
        <meta
          name="description"
          content="Mutfak eşya ve ev gereçleri koleksiyonumuzu keşfedin. Model-1.13, Model-2.14 ve daha fazlası."
        />
      </Head>
      <Layout>
        <BreadCrumb>
          <Title fontSize="50px">Mutfak Eşya ve Ev Gereçleri </Title>
        </BreadCrumb>

        <Section>
          <Container>
            <>
              <Grid
                gridTemplateColumns={["1fr", "1fr", "1fr 1fr 1fr"]}
                gridGap="50px"
              >
                <News>
                  <News.Image
                    src="/mutfakaracgerecleri/Model-1.13.jpg"
                    alt="Mutfak Eşya ve Ev Gereçleri - Model 1.13"
                  />
                  <News.Date>Mutfak Eşya ve Ev Gereçleri</News.Date>
                  <News.Content>
                    <Title as="h4" fontSize="18px">
                      Model-1.13
                    </Title>

                    <News.Link
                      href="/hizmetler/mutfakaracgerecleri/model-1.13"
                      title="Model 1.13 hakkında daha fazla bilgi"
                    />
                  </News.Content>
                </News>
                <News>
                  <News.Image
                    src="/mutfakaracgerecleri/Model-2.14.jpg"
                    alt="Mutfak Eşya ve Ev Gereçleri - Model 2.14"
                  />
                  <News.Date>Mutfak Eşya ve Ev Gereçleri</News.Date>
                  <News.Content>
                    <Title as="h4" fontSize="18px">
                      Model-2.14
                    </Title>

                    <News.Link
                      href="/hizmetler/mutfakaracgerecleri/model-2.14"
                      title="Model 2.14 hakkında daha fazla bilgi"
                    />
                  </News.Content>
                </News>
                <News>
                  <News.Image
                    src="/mutfakaracgerecleri/Model-7.19.jpg"
                    alt="Mutfak Eşya ve Ev Gereçleri - Model 7.19"
                  />
                  <News.Date>Mutfak Eşya ve Ev Gereçleri</News.Date>
                  <News.Content>
                    <Title as="h4" fontSize="18px">
                      Model-7.19
                    </Title>

                    <News.Link
                      title="Model 7.19 hakkında daha fazla bilgi"
                      href="/hizmetler/mutfakaracgerecleri/model-7.19"
                    />
                  </News.Content>
                </News>
                <News>
                  <News.Image
                    src="/mutfakaracgerecleri/Model-8.21.jpg"
                    alt="Mutfak Eşya ve Ev Gereçleri - Model 8.12"
                  />
                  <News.Date>Mutfak Eşya ve Ev Gereçleri</News.Date>
                  <News.Content>
                    <Title as="h4" fontSize="18px">
                      Model-8.21
                    </Title>

                    <News.Link
                      title="Model 8.21 hakkında daha fazla bilgi"
                      href="/hizmetler/mutfakaracgerecleri/model-8.21"
                    />
                  </News.Content>
                </News>
              </Grid>
            </>
          </Container>
        </Section>
      </Layout>
    </>
  );
};

export default ServicePage;
