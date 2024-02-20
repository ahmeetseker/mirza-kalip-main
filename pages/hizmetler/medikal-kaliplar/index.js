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
        <title>Medikal Kalıplar</title>
        <meta
          name="description"
          content="Medikal Kalıplarımızı keşfedin - Model 1.6, 2.7, 3.8 ve daha fazlası."
        />
      </Head>
      <Layout>
        <BreadCrumb>
          <Title fontSize="50px">Medikal Kalıplar </Title>
        </BreadCrumb>

        <Section>
          <Container>
            <article>
              <Grid
                gridTemplateColumns={["1fr", "1fr", "1fr 1fr 1fr"]}
                gridGap="50px"
              >
                <News>
                  <News.Image
                    src="/medikalkaliplar/Model-1.6.jpg"
                    alt="Medikal Kalıplar - Model 1.6"
                  />
                  <News.Date>Medikal Kalıplar</News.Date>
                  <News.Content>
                    <Title as="h4" fontSize="18px">
                      Model-1.6
                    </Title>

                    <News.Link
                      title="Model 1.16 hakkında daha fazla bilgi"
                      href="/hizmetler/medikal-kaliplar/model-1.6"
                    />
                  </News.Content>
                </News>
                <News>
                  <News.Image
                    src="/medikalkaliplar/Model-2.7.jpg"
                    alt="Medikal Kalıplar - Model 2.7"
                  />
                  <News.Date>Medikal Kalıplar</News.Date>
                  <News.Content>
                    <Title as="h4" fontSize="18px">
                      Model-2.7
                    </Title>

                    <News.Link
                      title="Model 2.7 hakkında daha fazla bilgi"
                      href="/hizmetler/medikal-kaliplar/model-2.7"
                    />
                  </News.Content>
                </News>
                <News>
                  <News.Image
                    src="/medikalkaliplar/Model-3.8.jpg"
                    alt="Medikal Kalıplar - Model 3.8"
                  />
                  <News.Date>Medikal Kalıplar</News.Date>
                  <News.Content>
                    <Title as="h4" fontSize="18px">
                      Model-3.8
                    </Title>

                    <News.Link
                      title="Model 3.8 hakkında daha fazla bilgi"
                      href="/hizmetler/medikal-kaliplar/model-3.8"
                    />
                  </News.Content>
                </News>
                <News>
                  <News.Image
                    src="/medikalkaliplar/Model-3.15.jpg"
                    alt="Medikal Kalıplar - Model 3.15"
                  />
                  <News.Date>Medikal Kalıplar</News.Date>
                  <News.Content>
                    <Title as="h4" fontSize="18px">
                      Model-3.15
                    </Title>

                    <News.Link
                      title="Model 3.15 hakkında daha fazla bilgi"
                      href="/hizmetler/medikal-kaliplar/model-3.15"
                    />
                  </News.Content>
                </News>
                <News>
                  <News.Image
                    src="/medikalkaliplar/Model-4.9.jpg"
                    alt="Medikal Kalıplar - Model 4.9"
                  />
                  <News.Date>Medikal Kalıplar</News.Date>
                  <News.Content>
                    <Title as="h4" fontSize="18px">
                      Model-4.9
                    </Title>

                    <News.Link href="/hizmetler/medikal-kaliplar/model-4.9" />
                  </News.Content>
                </News>
                <News>
                  <News.Image
                    src="/medikalkaliplar/Model-4.16.jpg"
                    alt="Medikal Kalıplar - Model 4.16"
                  />
                  <News.Date>Medikal Kalıplar</News.Date>
                  <News.Content>
                    <Title as="h4" fontSize="18px">
                      Model-4.16
                    </Title>

                    <News.Link
                      title="Model 4.16 hakkında daha fazla bilgi"
                      href="/hizmetler/medikal-kaliplar/model-4.16"
                    />
                  </News.Content>
                </News>
                <News>
                  <News.Image
                    src="/medikalkaliplar/Model-5.10.jpg"
                    alt="Medikal Kalıplar - Model 5.10"
                  />
                  <News.Date>Medikal Kalıplar</News.Date>
                  <News.Content>
                    <Title as="h4" fontSize="18px">
                      Model-5.10
                    </Title>

                    <News.Link href="7" />
                  </News.Content>
                </News>
                <News>
                  <News.Image
                    src="/medikalkaliplar/Model-5.17.jpg"
                    alt="Medikal Kalıplar - Model 5.17"
                  />
                  <News.Date>Medikal Kalıplar</News.Date>
                  <News.Content>
                    <Title as="h4" fontSize="18px">
                      Model-5.17
                    </Title>

                    <News.Link
                      title="Model 5.17 hakkında daha fazla bilgi"
                      href="/hizmetler/medikal-kaliplar/model-5.17"
                    />
                  </News.Content>
                </News>
                <News>
                  <News.Image
                    src="/medikalkaliplar/Model-6.18.jpg"
                    alt="Medikal Kalıplar - Model 6.18"
                  />
                  <News.Date>Medikal Kalıplar</News.Date>
                  <News.Content>
                    <Title as="h4" fontSize="18px">
                      Model-6.18
                    </Title>

                    <News.Link
                      title="Model 6.18 hakkında daha fazla bilgi"
                      href="/hizmetler/medikal-kaliplar/model-6.18"
                    />
                  </News.Content>
                </News>
              </Grid>
            </article>
          </Container>
        </Section>
      </Layout>
    </>
  );
};

export default ServicePage;
