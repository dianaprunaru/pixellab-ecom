import { css } from '@emotion/css';
import { IoIosArrowDropup } from 'react-icons/io';

export const Footer = () => {
  const scrollToTop = () => {
    document.getElementById('scroller').scroll(0, 0);
  };

  // css`` not working
  const hrRuleCss = css`
    width: 100%;
    position: relative;
    margin-top: 15px;
    margin-bottom: 15px;
    border-bottom: 0.5px solid #d7d7d7;
  `;

  // css`` not working
  const hrIcon = css`
    position: relative;
    top: 3px;
    color: #d7d7d7;
  `;

  return (
    <>
      <section className="container px-4 mt-24 lg:px-0 mx-auto py-24 text-center lg:text-left grid lg:grid-cols-4 gap-9 font-['Work_Sans]">
        <div className="">
          <h1 className="uppercase py-2 font-semibold">Los Angeles</h1>
          <ul>
            <li>145 Oliveshka Street, </li>
            <li>Los Angeles, LA 90003</li>
            <li>+44 987 065 901</li>
            <li>info@example.com</li>
          </ul>
        </div>

        <div>
          <h1 className="uppercase py-2 font-semibold">San Francisco</h1>
          <ul>
            <li>145 Oliveshka Street, </li>
            <li>Los Angeles, LA 90003</li>
            <li>+44 987 065 901</li>
            <li>info@example.com</li>
          </ul>
        </div>

        <div>
          <h1 className="uppercase py-2 font-semibold">New York</h1>
          <ul>
            <li>145 Oliveshka Street, </li>
            <li>Los Angeles, LA 90003</li>
            <li>+44 987 065 901</li>
            <li>info@example.com</li>
          </ul>
        </div>

        <div>
          <h1 className="uppercase py-2 font-semibold">Follow us</h1>
          <div className="grid lg:grid-cols-2">
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>

            <ul>
              <li>Dribble</li>
              <li>Pinterest</li>
              <li>Behance</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="flex">
        <div className={hrRuleCss}></div>
        <div className={hrIcon}>
          <button
            type="button"
            id="scroller"
            title="Back to top"
            onClick={scrollToTop}
          >
            <IoIosArrowDropup size="32"></IoIosArrowDropup>
          </button>
        </div>
        <div className={hrRuleCss}></div>
      </div>

      <section className="container px-4 lg:px-0 mx-auto">
        This is your bottom
      </section>
    </>
  );
};
// border border-t border-l-neutral-900
