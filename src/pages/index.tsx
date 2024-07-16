import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import { AdBlockLogo, AdblockPlusLogo, AdBlockUltimateLogo, AdGuardLogo, BraveLogo, PiHoleLogo, RethinkDNSLogo, UBlockOriginLogo } from '../components/LogoProvider';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src="/img/logo.svg" alt="Hufilter Logo" width="150" />

        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <div className={clsx('flex flex-wrap justify-center gap-2 md:gap-3 my-6')}>
          <div className={clsx('flex justify-center gap-1')}>
            <AdGuardLogo />
            <span>AdGuard</span>
          </div>

          <div className={clsx('flex justify-center gap-1')}>
            <UBlockOriginLogo />
            <span>uBlock Origin</span>
          </div>

          <div className={clsx('flex justify-center gap-1')}>
            <BraveLogo />
            <span>Brave</span>
          </div>

          <div className={clsx('flex justify-center gap-1')}>
            <AdBlockUltimateLogo />
            <span>AdBlocker Ultimate</span>
          </div>

          <div className={clsx('flex justify-center gap-1')}>
            <AdBlockLogo />
            <span>AdBlock</span>
          </div>

          <div className={clsx('flex justify-center gap-1')}>
            <AdblockPlusLogo />
            <span>Adblock Plus</span>
          </div>

          <div className={clsx('flex justify-center gap-1')}>
            <PiHoleLogo />
            <span>Pi-hole</span>
          </div>

          <div className={clsx('flex justify-center gap-1')}>
            <RethinkDNSLogo />
            <span>RethinkDNS</span>
          </div>
        </div>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/filters">
            Elérhető szűrőlisták megtekintése
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Hufilter - A magyar reklámszűrő lista">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
