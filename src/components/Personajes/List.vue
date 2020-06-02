<template>
  <div class="container">
    <b-container class="bv-example-row" fluid>
      <b-row>
        <b-col v-for="character in characters" v-bind:key="character.id" sm="3" md="4" lg="4" class="p-1">
          <b-card :title=character.name :sub-title="$moment(character.created).format('LLL a')">
            <h5>El factorial de {{character.id}} = {{ factorial(character.id) }}</h5>
            <h2>Películas</h2>
            <b-card-text>
              <ol>
                <li v-for="film in character.films" v-bind:key="film.id">
                  {{ film }}
                </li>
              </ol>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      characters: []
    }
  },
  methods: {
    getPersonajes () {
      let api = 'https://swapi.dev/api/people/'
      this.axios.get(api).then((response) => {
        let data = response.data.results
        let id = 0
        let characters = data
          .sort((a, b) => a.created > b.created)
          .filter((item) => {
            let films = item.films.filter((film) => {
              return film.split('/')[5]
            }).sort((firstData, secondData) => secondData - firstData)
            item.films = films
            id++
            item.id = id
            return item
          })
        this.characters = characters
      })
    },
    factorial (n) {
      let total = 1
      for (let i = 1; i <= n; i++) {
        total = total * i
      }
      return total
    }
  },
  created () {
    this.getPersonajes()
  }
}
</script>
