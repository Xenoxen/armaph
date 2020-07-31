<template>
<v-container>
<div style="padding-top: 30px;">
    <p class="text-h4 white--text" align="center">Operations</p>
    <p class="white--text">Our community starts militiary operations, whether they are mini operations, practice operations, special operations and major operations.
        Our scheduled time for operations are usually at 9pm, and are announced beforehand.
    </p>
<v-row>
<v-col md="4">
    <v-lazy :options="{threshold: .5}" min-height="200" transition="fade-transition">
    <v-card class="mx-auto" max-width="400">
    <v-img class="white--text align-end" height="200px" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" :src="require('@/assets/img/worldwar.jpg')">
      <v-card-title>World War Era</v-card-title>
    </v-img>
  </v-card>
  </v-lazy>
</v-col>
<v-col md="4">
    <v-lazy :options="{threshold: .5}" min-height="200" transition="fade-transition">
    <v-card class="mx-auto" max-width="400">
    <v-img class="white--text align-end" height="200px" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" :src="require('@/assets/img/wildwest.jpg')">
      <v-card-title>Wild West</v-card-title>
    </v-img>
  </v-card>
  </v-lazy>
</v-col>
<v-col md="4">
    <v-lazy :options="{threshold: .5}" min-height="200" transition="fade-transition">
    <v-card class="mx-auto" max-width="400">
    <v-img class="white--text align-end" height="200px" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" :src="require('@/assets/img/vietnam.jpg')">
      <v-card-title>Vietnam War</v-card-title>
    </v-img>
  </v-card>
  </v-lazy>
</v-col>
<v-col md="4">
    <v-lazy :options="{threshold: .5}" min-height="200" transition="fade-transition">
    <v-card class="mx-auto" max-width="400">
    <v-img class="white--text align-end" height="200px" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" :src="require('@/assets/img/desertstorm.jpg')">
      <v-card-title>Desert Storm</v-card-title>
    </v-img>
  </v-card>
  </v-lazy>
</v-col>
<v-col md="4">
    <v-lazy :options="{threshold: .5}" min-height="200" transition="fade-transition">
    <v-card class="mx-auto" max-width="400">
    <v-img class="white--text align-end" height="200px" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" :src="require('@/assets/img/coldwar.png')">
      <v-card-title>Cold War Era</v-card-title>
    </v-img>
  </v-card>
  </v-lazy>
</v-col>
<v-col md="4">
    <v-lazy :options="{threshold: .5}" min-height="200" transition="fade-transition">
        <v-card class="mx-auto" max-width="400">
    <v-img class="white--text align-end" height="200px" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" :src="require('@/assets/img/specops.jpg')">
      <v-card-title>Special Operations</v-card-title>
    </v-img>
  </v-card>
      </v-lazy>
</v-col>
</v-row>
</div>
</v-container>

</template>