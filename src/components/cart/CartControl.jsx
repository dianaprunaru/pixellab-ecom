import Link from 'next/link';
import { useContext } from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { AppContext } from '../../pages/_app';

export const CartControl = () => {
  const { cart } = useContext(AppContext);

  if (cart === null) {
    return <></>;
  }

  const { products } = cart;

  const cartQty = products.reduce((cartQty, product) => {
    const { quantity } = product;

    cart += quantity;

    return cartQty;
  }, 0);

  return (
    <ul className="border border-zinc-400">
      <li>
        <Link href="/cart">
          <div className="w-24 h-24">
            <a className="w-full h-full flex justify-center items-center">
              <FiShoppingBag size="24"></FiShoppingBag>
            </a>
            <sup className="flex relative justify-center items-center -top-16 left-12 rounded-full w-4 h-4 text-white text-xs bg-red-700">
              {cartQty}
            </sup>
          </div>
        </Link>
      </li>
    </ul>
  );
};
