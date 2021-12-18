import { MoralisProvider } from 'react-moralis';
import '../styles/globals.css';
import 'sweetalert2/dist/sweetalert2.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId={`${process.env.NEXT_PUBLIC_APP_ID}`}
      serverUrl={`${process.env.NEXT_PUBLIC_SERVERURL}`}
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
