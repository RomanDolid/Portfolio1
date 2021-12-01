<i18n>
{
  "deu": {
    "headline": "<span style='color: #003865;'><b>UNTER VUMERITY<sup>™</sup> DEUTLICH WENIGER THERAPIEABBRÜCHE<br>AUFGRUND VON GASTROINTESTINALEN SYMPTOMEN<sup>a,1,2</sup></b></span>",
    "caption": "<span style='color: #003865;'>Anteil der Patienten, die die Behandlung aufgrund gastrointestinaler Ereignisse während des 5-wöchigen<br>Behandlungszeitraums abbrachen<sup>1,2</sup></span>",
    "caption1": "<span style='color: #003865;'>Gesamtpopulation</span>",
    "label1": "<span style='color: #003865;'>TECFIDERA<sup>®</sup></span>",
    "label2": "<span style='color: #003865;'>VUMERITY<sup>™</sup></span>",
    "note1": "<span>(n=251)</span>",
    "note2": "<span>(n=253)</span>",
    "verticalLegend": "<span>Anteil der Patienten (%)</span>",
    "yScale": "<ul><li><span style='color: #4c4d4f;'>5,0</span></li><li><span style='color: #4c4d4f;'>4,0</span></li><li><span style='color: #4c4d4f;'>3,0</span></li><li><span style='color: #4c4d4f;'>2,0</span></li><li><span style='color: #4c4d4f;'>1,0</span></li><li><span style='color: #4c4d4f;'>0,0</span></li</ul>",
    "graphNumber1": "<span style='color: #003865;'>4,8%</span>",
    "graphNumber2": "<span style='color: #003865;'>0,8%</span>",
    "footnote": "<span style='color: #4c4d4f;'><b style='color: #003865;'>a</b> Die Vergleiche wurden nicht auf statistische Signifikanz geprüft, die Unterschiede sind rein numerisch.</span>",
    "hiddenReferences": "<sup refs='ref3 ref10'></sup>"
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
        v-goto="{ chapter: 'tolerability', slide: 'vumerityTolerability1' }"
        class="close-slide-popup-button"
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
          id="label1"
          class="label"
          :text="$t('label1')"
          :component-name="'Label'"
        ></wiz-text>
        <wiz-text
          id="label2"
          class="label"
          :text="$t('label2')"
          :component-name="'Label'"
        ></wiz-text>
        <wiz-text
          id="caption"
          class="caption"
          :component-name="'Caption'"
          :text="$t('caption')"
        ></wiz-text>
        <wiz-text
          id="note1"
          class="note"
          :component-name="'Note'"
          :text="$t('note1')"
        ></wiz-text>
        <wiz-text
          id="note2"
          class="note"
          :component-name="'Note'"
          :text="$t('note2')"
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
        <wiz-bg-contsiner
          id="wrapper1"
          class="wrapper"
          :component-name="'Wrapper'"
        >
          <wiz-text
            id="caption1"
            :component-name="'Caption'"
            :text="$t('caption1')"
          ></wiz-text>
        </wiz-bg-contsiner>
      </wiz-bg-grid-container>
      <wiz-bg-grid-container
        class="footnote-area"
        :component-name="'Footnote area'"
      >
        <wiz-text
          id="footnote"
          class="footnote"
          :component-name="'Footnote'"
          :text="$t('footnote')"
        ></wiz-text>
        <wiz-text
          id="hiddenReferences"
          class="hidden"
          :component-name="'Hidden References'"
          :text="$t('hiddenReferences')"
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
  transform: matrix(1, 0, 0, 1, 112, 77);
}

#graph {
  position: absolute;
  top: 0;
  left: 0;
  width: 488px;
  height: 316px;
  transform: matrix(1, 0, 0, 1, 147, 81);
}

.vertical-legend {
  position: absolute;
  top: 0;
  left: 0;
  width: 290px;
  color: #4c4d4f;
  font-weight: 300;
  font-size: 17px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 21px;
  text-align: center;
  transform: matrix(1, 0, 0, 1, -53, 224) rotate(-90deg);
}

#yScale {
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  transform: matrix(1, 0, 0, 1, 121, 74);
}

#yScale::v-deep li {
  position: relative;
  width: 20px;
  margin-bottom: 48.3px;
  font-weight: 300;
  font-size: 15px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 1;
  text-align: right;
}

.label {
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  font-weight: 700;
  font-size: 15px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 20px;
  text-align: center;
}

#label1 {
  transform: matrix(1, 0, 0, 1, 236, 405);
}
#label2 {
  transform: matrix(1, 0, 0, 1, 428, 405);
}

.caption {
  color: #003865;
  font-weight: 800;
  font-size: 18px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 21px;
}

#caption {
  transform: matrix(1, 0, 0, 1, -37, -2);
  text-align: center;
}

.note {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 15px;
  font-family: 'Open Sans Condensed', sans-serif;
}
#note1 {
  transform: matrix(1, 0, 0, 1, 265, 420);
}
#note2 {
  transform: matrix(1, 0, 0, 1, 458, 420);
}
#caption1 {
  font-weight: 800;
  font-size: 15px;
  transform: matrix(1, 0, 0, 1, 0, 7);
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
  transform: matrix(1, 0, 0, 1, 262, 60);
}
#graphNumber2 {
  transform: matrix(1, 0, 0, 1, 455, 310);
}

#wrapper1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 292px;
  height: 40px;
  border-top: 1px solid rgb(76, 77, 79);
  text-align: center;
  transform: matrix(1, 0, 0, 1, 236, 445);
}

#footnote {
  transform: matrix(1, 0, 0, 1, -68, 124);
}
#footnote2 {
  transform: matrix(1, 0, 0, 1, -68, 103);
}
</style>
