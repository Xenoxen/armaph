<template>
<div>
    <v-container>
        <p class="text-h4 white--text" align="center">Sign Up</p>
        <v-row>
            <v-col md="6">

            </v-col>
            <v-col md="6">
                <v-row>
                    <v-col md="12">
                        <v-text-field color="blue" dark label="IGN (In-Game Name)" outlined></v-text-field>
                    </v-col>
                    <v-col md="6">
                        <v-text-field color="blue" dark label="Full Name" hint="Your real full name." outlined></v-text-field>
                    </v-col>
                    <v-col md="6">
                        <v-text-field color="blue" type="email" dark label="Email" outlined></v-text-field>
                    </v-col>
                    <v-col md="6">
                        <v-text-field color="blue" type="password" dark label="Password" hint="At least 8 characters" outlined></v-text-field>
                    </v-col>
                    <v-col md="6">
                        <v-text-field color="blue" type="password" dark label="Confirm Password" hint="At least 8 characters" outlined></v-text-field>
                    </v-col>
                    
                    <v-col md="6">
                        <v-text-field color="blue" dark label="Steam ID" hint="Your Steam 64 ID." append-icon="mdi-help-circle" @click:append="infoSteam" outlined></v-text-field>
                    </v-col>
                    <v-col md="6">
                        <v-menu
          v-model="menu2"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field dark outlined color="blue"
              v-model="computedDateFormatted"
              label="Birthday"
              hint="MM/DD/YYYY format"
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" no-title @input="menu2 = false"></v-date-picker>
          </v-menu>
                    </v-col>
                    <v-col md="12">
                        <v-textarea
                            outlined
                            dark
                            color="blue"
                            name="input-7-4"
                            label="How did you find out about Arma PH?"
                            ></v-textarea>
                    </v-col>
                    <v-col md="12">
                        <v-textarea
                            outlined
                            dark
                            color="blue"
                            name="input-7-4"
                            label="Why do you want to join Arma PH?"
                            ></v-textarea>
                    </v-col>
                </v-row>
            
            </v-col>

        </v-row>

    </v-container>
    
</div>
</template>

<script>
export default{
    data: vm => ({
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
      menu1: false,
      menu2: false,
    }),
    computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
      },
    },

    watch: {
      date () {
        this.dateFormatted = this.formatDate(this.date)
      },
    },

    methods: {
        infoSteam(){
            window.location.href='https://www.armaph.net/how-to-find-steam-64-id';
        },
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
    },
}
</script>