

export default function SubcategoryPage() {
  return (
    <div>
      <h1>Subcategory Page</h1>
    </div>
  );
}

export async function getStaticProps(context) {
 //The id of the product displayed on the product/details page.
 const productId = context.params.productId;
 //  console.log('product id',productId);

 return {
  props: {
   product
  },
 };
}

export async function getStaticPaths() {
 const response = await fetch(
  'https://asmn-shopping-cart.herokuapp.com/api/shopping-carts?populate=*'
 );

 const productsData = await response.json();

 const paths = productsData.data.map((product) => {
  //console.log(product);
  return { params: { productId: product.id.toString() } };
 });

 return {
  paths,
  fallback: false,
 };
}