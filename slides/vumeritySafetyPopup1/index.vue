<i18n>
{
  "deu": {
    "headline": "",
    "title": "<span style='color: #003865;'><b>UNERWÜNSCHTE EREIGNISSE UNTER TECFIDERA<sup>®</sup> 240 MG (2×/TAG) IN<br>DEFINE UND CONFIRM MIT EINER UM ≥ 2% HÖHEREN INZIDENZ VS. PLACEBO<sup>1-3</sup></b></span>",
    "table_tr1_td1": "<span style='color: #003865;'><b>Unerwünschte Ereignisse</b></span>",
    "table_tr1_td2": "<span style='color: #003865;'><b>Tecfidera<sup>®</sup></b><br><span style='color: #4c4d4f;'>(n=769)%</span></span>",
    "table_tr1_td3": "<span style='color: #003865;'><b>Placebo</b><br><span style='color: #4c4d4f;'>(n=771)%</span></span>",
    "table_tr2_td1": "<span style='color: #003865;'><b>Flush</b></span>",
    "table_tr2_td2": "<span style='color: #003865;'>34</span>",
    "table_tr2_td3": "<span style='color: #003865;'>4</span>",
    "table_tr3_td1": "<span style='color: #003865;'><b>Diarrhö</b></span>",
    "table_tr3_td2": "<span style='color: #003865;'>14</span>",
    "table_tr3_td3": "<span style='color: #003865;'>10</span>",
    "table_tr4_td1": "<span style='color: #003865;'><b>Übelkeit</b></span>",
    "table_tr4_td2": "<span style='color: #003865;'>12</span>",
    "table_tr4_td3": "<span style='color: #003865;'>9</span>",
    "table_tr5_td1": "<span style='color: #003865;'><b>Schmerzen im Oberbauch</b></span>",
    "table_tr5_td2": "<span style='color: #003865;'>10</span>",
    "table_tr5_td3": "<span style='color: #003865;'>6</span>",
    "table_tr6_td1": "<span style='color: #003865;'><b>Abdominalschmerzen</b></span>",
    "table_tr6_td2": "<span style='color: #003865;'>9</span>",
    "table_tr6_td3": "<span style='color: #003865;'>4</span>",
    "table_tr7_td1": "<span style='color: #003865;'><b>Erbrechen</b></span>",
    "table_tr7_td2": "<span style='color: #003865;'>8</span>",
    "table_tr7_td3": "<span style='color: #003865;'>5</span>",
    "table_tr8_td1": "<span style='color: #003865;'><b>Hitzegefühl</b></span>",
    "table_tr8_td2": "<span style='color: #003865;'>7</span>",
    "table_tr8_td3": "<span style='color: #003865;'>2</span>",
    "table_tr9_td1": "<span style='color: #003865;'><b>Dyspepsie</b></span>",
    "table_tr9_td2": "<span style='color: #003865;'>5</span>",
    "table_tr9_td3": "<span style='color: #003865;'>3</span>",
    "table_tr10_td1": "<span style='color: #003865;'><b>Lymphopenie</b></span>",
    "table_tr10_td2": "<span style='color: #003865;'>6</span>",
    "table_tr10_td3": "<span style='color: #003865;'><1</span>",
    "footnote": "<span style='color: #4c4d4f;'><b style='color: #003865;'>CONFIRM:</b> Vergleichspräparat und ein orales Fumarat bei schubförmig remittierender MS; <b style='color: #003865;'>DEFINE:</b> Bestimmung der Wirksamkeit und Sicherheit von oralem Fumarat bei schubförmig remittierender MS.</span>",
    "hiddenReferences": "<sup refs='ref11 ref40 ref41'></sup>"
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
          </table>
        </wiz-container>
      </wiz-bg-grid-container>

      <wiz-bg-grid-container
        id="footnoteArea"
        class="footnote-area"
        component-name="Footnote area"
      >
        <wiz-text
          id="footnote"
          class="pa footnote"
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
			closeBtnNavigation: {
				slide: 'vumeritySafety',
				chapter: 'safety'
			}
		};
	}
};
</script>
<style>

</style>
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
  width: 790px;
  color: #003865;
  font-size: 25px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 30px;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 43, -48);
}

#tableWrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 686px;
  height: 420px;
  border-top: 11px solid #133862;
  border-right: 1px solid #000000;
  border-bottom: 1px solid #000000;
  border-left: 1px solid #000000;
  border-radius: 0;
  transform: matrix(1, 0, 0, 1, 93, 102);
}
#tableWrapper table {
  height: 100%;
  border-collapse: collapse;
}
#tableWrapper tr td:first-child {
  width: 218px;
  border-left-style: none !important;
}
#tableWrapper tr td:nth-of-type(2) {
  width: 228px;
}
#tableWrapper tr td:last-child {
  width: 228px;
  border-right-style: none !important;
}
#tableWrapper td {
  padding: 0;
  border: 1px solid #000000;
  color: #003865;
  font-size: 20px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 23px;
  text-align: center;
}
#tableWrapper td span span {
  color: #4c4d4f;
}

#tableWrapper tr:last-of-type td {
  height: 34px;
  border-bottom-style: none !important;
}

#tableWrapper tr:first-of-type {
  height: 75px;
}

#tableWrapper tr:not(:first-of-type) td:first-of-type {
  padding-left: 10px;
  text-align: left;
}

#tableWrapper tr:not(:first-of-type) td:nth-of-type(2),
#tableWrapper tr:not(:first-of-type) td:nth-of-type(3) {
  font-size: 24px;
}

#footnote {
  width: 951px;
  transform: matrix(1, 0, 0, 1, -16, 116);
}

</style>
