<template lang="pug">
  v-badge(
    bottom
    style="z-index: 4"
    :color="this.position === this.goodAnswerIndex ? 'success' : 'error'" 
    overlap
    :icon="this.position === this.goodAnswerIndex ? 'mdi-check-bold' : 'mdi-close'"
    :value="shouldDisplayBadge"
    :class="{ [$style.assertation]: true, [$style.active]: isActive, [$style.disabled]: isResponseValidated }"
  )
    div(
      :class="$style['assertation__content']"
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
    },
    isResponseValidated: {
      type: Boolean,
      required: false
    },
    goodAnswerIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    updateActiveAnswer() {
      if (!this.disabled) {
        this.$emit("input", this.position)
      }
    }
  },
  computed: {
    isActive() {
      return this.$attrs.value === this.position
    },
    shouldDisplayBadge() {
      return this.isResponseValidated && (this.isActive || this.position === this.goodAnswerIndex)
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
  border-radius: 6px;

  .assertation__content {
    width: 100%;
    padding: 2rem;
  }

  &:hover {
    background-color: lightgrey;
  }
}

.disabled {
  filter: grayscale(40%);
  cursor: initial;
  user-select: none;
}

//- TODO Set vuetify colors
.active {
  background-color: red;

  &:hover {
    background-color: red;
  }
}
</style>
