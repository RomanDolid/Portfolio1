<i18n>
{
  "deu": {
    "headline": "<span style='color: #007fa3;'><b>ICH BRAUCHE EINE BEHANDLUNG,</b></span><br/><span style='color: #ce0058;'><b>DIE GUT VERTRÄGLICH IST<sup refs='ref3 ref10'></sup></b></span>",
    "caption1": "<span style='color: #003865;'><b>EVOLVE MS-2: VUMERITY<sup>™</sup>-Patienten berichten über eine signifikant<br>verbesserte gastrointestinale Verträglichkeit im Vergleich zu Tecfidera<sup>®</sup></b></span>",
    "caption2": "<span class='bold' style='color: #007fa3;'><b>Signifikant weniger Tage<sup>a</sup> mit<br>gastrointestinalen Symptomen</b></span><br/><span class='text-smaller' style='color: #4c4d4f;'>(1,4 Tage) im Vergleich zu Tecfidera<sup>®</sup><br>(2,6 Tage; p=0,0003)<sup refs='ref3'></sup></span>",
    "description": "<span style='color: #003865;'>46%</span>",
    "title": "<span style='color: #4c4d4f;'><span style='color: #007fa3;'><b style='color: #007fa3;font-size:20px;'>Weniger Therapieabbrüche</b></span><br>aufgrund gastrointestinaler Ereignisse<br>im Vergleich zu Tecfidera<sup>®</sup><sup refs='ref3 ref10'></sup></span>",
    "label1": "<span style='color: #003865;'><b>0,8%</b></span>",
    "label2": "<span style='color: #751d66;'><b>4,8%</b></span>",
    "note1": "<span style='color: #4c4d4f;'><b>VUMERITY<sup>™</sup></b></span>",
    "note2": "<span style='color: #4c4d4f;'><b>TECFIDERA<sup>®</sup></b></span>",
    "footnote1": "<span style='color: #4c4d4f;'><b>a</b> Weniger Tage mit einem IGISIS-Score von 2+.</span>",
    "footnote2": "<span style='color: #4c4d4f;'><b>MS:</b> Multiple Sklerose.</span>"
  }
}
</i18n>

<template>
  <wiz-slide>
    <!-- ========================== HEADER ========================== -->
    <wiz-bg-grid-container
      id="headlineWrapper"
      class="headline-wrapper"
      :component-name="'Headline &amp; Subhead container'"
    >
      <wiz-text
        id="headline"
        class="headline"
        :text="$t('headline')"
        :component-name="'Headline'"
      ></wiz-text>
      <wiz-image
        id="chapterImage"
        class="chapter-background-image"
        src="../../common/media/images/chapter-background-images/chapter-background-3.png"
      ></wiz-image>
    </wiz-bg-grid-container>
    <!-- ========================== CONTENT AREA ========================== -->
    <wiz-bg-grid-container
      id="contentArea"
      class="content-area"
      :component-name="'Content area'"
    >
      <wiz-image
        id="icon1"
        class="pa icon"
        :src="'./media/images/icon1.png'"
        :component-name="'Icon'"
      ></wiz-image>
      <wiz-text
        id="caption1"
        class="pa caption"
        :text="$t('caption1')"
        :component-name="'Caption'"
      ></wiz-text>
      <!-- ========================== WRAPPER 1 ========================== -->
      <wiz-bg-container
        id="wrapper1"
        v-goto="{ chapter: 'popups', slide: 'vumerityTolerabilityPopup1' }"
        class="pa wrapper"
        :component-name="'Wrapper'"
      >
        <wiz-text
          id="caption2"
          class="pa caption"
          :text="$t('caption2')"
          :component-name="'Caption'"
        ></wiz-text>
        <!-- ========================== WRAPPER 2 ========================== -->
        <wiz-bg-container
          id="wrapper2"
          class="pa wrapper"
          :component-name="'Wrapper'"
        >
          <wiz-image
            id="icon2"
            class="pa icon"
            :src="'./media/images/icon2.png'"
            :component-name="'Icon'"
          ></wiz-image>
          <wiz-text
            id="description"
            class="pa description"
            :text="$t('description')"
            :component-name="'Description'"
          ></wiz-text>
          <wiz-image
            id="icon3"
            class="pa icon icon-graph"
            :src="'./media/images/icon3.png'"
            :component-name="'Icon'"
          ></wiz-image>
        </wiz-bg-container>
      </wiz-bg-container>
      <!-- ========================== WRAPPER 3 ========================== -->
      <wiz-bg-container
        id="wrapper3"
        class="pa wrapper"
        :component-name="'Wrapper'"
      >
        <wiz-text
          id="title"
          class="pa title"
          :text="$t('title')"
          :component-name="'Title'"
        ></wiz-text>
        <wiz-image
          id="jumpIcon"
          v-goto="{ chapter: 'popups', slide: 'vumerityTolerabilityPopup2' }"
          class="pa icon icon-graph jump-icon"
          :src="'./media/images/icon3.png'"
          :component-name="'Icon'"
        ></wiz-image>
        <wiz-container
          id="border"
          class="pa border"
          :component-name="'Border'"
        ></wiz-container>
        <!-- ========================== CAPTION WRAPPERS ========================== -->
        <wiz-container
          id="captionWrapper1"
          class="pa caption-wrapper"
          :class="{state1: isState1True}"
          :component-name="'Wrapper'"
          @click.native="changeState1"
        >
          <wiz-image
            id="bgVum"
            class="pa background"
            :src="'./media/images/bg1.png'"
            :component-name="'Background'"
          ></wiz-image>
          <wiz-text
            id="note1"
            class="pa note"
            :text="$t('note1')"
            :component-name="'Note'"
          ></wiz-text>
          <wiz-text
            id="label1"
            class="pa label"
            :text="$t('label1')"
            :component-name="'Label'"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="captionWrapper2"
          class="pa caption-wrapper"
          :class="{state2: isState2True}"
          :component-name="'Wrapper'"
          @click.native="changeState2"
        >
          <wiz-image
            id="bgTec"
            class="pa background"
            :src="'./media/images/bg2.png'"
            :component-name="'Background'"
          ></wiz-image>
          <wiz-text
            id="note2"
            class="pa note"
            :text="$t('note2')"
            :component-name="'Note'"
          ></wiz-text>
          <wiz-text
            id="label2"
            class="pa label"
            :text="$t('label2')"
            :component-name="'Label'"
          ></wiz-text>
        </wiz-container>
        <!-- ========================== LABELS ========================== -->
      </wiz-bg-container>
    </wiz-bg-grid-container>
    <!-- ========================== FOOTNOTES ========================== -->
    <wiz-bg-grid-container
      id="footnoteArea"
      class="pa footnote-area"
      :component-name="'Footnote area'"
    >
      <wiz-text
        id="footnote1"
        class="pa footnote"
        :text="$t('footnote1')"
        :component-name="'Footnote'"
      ></wiz-text>
      <wiz-text
        id="footnote2"
        class="pa footnote"
        :text="$t('footnote2')"
        :component-name="'Footnote'"
      ></wiz-text>
    </wiz-bg-grid-container>
  </wiz-slide>
</template>

<script>
export default {
  data() {
    return {
      isState1True: false,
      isState2True: true,
    };
  },
  methods: {
    changeState1() {
      this.isState1True = true;
      this.isState2True = false;
    },
    changeState2() {
      this.isState1True = false;
      this.isState2True = true;
    },
  },
};
</script>

<style scoped>
  /* ======================= COMMON CLASSES ===================== */
  .wiz-image {
    max-width: none;
  }

  /* ======================= HEADER ===================== */
  .wiz-slide .chapter-background-image {
    width: 271px !important;
    height: 154px !important;
  }

  /* ======================= CONTENT AREA ===================== */
  .content-area {
    z-index: 2;
  }

  .slide .icon {
    top: 0;
    left: 0;
  }

  .slide .icon-graph {
    width: 23px;
    height: 19px;
  }

  #icon1 {
    width: 70px;
    height: 70px;
    transform: matrix(1, 0, 0, 1, 1, -10);
  }

  .caption {
    top: 0;
    left: 0;
    font-size: 25px;
    font-family: 'Open Sans Condensed', sans-serif;
    line-height: 1.2;
    text-align: center;
  }

  #caption1 {
    transform: matrix(1, 0, 0, 1, 94, -4);
  }

  /* ======================= WRAPPER 1 ===================== */
  .wrapper {
    top: 0;
    left: 0;
    width: 300px;
    height: 300px;
  }

  #wrapper1 {
    width: 331px;
    height: 96px;
    border-bottom: 1px solid #808080;
    cursor: pointer;
    transform: matrix(1, 0, 0, 1, 56, 111);
  }

  #caption2 {
    font-weight: 300;
    font-size: 20px;
    font-family: 'Open Sans', sans-serif;
    line-height: 26px;
    text-align: justify;
    transform: matrix(1, 0, 0, 1, 3, -2);
  }

  #caption2 ::v-deep .bold b {
    font-weight: 800;
  }

  #caption2 ::v-deep .text-smaller {
    display: inline-block;
    font-size: 15px;
    line-height: 17px;
  }

  /* ======================= WRAPPER 2 ===================== */
  #wrapper2 {
    width: 329px;
    height: 250px;
    transform: matrix(1, 0, 0, 1, 0, 38);
  }

  #icon2 {
    width: 84px;
    height: 138px;
    transform: matrix(1, 0, 0, 1, 0, 58);
  }

  #icon3 {
    overflow: visible;
    transform: matrix(1, 0, 0, 1, 307, 70);
  }

  .description {
    top: 0;
    left: 0;
    font-weight: 300;
    font-size: 18px;
    font-family: 'Open Sans';
    line-height: 1.2;
    text-align: center;
  }

  #description {
    font-weight: 800;
    font-size: 84px;
    line-height: 0.25;
    transform: matrix(1, 0, 0, 1, 112, 94);
  }

  /* ======================= WRAPPER 3 ===================== */
  #wrapper3 {
    width: 342px;
    height: 278px;
    transform: matrix(1, 0, 0, 1, 469, 137);
  }

  .title {
    top: 0;
    left: 0;
    font: 300 17px/20px 'Open Sans';
    transform: matrix(1, 0, 0, 1, 5, -14);
  }

  #title b {
    font-size: 20px;
  }

  .title ::v-deep b {
    font-weight: 900;
  }

  .jump-icon {
    overflow: visible;
    cursor: pointer;
    transform: matrix(1, 0, 0, 1, 310, 27);
  }

  .border {
    top: 0;
    left: 0;
    width: 333px;
    border-bottom: 1px solid gray;
    transform: matrix(1, 0, 0, 1, 0, 58);
  }

  /* ======================= CAPTION WRAPPERS ===================== */
  .caption-wrapper {
    top: 0;
    left: 0;
    z-index: 20;
    width: 142px;
    height: 37px;
    border: 1px solid #bec6c4;
    border-radius: 9px;
  }

  #captionWrapper1 {
    background-color: transparent;
    transform: matrix(1, 0, 0, 1, 0, 297);
  }

  .slide .background {
    top: 0;
    left: 0;
    width: 356px;
    height: 179px;
    transform: matrix(1, 0, 0, 1, -9, -235);
  }

  #bgVum {
    opacity: 0;
  }

  .note {
    font-size: 16px;
    font-family: 'Open Sans Condensed';
    transform: matrix(1, 0, 0, 1, 40, 6);
  }

  #captionWrapper2 {
    transform: matrix(1, 0, 0, 1, 188, 297);
  }

  #bgTec {
    opacity: 0;
    transform: matrix(1, 0, 0, 1, -198, -235);
  }

  /* ======================= STATE 1 & STATE 2 ===================== */
  .state1#captionWrapper1 {
    background-color: #003865;
  }

  .state1#captionWrapper1 #bgVum {
    opacity: 1;
  }

  .state1#captionWrapper1 #note1 ::v-deep span,
  .state2#captionWrapper2 #note2 ::v-deep span {
    color: #fff !important;
  }

  .state2#captionWrapper2 {
    background-color: #751d66;
  }

  .state2#captionWrapper2 #bgTec {
    opacity: 1;
  }

  .state2#captionWrapper2 #label2 {
    opacity: 1;
  }
  .state1#captionWrapper2 #label2 {
    opacity: 0;
  }

  .state1#captionWrapper2 #label2 {
    opacity: 0;
  }
    .state1#captionWrapper1 #label1 {
    opacity: 1;
  }

  /* ======================= LABELS ===================== */
  .label {
    top: 0;
    left: 0;
    font-weight: 300;
    font-size: 20px;
    font-family: 'Open Sans';
    line-height: 1.3;
    text-align: center;
    opacity: 0;
  }

  .label ::v-deep b {
    font-size: 44px;
  }

  #label1 {
    transform: matrix(1, 0, 0, 1, 17, -49);
  }

  #label1 ::v-deep b {
    display: inline-block;
    font-weight: 800;
    transform: matrix(1, 0, 0, 1, -1, -9);
  }

  #label2 {
    transform: matrix(1, 0, 0, 1, 19, -70);
  }

  #label2 ::v-deep b {
    display: inline-block;
    font-weight: 800;
    transform: matrix(1, 0, 0, 1, -1, 11);
  }

  /* ======================= FOOTNOTES ===================== */
  .footnote-area {
    width: 450px !important;
  }

  #footnote1 {
    transform: matrix(1, 0, 0, 1, -25, 121);
  }

  #footnote2 {
    transform: matrix(1, 0, 0, 1, -25, 148);
  }

  #footnote2 ::v-deep b {
    font-weight: 800;
  }

  #footnote3 {
    transform: matrix(1, 0, 0, 1, -25, 125);
  }
  #bgVum,
  #bgTec{
    max-width: unset;
  }
</style>
