<template>
  <v-navigation-drawer
    :value="isVisible"
    app
    dark
    right
    temporary
    @input="hide"
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

<script lang="ts">
import { computed, defineComponent, useContext } from '@nuxtjs/composition-api'
import Navigation from '@/components/layout/Navigation.vue'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher.vue'
import ContactButtons from '@/components/layout/ContactButtons.vue'
import { state } from '@/store/ui'

export default defineComponent({
  name: 'NavigationDrawer',

  components: {
    LanguageSwitcher,
    ContactButtons,
    Navigation
  },

  setup () {
    const { store } = useContext()
    const uiState = store.state.ui as ReturnType<typeof state>

    const isVisible = computed(() => uiState.navigationDrawerVisible)
    const hide = (value: boolean) => store.dispatch('ui/setNavigationDrawer', value)

    return {
      isVisible,
      hide
    }
  }
})
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
