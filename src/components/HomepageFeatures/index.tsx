import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faRocket, faUsers, IconDefinition } from '@fortawesome/free-solid-svg-icons';

type FeatureItem = {
  title: string;
  icon: IconDefinition,
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Széles körű támogatás',
    icon: faRocket,
    description: (
      <>
        A hufiltert számos széles körben használt reklámblokkoló támogatja, beleértve az AdGuardot,
        az uBlock Origin-t, a Brave-t, az AdBlockot, az Adblock Plust és az AdBlocker Ultimate-t.
      </>
    ),
  },
  {
    title: 'Nyílt forráskódú',
    icon: faUsers,
    description: (
      <>
        A hufilter egy nonprofit, nyílt forráskódú projekt, amelynek fejlesztésében bárki
        egyszerűen részt vehet. A projekt a GitHubon található.
      </>
    ),
  },
  {
    title: 'Testreszabható szűrés',
    icon: faGear,
    description: (
      <>
        A hufilter számos szűrőlistát kínál, amelyek segítségével testreszabhatod a böngészési
        élményedet, és blokkolhatod a nem kívánt tartalmakat.
      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <FontAwesomeIcon icon={icon} className={clsx('text-5xl lg:text-7xl mb-4 dark:text-white text-gray-700', styles.featureIcon)} />
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
