<template>
  <div class="about">
    <h1>This is an about page</h1>
    <BaseIcon name="sync" spin>ICON</BaseIcon>
    <BaseButton type="submit" text="Try to login" @click.prevent="tryLogin"></BaseButton>
    <BaseButton type="submit" text="log in" :disabled="tryingToLogIn"></BaseButton>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      tryingToLogIn: false,
    }
  },
  methods: {
    tryLogin: function () {
      return this.tryingToLogIn = !this.tryingToLogIn
    }
  }
}
</script>
