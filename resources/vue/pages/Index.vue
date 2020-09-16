<template>
    <v-row >
        <v-col
            cols="6"
            sm="12"
            md="6"
            v-for="system in systems"
            :key="system.title"
        >
            <v-card
                class="mx-auto"
                outlined
            >
                <v-card-title class="headline">{{system.title}}</v-card-title>

                <v-card-subtitle>{{system.description}}</v-card-subtitle>
                <v-card-actions>
                <v-btn block color="primary" :to="system.link">Ir</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
    <!-- <router-link to="/about">To About page</router-link> -->
</template>

<script>
export default {
    name: 'Index',
    data () {
        return {
            systems: [
                { title: 'Numerador', description: 'numerador', link: '/numerador'},
                { title: 'Users', description: 'users', link: '/usuarios'},
                { title: 'Estoque', description: 'Estoque', link: '/estoque'},
                { title: 'Viaturas', description: 'viaturas', link: '/viaturas'},
            ]
        }
    }
}
</script>