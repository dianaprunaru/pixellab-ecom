import Link from 'next/link';
import { FiShoppingBag } from 'react-icons/fi';

export const CartControl = () => {
  return (
    <ul className="border border-zinc-400">
      <li>
        <Link href="/cart">
          <div className="w-24 h-24">
            <a className="w-full h-full flex justify-center items-center">
              <FiShoppingBag size="24"></FiShoppingBag>
            </a>
            <sup className="flex relative justify-center items-center -top-16 left-12 rounded-full w-4 h-4 text-white text-xs bg-red-700">
              0
            </sup>
          </div>
        </Link>
      </li>
    </ul>
  );
};
