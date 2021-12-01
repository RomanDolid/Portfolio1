<i18n>
{
  "deu": {
    "headline": "<b>ICH BRAUCHE EINE BEHANDLUNG,<br/><mark>DIE GUT VERTRÄGLICH IST<sup refs='ref3 ref10'></sup></mark></b>",
    "caption1": "<span style='color: #003865;'><b>EVOLVE MS-2: VUMERITY<sup>™</sup>-Patienten berichten über eine signifikant<br>verbesserte gastrointestinale Verträglichkeit im Vergleich zu Tecfidera<sup>®a,</sup><sup refs='ref3'>1</sup></b></span>",
    "title1": "<span style='color: #4c4d4f;'><b style='color: #007fa3;'>Weniger Beeinträchtigungen</b><br/>durch GI-Symptome bei<br>Alltagsaktivitäten<sup>b,</sup><sup refs='ref10'></sup></span>",
    "title2": "<span style='color: #4c4d4f;'><b style='color: #007fa3;'>Geringerer Einsatz</b><br/>symptomatischer<br>Begleitmedikation<sup>b,</sup><sup refs='ref10'></sup></span>",
    "title3": "<span style='color: #4c4d4f;'><b style='color: #007fa3;'>Geringere Auswirkung</b><br/>auf die<br>Arbeitsproduktivität<sup>b,</sup><sup refs='ref10'></sup></span>",
    "title4": "<span style='color: #4c4d4f;'><b style='color: #007fa3;'>Weniger Fehlstunden</b><br/>aufgrund von<br>GI-Symptomen<sup>b,</sup><sup refs='ref10'></sup></span>",
    "verticalLegend1": "<span style='color: #4c4d4f;'>Patienten mit GI-Symptomen, die ihre<br>Alltagsaktivitäten beeinträchtigten (%)</span>",
    "verticalLegend2": "<span style='color: #4c4d4f;'>Patienten, die Begleitmedikation<br>gegen GI-Symptome einnahmen (%)</span>",
    "verticalLegend3": "<span style='color: #4c4d4f;'>Patienten mit GI-Symptomen, die<br>Arbeitsproduktivität beeinträchtigten (%)</span>",
    "verticalLegend4": "<span style='color: #4c4d4f;'>Tage mit ≥ 1 Fehlstunde</span>",
    "legend1": "<span style='color: #003865;'><b>VUMERITY<sup>™</sup></b></span>",
    "legend2": "<span style='color: #751d66;'><b>TECFIDERA<sup>®</sup></b></span>",
    "note1": "<span style='color: #003865;'>(24/253)</span>",
    "note2": "<span style='color: #751d66;'>(72/249)</span>",
    "note3": "<span style='color: #003865;'>(17/88)</span>",
    "note4": "<span style='color: #751d66;'>(37/121)</span>",
    "note5": "<span style='color: #003865;'>(10/165)</span>",
    "note6": "<span style='color: #751d66;'>(18/159)</span>",
    "note7": "<span style='color: #003865;'>(n=20)</span>",
    "note8": "<span style='color: #751d66;'>(n=26)</span>",
    "footnote1": "<span style='color: #4c4d4f;'><b style='color: #003865;'>a</b> Bei den mit VUMERITY<sup>™</sup> behandelten Patienten ging die Zahl der Tage mit GI-Symptomen im Vergleich zu Patienten unter Tecfidera<sup>®</sup> statistisch signifikant zurück (<i>p</i>=0,0003).</span>",
    "footnote2": "<span style='color: #4c4d4f;'><b style='color: #003865;'>GI:</b> Gastrointestinal; <b style='color: #003865;'>MS:</b> Multiple Sklerose.</span>",
    "footnote3": "<span style='color: #4c4d4f;'><b style='color: #003865;'>b</b> Die Vergleiche wurden nicht auf statistische Signifikanz geprüft, die Unterschiede sind rein numerisch.</span>",
    "axisYitem1":"<span style='color: #4c4d4f;'>40</span>",
    "axisYitem2":"<span style='color: #4c4d4f;'>30</span>",
    "axisYitem3":"<span style='color: #4c4d4f;'>20</span>",
    "axisYitem4":"<span style='color: #4c4d4f;'>10</span>",
    "axisYitem5":"<span style='color: #4c4d4f;'>0</span>",
    "axisYitem6":"<span style='color: #4c4d4f;'>100</span>",
    "axisYitem7":"<span style='color: #4c4d4f;'>75</span>",
    "axisYitem8":"<span style='color: #4c4d4f;'>50</span>",
    "axisYitem9":"<span style='color: #4c4d4f;'>25</span>",
    "axisYitem10":"<span style='color: #4c4d4f;'>0</span>",
    "graph1Value":"<span style='color: #003865;'>9,5</span>",
    "graph2Value":"<span style='color: #751d66;'>28,9</span>",
    "graph3Value":"<span style='color: #003865;'>19,3</span>",
    "graph4Value":"<span style='color: #751d66;'>30,6</span>",
    "graph5Value":"<span style='color: #003865;'>6,1</span>",
    "graph6Value":"<span style='color: #751d66;'>11,3</span>",
    "graph7Value":"<span style='color: #003865;'>43</span>",
    "graph8Value":"<span style='color: #751d66;'>88</span>"
  }
}
</i18n>

<template>
  <wiz-slide>
    <wiz-bg-grid-container
      class="headline-wrapper"
      component-name="Headline &amp; Subhead container"
    >
      <wiz-text
        id="headline"
        class="headline"
        :text="$t('headline')"
        :component-name="'Headline'"
      ></wiz-text>
      <wiz-image
        class="chapter-background-image"
        src="../../common/media/images/chapter-background-images/chapter-background-3.png"
      ></wiz-image>
    </wiz-bg-grid-container>
    <wiz-bg-grid-container
      class="content-area"
      :component-name="'Content area'"
    >
      <wiz-text
        id="caption1"
        :component-name="'Title'"
        class="caption pa"
        :text="$t('caption1')"
      ></wiz-text>

      <wiz-bg-container
        id="graphContainer1"
        class="graph-container pa"
        :component-name="'Graph container'"
      >
        <wiz-image
          id="line1"
          class="line pa"
          src="./media/images/line.png"
          :component-name="'Line image'"
        ></wiz-image>
        <wiz-bg-container
          id="graphTitle1"
          v-goto="{ chapter: 'popups', slide: 'vumerityTolerabilityPopup3' }"
          class="graph-title pa"
          :component-name="'Graph title wrapper'"
        >
          <wiz-text
            id="title1"
            :component-name="'Title'"
            class="title pa"
            :text="$t('title1')"
          ></wiz-text>
          <wiz-image
            id="icon3"
            class="pa icon icon-graph"
            :src="'./media/images/icon3.png'"
            :component-name="'Icon'"
          ></wiz-image>
        </wiz-bg-container>
        <wiz-image
          id="graph1"
          src="./media/images/graph1.png"
          class="graph pa"
          :component-name="'Graph'"
        ></wiz-image>
        <wiz-bg-container
          id="scaleYcontainer1"
          class="scale-y-container pa"
          :component-name="'Scale Y container'"
        >
          <wiz-text
            id="axisYitem1"
            :text="$t('axisYitem1')"
            class="axis-y-item axis-y-item-1 pa"
            :component-name="'Axis Y item'"
          ></wiz-text>
          <wiz-text
            id="axisYitem2"
            :text="$t('axisYitem2')"
            class="axis-y-item axis-y-item-2 pa"
            :component-name="'Axis Y item'"
          ></wiz-text>
          <wiz-text
            id="axisYitem3"
            :text="$t('axisYitem3')"
            class="axis-y-item axis-y-item-3 pa"
            :component-name="'Axis Y item'"
          ></wiz-text>
          <wiz-text
            id="axisYitem4"
            :text="$t('axisYitem4')"
            class="axis-y-item axis-y-item-4 pa"
            :component-name="'Axis Y item'"
          ></wiz-text>
          <wiz-text
            id="axisYitem5"
            :text="$t('axisYitem5')"
            class="axis-y-item axis-y-item-5 pa"
            :component-name="'Axis Y item'"
          ></wiz-text>
        </wiz-bg-container>

        <wiz-text
          id="graph1Value"
          :text="$t('graph1Value')"
          class="graph-value pa"
          :component-name="'Graph value'"
        ></wiz-text>
        <wiz-text
          id="graph2Value"
          :text="$t('graph2Value')"
          class="graph-value pa"
          :component-name="'Graph value'"
        ></wiz-text>

        <wiz-text
          id="note1"
          class="note pa"
          :text="$t('note1')"
          :component-name="'Graph note'"
        ></wiz-text>
        <wiz-text
          id="note2"
          class="note pa"
          :text="$t('note2')"
          :component-name="'Graph note'"
        ></wiz-text>
        <wiz-text
          id="legend1"
          :text="$t('legend1')"
          class="legend pa"
          :component-name="'Legend'"
        ></wiz-text>
        <wiz-text
          id="legend2"
          :text="$t('legend2')"
          class="legend pa"
          :component-name="'Legend'"
        ></wiz-text>
        <wiz-text
          id="verticalLegend1"
          :text="$t('verticalLegend1')"
          class="vertical-legend pa"
          :component-name="'Vertica lLegend'"
        ></wiz-text>
      </wiz-bg-container>
      <wiz-bg-container
        id="graphContainer2"
        class="graph-container pa"
        :component-name="'Graph container'"
      >
        <wiz-image
          id="line2"
          class="line pa"
          src="./media/images/line.png"
          :component-name="'Line image'"
        ></wiz-image>
        <wiz-bg-container
          id="graphTitle2"
          class="graph-title pa"
          :component-name="'Graph title wrapper'"
        >
          <wiz-text
            id="title2"
            :component-name="'Title'"
            class="title pa"
            :text="$t('title2')"
          ></wiz-text>
        </wiz-bg-container>
        <wiz-image
          id="graph2"
          src="./media/images/graph2.png"
          class="graph pa"
          :component-name="'Graph'"
        ></wiz-image>
        <wiz-bg-container
          id="scaleYcontainer2"
          class="scale-y-container pa"
          :component-name="'Scale Y container'"
        >
          <wiz-text
            id="axisYitem6"
            :text="$t('axisYitem1')"
            class="axis-y-item axis-y-item-1 pa"
            :component-name="'Axis Y item'"
          ></wiz-text>
          <wiz-text
            id="axisYitem7"
            :text="$t('axisYitem2')"
            class="axis-y-item axis-y-item-2 pa"
            :component-name="'Axis Y item'"
          ></wiz-text>
          <wiz-text
            id="axisYitem8"
            :text="$t('axisYitem3')"
            class="axis-y-item axis-y-item-3 pa"
            :component-name="'Axis Y item'"
          ></wiz-text>
          <wiz-text
            id="axisYitem9"
            :text="$t('axisYitem4')"
            class="axis-y-item axis-y-item-4 pa"
            :component-name="'Axis Y item'"
          ></wiz-text>
          <wiz-text
            id="axisYitem10"
            :text="$t('axisYitem5')"
            class="axis-y-item axis-y-item-5 pa"
            :component-name="'Axis Y item'"
          ></wiz-text>
        </wiz-bg-container>
        <wiz-text
          id="graph3Value"
          :text="$t('graph3Value')"
          class="graph-value pa"
          :component-name="'Graph value'"
        ></wiz-text>
        <wiz-text
          id="graph4Value"
          :text="$t('graph4Value')"
          class="graph-value pa"
          :component-name="'Graph value'"
        ></wiz-text>
        <wiz-text
          id="note3"
          class="note pa"
          :text="$t('note3')"
          :component-name="'Graph note'"
        ></wiz-text>
        <wiz-text
          id="note4"
          class="note pa"
          :text="$t('note4')"
          :component-name="'Graph note'"
        ></wiz-text>
        <wiz-text
          id="legend3"
          :text="$t('legend1')"
          class="legend pa"
          :component-name="'Legend'"
        ></wiz-text>
        <wiz-text
          id="legend4"
          :text="$t('legend2')"
          class="legend pa"
          :component-name="'Legend'"
        ></wiz-text>
        <wiz-text
          id="verticalLegend2"
          :text="$t('verticalLegend2')"
          class="vertical-legend pa"
          :component-name="'Vertica lLegend'"
        ></wiz-text>
      </wiz-bg-container>
      <wiz-bg-container
        id="graphContainer3"
        class="graph-container pa"
        :component-name="'Graph container'"
      >
        <wiz-image
          id="line3"
          class="line pa"
          src="./media/images/line.png"
          :component-name="'Line image'"
        ></wiz-image>
        <wiz-bg-container
          id="graphTitle3"
          class="graph-title pa"
          :component-name="'Graph title wrapper'"
        >
          <wiz-text
            id="title3"
            :component-name="'Title'"
            class="title pa"
            :text="$t('title3')"
          ></wiz-text>
        </wiz-bg-container>
        <wiz-image
          id="graph3"
          src="./media/images/graph3.png"
          class="graph pa"
          :component-name="'Graph'"
        ></wiz-image>
        <wiz-bg-container
          id="scaleYcontainer3"
          class="scale-y-container pa"
          :component-name="'Scale Y container'"
        >
          <wiz-text
            id="axisYitem11"
            :text="$t('axisYitem1')"
            class="axis-y-item axis-y-item-1 pa"
            :component-name="'Axis Y item'"
          ></wiz-text>
          <wiz-text
            id="axisYitem12"
            :text="$t('axisYitem2')"
            class="axis-y-item axis-y-item-2 pa"
            :component-name="'Axis Y item'"
          ></wiz-text>
          <wiz-text
            id="axisYitem13"
            :text="$t('axisYitem3')"
            class="axis-y-item axis-y-item-3 pa"
            :component-name="'Axis Y item'"
          ></wiz-text>
          <wiz-text
            id="axisYitem14"
            :text="$t('axisYitem4')"
            class="axis-y-item axis-y-item-4 pa"
            :component-name="'Axis Y item'"
          ></wiz-text>
          <wiz-text
            id="axisYitem15"
            :text="$t('axisYitem5')"
            class="axis-y-item axis-y-item-5 pa"
            :component-name="'Axis Y item'"
          ></wiz-text>
        </wiz-bg-container>
        <wiz-text
          id="graph5Value"
          :text="$t('graph5Value')"
          class="graph-value pa"
          :component-name="'Graph value'"
        ></wiz-text>
        <wiz-text
          id="graph6Value"
          :text="$t('graph6Value')"
          class="graph-value pa"
          :component-name="'Graph value'"
        ></wiz-text>
        <wiz-text
          id="note5"
          class="note pa"
          :text="$t('note5')"
          :component-name="'Graph note'"
        ></wiz-text>
        <wiz-text
          id="note6"
          class="note pa"
          :text="$t('note6')"
          :component-name="'Graph note'"
        ></wiz-text>
        <wiz-text
          id="legend5"
          :text="$t('legend1')"
          class="legend pa"
          :component-name="'Legend'"
        ></wiz-text>
        <wiz-text
          id="legend6"
          :text="$t('legend2')"
          class="legend pa"
          :component-name="'Legend'"
        ></wiz-text>
        <wiz-text
          id="verticalLegend3"
          :text="$t('verticalLegend3')"
          class="vertical-legend pa"
          :component-name="'Vertica lLegend'"
        ></wiz-text>
      </wiz-bg-container>
      <wiz-bg-container
        id="graphContainer4"
        class="graph-container pa"
        :component-name="'Graph container'"
      >
        <wiz-bg-container
          id="graphTitle4"
          class="graph-title pa"
          :component-name="'Graph title wrapper'"
        >
          <wiz-text
            id="title4"
            :component-name="'Title'"
            class="title pa"
            :text="$t('title4')"
          ></wiz-text>
        </wiz-bg-container>
        <wiz-image
          id="graph4"
          src="./media/images/graph4.png"
          class="graph pa"
          :component-name="'Graph'"
        ></wiz-image>
        <wiz-bg-container
          id="scaleYcontainer4"
          class="scale-y-container pa"
          :component-name="'Scale Y container'"
        >
          <wiz-text
            id="axisYitem16"
            :text="$t('axisYitem6')"
            class="axis-y-item axis-y-item-1 pa"
            :component-name="'Axis Y item'"
          ></wiz-text>
          <wiz-text
            id="axisYitem17"
            :text="$t('axisYitem7')"
            class="axis-y-item axis-y-item-2 pa"
            :component-name="'Axis Y item'"
          ></wiz-text>
          <wiz-text
            id="axisYitem18"
            :text="$t('axisYitem8')"
            class="axis-y-item axis-y-item-3 pa"
            :component-name="'Axis Y item'"
          ></wiz-text>
          <wiz-text
            id="axisYitem19"
            :text="$t('axisYitem9')"
            class="axis-y-item axis-y-item-4 pa"
            :component-name="'Axis Y item'"
          ></wiz-text>
          <wiz-text
            id="axisYitem20"
            :text="$t('axisYitem10')"
            class="axis-y-item axis-y-item-5 pa"
            :component-name="'Axis Y item'"
          ></wiz-text>
        </wiz-bg-container>
        <wiz-text
          id="graph7Value"
          :text="$t('graph7Value')"
          class="graph-value pa"
          :component-name="'Graph value'"
        ></wiz-text>
        <wiz-text
          id="graph8Value"
          :text="$t('graph8Value')"
          class="graph-value pa"
          :component-name="'Graph value'"
        ></wiz-text>
        <wiz-text
          id="note7"
          class="note pa"
          :text="$t('note7')"
          :component-name="'Graph note'"
        ></wiz-text>
        <wiz-text
          id="note8"
          class="note pa"
          :text="$t('note8')"
          :component-name="'Graph note'"
        ></wiz-text>
        <wiz-text
          id="legend7"
          :text="$t('legend1')"
          class="legend pa"
          :component-name="'Legend'"
        ></wiz-text>
        <wiz-text
          id="legend8"
          :text="$t('legend2')"
          class="legend pa"
          :component-name="'Legend'"
        ></wiz-text>
        <wiz-text
          id="verticalLegend4"
          :text="$t('verticalLegend4')"
          class="vertical-legend pa"
          :component-name="'Vertica lLegend'"
        ></wiz-text>
      </wiz-bg-container>

      <wiz-image
        id="icon1"
        class="icon"
        :component-name="'Icon'"
        src="./media/images/icon1.png"
      ></wiz-image>
    </wiz-bg-grid-container>

    <wiz-bg-grid-container
      class="footnote-area"
      component-name="Footnote area"
    >
      <wiz-text
        id="footnote1"
        class="footnote"
        component-name="Footnote"
        :text="$t('footnote1')"
      ></wiz-text>
      <wiz-text
        id="footnote2"
        class="footnote"
        component-name="Footnote"
        :text="$t('footnote2')"
      ></wiz-text>
      <wiz-text
        id="footnote3"
        class="footnote"
        component-name="Footnote"
        :text="$t('footnote3')"
      ></wiz-text>
    </wiz-bg-grid-container>
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
#app .wiz-slide .chapter-background-image {
  width: 270px;
  height: 154px;
}

.pa {
  position: absolute;
}

.wiz-slide .headline.single-row {
  transform: matrix(1, 0, 0, 1, 0, 19);
}

.caption {
  font-size: 25px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 1.2;
  text-align: center;
}

.caption.legend-caption {
  font-weight: 300;
  font-size: 15px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 18px;
}

#caption1 {
  transform: matrix(1, 0, 0, 1, 121, -4);
}

#caption2 {
  font-weight: 800;
  font-size: 20px;
  font-family: 'Open Sans', sans-serif;
  transform: matrix(1, 0, 0, 1, 218, 91);
}

#footnote1 {
  transform: matrix(1, 0, 0, 1, -25, 113);
  width: 804px;
}
#footnote2 {
  transform: matrix(1, 0, 0, 1, -25, 148);
}
#footnote3 {
  width: 900px;
  transform: matrix(1, 0, 0, 1, -25, 125);
}

.graph-container {
  width: 226px;
  height: 330px;
}

#graphContainer1 {
  transform: matrix(1, 0, 0, 1, -15, 148);
}
#graphContainer2 {
  transform: matrix(1, 0, 0, 1, 225, 148);
}
#graphContainer3 {
  transform: matrix(1, 0, 0, 1, 465, 148);
}
#graphContainer4 {
  transform: matrix(1, 0, 0, 1, 704, 148);
}

#graphTitle1 {
  width: 199px;
  height: 67px;
  border-bottom: 1px solid #808080;
  transform: matrix(1, 0, 0, 1, 5, 1);
}

#graphTitle2 {
  width: 200px;
  height: 67px;
  border-bottom: 1px solid #808080;
  transform: matrix(1, 0, 0, 1, 6, 1);
}

#graphTitle3 {
  width: 200px;
  height: 67px;
  border-bottom: 1px solid #808080;
  transform: matrix(1, 0, 0, 1, 6, 1);
}

#graphTitle4 {
  width: 200px;
  height: 67px;
  border-bottom: 1px solid #808080;
  transform: matrix(1, 0, 0, 1, 9, 0);
}

.title {
  font-weight: 300;
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  line-height: 16px;
  text-align: center;
}
.title >>> b {
  font-weight: 800;
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  line-height: 16px;
}

#title1 {
  width: 220px;
  transform: matrix(1, 0, 0, 1, -10, 5);
}
#title2 {
  width: 220px;
  transform: matrix(1, 0, 0, 1, -10, 5);
}
#title3 {
    width: 170px;
    transform: matrix(1, 0, 0, 1, 25, 5);
}
#title4 {
  width: 170px;
  transform: matrix(1, 0, 0, 1, 15, 5);
}

#graph1 {
  width: 135px;
  height: 208px;
  transform: matrix(1, 0, 0, 1, 70, 95);
}
#graph2 {
  width: 136px;
  height: 206px;
  transform: matrix(1, 0, 0, 1, 70, 96);
}
#graph3 {
  width: 142px;
  height: 206px;
  transform: matrix(1, 0, 0, 1, 71, 96);
}
#graph4 {
  width: 142px;
  height: 206px;
  transform: matrix(1, 0, 0, 1, 73, 96);
}

.note {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 12px;
  font-family: 'Open Sans', sans-serif;
}
#note1 {
  transform: matrix(1, 0, 0, 1, 84, 233);
}
#note2 {
  transform: matrix(1, 0, 0, 1, 149, 133);
}
#note3 {
  transform: matrix(1, 0, 0, 1, 88, 183);
}
#note4 {
  transform: matrix(1, 0, 0, 1, 147, 126);
}
#note5 {
  transform: matrix(1, 0, 0, 1, 83, 252);
}
#note6 {
  transform: matrix(1, 0, 0, 1, 149, 221);
}
#note7 {
  transform: matrix(1, 0, 0, 1, 91, 191);
}
#note8 {
  transform: matrix(1, 0, 0, 1, 156, 99);
}

.legend {
  font-size: 13px;
  font-family: 'Open Sans Condensed', sans-serif;
}

#legend1 {
  transform: matrix(1, 0, 0, 1, 77, 304);
}
#legend2 {
  transform: matrix(1, 0, 0, 1, 143, 304);
}
#legend3 {
  transform: matrix(1, 0, 0, 1, 77, 304);
}
#legend4 {
  transform: matrix(1, 0, 0, 1, 143, 304);
}
#legend5 {
  transform: matrix(1, 0, 0, 1, 76, 304);
}
#legend6 {
  transform: matrix(1, 0, 0, 1, 145, 304);
}
#legend7 {
  transform: matrix(1, 0, 0, 1, 80, 304);
}
#legend8 {
  transform: matrix(1, 0, 0, 1, 147, 304);
}

#verticalLegend1 {
  transform: matrix(1, 0, 0, 1, -73, 179) rotate(-90deg);
}
#verticalLegend2 {
  transform: matrix(1, 0, 0, 1, -70, 180) rotate(-90deg);
}
#verticalLegend3 {
  transform: matrix(1, 0, 0, 1, -81, 177) rotate(-90deg);
}
#verticalLegend4 {
  transform: matrix(1, 0, 0, 1, -31, 191) rotate(-90deg);
}

.vertical-legend {
  font-weight: 300;
  font-size: 16px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 20px;
  text-align: center;
}

.wiz-image.line {
  overflow: visible;
  width: 1px;
  height: 248px;
}
#line1 {
  transform: matrix(1, 0, 0, 1, 225, 69);
}
#line2 {
  transform: matrix(1, 0, 0, 1, 225, 69);
}
#line3 {
  transform: matrix(1, 0, 0, 1, 225, 69);
}

.scale-y-container {
  width: 30px;
  height: 230px;
  transform: matrix(1, 0, 0, 1, 56, 86);
}

#scaleYcontainer3 {
  transform: matrix(1, 0, 0, 1, 57, 86);
}
#scaleYcontainer4 {
  transform: matrix(1, 0, 0, 1, 59, 86);
}

.axis-y-item {
  font-size: 14px;
  font-family: 'Open Sans Condensed', sans-serif;
}

.axis-y-item-1 {
  transform: matrix(1, 0, 0, 1, 0, 0);
}
.axis-y-item-2 {
  transform: matrix(1, 0, 0, 1, 0, 52);
}
.axis-y-item-3 {
  transform: matrix(1, 0, 0, 1, 0, 104);
}
.axis-y-item-4 {
  transform: matrix(1, 0, 0, 1, 0, 156);
}
.axis-y-item-5 {
  transform: matrix(1, 0, 0, 1, 6, 208);
}

#scaleYcontainer4 .axis-y-item-1 {
  transform: matrix(1, 0, 0, 1, -5, 0);
}

.graph-value {
  font-weight: 800;
  font-size: 25px;
  font-family: 'Open Sans', sans-serif;
  line-height: 16px;
}
#graph1Value {
  transform: matrix(1, 0, 0, 1, 87, 211);
}
#graph2Value {
  transform: matrix(1, 0, 0, 1, 146, 113);
}
#graph3Value {
  transform: matrix(1, 0, 0, 1, 81, 161);
}
#graph4Value {
  transform: matrix(1, 0, 0, 1, 143, 103);
}
#graph5Value {
  transform: matrix(1, 0, 0, 1, 87, 230);
}
#graph6Value {
  transform: matrix(1, 0, 0, 1, 146, 200);
}
#graph7Value {
  transform: matrix(1, 0, 0, 1, 93, 171);
}
#graph8Value {
  transform: matrix(1, 0, 0, 1, 159, 79);
}
.icon {
  position: absolute;
  top: 0;
  left: 0;
}
.icon.icon-graph {
  width: 23px;
  height: 19px;
}

.description {
  color: #bec6c4;
  font: 300 17px/20px 'Open Sans', sans-serif;
  text-align: center;
}

.icon-title {
  width: 47px;
  height: 47px;
}

#icon1 {
  width: 70px;
  height: 70px;
  transform: matrix(1, 0, 0, 1, 1, -10);
}
#icon3 {
  transform: matrix(1, 0, 0, 1, 194, 3);
}

#legendWrapper1 {
  transform: matrix(1, 0, 0, 1, 16, 1);
}

#legendWrapper2 {
  transform: matrix(1, 0, 0, 1, 105, 1);
}

#bullet1 {
  width: 9px;
  height: 9px;
  transform: matrix(1, 0, 0, 1, -14, 3);
}
#bullet2 {
  width: 9px;
  height: 14px;
  transform: matrix(1, 0, 0, 1, -14, 1);
}

  #icon3 {
    overflow: visible;
    transform: matrix(1, 0, 0, 1, 175, 42);
    cursor: pointer;
  }
</style>
