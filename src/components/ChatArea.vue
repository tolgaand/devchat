<script>
import { mapState } from 'vuex'
import messages from '~/assets/data/messages'

export default {
  data() {
    return {
      message: '',
      messages,
    }
  },
  computed: {
    ...mapState('user', ['user']),
    ...mapState('settings', ['currentChannel']),
  },
  watch: {
    messages() {
      this.$nextTick(function () {
        const el = this.$el.querySelector('.area__content')

        if (el) el.scrollTop = el.scrollHeight + 120
      })
    },
  },
  methods: {
    sendMessage() {
      this.messages.push({
        author: {
          id: this.user.id,
          name: this.user.name,
          surname: this.user.surname,
          username: this.user.username,
          avatarUrl: this.user.avatarUrl,
        },
        content: this.message,
      })
      this.message = ''
    },
  },
}
</script>

<template lang="pug">
.chat-area
    .area__header
        .header__icon
            i.bx.bxs-hand
        .header__title {{ currentChannel.name }}
        .header__description {{ currentChannel.description }}
    .area__content
        .content__messages(v-if="currentChannel.id != -1")
            .message(v-for="(message, index) in messages"  :key="index" :class="{'message-me': user.id == message.author.id }")
                .message__user-avatar
                    vs-avatar(primary badge badge-color="success")
                      img(:src="message.author.avatarUrl" v-if="message.author.avatarUrl")
                      i.bx.bxs-hot(v-else)
                .message__information
                    p.message__user-name {{ message.author.name }} 
                    p.message__content {{ message.content }}
        .content__messages(v-else)
          .message
            .message__user-avatar
                  vs-avatar(history)
                    i.bx.bxs-hot
            .message__information
                p.message__user-name DevBot
                p.message__content Lütfen bir kanal seçiniz!
    .area__footer(v-if="currentChannel.id != -1")
        vs-input.message__input(placeholder="Enter a message..." v-model="message" icon-after @keyup.enter="sendMessage")
          template(#icon)
            i.bx.bx-send(@click="sendMessage")

</template>

<style lang="scss">
.chat-area {
  .area__header {
    padding: 20px 50px;
    background: #161819;
    box-shadow: 5px 5px #161819;
    color: white;
    display: flex;
    align-items: center;
    gap: 30px;
    .header__title {
      font-size: 20px;
      font-weight: bold;
      color: #989898;
    }
    .header__description {
      font-size: 16px;
      font-weight: 400;
      color: #989898;
    }
  }

  .area__content {
    padding: 20px 80px;

    overflow-y: auto;
    height: 600px;

    .message {
      &:not(:first-child) {
        margin-top: 20px;
      }
      color: white;
      display: flex;
      gap: 20px;

      word-break: break-all;

      .message__content {
        background: #27292d;
        padding: 10px 20px;
        border-radius: 1px 20px 10px 20px;
      }
    }

    .message-me {
      flex-direction: row-reverse;
      text-align: right;
      .message__content {
        background: #377bfd;
        border-radius: 20px 1px 20px 10px;
        text-align: left;
      }
    }
  }

  .area__footer {
    position: fixed;
    bottom: 0;
    width: 75%;
    padding: 20px;

    .vs-input {
      padding: 20px;
      width: 100%;
      background: #27292d;
      font-size: 18px;
    }
    .vs-input__label {
      color: white;
      font-size: 18px;
    }

    .vs-input__icon {
      margin-right: 10px;
      pointer-events: all;
      cursor: pointer;
      .bx-send {
        color: white;
      }
    }
  }
}
</style>
