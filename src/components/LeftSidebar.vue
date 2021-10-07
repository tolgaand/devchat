<template lang="pug">
vs-sidebar(absolute open="active" square)
    template(#logo)
        NuxtLink(to="#") ChatUp.
    NuxtLink.menu-item(to="/channels")
        vs-sidebar-item
            template(#icon)
                i.bx.bxs-dashboard
            | Dashboard
    NuxtLink.menu-item(to="/rooms")
        vs-sidebar-item
            template(#icon)
                i.bx.bxs-planet
            | Rooms
//-   vs-sidebar-item
//-   vs-sidebar-item(id="market")
//-     template(#icon)
//-       i.bx.bx-grid-alt
//-     template
//-     |Market Overview
//-   vs-sidebar-item
//-   vs-sidebar-item(id="Music")
//-     template(#icon)
//-       i.bx.bxs-music
//-     template
//-     |Music
//-   vs-sidebar-item
//-   vs-sidebar-group
//-     template(#header)
//-       vs-sidebar-item(arrow)
//-         template(#icon)
//-             i.bx.bx-group
            | Social Media
</template>

<style lang="scss">
.vs-sidebar-content {
  background: #0e0e0e;
}

.menu-item {
  width: 100%;

  &.nuxt-link-active,
  &:hover {
    .vs-sidebar__item {
      background: #0c0c0c;
      color: #f5f5f5;
    }
  }

  .vs-sidebar__item {
    gap: 30px;
    pointer-events: none;
    color: #767676;
    padding-left: 10px;
    animation: background 1s;

    .vs-sidebar__item__icon {
      background: #0e0e0e;
      font-size: 30px;
    }
    .vs-sidebar__item__text {
      font-size: 20px;
    }
  }
}
</style>
