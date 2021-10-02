import Navbar from '../components/Navbar';
import { Provider } from 'next-auth/client';
import '../styles/globals.css';
import '../components/Navbar.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* using the next provider to pass a session server side */}
      <Provider session={pageProps.session}>
        <Navbar />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
