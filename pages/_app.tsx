import '../styles/globals.css';
import '../styles/navbar.css';
import '../styles/number.css';
import type { AppProps } from 'next/app'
import { RelayEnvironmentProvider } from 'relay-hooks';
import environment from '../relay/environment';
import 'semantic-ui-css/semantic.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <RelayEnvironmentProvider environment={environment}>
    <Component {...pageProps} />
    </RelayEnvironmentProvider>
    </>
  )
}

export default MyApp
