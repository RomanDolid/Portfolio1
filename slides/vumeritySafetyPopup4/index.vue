<i18n>
{
  "deu": {
    "title": "<b style='color: #003865;'>VUMERITY- OR TECFIDERA-TREATED PATIENTS MAY EXPERIENCE FLUSHING<sup>6</sup></b>",
    "list1_li1": "<span style='color: #4c4d4f;'><ul><li>In the phase 3, open-label, uncontrolled clinical trial for VUMERITY, the majority of patients<br>who experienced flushing, reported that it was mild or moderate in severity.<sup>6</sup></li><li>A short course of treatment with 75 mg non-enteric coated acetylsalicylic acid (aspirin) may<br>be beneficial in patients affected by flushing.<sup>6</sup></li></ul></span>",
    "hiddenRefs": "<sup refs='ref22 ref43 ref3 ref8 ref45 ref1 ref2'></sup>"
  }
}
</i18n>

<template>
  <wiz-slide class="slide-popup">
    <wiz-bg-container class="custom-popup">
      <wiz-bg-close-popup-button
        class="popup-close"
        :slide="nav"
      ></wiz-bg-close-popup-button>
      <wiz-bg-grid-container
        class="headline-wrapper"
        component-name="Headline &amp; Subhead container"
      >
        <wiz-text
          id="title"
          class="headline-caption"
          :text="$t('title')"
          component-name="Headline"
        ></wiz-text>
      </wiz-bg-grid-container>
      <wiz-bg-grid-container
        class="content-area"
        component-name="Content area"
      >
        <wiz-text
          id="list1"
          class="list"
          component-name="List"
          :text="$t('list1_li1')"
        ></wiz-text>
        <wiz-image
          id="icon"
          src="./media/images/icon.png"
          component-name="Icon"
        ></wiz-image>
      </wiz-bg-grid-container>
      <wiz-bg-grid-container
        class="footnote-area"
        component-name="Footnote area"
      >
        <wiz-text
          id="hiddenRefs"
          class="hidden"
          component-name="Hidden references"
          :text="$t('hiddenRefs')"
        ></wiz-text>
      </wiz-bg-grid-container>
    </wiz-bg-container>
  </wiz-slide>
</template>
<script>
export default {
  data() {
    return {
      nav: {
        chapter: 'safety',
        slide: 'vumeritySafety',
      },
    };
  },
};
</script>
<style scoped>
#title {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 25px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 30px;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 29, 96);
}

.list {
  position: absolute;
  top: 0;
  left: 0;
}

.list::v-deep li:before {
  content: '';
  position: absolute;
  left: 0;
  width: 4px;
  height: 4px;
  margin-top: 10px;
  border-radius: 50%;
  background: #c61e4d;
}

.list::v-deep li {
  padding-bottom: 36px;
  padding-left: 14px;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
}

#list1 {
  width: 750px;
  transform: matrix(1, 0, 0, 1, 5, 59);
}

#icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 256px;
  height: 230px;
  transform: matrix(1, 0, 0, 1, 530, 239);
}

</style>
