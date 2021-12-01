<i18n>
{
  "deu": {
    "headline": "",
    "title": "<span style='color: #003865;'><b>UNTER TECFIDERA<sup>®</sup> GERINGE INZIDENZ SCHWERWIEGENDER<br>INFEKTIONEN, POTENZIELLER LEBERERKRANKUNGEN<br>UND MALIGNITÄTEN ÜBER BIS ZU 13 JAHRE<sup>1</sup></b></span>",
    "caption": "<span style='color: #003865;'><b>Ausgewählte unerwünschte Ereignisse in ENDORSE<sup>1</sup></b></span>",
    "table_tr1_td1": "<span style='color: #003865;'><b>Unerwünschte<br>Ereignisse, n (%)</b></span>",
    "table_tr1_td2": "<span style='color: #003865;'><b>Gesamtpopulation</b><br><span style='color: #4c4d4f;'>(n=1.736)</span></span>",
    "table_tr1_td3": "<span style='color: #003865;'><b>Neudiagnostizierte Patienten</b><br><span style='color: #4c4d4f;'>(n=470)</span></span>",
    "table_tr2_td1": "<span style='color: #003865;'><b>Erkrankungen des<br>Gastrointestinaltrakts</b></span>",
    "table_tr2_td2": "<span style='color: #003865;'>748 (43)</span>",
    "table_tr2_td3": "<span style='color: #003865;'>210 (45)</span>",
    "table_tr3_td1": "<span style='color: #003865;'><b>Flush</b></span>",
    "table_tr3_td2": "<span style='color: #003865;'>419 (24)</span>",
    "table_tr3_td3": "<span style='color: #003865;'>133 (28)</span>",
    "table_tr4_td1": "<span style='color: #003865;'><b>Anaphylaktische Reaktion</b></span>",
    "table_tr4_td2": "<span style='color: #003865;'>1 (<1)</span>",
    "table_tr4_td3": "<span style='color: #003865;'>1 (<1)</span>",
    "table_tr5_td1": "<span style='color: #003865;'><b>Potenzielle Leberfunktionsstörung</b></span>",
    "table_tr5_td2": "<span style='color: #003865;'>198 (11)</span>",
    "table_tr5_td3": "<span style='color: #003865;'>48 (10)</span>",
    "table_tr6_td1": "<span style='color: #003865;'><b>ALT erhöht</b></span>",
    "table_tr6_td2": "<span style='color: #003865;'>112 (6)</span>",
    "table_tr6_td3": "<span style='color: #003865;'>24 (5)</span>",
    "table_tr7_td1": "<span style='color: #003865;'><b>AST erhöht</b></span>",
    "table_tr7_td2": "<span style='color: #003865;'>70 (4)</span>",
    "table_tr7_td3": "<span style='color: #003865;'>16 (3)</span>",
    "table_tr8_td1": "<span style='color: #003865;'><b>Erkrankungen der Niere<br>und Harnwege</b></span>",
    "table_tr8_td2": "<span style='color: #003865;'>443 (26)</span>",
    "table_tr8_td3": "<span style='color: #003865;'>122 (26)</span>",
    "table_tr9_td1": "<span style='color: #003865;'><b>Proteinurie</b></span>",
    "table_tr9_td2": "<span style='color: #003865;'>157 (9)</span>",
    "table_tr9_td3": "<span style='color: #003865;'>46 (10)</span>",
    "table_tr10_td1": "<span style='color: #003865;'><b>Mikroalbuminurie</b></span>",
    "table_tr10_td2": "<span style='color: #003865;'>116 (7)</span>",
    "table_tr10_td3": "<span style='color: #003865;'>29 (6)</span>",
    "table_tr11_td1": "<span style='color: #003865;'><b>Hämaturie</b></span>",
    "table_tr11_td2": "<span style='color: #003865;'>111 (6)</span>",
    "table_tr11_td3": "<span style='color: #003865;'>29 (6)</span>",
    "table_tr12_td1": "<span style='color: #003865;'><b>Schwerwiegende Infektionen</b></span>",
    "table_tr12_td2": "<span style='color: #003865;'>81 (5)</span>",
    "table_tr12_td3": "<span style='color: #003865;'>25 (5)</span>",
    "table_tr13_td1": "<span style='color: #003865;'><b>Potenzielle opportunistische<br>Infektion</b></span>",
    "table_tr13_td2": "<span style='color: #003865;'>7 (<1)</span>",
    "table_tr13_td3": "<span style='color: #003865;'>0</span>",
    "table_tr14_td1": "<span style='color: #003865;'><b>Opportunistische Infektion</b></span>",
    "table_tr14_td2": "<span style='color: #003865;'>2 (<1)</span>",
    "table_tr14_td3": "<span style='color: #003865;'>0</span>",
    "table_tr15_td1": "<span style='color: #003865;'><b>Malignitäten</b></span>",
    "table_tr15_td2": "<span style='color: #003865;'>49 (3)</span>",
    "table_tr15_td3": "<span style='color: #003865;'>16 (3)</span>",
    "footnote2": "<span style='color: #4c4d4f;'><b style='color: #003865;'>ALT:</b> Alanin-Aminotransferase; <b style='color: #003865;'>AST:</b> Aspartat-Aminotransferase.</span>",
    "hiddenReferences": "<sup refs='ref13'></sup>"
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
        :slide="closeBtnNavigation"
        component-name="Close slide popup"
      ></wiz-bg-close-popup-button>

      <wiz-bg-grid-container
        id="headlineWrapper"
        class="headline-wrapper"
        component-name="Headline &amp; Subhead container"
      >
        <wiz-text
          id="headline"
          class="pa headline"
          :text="$t('headline')"
          component-name="Headline"
        ></wiz-text>
        <wiz-text
          id="hiddenReferences"
          class="pa hidden"
          :text="$t('hiddenReferences')"
          component-name="Hidden references"
        ></wiz-text>
      </wiz-bg-grid-container>

      <wiz-bg-grid-container
        id="contentArea"
        class="content-area"
        component-name="Content area"
      >
        <wiz-text
          id="title"
          :text="$t('title')"
          component-name="Title"
        ></wiz-text>
        <wiz-text
          id="caption"
          :text="$t('caption')"
          component-name="Caption"
        ></wiz-text>
        <wiz-container
          id="tableWrapper"
          component-name="Table"
        >
          <table>
            <tr>
              <td>
                <wiz-text
                  id="table_tr1_td1"
                  :text="$t('table_tr1_td1')"
                  component-name="Table cell"
                ></wiz-text>
              </td>
              <td>
                <wiz-text
                  id="table_tr1_td2"
                  :text="$t('table_tr1_td2')"
                  component-name="Table cell"
                ></wiz-text>
              </td>
              <td>
                <wiz-text
                  id="table_tr1_td3"
                  :text="$t('table_tr1_td3')"
                  component-name="Table cell"
                ></wiz-text>
              </td>
            </tr>
            <tr>
              <td>
                <wiz-text
                  id="table_tr2_td1"
                  :text="$t('table_tr2_td1')"
                  component-name="Table cell"
                ></wiz-text>
              </td>
              <td>
                <wiz-text
                  id="table_tr2_td2"
                  :text="$t('table_tr2_td2')"
                  component-name="Table cell"
                ></wiz-text>
              </td>
              <td>
                <wiz-text
                  id="table_tr2_td3"
                  :text="$t('table_tr2_td3')"
                  component-name="Table cell"
                ></wiz-text>
              </td>
            </tr>
            <tr>
              <td>
                <wiz-text
                  id="table_tr3_td1"
                  :text="$t('table_tr3_td1')"
                  component-name="Table cell"
                ></wiz-text>
              </td>
              <td>
                <wiz-text
                  id="table_tr3_td2"
                  :text="$t('table_tr3_td2')"
                  component-name="Table cell"
                ></wiz-text>
              </td>
              <td>
                <wiz-text
                  id="table_tr3_td3"
                  :text="$t('table_tr3_td3')"
                  component-name="Table cell"
                ></wiz-text>
              </td>
            </tr>
            <tr>
              <td>
                <wiz-text
                  id="table_tr4_td1"
                  :text="$t('table_tr4_td1')"
                  component-name="Table cell"
                ></wiz-text>
              </td>
              <td>
                <wiz-text
                  id="table_tr4_td2"
                  :text="$t('table_tr4_td2')"
                  component-name="Table cell"
                ></wiz-text>
              </td>
              <td>
                <wiz-text
                  id="table_tr4_td3"
                  :text="$t('table_tr4_td3')"
                  component-name="Table cell"
                ></wiz-text>
              </td>
            </tr>
            <tr>
              <td>
                <wiz-text
                  id="table_tr5_td1"
                  :text="$t('table_tr5_td1')"
                  component-name="Table cell"
                ></wiz-text>
              </td>
              <td>
                <wiz-text
                  id="table_tr5_td2"
                  :text="$t('table_tr5_td2')"
                  component-name="Table cell"
                ></wiz-text>
              </td>
              <td>
                <wiz-text
                  id="table_tr5_td3"
                  :text="$t('table_tr5_td3')"
                  component-name="Table cell"
                ></wiz-text>
              </td>
            </tr>
            <tr>
              <td>
                <wiz-text
                  id="table_tr6_td1"
                  :text="$t('table_tr6_td1')"
                  component-name="Table cell"
                ></wiz-text>
              </td>
              <td>
                <wiz-text
                  id="table_tr6_td2"
                  :text="$t('table_tr6_td2')"
                  component-name="Table cell"
                ></wiz-text>
              </td>
              <td>
                <wiz-text
                  id="table_tr6_td3"
                  :text="$t('table_tr6_td3')"
                  component-name="Table cell"
                ></wiz-text>
              </td>
            </tr>
            <tr>
              <td>
                <wiz-text
                  id="table_tr7_td1"
                  :text="$t('table_tr7_td1')"
                  component-name="Table cell"
                ></wiz-text>
              </td>
              <td>
                <wiz-text
                  id="table_tr7_td2"
                  :text="$t('table_tr7_td2')"
                  component-name="Table cell"
                ></wiz-text>
              </td>
              <td>
                <wiz-text
                  id="table_tr7_td3"
                  :text="$t('table_tr7_td3')"
                  component-name="Table cell"
                ></wiz-text>
              </td>
            </tr>
            <tr>
              <td>
                <wiz-text
                  id="table_tr8_td1"
                  :text="$t('table_tr8_td1')"
                  component-name="Table cell"
                ></wiz-text>
              </td>
              <td>
                <wiz-text
                  id="table_tr8_td2"
                  :text="$t('table_tr8_td2')"
                  component-name="Table cell"
                ></wiz-text>
              </td>
              <td>
                <wiz-text
                  id="table_tr8_td3"
                  :text="$t('table_tr8_td3')"
                  component-name="Table cell"
                ></wiz-text>
              </td>
            </tr>
            <tr>
              <td>
                <wiz-text
                  id="table_tr9_td1"
                  :text="$t('table_tr9_td1')"
                  component-name="Table cell"
                ></wiz-text>
              </td>
              <td>
                <wiz-text
                  id="table_tr9_td2"
                  :text="$t('table_tr9_td2')"
                  component-name="Table cell"
                ></wiz-text>
              </td>
              <td>
                <wiz-text
                  id="table_tr9_td3"
                  :text="$t('table_tr9_td3')"
                  component-name="Table cell"
                ></wiz-text>
              </td>
            </tr>
            <tr>
              <td>
                <wiz-text
                  id="table_tr10_td1"
                  :text="$t('table_tr10_td1')"
                  component-name="Table cell"
                ></wiz-text>
              </td>
              <td>
                <wiz-text
                  id="table_tr10_td2"
                  :text="$t('table_tr10_td2')"
                  component-name="Table cell"
                ></wiz-text>
              </td>
              <td>
                <wiz-text
                  id="table_tr10_td3"
                  :text="$t('table_tr10_td3')"
                  component-name="Table cell"
                ></wiz-text>
              </td>
            </tr>
            <tr>
              <td>
                <wiz-text
                  id="table_tr11_td1"
                  :text="$t('table_tr11_td1')"
                  component-name="Table cell"
                ></wiz-text>
              </td>
              <td>
                <wiz-text
                  id="table_tr11_td2"
                  :text="$t('table_tr11_td2')"
                  component-name="Table cell"
                ></wiz-text>
              </td>
              <td>
                <wiz-text
                  id="table_tr11_td3"
                  :text="$t('table_tr11_td3')"
                  component-name="Table cell"
                ></wiz-text>
              </td>
            </tr>
            <tr>
              <td>
                <wiz-text
                  id="table_tr12_td1"
                  :text="$t('table_tr12_td1')"
                  component-name="Table cell"
                ></wiz-text>
              </td>
              <td>
                <wiz-text
                  id="table_tr12_td2"
                  :text="$t('table_tr12_td2')"
                  component-name="Table cell"
                ></wiz-text>
              </td>
              <td>
                <wiz-text
                  id="table_tr12_td3"
                  :text="$t('table_tr12_td3')"
                  component-name="Table cell"
                ></wiz-text>
              </td>
            </tr>
            <tr>
              <td>
                <wiz-text
                  id="table_tr13_td1"
                  :text="$t('table_tr13_td1')"
                  component-name="Table cell"
                ></wiz-text>
              </td>
              <td>
                <wiz-text
                  id="table_tr13_td2"
                  :text="$t('table_tr13_td2')"
                  component-name="Table cell"
                ></wiz-text>
              </td>
              <td>
                <wiz-text
                  id="table_tr13_td3"
                  :text="$t('table_tr13_td3')"
                  component-name="Table cell"
                ></wiz-text>
              </td>
            </tr>
            <tr>
              <td>
                <wiz-text
                  id="table_tr14_td1"
                  :text="$t('table_tr14_td1')"
                  component-name="Table cell"
                ></wiz-text>
              </td>
              <td>
                <wiz-text
                  id="table_tr14_td2"
                  :text="$t('table_tr14_td2')"
                  component-name="Table cell"
                ></wiz-text>
              </td>
              <td>
                <wiz-text
                  id="table_tr14_td3"
                  :text="$t('table_tr14_td3')"
                  component-name="Table cell"
                ></wiz-text>
              </td>
            </tr>
            <tr>
              <td>
                <wiz-text
                  id="table_tr15_td1"
                  :text="$t('table_tr15_td1')"
                  component-name="Table cell"
                ></wiz-text>
              </td>
              <td>
                <wiz-text
                  id="table_tr15_td2"
                  :text="$t('table_tr15_td2')"
                  component-name="Table cell"
                ></wiz-text>
              </td>
              <td>
                <wiz-text
                  id="table_tr15_td3"
                  :text="$t('table_tr15_td3')"
                  component-name="Table cell"
                ></wiz-text>
              </td>
            </tr>
          </table>
        </wiz-container>
      </wiz-bg-grid-container>

      <wiz-bg-grid-container
        id="footnoteArea"
        class="footnote-area"
        component-name="Footnote area"
      >
        <wiz-text
          id="footnote2"
          class="pa footnote"
          :text="$t('footnote2')"
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
      closeBtnNavigation: {
        slide: 'vumeritySafety',
        chapter: 'safety',
      },
    };
  },
};
</script>
<style scoped>
.custom-popup #contentArea {
  transform: matrix(1, 0, 0, 1, 32, 140);
}

.custom-popup #footnoteArea {
  transform: matrix(1, 0, 0, 1, 32, 608);
}

#title {
  position: absolute;
  top: 0;
  left: 0;
  color: #003865;
  font-size: 25px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 30px;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 156, -48);
}

#caption {
  position: absolute;
  top: 0;
  left: 0;
  color: #003865;
  font-size: 18px;
  font-family: 'Open Sans Condensed', sans-serif;
  transform: matrix(1, 0, 0, 1, 266, 54);
}

#tableWrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 686px;
  height: 428px;
  transform: matrix(1, 0, 0, 1, 93, 102);
}

#tableWrapper table {
  width: 100%;
  border-collapse: collapse;
  border-top: 11px solid #133862;
  border-right: 1px solid #000000;
  border-bottom: 1px solid #000000;
  border-left: 1px solid #000000;
}

#tableWrapper td {
  padding: 0;
  border: 1px solid #000000;
  color: #003865;
  font-size: 15px;
  font-family: 'Open Sans Condensed', sans-serif;
  text-align: center;
}

#tableWrapper td span span {
  color: #4c4d4f;
}

#tableWrapper tr:first-of-type td {
  height: 61px;
  font-size: 18px;
  line-height: 20px;
}

#tableWrapper tr:last-of-type td {
  border-bottom-style: none !important;
}

#tableWrapper tr td:first-child {
  width: 210px;
  border-left-style: none !important;
}

#tableWrapper tr td:last-child {
  width: 228px;
  border-right-style: none !important;
}

#tableWrapper tr:nth-of-type(2n) td {
  background-color: rgb(236, 238, 237);
}

#tableWrapper tr:not(:first-of-type) td:first-of-type {
  padding-left: 10px;
  text-align: left;
}

#tableWrapper tr:nth-of-type(6) td:first-of-type,
#tableWrapper tr:nth-of-type(7) td:first-of-type,
#tableWrapper tr:nth-of-type(9) td:first-of-type,
#tableWrapper tr:nth-of-type(10) td:first-of-type,
#tableWrapper tr:nth-of-type(11) td:first-of-type {
  padding-left: 29px;
}

#footnote1 {
  transform: matrix(1, 0, 0, 1, -16, 103);
}

#footnote2 {
  width: 951px;
  transform: matrix(1, 0, 0, 1, -16, 116);
}
#headline{
  z-index: 1;
}
</style>
