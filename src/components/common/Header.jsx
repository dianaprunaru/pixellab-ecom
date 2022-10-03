import Link from 'next/link';
import { useState } from 'react';
import { CgMenu } from 'react-icons/cg';
import { CgClose } from 'react-icons/cg';
import { GiAquarium } from 'react-icons/gi';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <section className="flex lg:flex-col lg:h-1/2 items-center py-4 relative justify-between z-10">
        <Link href="/">
          <a title="Home">
            <GiAquarium size="32"></GiAquarium>
          </a>
        </Link>

        <button
          type="button"
          title="Menu"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          {menuOpen ? (
            <CgClose className="flex lg:justify-center" size="32"></CgClose>
          ) : (
            <CgMenu size="32"></CgMenu>
          )}
        </button>
      </section>

      {menuOpen ? (
        <nav
          className={`absolute ${
            menuOpen ? 'top-0' : '-top-full'
          } left-0 h-screen w-screen text-white bg-neutral-900 `}
        >
          <div>
            <ul>
              <li>
                <Link href="/">
                  <a href="Shop">Shop</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a title="Home">Home</a>
                </Link>
              </li>

              <li>
                <Link href="/">
                  <a title="Contact">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      ) : (
        <></>
      )}
    </>
  );
};
