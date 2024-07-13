import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Széles körű támogatás',
    Svg: require('@site/static/img/security-svgrepo-com.svg').default,
    description: (
      <>
        A hufiltert számos széles körben használt reklámblokkoló támogatja, beleértve az AdGuardot,
        az uBlock Origin-t, a Brave-t, az AdBlockot, az Adblock Plust és az AdBlocker Ultimate-t.
      </>
    ),
  },
  {
    title: 'Nyílt forráskódú',
    Svg: require('@site/static/img/handshake-deal-svgrepo-com.svg').default,
    description: (
      <>
        A hufilter egy nonprofit, nyílt forráskódú projekt, amelynek fejlesztésében bárki
        egyszerűen részt vehet. A projekt a GitHubon található.
      </>
    ),
  },
  {
    title: 'Testreszabható szűrés',
    Svg: require('@site/static/img/settings-gear-svgrepo-com.svg').default,
    description: (
      <>
        A hufilter számos szűrőlistát kínál, amelyek segítségével testreszabhatod a böngészési
        élményedet, és blokkolhatod a nem kívánt tartalmakat.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
