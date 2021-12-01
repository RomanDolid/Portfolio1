<i18n>
{
  "deu": {
    "headline": "<span style='color: #007fa3;'><b>STUDIENDESIGN</b></span><br><span style='color: #ce0058;'><b>EVOLVE-MS-2</b></span>",
    "headlineNote": "<span style='color: #4c4d4f;'>EVOLVE-MS-2 war eine randomisierte, doppelblinde Phase-III-Studie mit adaptivem Studiendesign zur Untersuchung der Verträglichkeit von VUMERITY<sup>™</sup> im Vergleich zu Tecfidera<sup>®</sup> über 5 Wochen bei Teilnehmern mit schubförmig remittierender Multipler Sklerose (alle Patienten erhielten 4 Kapseln/Tag nach einer einwöchigen Titrationsphase mit der halben Dosierung).<sup>1</sup></span>",
    "note1": "<span style='color: #003865;'><b>Screening<br>(Wochen -4 bis -1)</b></span>",
    "note2": "<span style='color: #4c4d4f;'><b>1:1</b></span>",
    "note3": "<span style='color: #fff;'>VUMERITY<sup>™</sup> 462 mg 2×/Tag (5 Wochen)</span>",
    "note4": "<span style='color: #fff;'>TECFIDERA<sup>®</sup> 240 mg 2×/Tag (5 Wochen)</span>",
    "note5": "<span style='color: #003865;'><b>Follow-up<br>(2 Wochen)</b></span>",
    "note6": "<span style='color: #ce0058;'><b>Randomisierung</b></span>",
    "note7": "<span style='color: #ce0058;'><b></b></span>",
    "note8": "<span style='color: #ce0058;'><b>Behandlungsende</b></span>",
    "note9": "<span style='color: #007fa3;'><b>Einschätzungen <br>durch die Patienten</b></span>",
    "note10": "<span style='color: #fff;'><b>Täglich</b></span>",
    "blockNote1": "<span style='color: #003865;'>253 Patienten unter DRF (≥ 1 Dosierung)</span>",
    "blockNote2": "<span style='color: #751d66;'>251 Patienten unter DMF (≥ 1 Dosierung)</span>",
    "table_tr1_td1": "<span style='color: #003865;'><b>Visite 1</b></span>",
    "table_tr1_td3": "<span style='color: #ce0058;'><b>2</b></span>",
    "table_tr1_td4": "<span style='color: #ce0058;'><b>3</b></span>",
    "table_tr1_td5": "<span style='color: #ce0058;'><b>4</b></span>",
    "table_tr1_td6": "<span style='color: #ce0058;'><b>5</b></span>",
    "table_tr1_td7": "<span style='color: #ce0058;'><b>6</b></span>",
    "table_tr1_td8": "<span style='color: #003865;'><b>7</b></span>",
    "table_tr1_td9": "<span style='color: #ce0058;'><b>8</b></span>",
    "table_tr1_td10": "<span style='color: #003865;'><b>9</b></span>",
    "table_tr2_td1": "<span style='color: #ce0058;'><b>Woche -4</b></span>",
    "table_tr2_td3": "<span style='color: #ce0058;'><b>-1</b></span>",
    "table_tr2_td4": "<span style='color: #ce0058;'><b>1</b></span>",
    "table_tr2_td5": "<span style='color: #003865;'><b>2</b></span>",
    "table_tr2_td6": "<span style='color: #003865;'><b>3</b></span>",
    "table_tr2_td7": "<span style='color: #003865;'><b>4</b></span>",
    "table_tr2_td8": "<span style='color: #003865;'><b>5</b></span>",
    "table_tr2_td9": "<span style='color: #003865;'><b>6</b></span>",
    "table_tr2_td10": "<span style='color: #003865;'><b>8</b></span>",
    "caption1": "<span style='color: #fff;'><b>Primärer Endpunkt<sup>1</sup>:</b></span>",
    "caption2": "<span style='color: #fff;'><b>Anzahl der Patienten<sup>1</sup>:</b></span>",
    "list1_li1": "<span style='color: #fff;'><ul><span style='color: #fff;'><li>Anzahl der Tage mit einem IGISIS-Score ≥ 2 im Verhältnis zu den Tagen mit Exposition</li></span></ul></span>",
    "list2_li1": "<span style='color: #fff;'><ul><span style='color: #fff;'><li>500 RRMS-Patienten waren vorgesehen:</li></span></ul></span>",
    "list3_li1": "<span style='color: #fff;'><ul><span style='color: #fff;'><li>Eine im Voraus geplante unverblindete Analyse wurde für die ersten 120 randomisierten Patienten durchgeführt, um die Eignung der gastrointestinalen Symptomskalen zu bewerten<br>und die Endpunkte der Studie zu bestimmen (d. h. Teil A)</li></span></ul></span>",
    "list3_li2": "<span style='color: #fff;'><ul><span style='color: #fff;'><li>Ein sekundärer Endpunkt bewertete den primären Endpunkt für die Subpopulation der Patienten, die nach den ersten 120 Patienten von Teil A randomisiert wurden (d. h. Teil B)</li></span></ul></span>",
    "note11": "<span style='color: #4c4d4f;'>Darstellung modifiziert nach Naismith <i>et al.</i> CNS DRUGS. 2020; 34:185-196.</span>",
    "note12": "<span style='color: #4c4d4f;'><b style='color: #003865;'>IGSIS:</b> Individual gastrointestinal symptom and impact scale; <b style='color: #003865;'>RRMS:</b> schubförmig remittierende Multiple Sklerose.</span>",
    "hiddenReferences": "<sup refs='ref3'></sup>"
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
        id="headerArea"
        class="header-area"
        :component-name="'Headline &amp; Subhead container'"
      >
        <wiz-bg-container
          id="headlineWrapper"
          class="headline-wrapper"
        >
          <wiz-text
            id="headline"
            class="headline"
            :text="$t('headline')"
            :component-name="'Headline'"
          ></wiz-text>
          <wiz-text
            id="headlineNote"
            class="pa headline-note"
            :text="$t('headlineNote')"
            :component-name="'Headline note'"
          ></wiz-text>
        </wiz-bg-container>
      </wiz-bg-grid-container>
      <wiz-bg-grid-container
        class="content-area"
        :component-name="'Content area'"
      >
        <wiz-bg-container
          id="wrapper1"
          class="pa wrapper"
          :component-name="'Wrapper'"
        >
          <wiz-image
            id="arrow1"
            class="pa arrow"
            src="./media/images/arrow1.png"
            :component-name="'Arrow'"
          ></wiz-image>
          <wiz-image
            id="arrow2"
            class="pa arrow"
            src="./media/images/arrow2.png"
            :component-name="'Arrow'"
          ></wiz-image>
          <wiz-image
            id="scheme"
            class="pa"
            src="./media/images/scheme.png"
            :component-name="'Scheme'"
          ></wiz-image>

          <wiz-text
            id="note1"
            class="pa note"
            :text="$t('note1')"
            :component-name="'Note'"
          ></wiz-text>
          <wiz-text
            id="note2"
            class="pa note"
            :text="$t('note2')"
            :component-name="'Note'"
          ></wiz-text>

          <wiz-bg-container
            id="block1"
            class="pa block"
            :component-name="'Block'"
          >
            <wiz-text
              id="note3"
              class="pa note"
              :text="$t('note3')"
              :component-name="'Note'"
            ></wiz-text>
          </wiz-bg-container>

          <wiz-bg-container
            id="block2"
            class="pa block"
            :component-name="'Block'"
          >
            <wiz-text
              id="note4"
              class="pa note"
              :text="$t('note4')"
              :component-name="'Note'"
            ></wiz-text>
          </wiz-bg-container>

          <wiz-text
            id="blockNote1"
            class="pa block-note"
            :text="$t('blockNote1')"
            :component-name="'Note'"
          ></wiz-text>
          <wiz-text
            id="blockNote2"
            class="pa block-note"
            :text="$t('blockNote2')"
            :component-name="'Note'"
          ></wiz-text>

          <wiz-text
            id="table_tr1_td1"
            class="pa tr1"
            :text="$t('table_tr1_td1')"
            :component-name="'Table'"
          ></wiz-text>
          <wiz-text
            id="table_tr1_td3"
            class="pa tr1"
            :text="$t('table_tr1_td3')"
            :component-name="'Table'"
          ></wiz-text>
          <wiz-text
            id="table_tr1_td4"
            class="pa tr1"
            :text="$t('table_tr1_td4')"
            :component-name="'Table'"
          ></wiz-text>
          <wiz-text
            id="table_tr1_td5"
            class="pa tr1"
            :text="$t('table_tr1_td5')"
            :component-name="'Table'"
          ></wiz-text>
          <wiz-text
            id="table_tr1_td6"
            class="pa tr1"
            :text="$t('table_tr1_td6')"
            :component-name="'Table'"
          ></wiz-text>
          <wiz-text
            id="table_tr1_td7"
            class="pa tr1"
            :text="$t('table_tr1_td7')"
            :component-name="'Table'"
          ></wiz-text>
          <wiz-text
            id="table_tr1_td8"
            class="pa tr1"
            :text="$t('table_tr1_td8')"
            :component-name="'Table'"
          ></wiz-text>
          <wiz-text
            id="table_tr1_td9"
            class="pa tr1"
            :text="$t('table_tr1_td9')"
            :component-name="'Table'"
          ></wiz-text>
          <wiz-text
            id="table_tr1_td10"
            class="pa tr1"
            :text="$t('table_tr1_td10')"
            :component-name="'Table'"
          ></wiz-text>

          <wiz-text
            id="table_tr2_td1"
            class="pa tr2"
            :text="$t('table_tr2_td1')"
            :component-name="'Table'"
          ></wiz-text>
          <wiz-text
            id="table_tr2_td3"
            class="pa tr2"
            :text="$t('table_tr2_td3')"
            :component-name="'Table'"
          ></wiz-text>
          <wiz-text
            id="table_tr2_td4"
            class="pa tr2"
            :text="$t('table_tr2_td4')"
            :component-name="'Table'"
          ></wiz-text>
          <wiz-text
            id="table_tr2_td5"
            class="pa tr2"
            :text="$t('table_tr2_td5')"
            :component-name="'Table'"
          ></wiz-text>
          <wiz-text
            id="table_tr2_td6"
            class="pa tr2"
            :text="$t('table_tr2_td6')"
            :component-name="'Table'"
          ></wiz-text>
          <wiz-text
            id="table_tr2_td7"
            class="pa tr2"
            :text="$t('table_tr2_td7')"
            :component-name="'Table'"
          ></wiz-text>
          <wiz-text
            id="table_tr2_td8"
            class="pa tr2"
            :text="$t('table_tr2_td8')"
            :component-name="'Table'"
          ></wiz-text>
          <wiz-text
            id="table_tr2_td9"
            class="pa tr2"
            :text="$t('table_tr2_td9')"
            :component-name="'Table'"
          ></wiz-text>
          <wiz-text
            id="table_tr2_td10"
            class="pa tr2"
            :text="$t('table_tr2_td10')"
            :component-name="'Table'"
          ></wiz-text>

          <wiz-text
            id="note5"
            class="pa note"
            :text="$t('note5')"
            :component-name="'Note'"
          ></wiz-text>
          <wiz-text
            id="note6"
            class="pa note"
            :text="$t('note6')"
            :component-name="'Note'"
          ></wiz-text>
          <wiz-text
            id="note7"
            class="pa note"
            :text="$t('note7')"
            :component-name="'Note'"
          ></wiz-text>
          <wiz-text
            id="note8"
            class="pa note"
            :text="$t('note8')"
            :component-name="'Note'"
          ></wiz-text>
          <wiz-text
            id="note9"
            class="pa note"
            :text="$t('note9')"
            :component-name="'Note'"
          ></wiz-text>
          <wiz-text
            id="note10"
            class="pa note"
            :text="$t('note10')"
            :component-name="'Note'"
          ></wiz-text>
        </wiz-bg-container>
        <wiz-text
          id="note11"
          class="pa"
          :text="$t('note11')"
          :component-name="'Note'"
        ></wiz-text><wiz-text
          id="note12"
          class="pa"
          :text="$t('note12')"
          :component-name="'Note'"
        ></wiz-text>
        <wiz-bg-container
          id="wrapper2"
          class="pa wrapper"
          :component-name="'Wrapper'"
        >
          <wiz-text
            id="caption1"
            class="pa caption"
            :text="$t('caption1')"
            :component-name="'Caption'"
          ></wiz-text>
          <wiz-text
            id="caption2"
            class="pa caption"
            :text="$t('caption2')"
            :component-name="'Caption'"
          ></wiz-text>

          <wiz-text
            id="list1_li1"
            class="pa list"
            :text="$t('list1_li1')"
            :component-name="'List'"
          ></wiz-text>
          <wiz-text
            id="list2_li1"
            class="pa list"
            :text="$t('list2_li1')"
            :component-name="'List'"
          ></wiz-text>
          <wiz-text
            id="list3_li1"
            class="pa list3"
            :text="$t('list3_li1')"
            :component-name="'List'"
          ></wiz-text>
          <wiz-text
            id="list3_li2"
            class="pa list3"
            :text="$t('list3_li2')"
            :component-name="'List'"
          ></wiz-text>
        </wiz-bg-container>
        <wiz-text
          id="hiddenReferences"
          class="pa hidden"
          :text="$t('hiddenReferences')"
          component-name="Hidden references"
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
					active: true
				}
			}
		};
	}
};
</script>

<style scoped>
.headline-wrapper #headline {
  transform: matrix(1, 0, 0, 1, -42, 57);
}

.wrapper {
  top: 0;
  left: 0;
}

.headline-note {
  top: 0;
  left: 0;
  width: 885px;
  font-size: 18px;
  line-height: 21px;
  transform: matrix(1, 0, 0, 1, -41, 140);
}

#wrapper1 {
  width: 820px;
  height: 320px;
  transform: matrix(1, 0, 0, 1, -52, 70);
}

#wrapper2 {
  width: 969px;
  height: 152px;
  background: #133862;
  transform: matrix(1, 0, 0, 1, -84, 392);
}

.arrow {
  top: 0;
  left: 0;
}

#arrow1 {
  width: 147px;
  height: 122px;
  transform: matrix(1, 0, 0, 1, 245, -10);
}

#arrow2 {
  width: 441px;
  height: 57px;
  transform: matrix(1, 0, 0, 1, 263, 253);
}

#scheme {
  top: 0;
  left: 0;
  width: 676px;
  height: 45px;
  transform: matrix(1, 0, 0, 1, 105, 124);
}

.block {
  top: 0;
  left: 0;
  width: 366px;
  height: 38px;
}

#block1 {
  background: #133862;
  transform: matrix(1, 0, 0, 1, 344, -1);
}

#block2 {
  background: #6c2463;
  transform: matrix(1, 0, 0, 1, 344, 62);
}

#headlineNote {
  font-weight: 300;
}

.block-note {
  top: 0;
  left: 0;
  font-size: 15px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 15px;
  transform: matrix(1, 0, 0, 1, 430, 38);
}

#blockNote2 {
  transform: matrix(1, 0, 0, 1, 430, 101);
}

.note {
  top: 0;
  left: 0;
  font-size: 15px;
  font-family: 'Open Sans Condensed', sans-serif;
}

#note1 {
  color: #003865;
  line-height: 17px;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 143, 35);
}

#note2 {
  color: #4c4d4f;
  font-size: 12px;
  transform: matrix(1, 0, 0, 1, 299, 41);
}

#note3 {
  font-size: 20px;
  transform: matrix(1, 0, 0, 1, 56, 5);
}

#note4 {
  font-size: 20px;
  transform: matrix(1, 0, 0, 1, 56, 5);
}

#note5 {
  line-height: 17px;
  transform: matrix(1, 0, 0, 1, 723, 32);
}

#note6 {
  transform: matrix(1, 0, 0, 1, 224, 228);
}

#note7 {
  transform: matrix(1, 0, 0, 1, 301, 228);
}

#note8 {
  transform: matrix(1, 0, 0, 1, 657, 228);
}

#note9 {
  line-height: 17px;
  text-align: right;
  transform: matrix(1, 0, 0, 1, -6, 262);
}

#note10 {
  transform: matrix(1, 0, 0, 1, 471, 270);
}

.tr1 {
  top: 0;
  left: 0;
  width: 30px;
  font-size: 15px;
  font-family: 'Open Sans Condensed', sans-serif;
}

.tr2 {
  top: 0;
  left: 0;
  width: 30px;
  font-size: 15px;
  font-family: 'Open Sans Condensed', sans-serif;
}

#table_tr1_td1 {
  width: 90px;
  transform: matrix(1, 0, 0, 1, 67, 181);
}
#table_tr1_td2 {
  transform: matrix(1, 0, 0, 1, 24, 175);
}
#table_tr1_td3 {
  transform: matrix(1, 0, 0, 1, 415, 214);
}
#table_tr1_td4 {
  transform: matrix(1, 0, 0, 1, 488, 214);
}
#table_tr1_td5 {
  transform: matrix(1, 0, 0, 1, 561, 214);
}
#table_tr1_td6 {
  transform: matrix(1, 0, 0, 1, 634, 214);
}
#table_tr1_td7 {
  transform: matrix(1, 0, 0, 1, 706, 214);
}
#table_tr1_td8 {
  transform: matrix(1, 0, 0, 1, 633, 181);
}
#table_tr1_td9 {
  transform: matrix(1, 0, 0, 1, 777, 214);
}
#table_tr1_td10 {
  transform: matrix(1, 0, 0, 1, 777, 181);
}

#table_tr2_td1 {
  width: 80px;
  transform: matrix(1, 0, 0, 1, 56, 214);
}
#table_tr2_td2 {
  transform: matrix(1, 0, 0, 1, 24, 175);
}
#table_tr2_td3 {
  transform: matrix(1, 0, 0, 1, 266, 214);
}
#table_tr2_td4 {
  transform: matrix(1, 0, 0, 1, 342, 214);
}
#table_tr2_td5 {
  transform: matrix(1, 0, 0, 1, 269, 181);
}
#table_tr2_td6 {
  transform: matrix(1, 0, 0, 1, 342, 181);
}
#table_tr2_td7 {
  transform: matrix(1, 0, 0, 1, 415, 181);
}
#table_tr2_td8 {
  transform: matrix(1, 0, 0, 1, 487, 181);
}
#table_tr2_td9 {
  transform: matrix(1, 0, 0, 1, 560, 181);
}
#table_tr2_td10 {
  transform: matrix(1, 0, 0, 1, 706, 181);
}

.caption {
  top: 0;
  left: 0;
  color: #fff;
  font-size: 10px;
}

#caption1 {
  transform: matrix(1, 0, 0, 1, 42, 16);
}

#caption2 {
  transform: matrix(1, 0, 0, 1, 42, 59);
}

.list, .list3 {
  top: 0;
  left: 0;
  width: 440px;
  padding-left: 15px;
  font-weight: 300;
  font-size: 10px;
  line-height: 1.1;
  text-indent: -2px;
}

.list::v-deep li:before,
.list3::v-deep li:before {
  content: '\2022';
  position: relative;
  top: 1px;
  left: -5px;
  display: inline-block;
  color: #ffffff;
  font-size: 11px;
}

#list1_li1 {
  transform: matrix(1, 0, 0, 1, 36, 33);
}
#list2_li1 {
  width: 360px;
  transform: matrix(1, 0, 0, 1, 36, 78);
}
.list3::v-deep li:before {
  content: '\2010';
  top: 0px;
  left: -5px;
}
#list3_li1 {
  width: 820px;
  transform: matrix(1, 0, 0, 1, 46, 94);
}

#list3_li2 {
   width: 820px;
  transform: matrix(1, 0, 0, 1, 46, 120);
}

#note11 {
  font-size: 10px;
  transform: matrix(1, 0, 0, 1, -42, 377);
}

#note12 {
  font-size: 10px;
  transform: matrix(1, 0, 0, 1, -72, 546);
}
</style>
