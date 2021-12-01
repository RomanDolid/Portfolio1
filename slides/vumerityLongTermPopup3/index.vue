<i18n>
{
  "deu": {
    "headline": "<span style='color: #003865;'><b>PATIENTS TREATED WITH TECFIDERA EXPERIENCE PBVC<br>COMPARABLE TO HEALTHY INDIVIDUALS<sup>4</sup></b></span>",
    "title": "<span style='color: #003865;'><b>Percentage of brain volume change by year of TECFIDERA treatment in ENDORSE</b></span>",
    "caption": "<span style='color: #4c4d4f;'>Estimated yearly<br>brain volume loss in<br>healthy adults<sup>4</sup><br>(−0.1 to 0.3%, annually)</span>",
    "verticalLegend": "<span style='color: #4c4d4f;'>Adjusted yearly mean PBVC (95% CI)</span>",
    "y1": "<span style='color: #4c4d4f;'>0.0</span>",
    "y2": "<span style='color: #4c4d4f;'>-0.2</span>",
    "y3": "<span style='color: #4c4d4f;'>-0.4</span>",
    "y4": "<span style='color: #4c4d4f;'>-0.6</span>",
    "x1": "<span style='color: #003865;'><b>Year 4</b></span>",
    "x2": "<span style='color: #003865;'><b>Year 5</b></span>",
    "x3": "<span style='color: #003865;'><b>Year 6</b></span>",
    "x4": "<span style='color: #003865;'><b>Year 7</b></span>",
    "x5": "<span style='color: #003865;'><b>Year 8</b></span>",
    "num1": "<span style='color: #4c4d4f;'><b style='color: #003865;'>-0.22</b><br>(n=134)</span>",
    "num2": "<span style='color: #4c4d4f;'><b style='color: #003865;'>-0.28</b><br>(n=116)</span>",
    "num3": "<span style='color: #4c4d4f;'><b style='color: #003865;'>-0.37</b><br>(n=114)</span>",
    "num4": "<span style='color: #4c4d4f;'><b style='color: #003865;'>-0.22</b><br>(n=108)</span>",
    "num5": "<span style='color: #4c4d4f;'><b style='color: #003865;'>-0.19</b><br>(n=89)</span>",
    "footnote1": "<span style='color: #4c4d4f;'>Adapted from Gold <i>et al.</i> 2020.</span>",
    "footnote2": "<span style='color: #4c4d4f;'>Adjusted yearly PBVC change from previous year compared with the annual summary from the TEC/TEC group in the ENDORSE MRI cohort. All patients treated with TEC BID continuously from DEFINE/<br>CONFIRM and ENDORSE were included due to sample size restrictions. Data after patients switched to alternative multiple sclerosis medications were excluded. Adjusted mean, standard error, treatment<br>group difference and 95% CI from analysis of covariance model adjusted for region and baseline T2 lesion volume. Number of patients with an MRI is shown for each time point.</span>",
    "footnote3": "<span style='color: #4c4d4f;'>The effect of Tecfidera on brain atrophy was a tertiary objective in DEFINE/CONFIRM.</span>",
    "footnote4": "<span style='color: #4c4d4f;'><b style='color: #003865;'>BID:</b> Twice Daily; <b style='color: #003865;'>CI:</b> Confidence Interval; <b style='color: #003865;'>EDSS:</b> Expanded Disability Status Scale; <b style='color: #003865;'>MRI:</b> Magnetic Resonance Imaging; <b style='color: #003865;'>MS:</b> Mulitple Sclerosis; <b style='color: #003865;'>PBVC:</b> Percentage Brain Volume Change; <b style='color: #003865;'>TEC:</b> Tecfidera.</span>",
    "hiddenRefs": "<sup refs='ref2 ref7 ref11 ref5'></sup>"
  }
}
</i18n>

<template>
  <wiz-slide class="slide-popup"
      @slideswipe.native.stop>
    <wiz-bg-container
      class="custom-popup"
      component-name="Custom popup"
    >
      <wiz-bg-close-popup-button
        class="pa close-slide-popup-button"
        component-name="Close slide popup"
      ></wiz-bg-close-popup-button>

      <wiz-bg-grid-container
        id="headlineWrapper"
        class="headline-wrapper back-cont-bio"
        component-name="Headline &amp; Subhead container"
      >
        <wiz-text
          id="headline"
          class="pa"
          :text="$t('headline')"
          component-name="Headline"
        ></wiz-text>
      </wiz-bg-grid-container>

      <wiz-bg-grid-container
        id="contentArea"
        class="content-area pa"
        component-name="Content area"
      >
        <wiz-text
          id="title"
          class="title pa"
          :text="$t('title')"
          component-name="Title"
        ></wiz-text>
        <wiz-image
          id="graph"
          class="graph pa"
          src="./media/images/graph.png"
          component-name="Icon"
        ></wiz-image>
        <wiz-text
          id="yName"
          class="y-name pa"
          :text="$t('verticalLegend')"
          component-name="Y name"
        ></wiz-text>
        <wiz-bg-container
          id="yContainer"
          class="y-container pa"
          component-name="Y container"
        >
          <wiz-text
            id="y1"
            class="y-text pa"
            :text="$t('y1')"
            component-name="Y 1"
          ></wiz-text>
          <wiz-text
            id="y2"
            class="y-text pa"
            :text="$t('y2')"
            component-name="Y 2"
          ></wiz-text>
          <wiz-text
            id="y3"
            class="y-text pa"
            :text="$t('y3')"
            component-name="Y 3"
          ></wiz-text>
          <wiz-text
            id="y4"
            class="y-text pa"
            :text="$t('y4')"
            component-name="Y 4"
          ></wiz-text>
        </wiz-bg-container>
        <wiz-bg-container
          id="xContainer"
          class="x-container pa"
          component-name="X container"
        >
          <wiz-text
            id="x1"
            class="x-text pa"
            :text="$t('x1')"
            component-name="X 1"
          ></wiz-text>
          <wiz-text
            id="x2"
            class="x-text pa"
            :text="$t('x2')"
            component-name="X 2"
          ></wiz-text>
          <wiz-text
            id="x3"
            class="x-text pa"
            :text="$t('x3')"
            component-name="X 3"
          ></wiz-text>
          <wiz-text
            id="x4"
            class="x-text pa"
            :text="$t('x4')"
            component-name="X 4"
          ></wiz-text>
          <wiz-text
            id="x5"
            class="x-text pa"
            :text="$t('x5')"
            component-name="X 5"
          ></wiz-text>
        </wiz-bg-container>
        <wiz-bg-container
          id="numContainer"
          class="num-container pa"
          component-name="numcontainer"
        >
          <wiz-text
            id="num1"
            class="num pa"
            :text="$t('num1')"
            component-name="num1"
          ></wiz-text>
          <wiz-text
            id="num2"
            class="num pa"
            :text="$t('num2')"
            component-name="num2"
          ></wiz-text>
          <wiz-text
            id="num3"
            class="num pa"
            :text="$t('num3')"
            component-name="num3"
          ></wiz-text>
          <wiz-text
            id="num4"
            class="num pa"
            :text="$t('num4')"
            component-name="num4"
          ></wiz-text>
          <wiz-text
            id="num5"
            class="num pa"
            :text="$t('num5')"
            component-name="num5"
          ></wiz-text>
        </wiz-bg-container>
        <wiz-text
          id="caption"
          class="caption pa"
          :text="$t('caption')"
          component-name="caption"
        ></wiz-text>
      </wiz-bg-grid-container>

      <wiz-bg-grid-container
        id="footnoteArea"
        class="footnote-area"
        component-name="Footnote area"
      >
        <wiz-text
          id="footnote1"
          class="footnote pa"
          :text="$t('footnote1')"
          component-name="Footnote"
        ></wiz-text>
        <wiz-text
          id="footnote2"
          class="footnote pa"
          :text="$t('footnote2')"
          component-name="Footnote"
        ></wiz-text>
        <wiz-text
          id="footnote3"
          class="footnote pa"
          :text="$t('footnote3')"
          component-name="Footnote"
        ></wiz-text>
        <wiz-text
          id="footnote4"
          class="footnote pa"
          :text="$t('footnote4')"
          component-name="Footnote"
        ></wiz-text>
        <wiz-text
          id="hiddenRefs"
          class="hidden"
          :text="$t('hiddenRefs')"
          component-name="Hidden references"
        ></wiz-text>
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
#headline {
  width: 518px;
  font: 800 25px/30px 'Open Sans Condensed';
  text-align: center;
  transform: matrix(1, 0, 0, 1, 127, 80);
}

.title {
  width: 565px;
  font: 18px/21px 'Open Sans Condensed', sans-serif;
  transform: matrix(1, 0, 0, 1, 104, 16);
}

.wiz-slide .graph {
  width: 806px;
  height: 313px;
  transform: matrix(1, 0, 0, 1, 56, 86);
}

.y-name {
  width: 200px;
  font: 300 17px 'Open Sans Condensed', sans-serif;
  transform: matrix(0, -1, 1, 0, -97, 225);
}

.y-container {
  width: 30px;
  height: 340px;
  transform: matrix(1, 0, 0, 1, 20, 78);
}

.y-text {
  width: 30px;
  font: 300 14px 'Open Sans Condensed', sans-serif;
  text-align: right;
}

.y-text:nth-of-type(2) {
  transform: matrix(1, 0, 0, 1, 0, 103);
}

.y-text:nth-of-type(3) {
  transform: matrix(1, 0, 0, 1, 0, 207);
}

.y-text:nth-of-type(4) {
  transform: matrix(1, 0, 0, 1, 0, 308);
}

.x-container {
  width: 580px;
  height: 22px;
  transform: matrix(1, 0, 0, 1, 101, 59);
}

.x-text {
  width: 45px;
  font: 800 16px/18px 'Open Sans Condensed', sans-serif;
}

.x-text:nth-of-type(2) {
  transform: matrix(1, 0, 0, 1, 135, 0);
}

.x-text:nth-of-type(3) {
  transform: matrix(1, 0, 0, 1, 267, 0);
}

.x-text:nth-of-type(4) {
  transform: matrix(1, 0, 0, 1, 399, 0);
}

.x-text:nth-of-type(5) {
  transform: matrix(1, 0, 0, 1, 533, 0);
}

.num-container {
  width: 600px;
  height: 130px;
  transform: matrix(1, 0, 0, 1, 84, 260);
}

.num {
  width: 47px;
  font: 300 17px/21px 'Open Sans Condensed', sans-serif;
  text-align: center;
}

.num::v-deep b {
  font-weight: 600;
  font-size: 20px;
}

.num:nth-of-type(1) {
  transform: matrix(1, 0, 0, 1, 12, 5);
}

.num:nth-of-type(2) {
  transform: matrix(1, 0, 0, 1, 146, 36);
}

.num:nth-of-type(3) {
  transform: matrix(1, 0, 0, 1, 279, 85);
}

.num:nth-of-type(4) {
  transform: matrix(1, 0, 0, 1, 411, 16);
}

.num:nth-of-type(5) {
  transform: matrix(1, 0, 0, 1, 545, 2);
}

.caption {
  font: 300 17px/22px 'Open Sans Condensed', sans-serif;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 725, 146);
}

#footnote1 {
  transform: matrix(1, 0, 0, 1, -65, 28);
}

#footnote2 {
  width: 930px;
  transform: matrix(1, 0, 0, 1, -65, 53);
}

#footnote3 {
  transform: matrix(1, 0, 0, 1, -65, 101);
}

#footnote4 {
  width: 900px;
  transform: matrix(1, 0, 0, 1, -65, 121);
}
</style>
