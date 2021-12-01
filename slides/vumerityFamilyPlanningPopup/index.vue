<i18n>
{
  "deu": {
    "headline": "",
    "title": "<b style='color: #003865;'>TIME TO TREATMENT ELIMINATION FOR TYPICAL PATIENTS*</b>",
    "hScaleCaption": "<b style='color: #003865;'>Months</b>",
    "section1": "<span style='color: #4c4d4f;'>VUMERITY<sup>2</sup></span>",
    "section2": "<span style='color: #4c4d4f;'>TECFIDERA<sup>5</sup></span>",
    "section3": "<span style='color: #4c4d4f;'>CLADRIBINE<sup>9</sup></span>",
    "section4": "<span style='color: #4c4d4f;'>FINGOLIMOD<sup>10</sup></span>",
    "section5": "<span style='color: #4c4d4f;'>OZANIMOD<sup>11</sup></span>",
    "section6": "<span style='color: #4c4d4f;'>TERIFLUNOMIDE<sup>12</sup></span>",
    "xScale0": "<span style='color: #4c4d4f;'>0</span>",
    "xScale1": "<span style='color: #4c4d4f;'>2</span>",
    "xScale2": "<span style='color: #4c4d4f;'>4</span>",
    "xScale3": "<span style='color: #4c4d4f;'>6</span>",
    "xScale4": "<span style='color: #4c4d4f;'>8</span>",
    "xScale5": "<span style='color: #4c4d4f;'>10</span>",
    "xScale6": "<span style='color: #4c4d4f;'>12</span>",
    "xScale7": "<span style='color: #4c4d4f;'>14</span>",
    "xScale8": "<span style='color: #4c4d4f;'>16</span>",
    "xScale9": "<span style='color: #4c4d4f;'>18</span>",
    "xScale10": "<span style='color: #4c4d4f;'>20</span>",
    "xScale11": "<span style='color: #4c4d4f;'>22</span>",
    "xScale12": "<span style='color: #4c4d4f;'>24</span>",
    "note1": "<b style='color: #003865;'>24 hours</b>",
    "note2": "<b style='color: #003865;'>24 hours</b>",
    "note3": "<b style='color: #003865;'>24 hours</b>",
    "note4": "<b style='color: #003865;'>2 months</b>",
    "note5": "<b style='color: #003865;'>3 months</b>",
    "note6": "<b style='color: #003865;'>8 months up<br>to 2 years</b>",
    "footnote1": "<span style='color: #4c4d4f;'>* The time it takes before the active substance is eliminated from the body in a majority of patients.</span>",
    "hiddenRefs": "<sup refs='ref21 ref1 ref58 ref59 ref38 ref43 ref3 ref8 ref39 ref40 ref41 ref42'></sup>"
  }
}
</i18n>

<template>
  <wiz-slide class="slide-popup"
        @slideswipe.native.stop>
    <wiz-bg-container class="custom-popup">
      <wiz-bg-close-popup-button
        class="popup-close"
        :component-name="'Close popup button'"
      ></wiz-bg-close-popup-button>
      <wiz-bg-grid-container
        class="headline-wrapper"
        component-name="Headline &amp; Subhead container"
      >
        <!--content here-->
      </wiz-bg-grid-container>
      <wiz-bg-grid-container
        class="content-area"
        component-name="Content area"
      >
        <wiz-text
          id="title"
          :text="$t('title')"
          component-name="Title"
        ></wiz-text>
        <wiz-bg-container
          id="graphWrapper"
          component-name="Graph container"
        >
          <wiz-image
            id="graphImage"
            class="fill"
            src="./media/images/graph-image.png"
          ></wiz-image>
          <wiz-bg-container
            id="scaleWrapperY"
            component-name="Scale container"
          >
            <wiz-text
              id="section1"
              :text="$t('section1')"
              class="scale-y-value"
              component-name="Scale"
            ></wiz-text>
            <wiz-text
              id="section2"
              :text="$t('section2')"
              class="scale-y-value"
              component-name="Scale"
            ></wiz-text>
            <wiz-text
              id="section3"
              :text="$t('section3')"
              class="scale-y-value"
              component-name="Scale"
            ></wiz-text>
            <wiz-text
              id="section4"
              :text="$t('section4')"
              class="scale-y-value"
              component-name="Scale"
            ></wiz-text>
            <wiz-text
              id="section5"
              :text="$t('section5')"
              class="scale-y-value"
              component-name="Scale"
            ></wiz-text>
            <wiz-text
              id="section6"
              :text="$t('section6')"
              class="scale-y-value"
              component-name="Scale"
            ></wiz-text>
          </wiz-bg-container>
          <wiz-bg-container
            id="scaleWrapperX"
            component-name="Scale container"
          >
            <wiz-text
              id="xScale0"
              :text="$t('xScale0')"
              class="scale-x-value"
              component-name="Scale"
            ></wiz-text>
            <wiz-text
              id="xScale1"
              :text="$t('xScale1')"
              class="scale-x-value"
              component-name="Scale"
            ></wiz-text>
            <wiz-text
              id="xScale2"
              :text="$t('xScale2')"
              class="scale-x-value"
              component-name="Scale"
            ></wiz-text>
            <wiz-text
              id="xScale3"
              :text="$t('xScale3')"
              class="scale-x-value"
              component-name="Scale"
            ></wiz-text>
            <wiz-text
              id="xScale4"
              :text="$t('xScale4')"
              class="scale-x-value"
              component-name="Scale"
            ></wiz-text>
            <wiz-text
              id="xScale5"
              :text="$t('xScale5')"
              class="scale-x-value"
              component-name="Scale"
            ></wiz-text>
            <wiz-text
              id="xScale6"
              :text="$t('xScale6')"
              class="scale-x-value"
              component-name="Scale"
            ></wiz-text>
            <wiz-text
              id="xScale7"
              :text="$t('xScale7')"
              class="scale-x-value"
              component-name="Scale"
            ></wiz-text>
            <wiz-text
              id="xScale8"
              :text="$t('xScale8')"
              class="scale-x-value"
              component-name="Scale"
            ></wiz-text>
            <wiz-text
              id="xScale9"
              :text="$t('xScale9')"
              class="scale-x-value"
              component-name="Scale"
            ></wiz-text>
            <wiz-text
              id="xScale10"
              :text="$t('xScale10')"
              class="scale-x-value"
              component-name="Scale"
            ></wiz-text>
            <wiz-text
              id="xScale11"
              :text="$t('xScale11')"
              class="scale-x-value"
              component-name="Scale"
            ></wiz-text>
            <wiz-text
              id="xScale12"
              :text="$t('xScale12')"
              class="scale-x-value"
              component-name="Scale"
            ></wiz-text>
          </wiz-bg-container>
          <wiz-text
            id="note1"
            :text="$t('note1')"
            class="graph-value"
            component-name="Graph value"
          ></wiz-text>
          <wiz-text
            id="note2"
            :text="$t('note2')"
            class="graph-value"
            component-name="Graph value"
          ></wiz-text>
          <wiz-text
            id="note3"
            :text="$t('note3')"
            class="graph-value"
            component-name="Graph value"
          ></wiz-text>
          <wiz-text
            id="note4"
            :text="$t('note4')"
            class="graph-value"
            component-name="Graph value"
          ></wiz-text>
          <wiz-text
            id="note5"
            :text="$t('note5')"
            class="graph-value"
            component-name="Graph value"
          ></wiz-text>
          <wiz-text
            id="note6"
            :text="$t('note6')"
            class="graph-value"
            component-name="Graph value"
          ></wiz-text>
          <wiz-text
            id="hScaleCaption"
            :text="$t('hScaleCaption')"
            class="graph-value"
            component-name="Scale caption"
          ></wiz-text>
        </wiz-bg-container>
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
        <wiz-text
          id="footnote1"
          class="footnote"
          :text="$t('footnote1')"
          component-name="Footnote"
        ></wiz-text>
        <!--content here-->
      </wiz-bg-grid-container>
    </wiz-bg-container>
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
#title {
  position: absolute;
  top: 0;
  left: 0;
  width: 790px;
  color: #003865;
  font-size: 25px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 30px;
  text-align: center;
  transform: matrix(1, 0, 0, 1, -9, -73);
}

#graphWrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 717px;
  height: 329px;
  margin: 0;
  transform: matrix(1, 0, 0, 1, 41, 34);
}

#scaleWrapperY{
  position: absolute;
  top: 0;
  left: 0;
  width: 97px;
  height: 324px;
  transform: matrix(1, 0, 0, 1, -105, 0);
}
.scale-y-value{
  position: absolute;
  width: 100%;
  font-size: 15px;
  font-family: 'Open Sans Condensed', sans-serif;
  text-align: right;
}

#section1{
  transform: matrix(1, 0, 0, 1, -2, 15);
}
#section2{
  transform: matrix(1, 0, 0, 1, -2, 69);
}
#section3{
  transform: matrix(1, 0, 0, 1, -2, 124);
}
#section4{
  transform: matrix(1, 0, 0, 1, 0, 177);
}
#section5{
  transform: matrix(1, 0, 0, 1, 0, 232);
}
#section6{
  transform: matrix(1, 0, 0, 1, 0, 286);
}

#footnote1 {
  transform: matrix(1, 0, 0, 1, -62, 122);
}

#scaleWrapperX{
  position: absolute;
  top: 0;
  left: 0;
  width: 734px;
  height: 32px;
  transform: matrix(1, 0, 0, 1, -8, 328);
}
.scale-x-value{
  position: absolute;
  width: 20px;
  font-size: 14px;
  font-family: 'Open Sans Condensed', sans-serif;
  text-align: center;
}

#xScale0{
  transform: matrix(1, 0, 0, 1, -2, 0);
}
#xScale1{
  transform: matrix(1, 0, 0, 1, 58, 0);
}
#xScale2{
  transform: matrix(1, 0, 0, 1, 118, 0);
}
#xScale3{
  transform: matrix(1, 0, 0, 1, 177, 0);
}
#xScale4{
  transform: matrix(1, 0, 0, 1, 237, 0);
}
#xScale5{
  transform: matrix(1, 0, 0, 1, 297, 0);
}
#xScale6{
  transform: matrix(1, 0, 0, 1, 356, 0);
}
#xScale7{
  transform: matrix(1, 0, 0, 1, 416, 0);
}
#xScale8{
  transform: matrix(1, 0, 0, 1, 476, 0);
}
#xScale9{
  transform: matrix(1, 0, 0, 1, 534, 0);
}
#xScale10{
  transform: matrix(1, 0, 0, 1, 594, 0);
}
#xScale11{
  transform: matrix(1, 0, 0, 1, 654, 0);
}
#xScale12{
  transform: matrix(1, 0, 0, 1, 714, 0);
}
.graph-value{
  position: absolute;
  top: 0;
  left: 0;
  color: #003865;
  font-size: 20px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 22px;
}
#note1{
  transform: matrix(1, 0, 0, 1, 11, 14);
}
#note2{
  transform: matrix(1, 0, 0, 1, 11, 68);
}
#note3{
  transform: matrix(1, 0, 0, 1, 11, 123);
}
#note4{
  transform: matrix(1, 0, 0, 1, 66, 177);
}
#note5{
  transform: matrix(1, 0, 0, 1, 95, 231);
}
#note6{
  transform: matrix(1, 0, 0, 1, 721, 274);
}
#hScaleCaption{
  width: 200px;
  font-size: 15px;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 258, 348);
}
</style>
