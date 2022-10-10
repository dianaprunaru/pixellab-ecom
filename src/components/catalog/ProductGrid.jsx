import { css } from '@emotion/css';

export const ProductGrid = ({ products = [], perRow = 4 }) => {
  if (products.length <= 0) {
    return (
      <section className="container px-4 lg:px-0 mx-auto font-['Work_Sans'] flex justify-center text-base">
        There are no products available. Subscribe to our newsletter for new
        arrivals notifications 🛍
        {/* newsletter component */}
      </section>
    );
  }

  const gridCss = css`
    display: grid;
    row-gap: 32px;

    @media (min-width: 1024px) {
      grid-template-columns: repeat(${perRow}, 1fr);
      column-gap: 32px;
    }
  `;

  return (
    <ul className={gridCss}>
      {products.map((product, index) => {
        const { title, price, image } = product;

        return (
          <li key={index}>
            <article className="w-full">
              <header>
                <div className="w-full h-72 text-center">
                  <img src={image} className="h-full inline"></img>
                </div>
              </header>

              <section className="mt-8 text-center text-sm">
                <h1 className="uppercase text-zinc-400 mb-2">{title}</h1>

                <div className="text-zinc-900 font-light">{price}</div>
              </section>
            </article>
          </li>
        );
      })}
    </ul>
  );
};
