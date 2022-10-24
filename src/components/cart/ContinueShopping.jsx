import Link from 'next/link';
import { IoMdArrowBack } from 'react-icons/io';

export const ContinueShopping = () => {
  return (
    <Link href="/">
      <a title="Home">
        <button
          className="border border-zinc-400 p-3 mt-10 font-['Work_Sans'] uppercase inline-flex align-middle flex-row"
          type="button"
          title="Continue shopping"
        >
          <IoMdArrowBack className="m-1"></IoMdArrowBack>Continue shopping
        </button>
      </a>
    </Link>
  );
};
