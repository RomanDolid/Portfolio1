<i18n>
{
  "deu": {
    "headline": "<span style='color: #003865;'><b>ENDORSE: DER KLINISCHE NUTZEN VON TECFIDERA<sup>®</sup> HINSICHTLICH DER JÄHRLICHEN<br>SCHUBRATE BLIEB ÜBER 10 JAHRE ERHALTEN<sup>1</sup></b></span>",
    "graphTitle": "<span style='color: #003865;'><b>Adjustierte jährliche Schubrate unter kontinuierlicher<br>und verzögerter Tecfidera<sup>®</sup> Therapie über 10 Jahre (8 Jahre in ENDORSE)</b></span></span>",
    "y1": "<span style='color: #4c4d4f;'>0,5</span>",
    "y2": "<span style='color: #4c4d4f;'>0,4</span>",
    "y3": "<span style='color: #4c4d4f;'>0,3</span>",
    "y4": "<span style='color: #4c4d4f;'>0,2</span>",
    "y5": "<span style='color: #4c4d4f;'>0,1</span>",
    "y6": "<span style='color: #4c4d4f;'>0</span>",
    "x1": "<span style='color: #4c4d4f;'>n = 501</span>",
    "x2": "<span style='color: #4c4d4f;'>249</span>",
    "x3": "<span style='color: #4c4d4f;'>495</span>",
    "x4": "<span style='color: #4c4d4f;'>240</span>",
    "x5": "<span style='color: #4c4d4f;'>501</span>",
    "x6": "<span style='color: #4c4d4f;'>249</span>",
    "x7": "<span style='color: #4c4d4f;'>472</span>",
    "x8": "<span style='color: #4c4d4f;'>206</span>",
    "x9": "<span style='color: #4c4d4f;'>443</span>",
    "x10": "<span style='color: #4c4d4f;'>193</span>",
    "x11": "<span style='color: #4c4d4f;'>393</span>",
    "x12": "<span style='color: #4c4d4f;'>173</span>",
    "x13": "<span style='color: #4c4d4f;'>368</span>",
    "x14": "<span style='color: #4c4d4f;'>159</span>",
    "x15": "<span style='color: #4c4d4f;'>337</span>",
    "x16": "<span style='color: #4c4d4f;'>145</span>",
    "x17": "<span style='color: #4c4d4f;'>292</span>",
    "x18": "<span style='color: #4c4d4f;'>130</span>",
    "x19": "<span style='color: #4c4d4f;'>261</span>",
    "x20": "<span style='color: #4c4d4f;'>111</span>",
    "years1": "<span style='color: #003865;'><b>0-1</b></span>",
    "years2": "<span style='color: #003865;'><b>1-2</b></span>",
    "years3": "<span style='color: #003865;'><b>2-3</b></span>",
    "years4": "<span style='color: #003865;'><b>3-4</b></span>",
    "years5": "<span style='color: #003865;'><b>4-5</b></span>",
    "years6": "<span style='color: #003865;'><b>5-6</b></span>",
    "years7": "<span style='color: #003865;'><b>6-7</b></span>",
    "years8": "<span style='color: #003865;'><b>7-8</b></span>",
    "years9": "<span style='color: #003865;'><b>8-9</b></span>",
    "years10": "<span style='color: #003865;'><b>9-10</b></span>",
    "verticalLegend": "<span style='color: #4c4d4f;'>Adjustierte jährliche Schubrate (95%-KI)</span>",
    "legend1": "<span style='color: #003865;'>Kontinuierliche Tecfidera<sup>®</sup>-Therapie</span>",
    "legend2": "<span style='color: #003865;'>Verzögerte Tecfidera<sup>®</sup>-Therapie</span>",
    "scaleCaption": "<span style='color: #003865;'><b>Jahre</b></span>",
    "caption1": "<span style='color: #003865;'>DEFINE/CONFIRM</span>",
    "caption2": "<span style='color: #003865;'>ENDORSE</span>",
    "footnote1": "<span style='color: #4c4d4f;'>Darstellung modifiziert nach Gold R <i>et al.</i> ACTRIMS-ECTRIMS 2020, FC02.05.</span>",
    "footnote2": "<span style='color: #4c4d4f;'>Die adjustierte jährliche Schubrate wird für alle Patienten mit kontinuierlicher Tecfidera<sup>®</sup> Therapie sowie für Patienten mit verzögerter Tecfidera<sup>®</sup> Therapie (DEFINE/CONFIRM in den Jahren 0 – 2: Placebo;<br>ENDORSE in den Jahren 3 – 9: Tecfidera<sup>®</sup>) dargestellt. Die jährliche Schubrate wurde auf Grundlage eines negativen binomialen Regressionsmodells berechnet, und hinsichtlich Studie, Region, Baseline Alter<br>(<40 vs. ≥40 Jahre), Baseline EDSS-Wert (≤2,0 vs. >2,0) und Anzahl der Schübe im Jahr vor Studienbeginn (DEFINE/CONFIRM) adjustiert.</span>",
    "footnote3": "<span style='color: #4c4d4f;'><b style='color: #003865;'>KI:</b> Konfidenzinterval; <b>EDSS:</b> Expanded disability status scale.</span>",
    "hiddenRefs": "<sup refs='ref29'></sup>"
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
        <wiz-text
          id="graphTitle"
          class="pa"
          :text="$t('graphTitle')"
          component-name="Title"
        ></wiz-text>
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
            <wiz-text
              id="x6"
              class="x-text pa"
              :text="$t('x6')"
              component-name="X 6"
            ></wiz-text>
            <wiz-text
              id="x7"
              class="x-text pa"
              :text="$t('x7')"
              component-name="X 7"
            ></wiz-text>
            <wiz-text
              id="x8"
              class="x-text pa"
              :text="$t('x8')"
              component-name="X 8"
            ></wiz-text>
            <wiz-text
              id="x9"
              class="x-text pa"
              :text="$t('x9')"
              component-name="X 9"
            ></wiz-text>
            <wiz-text
              id="x10"
              class="x-text pa"
              :text="$t('x10')"
              component-name="X 10"
            ></wiz-text>
            <wiz-text
              id="x11"
              class="x-text pa"
              :text="$t('x11')"
              component-name="X 11"
            ></wiz-text>
            <wiz-text
              id="x12"
              class="x-text pa"
              :text="$t('x12')"
              component-name="X 12"
            ></wiz-text>
            <wiz-text
              id="x13"
              class="x-text pa"
              :text="$t('x13')"
              component-name="X 13"
            ></wiz-text>
            <wiz-text
              id="x14"
              class="x-text pa"
              :text="$t('x14')"
              component-name="X 14"
            ></wiz-text>
            <wiz-text
              id="x15"
              class="x-text pa"
              :text="$t('x15')"
              component-name="X 15"
            ></wiz-text>
            <wiz-text
              id="x16"
              class="x-text pa"
              :text="$t('x16')"
              component-name="X 16"
            ></wiz-text>
            <wiz-text
              id="x17"
              class="x-text pa"
              :text="$t('x17')"
              component-name="X 17"
            ></wiz-text>
            <wiz-text
              id="x18"
              class="x-text pa"
              :text="$t('x18')"
              component-name="X 18"
            ></wiz-text>
            <wiz-text
              id="x19"
              class="x-text pa"
              :text="$t('x19')"
              component-name="X 19"
            ></wiz-text>
            <wiz-text
              id="x20"
              class="x-text pa"
              :text="$t('x20')"
              component-name="X 20"
            ></wiz-text>
          </wiz-bg-container>
          <wiz-bg-container
            id="yearsContainer"
            class="years-container pa"
            component-name="Years container"
          >
            <wiz-text
              id="years1"
              class="years-text pa"
              :text="$t('years1')"
              component-name="Years 1"
            ></wiz-text>
            <wiz-text
              id="years2"
              class="years-text pa"
              :text="$t('years2')"
              component-name="Years 2"
            ></wiz-text>
            <wiz-text
              id="years3"
              class="years-text pa"
              :text="$t('years3')"
              component-name="Years 3"
            ></wiz-text>
            <wiz-text
              id="years4"
              class="years-text pa"
              :text="$t('years4')"
              component-name="Years 4"
            ></wiz-text>
            <wiz-text
              id="years5"
              class="years-text pa"
              :text="$t('years5')"
              component-name="Years 5"
            ></wiz-text>
            <wiz-text
              id="years6"
              class="years-text pa"
              :text="$t('years6')"
              component-name="Years 6"
            ></wiz-text>
            <wiz-text
              id="years7"
              class="years-text pa"
              :text="$t('years7')"
              component-name="Years 7"
            ></wiz-text>
            <wiz-text
              id="years8"
              class="years-text pa"
              :text="$t('years8')"
              component-name="Years 8"
            ></wiz-text>
            <wiz-text
              id="years9"
              class="years-text pa"
              :text="$t('years9')"
              component-name="Years 9"
            ></wiz-text>
            <wiz-text
              id="years10"
              class="years-text pa"
              :text="$t('years10')"
              component-name="Years 10"
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
          id="scaleCaption"
          class="pa"
          :text="$t('scaleCaption')"
          component-name="Caption"
        ></wiz-text>
        <wiz-bg-container
          id="wrapper1"
          class="pa"
          component-name="Wrapper"
        >
          <wiz-bg-container
            id="line1"
            class="line pa"
            component-name="Line"
          ></wiz-bg-container>
          <wiz-bg-container
            id="line2"
            class="line pa"
            component-name="Line"
          ></wiz-bg-container>
          <wiz-text
            id="caption1"
            class="caption pa"
            :text="$t('caption1')"
            component-name="Caption"
          ></wiz-text>
          <wiz-text
            id="caption2"
            class="caption pa"
            :text="$t('caption2')"
            component-name="Caption"
          ></wiz-text>
        </wiz-bg-container>
      </wiz-bg-grid-container>

      <wiz-bg-grid-container
        id="footnoteArea"
        class="footnote-area"
        component-name="Footnote area"
      >
        <wiz-text
          id="footnote1"
          class="footnote"
          :text="$t('footnote1')"
          component-name="Footnote"
        ></wiz-text>
        <wiz-text
          id="footnote2"
          class="footnote"
          :text="$t('footnote2')"
          component-name="Footnote"
        ></wiz-text>
        <wiz-text
          id="footnote3"
          class="footnote"
          :text="$t('footnote3')"
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
  width: 870px;
  height: 30px;
  font-size: 25px;
  font-family: 'Open Sans Condensed', sans-serif;
  transform: matrix(1, 0, 0, 1, -32, 98);
  text-align: center;
}

#graphTitle {
  width: 550px;
  height: 50px;
  font-size: 18px;
  font-family: 'Open Sans Condensed', sans-serif;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 132, 6);
}

.wiz-slide .graph-container {
  width: 830px;
  height: 400px;
  transform: matrix(1, 0, 0, 1, -26, 56);
}

.wiz-slide .graph {
    width: 762px;
    height: 345px;
    transform: matrix(1, 0, 0, 1, 71, 6);
}

.y-name {
  width: 235px;
  font: 300 17px 'Open Sans Condensed', sans-serif;
  transform: matrix(0, -1, 1, 0, -103, 160);
}

.y-container {
  width: 30px;
  height: 350px;
  transform: matrix(1, 0, 0, 1, 33, 8);
}

.y-text {
  width: 30px;
  font: 300 14px 'Open Sans Condensed', sans-serif;
  text-align: right;
}

.y-text:nth-of-type(2) {
  transform: matrix(1, 0, 0, 1, 0, 66);
}

.y-text:nth-of-type(3) {
  transform: matrix(1, 0, 0, 1, 0, 133);
}

.y-text:nth-of-type(4) {
  transform: matrix(1, 0, 0, 1, 0, 198);
}

.y-text:nth-of-type(5) {
  transform: matrix(1, 0, 0, 1, 0, 263);
}

.y-text:nth-of-type(6) {
  transform: matrix(1, 0, 0, 1, 0, 329);
}

.x-container {
  width: 750px;
  height: 22px;
  transform: matrix(1, 0, 0, 1, 71, 346);
}

.x-text {
  width: 30px;
  font: 300 16px 'Open Sans Condensed', sans-serif;
}

.x-text:nth-of-type(1) {
  width: 40px;
  transform: matrix(1, 0, 0, 1, 4, 0);
}

.x-text:nth-of-type(2) {
  transform: matrix(1, 0, 0, 1, 49, 0);
}

.x-text:nth-of-type(3) {
  transform: matrix(1, 0, 0, 1, 97, 0);
}

.x-text:nth-of-type(4) {
  transform: matrix(1, 0, 0, 1, 124, 0);
}

.x-text:nth-of-type(5) {
  transform: matrix(1, 0, 0, 1, 171, 0);
}

.x-text:nth-of-type(6) {
  transform: matrix(1, 0, 0, 1, 199, 0);
}

.x-text:nth-of-type(7) {
  transform: matrix(1, 0, 0, 1, 246, 0);
}

.x-text:nth-of-type(8) {
  transform: matrix(1, 0, 0, 1, 274, 0);
}

.x-text:nth-of-type(9) {
  transform: matrix(1, 0, 0, 1, 321, 0);
}

.x-text:nth-of-type(10) {
  transform: matrix(1, 0, 0, 1, 348, 0);
}

.x-text:nth-of-type(11) {
  transform: matrix(1, 0, 0, 1, 396, 0);
}

.x-text:nth-of-type(12) {
  transform: matrix(1, 0, 0, 1, 423, 0);
}

.x-text:nth-of-type(13) {
  transform: matrix(1, 0, 0, 1, 470, 0);
}

.x-text:nth-of-type(14) {
  transform: matrix(1, 0, 0, 1, 498, 0);
}

.x-text:nth-of-type(15) {
  transform: matrix(1, 0, 0, 1, 545, 0);
}

.x-text:nth-of-type(16) {
  transform: matrix(1, 0, 0, 1, 573, 0);
}

.x-text:nth-of-type(17) {
  transform: matrix(1, 0, 0, 1, 620, 0);
}

.x-text:nth-of-type(18) {
  transform: matrix(1, 0, 0, 1, 647, 0);
}

.x-text:nth-of-type(19) {
  transform: matrix(1, 0, 0, 1, 695, 0);
}

.x-text:nth-of-type(20) {
  transform: matrix(1, 0, 0, 1, 722, 0);
}

.years-container {
  width: 700px;
  height: 30px;
  transform: matrix(1, 0, 0, 1, 107, 368);
}

.years-text {
  width: 30px;
  font: 400 15px 'Open Sans Condensed', sans-serif;
}

.years-text:nth-of-type(2) {
  transform: matrix(1, 0, 0, 1, 75, 0);
}

.years-text:nth-of-type(3) {
  transform: matrix(1, 0, 0, 1, 150, 0);
}

.years-text:nth-of-type(4) {
  transform: matrix(1, 0, 0, 1, 224, 0);
}

.years-text:nth-of-type(5) {
  transform: matrix(1, 0, 0, 1, 299, 0);
}

.years-text:nth-of-type(6) {
  transform: matrix(1, 0, 0, 1, 374, 0);
}

.years-text:nth-of-type(7) {
  transform: matrix(1, 0, 0, 1, 449, 0);
}

.years-text:nth-of-type(8) {
  transform: matrix(1, 0, 0, 1, 523, 0);
}

.years-text:nth-of-type(9) {
  transform: matrix(1, 0, 0, 1, 598, 0);
}

.years-text:nth-of-type(10) {
  transform: matrix(1, 0, 0, 1, 670, 0);
}

.legends-container {
    width: 243px;
    height: 50px;
    transform: matrix(1, 0, 0, 1, 623, 11);
}

.legend {
  width: 194px;
  font: 300 15px 'Open Sans Condensed', sans-serif;
  transform: matrix(1, 0, 0, 1, 15, 0);
}

.legend:nth-of-type(2) {
  transform: matrix(1, 0, 0, 1, 15, 21);
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
  background-color: #8db9cb;
}

#scaleCaption {
  width: 40px;
  height: 30px;
  font-size: 15px;
  font-family: 'Open Sans Condensed', sans-serif;
  transform: matrix(1, 0, 0, 1, 797, 422);
}

#wrapper1 {
  width: 740px;
  height: 37px;
  transform: matrix(1, 0, 0, 1, 66, 452);
}

.wiz-slide .line {
  height: 1px;
  background-color: #4c4d4f;
}

#line1 {
  width: 125px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}

#line2 {
  width: 580px;
  transform: matrix(1, 0, 0, 1, 148, 0);
}

.caption {
  width: 140px;
  height: 20px;
  font: 800 15px 'Open Sans', sans-serif;
}

#caption1 {
  transform: matrix(1, 0, 0, 1, -3, 12);
}

#caption2 {
  transform: matrix(1, 0, 0, 1, 403, 12);
}

#footnote1 {
  height: 30px;
  transform: matrix(1, 0, 0, 1, -67, 70);
}

#footnote2 {
  width: 930px;
  height: 30px;
  transform: matrix(1, 0, 0, 1, -67, 84);
}

#footnote3 {
  height: 30px;
  transform: matrix(1, 0, 0, 1, -67, 125);
}
</style>
