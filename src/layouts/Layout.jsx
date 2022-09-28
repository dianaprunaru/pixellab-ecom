import { css } from '@emotion/css';

const black = '#101010';
const white = '#fff';

export const Layout = ({ children }) => {
  const gridCss = css`
    display: grid;
    grid-template-areas: 'header' 'main-area';
    grid-template-rows: 80px 1fr;
  `;

  const headerCss = css`
    background-color: ${black};
    color: ${white};
  `;

  return (
    <div>
      <header className={headerCss}>x</header>

      <div>
        {children}
        <footer>y</footer>
      </div>
    </div>
  );
};
