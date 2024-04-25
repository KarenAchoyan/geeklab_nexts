import "@/styles/globals.css";
import {IntlProvider} from "react-intl";
import {useRouter} from "next/dist/client/compat/router";
import en from "../locales/en.json"
import hy from "../locales/hy.json"

const messages = {
    en,
    hy
}

function App({Component, pageProps}) {
    const router = useRouter();
    const {locale} = router;

    return (
        <IntlProvider locale={locale} messages={(messages)[locale]}>
            <Component {...pageProps} />
        </IntlProvider>
    )
}

export default App
