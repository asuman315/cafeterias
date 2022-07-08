import { GetStaticProps, GetStaticPaths /*GetServerSideProps*/ } from 'next';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Subcategory from '../../../components/Subcategory';
import { log } from 'console';

export default function SubcategoryPage({ subcategoryData }: any) {
  return (
    <main>
      <section>
        <Subcategory subcategoryData={subcategoryData} />
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
        mealcategory(id: ${productId}) {
          data {
            attributes {
              Name
              mealsubcategories(pagination: { start: 0, limit: 30 }) {
                data {
                  id
                  attributes {
                    name
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
        mealcategories {
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

  return {
    paths,
    fallback: false,
  };
};
