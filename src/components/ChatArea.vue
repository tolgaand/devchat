<script>
export default {
  data() {
    return {
      message: '',
      currentUserId: 123,
      messages: [
        {
          author: {
            id: 1231,
            name: 'Tolga',
          },
          content:
            'lorem imasşld kaşld kaşlds kaşls kdşlsa kdşlsakd şlaskd şlkdsal ajslkdjqoıwdjıasjdoajdsoıasjd ıasjd oasjd asd lkasjd lkasd şaskd şlaskd lsadkqowkşalskdsalşdkasşlk',
        },
        {
          author: {
            id: 1231,
            name: 'Tolga',
          },
          content:
            'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        },
      ],
    }
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
          id: this.currentUserId,
          name: 'Buğrahan',
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
        .header__title Backend Developers
        .header__description This is backend developers chat area.
    .area__content
        .content__messages
            .message(v-for="(message, index) in messages" :key="index" :class="{'message-me': currentUserId == message.author.id }")
                .message__user-avatar
                    vs-avatar(primary badge badge-color="success")
                        i.bx.bxs-hot
                .message__information
                    p.message__user-name {{ message.author.name }} 
                    p.message__content {{ message.content }}

    .area__footer
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
