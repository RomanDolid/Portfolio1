<i18n>
{
  "deu": {
    "headline": "<span style='color: #007fa3;'><b>ICH BRAUCHE EINE BEHANDLUNG,</b></span><br/><span style='color: #ce0058;'><b>DIE GUT VERTRÄGLICH IST<sup refs='ref5'>1</sup></b></span>",
    "caption": "<span style='color: #003865;'><b>EVOLVE MS-1: Die Lebensqualität blieb über 96 Wochen stabil<sup>a,1</sup></b></span>",
    "graphTitle": "<span style='color: #003865;'><b>Mittlerer EQ-5D-5L-Index (SD)</b></span>",
    "legend": "<span style='color: #003865;'>EQ-5D-5L-Index</span>",
    "verticalLegend": "<span style='color: #4c4d4f;'>Mittlerer EQ-5D-5L-Index (SD)</span>",
    "graphNum1": "<span style='color: #4c4d4f;'>1,0</span>",
    "graphNum2": "<span style='color: #4c4d4f;'>0,8</span>",
    "graphNum3": "<span style='color: #4c4d4f;'>0,6</span>",
    "graphNum4": "<span style='color: #4c4d4f;'>0,4</span>",
    "graphNum5": "<span style='color: #4c4d4f;'>0,2</span>",
    "graphNum6": "<span style='color: #4c4d4f;'>0</span>",

    "caption2": "<span style='color: #003865;'><b>EQ-5D-5L</b></span>",
    "scale1": "<span style='color: #003865;'><b>Baseline</b></span><br><span style='color: #4c4d4f;'>(n=897)</span>",
    "scale2": "<span style='color: #003865;'><b>Woche 48</b></span><br><span style='color: #4c4d4f;'>(n=738)</span>",
    "scale3": "<span style='color: #003865;'><b>Woche 96</b></span><br><span style='color: #4c4d4f;'>(n=483)</span>",
    "label1": "<span style='color: #003865;'><b>Alltags-<br>aktivitäten</b></span>",
    "label2": "<span style='color: #003865;'><b>Selbst-<br>versorgung</b></span>",
    "label3": "<span style='color: #003865;'><b>Mobilität</b></span>",
    "label4": "<span style='color: #003865;'><b>Schmerzen/<br>Unwohlsein</b></span>",
    "label5": "<span style='color: #003865;'><b>Angst/<br>Depression</b></span>",
    "footnote1": "<span class='color: #4c4d4f'><b style='color: #003865;'>a</b> Stichtag: 2. Juli 2019. Die Studie war zum Zeitpunkt der Datenerhebung noch nicht abgeschlossen.</span>",
    "footnote2": "<span class='color: #4c4d4f'><b style='color: #003865;'>EQ-5D-5L:</b> EuroQol-5-dimensions-5-levels; <b style='color: #003865;'>MS:</b> Multiple Sklerose; <b style='color: #003865;'>SD:</b> Standardabweichung.</span>"
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
        component-name="Headline"
      ></wiz-text>
      <wiz-image
        id="chapterImage"
        class="chapter-background-image"
        src="../../common/media/images/chapter-background-images/chapter-background-3.png"
      ></wiz-image>
    </wiz-bg-grid-container>

    <wiz-bg-grid-container
      class="content-area"
      component-name="Content area"
    >
      <wiz-text
        id="caption"
        class="caption"
        :text="$t('caption')"
        component-name="Caption"
      ></wiz-text>

      <wiz-bg-container
        id="wrapper1"
        class="wrapper"
        :component-name="'Wrapper'"
      >
        <wiz-image
          id="graphIcon"
          src="./media/images/graph-icon.png"
          :component-name="'Icon'"
        ></wiz-image>
        <wiz-text
          id="legend"
          class="legend"
          :text="$t('legend')"
          component-name="Legend"
        ></wiz-text>
        <wiz-text
          id="verticalLegend"
          :text="$t('verticalLegend')"
          component-name="Vertical Legend"
        ></wiz-text>
        <wiz-text
          id="graphNum1"
          class="graph-num"
          :text="$t('graphNum1')"
          component-name="Graph Number"
        ></wiz-text>
        <wiz-text
          id="graphNum2"
          class="graph-num"
          :text="$t('graphNum2')"
          component-name="Graph Number"
        ></wiz-text>
        <wiz-text
          id="graphNum3"
          class="graph-num"
          :text="$t('graphNum3')"
          component-name="Graph Number"
        ></wiz-text>
        <wiz-text
          id="graphNum4"
          class="graph-num"
          :text="$t('graphNum4')"
          component-name="Graph Number"
        ></wiz-text>
        <wiz-text
          id="graphNum5"
          class="graph-num"
          :text="$t('graphNum5')"
          component-name="Graph Number"
        ></wiz-text>
        <wiz-text
          id="graphNum6"
          class="graph-num"
          :text="$t('graphNum6')"
          component-name="Graph Number"
        ></wiz-text>

        <wiz-text
          id="graphTitle"
          class="caption"
          :text="$t('graphTitle')"
          component-name="Title"
        ></wiz-text>
        <wiz-bg-container
          id="valueWrapper1"
          class="value-wrapper"
          :component-name="'Wrapper'"
        >
          <wiz-image
            id="line1"
            class="line"
            src="./media/images/line.png"
            :component-name="'Icon'"
          ></wiz-image>
          <wiz-text
            id="scale1"
            class="scale"
            :text="$t('scale1')"
            component-name="Scale"
          ></wiz-text>
        </wiz-bg-container>
        <wiz-bg-container
          id="valueWrapper2"
          class="value-wrapper"
          :component-name="'Wrapper'"
        >
          <wiz-image
            id="line2"
            class="line"
            src="./media/images/line.png"
            :component-name="'Icon'"
          ></wiz-image>
          <wiz-text
            id="scale2"
            class="scale"
            :text="$t('scale2')"
            component-name="Scale"
          ></wiz-text>
        </wiz-bg-container>
        <wiz-bg-container
          id="valueWrapper3"
          class="value-wrapper"
          :component-name="'Wrapper'"
        >
          <wiz-image
            id="line3"
            class="line"
            src="./media/images/line.png"
            :component-name="'Icon'"
          ></wiz-image>
          <wiz-text
            id="scale3"
            class="scale"
            :text="$t('scale3')"
            component-name="Scale"
          ></wiz-text>
        </wiz-bg-container>
      </wiz-bg-container>

      <wiz-bg-container
        id="wrapper2"
        :component-name="'Wrapper'"
      >
        <wiz-text
          id="caption2"
          class="caption"
          :text="$t('caption2')"
          component-name="Caption"
        ></wiz-text>
        <wiz-bg-container
          id="wrapper3"
          :component-name="'Wrapper'"
        >
          <wiz-image
            id="icon2"
            src="./media/images/icon2.png"
            :component-name="'Icon'"
          ></wiz-image>
          <wiz-text
            id="label1"
            class="label"
            :text="$t('label1')"
            component-name="Label"
          ></wiz-text>
          <wiz-text
            id="label2"
            class="label"
            :text="$t('label2')"
            component-name="Label"
          ></wiz-text>
          <wiz-text
            id="label3"
            class="label"
            :text="$t('label3')"
            component-name="Label"
          ></wiz-text>
          <wiz-text
            id="label4"
            class="label"
            :text="$t('label4')"
            component-name="Label"
          ></wiz-text>
          <wiz-text
            id="label5"
            class="label"
            :text="$t('label5')"
            component-name="Label"
          ></wiz-text>
        </wiz-bg-container>
      </wiz-bg-container>
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
    </wiz-bg-grid-container>
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
#chapterImage.chapter-background-image {
  left: 3px;
  width: 267px;
  height: 154px;
}

#caption {
  position: absolute;
  top: 0;
  left: 0;
  width: 630px;
  color: #003865;
  font-size: 25px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 1.2;
  text-align: center;
    transform: matrix(1, 0, 0, 1, 122, 15);
}

#wrapper1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 570px;
  height: 365px;
  background: #ffffff;
  transform: matrix(1, 0, 0, 1, 25, 95);
}

#graphIcon {
  position: absolute;
  top: 0;
  left: 0;
  width: 502px;
  height: 253px;
  transform: matrix(1, 0, 0, 1, 60, 64);
}

#graphTitle {
  position: absolute;
  top: 0;
  left: 0;
  color: #003865;
  font-size: 18px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 1.2;
  transform: matrix(1, 0, 0, 1, 210, 12);
}

#app .value-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 101px;
  border-radius: 5px 5px 0 0;
  background: #003865;
}
#valueWrapper1 {
  height: 199px;
  transform: matrix(1, 0, 0, 1, 101, 117);
}
#valueWrapper2 {
  height: 194px;
  transform: matrix(1, 0, 0, 1, 262, 122);
}
#valueWrapper3 {
  height: 192px;
  transform: matrix(1, 0, 0, 1, 422, 124);
}
#app .line {
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 24px;
  transform: matrix(1, 0, 0, 1, 49, -23);
}
.scale {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  color: #003865;
  font-size: 14px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 18px;
  text-align: center;
}
#scale1 {
  transform: matrix(1, 0, 0, 1, 0, 205);
}
#scale2 {
  transform: matrix(1, 0, 0, 1, 0, 200);
}
#scale3 {
  transform: matrix(1, 0, 0, 1, 0, 198);
}
#legend {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 15px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 1.2;
  transform: matrix(1, 0, 0, 1, 486, 35);
}
#legend::before {
  content: '';
  position: absolute;
  top: 4px;
  left: -14px;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #003865;
}
#verticalLegend {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 17px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 1.2;
  transform: matrix(0, -1, 1, 0, -74, 180);
}
.graph-num {
  position: absolute;
  top: 0;
  left: 0;
  color: #003865;
  font-size: 14px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 1.2;
  text-align: center;
}
#graphNum1 {
  transform: matrix(1, 0, 0, 1, 40, 55);
}
#graphNum2 {
  transform: matrix(1, 0, 0, 1, 40, 106);
}
#graphNum3 {
  transform: matrix(1, 0, 0, 1, 40, 155);
}
#graphNum4 {
  transform: matrix(1, 0, 0, 1, 40, 207);
}
#graphNum5 {
  transform: matrix(1, 0, 0, 1, 40, 257);
}
#graphNum6 {
  transform: matrix(1, 0, 0, 1, 48, 307);
}
#wrapper2 {
  position: absolute;
  top: 0;
  left: 0;
  width: 252px;
  height: 378px;
  border-radius: 10px;
  background: #e5f2f6;
  transform: matrix(1, 0, 0, 1, 643, 86);
}
#icon2 {
  position: absolute;
  top: 0;
  left: 0;
  width: 103px;
  height: 103px;
  transform: matrix(1, 0, 0, 1, 36, 36);
}
#caption2 {
  position: absolute;
  top: 0;
  left: 0;
  color: #003865;
  font-size: 21px;
  font-family: 'Open Sans', sans-serif;
  transform: matrix(1, 0, 0, 1, 81, 20);
}
#wrapper3 {
  position: absolute;
  top: 0;
  left: 0;
  width: 176px;
  height: 176px;
  border: 1px dashed #bec6c4;
  border-radius: 50%;
  transform: matrix(1, 0, 0, 1, 38, 107);
}
.label {
  position: absolute;
  top: 0;
  left: 0;
  width: 75px;
  color: #003865;
  font-size: 15px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 1.2;
  text-align: center;
  background: #e5f2f6;
}
#label1 {
  transform: matrix(1, 0, 0, 1, 51, -19);
}
#label2 {
  width: 70px;
  transform: matrix(1, 0, 0, 1, -36, 66);
}
#label3 {
  width: 65px;
  line-height: 23px;
  transform: matrix(1, 0, 0, 1, 143, 73);
}
#label4 {
  transform: matrix(1, 0, 0, 1, 7, 141);
}
#label5 {
  transform: matrix(1, 0, 0, 1, 108, 141);
}
#footnote1 {
  transform: matrix(1, 0, 0, 1, -26, 125);
}
#footnote2 {
  transform: matrix(1, 0, 0, 1, -25, 148);
}
</style>
