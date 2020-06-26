<template lang="pug">
  div(
    :class="{[$style.branch] : true, [$style.test] : true, [$style.xer] : true }"
  )
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="333.6766610149457 147.31728606573722 129.92183911886377 129.91261152274814" width="119.92" height="119.91">
      <defs>
        <path d="M458.59 272.23C459.3 193 419.33 153.02 338.68 152.32" id="b3tXSMjjbP"></path>
      </defs>
      <g>
        <use xlink:href="#b3tXSMjjbP" opacity="1" fill-opacity="0" stroke="#3982b6" stroke-width="10" stroke-opacity="1"></use>
      </g>
    </svg>
</template>

<script>
export default {
  name: "ArticleBranches",
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}

// On two left right
</script>

<style lang="scss" module>
.articleSticker {
  display: flex;
  flex-direction: column;
  align-items: center;

  .avatar {
    background-color: gray;
  }
}

.branch {
  transform: rotate(0.5turn);
}
</style>
