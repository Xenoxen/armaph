<template>
<div>
    <v-app-bar absolute dark>
          <v-spacer></v-spacer>
          <v-btn to="/" text>Home</v-btn>
          <v-btn text>How to Join</v-btn>
          <v-btn text>Rules</v-btn>
          <v-btn text>Media</v-btn>
          <v-btn text>Unit Designation</v-btn>
          <v-btn text>Sign In</v-btn>
          <v-btn to="/sign-up" rounded class="red darken-4">Sign Up</v-btn>
        </v-app-bar>
<router-view/>
<Footer/>
</div>
</template>

<script>

import Footer from '@/components/Footer.vue';
export default{
    components: {Footer}
}
</script>