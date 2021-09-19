><template>
  <div>
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup () {
    const msg = ref('Running on TS and Composition API')

    return {
      msg
    }
  }
})
</script>

<style lang="scss" scoped>
div {
  color: red;
}
</style>
