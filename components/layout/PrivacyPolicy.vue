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
        @click="handleAccept"
      >
        {{ privacyPolicy.acceptButtonText }}
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script lang="ts">
import {
  ref,
  computed,
  defineComponent,
  useContext
} from '@nuxtjs/composition-api'
import Cookie from 'js-cookie'
import { state } from '~/store/config'

export default defineComponent({
  name: 'PrivacyPolicy',

  setup () {
    const acceptedStatus = 'accepted'
    const { store } = useContext()
    const snackbar = ref(false)

    const configState = store.state.config as ReturnType<typeof state>

    const privacyPolicy = computed(() => configState.privacyPolicy)

    if (Cookie.get('privacy-policy') !== acceptedStatus) {
      snackbar.value = true
    }

    const handleAccept = () => {
      Cookie.set('privacy-policy', acceptedStatus)
      snackbar.value = false
    }

    return {
      snackbar,
      privacyPolicy,
      handleAccept
    }
  }
})
</script>

<style lang="scss" scoped>
.privacy-policy {
  a {
    color: #fff;
  }
}
</style>
