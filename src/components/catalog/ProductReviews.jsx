export const ProductReviews = () => {
  const { rate, count } = review;

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        return <AiOutlineStar></AiOutlineStar>;
      })}
    </div>
  );
};
