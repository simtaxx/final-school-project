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
      if (!this.isResponseValidated) {
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
@import "@/scss/core/colors.scss";

@import "@/scss/styles.scss";

.assertation {
  width: 30%;
  min-width: 200px;
  text-align: center;
  display: flex;
  align-items: center;
  background-color: var(--v-nav-base);
  cursor: pointer;
  border-radius: 6px;
  user-select: none;
  border: solid 3px var(--v-gray-base);
  margin: 0.1rem 0.5rem;

  @include medium-screen {
    max-height: 30%;
  }

  .assertation__content {
    width: 100%;
    padding: 2rem;
  }

  &:hover {
    background-color: var(--v-gray-base);
  }
}

.disabled {
  color: gray;
  cursor: initial;
  &:hover {
    background-color: var(--v-nav-base);
  }
}

.active {
  background-color: $primary;
  color: white;
  border-color: $primaryDark;

  &:hover {
    background-color: $primary;
  }
}
</style>
