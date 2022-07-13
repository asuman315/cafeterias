import { GetStaticProps, GetStaticPaths /*GetServerSideProps*/ } from 'next';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import ProductDetails from '../../../components/ProductDetails/ProductDetails';

export default function ProductDetailsPage({ mealData }: any){
  return (
    <main>
      <section>
        <ProductDetails mealData={mealData} />
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
        meal(id: ${productId}) {
            data {
        attributes {
          name
          components
          price
          accompaniment
          additionalItems {
            name
            price
          }
          choiceOfComponents {
            component
            options
          }
          mealsubcategories {
            data {
              attributes {
                name
              }
            }
          }
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
        }
      }
    `,
  });

  const mealData = data.meal.data;

  return {
    props: {
      mealData,
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
        meals(pagination: { start: 0, limit: 300 }) {
          data {
            id
          }
        }
      }
    `,
  });

  const productsData = data.meals.data;

  const paths = productsData.map((product: any) => {
    return { params: { productId: product.id } };
  });

  return {
    paths,
    fallback: false,
  };
};
