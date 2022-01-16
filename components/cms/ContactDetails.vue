<template>
  <div class="contact-details">
    <!-- Email -->
    <div
      v-if="email"
      class="my-5 d-flex flex-column align-center justify-center"
    >
      <v-icon
        class="ma-3"
        color="secondary"
        x-large
      >
        mdi-email
      </v-icon>

      <a
        class="mx-3"
        :href="`mailto:${email}`"
        target="_blank"
      >
        {{ email }}
      </a>
    </div>

    <!-- Twitter -->
    <div
      v-if="twitter"
      class="my-5 d-flex flex-column align-center justify-center"
    >
      <v-icon
        class="ma-3"
        color="secondary"
        x-large
      >
        mdi-twitter
      </v-icon>

      <a
        class="mx-3"
        :href="twitter"
        target="_blank"
      >
        {{ twitter }}
      </a>
    </div>

    <!-- Github -->
    <div
      v-if="github"
      class="my-5 d-flex flex-column align-center justify-center"
    >
      <v-icon
        class="ma-3"
        color="secondary"
        x-large
      >
        mdi-github
      </v-icon>

      <a
        class="mx-3"
        :href="github"
        target="_blank"
      >
        {{ github }}
      </a>
    </div>

    <!-- LinkedIn -->
    <div
      v-if="linkedIn"
      class="my-5 d-flex flex-column align-center justify-center"
    >
      <v-icon
        class="ma-3"
        color="secondary"
        x-large
      >
        mdi-linkedin
      </v-icon>

      <a
        class="mx-3"
        :href="linkedIn"
        target="_blank"
      >
        {{ linkedIn }}
      </a>
    </div>

    <!-- Facebook -->
    <div
      v-if="facebook"
      class="my-5 d-flex flex-column align-center justify-center"
    >
      <v-icon
        class="ma-3"
        color="secondary"
        x-large
      >
        mdi-facebook
      </v-icon>

      <a
        class="mx-3"
        :href="facebook"
        target="_blank"
      >
        {{ facebook }}
      </a>
    </div>

    <!-- Instagram -->
    <div
      v-if="instagram"
      class="my-5 d-flex flex-column align-center justify-center"
    >
      <v-icon
        class="ma-3"
        color="secondary"
        x-large
      >
        mdi-instagram
      </v-icon>

      <a
        class="mx-3"
        :href="instagram"
        target="_blank"
      >
        {{ instagram }}
      </a>
    </div>

    <!-- Youtube -->
    <div
      v-if="youtube"
      class="my-5 d-flex flex-column align-center justify-center"
    >
      <v-icon
        class="ma-3"
        color="secondary"
        x-large
      >
        mdi-youtube
      </v-icon>

      <a
        class="mx-3"
        :href="youtube"
        target="_blank"
      >
        {{ youtube }}
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { ContactDetailsComponent } from '~/types/cms/components'

export default defineComponent({
  name: 'ContactDetails',

  props: {
    email: {
      type: String as PropType<ContactDetailsComponent['email']>,
      default: (): ContactDetailsComponent['email'] => undefined
    },
    facebook: {
      type: String as PropType<ContactDetailsComponent['facebook']>,
      default: (): ContactDetailsComponent['facebook'] => undefined
    },
    github: {
      type: String as PropType<ContactDetailsComponent['github']>,
      default: (): ContactDetailsComponent['facebook'] => undefined
    },
    instagram: {
      type: String as PropType<ContactDetailsComponent['instagram']>,
      default: (): ContactDetailsComponent['instagram'] => undefined
    },
    linkedIn: {
      type: String as PropType<ContactDetailsComponent['linkedIn']>,
      default: (): ContactDetailsComponent['linkedIn'] => undefined
    },
    twitter: {
      type: String as PropType<ContactDetailsComponent['twitter']>,
      default: (): ContactDetailsComponent['twitter'] => undefined
    },
    youtube: {
      type: String as PropType<ContactDetailsComponent['youtube']>,
      default: (): ContactDetailsComponent['youtube'] => undefined
    }
  }
})
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/settings/_variables';

.contact-details {
  > div {
    max-width: 100%;
    overflow-x: auto;

    a {
      font-size: 1.2rem;
      color: var(--v-secondary-base);

      &:hover {
        color: var(--v-primary-base);
      }
    }
  }
}
</style>
