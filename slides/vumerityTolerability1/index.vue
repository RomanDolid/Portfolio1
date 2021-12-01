<i18n>
{
  "deu": {
    "headline": "<span style='color: #007fa3;'><b>I NEED A TREATMENT THAT</b></span><br/><span style='color: #ce0058;'><b>IS WELL TOLERATED</b></span>",
    "headlineNote": "<span style='color: #003865;'>...allowing my patients to keep working with fewer interruptions<sup refs='ref2 ref18'></sup></span>",
    "caption1": "<span style='color: #003865;'><b>EVOLVE MS-2: VUMERITY-treated patients reported significantly<br/>improved GI outcomes compared to TECFIDERA</b></span>",
    "caption2": "<span style='color: #4c4d4f;'>Patients on VUMERITY experience</span><br/><span class='span-style1' style='color: #007fa3;'><b>fewer days* with GI symptoms</b></span><br/><span class='span-style2' style='color: #4c4d4f;'>(1.4 days) compared with patients taking<br/>TECFIDERA (2.6 days; P=0.0003)<sup refs='ref2'></sup></span>",
    "caption3": "<span class='span-style3' style='color: #007fa3;'><b>Fewer patients discontinued</b></span> <span style='color: #4c4d4f;'>their treatment due to GI AEs<sup refs='ref2'></sup></span>",
    "caption4": "<span style='color: #4c4d4f;'><b>0.8% vs. 4.8% VUMERITY vs. TECFIDERA<sup>**</sup></b></span>",
    "caption5": "<span style='color: #4c4d4f;'>VUMERITY-treated patients experienced:</span>",
    "description1": "<span style='color: #003865;'>46%</span>",
    "list1_li1": "<span style='color: #007fa3;'>Less interference of GI symptoms<br/>with daily activities<sup refs='ref18'></sup></span><br/><span class='span-style4' style='color: #4c4d4f;'>(7.9% vs. 10.8%; VUMERITY vs. TECFIDERA)**</span>",
    "list1_li2": "<span style='color: #007fa3;'>Less likely to impact work <br/>productivity<sup refs='ref18'></sup></span><br/><span class='span-style4' style='color: #4c4d4f;'>(6.1% vs. 11.3%; VUMERITY vs. TECFIDERA)**</span>",
    "list1_li3": "<span style='color: #007fa3;'>Less use of concomitant <br/>symptomatic medication<sup refs='ref18'></sup></span><br/><span class='span-style4' style='color: #4c4d4f;'>(19.3% vs. 30.6%; VUMERITY vs. TECFIDERA)**</span>",
    "list1_li4": "<span style='color: #007fa3;'>Less missed work due to<br/>GI symptoms<sup refs='ref18'></sup></span><br/><span class='span-style4' style='color: #4c4d4f;'>(43 days vs. 88 days; VUMERITY vs. TECFIDERA)**</span>",
    "footnote1": "<span>* Fewer days with an IGISIS score of 2+.<sup refs='ref2'></sup></span>",
    "footnote2": "<span style='color: #4c4d4f;'><b style='color: #003865;'>AE:</b> Adverse Events; <b style='color: #003865;'>GI:</b> Gastrointestinal; <b style='color: #003865;'>MS:</b> Multiple Sclerosis.</span>",
    "footnote3": "<span style='color: #4c4d4f;'>** Comparisons not tested for statistical significance, differences are numerical only.</span>"
  }
}
</i18n>

<template>
  <wiz-slide>
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
      <wiz-text
        id="headlineNote"
        class="headline-note"
        :text="$t('headlineNote')"
        :component-name="'Headline note'"
      ></wiz-text>
      <wiz-image
        id="chapterImage"
        class="chapter-background-image"
        src="../../common/media/images/chapter-background-images/chapter-background-3.png"
      ></wiz-image>
    </wiz-bg-grid-container>

    <wiz-bg-grid-container
      id="contentArea"
      class="content-area"
      :component-name="'Headline &amp; Subhead container'"
    >
      <wiz-image
        id="icon1"
        class="icon"
        src="./media/images/icon1.png"
        :component-name="'Icon'"
      ></wiz-image>
      <wiz-text
        id="caption1"
        class="caption"
        :text="$t('caption1')"
        :component-name="'Caption'"
      ></wiz-text>

      <wiz-bg-container
        id="wrapper1"
        v-goto="{ chapter: 'popups', slide: 'vumerityTolerabilityPopup1' }"
        class="wrapper"
        :component-name="'Wrapper'"
      >
        <wiz-text
          id="caption2"
          class="caption"
          :text="$t('caption2')"
          :component-name="'Caption'"
        ></wiz-text>
        <wiz-bg-container
          id="wrapper2"
          v-goto="{ chapter: 'popups', slide: 'vumerityTolerabilityPopup1' }"
          class="wrapper"
          :component-name="'Wrapper'"
        >
          <wiz-image
            id="icon2"
            class="icon"
            src="./media/images/icon2.png"
            :component-name="'Icon'"
          ></wiz-image>
          <wiz-text
            id="description1"
            class="description"
            :text="$t('description1')"
            :component-name="'Description'"
          ></wiz-text>

          <wiz-image
            id="icon3"
            class="icon icon-graph"
            src="./media/images/icon3.png"
            :component-name="'Icon'"
          ></wiz-image>
        </wiz-bg-container>
      </wiz-bg-container>

      <wiz-bg-container
        id="wrapper3"
        class="wrapper"
        :component-name="'Wrapper'"
      >
        <wiz-bg-container
          id="iconsWrapper1"
          v-goto="{ chapter: 'popups', slide: 'vumerityTolerabilityPopup3' }"
          class="icons-wrapper"
          :component-name="'Wrapper'"
        >
          <wiz-image
            id="icon7"
            class="icon-style"
            src="./media/images/icon4.png"
            :component-name="'Icon'"
          ></wiz-image>
          <wiz-text
            id="list1_li1"
            class="list"
            :text="$t('list1_li1')"
            :component-name="'List'"
          ></wiz-text>
        </wiz-bg-container>
        <wiz-bg-container
          id="iconsWrapper2"
          v-goto="{ chapter: 'popups', slide: 'vumerityTolerabilityPopup3' }"
          class="icons-wrapper"
          :component-name="'Wrapper'"
        >
          <wiz-image
            id="icon8"
            class="icon-style"
            src="./media/images/icon5.png"
            :component-name="'Icon'"
          ></wiz-image>
          <wiz-text
            id="list1_li2"
            class="list"
            :text="$t('list1_li2')"
            :component-name="'List'"
          ></wiz-text>
        </wiz-bg-container>
        <wiz-bg-container
          id="iconsWrapper3"
          v-goto="{ chapter: 'popups', slide: 'vumerityTolerabilityPopup3' }"
          class="icons-wrapper"
          :component-name="'Wrapper'"
        >
          <wiz-image
            id="icon9"
            class="icon-style"
            src="./media/images/icon6.png"
            :component-name="'Icon'"
          ></wiz-image>
          <wiz-text
            id="list1_li3"
            class="list"
            :text="$t('list1_li3')"
            :component-name="'List'"
          ></wiz-text>
        </wiz-bg-container>
        <wiz-bg-container
          id="iconsWrapper4"
          v-goto="{ chapter: 'popups', slide: 'vumerityTolerabilityPopup3' }"
          class="icons-wrapper"
          :component-name="'Wrapper'"
        >
          <wiz-image
            id="icon10"
            class="icon-style"
            src="./media/images/icon7.png"
            :component-name="'Icon'"
          ></wiz-image>
          <wiz-text
            id="list1_li4"
            class="list"
            :text="$t('list1_li4')"
            :component-name="'List'"
          ></wiz-text>
        </wiz-bg-container>
        <wiz-image
          id="icon4"
          v-goto="{ chapter: 'popups', slide: 'vumerityTolerabilityPopup3' }"
          class="icon icon-graph"
          src="./media/images/icon3.png"
          :component-name="'Icon'"
        ></wiz-image>
        <wiz-bg-container
          id="captionWrapper"
          class="wrapper"
          :component-name="'Wrapper'"
        >
          <wiz-text
            id="caption5"
            class="caption"
            :text="$t('caption5')"
            :component-name="'Caption'"
          ></wiz-text>
        </wiz-bg-container>
      </wiz-bg-container>

      <wiz-bg-container
        id="wrapper4"
        v-goto="{ chapter: 'popups', slide: 'vumerityTolerabilityPopup2' }"
        class="wrapper"
        :component-name="'Wrapper'"
      >
        <wiz-text
          id="caption3"
          class="caption"
          :text="$t('caption3')"
          :component-name="'Caption'"
        ></wiz-text>
        <wiz-text
          id="caption4"
          class="caption"
          :text="$t('caption4')"
          :component-name="'Caption'"
        ></wiz-text>
        <wiz-image
          id="icon5"
          class="icon icon-graph"
          src="./media/images/icon3.png"
          :component-name="'Icon'"
        ></wiz-image>
        <wiz-image
          id="icon6"
          class="icon icon-graph"
          src="./media/images/icon8.png"
          :component-name="'Icon'"
        ></wiz-image>
      </wiz-bg-container>
    </wiz-bg-grid-container>

    <wiz-bg-grid-container
      id="footnoteArea"
      class="footnote-area"
      :component-name="'Footnote area'"
    >
      <wiz-text
        id="footnote1"
        class="footnote"
        :text="$t('footnote1')"
        :component-name="'Footnote'"
      ></wiz-text>
      <wiz-text
        id="footnote2"
        class="footnote"
        :text="$t('footnote2')"
        :component-name="'Footnote'"
      ></wiz-text>
      <wiz-text
        id="footnote3"
        class="footnote"
        :text="$t('footnote3')"
        :component-name="'Footnote'"
      ></wiz-text>
    </wiz-bg-grid-container>
  </wiz-slide>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
#chapterImage.chapter-background-image {
  left: 3px;
  width: 267px;
  height: 154px;
}

.caption {
  position: absolute;
  top: 0;
  left: 0;
  color: #003865;
  font-size: 25px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 1.2;
  text-align: center;
}

#contentArea .icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 70px;
  height: 70px;
}

.icon-graph {
  width: 23px;
  height: 19px;
}

.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 300px;
  cursor: pointer;
}

.description {
  position: absolute;
  top: 0;
  left: 0;
  font-weight: 300;
  font-size: 18px;
  font-family: 'Open Sans', sans-serif;
  line-height: 22px;
  text-align: center;
}

#wrapper1 {
  width: 331px;
  height: 58px;
  border-bottom: 1px solid #4c4d4f;
  transform: matrix(1, 0, 0, 1, 56, 114);
}

#wrapper2 {
  width: 329px;
  height: 250px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}

#wrapper3 {
  width: 469px;
  height: 308px;
  transform: matrix(1, 0, 0, 1, 471, 72);
}

#wrapper4 {
  width: 709px;
  height: 55px;
  border: 1px solid #4c4d4f;
  border-radius: 5px;
  transform: matrix(1, 0, 0, 1, 96, 442);
}

#caption1 {
  transform: matrix(1, 0, 0, 1, 138, -4);
}

#icon1 {
  transform: matrix(1, 0, 0, 1, 1, -10);
}

#contentArea #icon2 {
  width: 84px;
  height: 138px;
  transform: matrix(1, 0, 0, 1, 0, 58);
}

#contentArea #icon3 {
  overflow: visible;
  width: 22px;
  height: 19px;
  transform: matrix(1, 0, 0, 1, 307, 70);
}

#contentArea #icon4 {
  overflow: visible;
  width: 22px;
  height: 19px;
  transform: matrix(1, 0, 0, 1, 408, 34);
}

#contentArea #icon5 {
  overflow: visible;
  width: 22px;
  height: 19px;
  transform: matrix(1, 0, 0, 1, 646, 0);
}

#contentArea #icon6 {
  width: 50px;
  height: 50px;
  transform: matrix(1, 0, 0, 1, 5, 3);
}

#caption2 {
  font-weight: 300;
  font-size: 20px;
  font-family: 'Open Sans', sans-serif;
  line-height: 24px;
  text-align: justify;
  transform: matrix(1, 0, 0, 1, 3, -38);
}

#caption2::v-deep .span-style1 b {
  font-weight: 800;
}

#caption2::v-deep .span-style2 {
  display: inline-block;
  font-size: 15px;
  line-height: 17px;
}

#caption3 {
  font-weight: 300;
  font-size: 20px;
  font-family: 'Open Sans', sans-serif;
  line-height: 24px;
  transform: matrix(1, 0, 0, 1, 70, 5);
}

#caption4 {
  font-weight: 300;
  font-size: 15px;
  font-family: 'Open Sans', sans-serif;
  line-height: 24px;
  transform: matrix(1, 0, 0, 1, 206, 29);
}

#caption5 {
  font-weight: 400;
  font-size: 20px;
  font-family: 'Open Sans', sans-serif;
  transform: matrix(1, 0, 0, 1, 2, 3);
}

#wrapper4 #caption3::v-deep .span-style3 b {
  font-weight: 800;
}

#captionWrapper {
  width: 437px;
  height: 32px;
  border-bottom: 1px solid #4c4d4f;
  transform: matrix(1, 0, 0, 1, -31, 0);
}

#description1 {
  color: #003865;
  font-weight: 800;
  font-size: 84px;
  font-family: 'Open Sans', sans-serif;
  line-height: 20px;
  transform: matrix(1, 0, 0, 1, 112, 94);
}

#description2 {
  font-weight: 300;
  font-size: 20px;
  font-family: 'Open Sans', sans-serif;
  line-height: 25px;
  transform: matrix(1, 0, 0, 1, 92, 153);
}

#footnote1 {
  transform: matrix(1, 0, 0, 1, -25, 115);
}

#footnote2 {
  transform: matrix(1, 0, 0, 1, -25, 148);
}

#footnote3 {
  transform: matrix(1, 0, 0, 1, -25, 126);
}

#wrapper3 .icons-wrapper {
  width: 499px;
  height: 67px;
  transform: matrix(1, 0, 0, 1, -30, 40);
}
#wrapper3 #iconsWrapper2 {
  transform: matrix(1, 0, 0, 1, -30, 57);
}
#wrapper3 #iconsWrapper3 {
  transform: matrix(1, 0, 0, 1, -30, 74);
}
#wrapper3 #iconsWrapper4 {
  transform: matrix(1, 0, 0, 1, -30, 91);
}
#wrapper3 .icon-style {
  width: 64px;
  height: 64px;
}
#wrapper3 .icons-wrapper .list {
  position: absolute;
  top: 0;
  left: 0;
  width: 350px;
  color: #027fa2;
  font-weight: 800;
  font-size: 20px;
  font-family: 'Open Sans', sans-serif;
  line-height: 24px;
  transform: matrix(1, 0, 0, 1, 80, -4);
}

#wrapper3 .list::v-deep .span-style4 {
  font-weight: 300;
  font-size: 15px;
  font-family: 'Open Sans', sans-serif;
  line-height: 24px;
}

#footnoteArea {
  pointer-events: none;
}
</style>
