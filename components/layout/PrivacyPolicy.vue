<template>
  <v-snackbar
    v-if="privacyPolicy"
    v-model="snackbar"
    class="privacy-policy"
    :timeout="-1"
    color="info"
  >
    <a
      :href="privacyPolicy.slug"
      target="_blank"
    >
      {{ privacyPolicy.message }}
    </a>

    <template #action="{ attrs }">
      <v-btn
        text
        color="primary"
        v-bind="attrs"
        @click="accept"
      >
        {{ privacyPolicy.acceptButtonText }}
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import Cookie from 'js-cookie'
import { mapState } from 'vuex'

const ACCEPTED_STATUS = 'accepted'

export default {
  name: 'PrivacyPolicy',

  data: () => ({
    snackbar: false
  }),

  computed: {
    ...mapState({
      privacyPolicy: state => state.config.privacyPolicy
    })
  },

  created () {
    if (Cookie.get('privacy-policy') !== ACCEPTED_STATUS) {
      this.snackbar = true
    }
  },

  methods: {
    accept () {
      Cookie.set('privacy-policy', ACCEPTED_STATUS)
      this.snackbar = false
    }
  }
}
</script>

<style lang="scss" scoped>
.privacy-policy {
  a {
    color: #fff;
  }
}
</style>
