import Link from 'next/link';

export const ContinueShopping = () => {
  return (
    <Link href="/">
      <a title="Home">
        <button
          className="border border-zinc-400 p-3 mt-10 font-['Work_Sans'] uppercase"
          type="button"
          title="Continue shopping"
        >
          Continue shopping
        </button>
      </a>
    </Link>
  );
};
