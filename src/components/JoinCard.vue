<script>
export default {
  props: ['id', 'name', 'description', 'image'],
  methods: {
    redirectRoom(id) {
      console.log(this.$router)
      //   this.$router.push({ path: `/channels/${id}` })
    },
  },
}
</script>

<template lang="pug">
vs-card
    template(#title)
        h3 {{ name }}
    template(#img)
        img(:src="image")
    template(#text)
        | {{ description }}
        NuxtLink(:to="`/channels/${id}`")
            vs-button.join-btn(gradient @click="redirectRoom(id)") Join
</template>

<style lang="scss" scoped>
.vs-card__img {
  img {
    height: 200px;
    object-fit: cover;
  }
}

.join-btn {
  width: 80%;
  height: 50px;
  text-align: center;
  font-size: 17px;
  margin: 10px auto;
  margin-bottom: 0;
}
</style>
