import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
// import { Logo } from './Logo';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://arena-experience-frontend.vercel.app/register" target='__blank'>
            Criar conta
          </Link>
        </li>
        <li>
          <Link href="https://arena-experience-frontend.vercel.app/login" target='__blank'>Login</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Confirme sua presença nos eventos que acontecerão no\n'}
            <span className="text-primary-500">Arena Experience</span>
          </>
        }
        description="Confira as datas e quais eventos estão disponíveis para você participar."
        button={
          <Link href="https://arena-experience-frontend.vercel.app/register" target='__blank'>
            <Button xl>Criar uma conta agora</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
