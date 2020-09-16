<template>
  <v-app id="inspire">
    <router-view></router-view>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    mounted () {
      console.log('mounted')
    }
  }
</script>
