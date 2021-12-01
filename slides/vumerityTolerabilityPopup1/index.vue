<i18n>
{
  "deu": {
    "headline": "<span style='color: #003865;'><b>VUMERITY<sup>™</sup> ZEIGTE EIN SIGNIFIKANT VERBESSERTES GASTROINTESTINALES<br>VERTRÄGLICHKEITSPROFIL IM VERGLEICH ZU TECFIDERA<sup>®a,</sup><sup refs='ref3'></sup></b></span>",
    "verticalLegend": "<span style='color: #4c4d4f;'>Mittlere Anzahl der Tage mit gastrointestinalen<br>Symptomen im Verhältnis zur Exposition (95%-KI)</span>",
     "yScale": "<ul><li><span style='color: #4c4d4f;'>4</span></li><li><span style='color: #4c4d4f;'>3</span></li><li><span style='color: #4c4d4f;'>2</span></li><li><span style='color: #4c4d4f;'>1</span></li><li><span style='color: #4c4d4f;'>0</span></li></ul>",
    "label1": "<span style='color: #003865;'><b>TECFIDERA<sup>®</sup></b></span><br><span class='span-style1' style='color: #4c4d4f;'>(n=249)</span>",
    "label2": "<span style='color: #003865;'><b>VUMERITY<sup>™</sup></b></span><br><span class='span-style1' style='color: #4c4d4f;'>(n=253)</span>",
    "graphNumber1": "<span style='color: #003865;'>2,6</span>",
    "graphNumber2": "<span style='color: #003865;'>1,4</span>",
    "caption": "<span style='color: #4c4d4f;'>Relative Rate vs. Tecfidera<sup>®</sup><br>(95%-KI: 0,54 (0,39-0,75))<br><i>p</i>=0,0003</span>",
    "description": "<span style='color: rgb(0,127,163);'><b>Unter VUMERITY<sup>™</sup> signifikant weniger<br>Tage mit gastrointestinalen Symptomen<sup refs='ref3'></sup></b></span>",
    "footnote1": "<span style='color: #4c4d4f;'><b style='color: #003865;'>a</b> Intensität von Übelkeit, Erbrechen, Oberbauchschmerzen, Unterbauchschmerzen und Diarrhö in den letzten 12 Stunden.<sup refs='ref3'></sup><br>Die von den Patienten beurteilte gastrointestinale Verträglichkeit basierte auf IGISIS-Scores und die Auswertung inkludierte ≥ 1 Beurteilung nach Baseline.<sup refs='ref3'></sup></span>",
    "footnote2": "<span style='color: #4c4d4f;'><b style='color: #003865;'>KI:</b> Konfidenzinterval; <b style='color: #003865;'>IGISIS:</b> Individual gastrointestinal symptom and impact scale.</span>",
    "bubbleNumber": "<span style='color: #003865;'>46</span>",
    "bubbleText": "<span style='color: #003865;'><b>REDUKTION</b></span>"
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
        :component-name="'Headline &amp; Subhead container'"
      >
        <wiz-text
          id="headline"
          class="headline pa"
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
          class="pa"
          src="./media/images/graph.png"
          :component-name="'Graph'"
        ></wiz-image>
        <wiz-text
          id="verticalLegend"
          class="vertical-legend pa"
          :text="$t('verticalLegend')"
          :component-name="'Legend'"
        ></wiz-text>
        <wiz-text
          id="yScale"
          class="pa"
          :text="$t('yScale')"
          :component-name="'Scale'"
        ></wiz-text>
        <wiz-text
          id="label1"
          class="label pa"
          :text="$t('label1')"
          :component-name="'Label'"
        ></wiz-text>
        <wiz-text
          id="label2"
          class="label pa"
          :text="$t('label2')"
          :component-name="'Label'"
        ></wiz-text>
        <wiz-bg-bubble
          id="bubble1"
          class="bbls"
          :arrow="'./media/images/arrow.png'"
          :show-before-text="false"
          :after-text="$t('bubbleText')"
          :number="$t('bubbleNumber')"
          :description="$t('caption')"
          :component-name="'Bubble'"
        ></wiz-bg-bubble>
        <wiz-text
          id="description"
          class="pa"
          :text="$t('description')"
          :component-name="'Description'"
        ></wiz-text>
        <wiz-text
          id="graphNumber1"
          class="number pa"
          :text="$t('graphNumber1')"
          :component-name="'Number'"
        ></wiz-text>
        <wiz-text
          id="graphNumber2"
          class="number pa"
          :text="$t('graphNumber2')"
          :component-name="'Number'"
        ></wiz-text>
      </wiz-bg-grid-container>
      <wiz-bg-grid-container
        id="footnoteArea"
        class="footnote-area"
        :component-name="'Footnote area'"
      >
        <wiz-text
          id="footnote1"
          class="footnote pa"
          :text="$t('footnote1')"
          :component-name="'Footnote'"
        ></wiz-text>
        <wiz-text
          id="footnote2"
          class="footnote pa"
          :text="$t('footnote2')"
          :component-name="'Footnote'"
        ></wiz-text>
        <wiz-text
          id="hiddenRefs"
          class="hidden pa"
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
.headline-wrapper #headline {
  top: 0;
  left: 0;
  font-size: 25px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 30px;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 25, 97);
}

#graph {
  top: 0;
  left: 0;
  width: 476px;
  height: 382px;
  transform: matrix(1, 0, 0, 1, 54, 18);
}

.vertical-legend {
  top: 0;
  left: 0;
  width: 290px;
  font-weight: 300;
  font-size: 17px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 21px;
  text-align: center;
  transform: matrix(1, 0, 0, 1, -157, 216) rotate(-90deg);
}

#yScale {
  top: 0;
  left: 0;
  width: 30px;
  transform: matrix(1, 0, 0, 1, 31, 81);
}

#yScale::v-deep li {
  position: relative;
  width: 14px;
  margin-bottom: 64px;
  font-weight: 300;
  font-size: 14px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 1;
  text-align: right;
}

.label {
  top: 0;
  left: 0;
  width: 100px;
  font-weight: 700;
  font-size: 14px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 20px;
  text-align: center;
}

.label::v-deep .span-style1 {
  font-weight: 300;
  font-size: 14px;
}

#label1 {
  transform: matrix(1, 0, 0, 1, 141, 409);
}
#label2 {
  transform: matrix(1, 0, 0, 1, 336, 409);
}

#bubbleNumber {
  top: 0;
  left: 0;
  width: 100px;
  font-weight: 800;
  font-size: 35px;
  transform: matrix(1, 0, 0, 1, 358, 28);
}
#bubbleNumber::v-deep .span-style2 {
  font-weight: 800;
  font-size: 18px;
  font-family: 'Open Sans Condensed', sans-serif;
  transform: matrix(1, 0, 0, 1, 1, 10);
}

#bubbleText {
  top: 0;
  left: 0;
  width: 100px;
  font-weight: 800;
  font-size: 15px;
  font-family: 'Open Sans Condensed', sans-serif;
  transform: matrix(1, 0, 0, 1, 352, 71);
}

.number {
  top: 0;
  left: 0;
  width: 50px;
  font-weight: 800;
  font-size: 21px;
  font-family: 'Open Sans Condensed', sans-serif;
}
#graphNumber1 {
  transform: matrix(1, 0, 0, 1, 178, 122);
}
#graphNumber2 {
  transform: matrix(1, 0, 0, 1, 373, 219);
}

#description {
  top: 0;
  left: 0;
  font-size: 17px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 22px;
  transform: matrix(1, 0, 0, 1, 548, 225);
}

#caption {
  top: 0;
  left: 0;
  font-size: 15px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 18px;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 324, 141);
}

#footnoteArea.footnote-area {
  width: 787px;
}

#footnote1 {
  text-indent: -7px;
  transform: matrix(1, 0, 0, 1, -61, 92);
}

#footnote2 {
  transform: matrix(1, 0, 0, 1, -67, 124);
}
#bubble1::v-deep .arrow img{
    display: block;
  }
#bubble1 {
  transform: matrix(1, 0, 0, 1, 331, 18);
}
#app #bubble1 .description{
  width: 126%;
}
 #app .bbls::v-deep .description{
    width: 126%;
    top: 115%;
    left: -12px;
  }
#app .bbls::v-deep .percentage {
  vertical-align: top;
}
</style>
