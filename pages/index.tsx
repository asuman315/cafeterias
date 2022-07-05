//import type { NextPage } from 'next'
import Head from 'next/head';
import Carousel from '../components/Home/Carousel';
import Text from '../components/Home/Text';
import { GetStaticProps /*, GetStaticPaths, GetServerSideProps*/ } from 'next';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Favorites from '../components/Home/Favorites';

const Home = ({ myData: myData }: any) => {
  console.log('myData', myData);

  return (
    <div className=''>
      <Head>
        <title>Cafeteriase</title>
        <meta
          name='description'
          content='Order for the best coffee, drinks and eats in town'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='relativ'>
        <Carousel />
        <Text />
        <Favorites />
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // const response = await fetch(
  //   'https://api-strapi-one.herokuapp.com/api/teams?populate=*'
  // );
  // const teamsData = await response.json();
  // const teams = teamsData.data;
  // //console.log(teams);

  const client = new ApolloClient({
    uri: 'https://api-strapi-one.herokuapp.com/graphql',
    cache: new InMemoryCache(),
  });

  //pagination: { start: 0, limit: 2 }
  //sort: "id"
  const { data } = await client.query({
    query: gql`
      query {
        mealcategory(id: 1) {
          data {
            id
            attributes {
              Name
              mealsubcategories {
                data {
                  id
                  attributes {
                    name
                    meals {
                      data {
                        id
                        attributes {
                          name
                          price
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

  return {
    props: {
      myData: data.mealcategory.data,
    },
  };
};

export default Home;

// mealsubcategory(id: 11) {
//           data {
//             id
//             attributes {
//               name
//               meals {
//                 data {
//                   id
//                   attributes {
//                     name
//                     price
//                   }
//               }
//               }
//             }
//           }
//         }
