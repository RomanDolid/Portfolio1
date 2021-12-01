<i18n>
{
  "deu": {
    "headline": "",
    "title": "<span style='color:#003865'><b>VUMERITY<sup>™</sup>: SICHERHEITSPROFIL IN EVOLVE-MS-1<sup>a,1</sup></b></span>",
    "caption": "<span style='color:#003865'><b>Unerwünschte Ereignisse wurden bei 88% (932/1.057) der Patienten berichtet;<br>die meisten (89% [834/932]) waren mild oder moderat<sup>1</sup></b></span>",
    "table_tr1_td1": "<span style='color:#003865'><b>Unerwünschte Ereignisse, n (%)</b></span>",
    "table_tr1_td2": "<span style='color:#003865'><b>EVOLVE-MS-1 – Gesamtpopulation</b><br><span style='color: #4c4d4f;'>(n=1.057)</span></span>",
    "table_tr2_td1": "<span style='color:#003865'><b>Häufigste unerwünschte Ereignisse (Auftreten bei ≥ 10% der Patienten)</b></span>",
    "table_tr2_td2": "<span style='color:#003865'></span>",
    "table_tr3_td1": "<span style='color:#003865'><b>Flush</b></span>",
    "table_tr3_td2": "<span style='color:#003865'>288 (27)</span>",
    "table_tr4_td1": "<span style='color:#003865'><b>MS-Schub</b></span>",
    "table_tr4_td2": "<span style='color:#003865'>201 (19)</span>",
    "table_tr5_td1": "<span style='color:#003865'><b>Infektion der oberen Atemwege</b></span>",
    "table_tr5_td2": "<span style='color:#003865'>151 (14)</span>",
    "table_tr6_td1": "<span style='color:#003865'><b>Nasopharyngitis</b></span>",
    "table_tr6_td2": "<span style='color:#003865'>136 (13)</span>",
    "table_tr7_td1": "<span style='color:#003865'><b>Diarrhö</b></span>",
    "table_tr7_td2": "<span style='color:#003865'>109 (10)</span>",
    "table_tr8_td1": "<span style='color:#003865'><b>Lymphopenie</b></span>",
    "table_tr8_td2": "<span style='color:#003865'>118 (11)</span>",
    "table_tr9_td1": "<span style='color:#003865'><b>Ausgewählte unerwünschte Ereignisse</b></span>",
    "table_tr9_td2": "<span style='color:#003865'></span>",
    "table_tr10_td1": "<span style='color:#003865'><b>Herzerkrankungen</b></span>",
    "table_tr10_td2": "<span style='color:#003865'>44 (4)</span>",
    "table_tr11_td1": "<span style='color:#003865'><b>Leberschädigung</b></span>",
    "table_tr11_td2": "<span style='color:#003865'>76 (7,2)</span>",
    "table_tr12_td1": "<span style='color:#003865'><b>Nierenschädigung</b></span>",
    "table_tr12_td2": "<span style='color:#003865'>36 (3,4)</span>",
    "table_tr13_td1": "<span style='color:#003865'><b>Infektionen<sup>b</sup></b></span>",
    "table_tr13_td2": "<span style='color:#003865'>9 (<1)</span>",
    "table_tr14_td1": "<span style='color:#003865'><b>Malignitäten<sup>c</sup></b></span>",
    "table_tr14_td2": "<span style='color:#003865'>5 (<1)</span>",
    "footnote1": "<span style='color:#4c4d4f'><b style='color:#003865'>a</b> Stichtag: 1. September 2020.<br><b style='color:#003865'>b</b> Einschließlich opportunistischer Infektionen (unerwünschte Ereignisse und schwerwiegende unerwünschte Ereignisse) und aller schwerwiegenden Infektionen (einschließlich schwerwiegender opportunistischer Infektionen).<br><b style='color:#003865'>c</b> Einschließlich Malignitäten und Präkanzerosen.</span>",
    "footnote2": "<span style='color:#4c4d4f'><b style='color:#003865'>MS:</b> Multiple Sklerose.</span>",
    "hiddenReferences": "<sup refs='ref42'></sup>"
  }
}
</i18n>

<template>
  <wiz-slide
    class="slide-popup"
    @slideswipe.native.stop
  >
    <wiz-bg-container
      class="custom-popup"
      component-name="Custom popup"
    >
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
          class="headline"
          :text="$t('headline')"
          component-name="Headline"
        ></wiz-text>
        <wiz-text
          id="hiddenReferences"
          class="hidden"
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
          id="footnote1"
          class="pa footnote"
          :text="$t('footnote1')"
          component-name="Footnote"
        ></wiz-text>
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
				chapter: 'safety'
			}
		};
	}
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
  width: 790px;
  color: #003865;
  font-size: 25px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 30px;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 43, -34);
}
#caption {
  position: absolute;
  top: 0;
  left: 0;
  color: #003865;
  font-size: 18px;
  text-align: center;
  font-family: 'Open Sans Condensed', sans-serif;
  transform: matrix(1, 0, 0, 1, 157, 47);
}
#note {
  position: absolute;
  top: 0;
  left: 0;
  color: #003865;
  font-size: 18px;
  font-family: 'Open Sans Condensed', sans-serif;
  transform: matrix(1, 0, 0, 1, 94, 489);
}

#tableWrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 686px;
  height: 368px;
  border-top: 11px solid #133862;
  border-right: 1px solid #000000;
  border-bottom: 1px solid #000000;
  border-left: 1px solid #000000;
  border-radius: 0;
  transform: matrix(1, 0, 0, 1, 93, 102);
}

#tableWrapper table {
  width: 100%;
  height: 100%;
  border-collapse: collapse;
}

#tableWrapper td {
  padding: 0;
  border: 1px solid #000000;
  color: #003865;
  font-size: 15px;
  font-family: 'Open Sans Condensed', sans-serif;
  text-align: center;
}
#tableWrapper tr:last-of-type td {
  border-bottom-style: none !important;
}

#tableWrapper tr td:first-child {
  width: 405px;
  border-left-style: none !important;
}

#tableWrapper tr td:last-child {
  border-right-style: none !important;
}

#tableWrapper tr:nth-of-type(2) td,
#tableWrapper tr:nth-of-type(9) td {
  background-color: rgb(236, 238, 237);
}

#tableWrapper td span span {
  color: #4c4d4f;
}
#tableWrapper tr:first-of-type td {
  height: 61px;
  font-size: 18px;
  line-height: 20px;
}
#tableWrapper tr:not(:first-of-type) td:first-of-type {
  padding-left: 29px;
  text-align: left;
}
#tableWrapper tr:nth-of-type(2) td:first-of-type,
#tableWrapper tr:nth-of-type(9) td:first-of-type {
  padding-left: 10px;
}

#footnote1 {
  transform: matrix(1, 0, 0, 1, -16, 55);
}
#footnote2 {
  transform: matrix(1, 0, 0, 1, -16, 116);
}

</style>
