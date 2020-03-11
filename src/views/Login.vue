<template>
  <div class="login">
    <h1>{{title}}</h1>
    <BaseInputText
        v-model="username"
        name="username"
        :placeholder="placeholders.username"
      />
      <br>
      <BaseInputText
        v-model="password"
        name="password"
        type="password"
        :placeholder="placeholders.password"
      />
      <br>
      <!-- <BaseButton type="submit" text="Envoyer" @clicked-button="changeTitle"></BaseButton> -->
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: '',
      password: '',
      title: 'this is a login page'
    }
  },
  computed: {
    placeholders() {
      return process.env.NODE_ENV === 'production'
        ? {}
        : {
            username: 'Use "admin" to log in with the mock API',
            password: 'Use "password" to log in with the mock API',
          }
    },
  },
  methods: {
    //   changeTitle(e) {
    //       this.title = e
    //   }
  }
}
</script>