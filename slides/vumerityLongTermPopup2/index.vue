<i18n>
{
  "deu": {
    "headline": "<span style='color: #003865;'>ENDORSE: DER KLINISCHE NUTZEN VON TECFIDERA<sup>®</sup> HINSICHTLICH<br>DER BEHINDERUNGSPROGRESSION BLIEB ÜBER 10 JAHRE ERHALTEN<sup>1</sup></span>",
    "verticalLegend": "<span style='color: #4c4d4f;'>Patienten mit EDSS-Wert ≤ 3,5 (%)</span>",
    "y1": "<span style='color: #4c4d4f;'>100</span>",
    "y2": "<span style='color: #4c4d4f;'>80</span>",
    "y3": "<span style='color: #4c4d4f;'>60</span>",
    "y4": "<span style='color: #4c4d4f;'>40</span>",
    "y5": "<span style='color: #4c4d4f;'>20</span>",
    "y6": "<span style='color: #4c4d4f;'>0</span>",
    "x1": "<span style='color: #003865;'>Jahr 2</span>",
    "x2": "<span style='color: #003865;'>Jahr 10</span>",
    "percent1": "<span style='color: #4c4d4f;'><b style='color: #003865;'>86%</b><br>(n=479)</span>",
    "percent2": "<span style='color: #4c4d4f;'><b style='color: #003865;'>82%</b><br>(n=217)</span>",
    "percent3": "<span style='color: #4c4d4f;'><b style='color: #003865;'>77%</b><br>(n=226)</span>",
    "percent4": "<span style='color: #4c4d4f;'><b style='color: #003865;'>74%</b><br>(n=90)</span>",
    "legend1": "<span style='color: #003865;'>Kontinuierliche Tecfidera<sup>®</sup>-Therapie</span>",
    "legend2": "<span style='color: #003865;'>Verzögerte Tecfidera<sup>®</sup>-Therapie</span>",
    "description": "<span style='color: #003865;'><b>Die mittleren EDSS-Werte blieben über 10 Jahre stabil bei 2,4 (1,6)<br>unter kontinuierlicher Tecfidera<sup>®</sup>-Therapie und 2,6 (1,5) unter verzögerter Tecfidera<sup>®</sup>-Therapie</b></span>",
    "footnote1": "<span style='color: #4c4d4f;'>Darstellung modifiziert nach Gold R <i>et al.</i> ACTRIMS-ECTRIMS 2020, FC02.05.</span>",
    "footnote2": "<span style='color: #4c4d4f;'><b style='color: #003865;'>EDSS:</b> Expanded disability status scale.</span>",
    "hiddenReferences": "<sup refs='ref29'></sup>"
  }
}
</i18n>

<template>
  <wiz-slide
    class="slide-popup"
    @slideswipe.native.stop
  >
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
        class="headline-wrapper"
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
        class="content-area"
        component-name="Content area"
      >
        <wiz-bg-container
          id="graphContainer"
          class="graph-container pa"
          component-name="Graph container"
        >
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
            <wiz-text
              id="y5"
              class="y-text pa"
              :text="$t('y5')"
              component-name="Y 5"
            ></wiz-text>
            <wiz-text
              id="y6"
              class="y-text pa"
              :text="$t('y6')"
              component-name="Y 6"
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
          </wiz-bg-container>
          <wiz-bg-container
            id="percentContainer"
            class="percent-container pa"
            component-name="Percent container"
          >
            <wiz-text
              id="percent1"
              class="percent pa"
              :text="$t('percent1')"
              component-name="Percent 1"
            ></wiz-text>
            <wiz-text
              id="percent2"
              class="percent pa"
              :text="$t('percent2')"
              component-name="Percent 2"
            ></wiz-text>
            <wiz-text
              id="percent3"
              class="percent pa"
              :text="$t('percent3')"
              component-name="Percent 3"
            ></wiz-text>
            <wiz-text
              id="percent4"
              class="percent pa"
              :text="$t('percent4')"
              component-name="Percent 4"
            ></wiz-text>
          </wiz-bg-container>
          <wiz-bg-container
            id="legendsContainer"
            class="legends-container pa"
            component-name="Legends container"
          >
            <wiz-text
              id="legend1"
              class="legend pa"
              :text="$t('legend1')"
              component-name="Legend 1"
            ></wiz-text>
            <wiz-text
              id="legend2"
              class="legend pa"
              :text="$t('legend2')"
              component-name="Legend 2"
            ></wiz-text>
          </wiz-bg-container>
        </wiz-bg-container>
        <wiz-text
          id="description"
          class="description pa"
          :text="$t('description')"
          component-name="Description"
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
          id="hiddenRefs"
          class="hidden"
          :text="$t('hiddenReferences')"
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
  width: 712px;
  font: 800 25px/30px 'Open Sans Condensed', sans-serif;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 30, 84);
}

.wiz-slide .graph-container {
  width: 830px;
  height: 400px;
  transform: matrix(1, 0, 0, 1, -10, 56);
}

.wiz-slide .graph {
    width: 660px;
    height: 327px;
    transform: matrix(1, 0, 0, 1, 67, 19);
}

.y-name {
  width: 190px;
  font: 300 17px 'Open Sans Condensed', sans-serif;
  transform: matrix(0, -1, 1, 0, -83, 170);
}

.y-container {
  width: 30px;
  height: 350px;
  transform: matrix(1, 0, 0, 1, 29, 11);
}

.y-text {
  width: 30px;
  font: 300 14px 'Open Sans Condensed', sans-serif;
  text-align: right;
}

.y-text:nth-of-type(2) {
  transform: matrix(1, 0, 0, 1, 0, 65);
}

.y-text:nth-of-type(3) {
  transform: matrix(1, 0, 0, 1, 0, 130);
}

.y-text:nth-of-type(4) {
  transform: matrix(1, 0, 0, 1, 0, 194);
}

.y-text:nth-of-type(5) {
  transform: matrix(1, 0, 0, 1, 0, 259);
}

.y-text:nth-of-type(6) {
  transform: matrix(1, 0, 0, 1, 0, 324);
}

.x-container {
  width: 300px;
  height: 22px;
  transform: matrix(1, 0, 0, 1, 253, 346);
}

.x-text {
  width: 45px;
  font: 800 15px/18px 'Open Sans Condensed', sans-serif;
}

.x-text:nth-of-type(2) {
  transform: matrix(1, 0, 0, 1, 246, 0);
}

.percent-container {
  width: 410px;
  height: 100px;
  transform: matrix(1, 0, 0, 1, 190, 0);
}

.percent {
  width: 47px;
  font: 300 18px/21px 'Open Sans Condensed', sans-serif;
  text-align: center;
}

.percent::v-deep b {
  font-weight: 800;
  font-size: 25px;
}

.percent:nth-of-type(1) {
  transform: matrix(1, 0, 0, 1, 8, 14);
}

.percent:nth-of-type(2) {
  transform: matrix(1, 0, 0, 1, 109, 27);
}

.percent:nth-of-type(3) {
  transform: matrix(1, 0, 0, 1, 257, 42);
}

.percent:nth-of-type(4) {
  transform: matrix(1, 0, 0, 1, 359, 52);
}

.legends-container {
    width: 243px;
    height: 50px;
  transform: matrix(1, 0, 0, 1, 659, 39);
}

.legend {
  width: 194px;
  font: 300 15px 'Open Sans Condensed', sans-serif;
  transform: matrix(1, 0, 0, 1, 15, 0);
}

.legend:nth-of-type(2) {
  transform: matrix(1, 0, 0, 1, 15, 17);
}

.legend::before {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  transform: matrix(1, 0, 0, 1, -13, 5);
}

.legend:nth-of-type(1)::before {
  background-color: #003865;
}

.legend:nth-of-type(2)::before {
  background-color: #007fa3;
}

.description {
    width: 682px;
    font: 800 18px/22px 'Open Sans Condensed', sans-serif;
    text-align: center;
    transform: matrix(1, 0, 0, 1, 47, 432);
}

#footnote1 {
  width: 382px;
  transform: matrix(1, 0, 0, 1, -65, 104);
}

#footnote2 {
  width: 315px;
  transform: matrix(1, 0, 0, 1, -65, 124);
}
</style>
