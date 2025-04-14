import banner from '../assets/ddfb070b-26d2-4ae4-a4a9-be5063be899b.webp';
import { About } from './About';
import ContactUs from './Contact';
import { Demo } from './Demo';
import Download from './Download';
import { Features } from './Features';
import { Welcome } from './Welcome';

export const Home = () => {
  return (
    <>
<Welcome/>
<Download/>
    <Features/>
    <Demo/>
    <ContactUs/>

    </>
  );
};
