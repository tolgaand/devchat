<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      activeTab: '',
    }
  },
  computed: {
    ...mapState('user', ['user']),
    ...mapState('settings', ['channels', 'activeChannelId']),
  },
  watch: {
    activeTab(val) {
      const id = val.split('-')[1]
      this.setActiveChannelId(id)
    },
  },
  methods: {
    ...mapMutations('settings', ['setActiveChannelId']),
  },
}
</script>

<template lang="pug">
vs-sidebar(relative open square v-model="activeTab")    
    template(#header)
        .sidebar__search-bar
            vs-input(danger icon-after placeholder="Enter a search key.")
                template(#icon)
                    i.bx.bx-search-alt
        .sidebar__user-area 
            vs-avatar(primary badge badge-color="success" )
                img(:src="user.avatarUrl" v-if="user.avatarUrl")
                i.bx.bxs-hot(v-else)
            .user-information
                h3 {{ user.name }} {{ user.surname }}
                h6 {{ user.username }}
    vs-sidebar-item(id="all-updates")
        template(#icon)
            i.bx.bx-history
        | All Updates
    vs-sidebar-item
        template(#icon)
            i.bx.bx-user
        | Members
    vs-sidebar-item
        template(#icon)
            i.bx.bx-cog
        | Settings
    vs-sidebar-group(open)
        template(#header)
            vs-sidebar-item(arrow)
                template(#icon)
                    i.bx.bx-group
                template
                | Channel
        template
            vs-sidebar-item(v-for="channel in channels" :id="`channel-${channel.id}`" :key="channel.id")
                template(#icon v-if="channel.icon")
                    i(:class="channel.icon")
                template {{ channel.name }}
           

</template>

<style lang="scss">
.vs-sidebar__header {
  display: flex;
  flex-direction: column;
  padding: 30px 10px !important;
  align-items: center !important;
}

.sidebar__user-area {
  display: flex;
  gap: 10px;
  margin-top: 20px;
  background: #27292d;
  text-align: left;
  width: 100%;
  border-radius: 6px;
  padding: 15px;
}

.vs-sidebar__item__text {
  color: #afb2b3;
  font-weight: 400;
}

.vs-sidebar__item__icon {
  height: 35px;
}
.vs-sidebar-content {
  max-width: 100%;
  width: 100%;
  height: 100vh !important;
}
</style>
