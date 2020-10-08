<template>
  <v-container>
    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Busca"
          single-line
          hide-details
        />
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="items"
        :search="search"
      >
        <template v-slot:item.actions="{ item }">
          <v-btn color="primary" depressed @click="toOption(item.name)">
            Ver listagem
            <v-icon small class="mr-2">mdi-plus</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import { msg } from '../../../config/msg'
export default {
  name: 'Index',
  data () {
    return {
      search: '',
      headers: [
        { text: 'Nome', align: 'start', value: 'option',},
        { text: 'Ref', value: 'ref' },
        { text: 'Sequência', value: 'sequence' },
        { text: 'Ações', value: 'actions', sortable: false },
      ],
      items: []
    }
  },
  methods: {
    async getAll () {
      const res = await this.$axios.get('/api/numerations-current')
      this.items = res.data
    },
    toOption (option) {
      this.$router.push(`lista/${option}`)
    },
  },
  async mounted () {
    this.getAll()
  }
}
</script>