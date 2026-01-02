import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Translate, {translate} from '@docusaurus/Translate';

import styles from './index.module.css';
import { AdBlockLogo, AdblockPlusLogo, AdBlockUltimateLogo, AdGuardLogo, BraveLogo, PiHoleLogo, RethinkDNSLogo, UBlockOriginLogo } from '../components/LogoProvider';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx(
      'hero hero--primary dark:bg-teal-950 dark:text-gray-200 relative',
      styles.heroBanner,
    )}>
      <div className={clsx('absolute inset-0 h-full w-full bg-[url(/img/hero-bg.png)] bg-center bg-cover lg:bg-contain lg:bg-repeat opacity-50')}></div>
      <div className="container z-10">
        <img src="/img/logo.svg" alt="Hufilter Logo" width="150" />

        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          <Translate
            id="homepage.tagline"
            description="The homepage tagline">
            A magyar reklámszűrő lista
          </Translate>
        </p>

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
            <Translate
              id="homepage.viewFilters"
              description="The homepage button label to view available filter lists">
              Elérhető szűrőlisták megtekintése
            </Translate>
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
      description={translate({
        id: 'homepage.description',
        message: 'Hufilter - A magyar reklámszűrő lista',
        description: 'The homepage meta description',
      })}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
