<i18n>
{
  "deu": {
    "headline": "<span style='color: #003865;'><b>VUMERITY SIGNIFICANTLY REDUCED ARR FROM BASELINE TO WEEK 96 <br>ACROSS ALL POPULATIONS<sup>1</sup>*</b></span>",
    "verticalLegend":"<span style='color: #4c4d4f;'>Adjusted ARR (95% CI)</span>",
    "gr1vScale1":"<span style='color: #4c4d4f;'>1.5</span>",
    "gr1vScale2":"<span style='color: #4c4d4f;'>1.0</span>",
    "gr1vScale3":"<span style='color: #4c4d4f;'>0.5</span>",
    "gr1vScale4":"<span style='color: #4c4d4f;'>0.0</span>",
    "gr1bar1value1":"<span  style='color: #003865;'><b>0.70</b></span>",
    "gr1bar1value2":"<span style='color: #4c4d4f;'>(0.66-0.75)</span>",
    "gr1bar2value1":"<span  style='color: #003865;'><b>0.14</b></span>",
    "gr1bar2value2":"<span style='color: #4c4d4f;'>(0.12-0.17)</span>",
    "gr1bar3value1":"<span  style='color: #003865;'><b>1.15</b></span>",
    "gr1bar3value2":"<span style='color: #4c4d4f;'>(1.03-1.29)</span>",
    "gr1bar4value1":"<span  style='color: #003865;'><b>0.13</b></span>",
    "gr1bar4value2":"<span style='color: #4c4d4f;'>(0.07-0.22)</span>",
    "gr1bar5value1":"<span  style='color: #003865;'><b>0.55</b></span>",
    "gr1bar5value2":"<span style='color: #4c4d4f;'>(0.47-0.64)</span>",
    "gr1bar6value1":"<span  style='color: #003865;'><b>0.15</b></span>",
    "gr1bar6value2":"<span style='color: #4c4d4f;'>(0.11-0.20)</span>",
    "gr1bar1label":"<span  style='color: #003865;'><b>12 months <br>before <br>study entry</b></span>",
    "gr1bar2label":"<span  style='color: #003865;'><b>On <br>VUMERITY</b></span>",
    "gr1bar3label":"<span  style='color: #003865;'><b>12 months <br>before <br>study entry</b></span>",
    "gr1bar4label":"<span  style='color: #003865;'><b>On <br>VUMERITY</b></span>",
    "gr1bar5label":"<span  style='color: #003865;'><b>12 months <br>before <br>study entry</b></span>",
    "gr1bar6label":"<span  style='color: #003865;'><b>On <br>VUMERITY</b></span>",
    "bbl1Number": "<b>80.4</b>",
    "bbl1Text": "<b>REDUCTION</b>",
    "bbl1Description":"(95% CI: 76.6–83.6)<br><i>P</i>&lt;0.0001",
    "bbl2Number": "<b>88.9</b>",
    "bbl2Text": "<b>REDUCTION</b>",
    "bbl2Description":"(95% CI: 80.4–93.7)<br><i>P</i>&lt;0.0001",
    "bbl3Number": "<b>73.1</b>",
    "bbl3Text": "<b>REDUCTION</b>",
    "bbl3Description":"(95% CI: 64.0–79.9)<br><i>P</i>&lt;0.0001",
    "bar1value1":"<span  style='color: #003865;'><b>Overall population</b></span>",
    "bar1value2":"<span style='color: #4c4d4f;'>(n=1051)</span>",
    "bar2value1":"<span  style='color: #003865;'><b>Newly diagnosed</b></span>",
    "bar2value2":"<span style='color: #4c4d4f;'>(n=109)</span>",
    "bar3value1":"<span  style='color: #003865;'><b>IFN/GA Switch</b></span>",
    "bar3value2":"<span style='color: #4c4d4f;'>(n=338)</span>",
    "footnote1": "<span style='color: #4c4d4f;'>* EVOLVE-MS-1 data cut: July 2019. Calculation of ARR was based on patient-reported relapses in the 12 months before study entry compared with protocol-defined relapses <br>during the study period.</span>",
    "footnote2": "<span style='color: #4c4d4f;'><b style='color: #003865;'>ARR:</b> Annualised Relapse Rate; <b style='color: #003865;'>CI:</b> Confidence Interval; <b style='color: #003865;'>GA:</b> Glatiramer Acetate; <b style='color: #003865;'>IFN:</b> Interferon.</span>",
    "hiddenRefs": "<sup refs='ref8 ref9'>1</sup>"
  }
}
</i18n>

<template>
  <wiz-slide class="slide-popup"
        @slideswipe.native.stop>
    <wiz-bg-container class="custom-popup">
      <wiz-bg-close-popup-button
        :component-name="'Close popup button'"
        class="close-slide-popup-button"
      ></wiz-bg-close-popup-button>
      <wiz-bg-grid-container
        id="headlineWrapper"
        class="headline-wrapper"
        :component-name="'Headline & Subhead container'"
      >
        <wiz-text
          id="headline"
          class="headline-caption"
          :text="$t('headline')"
          :component-name="'Headline'"
        ></wiz-text>
      </wiz-bg-grid-container>

      <wiz-bg-grid-container
        id="contentArea"
        class="content-area"
        :component-name="'Content area'"
      >
        <wiz-bg-container
          id="graphWrapper"
          :component-name="'Graph wrapper'"
        >
          <wiz-bg-container
            class="graph-scale pa"
            :component-name="'Graph scale'"
          >
            <wiz-bg-container
              class="vertical-scale pa"
              :component-name="'Vertical scale wrapper'"
            >
              <wiz-text
                id="gr1vScale1"
                class="pa g-s gs1"
                :text="$t('gr1vScale1')"
                :component-name="'Vertical scale item'"
              ></wiz-text>
              <wiz-text
                id="gr1vScale2"
                class="pa g-s gs2"
                :text="$t('gr1vScale2')"
                :component-name="'Vertical scale item'"
              ></wiz-text>
              <wiz-text
                id="gr1vScale3"
                class="pa g-s gs3"
                :text="$t('gr1vScale3')"
                :component-name="'Vertical scale item'"
              ></wiz-text>
              <wiz-text
                id="gr1vScale4"
                class="pa g-s gs4"
                :text="$t('gr1vScale4')"
                :component-name="'Vertical scale item'"
              ></wiz-text>
            </wiz-bg-container>
            <wiz-text
              id="verticalLegend"
              class="pa v-l"
              :text="$t('verticalLegend')"
              :component-name="'Vertical legend'"
            ></wiz-text>

            <wiz-image
              id="tab1Bar1"
              class="pa"
              :src="'./media/images/bar-1.png'"
              :component-name="'Bar'"
            ></wiz-image>
            <wiz-image
              id="tab1Bar2"
              class="pa"
              :src="'./media/images/bar-2.png'"
              :component-name="'Bar'"
            ></wiz-image>
            <wiz-image
              id="tab1Bar3"
              class="pa"
              :src="'./media/images/bar-3.png'"
              :component-name="'Bar'"
            ></wiz-image>
            <wiz-image
              id="tab1Bar4"
              class="pa"
              :src="'./media/images/bar-4.png'"
              :component-name="'Bar'"
            ></wiz-image>
            <wiz-image
              id="tab1Bar5"
              class="pa"
              :src="'./media/images/bar-5.png'"
              :component-name="'Bar'"
            ></wiz-image>
            <wiz-image
              id="tab1Bar6"
              class="pa"
              :src="'./media/images/bar-6.png'"
              :component-name="'Bar'"
            ></wiz-image>

            <wiz-text
              id="gr1bar1label"
              class="pa b-l"
              :text="$t('gr1bar1label')"
              :component-name="'Bar label'"
            ></wiz-text>
            <wiz-text
              id="gr1bar2label"
              class="pa b-l"
              :text="$t('gr1bar2label')"
              :component-name="'Bar label'"
            ></wiz-text>
            <wiz-text
              id="gr1bar3label"
              class="pa b-l"
              :text="$t('gr1bar3label')"
              :component-name="'Bar label'"
            ></wiz-text>
            <wiz-text
              id="gr1bar4label"
              class="pa b-l"
              :text="$t('gr1bar4label')"
              :component-name="'Bar label'"
            ></wiz-text>
            <wiz-text
              id="gr1bar5label"
              class="pa b-l"
              :text="$t('gr1bar5label')"
              :component-name="'Bar label'"
            ></wiz-text>
            <wiz-text
              id="gr1bar6label"
              class="pa b-l"
              :text="$t('gr1bar6label')"
              :component-name="'Bar label'"
            ></wiz-text>

            <wiz-image
              id="line1"
              class="line"
              :src="'./media/images/line1.png'"
              :component-name="'Line'"
            ></wiz-image>
            <wiz-image
              id="line2"
              class="line"
              :src="'./media/images/line2.png'"
              :component-name="'Line'"
            ></wiz-image>
            <wiz-image
              id="line3"
              class="line"
              :src="'./media/images/line3.png'"
              :component-name="'Line'"
            ></wiz-image>

            <wiz-text
              id="gr1bar1value1"
              class="pa b-v1"
              :text="$t('gr1bar1value1')"
              :component-name="'Graph note'"
            ></wiz-text>
            <wiz-text
              id="gr1bar1value2"
              class="pa b-v2"
              :text="$t('gr1bar1value2')"
              :component-name="'Graph note'"
            ></wiz-text>
            <wiz-text
              id="gr1bar2value1"
              class="pa b-v1"
              :text="$t('gr1bar2value1')"
              :component-name="'Graph note'"
            ></wiz-text>
            <wiz-text
              id="gr1bar2value2"
              class="pa b-v2"
              :text="$t('gr1bar2value2')"
              :component-name="'Graph note'"
            ></wiz-text>
            <wiz-text
              id="gr1bar3value1"
              class="pa b-v1"
              :text="$t('gr1bar3value1')"
              :component-name="'Graph note'"
            ></wiz-text>
            <wiz-text
              id="gr1bar3value2"
              class="pa b-v2"
              :text="$t('gr1bar3value2')"
              :component-name="'Graph note'"
            ></wiz-text>
            <wiz-text
              id="gr1bar4value1"
              class="pa b-v1"
              :text="$t('gr1bar4value1')"
              :component-name="'Graph note'"
            ></wiz-text>
            <wiz-text
              id="gr1bar4value2"
              class="pa b-v2"
              :text="$t('gr1bar4value2')"
              :component-name="'Graph note'"
            ></wiz-text>
            <wiz-text
              id="gr1bar5value1"
              class="pa b-v1"
              :text="$t('gr1bar5value1')"
              :component-name="'Graph note'"
            ></wiz-text>
            <wiz-text
              id="gr1bar5value2"
              class="pa b-v2"
              :text="$t('gr1bar5value2')"
              :component-name="'Graph note'"
            ></wiz-text>
            <wiz-text
              id="gr1bar6value1"
              class="pa b-v1"
              :text="$t('gr1bar6value1')"
              :component-name="'Graph note'"
            ></wiz-text>
            <wiz-text
              id="gr1bar6value2"
              class="pa b-v2"
              :text="$t('gr1bar6value2')"
              :component-name="'Graph note'"
            ></wiz-text>

            <wiz-image
              id="icon1"
              class="icon"
              :src="'./media/images/icon1.png'"
              :component-name="'Icon'"
            ></wiz-image>
            <wiz-image
              id="icon2"
              class="icon"
              :src="'./media/images/icon2.png'"
              :component-name="'Icon'"
            ></wiz-image>
            <wiz-image
              id="icon3"
              class="icon"
              :src="'./media/images/icon3.png'"
              :component-name="'Icon'"
            ></wiz-image>
            <wiz-image
              id="icon4"
              class="icon"
              :src="'./media/images/icon4.png'"
              :component-name="'Icon'"
            ></wiz-image>
            <wiz-image
              id="icon5"
              class="icon"
              :src="'./media/images/icon5.png'"
              :component-name="'Icon'"
            ></wiz-image>
            <wiz-image
              id="icon6"
              class="icon"
              :src="'./media/images/icon6.png'"
              :component-name="'Icon'"
            ></wiz-image>
          </wiz-bg-container>

          <wiz-bg-bubble
            id="bubble1"
            class="bbls"
            :arrow="'./media/images/arrow.png'"
            :show-before-text="false"
            :after-text="$t('bbl1Text')"
            :number="$t('bbl1Number')"
            :description="$t('bbl1Description')"
            :component-name="'Bubble'"
          ></wiz-bg-bubble>
          <wiz-bg-bubble
            id="bubble2"
            class="bbls"
            :arrow="'./media/images/arrow.png'"
            :show-before-text="false"
            :after-text="$t('bbl2Text')"
            :number="$t('bbl2Number')"
            :description="$t('bbl2Description')"
            :component-name="'Bubble'"
          ></wiz-bg-bubble>
          <wiz-bg-bubble
            id="bubble3"
            class="bbls"
            :arrow="'./media/images/arrow.png'"
            :show-before-text="false"
            :after-text="$t('bbl3Text')"
            :number="$t('bbl3Number')"
            :description="$t('bbl3Description')"
            :component-name="'Bubble'"
          ></wiz-bg-bubble>
        </wiz-bg-container>

        <div
          id="barItemsWr1"
          class="pa bar-i-wrapper"
        >
          <wiz-text
            id="bar1value1"
            class="pa b-v1_2"
            :text="$t('bar1value1')"
            :component-name="'Graph note'"
          ></wiz-text>
          <wiz-text
            id="bar1value2"
            class="pa b-v2_2"
            :text="$t('bar1value2')"
            :component-name="'Graph note'"
          ></wiz-text>
        </div>
        <div
          id="barItemsWr2"
          class="pa bar-i-wrapper"
        >
          <wiz-text
            id="bar2value1"
            class="pa b-v1_2"
            :text="$t('bar2value1')"
            :component-name="'Graph note'"
          ></wiz-text>
          <wiz-text
            id="bar2value2"
            class="pa b-v2_2"
            :text="$t('bar2value2')"
            :component-name="'Graph note'"
          ></wiz-text>
        </div>
        <div
          id="barItemsWr3"
          class="pa bar-i-wrapper"
        >
          <wiz-text
            id="bar3value1"
            class="pa b-v1_2"
            :text="$t('bar3value1')"
            :component-name="'Graph note'"
          ></wiz-text>
          <wiz-text
            id="bar3value2"
            class="pa b-v2_2"
            :text="$t('bar3value2')"
            :component-name="'Graph note'"
          ></wiz-text>
        </div>
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
          id="hiddenRefs"
          class="hidden"
          :text="$t('hiddenRefs')"
          :component-name="'Hidden references'"
        ></wiz-text>
      </wiz-bg-grid-container>
    </wiz-bg-container>
  </wiz-slide>
</template>
<script>
import wizBgBubble from '../../node_modules/wiz-bg-bubble/index.vue';

export default {
  components: {
    wizBgBubble,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.pa {
  position: absolute;
  top: 0;
  left: 0;
}
#graphWrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 800px;
  height: 470px;
  transform: matrix(1, 0, 0, 1, -22, -19);
}

.line {
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
}

#line1 {
  width: 98px;
  height: 176px;
  transform: matrix(1, 0, 0, 1, 60, -12);
}

#line2 {
  height: 190px;
  transform: matrix(1, 0, 0, 1, 276, -32);
}

#line3 {
  height: 131px;
  transform: matrix(1, 0, 0, 1, 495, 34);
}

#graph {
  position: absolute;
  top: 0;
  left: 0;
  width: 778px;
  height: 241px;
  transform: matrix(1, 0, 0, 1, -25, 44);
}

#graph .scale .scale-item:last-of-type {
  border-top: none;
}

#graph .i-value {
  color: #003865;
  font: 700 25px/28px 'Open Sans Condensed', sans-serif;
}

#graph .i-label {
  color: #4c4d4f;
  font: 300 18px/1 'Open Sans Condensed', sans-serif;
}

#graph .bar-label {
  width: 100px;
  color: #003865;
  font: 15px/16px 'Open Sans Condensed', sans-serif;
}

#graph .nest-label {
  margin-top: 26px;
  color: #4c4d4f;
  font: 300 15px/18px 'Open Sans Condensed', sans-serif;
  text-align: center;
}

#graph .nest-label b {
  color: #003865;
  font-weight: 800;
  font-family: 'Open Sans', sans-serif;
}

#graph .bars {
  padding: 0 23px 0 17px;
}

#graph .nest:last-of-type .bars {
  padding: 0 28px 0 13px;
}

#graph .nest:nth-last-of-type(2) .bars {
  padding: 0 25px 0 15px;
}

#graph .vertical-legend {
  left: 34px;
  font: 300 17px 'Open Sans Condensed', sans-serif;
}

#graph .bar-wrapper:first-of-type {
  margin-right: 34px;
}

#graph .item-value {
  width: 94px;
}

#graph .nest:nth-of-type(1) .bar-wrapper:first-of-type .item-value {
  top: -57px;
}

#graph .nest:nth-of-type(1) .bar-wrapper:last-of-type .item-value {
  top: -54px;
}

#graph .nest:nth-of-type(2) .bar-wrapper:first-of-type .item-value {
  top: -70px;
}

#graph .nest:nth-of-type(2) .bar-wrapper:last-of-type .item-value {
  top: -62px;
}

#graph .nest:nth-of-type(3) .bar-wrapper:first-of-type .item-value {
  top: -65px;
}

#graph .nest:nth-of-type(3) .bar-wrapper:last-of-type .item-value {
  top: -56px;
}

#graph .scale-value {
  margin-right: -8px;
  font: 300 15px 'Open Sans Condensed', sans-serif;
}

#graph .nest-label-container {
  bottom: -32px;
  left: 108px;
  width: 149px;
  border-top: 1px solid #4c4d4f;
}

.icon::v-deep img {
  display: block;
}
.icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
}

#icon1 {
  height: 15px;
  transform: matrix(1, 0, 0, 1, 55, 121);
}

#icon2 {
  height: 9px;
  transform: matrix(1, 0, 0, 1, 155, 214);
}

#icon3 {
  height: 42px;
  transform: matrix(1, 0, 0, 1, 274, 34);
}

#icon4 {
  height: 24px;
  transform: matrix(1, 0, 0, 1, 374, 207);
}

#icon5 {
  height: 28px;
  transform: matrix(1, 0, 0, 1, 493, 138);
}

#icon6 {
  height: 15px;
  transform: matrix(1, 0, 0, 1, 592, 210);
}

.graph-bubble {
  position: absolute;
  top: 0;
  left: 0;
}

#footnote1 {
  width: 810px;
  transform: matrix(1, 0, 0, 1, -68, 94);
}

#footnote2 {
  width: 810px;
  transform: matrix(1, 0, 0, 1, -68, 125);
}
#headline {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 25px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 30px;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 51, 81);
}
#app .graph-scale {
  width: 662px;
  height: 241px;
  border-bottom: 1px solid #808080;
  border-left: 1px solid #808080;
  transform: matrix(1, 0, 0, 1, 75, 94);
}
.b-v2 {
  width: 70px;
  height: 30px;
  color: #4c4d4f;
  font-weight: 400;
  font-size: 18px;
  font-family: 'Open Sans Condensed', sans-serif;
}
.b-v1{
  width: 50px;
  height: 30px;
  font-size: 25px;
  font-family: 'Open Sans Condensed', sans-serif;
}
#gr1bar1value1 {
  transform: matrix(1, 0, 0, 1, 37, 69);
}
#gr1bar1value2 {
  transform: matrix(1, 0, 0, 1, 25, 97);
}
#gr1bar2value1 {
  transform: matrix(1, 0, 0, 1, 137, 162);
}
#gr1bar2value2 {
  transform: matrix(1, 0, 0, 1, 125, 190);
}
#gr1bar3value1 {
  transform: matrix(1, 0, 0, 1, 256, -17);
}
#gr1bar3value2 {
  transform: matrix(1, 0, 0, 1, 244, 12);
}
#gr1bar4value1 {
  transform: matrix(1, 0, 0, 1, 356, 155);
}
#gr1bar4value2 {
  transform: matrix(1, 0, 0, 1, 344, 183);
}
#gr1bar5value1 {
  transform: matrix(1, 0, 0, 1, 475, 85);
}
#gr1bar5value2 {
  transform: matrix(1, 0, 0, 1, 463, 113);
}
#gr1bar6value1 {
  transform: matrix(1, 0, 0, 1, 574, 158);
}
#gr1bar6value2 {
  transform: matrix(1, 0, 0, 1, 562, 186);
}
#app .v-l {
  top: 110px;
  left: -117px;
  font-size: 17px;
  font-family: 'Open Sans Condensed', sans-serif;
  transform: rotate(-90deg);
}
#app .vertical-scale {
  width: 40px;
  height: 280px;
  transform: matrix(1, 0, 0, 1, -34, -18);
}
.gs1 {
  transform: matrix(1, 0, 0, 1, 13, 7);
}
.gs2 {
  transform: matrix(1, 0, 0, 1, 13, 89);
}
.gs3 {
  transform: matrix(1, 0, 0, 1, 13, 169);
}
.gs4 {
  transform: matrix(1, 0, 0, 1, 13, 250);
}
.g-s {
  font-size: 15px;
  font-family: 'Open Sans Condensed', sans-serif;
}
#app .b-l {
  width: 110px;
  height: 40px;
  font-size: 15px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 16px;
  text-align: center;
}
#gr1bar1label{
  transform: matrix(1, 0, 0, 1, 3, 251);
}
#gr1bar2label{
  transform: matrix(1, 0, 0, 1, 103, 251);
}
#gr1bar3label{
  transform: matrix(1, 0, 0, 1, 222, 251);
}
#gr1bar4label{
  transform: matrix(1, 0, 0, 1, 322, 251);
}
#gr1bar5label{
  transform: matrix(1, 0, 0, 1, 440, 251);
}
#gr1bar6label{
  transform: matrix(1, 0, 0, 1, 540, 251);
}

#bubble1 {
  transform: matrix(1, 0, 0, 1, 180, 30);
}

#bubble2 {
  transform: matrix(1, 0, 0, 1, 398, 8);
}

#bubble3 {
  transform: matrix(1, 0, 0, 1, 616, 73);
}
#tab1Bar1 {
  width: 51px;
  height: 113px;
  transform: matrix(1, 0, 0, 1, 32, 128);
}
#tab1Bar2 {
  width: 52px;
  height: 23px;
  transform: matrix(1, 0, 0, 1, 132, 218);
}
#tab1Bar3 {
  width: 52px;
  height: 186px;
  transform: matrix(1, 0, 0, 1, 251, 56);
}
#tab1Bar4 {
  width: 52px;
  height: 23px;
  transform: matrix(1, 0, 0, 1, 351, 219);
}
#tab1Bar5 {
  width: 52px;
  height: 90px;
  transform: matrix(1, 0, 0, 1, 469, 152);
}
#tab1Bar6 {
  width: 51px;
  height: 26px;
  transform: matrix(1, 0, 0, 1, 569, 216);
}

.bar-i-wrapper{
  width: 149px;
  height: 45px;
  border-top: 1px solid #808080;
}
.b-v1_2::v-deep b{
  font-weight: 800;
}
.b-v1_2{
  font-size: 15px;
}
.b-v2_2{
  font-size: 15px;
  font-family: 'Open Sans Condensed', sans-serif;
}
#barItemsWr1{
  transform: matrix(1, 0, 0, 1, 88, 401);
}
#bar1value1{
  transform: matrix(1, 0, 0, 1, 2, 3);
}
#bar1value2 {
  transform: matrix(1, 0, 0, 1, 52, 22);
}
#barItemsWr2{
  transform: matrix(1, 0, 0, 1, 309, 401);
}
#bar2value1{
  transform: matrix(1, 0, 0, 1, 7, 3);
}
#bar2value2{
  transform: matrix(1, 0, 0, 1, 55, 22);
}
#barItemsWr3{
  transform: matrix(1, 0, 0, 1, 530, 401);
}
#bar3value1{
  transform: matrix(1, 0, 0, 1, 19, 2);
}
#bar3value2{
  transform: matrix(1, 0, 0, 1, 55, 22);
}
</style>
