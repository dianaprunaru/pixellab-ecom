import Link from 'next/link';
import { useState } from 'react';
import { CgFacebook, CgMenu } from 'react-icons/cg';
import { CgClose } from 'react-icons/cg';
import { GiAquarium } from 'react-icons/gi';
import { IoLogoTwitter } from 'react-icons/io';
import { TiSocialGooglePlus } from 'react-icons/ti';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <section className="flex lg:flex-col h-full items-center lg:py-4 relative justify-between z-10">
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

        <div className="hidden lg:block">
          <span className="lg:block justify-between text-white ">
            <Link href="/">
              <a title="Facebook">
                <CgFacebook size="24" className="mb-4"></CgFacebook>
              </a>
            </Link>

            <Link href="/">
              <a title="Twitter">
                <IoLogoTwitter size="24" className="mb-4"></IoLogoTwitter>
              </a>
            </Link>

            <Link href="/">
              <a title="Google +">
                <TiSocialGooglePlus
                  size="24"
                  className="mb-4"
                ></TiSocialGooglePlus>
              </a>
            </Link>
          </span>
        </div>
      </section>

      {menuOpen ? (
        <nav
          className={`absolute left-0 -top-full transition-transform transform-gpu ${
            menuOpen ? 'translate-y-full' : ''
          } h-screen w-screen lg:w-screen-1/3 text-white bg-neutral-900 `}
        >
          <ul className="flex flex-col w-full h-full  text-center align-middle justify-center uppercase leading-20 leading-loose text-3xl font-['Work_Sans']">
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
        </nav>
      ) : (
        <></>
      )}
    </>
  );
};
