<template>
<div>
  
        <video-background class="video-container"
        overlay="linear-gradient(45deg,#2a4ae430,#fb949e6b)"
    :src="require('@/assets/media/VideoBanner.mp4')"
    style="max-height: 600px; height: 100vh;">
    <v-row style="height: 100%;">
<v-col align="center" align-self="center">
  <v-img width="200" :src="require('@/assets/img/arma_ph_logo.png')"></v-img>
      <br>

      <p class="text-h3 white--text">ARMA PHILIPPINES</p>
    <p class="text-h5 white--text">GAMING COMMUNITY</p>
    </v-col>
    </v-row>
 </video-background>
 <About/>
 <Operations/>
 <Rules/>
 <v-parallax :src="require('@/assets/img/join.jpg')"></v-parallax>
</div>

</template>

<script>
import About from '@/components/home-sections/About.vue';
import Operations from '@/components/home-sections/Operations.vue';
import Rules from '@/components/home-sections/Rules.vue';
export default {
  name: 'Home',
  components: {
    About, Operations, Rules
  }
}
</script>