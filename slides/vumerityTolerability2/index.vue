<i18n>
{
  "deu": {
    "headline": "<span style='color: #007fa3;'><b>I NEED A TREATMENT THAT</b></span><br/><span style='color: #ce0058;'><b>IS WELL TOLERATED</b></span>",
    "headlineNote": "<span style='color: #003865;'>...allowing my patients to keep working with fewer interruptions<sup refs='ref2 ref18'></sup></span>",
    "caption1": "<span style='color: #003865;'><b>EVOLVE MS-2: VUMERITY-treated patients reported significantly<br/>improved GI outcomes compared to TECFIDERA<sup>**</sup><sup refs='ref2'>1</sup></b></span>",
    "caption2": "<span style='color: #ce0058;'>VUMERITY-treated patients experienced:</span>",
    "title1": "<span class='span-style1 ' style='color: #007fa3;'><b>Less interference</b></span><br/><span class='span-style2' style='color: #4c4d4f;'>of GI symptoms with<br/>daily activities<sup refs='ref18'></sup><sup>*</sup></span>",
    "title2": "<span class='span-style1' style='color: #007fa3;'><b>Less use</b></span><br/><span style='color: #4c4d4f;'>of concomitant symptomatic<br/>medication<sup refs='ref18'></sup><sup>*</sup></span>",
    "title3": "<span class='span-style1' style='color: #007fa3;'><b>Less likely</b></span><br/><span style='color: #4c4d4f;'>to impact work productivity<sup refs='ref18'></sup><sup>*</sup></span>",
    "title5": "<span class='span-style1' style='color: #007fa3;'><b>Less missed</b></span><br/><span style='color: #4c4d4f;'>work due to<br/>GI symptoms<sup refs='ref18'></sup></span>",
    "title4": " <span style='color: #4c4d4f;'>VUMERITY vs. TECFIDERA</span>",
    "description1": "<span style='color: #4c4d4f;'>Patients reporting GI<br/>symptoms interfering with<br/>daily activities 'quite<br/> a bit' and 'extremely'</span>",
    "description2": "<span style='color: #4c4d4f;'>Patients reporting use of<br/>concomitant symptomatic<br/>medication for GI symptoms</span>",
    "description3": "<span style='color: #4c4d4f;'>Patients reporting GI<br/>symptoms affected work<br/>productivity 'quite a bit' and<br/>'extremely'</span>",
    "description4": "<span style='color: #4c4d4f;'>Days with more than <br/>1 missed work hour</span>",
    "footnote1": "<span>* Comparisons not tested for statistical significance, differences are numerical only.</span>",
    "footnote2": "<span style='color: #4c4d4f;'><b style='color: #003865;'>AE:</b> Adverse Events; <b style='color: #003865;'>GI:</b> Gastrointestinal; <b style='color: #003865;'>MS:</b> Multiple Sclerosis.</span>",
    "footnote3": "<span style='color: #4c4d4f;'>** Vumerity-treated patients experienced a statistically significant reduction in the number of days with a GI symptom compared with Tecfidera-treated patients (p=0.0003).</span>"
  }
}
</i18n>

<template>
  <wiz-slide>
    <wiz-bg-grid-container
      id="headlineWrapper"
      class="pa headline-wrapper back-cont-bio"
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
      class="content-area back-cont-bio"
      :component-name="'Content area'"
    >
      <wiz-image
        id="icon1"
        class="pa icon"
        src="./media/images/icon1.png"
        :component-name="'Icon'"
      ></wiz-image>
      <wiz-text
        id="caption1"
        class="pa caption"
        :text="$t('caption1')"
        :component-name="'Caption'"
      ></wiz-text>
      <wiz-text
        id="caption2"
        class="pa caption"
        :text="$t('caption2')"
        :component-name="'Caption'"
      ></wiz-text>

      <wiz-image
        id="line1"
        class="pa line"
        src="./media/images/line.png"
        :component-name="'Line'"
      ></wiz-image>
      <wiz-image
        id="line2"
        class="pa line"
        src="./media/images/line.png"
        :component-name="'Line'"
      ></wiz-image>
      <wiz-image
        id="line3"
        class="pa line"
        src="./media/images/line.png"
        :component-name="'Line'"
      ></wiz-image>
      <wiz-bg-container
        id="wrapper1"
        class="pa wrapper"
        :component-name="'Wrapper'"
      >
        <wiz-text
          id="title1"
          class="title"
          :text="$t('title1')"
          :component-name="'Title'"
        ></wiz-text>
      </wiz-bg-container>
      <wiz-bg-container
        id="wrapper2"
        class="pa wrapper"
        :component-name="'Wrapper'"
      >
        <wiz-text
          id="title2"
          class="title"
          :text="$t('title2')"
          :component-name="'Title'"
        ></wiz-text>
      </wiz-bg-container>
      <wiz-bg-container
        id="wrapper3"
        class="pa wrapper"
        :component-name="'rapper'"
      >
        <wiz-text
          id="title3"
          class="title"
          :text="$t('title3')"
          :component-name="'Title'"
        ></wiz-text>
      </wiz-bg-container>
      <wiz-bg-container
        id="wrapper7"
        class="pa wrapper"
        :component-name="'Wrapper'"
      >
        <wiz-text
          id="title7"
          class="title"
          :text="$t('title5')"
          :component-name="'Title'"
        ></wiz-text>
      </wiz-bg-container>
      <wiz-bg-container
        id="wrapper4"
        class="pa wrapper"
        :component-name="'Wrapper'"
      >
        <wiz-image
          id="icon6"
          class="pa icon"
          src="./media/images/icon6.png"
          :component-name="'Icon'"
        ></wiz-image>
        <wiz-image
          id="icon7"
          class="pa icon"
          src="./media/images/icon7.png"
          :component-name="'Icon'"
        ></wiz-image>
        <wiz-text
          id="title4"
          class="title title-stats"
          :text="$t('title4')"
          :component-name="'Title'"
        ></wiz-text>
        <wiz-text
          id="description1"
          class="description"
          :text="$t('description1')"
          :component-name="'Description'"
        ></wiz-text>
      </wiz-bg-container>

      <wiz-bg-container
        id="wrapper5"
        class="pa wrapper"
        :component-name="'Wrapper'"
      >
        <wiz-image
          id="icon8"
          class="pa icon"
          src="./media/images/icon8.png"
          :component-name="'Icon'"
        ></wiz-image>
        <wiz-image
          id="icon9"
          class="pa icon"
          src="./media/images/icon9.png"
          :component-name="'Icon'"
        ></wiz-image>
        <wiz-text
          id="title5"
          class="title title-stats"
          :text="$t('title4')"
          :component-name="'Title'"
        ></wiz-text>
        <wiz-text
          id="description2"
          class="description"
          :text="$t('description2')"
          :component-name="'Description'"
        ></wiz-text>
      </wiz-bg-container>

      <wiz-bg-container
        id="wrapper6"
        class="pa wrapper"
        :component-name="'Wrapper'"
      >
        <wiz-image
          id="icon10"
          class="pa icon"
          src="./media/images/icon10.png"
          :component-name="'Icon'"
        ></wiz-image>
        <wiz-image
          id="icon11"
          class="pa icon"
          src="./media/images/icon11.png"
          :component-name="'Icon'"
        ></wiz-image>
        <wiz-text
          id="title6"
          class="title title-stats"
          :text="$t('title4')"
          :component-name="'Title'"
        ></wiz-text>
        <wiz-text
          id="description3"
          class="description"
          :text="$t('description3')"
          :component-name="'Description'"
        ></wiz-text>
      </wiz-bg-container>

      <wiz-bg-container
        id="wrapper8"
        class="pa wrapper"
        :component-name="'Wrapper'"
      >
        <wiz-image
          id="icon12"
          class="pa icon"
          src="./media/images/icon12.png"
          :component-name="'Icon'"
        ></wiz-image>
        <wiz-image
          id="icon13"
          class="pa icon"
          src="./media/images/icon13.png"
          :component-name="'Icon'"
        ></wiz-image>
        <wiz-text
          id="title8"
          class="title title-stats"
          :text="$t('title4')"
          :component-name="'Title'"
        ></wiz-text>
        <wiz-text
          id="description4"
          class="description"
          :text="$t('description4')"
          :component-name="'Description'"
        ></wiz-text>
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
	}
};
</script>
<style scoped>
#chapterImage.chapter-background-image {
  left: 1px;
  width: 270px;
  height: 154px;
}

.caption {
  top: 0;
  left: 0;
  font-size: 25px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 1.2;
  text-align: center;
}

.icon.icon-graph {
  width: 23px;
  height: 19px;
}

.wrapper {
  top: 0;
  left: 0;
  width: 205px;
  height: 52px;
}

.icon {
  top: 0;
  left: 0;
  width: 70px;
  height: 70px;
}

.description {
  font-weight: 300;
  font-size: 15px;
  font-family: 'Open Sans', sans-serif;
  line-height: 19px;
  text-align: center;
}

.title {
  font-weight: 300;
  font-size: 17px;
  font-family: 'Open Sans', sans-serif;
  line-height: 20px;
}

.title.title-stats {
  font-weight: 300;
  font-size: 17px;
  font-family: 'Open Sans', sans-serif;
  line-height: 24px;
}

.title::v-deep .span-style1 b {
  font-weight: 800;
  font-size: 20px;
  font-family: 'Open Sans', sans-serif;
  line-height: 24px;
}
.title::v-deep .span-style2 {
  position: relative;
  width: 100%;
  font-size: 16px;
  transform: matrix(1, 0, 0, 1, -98, 0);
}

.icon-title {
  width: 47px;
  height: 47px;
}

#wrapper1 {
  border-bottom: 1px solid #4c4d4f;
  transform: matrix(1, 0, 0, 1, 1, 173);
}

#wrapper2 {
  width: 203px;
  height: 74px;
  border-bottom: 1px solid #4c4d4f;
  transform: matrix(1, 0, 0, 1, 243, 151);
}

#wrapper3 {
  width: 203px;
  height: 74px;
  border-bottom: 1px solid #4c4d4f;
  transform: matrix(1, 0, 0, 1, 477, 151);
}

#wrapper4 {
  width: 400px;
  transform: matrix(1, 0, 0, 1, 25, 275);
}

#wrapper5 {
  transform: matrix(1, 0, 0, 1, 237, 265);
}

#wrapper6 {
  transform: matrix(1, 0, 0, 1, 474, 266);
}

#wrapper8 {
  transform: matrix(1, 0, 0, 1, 714, 257);
}

#wrapper7 {
  width: 200px;
  height: 55px;
  border-bottom: 1px solid #4c4d4f;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 708, 170);
}

#title1 {
  text-align: center;
  transform: matrix(1, 0, 0, 1, -4, -24);
}

#title1 span span {
  display: inline-block;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 21, 0);
}

#title2 {
  width: 500px;
  text-align: center;
  transform: matrix(1, 0, 0, 1, -153, 0);
}

#title3 {
  text-align: center;
  transform: matrix(1, 0, 0, 1, 4, 0);
}

#title4 {
  transform: matrix(1, 0, 0, 1, -30, 102);
}

#title5 {
  width: 215px;
  text-align: center;
  transform: matrix(1, 0, 0, 1, -14, 111);
}

#title6 {
  width: 215px;
  transform: matrix(1, 0, 0, 1, -4, 109);
}

#title7 {
  transform: matrix(1, 0, 0, 1, 1, -19);
}

#title8 {
  width: 215px;
  transform: matrix(1, 0, 0, 1, -6, 117);
}

#icon1 {
  transform: matrix(1, 0, 0, 1, 1, -10);
}

#icon3 {
  transform: matrix(1, 0, 0, 1, 193, -16);
}

#icon6 {
  z-index: 2;
  width: 93px;
  height: 93px;
  transform: matrix(1, 0, 0, 1, -24, -3);
}

#icon7 {
  width: 114px;
  height: 114px;
  transform: matrix(1, 0, 0, 1, 63, -25);
}

#icon8 {
  z-index: 2;
  width: 100px;
  height: 101px;
  transform: matrix(1, 0, 0, 1, 0, -2);
}

#icon9 {
  width: 131px;
  height: 131px;
  transform: matrix(1, 0, 0, 1, 80, -32);
}

#icon10 {
  z-index: 2;
  width: 95px;
  height: 95px;
  transform: matrix(1, 0, 0, 1, 2, 4);
}

#icon11 {
  width: 114px;
  height: 114px;
  transform: matrix(1, 0, 0, 1, 89, -14);
}

#icon12 {
  z-index: 2;
  width: 75px;
  height: 76px;
  transform: matrix(1, 0, 0, 1, 1, 13);
}

#icon13 {
  width: 130px;
  height: 130px;
  transform: matrix(1, 0, 0, 1, 65, -24);
}

#description1 {
  transform: matrix(1, 0, 0, 1, -125, 105);
}

#description2 {
  transform: matrix(1, 0, 0, 1, 2, 115);
}

#description3 {
  transform: matrix(1, 0, 0, 1, 0, 114);
}

#description4 {
  transform: matrix(1, 0, 0, 1, -8, 123);
}

#caption1 {
  transform: matrix(1, 0, 0, 1, 137, -4);
}

#caption2 {
  font-weight: 800;
  font-size: 21px;
  font-family: 'Open Sans', sans-serif;
  line-height: 20px;
  transform: matrix(1, 0, 0, 1, 215, 99);
}

.line {
  top: 0;
  left: 0;
  width: 1px;
  height: 248px;
}

#line1 {
  transform: matrix(1, 0, 0, 1, 220, 223);
}

#line2 {
  transform: matrix(1, 0, 0, 1, 458, 224);
}

#line3 {
  transform: matrix(1, 0, 0, 1, 691, 227);
}

#footnote1 {
  transform: matrix(1, 0, 0, 1, -25, 113);
}

#footnote2 {
  transform: matrix(1, 0, 0, 1, -25, 148);
}

#footnote3 {
  width: 900px;
  transform: matrix(1, 0, 0, 1, -25, 125);
}
</style>
