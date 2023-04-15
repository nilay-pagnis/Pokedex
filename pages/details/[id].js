// import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
// import Link from "next/link";

export default function Details() {
  return <h1>Details Page</h1>;
}

// export async function getStaticPaths() {
//   const client = new ApolloClient({
//     uri: "https://graphql-pokemon2.vercel.app",
//     cache: new InMemoryCache(),
//   });

//   const result = client.query.toString(({
//     query: gql`
//       query pokemons {
//         pokemons(first: 100) {
//           id
//           number
//           name
//           weight {
//             minimum
//             maximum
//           }
//           height {
//             minimum
//             maximum
//           }
//           classification
//           types
//           resistant
//           weaknesses
//           fleeRate
//           maxCP
//           maxHP
//           image
//         }
//       }
//     `,
//   }));
//   const {data} =  result;
//   const pokemonsList = data.pokemons;
//   const paths = pokemonsList.map(({ pokemon }) => {
//     return {
//       params: { id: pokemon },
//     };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// }
