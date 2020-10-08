<template>
  <v-container>
    <v-alert v-if="hasMsg" :type="msg.type" dismissible>{{msg.message}}</v-alert>
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
          <v-icon small class="mr-2"  @click="edit(item)">mdi-pencil</v-icon>
          <v-icon small @click="remove(item.id)">mdi-delete</v-icon>
        </template>
      </v-data-table>
       <v-btn block color="primary" @click="formModal = true">
        Inserir
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-card>
    <v-dialog
        v-model="formModal"
        persistent
      >
      <v-card class="elevation-12">
      <v-toolbar color="primary" dark flat >
        <v-toolbar-title>{{ registry.id ? 'Editar' : 'Inserir'}}</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
          <v-card-text>
            <v-form v-model="valid" ref="form" lazy-validation>
              <v-autocomplete
                label="Opção"
                prepend-icon="mdi-check"
                :items="options"
                :rules="[v => !!v || 'Opção é obrigatória']"
                v-model="registry.option"
                required
                auto-select-first
                no-data-text="Opção inválida"
              />
              <v-text-field
              label="Responsável"
              prepend-icon="mdi-account"
              type="text"
              v-model="registry.responsible"
              :rules="[v => !!v || 'Responsável é obrigatório']"
              required
              />

              <v-text-field
              label="Descrição"
              prepend-icon="mdi-card-text-outline"
              type="text"
              v-model="registry.description"
              :rules="[v => !!v || 'Descrição é obrigatória']"
              required
              />

            </v-form>
          </v-card-text>
        <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error" @click="closeModal">Cancelar</v-btn>
        <v-btn color="primary" @click="registry.id ? update() : create()">
          {{ registry.id ? 'Editar' : 'Inserir'}} 
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { msg } from '../../../config/msg'
export default {
  name: 'Index',
  data () {
    return {
      option: '',
      search: '',
      formModal: false,
      hasMsg: false,
      valid: false,
      registry: {},
      msg: {},
      headers: [
        { text: 'Opção', align: 'start', value: 'option',},
        { text: 'Responsável', align: 'start', value: 'responsible',},
        { text: 'Ref', value: 'ref' },
        { text: 'Ano', value: 'year' },
        { text: 'Descrição', value: 'description' },
        { text: 'Sequência', value: 'sequence' },
        { text: 'Ações', value: 'actions', sortable: false },
      ],
      items: [],
      options: [],
    }
  },
  methods: {
    async getAll () {
      const res = await this.$axios.get(`/api/numerations/all`)
      this.items = res.data
    },
     async create () {
      if (this.$refs.form.validate()) {
        this.registry.option = this.option
        const res = await this.$axios.post('/api/numerations', this.registry)
        this.getMsg(res.data, 'create')
        this.clearAll()
      }
    },
    edit (registry) {
      this.registry = registry
      this.formModal = true
    },
    async update () {
      const id = this.registry.id
      if (this.$refs.form.validate() && id) {
        const res = await this.$axios.put(`/api/numerations/${id}`, this.registry)
        this.getMsg(res.data, 'update')
        this.clearAll()
      }
    },
    async remove (id) {
      if (confirm('Você tem certeza?')) {
        const res = await this.$axios.delete(`/api/numerations/${id}`)
        this.getMsg(res.data, 'delete')
        this.clearAll()
      }
    },
    getMsg (data, type) {
      this.hasMsg = true
      this.msg.type = data ? 'success' : 'error'
      if (type === 'create') this.msg.message = this.msg.type === 'error' ? 'Erro ao inserir' : `N° ${data.ref}/${data.year} (sequência: ${data.sequence})`
      else this.msg.message = msg[type][this.msg.type]
    },
    clearAll () {
      this.registry = {}
      this.formModal = false
      this.getAll()
    },
    closeModal () {
      this.registry = {}
      this.formModal = false
    }
  },
  async mounted () {
    const res = await this.$axios.get('/api/options')
    this.options = res.data.map(v => v.name)
    this.getAll()
  }
}
</script>