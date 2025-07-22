import '@/styles/globals.css'
import {IntlProvider} from "react-intl";
import hy from '../locales/hy.json';
import en from '../locales/en.json';
import ge from '../locales/ge.json';
import {useRouter} from "next/router";
import '@formatjs/intl-numberformat/polyfill';
import '@formatjs/intl-numberformat/locale-data/ka'; // Georgian locale

const messages = {
    hy,
    en,
    ge
}


export default function App({Component, pageProps}) {
    const {locale} = useRouter();
    return (
        <IntlProvider locale={locale} messages={messages[locale]}>
            <Component {...pageProps} />
        </IntlProvider>
    )
}
