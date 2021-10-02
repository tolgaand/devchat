<script>
import { mapState, mapMutations, mapActions } from 'vuex'

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
    ...mapActions('user', ['login', 'logout']),
  },
}
</script>

<template lang="pug">
vs-sidebar(relative open square v-model="activeTab")    

    template(#logo)
      img(src="~/assets/images/devchat-logo.png")
    template
    template(#header)
        .sidebar__search-bar
            vs-input(danger icon-after placeholder="Enter a search key.")
                template(#icon)
                    i.bx.bx-search-alt
        .sidebar__user-area(v-if="user")
            vs-avatar(badge badge-color="success" )
                img(:src="user.photoUrl" v-if="user.photoUrl")
                i.bx.bxs-hot(v-else)
            .user-information
                h3 {{ user.displayName }}
                h6 {{ user.screenName }}
            .user-buttons
              vs-button.btn.logout-btn(v-if="user" gradient dark animation-type="scale" block @click="logout")
                i.bx.bxs-log-out-circle
                template(#animate)
                 | Logout
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
        template
        template
    vs-sidebar-group

      template
        vs-card(type="2")
          template(#img)
            img(src="~/assets/images/devchat-logo.png")
          template
      template
    template(#footer)
      p
        | powered by 
        a(href="https://github.com/thebozturk" target="_blank") thebozturk
        |  & 
        a(href="https://github.com/tolgaand" target="_blank") tolgaand
      p
    template
    template(#footer)
      vs-button.btn.login-btn(v-if="!user" gradient dark animation-type="scale" badge-position="top-right" block @click="login")
        i.bx.bxs-log-in-circle
        template(#animate)
          | login
        template
    template

 
    
          


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
  white-space: nowrap;
  display: inline-block;
  overflow: hidden;
  z-index: 10;
  box-sizing: border-box !important;
  color: rgba(var(--vs-text), 1);
  font-size: 0.9rem;
  font-weight: 700;
  font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

.vs-sidebar__item__icon {
  height: 35px;
}
.vs-sidebar-content {
  max-width: 100%;
  width: 100%;
  height: 100vh !important;
}

.vs-sidebar-content .vs-sidebar__logo img {
  max-width: 60% !important;
  max-height: 100px !important;
}
.vs-sidebar-content .vs-sidebar__footer {
  box-sizing: border-box !important;
  color: #a7a3a3;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 600;
  @import url('https://fonts.googleapis.com/css2?family=Gemunu+Libre&display=swap');
  font-family: 'Gemunu Libre', sans-serif;
}

.input,
textarea,
button,
select,
a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  text-decoration: none;
  color: white;
}
.btn {
  padding: var(--vs-button-padding);
  display: flex;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.login-btn {
  width: 100%;
}
.logout-btn {
  width: 70px;
  height: 35px;
}
</style>
