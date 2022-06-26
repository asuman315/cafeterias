//import type { NextPage } from 'next'
import Head from 'next/head';
import Carousel from '../components/Home/Carousel';
import Text from '../components/Home/Text';
//import { GetStaticProps /*, GetStaticPaths, GetServerSideProps*/ } from 'next';
//import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const Home = ({ teamsData }: any) => {
  console.log(teamsData);

  return (
    <div className=''>
      <Head>
        <title>Cafeterias</title>
        <meta
          name='description'
          content='Order for the best coffee, drinks and eats in town'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='relativ'>
        <Carousel />
        <Text />
      </main>
    </div>
  );
};

//export const getStaticProps: GetStaticProps = async () => {
// const response = await fetch(
//   'https://api-strapi-one.herokuapp.com/api/teams?populate=*'
// );
// const teamsData = await response.json();
// const teams = teamsData.data;
// //console.log(teams);

//   const client = new ApolloClient({
//     uri: 'https://api-strapi-one.herokuapp.com/graphql',
//     cache: new InMemoryCache(),
//   });

//   const { data } = await client.query({
//     query: gql`
//       query {
//         teams {
//           data {
//             id
//             attributes {
//               name
//               fans
//               teamLogo {
//                 data {
//                   id
//                   attributes {
//                     formats
//                     url
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     `,
//   });

//   return {
//     props: {
//       teamsData: data.teams,
//     },
//   };
// };

export default Home;
