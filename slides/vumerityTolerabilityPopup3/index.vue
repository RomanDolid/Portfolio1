<i18n>
{
  "deu": {
    "headline": "<span style='color: #003865;'><b>EVOLVE MS-2: PATIENTEN MIT ‘ZIEMLICH STARKEN’ ODER ‘EXTREMEN’<br>BEEINTRÄCHTIGUNGEN VON ALLTAGSAKTIVITÄTEN DURCH<br>GASTROINTESTINALE SYMPTOME<sup refs='ref10'></sup></b></span>",
    "nestLabel1": "<span style='color: #003865;'>Übelkeit</span>",
    "nestLabel2": "<span style='color: #003865;'>Erbrechen</span>",
    "nestLabel3": "<span style='color: #003865;'>Schmerzen im<br>Oberbauch</span>",
    "nestLabel4": "<span style='color: #003865;'>Schmerzen im<br>Unterbauch</span>",
    "nestLabel5": "<span style='color: #003865;'>Diarrhö</span>",
    "nestLabel6": "<span style='color: #003865;'>Gastrointestinale<br>Ereignisse</span>",
    "nestLabel7": "<span style='color: #003865;'>Gastrointestinale<br>Ereignisse</span>",
    "yScale": "<ul><li><span style='color: #4c4d4f;'>30</span></li><li><span style='color: #4c4d4f;'>20</span></li><li><span style='color: #4c4d4f;'>10</span></li><li><span style='color: #4c4d4f;'>0</span></li></ul>",
    "graphNumber1": "<span style='color: #003865;'>2,4</span>",
    "graphNumber2": "<span style='color: #003865;'>6,8</span>",
    "graphNumber3": "<span style='color: #003865;'>1,2</span>",
    "graphNumber4": "<span style='color: #003865;'>5,6</span>",
    "graphNumber5": "<span style='color: #003865;'>1,2</span>",
    "graphNumber6": "<span style='color: #003865;'>6,8</span>",
    "graphNumber7": "<span style='color: #003865;'>1,2</span>",
    "graphNumber8": "<span style='color: #003865;'>3,2</span>",
    "graphNumber9": "<span style='color: #003865;'>3,6</span>",
    "graphNumber10": "<span style='color: #003865;'>6,4</span>",
    "graphNumber11": "<span style='color: #003865;'>9,5</span>",
    "graphNumber12": "<span style='color: #003865;'>28,9</span>",
    "graphNumber13": "<span style='color: #003865;'>7,9</span>",
    "graphNumber14": "<span style='color: #003865;'>10,8</span>",
    "verticalLegend": "<span style='color: #4c4d4f;'>Patienten mit 'ziemlich starken' oder 'extremen' Beeinträchtigungen<br>von Alltagsaktivitäten durch gastrointestinale Symptome (%)</span>",
    "caption1": "<span style='color: #003865;'>VUMERITY<sup>™</sup> (n=253)</span>",
    "caption2": "<span style='color: #003865;'>TECFIDERA<sup>®</sup> (n=249)</span>",
    "title1": "<span style='color: #003865;'><b>IGISIS</b></span>",
    "title2": "<span style='color: #003865;'><b>GGISIS</b></span>",
    "footnote1": "<span style='color: #4c4d4f;'><b style='color: #003865;'>GGISIS:</b> Global gastrointestinal symptom and impact scale; <b b style='color: #003865;'>IGISIS:</b> Individual gastrointestinal symptom and impact scale.</span>"
  }
}
</i18n>

<template>
  <wiz-slide
    class="slide-popup"
    @slideswipe.native.stop
  >
    <wiz-bg-container class="custom-popup">
      <wiz-bg-close-popup-button
        class="close-slide-popup-button"
        component-name="Custom popup"
      ></wiz-bg-close-popup-button>
      <wiz-bg-grid-container
        class="headline-wrapper"
        :component-name="'Headline &amp; Subhead container'"
      >
        <wiz-text
          id="headline"
          class="headline"
          :text="$t('headline')"
          :component-name="'Headline'"
        ></wiz-text>
      </wiz-bg-grid-container>
      <wiz-bg-grid-container
        class="content-area"
        :component-name="'Content area'"
      >
        <wiz-image
          id="graph"
          src="./media/images/graph.png"
          :component-name="'Graph'"
        ></wiz-image>
        <wiz-bg-container
          id="wrapper"
          class="legend-wrapper"
          :component-name="'Wrapper'"
        >
          <wiz-bg-container
            id="legendWrapper1"
            :component-name="'Wrapper'"
          >
            <wiz-image
              id="icon1"
              src="./media/images/icon1.png"
              class="icon icon-legend"
              :component-name="'Icon'"
            ></wiz-image>
            <wiz-text
              id="caption1"
              :text="$t('caption1')"
              class="caption"
              :component-name="'Caption'"
            ></wiz-text>
          </wiz-bg-container>
          <wiz-bg-container
            id="legendWrapper2"
            :component-name="'Wrapper'"
          >
            <wiz-image
              id="icon2"
              src="./media/images/icon2.png"
              class="icon icon-legend"
              :component-name="'Icon'"
            ></wiz-image>
            <wiz-text
              id="caption2"
              class="caption"
              :text="$t('caption2')"
              :component-name="'Caption'"
            ></wiz-text>
          </wiz-bg-container>
        </wiz-bg-container>

        <wiz-text
          id="verticalLegend"
          class="vertical-legend"
          :text="$t('verticalLegend')"
          :component-name="'Legend'"
        ></wiz-text>
        <wiz-text
          id="yScale"
          :text="$t('yScale')"
          :component-name="'Scale'"
        ></wiz-text>
        <wiz-text
          id="graphNumber1"
          class="number"
          :text="$t('graphNumber1')"
          :component-name="'Number'"
        ></wiz-text>
        <wiz-text
          id="graphNumber2"
          class="number"
          :text="$t('graphNumber2')"
          :component-name="'Number'"
        ></wiz-text>
        <wiz-text
          id="graphNumber3"
          class="number"
          :text="$t('graphNumber3')"
          :component-name="'Number'"
        ></wiz-text>
        <wiz-text
          id="graphNumber4"
          class="number"
          :text="$t('graphNumber4')"
          :component-name="'Number'"
        ></wiz-text>
        <wiz-text
          id="graphNumber5"
          class="number"
          :text="$t('graphNumber5')"
          :component-name="'Number'"
        ></wiz-text>
        <wiz-text
          id="graphNumber6"
          class="number"
          :text="$t('graphNumber6')"
          :component-name="'Number'"
        ></wiz-text>
        <wiz-text
          id="graphNumber7"
          class="number"
          :text="$t('graphNumber7')"
          :component-name="'Number'"
        ></wiz-text>
        <wiz-text
          id="graphNumber8"
          class="number"
          :text="$t('graphNumber8')"
          :component-name="'Number'"
        ></wiz-text>
        <wiz-text
          id="graphNumber9"
          class="number"
          :text="$t('graphNumber9')"
          :component-name="'Number'"
        ></wiz-text>
        <wiz-text
          id="graphNumber10"
          class="number"
          :text="$t('graphNumber10')"
          :component-name="'Number'"
        ></wiz-text>
        <wiz-text
          id="graphNumber11"
          class="number"
          :text="$t('graphNumber11')"
          :component-name="'Number'"
        ></wiz-text>
        <wiz-text
          id="graphNumber12"
          class="number"
          :text="$t('graphNumber12')"
          :component-name="'Number'"
        ></wiz-text>
        <wiz-text
          id="graphNumber13"
          class="number"
          :text="$t('graphNumber13')"
          :component-name="'Number'"
        ></wiz-text>
        <wiz-text
          id="graphNumber14"
          class="number"
          :text="$t('graphNumber14')"
          :component-name="'Number'"
        ></wiz-text>
        <wiz-text
          id="nestLabel1"
          class="nest-label"
          :text="$t('nestLabel1')"
          :component-name="'Nest label'"
        ></wiz-text>
        <wiz-text
          id="nestLabel2"
          class="nest-label"
          :text="$t('nestLabel2')"
          :component-name="'Nest label'"
        ></wiz-text>
        <wiz-text
          id="nestLabel3"
          class="nest-label"
          :text="$t('nestLabel3')"
          :component-name="'Nest label'"
        ></wiz-text>
        <wiz-text
          id="nestLabel4"
          class="nest-label"
          :text="$t('nestLabel4')"
          :component-name="'Nest label'"
        ></wiz-text>
        <wiz-text
          id="nestLabel5"
          class="nest-label"
          :text="$t('nestLabel5')"
          :component-name="'Nest label'"
        ></wiz-text>
        <wiz-text
          id="nestLabel6"
          class="nest-label"
          :text="$t('nestLabel6')"
          :component-name="'Nest label'"
        ></wiz-text>
        <wiz-text
          id="nestLabel7"
          class="nest-label"
          :text="$t('nestLabel7')"
          :component-name="'Nest label'"
        ></wiz-text>

        <wiz-bg-container
          id="wrapper1"
          class="wrapper"
          :component-name="'Wrapper'"
        >
          <wiz-text
            id="title1"
            class="title"
            :text="$t('title1')"
            :component-name="'Caption'"
          ></wiz-text>
        </wiz-bg-container>
        <wiz-bg-container
          id="wrapper2"
          class="wrapper"
          :component-name="'Wrapper'"
        >
          <wiz-text
            id="title2"
            class="title"
            :text="$t('title2')"
            :component-name="'Caption'"
          ></wiz-text>
        </wiz-bg-container>
      </wiz-bg-grid-container>
      <wiz-bg-grid-container
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
          id="hiddenReferences"
          class="hidden"
          :text="$t('hiddenReferences')"
          :component-name="'Hidden References'"
        ></wiz-text>
      </wiz-bg-grid-container>
    </wiz-bg-container>
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
.headline-wrapper #headline {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 25px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 30px;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 60, 81);
}

#graph {
  position: absolute;
  top: 0;
  left: 0;
  width: 746px;
  height: 325px;
  transform: matrix(1, 0, 0, 1, 54, 75);
}

#wrapper .legend-wrapper {
  position: absolute;
  width: 119px;
  height: 20px;
}

.vertical-legend {
  position: absolute;
  top: 0;
  left: 0;
  width: 380px;
  font-weight: 300;
  font-size: 17px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 20px;
  text-align: center;
  transform: matrix(1, 0, 0, 1, -200, 217) rotate(-90deg);
}

.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  border-top: 1px solid #4c4d4f;
}

.title {
  position: absolute;
  top: 0;
  left: 0;
  color: #003865;
  font-weight: 800;
  font-size: 15px;
  font-family: 'Open Sans', sans-serif;
  line-height: 18px;
}

.title::v-deep b {
  font-weight: 800;
}

#icon1 {
  position: absolute;
  top: 0;
  left: 0;
  overflow: visible;
  width: 9px;
  height: 9px;
  transform: matrix(1, 0, 0, 1, -14, -10);
}

#icon2 {
  position: absolute;
  top: 0;
  left: 0;
  overflow: visible;
  width: 9px;
  height: 14px;
  transform: matrix(1, 0, 0, 1, -14, -8);
}

.caption {
  position: absolute;
  top: 0;
  left: 0;
  color: #003865;
  font-weight: 300;
  font-size: 15px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 18px;
}

#caption1 {
  transform: matrix(1, 0, 0, 1, 0, -16);
}
#caption2 {
  transform: matrix(1, 0, 0, 1, 0, -10);
}

.footnote {
  position: absolute;
  top: 0;
  left: 0;
}

#footnote1 {
  transform: matrix(1, 0, 0, 1, -67, 124);
}

#legendWrapper2 {
  transform: matrix(1, 0, 0, 1, 750, 93);
}

#legendWrapper1 {
  transform: matrix(1, 0, 0, 1, 750, 75);
}

#title1 {
  transform: matrix(1, 0, 0, 1, 274, 12);
}

#title2 {
  transform: matrix(1, 0, 0, 1, 25, 14);
}

.nest-label {
  display: inline-block;
  width: 100px;
  font-weight: 700;
  font-size: 15px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 17px;
  text-align: center;
}

#nestLabel1 {
  transform: matrix(1, 0, 0, 1, 54, 390);
}
#nestLabel2 {
  transform: matrix(1, 0, 0, 1, 50, 390);
}

#nestLabel3 {
  transform: matrix(1, 0, 0, 1, 44, 407);
}
#nestLabel4 {
  transform: matrix(1, 0, 0, 1, 39, 407);
}
#nestLabel5 {
  transform: matrix(1, 0, 0, 1, 32, 390);
}
#nestLabel6 {
    transform: matrix(1, 0, 0, 1, 10, 407);
    width: 135px;
}

#nestLabel7 {
    transform: matrix(1, 0, 0, 1, 10, 407);
    width: 127px;
    position: absolute;
}

#yScale {
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  transform: matrix(1, 0, 0, 1, -10, 67);
}

#yScale::v-deep li {
  position: relative;
  width: 50px;
  margin-bottom: 93.7px;
  font-weight: 300;
  font-size: 15px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 1;
  text-align: right;
}

.number {
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  font-weight: 800;
  font-size: 25px;
  font-family: 'Open Sans Condensed', sans-serif;
}
#graphNumber1 {
  transform: matrix(1, 0, 0, 1, 71, 339);
}
#graphNumber2 {
  transform: matrix(1, 0, 0, 1, 108, 292);
}
#graphNumber3 {
  transform: matrix(1, 0, 0, 1, 172, 352);
}
#graphNumber4 {
  transform: matrix(1, 0, 0, 1, 208, 305);
}
#graphNumber5 {
  transform: matrix(1, 0, 0, 1, 272, 352);
}
#graphNumber6 {
  transform: matrix(1, 0, 0, 1, 309, 292);
}
#graphNumber7 {
  transform: matrix(1, 0, 0, 1, 372, 352);
}
#graphNumber8 {
  transform: matrix(1, 0, 0, 1, 409, 330);
}
#graphNumber9 {
  transform: matrix(1, 0, 0, 1, 472, 326);
}
#graphNumber10 {
  transform: matrix(1, 0, 0, 1, 508, 296);
}
#graphNumber11 {
  transform: matrix(1, 0, 0, 1, 573, 262);
}
#graphNumber12 {
  transform: matrix(1, 0, 0, 1, 603, 54);
}
#graphNumber13 {
  transform: matrix(1, 0, 0, 1, 703, 280);
}
#graphNumber14 {
  transform: matrix(1, 0, 0, 1, 734, 248);
}

#wrapper1 {
  width: 590px;
  height: 50px;
  transform: matrix(1, 0, 0, 1, 69, 450);
}

#wrapper2 {
  width: 100px;
  height: 50px;
  transform: matrix(1, 0, 0, 1, 687, 450);
}
</style>
