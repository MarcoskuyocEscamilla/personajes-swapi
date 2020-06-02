<template>
  <div class="container">
    <b-container class="bv-example-row" fluid>
      <b-row>
        <b-col v-for="item in items" v-bind:key="item.id" sm="3" md="4" lg="4" class="p-1">
          <b-card :title=item.name :sub-title="$moment(item.created).format('LLL a')">
            <h3>Peliculas</h3>
            <b-card-text>
              <ol>
                <li v-for="film in descendente(item.films)" v-bind:key="film.id">
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
      items: [],
      films: []
    }
  },
  methods: {
    getPersonajes () {
      let api = 'https://swapi.dev/api/people/'
      this.axios.get(api).then((response) => {
        let data = response.data.results
        this.items = data.sort((a, b) => a.created > b.created)
      })
    },
    factorial (n) {
      let total = 1
      for (let i = 1; i <= n; i++) {
        total = total * i
      }
      return total
    },
    descendente (data) {
      let newData = data.filter((item) => {
        return item.split('/')[5]
      }).sort((firstData, secondData) => secondData - firstData)
      return newData
    }
  },
  created () {
    this.getPersonajes()
  }
}
</script>
