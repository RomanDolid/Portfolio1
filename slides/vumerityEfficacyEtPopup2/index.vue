<i18n>
{
  "eng": {
    "graphTitle": "<span style='color: #003865;'><b>ANTEIL DER PATIENTEN OHNE GD+-LÄSIONEN<br>NACH THERAPIEBEGINN MIT TECFIDERA<sup>®</sup>/VUMERITY<sup>™</sup><sup>1</sup></b></span>",
    "description1": "<span style='color: #003865;'><b>~55 Wochen</b></span>",
    "description2": "<span style='color: #003865;'><b>~7 Wochen</b></span>",
    "description3": "<span style='color: #003865;'><b>~48 Wochen</b></span>",
    "yAxisText1": "<span style='color: #4c4d4f;'>100</span>",
    "yAxisText2": "<span style='color: #4c4d4f;'>80</span>",
    "yAxisText3": "<span style='color: #4c4d4f;'>60</span>",
    "yAxisText4": "<span style='color: #4c4d4f;'>40</span>",
    "yAxisText5": "<span style='color: #4c4d4f;'>20</span>",
    "yAxisText6": "<span style='color: #4c4d4f;'>0</span>",
    "xAxisText1": "<span style='color: #003865;'><b>EVOLVE-MS-2 <br>Baseline</b> <br><span style='color: #4c4d4f;'>(n=291)</span></span>",
    "xAxisText2": "<span style='color: #003865;'><b>EVOLVE-MS-1 <br>Baseline</b> <br><span style='color: #4c4d4f;'>(n=292)</span></span>",
    "xAxisText3": "<span style='color: #003865;'><b>EVOLVE-MS-1 <br>Woche 48</b> <br><span style='color: #4c4d4f;'>(n=82)</span></span>",
    "graphValue1": "<span style='color: #003865;'>69,1</span>",
    "graphValue2": "<span style='color: #003865;'>22,3</span>",
    "graphValue3": "<span style='color: #003865;'>5,2</span>",
    "graphValue4": "<span style='color: #003865;'>3,4</span>",
    "graphValue5": "<span style='color: #003865;'>73,3</span>",
    "graphValue6": "<span style='color: #003865;'>21,2</span>",
    "graphValue7": "<span style='color: #003865;'>3,4</span>",
    "graphValue8": "<span style='color: #003865;'>2,1</span>",
    "graphValue9": "<span style='color: #003865;'>96,3</span>",
    "graphValue10": "<span style='color: #003865;'>2,4</span>",
    "graphValue11": "<span style='color: #003865;'>0</span>",
    "graphValue12": "<span style='color: #003865;'>1,2</span>",
    "legendText1": "<span style='color: #003865;'>0 Läsionen</span>",
    "legendText2": "<span style='color: #003865;'>1-4 Läsionen</span>",
    "legendText3": "<span style='color: #003865;'>5-8 Läsionen</span>",
    "legendText4": "<span style='color: #003865;'>≥9 Läsionen</span>",
    "verticalLegend": "<span style='color: #4c4d4f;'>Patienten (%)</span>",
    "footnote": "<span style='color: #4c4d4f;'><b style='color: #003865;'>Gd+:</b> Gadolinium-aufnehmend; <b>MS:</b> Multiple Sklerose.</span>",
    "hiddenRefs": "<sup refs='ref8'></sup>"
  }
}
</i18n>

<template>
  <wiz-slide
    class="slide-popup"
    @slideswipe.native.stop
  >
    <!-- ========================== CLOSE BUTTON ========================== -->
    <wiz-bg-container
      class="custom-popup"
      :component-name="'Custom popup'"
    >
      <wiz-bg-close-popup-button
        class="close-slide-popup"
        :component-name="'Close slide popup'"
      ></wiz-bg-close-popup-button>
      <!-- ========================== HEADER ========================== -->
      <wiz-bg-grid-container
        id="headlineWrapper"
        class="headline-wrapper"
        :component-name="'Headline &amp; Subhead container'"
      ></wiz-bg-grid-container>
      <!-- ========================== CONTENT AREA ========================== -->
      <wiz-bg-grid-container
        id="contentArea"
        class="content-area"
        :component-name="'Content area'"
      >
        <wiz-text
          id="graphTitle"
          class="graph-title"
          :text="$t('graphTitle')"
          :component-name="'Title'"
        ></wiz-text>
        <!-- ========================== WRAPPER 1 ========================== -->
        <wiz-container
          id="wrapper1"
          class="pa wrapper-1"
          :component-name="'Wrapper'"
        >
          <wiz-text
            id="description1"
            class="pa description"
            :text="$t('description1')"
            :component-name="'Description'"
          >
          </wiz-text>
        </wiz-container>
        <!-- ========================== WRAPPER 2 ========================== -->
        <wiz-container
          id="wrapper2"
          class="pa wrapper-2"
          :component-name="'Wrapper'"
        >
          <wiz-text
            id="description2"
            class="pa description"
            :text="$t('description2')"
            :component-name="'Description'"
          >
          </wiz-text>
        </wiz-container>
        <!-- ========================== WRAPPER 3 ========================== -->
        <wiz-container
          id="wrapper3"
          class="pa wrapper-3"
          :component-name="'Wrapper'"
        >
          <wiz-text
            id="description3"
            class="pa description"
            :text="$t('description3')"
            :component-name="'Description'"
          >
          </wiz-text>
        </wiz-container>
        <!-- ========================== MAIN GRAPH ========================== -->
        <wiz-image
          id="mainGraph"
          class="pa main-graph"
          :src="'./media/images/main-graph.png'"
          :component-name="'Graph'"
        ></wiz-image>
        <wiz-text
          id="verticalLegend"
          class="pa vertical-legend"
          :text="$t('verticalLegend')"
          :component-name="'Vertical legend'"
        ></wiz-text>
        <!-- ========================== Y-AXIS ========================== -->
        <wiz-container
          id="yAxis"
          class="pa y-axis"
          :component-name="'Wrapper'"
        >
          <wiz-text
            id="yAxisText1"
            class="y-axis-text-1 y-axis-texts"
            :text="$t('yAxisText1')"
            :component-name="'Wrapper text'"
          ></wiz-text>
          <wiz-text
            id="yAxisText2"
            class="y-axis-text-2 y-axis-texts"
            :text="$t('yAxisText2')"
            :component-name="'Wrapper text'"
          ></wiz-text>
          <wiz-text
            id="yAxisText3"
            class="y-axis-text-3 y-axis-texts"
            :text="$t('yAxisText3')"
            :component-name="'Wrapper text'"
          ></wiz-text>
          <wiz-text
            id="yAxisText4"
            class="y-axis-text-4 y-axis-texts"
            :text="$t('yAxisText4')"
            :component-name="'Wrapper text'"
          ></wiz-text>
          <wiz-text
            id="yAxisText5"
            class="y-axis-text-5 y-axis-texts"
            :text="$t('yAxisText5')"
            :component-name="'Wrapper text'"
          ></wiz-text>
          <wiz-text
            id="yAxisText6"
            class="y-axis-text-6 y-axis-texts"
            :text="$t('yAxisText6')"
            :component-name="'Wrapper text'"
          ></wiz-text>
        </wiz-container>
        <!-- ========================== X-AXIS ========================== -->
        <wiz-container
          id="xAxis"
          class="pa x-axis"
          :component-name="Wrapper"
        >
          <wiz-text
            id="xAxisText1"
            class="x-axis-text-1 x-axis-texts"
            :text="$t('xAxisText1')"
            :component-name="'Wrapper text'"
          ></wiz-text>
          <wiz-text
            id="xAxisText2"
            class="x-axis-text-2 x-axis-texts"
            :text="$t('xAxisText2')"
            :component-name="'Wrapper text'"
          ></wiz-text>
          <wiz-text
            id="xAxisText3"
            class="x-axis-text-3 x-axis-texts"
            :text="$t('xAxisText3')"
            :component-name="'Wrapper text'"
          ></wiz-text>
        </wiz-container>
        <!-- ========================== GRAPH VALUES ========================== -->
        <wiz-container
          id="graphValuesWrapper"
          class="pa graph-values-wrapper"
          :component-name="Wrapper"
        >
          <wiz-text
            id="graphValue1"
            class="pa graph-value-1 graph-values"
            :text="$t('graphValue1')"
            :component-name="'Wrapper text'"
          ></wiz-text>
          <wiz-text
            id="graphValue2"
            class="pa graph-value-2 graph-values"
            :text="$t('graphValue2')"
            :component-name="'Wrapper text'"
          ></wiz-text>
          <wiz-text
            id="graphValue3"
            class="pa graph-value-3 graph-values"
            :text="$t('graphValue3')"
            :component-name="'Wrapper text'"
          ></wiz-text>
          <wiz-text
            id="graphValue4"
            class="pa graph-value-4 graph-values"
            :text="$t('graphValue4')"
            :component-name="'Wrapper text'"
          ></wiz-text>
          <wiz-text
            id="graphValue5"
            class="pa graph-value-5 graph-values"
            :text="$t('graphValue5')"
            :component-name="'Wrapper text'"
          ></wiz-text>
          <wiz-text
            id="graphValue6"
            class="pa graph-value-6 graph-values"
            :text="$t('graphValue6')"
            :component-name="'Wrapper text'"
          ></wiz-text>
          <wiz-text
            id="graphValue7"
            class="pa graph-value-7 graph-values"
            :text="$t('graphValue7')"
            :component-name="'Wrapper text'"
          ></wiz-text>
          <wiz-text
            id="graphValue8"
            class="pa graph-value-8 graph-values"
            :text="$t('graphValue8')"
            :component-name="'Wrapper text'"
          ></wiz-text>
          <wiz-text
            id="graphValue9"
            class="pa graph-value-9 graph-values"
            :text="$t('graphValue9')"
            :component-name="'Wrapper text'"
          ></wiz-text>
          <wiz-text
            id="graphValue10"
            class="pa graph-value-10 graph-values"
            :text="$t('graphValue10')"
            :component-name="'Wrapper text'"
          ></wiz-text>
          <wiz-text
            id="graphValue11"
            class="pa graph-value-11 graph-values"
            :text="$t('graphValue11')"
            :component-name="'Wrapper text'"
          ></wiz-text>
          <wiz-text
            id="graphValue12"
            class="pa graph-value-12 graph-values"
            :text="$t('graphValue12')"
            :component-name="'Wrapper text'"
          ></wiz-text>
        </wiz-container>
        <!-- ========================== LEGEND ========================== -->
        <wiz-container
          id="legendWrapper"
          class="pa legend-wrapper"
          :component-name="'Legend wrapper'"
        >
          <wiz-container
            id="legendImage1"
            class="pa legend-image-1 legend-images"
            :component-name="'Legend image'"
          ></wiz-container>
          <wiz-text
            id="legendText1"
            class="pa legend-text-1 legend-texts"
            :text="$t('legendText1')"
            :component-name="'Legend text'"
          ></wiz-text>
          <wiz-container
            id="legendImage2"
            class="pa legend-image-2 legend-images"
            :component-name="'Legend image'"
          ></wiz-container>
          <wiz-text
            id="legendText2"
            class="pa legend-text-2 legend-texts"
            :text="$t('legendText2')"
            :component-name="'Legend text'"
          ></wiz-text>
          <wiz-container
            id="legendImage3"
            class="pa legend-image-3 legend-images"
            :component-name="'Legend image'"
          ></wiz-container>
          <wiz-text
            id="legendText3"
            class="pa legend-text-3 legend-texts"
            :text="$t('legendText3')"
            :component-name="'Legend text'"
          ></wiz-text>
          <wiz-container
            id="legendImage4"
            class="pa legend-image-4 legend-images"
            :component-name="'Legend image'"
          ></wiz-container>
          <wiz-text
            id="legendText4"
            class="pa legend-text-4 legend-texts"
            :text="$t('legendText4')"
            :component-name="'Legend text'"
          ></wiz-text>
        </wiz-container>
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
          :text="$t('footnote')"
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
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
  /* ======================= CONTENT AREA ===================== */
  .content-area {
    width: 860px;
    height: 460px;
    transform: matrix(1, 0, 0, 1, 32, 140);
  }

  .graph-title {
    width: 730px;
    height: 70px;
    font-size: 25px;
    font-family: 'Open Sans Condensed', sans-serif;
    line-height: 31px;
    text-align: center;
    transform: matrix(1, 0, 0, 1, 21, -89);
  }

  /* ======================= WRAPPERS ===================== */
  .wrapper-1 {
    top: 0;
    left: 0;
    width: 430px;
    height: 71px;
    background: url('./media/images/frame1.png');
    background-size: 430px 40px;
    background-repeat: no-repeat;
    transform: matrix(1, 0, 0, 1, 171, 5);
  }

  .description {
    top: 0;
    left: 0;
    width: 100%;
    height: 20px;
    font-size: 15px;
    font-family: 'Open Sans Condensed';
    text-align: center;
    transform: matrix(1, 0, 0, 1, 0, 1);
  }

  #wrapper2 {
    top: 0;
    left: 0;
    width: 215px;
    height: 72px;
    background: url('./media/images/frame2.png');
    background-size: cover;
    background-repeat: no-repeat;
    transform: matrix(1, 0, 0, 1, 171, 29);
  }

  #wrapper3 {
    top: 0;
    left: 0;
    width: 216px;
    height: 59px;
    background: url('./media/images/frame3.png');
    background-size: cover;
    background-repeat: no-repeat;
    transform: matrix(1, 0, 0, 1, 385, 36);
  }

  /* ======================= MAIN GRAPH ===================== */
 #mainGraph {
    width: 664px;
    height: 327px;
    transform: matrix(1, 0, 0, 1, 53, 4);
  }

  .vertical-legend {
    display: inline-block;
    font-weight: 300;
    font-size: 17px;
    font-family: 'Open Sans Condensed';
    transform: rotate(-90deg) matrix(1, 0, 0, 1, -156, -37);
  }

  .y-axis {
    width: 20px;
    height: 360px;
    transform: matrix(1, 0, 0, 1, 27, -15);
  }

  .y-axis-texts {
    display: inline-block;
    width: 100%;
    margin-bottom: 38px;
    font-size: 14px;
    font-family: 'Open Sans Condensed';
    text-align: center;
  }

  .x-axis {
    width: 675px;
    height: 60px;
    transform: matrix(1, 0, 0, 1, 126, 333);
  }

  .x-axis-texts {
    display: inline-block;
    margin-right: 140px;
    font-size: 15px;
    font-family: 'Open Sans Condensed';
    line-height: 1.3;
    text-align: center;
  }

  .x-axis-texts ::v-deep span:nth-child(2) {
    font-weight: 300;
  }

  /* ======================= GRAPH VALUES ===================== */
  .graph-values-wrapper {
    width: 610px;
    height: 340px;
    transform: matrix(1, 0, 0, 1, 82, -10);
  }

  .graph-values {
    font-weight: bold;
    font-size: 20px;
    font-family: 'Open Sans Condensed';
    line-height: 1.2;
  }

  .graph-value-1 {
    transform: matrix(1, 0, 0, 1, 5, 85);
  }

  .graph-value-2 {
    transform: matrix(1, 0, 0, 1, 46, 235);
  }

  .graph-value-3 {
    transform: matrix(1, 0, 0, 1, 91, 292);
  }

  .graph-value-4 {
    transform: matrix(1, 0, 0, 1, 132, 298);
  }

  .graph-value-5 {
    transform: matrix(1, 0, 0, 1, 226, 72);
  }

  .graph-value-6 {
    transform: matrix(1, 0, 0, 1, 267, 239);
  }

  .graph-value-7 {
    transform: matrix(1, 0, 0, 1, 312, 298);
  }

  .graph-value-8 {
    transform: matrix(1, 0, 0, 1, 353, 302);
  }

  .graph-value-9 {
    transform: matrix(1, 0, 0, 1, 448, -3);
  }

  .graph-value-10 {
    transform: matrix(1, 0, 0, 1, 493, 301);
  }

  .graph-value-11 {
    transform: matrix(1, 0, 0, 1, 541, 309);
  }

  .graph-value-12 {
    transform: matrix(1, 0, 0, 1, 575, 304);
  }

  /* ======================= LEGEND ===================== */
  .legend-wrapper {
    width: 70px;
    height: 75px;
    transform: matrix(1, 0, 0, 1, 652, -18);
  }

  .legend-images {
    width: 10px;
    height: 10px;
    margin: 6px 3px 0 0;
    border-radius: 50%;
  }

  .legend-image-1 {
    background-color: #003865;
    transform: matrix(1, 0, 0, 1, -1, -2);
  }

  .legend-image-2 {
    background-color: #007fa3;
    transform: matrix(1, 0, 0, 1, -1, 17);
  }

  .legend-image-3 {
    background-color: #8db9cb;
    transform: matrix(1, 0, 0, 1, -1, 37);
  }

  .legend-image-4 {
    background-color: #bec6c4;
    transform: matrix(1, 0, 0, 1, -1, 57);
  }

  .legend-texts {
    font-weight: 300;
    font-size: 15px;
    font-family: 'Open Sans Condensed';
    line-height: 1.2;
  }

  .legend-text-1 {
    transform: matrix(1, 0, 0, 1, 12, -1);
  }

  .legend-text-2 {
    transform: matrix(1, 0, 0, 1, 12, 18);
  }

  .legend-text-3 {
    transform: matrix(1, 0, 0, 1, 12, 38);
  }

  .legend-text-4 {
    transform: matrix(1, 0, 0, 1, 12, 58);
  }

  /* ======================= FOOTOTES ===================== */
  .footnote {
    transform: matrix(1, 0, 0, 1, -68, 124);
  }

  .footnote ::v-deep b {
    font-weight: bold;
  }
</style>
