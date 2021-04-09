<template>
  <div
    class="contact-buttons d-flex justify-center align-center flex-wrap"
    :class="{ 'flex-column': $vuetify.breakpoint.smAndDown }"
  >
    <v-btn
      v-if="email"
      icon
      :class="{ 'ma-3': !dense }"
    >
      <v-icon>
        mdi-email
      </v-icon>
    </v-btn>

    <v-btn
      v-if="facebook"
      icon
      :class="{ 'ma-3': !dense }"
    >
      <v-icon>
        mdi-facebook
      </v-icon>
    </v-btn>

    <v-btn
      v-if="linkedIn"
      icon
      :class="{ 'ma-3': !dense }"
    >
      <v-icon>
        mdi-linkedin
      </v-icon>
    </v-btn>

    <v-btn
      v-if="twitter"
      icon
      :class="{ 'ma-3': !dense }"
    >
      <v-icon>
        mdi-twitter
      </v-icon>
    </v-btn>

    <v-btn
      v-if="youtube"
      icon
      :class="{ 'ma-3': !dense }"
    >
      <v-icon>
        mdi-youtube
      </v-icon>
    </v-btn>

    <v-btn
      v-if="github"
      icon
      :class="{ 'ma-3': !dense }"
    >
      <v-icon>
        mdi-github
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ContactButtons',

  props: {
    dense: {
      type: Boolean,
      default: false
    }
  },

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
