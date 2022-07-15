import { GetStaticProps, GetStaticPaths /*GetServerSideProps*/ } from 'next';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import ProductsList from '../../../components/ProductsList';

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
  //The id of the subcategory clicked by the user
  const productId = context.params.productId;

  const client = new ApolloClient({
    uri: 'https://api-strapi-one.herokuapp.com/graphql',
    cache: new InMemoryCache(),
  });

  //(id: ${productId})
  const { data } = await client.query({
    query: gql`
        query {
          mealsubcategory (id: ${productId}) {
            data {
              attributes {
                name
                image {
                  data {
                    attributes {
                      formats
                      url
                    }
                  }    
                }
                mealcategories {
                  data {
                    attributes {
                      Name
                    }
                  }
                }
                meals {
                  data {
                    id
                    attributes {
                      name
                      price
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

  const productsData = data.mealsubcategory.data;

  return {
    props: {
      productsData,
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
        mealsubcategories(pagination: { start: 0, limit: 50 }) {
          data {
            id
          }
        }
      }
    `,
  });

  const productsData = data.mealsubcategories.data;

  const paths = productsData.map((product: any) => {
    return { params: { productId: product.id } };
  });

  return {
    paths,
    fallback: false,
  };
};
