<template lang="pug">
  div(:class="$style.tweetos")
    v-avatar(:class="$style.avatar" size="35px")
      img(
        alt="Avatar"
        src="@/assets/images/macron.png"
      )
    div(:class="$style.text")
      span(:class="$style.name") Emmanuel Macron
      span(:class="$style.account") @EmmanuelMacron
</template>

<style lang="scss" module>
.tweetos {
  display: flex;
  margin: 0.5rem 0;

  .avatar {
    margin-right: 0.5rem;
  }

  .text {
    display: flex;
    flex-direction: column;

    .name {
      font-weight: bold;
    }
  }
}
</style>
