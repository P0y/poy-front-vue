<template>
    <button :class="$style.button" v-on="$listeners">
        <slot></slot>
    </button>
</template>

<style lang="scss" module>
  .button {
    background-color: $primary;
  }
</style> 