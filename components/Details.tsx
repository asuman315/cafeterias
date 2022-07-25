import { useRouter } from 'next/router';

const Details = () => {
  const router = useRouter();
  const { productId } = router.query;
  // const product = products.find((product: any) => product.id === productId);

  console.log('productId', productId);

  return (
    <section>
      <h1>Details of product with Id {productId}</h1>
    </section>
  );
};

export default Details;
