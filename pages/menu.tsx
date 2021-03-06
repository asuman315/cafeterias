import Menu from "../components/Menu"
import { GetStaticProps /*, GetStaticPaths, GetServerSideProps*/ } from 'next';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export default function MenuComponent({ categoryData }: any) {
  return (
     <Menu categoryData={categoryData} />
  )
}
 
export const getStaticProps: GetStaticProps = async () => {
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
            attributes {
              Name
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

  const categoryData = data.mealcategories.data;

  return {
    props: {
      categoryData
    },
  };
};

