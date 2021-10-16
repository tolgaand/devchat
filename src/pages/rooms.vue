<template lang="pug">
section
  vs-row(justify="space-between" )
   vs-col(v-for="(room,index) in rooms" :key="room.id"  w="4")
    JoinCard(:id="room.id" :name="room.name" :description="room.description" :image="room.image")
</template>

<script>
export default {
  layout: 'dashboard',
  data() {
    return {
      rooms: [
        {
          id: '1232113',
          name: 'Javascript',
          description: 'This is javascript developer area.',
          image:
            'https://developer.sabre.com/sites/default/files/2019-10/Picture4-1-1024x242_3.png',
        },
        {
          id: '1232199',
          name: 'Javascript',
          description: 'This is javascript developer area.',
          image:
            'https://developer.sabre.com/sites/default/files/2019-10/Picture4-1-1024x242_3.png',
        },
        {
          id: '123982',
          name: 'Javascript',
          description: 'This is javascript developer area.',
          image:
            'https://developer.sabre.com/sites/default/files/2019-10/Picture4-1-1024x242_3.png',
        },
      ],
    }
  },
}
</script>

<style></style>
