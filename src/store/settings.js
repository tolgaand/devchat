import channels from '../assets/data/channels'

const settings = {
  namespaced: true,
  state: () => ({
    activeChannelId: null,
    currentChannel: {
      id: -1,
      name: 'Chat Name',
      description: 'Chat Description',
    },
    channels,
  }),

  mutations: {
    setActiveChannelId(state, val) {
      state.activeChannelId = val

      const currentChannel = state.channels.find(
        (c) => String(c.id) === String(val)
      )

      if (currentChannel) state.currentChannel = currentChannel
      else
        state.currentChannel = {
          id: -1,
          name: 'Chat Name',
          description: 'Chat Description',
        }
    },
  },
}

export default settings
