import { FormspreeProvider } from '@formspree/react';
import '@/styles/globals.css'


export default function App({ Component, pageProps }) {
  return (
    <FormspreeProvider project="2204088403337674234">
    <Component {...pageProps} />
  </FormspreeProvider>
);
 
}
