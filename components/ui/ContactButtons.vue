<template>
  <div
    class="contact-buttons d-flex justify-space-around align-center flex-wrap"
    :class="{ 'flex-column': $vuetify.breakpoint.smAndDown }"
  >
    <v-btn v-if="email" icon large class="ma-3">
      <v-icon large>
        mdi-email
      </v-icon>
    </v-btn>

    <v-btn v-if="facebook" icon large class="ma-3">
      <v-icon large>
        mdi-facebook
      </v-icon>
    </v-btn>

    <v-btn v-if="linkedIn" icon large class="ma-3">
      <v-icon large>
        mdi-linkedin
      </v-icon>
    </v-btn>

    <v-btn v-if="twitter" icon large class="ma-3">
      <v-icon large>
        mdi-twitter
      </v-icon>
    </v-btn>

    <v-btn v-if="youtube" icon large class="ma-3">
      <v-icon large>
        mdi-youtube
      </v-icon>
    </v-btn>

    <v-btn v-if="github" icon large class="ma-3">
      <v-icon large>
        mdi-github
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ContactButtons',

  computed: {
    ...mapState({
      email: state => state.config.contactDetails.email || null,
      facebook: state => state.config.contactDetails.facebook || null,
      linkedIn: state => state.config.contactDetails.linkedIn || null,
      twitter: state => state.config.contactDetails.twitter || null,
      youtube: state => state.config.contactDetails.youtube || null,
      github: state => state.config.contactDetails.github || null
    })
  }
}
</script>
