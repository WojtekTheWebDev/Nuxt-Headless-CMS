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
        @click="switchLocale(locale.code)"
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

  props: {
    left: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },

  methods: {
    switchLocale (code) {
      this.$store.dispatch('config/translateRoutes', code)
      this.$router.push(this.switchLocalePath(code))
    }
  }
}
</script>

<style lang="scss" scoped>
.lang-btn {
  width: 5rem;
}
</style>
