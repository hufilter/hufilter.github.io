import ThemedImage from "@theme/ThemedImage";

type AdblockLogoSource = string | { light: string; dark: string };

type AdblockLogoProps = {
    name: string;
    logo: AdblockLogoSource;
    size?: string;
    url?: string;
};

function abLogo(props: AdblockLogoProps): JSX.Element {
    const size = props.size || '16px';
    let image: JSX.Element;

    if (typeof props.logo === 'string') {
        image = <img src={props.logo} alt={props.name} width={size} />;
    } else {
        image = <ThemedImage sources={props.logo} alt={props.name} width={size} />;
    }

    if (props.url) {
        return (
            <a href={props.url} target="_blank" rel="noreferrer">
                {image}
            </a>
        );
    }

    return image;
}

export function AdGuardLogo(): JSX.Element {
    return abLogo({ name: 'AdGuard', logo: '/img/logos/adg.svg', url: 'https://adguard.com/' });
}

export function UBlockOriginLogo(): JSX.Element {
    return abLogo({ name: 'uBlock Origin', logo: '/img/logos/ubo.svg', url: 'https://github.com/gorhill/uBlock' });
}

export function AdBlockLogo(): JSX.Element {
    return abLogo({ name: 'AdBlock', logo: '/img/logos/ab.svg', url: 'https://getadblock.com/' });
}

export function AdblockPlusLogo(): JSX.Element {
    return abLogo({ name: 'Adblock Plus', logo: '/img/logos/abp.svg', url: 'https://adblockplus.org/' });
}

export function AdBlockUltimateLogo(): JSX.Element {
    return abLogo({ name: 'AdBlock Ultimate', logo: '/img/logos/abu.svg', url: 'https://adblockultimate.net/' });
}

export function PiHoleLogo(): JSX.Element {
    return abLogo({ name: 'Pi-hole', logo: '/img/logos/pihole.svg', url: 'https://pi-hole.net/' });
}

export function AdGuardHomeLogo(): JSX.Element {
    return abLogo({ name: 'AdGuard Home', logo: '/img/logos/adg.svg', url: 'https://adguard.com/adguard-home/overview.html' });
}

export function RethinkDNSLogo(): JSX.Element {
    return abLogo({ name: 'RethinkDNS', logo: { light: '/img/logos/rethink-dark.svg', dark: '/img/logos/rethink-light.svg' }, url: 'https://rethinkdns.com/' });
}

export function WindowsLogo(): JSX.Element {
    return abLogo({ name: 'Windows', logo: '/img/logos/win.svg', url: 'https://microsoft.com/windows' });
}

export function AppleLogo(): JSX.Element {
    return abLogo({ name: 'Apple', logo: '/img/logos/apple.svg', url: 'https://apple.com/' });
}

export function AndroidLogo(): JSX.Element {
    return abLogo({ name: 'Android', logo: '/img/logos/android.svg', url: 'https://android.com/' });
}

export function AdblockIosLogo(): JSX.Element {
    return abLogo({ name: 'AdBlock for iOS', logo: '/img/logos/abios.png', url: 'https://adblockios.com/' });
}

export function BlokadaLogo(): JSX.Element {
    return abLogo({ name: 'Blokada', logo: '/img/logos/blokada.png', url: 'https://blokada.org/' });
}

export function ChromiumLogo(): JSX.Element {
    return abLogo({ name: 'Chromium', logo: '/img/logos/chromium.svg', url: 'https://chromium.org/' });
}

export function FirefoxLogo(): JSX.Element {
    return abLogo({ name: 'Firefox', logo: '/img/logos/firefox.svg', url: 'https://mozilla.org/firefox' });
}

export function BraveLogo(): JSX.Element {
    return abLogo({ name: 'Brave', logo: '/img/logos/brave.png', url: 'https://brave.com/', size: '13px' });
}

export function FbContainerLogo(): JSX.Element {
    return abLogo({ name: 'Facebook Container', logo: '/img/logos/fbcontainer.png', url: 'https://addons.mozilla.org/firefox/addon/facebook-container/' });
}

