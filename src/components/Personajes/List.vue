<template>
  <div class="container">
    <ul>
      <li v-for="item in items" v-bind:key="item.id">
        {{item.id}} - {{ item.name }} - {{ $moment(item.created).format('LLL a') }}
        <h1>Películas</h1>
        <ol>
          <li v-for="film in descendente(item.films)" v-bind:key="film.id">
            {{ film }}
          </li>
        </ol>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fields: [
        {
          key: 'name',
          label: 'Personaje'
        },
        {
          key: 'created',
          label: 'Fecha de Creación'
        },
        {
          key: 'age',
          label: 'Peliculas'
        }
      ],
      items: [],
      peliculas: []
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
      })
      newData.sort((firstData, secondData) => secondData - firstData)
      return newData
    }
  },
  created () {
    this.getPersonajes()
  }
}
</script>
