<template lang="pug">
  div(
    :class="{ [$style.assertation]: true, [$style.active]: isActive }"
    @click="updateActiveAnswer()"
  )
    span {{ assertation }}
</template>

<script>
export default {
  name: "Assertation",
  props: {
    assertation: {
      type: String,
      required: true
    },
    position: {
      type: Number,
      required: false
    }
  },
  methods: {
    updateActiveAnswer() {
      this.$emit("input", this.position)
    }
  },
  computed: {
    isActive() {
      return this.$attrs.value === this.position
    }
  }
}
</script>

<style lang="scss" module>
.assertation {
  width: 30%;
  text-align: center;
  display: flex;
  align-items: center;
  background-color: gray;
  cursor: pointer;
  padding: 2rem;
  border-radius: 6px;

  &:hover {
    background-color: lightgrey;
  }
}

//- TODO Set vuetify colors
.active {
  background-color: red;

  &:hover {
    background-color: red;
  }
}
</style>
