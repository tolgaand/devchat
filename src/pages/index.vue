<script>
import LeftBackgroundImage from '~/assets/images/home/leftBackground.svg?inline'

export default {
  components: {
    LeftBackgroundImage,
  },
  layout: 'home',
}
</script>

<template lang="pug"> 
  vs-row(justify="center" align="center")
    vs-col.left-col(sm="12" lg="6")
      LeftBackgroundImage.left-background
    vs-col.right-col(sm="12" lg="6")
      h1.chatup__title CHATUP
      p.chatup__description meeting point for developers
      p.chatup__cooming cooming soon!
</template>

<style lang="scss">
body {
  background-image: linear-gradient(
    to right top,
    #ac00c0,
    #9401b3,
    #7c02a5,
    #650297,
    #4e0189,
    #3f037e,
    #300473,
    #210468,
    #16065e,
    #0a0654,
    #02054a,
    #000040
  );
}
</style>

<style lang="scss" scoped>
.left-background {
  position: relative;
  width: 70%;
  padding: 10px;
}

.chat {
  height: 100vh;
  background: #161819;
}

.left-col {
  text-align: right;
  @media (max-width: 767px) {
    display: none !important;
  }
}

.right-col {
  text-align: center;
  color: white;
  letter-spacing: 2px;

  .chatup__title {
    font-size: 80px;
    line-height: 60px;
    @media (max-width: 767px) {
      font-size: 60px;
    }
    background: linear-gradient(
      90deg,
      rgba(131, 58, 180, 1) 0%,
      rgba(253, 29, 29, 1) 50%,
      rgba(252, 176, 69, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-animation: hue 10s infinite linear;
  }

  .chatup__description {
    font-size: 20px;
    background: linear-gradient(
      90deg,
      rgba(131, 58, 180, 1) 0%,
      rgba(253, 29, 29, 1) 50%,
      rgba(252, 176, 69, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .chatup__cooming {
    margin-top: 20px;
  }
}

@-webkit-keyframes hue {
  from {
    -webkit-filter: hue-rotate(0deg);
  }
  to {
    -webkit-filter: hue-rotate(-360deg);
  }
}
</style>
