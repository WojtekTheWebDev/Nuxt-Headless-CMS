export default {
  props: {
    theme: {
      type: String,
      default: 'light',
      validator: val => val === 'light' || val === 'dark'
    }
  }
}
