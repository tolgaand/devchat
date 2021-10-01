<script>
export default {
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    start() {
      this.loading = this.$vs.loading({
        type: 'waves',
      })
    },
    finish() {
      if (this.loading) this.loading.close()
    },
  },
}
</script>

<template lang="pug">
.loading  
</template>

<style lang="scss" scoped></style>
