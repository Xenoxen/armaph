<template>
  <div class="background">
    <v-row no-gutters>
      <v-col md="6" align="center" align-self="center">
        <v-lazy :options="{threshold: .5}" min-height="200" transition="fade-transition">
      <v-img width="480" :src="require('@/assets/img/arma_ph_logo.png')"></v-img>
      </v-lazy>
    </v-col>
    <v-col md="6" style="padding: 30px;">
    <p class="white--text text-h4" align="center">About Us</p>
    <p class="white--text">
Having been around since 2013, Arma Philippines has always considered itself to be a group that operates around the idea of balancing fun and immersion, wherein games are not the strict "follow-this-to-the-letter" type as it is in a full-on realism unit, but not as casual as the more mainstream "run-and-gun" titles of the same genre out in today's gaming market either.
<br><br>
The group favors a relaxed style of play, but at the same time shows, to some degree, a level of maturity and tactical sense in its player-curated games for a laid back semi-realistic experience.
<br><br>
In terms of theme variation, Arma Philippines has a lot to offer, from role playing as the soldiers of their own Armed Forces quelling rebellions, to taking on the role of being members of one of the world's leading military powers taking on foreign threats, to being pioneer Space Marines shooting lasers at nasty aliens on the moon. This is made possible through player-curated games, wherein you get a unique experience from each different curator.
<br><br>
Much more anticipated by many are the more serious Ops with a little bit of realism and features tactical movements, which are typically played on weekends (usually from 8 PM onward). Meanwhile on weekdays, the server typically features fun ops (most commonly an experimental game that is Zeus-curated by a player with less experience), and sometimes, a dynamic AI-generated mission template (i.e. Liberation) where players can freely hop on and hop off anytime they wish.
<br><br>
On opportunities, community members are also not restricted to merely playing as regular troops, but can also try their hand at taking on leadership roles, and even curating their own missions as Zeus, given enough experience.
    </p>
  </v-col>
    </v-row>
  
  
</div>


</template>

<style scoped>

.background{
  padding-top: 2rem;
  background-image: url('../../assets/img/about_img.png');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>