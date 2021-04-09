<template>
  <v-navigation-drawer
    v-model="navDrawerVisible"
    app
    dark
    right
    temporary
  >
    <div class="content py-3">
      <v-list rounded class="list">
        <v-list-item
          :to="localePath(`/`)"
          nuxt
          exact
          class="my-1"
          color="primary"
        >
          <v-list-item-content>
            <v-list-item-title v-text="$t('homePage')" />
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          v-for="route in routes"
          :key="route.path"
          :to="localePath(`/${route.path}`)"
          nuxt
          exact
          class="my-1"
          color="primary"
        >
          <v-list-item-content>
            <v-list-item-title v-text="route.name" />
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <div class="bottom-aligned">
        <ContactButtons dense :large="false" class="mb-5" />
        <LanguageSwitcher :left="true" />
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script>
import LanguageSwitcher from '@/components/ui/LanguageSwitcher'
import ContactButtons from '@/components/ui/ContactButtons'
import { mapGetters } from 'vuex'

export default {
  name: 'NavigationDrawer',

  components: {
    LanguageSwitcher,
    ContactButtons
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
