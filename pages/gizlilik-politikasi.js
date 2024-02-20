import Head from "next/head";
import {
  Layout,
  Section,
  BreadCrumb,
  Title,
  Container,
  View,
  Text,
} from "components";

const PrivacyPolicyPage = () => {
  return (
    <>
      <Head>
        <title>Gizlilik Politikası</title>
      </Head>
      <Layout>
        <BreadCrumb>
          <Title fontSize="50px">Gizlilik Politikası</Title>
        </BreadCrumb>
        <Section
          my="55px"
          style={{
            backgroundSize: "cover",
          }}
        >
          <Container>
            <View mb="20px">
              <Text>
                Bu Gizlilik Politikası, Mirza Kalıp (&quot;Şirket&quot;)
                tarafından işletilen web sitesi veya mobil uygulama
                (&quot;Site&quot;) aracılığıyla topladığımız kişisel bilgileri
                açıklar. Bu Gizlilik Politikası, sitemizi ziyaret ettiğinizde
                veya sitemizden hizmet aldığınızda kişisel bilgilerinizin nasıl
                toplandığı, kullanıldığı ve korunduğu hakkında bilgi sağlar.
              </Text>
            </View>

            <View mb="20px">
              <Title mb="10px" as="h2">
                Bilgi Toplama ve Kullanımı
              </Title>
              <Text mb="5px">
                Şirket, sitemizi ziyaret ettiğinizde veya sitemizden hizmet
                aldığınızda, belirli kişisel bilgilerinizi toplayabilir ve
                kullanabilir. Bu kişisel bilgiler, isim, e-posta adresi, posta
                adresi ve telefon numarası gibi bilgileri içerebilir. Ayrıca,
                sitemiz üzerinden yapılan işlemler, siparişler ve iletişim gibi
                aktiviteler sırasında toplanan bilgiler de bu kapsamda
                değerlendirilebilir.
              </Text>
              <Text>
                Toplanan bilgiler, yazılım hizmetlerimizi sunmak, müşteri
                hizmetlerimizden yararlanmanızı sağlamak, sitemiz üzerindeki
                deneyimlerinizi iyileştirmek ve promosyonlardan haberdar etmek
                gibi amaçlarla kullanılabilir.
              </Text>
            </View>

            <View mb="20px">
              <Title mb="10px" as="h2">
                Kişisel Bilgilerin Korunması
              </Title>
              <Text>
                Şirket, toplanan kişisel bilgilerinizi korumak için uygun
                fiziksel, elektronik ve yönetimsel prosedürler kullanır. Ancak,
                internet üzerinden bilgi göndermenin veya depolamanın tamamen
                güvenli olmadığını lütfen unutmayın. Şirket, kişisel
                bilgilerinizi korumak için her türlü önlemi alır, ancak
                bilgilerinizi sağlama konusunda garanti vermez.
              </Text>
            </View>

            <View mb="20px">
              <Title mb="10px" as="h2">
                Bilgi Paylaşımı
              </Title>
              <Text>
                Şirket, toplanan kişisel bilgilerinizi, yalnızca yasal
                nedenlerle veya şirket içi operasyonlar için gerekli olduğunda
                üçüncü taraflarla paylaşabilir. Örneğin, ödeme işlemleri veya
                yazılım hizmetleri için iş ortaklarıyla bilgi paylaşımı
                gerekebilir. Ancak, bu bilgiler sadece işletme gereksinimlerini
                karşılamak için kullanılacaktır.
              </Text>
            </View>

            <View mb="20px">
              <Title mb="10px" as="h2">
                Çerezler
              </Title>
              <Text>
                Sitemiz, kullanıcı deneyimini iyileştirmek için çerezleri
                kullanabilir. Çerezler, bilgisayarınızın sabit diskinde
                depolanan küçük metin dosyalarıdır. Bu dosyalar, sitemizin
                belirli bölümlerine erişimlerinizi izlemek ve tercihlerinizi
                hatırlamak için kullanılır. Çerezleri kabul etmek
                istemiyorsanız, tarayıcınızın ayarlarını değiştirerek bunları
                engelleyebilirsiniz. Ancak, çerezleri engellemek, sitemizde bazı
                özelliklerin çalışmasını engelleyebilir.
              </Text>
            </View>

            <View mb="20px">
              <Title mb="10px" as="h2">
                Çocukların Gizliliği
              </Title>
              <Text>
                Şirket, 13 yaşın altındaki çocuklardan bilgi toplamayı amaçlamaz
                ve bu yaş grubundaki kullanıcılardan kişisel bilgi toplamayı
                reddederiz. Ebeveynler veya veliler, çocuklarının internet
                kullanımıyla ilgili herhangi bir soru veya endişeleri varsa,
                lütfen bizimle iletişime geçin.
              </Text>
            </View>

            <View mb="20px">
              <Title mb="10px" as="h2">
                Gizlilik Politikası Değişiklikleri
              </Title>
              <Text>
                Bu Gizlilik Politikası, zaman zaman güncellenebilir.
                Güncellemeler, sitemizde yayınlanarak yürürlüğe girer. Sitemizi
                kullanmaya devam etmek, güncellenen Gizlilik Politikası&apos;nı
                kabul ettiğinizi gösterir.
              </Text>
            </View>

            <View mb="20px">
              <Title mb="10px" as="h2">
                İletişim{" "}
              </Title>
              <Text>
                Bu Gizlilik Politikası hakkında herhangi bir sorunuz veya
                endişeniz varsa, lütfen bizimle iletişime geçmekten çekinmeyin.
                İletişim bilgilerimiz sitemizde mevcuttur.
              </Text>
            </View>
          </Container>
        </Section>
      </Layout>
    </>
  );
};

export default PrivacyPolicyPage;
