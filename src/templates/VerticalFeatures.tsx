import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Não se inscreveu no Arena Experience?"
    description="Ainda dá tempo! Acesse o app Sara Church pela Google Play Store (Android) ou Appstore(IOS)"
  >
    <VerticalFeatureRow
      title="Acompanhe o instagram do evento"
      description="Clique na imagem ao lado para acessar o instagram do Arena Jovem"
      image="/assets/images/evento_65c2e654a941b.png"
      imageAlt="Instagram Arena Jovem"
      url='https://www.instagram.com/arenajovemoficial/'
    />
    {/* <VerticalFeatureRow
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    /> */}
  </Section>
);

export { VerticalFeatures };
