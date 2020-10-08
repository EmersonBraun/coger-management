<template>
  <v-col
    cols="12"
    sm="8"
    md="4"
    >
    <v-alert v-if="hasMsg" :type="msg.type" dismissible>{{msg.message}}</v-alert>
    <v-card class="elevation-12">
      <v-toolbar color="primary" dark flat >
        <v-toolbar-title>Numerador</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
          <v-card-text>
            <v-form v-model="valid" ref="form" lazy-validation>
              <v-autocomplete
                label="Opção"
                prepend-icon="mdi-check"
                :items="items"
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
        <v-btn color="primary" block @click="add">
          Gerar 
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-btn class="navigation" color="#66BB6A" block to="numerador/lista">
      Ir para lista 
      <v-icon>mdi-arrow-right</v-icon>
    </v-btn>
  </v-col>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      valid: false,
      hasMsg: false,
      msg: {},
      registry: {},
      items: []
    }
  },
  methods: {
    async add () {
      if (this.$refs.form.validate()) {
        const res = await this.$axios.post('/api/numerations', this.registry)
        this.getMsg(res.data)
        this.clearAll()
      }
    },
    getMsg (data) {
      this.hasMsg = true
      this.msg.type = data ? 'success' : 'error'
      this.msg.message = this.msg.type === 'error' ? 'Erro ao inserir' : `N° ${data.ref}/${data.year} (sequência: ${data.sequence})`
    },
    clearAll () {
      this.$refs.form.resetValidation()
      this.registry = {}
    }
  },
  async mounted () {
    const res = await this.$axios.get('/api/options')
    this.items = res.data.map(v => v.name)
  }

}
</script>
<style scoped>
.navigation {
  margin-top: 20%;
}
</style>