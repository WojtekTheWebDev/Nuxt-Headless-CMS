module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'vue/no-v-html': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off'
  }
}
