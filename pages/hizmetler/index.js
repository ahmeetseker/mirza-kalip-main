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

const Services = () => {
  return (
    <>
      <Head>
        <title>HİZMETLERİMİZ - Medikal Kalıplar ve Mutfak Eşya</title>
        <meta
          name="description"
          content="Medikal kalıplar ve mutfak eşyaları hizmetleri. Model-1.6, Model-2.7, Model-3.8 vb."
        />
      </Head>
      <Layout>
        <BreadCrumb>
          <Title fontSize="50px">HİZMETLERİMİZ</Title>
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
                    src="/medikalkaliplar/Model-1.6.jpg"
                    alt="Model-1.6"
                  />
                  <News.Date>Medikal Kalıplar</News.Date>
                  <News.Content>
                    <Title as="h4" fontSize="18px">
                      Model-1.6
                    </Title>
                    <News.Link
                      href="/hizmetler/medikal-kaliplar/model-1.6"
                      title="Model-1.6 Detayları"
                    />
                  </News.Content>
                </News>

                <News>
                  <News.Image
                    src="/medikalkaliplar/Model-2.7.jpg"
                    alt="Model-2.7"
                  />
                  <News.Date>Medikal Kalıplar</News.Date>
                  <News.Content>
                    <Title as="h4" fontSize="18px">
                      Model-2.7
                    </Title>
                    <News.Link
                      href="/hizmetler/medikal-kaliplar/model-2.7"
                      title="Model-2.7 Detayları"
                    />
                  </News.Content>
                </News>

                <News>
                  <News.Image
                    src="/medikalkaliplar/Model-3.8.jpg"
                    alt="Model-3.8 Medikal Kalıplar"
                  />
                  <News.Date>Medikal Kalıplar</News.Date>
                  <News.Content>
                    <Title as="h4" fontSize="18px">
                      Model-3.8
                    </Title>
                    <News.Link
                      href="/hizmetler/medikal-kaliplar/model-3.8"
                      title="Model-3.8 Detayları"
                    />
                  </News.Content>
                </News>

                <News>
                  <News.Image
                    src="/medikalkaliplar/Model-3.15.jpg"
                    alt="Model-3.15 Medikal Kalıplar"
                  />
                  <News.Date>Medikal Kalıplar</News.Date>
                  <News.Content>
                    <Title as="h4" fontSize="18px">
                      Model-3.15
                    </Title>
                    <News.Link
                      href="/hizmetler/medikal-kaliplar/model-3.15"
                      title="Model-3.15 Detayları"
                    />
                  </News.Content>
                </News>

                <News>
                  <News.Image
                    src="/medikalkaliplar/Model-4.9.jpg"
                    alt="Model-4.9 Medikal Kalıplar"
                  />
                  <News.Date>Medikal Kalıplar</News.Date>
                  <News.Content>
                    <Title as="h4" fontSize="18px">
                      Model-4.9
                    </Title>
                    <News.Link
                      href="/hizmetler/medikal-kaliplar/model-4.9"
                      title="Model-4.9 Detayları"
                    />
                  </News.Content>
                </News>

                <News>
                  <News.Image
                    src="/medikalkaliplar/Model-4.16.jpg"
                    alt="Model-4.16 Medikal Kalıplar"
                  />
                  <News.Date>Medikal Kalıplar</News.Date>
                  <News.Content>
                    <Title as="h4" fontSize="18px">
                      Model-4.16
                    </Title>
                    <News.Link
                      href="/hizmetler/medikal-kaliplar/model-4.16"
                      title="Model-4.16 Detayları"
                    />
                  </News.Content>
                </News>

                <News>
                  <News.Image
                    src="/medikalkaliplar/Model-5.10.jpg"
                    alt="Model-5.10 Medikal Kalıplar"
                  />
                  <News.Date>Medikal Kalıplar</News.Date>
                  <News.Content>
                    <Title as="h4" fontSize="18px">
                      Model-5.10
                    </Title>
                    <News.Link
                      href="/hizmetler/medikal-kaliplar/model-5.10"
                      title="Model-5.10 Detayları"
                    />
                  </News.Content>
                </News>

                <News>
                  <News.Image
                    src="/medikalkaliplar/Model-5.17.jpg"
                    alt="Model-5.17 Medikal Kalıplar"
                  />
                  <News.Date>Medikal Kalıplar</News.Date>
                  <News.Content>
                    <Title as="h4" fontSize="18px">
                      Model-5.17
                    </Title>
                    <News.Link
                      href="/hizmetler/medikal-kaliplar/model-5.17"
                      title="Model-5.17 Detayları"
                    />
                  </News.Content>
                </News>

                <News>
                  <News.Image
                    src="/medikalkaliplar/Model-6.18.jpg"
                    alt="Model-6.18 Medikal Kalıplar"
                  />
                  <News.Date>Medikal Kalıplar</News.Date>
                  <News.Content>
                    <Title as="h4" fontSize="18px">
                      Model-6.18
                    </Title>
                    <News.Link
                      href="/hizmetler/medikal-kaliplar/model-6.18"
                      title="Model-6.18 Detayları"
                    />
                  </News.Content>
                </News>

                <News>
                  <News.Image
                    src="/mutfakaracgerecleri/Model-1.13.jpg"
                    alt="Model-1.13 Mutfak Eşya ve Ev Gereçleri"
                  />
                  <News.Date>Mutfak Eşya ve Ev Gereçleri</News.Date>
                  <News.Content>
                    <Title as="h4" fontSize="18px">
                      Model-1.13
                    </Title>
                    <News.Link
                      href="/hizmetler/mutfakaracgereceri/model-1.13"
                      title="Model-1.13 Detayları"
                    />
                  </News.Content>
                </News>

                <News>
                  <News.Image
                    src="/mutfakaracgerecleri/Model-2.14.jpg"
                    alt="Model-2.14 Mutfak Eşya ve Ev Gereçleri"
                  />
                  <News.Date>Mutfak Eşya ve Ev Gereçleri</News.Date>
                  <News.Content>
                    <Title as="h4" fontSize="18px">
                      Model-2.14
                    </Title>
                    <News.Link
                      href="/hizmetler/mutfakaracgereceri/model-2.14"
                      title="Model-2.14 Detayları"
                    />
                  </News.Content>
                </News>

                <News>
                  <News.Image
                    src="/mutfakaracgerecleri/Model-7.19.jpg"
                    alt="Model-7.19 Mutfak Eşya ve Ev Gereçleri"
                  />
                  <News.Date>Mutfak Eşya ve Ev Gereçleri</News.Date>
                  <News.Content>
                    <Title as="h4" fontSize="18px">
                      Model-7.19
                    </Title>
                    <News.Link
                      href="/hizmetler/mutfakaracgereceri/model-7.19"
                      title="Model-7.19 Detayları"
                    />
                  </News.Content>
                </News>

                <News>
                  <News.Image
                    src="/mutfakaracgerecleri/Model-8.21.jpg"
                    alt="Model-8.21 Mutfak Eşya ve Ev Gereçleri"
                  />
                  <News.Date>Mutfak Eşya ve Ev Gereçleri</News.Date>
                  <News.Content>
                    <Title as="h4" fontSize="18px">
                      Model-8.21
                    </Title>
                    <News.Link
                      href="/hizmetler/mutfakaracgereceri/model-8.21"
                      title="Model-8.21 Detayları"
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

export default Services;
