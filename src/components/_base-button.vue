<template>
  <button :class="$style.button" v-bind="$attrs" v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  data() {
    return {
      closed: false
    }
  },
  beforeCreate() {
    console.log('Before Create', 'El', this.$el, 'Event', this.$listeners, 'Attrs', this.$attrs, 'Data', this.closed)
  },
  created() {
    console.log('Created', 'El', this.$el, 'Event', this.$listeners, 'Attrs', this.$attrs, 'Data', this.closed)
    this.closed = true
  },
  beforeMount() {
    console.log('Before Mount', 'El', this.$el, 'Event', this.$listeners, 'Attrs', this.$attrs, 'Data', this.closed)
  },
  mounted() {
    console.log('Mounted', 'El', this.$el, 'Event', this.$listeners, 'Attrs', this.$attrs, 'Data', this.closed)
    this.$el.innerHTML = this.$attrs.text
  },
  beforeUpdate() {
    console.log('Before Updated', 'El', this.$el, 'Event', this.$listeners, 'Attrs', this.$attrs, 'Data', this.closed)
  },
  updated() {
    console.log('Updated', 'El', this.$el, 'Event', this.$listeners, 'Attrs', this.$attrs, 'Data', this.closed)
    if (this.$attrs.disabled === true) this.$el.innerHTML = 'UPDATE'
    else this.$el.innerHTML = this.$attrs.text
  },
  beforeDestroy() {
    console.log('Before Destroy', 'El', this.$el, 'Event', this.$listeners, 'Attrs', this.$attrs, 'Data', this.closed)
  },
  destroyed() {
    console.log('Destroyed', 'El', this.$el, 'Event', this.$listeners, 'Attrs', this.$attrs, 'Data', this.closed)
  },
  methods: {
    // newTitle(title) {
    //   this.$emit('clicked-button', title)
    // }
  }
}
</script>

<style lang="scss" module>
  .button {
    background-color: $secondary;
  }
  .button:disabled {
    background-color: $primary;
  }
</style> 