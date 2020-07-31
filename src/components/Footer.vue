<template>
<v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="grey darken-3 white--text text-center"
      width="100%"
    >
      <v-card-text>
        <v-btn class="mx-4 white--text" icon target="_blank" href="https://www.facebook.com/groups/armaph">
          <v-icon size="24px">mdi-facebook</v-icon>
        </v-btn>
        <v-btn class="mx-4 white--text" icon target="_blank" href="https://discord.com/invite/P2uKJSy">
          <v-icon size="24px">mdi-discord</v-icon>
        </v-btn>
      </v-card-text>
      
      <v-card-text class="white--text">
        © {{ new Date().getFullYear() }} — <strong>Arma Philippines</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </template>

  <script>

      export default{
          data(){
              return{

              }
          }
      }
  </script>