<i18n>
{
  "deu": {
    "headline": "<span style='color: #003865;'><b>MORE THAN 8 OUT OF 10 PATIENTS REMAINED RELAPSE FREE <br>OVER 2 YEARS WHILE ON VUMERITY<sup>1</sup></b></span>",
    "title": "<span style='color: #003865;'><b>Proportion of patients with relapse<sup>1</sup></b></span>",
    "verticalLegend": "<span style='color: #4c4d4f;'>Proportion of patients with relapse</span>",
    "horizontalLegend": "<span style='color: #003865;'><b>Time on study, week</b></span>",
    "tableTitle": "<span style='color: #4c4d4f;'>No. of patients at risk</span>",
    "legend1": "<span style='color: #003865;'>All patients (n=1051)</span>",
    "legend2": "<span style='color: #003865;'>Newly diagnosed (n=109)</span>",
    "legend3": "<span style='color: #003865;'>Most recent switch from GA/IFN (n=338)</span>",
    "t1": "<span style='color: #4c4d4f;'>109</span>",
    "t2": "<span style='color: #4c4d4f;'>103</span>",
    "t3": "<span style='color: #4c4d4f;'>96</span>",
    "t4": "<span style='color: #4c4d4f;'>90</span>",
    "t5": "<span style='color: #4c4d4f;'>88</span>",
    "t6": "<span style='color: #4c4d4f;'>85</span>",
    "t7": "<span style='color: #4c4d4f;'>85</span>",
    "t8": "<span style='color: #4c4d4f;'>82</span>",
    "t9": "<span style='color: #4c4d4f;'>80</span>",
    "t10": "<span style='color: #4c4d4f;'>338</span>",
    "t11": "<span style='color: #4c4d4f;'>292</span>",
    "t12": "<span style='color: #4c4d4f;'>253</span>",
    "t13": "<span style='color: #4c4d4f;'>223</span>",
    "t14": "<span style='color: #4c4d4f;'>201</span>",
    "t15": "<span style='color: #4c4d4f;'>169</span>",
    "t16": "<span style='color: #4c4d4f;'>142</span>",
    "t17": "<span style='color: #4c4d4f;'>121</span>",
    "t18": "<span style='color: #4c4d4f;'>113</span>",
    "t19": "<span style='color: #4c4d4f;'>1051",
    "t20": "<span style='color: #4c4d4f;'>909",
    "t21": "<span style='color: #4c4d4f;'>786",
    "t22": "<span style='color: #4c4d4f;'>699",
    "t23": "<span style='color: #4c4d4f;'>642",
    "t24": "<span style='color: #4c4d4f;'>568",
    "t25": "<span style='color: #4c4d4f;'>488",
    "t26": "<span style='color: #4c4d4f;'>425",
    "t27": "<span style='color: #4c4d4f;'>395",
    "footnote": "<b style='color: #003865;'>GA:</b> Glatiramer Acetate; <b style='color: #003865;'>IFN:</b> Interferon.",
    "hiddenRefs": "<sup refs='ref8 ref9'></sup>",
    "yScale": "<ul><li><span style='color: #4c4d4f;'>1.0</span></li><li><span style='color: #4c4d4f;'>0.8</span></li><li><span style='color: #4c4d4f;'>0.6</span></li><li><span style='color: #4c4d4f;'>0.4</span></li><li><span style='color: #4c4d4f;'>0.2</span></li><li><span style='color: #4c4d4f;'>0.0</span></li></ul>",
    "xScale":"<ul><li><span style='color: #4c4d4f;'>0</span></li><li><span style='color: #4c4d4f;'>12</span></li><li><span style='color: #4c4d4f;'>24</span></li><li><span style='color: #4c4d4f;'>36</span></li><li><span style='color: #4c4d4f;'>48</span></li><li><span style='color: #4c4d4f;'>60</span></li><li><span style='color: #4c4d4f;'>72</span></li><li><span style='color: #4c4d4f;'>84</span></li><li><span style='color: #4c4d4f;'>96</span></li></ul>"
  }
}
</i18n>

<template>
  <wiz-slide>
    <wiz-slide class="slide-popup"
          @slideswipe.native.stop>
      <wiz-bg-container class="custom-popup">
        <wiz-bg-close-popup-button
          class="close-slide-popup-button"
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
              :text="$t('title')"
              class="pa"
              :component-name="'Graph caption'"
            ></wiz-text>
            <wiz-image
              id="graph"
              src="./media/images/graph.png"
              class="pa"
              :component-name="'Graph'"
            ></wiz-image>
            <wiz-text
              id="verticalLegend"
              class="vertical-legend pa"
              :text="$t('verticalLegend')"
              component-name="Legend"
            ></wiz-text>
            <wiz-text
              id="horizontalLegend"
              class="horizontal-legend pa"
              :text="$t('horizontalLegend')"
              :component-name="'Legend'"
            ></wiz-text>
            <wiz-text
              id="yScale"
              class="y-scale pa"
              :text="$t('yScale')"
              :component-name="'Scale y values'"
            ></wiz-text>
            <wiz-text
              id="xScale"
              class="x-scale pa"
              :text="$t('xScale')"
              :component-name="'Scale x values'"
            ></wiz-text>
            <wiz-bg-container
              id="legendContainer"
              class="legend-container pa"
              :component-name="'Legend container'"
            >
              <wiz-bg-container
                id="legendItem1"
                class="legend-item pa"
                :component-name="'Legend item'"
              >
                <wiz-bg-container
                  id="legendIcon1"
                  class="legend-icon pa"
                  :component-name="'Legend icon'"
                ></wiz-bg-container>
                <wiz-text
                  id="legendText1"
                  :text="$t('legend1')"
                  class="legend-text pa"
                  :component-name="'Legend text'"
                ></wiz-text>
              </wiz-bg-container>
              <wiz-bg-container
                id="legendItem2"
                class="legend-item pa"
                :component-name="'Legend item'"
              >
                <wiz-bg-container
                  id="legendIcon2"
                  class="legend-icon pa"
                  :component-name="'Legend icon'"
                ></wiz-bg-container>
                <wiz-text
                  id="legendText2"
                  :text="$t('legend2')"
                  class="legend-text pa"
                  :component-name="'Legend text'"
                ></wiz-text>
              </wiz-bg-container>
              <wiz-bg-container
                id="legendItem3"
                class="legend-item pa"
                :component-name="'Legend item'"
              >
                <wiz-bg-container
                  id="legendIcon3"
                  class="legend-icon pa"
                  :component-name="'Legend icon'"
                ></wiz-bg-container>
                <wiz-text
                  id="legendText3"
                  :text="$t('legend3')"
                  class="legend-text pa"
                  :component-name="'Legend text'"
                ></wiz-text>
              </wiz-bg-container>
            </wiz-bg-container>
          </wiz-bg-container>
          <wiz-bg-container
            id="tableContainer"
            class="table-container pa"
            :component-name="'Table'"
          >
            <wiz-text
              id="tableCaption"
              :text="$t('tableTitle')"
              class="pa"
              :component-name="'Table caption'"
            ></wiz-text>
            <table>
              <tr>
                <td>
                  <wiz-text
                    id="t1"
                    :text="$t('t1')"
                    class="td"
                    :component-name="'Table cell'"
                  ></wiz-text>
                </td>
                <td>
                  <wiz-text
                    id="t2"
                    :text="$t('t2')"
                    class="td"
                    :component-name="'Table cell'"
                  ></wiz-text>
                </td>
                <td>
                  <wiz-text
                    id="t3"
                    :text="$t('t3')"
                    class="td"
                    :component-name="'Table cell'"
                  ></wiz-text>
                </td>
                <td>
                  <wiz-text
                    id="t4"
                    :text="$t('t4')"
                    class="td"
                    :component-name="'Table cell'"
                  ></wiz-text>
                </td>
                <td>
                  <wiz-text
                    id="t5"
                    :text="$t('t5')"
                    class="td"
                    :component-name="'Table cell'"
                  ></wiz-text>
                </td>
                <td>
                  <wiz-text
                    id="t6"
                    :text="$t('t6')"
                    class="td"
                    :component-name="'Table cell'"
                  ></wiz-text>
                </td>
                <td>
                  <wiz-text
                    id="t7"
                    :text="$t('t7')"
                    class="td"
                    :component-name="'Table cell'"
                  ></wiz-text>
                </td>
                <td>
                  <wiz-text
                    id="t8"
                    :text="$t('t8')"
                    class="td"
                    :component-name="'Table cell'"
                  ></wiz-text>
                </td>
                <td>
                  <wiz-text
                    id="t9"
                    :text="$t('t9')"
                    class="td"
                    :component-name="'Table cell'"
                  ></wiz-text>
                </td>
              </tr>
              <tr>
                <td>
                  <wiz-text
                    id="t10"
                    :text="$t('t10')"
                    class="td"
                    :component-name="'Table cell'"
                  ></wiz-text>
                </td>
                <td>
                  <wiz-text
                    id="t11"
                    :text="$t('t11')"
                    class="td"
                    :component-name="'Table cell'"
                  ></wiz-text>
                </td>
                <td>
                  <wiz-text
                    id="t12"
                    :text="$t('t12')"
                    class="td"
                    :component-name="'Table cell'"
                  ></wiz-text>
                </td>
                <td>
                  <wiz-text
                    id="t13"
                    :text="$t('t13')"
                    class="td"
                    :component-name="'Table cell'"
                  ></wiz-text>
                </td>
                <td>
                  <wiz-text
                    id="t14"
                    :text="$t('t14')"
                    class="td"
                    :component-name="'Table cell'"
                  ></wiz-text>
                </td>
                <td>
                  <wiz-text
                    id="t15"
                    :text="$t('t15')"
                    class="td"
                    :component-name="'Table cell'"
                  ></wiz-text>
                </td>
                <td>
                  <wiz-text
                    id="t16"
                    :text="$t('t16')"
                    class="td"
                    :component-name="'Table cell'"
                  ></wiz-text>
                </td>
                <td>
                  <wiz-text
                    id="t17"
                    :text="$t('t17')"
                    class="td"
                    :component-name="'Table cell'"
                  ></wiz-text>
                </td>
                <td>
                  <wiz-text
                    id="t18"
                    :text="$t('t18')"
                    class="td"
                    :component-name="'Table cell'"
                  ></wiz-text>
                </td>
              </tr>
              <tr>
                <td>
                  <wiz-text
                    id="t19"
                    :text="$t('t19')"
                    class="td"
                    :component-name="'Table cell'"
                  ></wiz-text>
                </td>
                <td>
                  <wiz-text
                    id="t20"
                    :text="$t('t20')"
                    class="td"
                    :component-name="'Table cell'"
                  ></wiz-text>
                </td>
                <td>
                  <wiz-text
                    id="t21"
                    :text="$t('t21')"
                    class="td"
                    :component-name="'Table cell'"
                  ></wiz-text>
                </td>
                <td>
                  <wiz-text
                    id="t22"
                    :text="$t('t22')"
                    class="td"
                    :component-name="'Table cell'"
                  ></wiz-text>
                </td>
                <td>
                  <wiz-text
                    id="t23"
                    :text="$t('t23')"
                    class="td"
                    :component-name="'Table cell'"
                  ></wiz-text>
                </td>
                <td>
                  <wiz-text
                    id="t24"
                    :text="$t('t24')"
                    class="td"
                    :component-name="'Table cell'"
                  ></wiz-text>
                </td>
                <td>
                  <wiz-text
                    id="t25"
                    :text="$t('t25')"
                    class="td"
                    :component-name="'Table cell'"
                  ></wiz-text>
                </td>
                <td>
                  <wiz-text
                    id="t26"
                    :text="$t('t26')"
                    class="td"
                    :component-name="'Table cell'"
                  ></wiz-text>
                </td>
                <td>
                  <wiz-text
                    id="t27"
                    :text="$t('t27')"
                    class="td"
                    :component-name="'Table cell'"
                  ></wiz-text>
                </td>
              </tr>
            </table>
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
          <wiz-text
            id="hiddenRefs"
            class="hidden"
            :text="$t('hiddenRefs')"
            :component-name="'Hidden references'"
          ></wiz-text>
        </wiz-bg-grid-container>
      </wiz-bg-container>
    </wiz-slide>
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

#headline {
  font-size: 25px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 30px;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 94, 81);
}

#graphContainer {
  width: 760px;
  height: 552px;
  transform: matrix(1, 0, 0, 1, -20, -18);
}

#graphCaption {
  font-size: 18px;
  font-family: 'Open Sans Condensed', sans-serif;
  transform: matrix(1, 0, 0, 1, 278, 33);
}
#tableCaption {
  font-size: 15px;
  font-family: 'Open Sans Condensed', sans-serif;
  transform: matrix(1, 0, 0, 1, 3, 1);
}

#graph {
  width: 663px;
  height: 218px;
  transform: matrix(1, 0, 0, 1, 74, 117);
}

#horizontalLegend {
  font-size: 17px;
  font-family: 'Open Sans Condensed', sans-serif;
  transform: matrix(1, 0, 0, 1, 336, 366);
}

.y-scale {
  font-weight: 300;
  font-size: 15px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 1;
}

#yScale {
  width: 59px;
  transform: matrix(1, 0, 0, 1, 18, 110);
}

#yScale::v-deep li {
  position: relative;
  width: 50px;
  margin-bottom: 28.5px;
  text-align: right;
}

#xScale {
  width: 672px;
  transform: matrix(1, 0, 0, 1, 71, 340);
}

#xScale::v-deep ul {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 673px;
}

#xScale::v-deep li {
  position: relative;
}

.x-scale {
  font-weight: 300;
  font-size: 15px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 1;
}

#verticalLegend {
  width: 220px;
  font-weight: 300;
  font-size: 17px;
  font-family: 'Open Sans Condensed', sans-serif;
  transform: matrix(1, 0, 0, 1, -91, 199) rotate(-90deg);
}

.wiz-bg-container.table-container {
  width: 790px;
  height: 98px;
  transform: matrix(1, 0, 0, 1, -46, 372);
}

#footnote {
  transform: matrix(1, 0, 0, 1, -68, 124);
}

#footnote sup {
  display: none;
}

table {
  width: 746px;
  height: 58px;
  border: none;
  border-width: 0;
  border-radius: 0;
  transform: matrix(1, 0, 0, 1, 58, 18);
}

table td {
  border-width: 1px;
  border-color: rgb(255, 255, 255);
}

.wiz-text.td {
  height: 15px;
  padding: 0;
  font-size: 15px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 17px;
  text-align: center;
}

table tr td {
  width: 81px;
  height: 15px;
}

#legendContainer {
  width: 236px;
  height: 55px;
  transform: matrix(1, 0, 0, 1, 88, 90);
}
.legend-item {
  width: 230px;
  height: 22px;
}
#legendItem1 {
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#legendItem2 {
  transform: matrix(1, 0, 0, 1, 0, 19);
}
#legendItem3 {
  transform: matrix(1, 0, 0, 1, 0, 33);
}

.legend-icon {
  width: 9px;
  height: 9px;
  border-radius: 50%;
}

#legendIcon1 {
  background: #ce0058;
  transform: matrix(1, 0, 0, 1, 3, 5);
}
#legendIcon2 {
  background: #003865;
  transform: matrix(1, 0, 0, 1, 3, 4);
}
#legendIcon3 {
  background: #8db9cb;
  transform: matrix(1, 0, 0, 1, 3, 8);
}

.legend-text {
  font-weight: 300;
  font-size: 15px;
  font-family: 'Open Sans Condensed', sans-serif;
}

#legendText1 {
  transform: matrix(1, 0, 0, 1, 18, 0);
}
#legendText2 {
  transform: matrix(1, 0, 0, 1, 18, -2);
}

#legendText3 {
  transform: matrix(1, 0, 0, 1, 18, 2);
}
</style>
