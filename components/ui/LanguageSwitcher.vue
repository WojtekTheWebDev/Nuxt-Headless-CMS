<template>
  <v-menu
    offset-y
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
        v-on="on"
      >
        <LanguageDisplay :locale="$i18n.localeProperties" />
      </v-btn>
    </template>

    <v-list dense>
      <v-list-item
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
      >
        <v-list-item-title class="text-uppercase">
          <LanguageDisplay :locale="locale" />
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import LanguageDisplay from '@/components/ui/LanguageDisplay'

export default {
  name: 'LanguageSwitcher',

  components: {
    LanguageDisplay
  },

  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>

<style lang="scss" scoped>
.lang-btn {
  width: 5rem;
}
</style>
