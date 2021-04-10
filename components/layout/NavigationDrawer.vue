<template>
  <v-navigation-drawer
    v-model="navDrawerVisible"
    app
    dark
    right
    temporary
  >
    <div class="content py-3">
      <Navigation :show-home-page="true" :vertical="true" />

      <div class="bottom-aligned">
        <ContactButtons dense :large="false" class="mb-5" />
        <LanguageSwitcher :left="true" />
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script>
import Navigation from '@/components/ui/Navigation'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher'
import ContactButtons from '@/components/ui/ContactButtons'
import { mapGetters } from 'vuex'

export default {
  name: 'NavigationDrawer',

  components: {
    LanguageSwitcher,
    ContactButtons,
    Navigation
  },

  computed: {
    ...mapGetters({
      routes: 'config/getRoutes'
    }),
    navDrawerVisible: {
      get () {
        return this.$store.state.ui.navigationDrawerVisible
      },
      set (value) {
        this.$store.dispatch('ui/toggleNavigationDrawer', value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .list {
    flex-grow: 1;
  }

  .bottom-aligned {
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>
