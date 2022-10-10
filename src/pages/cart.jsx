import Head from 'next/head';
import { CartControl, ContinueShopping } from '../components/cart';
import { Layout } from '../layouts';

const Cart = () => {
  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>

      <Layout>
        <main className="container px-4 lg:px-0 mx-auto">
          <header className="flex justify-between text-zinc-400">
            <CartControl></CartControl>
          </header>

          <section className="mt-16 flex flex-col ">
            cart goes here
            <ContinueShopping></ContinueShopping>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Cart;
