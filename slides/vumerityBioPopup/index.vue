<i18n>
{
  "eng": {
    "headline": "<span style='color: #003865;'><b>BIOÄQUIVALENTE MMF-EXPOSITION NACH ORALER GABE<br>VON VUMERITY<sup>™</sup>  UND TECFIDERA<sup>®</sup><sup>1,2</sup></b></span>",
    "graphCaption": "<span style='color: #003865;'><b>Mittlere MMF-Konzentration im Plasma<sup>2</sup></b></span>",
    "legend1": "<span style='color: #003865;'>VUMERITY<sup>™</sup> 462 mg</span>",
    "legend2": "<span style='color: #003865;'>TECFIDERA<sup>®</sup> 240 mg</span>",
    "yScale": "<ul><li><span style='color: #4c4d4f;'>1.500</span></li><li><span style='color: #4c4d4f;'>1.300</span></li><li><span style='color: #4c4d4f;'>1.100</span></li><li><span style='color: #4c4d4f;'>900</span></li><li><span style='color: #4c4d4f;'>700</span></li><li><span style='color: #4c4d4f;'>500</span></li><li><span style='color: #4c4d4f;'>300</span></li><li><span style='color: #4c4d4f;'>100</span></li><li><span style='color: #4c4d4f;'>0</span></li></ul>",
    "xScale": "<ul><li><span style='color: #4c4d4f;'>0</span></li><li><span style='color: #4c4d4f;'>1</span></li><li><span style='color: #4c4d4f;'>2</span></li><li><span style='color: #4c4d4f;'>3</span></li><li><span style='color: #4c4d4f;'>4</span></li><li><span style='color: #4c4d4f;'>5</span></li><li><span style='color: #4c4d4f;'>6</span></li><li><span style='color: #4c4d4f;'>7</span></li><li><span style='color: #4c4d4f;'>8</span></li><li><span style='color: #4c4d4f;'>9</span></li><li><span style='color: #4c4d4f;'>10</span></li><li><span style='color: #4c4d4f;'>11</span></li><li><span style='color: #4c4d4f;'>12</span></li></ul>",
    "verticalLegend": "<span style='color: #4c4d4f;'>Mittlere MMF-Konzentration (SE), ng/ml</span>",
    "horizontalLegend": "<span style='color: #003865;'><b>Zeit nach der Verabreichung, Stunden</b></span>",
    "footnote": "<span>Darstellung modifiziert nach Naismith RT <i>et al.</i> Mult Scler. 2020; 26(13): 1729-1739, Supplementary Materials.<br><br><b style='color: #003865;'>MMF:</b></span> <span style='color: #4c4d4f;'>Monomethylfumarat; </span><span><b style='color: #003865;'>SE:</b></span> <span style='color: #4c4d4f;'>Standardfehler.</span>",
    "hiddenRefs": "<sup refs='ref1 ref27'></sup>"
  }
}
</i18n>

<template>
  <wiz-slide
    class="slide-popup"
    @slideswipe.native.stop
  >
    <wiz-bg-container class="pa custom-popup">
      <wiz-bg-close-popup-button
        class="pa close-slide-popup-button"
      ></wiz-bg-close-popup-button>
      <wiz-bg-grid-container
        class="headline-wrapper"
        :component-name="'Headline &amp; Subhead container'"
      >
        <wiz-text
          id="headline"
          class="headline-caption"
          :text="$t('headline')"
          :component-name="'Headline'"
        ></wiz-text>
      </wiz-bg-grid-container>
      <wiz-bg-grid-container
        class="content-area"
        :component-name="'Content area'"
      >
        <wiz-text
          id="graphCaption"
          :text="$t('graphCaption')"
          :component-name="'Graph caption'"
        ></wiz-text>
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
          id="horizontalLegend"
          class="horizontal-legend"
          :text="$t('horizontalLegend')"
          :component-name="'Legend'"
        ></wiz-text>

        <wiz-text
          id="yScale"
          class="scale"
          :text="$t('yScale')"
          :component-name="'Legend'"
        ></wiz-text>

        <wiz-text
          id="xScale"
          class="scale"
          :text="$t('xScale')"
          :component-name="'Legend'"
        ></wiz-text>

        <wiz-bg-container
          id="legendsWrapper"
          :component-name="'Legends wrapper'"
        >
          <wiz-text
            id="legend1"
            class="legend"
            :text="$t('legend1')"
            :component-name="'Legend'"
          ></wiz-text>
          <wiz-text
            id="legend2"
            class="legend"
            :text="$t('legend2')"
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
	}
};
</script>

<style scoped>
#headline {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 25px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 30px;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 87, 81);
}
#graphCaption {
  position: absolute;
  top: 0;
  left: 0;
  color: #003865;
  font-size: 18px;
  font-family: 'Open Sans Condensed', sans-serif;
  transform: matrix(1, 0, 0, 1, 228, 15);
}

#graph {
  position: absolute;
  top: 0;
  left: 0;
  width: 692px;
  height: 339px;
  transform: matrix(1, 0, 0, 1, 47, 43);
}

.vertical-legend {
  position: absolute;
  top: 0;
  left: 0;
  width: 224px;
  font-weight: 300;
  font-size: 17px;
  font-family: 'Open Sans Condensed', sans-serif;
  transform: matrix(1, 0, 0, 1, -111, 201) rotate(-90deg);
}

.horizontal-legend {
  position: absolute;
  top: 0;
  left: 0;
  width: 262px;
  color: #003865;
  font-size: 17px;
  font-family: 'Open Sans Condensed', sans-serif;
  transform: matrix(1, 0, 0, 1, 262, 409);
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
  width: 50px;
  transform: matrix(1, 0, 0, 1, -1, 52);
}

#yScale::v-deep li {
  position: relative;
  width: 50px;
  margin-bottom: 25.1px;
  text-align: right;
}

#xScale {
  position: absolute;
  top: 0;
  left: 0;
  width: 725px;
  transform: matrix(1, 0, 0, 1, 28, 385);
}

#xScale::v-deep li {
  position: relative;
  display: inline-block;
  width: 30px;
  margin-right: 25px;
  text-align: right;
}

#legendsWrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 140px;
  height: 33px;
  transform: matrix(1, 0, 0, 1, 614, 58);
}

#legendsWrapper .legend {
  position: absolute;
  top: 0;
  left: 0;
  color: #003865;
  font-weight: 300;
  font-size: 15px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 1;
}

#legendsWrapper .legend::before {
  content: '\2022';
  position: absolute;
  top: -14px;
  left: -16px;
  font-size: 40px;
}

#legend1 {
  transform: matrix(1, 0, 0, 1, 13, 0);
}

#legend2 {
  transform: matrix(1, 0, 0, 1, 13, 18);
}

#legendsWrapper #legend1::before {
  color: #007fa3;
}
#legendsWrapper #legend2::before {
  color: #751d66;
}

#footnote {
  transform: matrix(1, 0, 0, 1, -67, 92);
}
</style>
