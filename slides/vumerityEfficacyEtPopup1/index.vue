<i18n>
{
  "eng": {
    "headline": "<span style='color: #003865;'><b>BEREITS NACH 7 WOCHEN WAR EINE SIGNIFIKANTE REDUKTION DER GD+-LÄSIONEN<br>SOWOHL UNTER VUMERITY<sup>™</sup> ALS AUCH TECFIDERA<sup>®</sup> NACHWEISBAR<sup refs='ref9'></sup></b></span>",
    "graphTitle": "<span style='color: #003865;'><b>Anzahl der Gd+-Läsionen vom Screening in EVOLVE-MS-2 bis Woche 48 in EVOLVE-MS-1<sup refs='ref9'></sup></b></span>",
    "description1": "<span style='color: #003865;'>90<sup>%</sup> <br><span><b>REDUKTION nach<br>~55 Wochen</b></span><br/><span>p<0,0001</span></span>",
    "description2": "<span style='color: #003865;'> 30<sup>%</sup> <br><span><b>REDUKTION nach<br>~7 Wochen</b></span><br/><span>p=0,0090</span></span>",
    "verticalLegend": "<span style='color: #4c4d4f;'>Mittlere Anzahl der Gd+-Läsionen (SE)</span>",
    "nestLabel1": "<span style='color: #4c4d4f;'><b style='color: #003865;'>EVOLVE-MS-2 <br>Baseline</b> <br><span>(TEC/VUM, n=314)</span></span>",
    "nestLabel2": "<span style='color: #4c4d4f;'><b style='color: #003865;'>EVOLVE-MS-1 <br>Baseline</b> <br><span>(VUM, n=314)</span></span>",
    "nestLabel3": "<span style='color: #4c4d4f;'><b style='color: #003865;'>EVOLVE-MS-1 <br>Woche 48</b> <br><span>(VUM, n=314)</span></span>",
    "caption1": "<span style='color: #4c4d4f;'>(0,14)</span>",
    "caption2": "<span style='color: #4c4d4f;'>(0,1)</span>",
    "caption3": "<span style='color: #4c4d4f;'>(0,04)</span>",
    "caption4": "<span style='color: #003865;'>1,0</span>",
    "caption5": "<span style='color: #003865;'>0,7</span>",
    "caption6": "<span style='color: #003865;'>0,1</span>",
    "footnote": "<span style='color: #4c4d4f;'><b style='color: #003865;'>Gd+:</b> Gadolinium-aufnehmend; <b style='color: #003865;'>MS:</b> Multiple Sklerose; <b style='color: #003865;'>SE:</b> Standardfehler; <b style='color: #003865;'>TEC:</b> Tecfidera<sup>®</sup>; <b style='color: #003865;'>VUM:</b> VUMERITY<sup>™</sup>.</span>",
    "yScale": "<ul><li><span style='color: #4c4d4f;'>1,4</span></li><li><span style='color: #4c4d4f;'>1,2</span></li><li><span style='color: #4c4d4f;'>1,0</span></li><li><span style='color: #4c4d4f;'>0,8</span></li><li><span style='color: #4c4d4f;'>0,6</span></li><li><span style='color: #4c4d4f;'>0,4</span></li><li><span style='color: #4c4d4f;'>0,2</span></li><li><span style='color: #4c4d4f;'>0,0</span></li></ul>"
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
        :component-name="'Close popup button'"
      ></wiz-bg-close-popup-button>
      <wiz-bg-grid-container
        class="headline-wrapper"
        :component-name="'Headline Subhead container'"
      >
        <wiz-text
          id="headline"
          class="headline-caption pa"
          :text="$t('headline')"
          :component-name="'Headline'"
        ></wiz-text>
      </wiz-bg-grid-container>

      <wiz-bg-grid-container
        class="content-area"
        component-name="Content area"
      >
        <wiz-bg-container
          id="graphContainer"
          class="graph-container pa"
          :component-name="'Graph container'"
        >
          <wiz-text
            id="graphCaption"
            :text="$t('graphTitle')"
            class="pa"
            :component-name="'Graph caption'"
          ></wiz-text>
          <wiz-image
            id="graph"
            src="./media/images/graph.png"
            class="pa"
            :component-name="'Graph'"
          ></wiz-image>
          <wiz-image
            id="graphFigure1"
            src="./media/images/line1.png"
            class="pa"
            :component-name="'Line'"
          ></wiz-image>
          <wiz-image
            id="graphFigure2"
            src="./media/images/line2.png"
            class="pa"
            :component-name="'Line'"
          ></wiz-image>
          <wiz-text
            id="verticalLegend"
            class="vertical-legend pa"
            :text="$t('verticalLegend')"
            component-name="Legend"
          ></wiz-text>
          <wiz-bg-container
            id="circle1"
            class="pa"
            :component-name="'Circle container'"
          >
            <wiz-text
              id="circleText1"
              :text="$t('description1')"
              class="circle-text pa"
              :component-name="'Paragraph'"
            ></wiz-text>
          </wiz-bg-container>
          <wiz-bg-container
            id="circle2"
            class="pa"
            :component-name="'Circle container'"
          >
            <wiz-text
              id="circleText2"
              :text="$t('description2')"
              class="circle-text pa"
              :component-name="'Paragraph'"
            ></wiz-text>
          </wiz-bg-container>
          <wiz-text
            id="caption1"
            :text="$t('caption1')"
            class="caption pa"
            :component-name="'Caption'"
          ></wiz-text>
          <wiz-text
            id="caption2"
            :text="$t('caption2')"
            class="caption pa"
            :component-name="'Caption'"
          ></wiz-text>
          <wiz-text
            id="caption3"
            :text="$t('caption3')"
            class="caption pa"
            :component-name="'Caption'"
          ></wiz-text>

          <wiz-text
            id="caption4"
            :text="$t('caption4')"
            class="caption-value pa"
            :component-name="'Caption'"
          ></wiz-text>
          <wiz-text
            id="caption5"
            :text="$t('caption5')"
            class="caption-value pa"
            :component-name="'Caption'"
          ></wiz-text>
          <wiz-text
            id="caption6"
            :text="$t('caption6')"
            class="caption-value pa"
            :component-name="'Caption'"
          ></wiz-text>
          <wiz-text
            id="horizontalLegend1"
            class="horizontal-legend pa"
            :text="$t('nestLabel1')"
            :component-name="'Legend'"
          ></wiz-text>
          <wiz-text
            id="horizontalLegend2"
            class="horizontal-legend pa"
            :text="$t('nestLabel2')"
            :component-name="'Legend'"
          ></wiz-text>
          <wiz-text
            id="horizontalLegend3"
            class="horizontal-legend pa"
            :text="$t('nestLabel3')"
            :component-name="'Legend'"
          ></wiz-text>
          <wiz-text
            id="yScale"
            class="scale"
            :text="$t('yScale')"
            :component-name="'Legend'"
          ></wiz-text>
        </wiz-bg-container>
      </wiz-bg-grid-container>
      <wiz-bg-grid-container
        class="footnote-area"
        :component-name="'Footnote area'"
      >
        <wiz-text
          id="footnote"
          class="footnote"
          :text="$t('footnote')"
          component-name="Footnote"
        ></wiz-text>
      </wiz-bg-grid-container>
    </wiz-bg-container>
  </wiz-slide>
</template>
<script>
export default {
  data() {
    return {
      common: {
        studyDesign: {
          actionType: 'navigation',
          disabled: false,
          goToSlide: {
            chapter: 'studyDesign',
            slide: 'vumerityStudyDesign1',
          },
        },
      },
    };
  },
};
</script>
<style scoped>
.pa {
  position: absolute;
}

#headline {
  font-size: 25px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 33px;
  text-align: center;
  transform: matrix(1, 0, 0, 1, -38, 82);
}

#graphContainer {
  width: 760px;
  height: 552px;
  transform: matrix(1, 0, 0, 1, -20, -18);
}

#graphCaption {
  font-size: 18px;
  font-family: 'Open Sans Condensed', sans-serif;
  transform: matrix(1, 0, 0, 1, 76, 8);
}

#graph {
  width: 664px;
  height: 313px;
  transform: matrix(1, 0, 0, 1, 75, 175);
}

.scale {
  font-weight: 300;
  font-size: 15px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 1;
}

#yScale {
  position: absolute;
  top: 0;
  left: 0;
  width: 59px;
  transform: matrix(1, 0, 0, 1, 12, 168);
}

#yScale::v-deep li {
  position: relative;
  width: 50px;
  margin-bottom: 29.7px;
  text-align: right;
}

#verticalLegend {
  width: 220px;
  font-weight: 300;
  font-size: 17px;
  font-family: 'Open Sans Condensed', sans-serif;
  transform: matrix(1, 0, 0, 1, -93, 287) rotate(-90deg);
}

#horizontalLegend1 {
  transform: matrix(1, 0, 0, 1, 167, 497);
}
#horizontalLegend2 {
  transform: matrix(1, 0, 0, 1, 369, 498);
}
#horizontalLegend3 {
  transform: matrix(1, 0, 0, 1, 560, 498);
}
.horizontal-legend {
  font-size: 15px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 16px;
  text-align: center;
}

#graphFigure1 {
  width: 386px;
  height: 285px;
  transform: matrix(1, 0, 0, 1, 213, 100);
}
#graphFigure2 {
  width: 193px;
  height: 79px;
  transform: matrix(1, 0, 0, 1, 213, 167);
}

#circleText1 {
  width: 120px;
  transform: matrix(1, 0, 0, 1, -4, 25);
}
#circleText2 {
  width: 120px;
  transform: matrix(1, 0, 0, 1, -4, 25);
}

#circle1 {
  width: 110px;
  height: 110px;
  border: 2px solid #ce0058;
  border-radius: 50%;
  background: #fff;
  transform: matrix(1, 0, 0, 1, 449, 42);
}
#circle2 {
  width: 110px;
  height: 110px;
  border: 2px solid #b6bfbd;
  border-radius: 50%;
  background: #fff;
  transform: matrix(1, 0, 0, 1, 252, 109);
}
.circle-text {
  font-weight: 800;
  font-size: 35px;
  line-height: 17px;
  text-align: center;
}
.circle-text >>> span span {
  font-size: 15px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 0px;
}
.circle-text >>> span span:nth-of-type(2) {
  font-size: 12px;
}
.circle-text .sup {
  vertical-align: super;
  font-size: 60%;
  line-height: 0;
}

.caption {
  width: 60px;
  font-weight: 300;
  font-size: 18px;
  font-family: 'Open Sans Condensed', sans-serif;
}

#caption1 {
  transform: matrix(1, 0, 0, 1, 196, 198);
}
#caption2 {
  transform: matrix(1, 0, 0, 1, 392, 267);
}
#caption3 {
  transform: matrix(1, 0, 0, 1, 580, 407);
}

#caption4 {
  transform: matrix(1, 0, 0, 1, 201, 177);
}
#caption5 {
  transform: matrix(1, 0, 0, 1, 396, 244);
}
#caption6 {
  transform: matrix(1, 0, 0, 1, 587, 378);
}

.caption-value {
  font-weight: 700;
  font-size: 20px;
  font-family: 'Open Sans Condensed', sans-serif;
}

#footnote {
  transform: matrix(1, 0, 0, 1, -68, 124);
}

</style>
