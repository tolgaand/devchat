<template lang="pug">
vs-navbar(text-white center-collapsed)
  template(#left)
    NuxtLink(to="/") ChatUp.
  template(#right)
    vs-navbar-item
      a(href="https://github.com/thebozturk/devchat" target="__blank")
        i.bx.bxl-github 
</template>

<script>
export default {}
</script>
<style scoped lang="scss">
header {
  .vs-navbar-content {
    .vs-navbar__right {
      .vs-navbar__item {
        font-size: 30px;
      }
    }
  }
}
</style>
