<template>
  <div
    class="contact-buttons d-flex justify-center align-center flex-wrap"
    :class="{ 'flex-column': $vuetify.breakpoint.smAndDown }"
  >
    <v-btn
      v-if="email"
      icon
      :class="{ 'ma-3': !dense }"
      :href="`mailto:${email}`"
      target="_blank"
    >
      <v-icon>
        mdi-email
      </v-icon>
    </v-btn>

    <v-btn
      v-if="facebook"
      icon
      :class="{ 'ma-3': !dense }"
      :href="facebook"
      target="_blank"
    >
      <v-icon>
        mdi-facebook
      </v-icon>
    </v-btn>

    <v-btn
      v-if="linkedIn"
      icon
      :class="{ 'ma-3': !dense }"
      :href="linkedIn"
      target="_blank"
    >
      <v-icon>
        mdi-linkedin
      </v-icon>
    </v-btn>

    <v-btn
      v-if="twitter"
      icon
      :class="{ 'ma-3': !dense }"
      :href="twitter"
      target="_blank"
    >
      <v-icon>
        mdi-twitter
      </v-icon>
    </v-btn>

    <v-btn
      v-if="youtube"
      icon
      :class="{ 'ma-3': !dense }"
      :href="youtube"
      target="_blank"
    >
      <v-icon>
        mdi-youtube
      </v-icon>
    </v-btn>

    <v-btn
      v-if="github"
      icon
      :class="{ 'ma-3': !dense }"
      :href="github"
      target="_blank"
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
      email: ({ config }) => config.contactDetails.email || null,
      facebook: ({ config }) => config.contactDetails.facebook || null,
      linkedIn: ({ config }) => config.contactDetails.linkedIn || null,
      twitter: ({ config }) => config.contactDetails.twitter || null,
      youtube: ({ config }) => config.contactDetails.youtube || null,
      github: ({ config }) => config.contactDetails.github || null
    })
  }
}
</script>
