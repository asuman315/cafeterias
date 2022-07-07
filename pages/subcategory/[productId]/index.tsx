import { GetStaticProps , GetStaticPaths, /*GetServerSideProps*/ } from 'next';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export default function SubcategoryPage({ subcategoryData }: any) {

  const name = subcategoryData.attributes.Name;
  
  return (
    <div>
      <h1 className='my-5 text-center'>Subcategory Page {name} </h1>
    </div>
  );
}

export  const getStaticProps: GetStaticProps = async (context: any) => {
  //The id of the product displayed on the product/details page.
  const productId = context.params.productId

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
              mealsubcategories {
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
}

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

  console.log('paths', paths);
  

  return {
    paths,
    fallback: false,
  };
}
