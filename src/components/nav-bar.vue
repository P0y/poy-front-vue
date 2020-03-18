<template>
    <ul :class="$style.container">
        <NavBarRoute :routes="persistentNavRoutes"></NavBarRoute>
    </ul>
</template>

<script>
import NavBarRoute from './nav-bar-route.vue'

export default {
    name: "Navbar",
    components: { NavBarRoute },
    data() {
        return {
            persistentNavRoutes: [
                {
                    name: "home",
                    title: "Home",
                    icon: "home"
                },
                {
                    name: "login",
                    title: "Login",
                    icon: "user"
                },
                {
                    name: "about",
                    title: "About",
                    icon: "sign"
                }
            ]
        }
    }
}
</script>

<style lang="scss" module>
.container {
  padding: 0;
  margin: 0 0 $size-grid-padding;
  text-align: center;
  list-style-type: none;

  > li {
    display: inline-block;
    margin-right: $size-grid-padding;
  }
}
</style>