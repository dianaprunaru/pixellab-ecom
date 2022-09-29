import Head from 'next/head';
import { Layout } from '../layouts';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Page</title>
      </Head>

      <Layout>
        <main>hello from next</main>
      </Layout>
    </>
  );
};
export default ContactPage;
// it's mandatory to return a default export for every page
