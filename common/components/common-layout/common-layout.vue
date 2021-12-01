<i18n>
    {
      "deu": {

      }
    }
</i18n>

<template>
  <wiz-container class="common">
    <wiz-container class="above-references">
      <!-- common blocks that should be above references -->
    </wiz-container>
    <wiz-image
      id="topRightAngle"
      class="angle-images"
      src="../../../common/media/images/top-right-angle.png"
    ></wiz-image>
    <wiz-image
      id="bottomShadowImage"
      src="../../../common/media/images/bottom-shadow.png"
    ></wiz-image>
    <wiz-bg-container id="chapterBackgroundLine">
&nbsp;
    </wiz-bg-container>
    <wiz-image
      id="bottomLeftAngle"
      class="angle-images"
      src="../../../common/media/images/bottom-left-angle.png"
    ></wiz-image>
  </wiz-container>
</template>

<script>
export default {
  name: 'common-layout',
  components: {},
  data() {
    return {
      gotoHome: {
        chapter: 'core',
        slide: 'vumerityHome',
      },
    };
  },
};
</script>

<style scoped>
.above-references {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3000;
  width: 1024px;
  height: 768px;
  pointer-events: none;
}

#logo {
  pointer-events: all;
}
.common .angle-images{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: block;
  width: 96px;
  height: 35px;
  transform: matrix(1, 0, 0, 1, 928, 0);
}
#bottomLeftAngle{
  transform: matrix(1, 0, 0, 1, 44, 652);
}
#chapterBackgroundLine {
  position: absolute;
  top: 0;
  left: 43px;
  display: block;
  width: 981px;
  height: 10px;
  border-top: 1px solid #bec6c4;
  transform: matrix(1, 0, 0, 1, 0, 153);
}
#bottomShadowImage{
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 1024px;
  height: 82px;
  transform: matrix(1, 0, 0, 1, 0, 686);
}
</style>
