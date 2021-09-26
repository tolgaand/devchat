<script>
export default {}
</script>

<template lang="pug"> 
vs-row.chat
  vs-col(xs="12" lg="3")
    LeftSidebar
  vs-col(xs="12" lg="9") 
    ChatArea
</template>

<style lang="scss" scoped>
.chat {
  height: 100vh;
  background: #161819;
}
</style>
