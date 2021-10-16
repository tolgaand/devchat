<script>
export default {}
</script>

<template lang="pug">
section.home
  header 
    Header
  main
    LeftSidebar
    .content
      Nuxt  
</template>

<style lang="scss" scoped>
header {
  .vs-navbar-content {
    background: #0e0e0e;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}

main {
  display: flex;
  margin-top: 55px;

  .content {
    width: 100%;
    padding: 10px;
  }
}
</style>
