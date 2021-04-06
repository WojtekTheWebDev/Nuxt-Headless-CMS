<template>
  <v-footer dark class="app-footer">
    <v-container>
      <v-row>
        <v-col
          class="d-flex align-center justify-center"
          cols="12"
          md="4"
        >
          <div class="text-center">
            <img :src="logo" alt="logo">
            <p>{{ pageName }}</p>
          </div>
        </v-col>

        <v-col
          class="routes"
          cols="12"
          md="4"
        >
          <p>{{ $t('siteMap') }}</p>

          <v-btn :to="localePath('/')" exact class="nav-btn my-1" text>
            {{ $t('homePage') }}
          </v-btn>

          <v-btn
            v-for="route in routes"
            :key="route.path"
            :to="localePath(route)"
            exact
            class="nav-btn my-1"
            text
          >
            {{ route.name }}
          </v-btn>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <p class="text-center">
            {{ $t('socialMedia') }}
          </p>

          <ContactButtons />
        </v-col>
      </v-row>

      <v-row class="copyright">
        <v-col
          class="pa-0"
          cols="12"
        >
          <v-divider />
        </v-col>
        <v-col
          class="text-center"
          cols="12"
        >
          Copyright
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import ContactButtons from '@/components/ui/ContactButtons'

export default {
  name: 'AppFooter',

  components: {
    ContactButtons
  },

  computed: {
    ...mapState({
      pageName: state => state.config.pageName
    }),
    ...mapGetters({
      logo: 'config/getLogo',
      routes: 'config/getRoutes'
    })
  }
}
</script>

<style lang="scss" scoped>
.app-footer {
  font-weight: 300;
  font-size: 1rem;

  .routes {
    display: flex;
    flex-direction: column;
    align-items: center;

    .nav-btn {
      font-weight: 300;
    }
  }

  .copyright {
    font-size: 0.7rem;
  }
}

</style>
