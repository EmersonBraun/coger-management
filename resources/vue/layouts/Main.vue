<template>
  <v-app id="inspire">
    <SideMenu v-model="drawer" :items="items"/>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <span class="hidden-sm-and-down">Usuários</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row>
          <router-view></router-view> 
        </v-row>
      </v-container>
    </v-main>
    <v-btn
      bottom
      color="red"
      dark
      fab
      fixed
      right
      @click="dialog = !dialog"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <FormUser v-model="dialog"/>
  </v-app>
</template>

<script>
import FormUser from '@/components/FormUser.vue'
import SideMenu from '@/components/SideMenu.vue'
  export default {
    props: {
      source: String,
    },
    components: {FormUser, SideMenu},
    data: () => ({
      dialog: false,
      drawer: null,
      items: [
        { icon: 'mdi-contacts', text: 'Contatos', link: 'usuarios/contatos' },
        { icon: 'mdi-contacts', text: 'Pastas', link: 'usuarios/pastas' },
        { icon: 'mdi-contacts', text: 'Grupos', link: 'usuarios/grupos' },
        { icon: 'mdi-contacts', text: 'IPS', link: 'usuarios/ips' },
        { icon: 'mdi-contacts', text: 'Patrimonios', link: 'usuarios/patrimonios' },        
        { icon: 'mdi-contacts', text: 'Ramais', link: 'usuarios/ramais' },
        { icon: 'mdi-contacts', text: 'Setores', link: 'usuarios/setores' },      
        {
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-chevron-down',
          text: 'Admin',
          model: false,
          children: [
            { icon: 'mdi-contacts', text: 'Usuarios', link: 'usuarios/usuarios' },
            { icon: 'mdi-contacts', text: 'Tipos de telefone', link: 'usuarios/tipos-telefones' },
            { icon: 'mdi-contacts', text: 'Graduações', link: 'usuarios/graduacoes' },
          ],
        },
      ],
    }),
  }
</script>