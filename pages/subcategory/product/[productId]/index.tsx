import { GetStaticProps, GetStaticPaths /*GetServerSideProps*/ } from 'next';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import ProductsList from '../../../../components/ProductsList';

export default function SubcategoryPage({ productsData }: any) {
  return (
    <main>
      <section>
        <ProductsList productsData={productsData} />
      </section>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async (context: any) => {
  //The id of the product displayed on the product/details page.
  const productId = context.params.productId;

  const client = new ApolloClient({
    uri: 'https://api-strapi-one.herokuapp.com/graphql',
    cache: new InMemoryCache(),
  });

  //(id: ${productId})
  const { data } = await client.query({
    query: gql`
      query {
        mealsubcategory(id: ${productId}) {
          data {
            attributes {
              name
            }
          }
        }
      }
    `,
  });

  const subcategoryData = data.mealcategory.data;

  return {
    props: {
      subcategoryData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = new ApolloClient({
    uri: 'https://api-strapi-one.herokuapp.com/graphql',
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query {
        mealsubcategories {
          data {
            id
          }
        }
      }
    `,
  });

  const productsData = data.mealcategories.data;

  const paths = productsData.map((product: any) => {
    return { params: { productId: product.id } };
  });

  console.log('paths', paths);

  return {
    paths,
    fallback: false,
  };
};
