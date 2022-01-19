<template>
  <v-menu
    :left="left"
    :offset-x="left"
    :offset-y="!left"
    open-on-hover
    transition="slide-y-transition"
    :disabled="!availableLocales.length"
  >
    <template #activator="{ on, attrs }">
      <v-btn
        text
        :disabled="!availableLocales.length"
        v-bind="attrs"
        class="lang-btn"
        rounded
        v-on="on"
      >
        <LanguageDisplay :locale="$i18n.localeProperties" />
      </v-btn>
    </template>

    <v-list dense>
      <v-list-item
        v-for="locale in availableLocales"
        :key="locale.code"
        link
        :href="switchLocalePath(locale.code)"
      >
        <v-list-item-title class="text-uppercase">
          <LanguageDisplay :locale="locale" />
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import { computed, defineComponent, useContext } from '@nuxtjs/composition-api'
import nuxtI18n from '@nuxtjs/i18n'
import LanguageDisplay from '@/components/ui/LanguageDisplay.vue'

export default defineComponent({
  name: 'LanguageSwitcher',

  components: {
    LanguageDisplay
  },

  props: {
    left: {
      type: Boolean,
      default: false
    }
  },

  setup () {
    const { i18n } = useContext()
    const availableLocales = computed(() => (i18n.locales as nuxtI18n.LocaleObject[])
      .filter(locale => locale.code !== i18n.locale))

    return {
      availableLocales
    }
  }
})
</script>

<style lang="scss" scoped>
.lang-btn {
  width: 5rem;
}
</style>
