<template lang="pug">
  section(:class="$style.remember")
    div(:class="$style.bulb")
      img(src="@/assets/icons/bulb.png")
    div(:class="$style.box")
      span test
      
</template>

<script>
export default {
  name: "Remember"
}
</script>

<style lang="scss" module>
.remember {
  width: 100%;
  display: flex;

  .bulb {
    margin: 0.2rem 0.5rem;
  }

  .box {
    width: 90%;
    background: gray;
    padding: 20px;
    color: #fff;
    position: relative;
    border-radius: 8px;

    &:before {
      content: "";
      width: 0px;
      height: 0px;
      position: absolute;
      border-top: 10px solid transparent;
      border-right: 10px solid gray;
      border-bottom: 10px solid transparent;
      left: -10px;
      top: 10px;
    }
  }
}
</style>
