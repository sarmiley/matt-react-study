import { baseApiService } from './baseApiService'



const pokemonApi = baseApiService.injectEndpoints({
  endpoints: ( builder ) => ({
    QueryPokemon: builder.mutation({
      query: (pokemonId) => ({
        url: `pokemon-form/${pokemonId}`,
        method: 'GET',
        body: {}.request,
        responseHandler: (response) => {
          return response.json()
        },
      }),
    })

  })

})



export const {
  useQueryPokemonMutation,
} = pokemonApi
