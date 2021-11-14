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
      v-if="instagram"
      icon
      :class="{ 'ma-3': !dense }"
      :href="instagram"
      target="_blank"
    >
      <v-icon>
        mdi-instagram
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

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api'
import { state } from '@/store/config'

export default defineComponent({
  name: 'ContactButtons',

  props: {
    dense: {
      type: Boolean,
      default: false
    }
  },

  setup () {
    const { store } = useContext()
    const configState = store.state.config as ReturnType<typeof state>

    return {
      email: configState.contactDetails.email,
      facebook: configState.contactDetails.facebook,
      instagram: configState.contactDetails.instagram,
      linkedIn: configState.contactDetails.linkedIn,
      twitter: configState.contactDetails.twitter,
      youtube: configState.contactDetails.youtube,
      github: configState.contactDetails.github
    }
  }
})
</script>
