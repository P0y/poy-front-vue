<template>
  <Layout>
    <div class="about">
      <h1>This is a login page</h1>
      <BaseInputText
      v-model="username"
      name="username" 
      :placeholder="placeholders.username"
      >
      </BaseInputText>
      <BaseInputText
      v-model="password"
      type="password"
      name="password" 
      :placeholder="placeholders.password"
      >
      </BaseInputText>
      <BaseButton type="submit">Sign in</BaseButton>
    </div>
  </Layout>
</template>

<script>
import Layout from "@/views/layouts/_layout.vue";

export default {
  name: "Login",
  components: { Layout },
  data() {
    return {
      username: "",
      password: ""
    }
  },
  computed: {
    placeholders() {
      return process.env.NODE_ENV === 'production' ? {}
        : {
            username: 'username by default is admin',
            password: 'password by default is root',
          }
    }
  }
}
</script>
