<i18n>
{
  "deu": {
  "headline": "<span style='color: #007fa3;'><b>ICH WÜNSCHE MIR EINE THERAPIE<br><b style='color: #ce0058;'>MIT GÜNSTIGEM SICHERHEITSPROFIL<sup>1-5</sup></b></b></span>",
  "title": "<span style='color: #003865;'><b>Das Sicherheitsprofil von VUMERITY<sup>™</sup> ist konsistent mit den Daten<br>zu Tecfidera<sup>®</sup> aus klinischen Studien und der Versorgungspraxis<br>mit > 500.000 behandelten Patienten<sup>1-7</sup></br></span>",
  "caption1": "<span style='color: #003865;'><b>Studie 1 & 2</b></span>",
  "caption2": "<span style='color: #003865;'><b>Studie 3</b></span>",
  "caption3": "<span style='color: #003865;'><b>VUMERITY<sup>™</sup></b></span>",
  "note1": "<span style='color: #003865;'>(DEFINE/CONFIRM)</span>",
  "note2": "<span style='color: #003865;'>(ENDORSE)</span>",
  "note3": "<span style='color: #003865;'>(EVOLVE MS-1/EVOLVE MS-2)</span>",
  "section1": "<span style='color: #ffffff;'><b>2 Jahre</b></span>",
  "section2": "<span style='color: #ffffff;'><b>10+ Jahre</b></span>",
  "section3": "<span style='color: #ffffff;'><b>2 Jahre</b></span>",
  "list1": "<span style='color: #4c4d4f;'><ul><li>Gut dokumentiertes Sicherheitsprofil <BR>von Tecfidera<sup>®</sup> <BR>in Phase-III-Studien<sup>6</sup></li><li>Die häufigsten unerwünschten Ereignisse waren mild/moderat<sup>6</sup></li></ul></span>",
  "list2": "<span style='color: #4c4d4f;'><ul><li>Konsistentes Langzeit-Sicherheitsprofil von Tecfidera<sup>®</sup> über bis zu 13 Jahre<sup>5</sup></li><li>Niedrige Raten von Infektionen und Malignitäten über bis zu 13 Jahre<sup>a,5</sup></li></ul></span>",
  "list3": "<span style='color: #4c4d4f;'><ul><li>Das Sicherheitsprofil entspricht dem von Tecfidera<sup>®</sup>; die Mehrheit der unerwünschten Ereignisse war mild/moderat<sup>1-3</sup></li><li>46% weniger Tage mit gastrointestinalen Symptomen vs. Tecfidera<sup>®</sup><sup>b,1</sup></li><li>83% weniger Therapieabbrüche aufgrund gastrointestinaler Symptome vs. Tecfidera<sup>®</sup><sup>c,1</sup></li></ul></span>",
  "footnote1": "<span style='color: #4c4d4f;'>VUMERITY<sup>™</sup> und Tecfidera<sup>®</sup> (in therapeutischen Dosierungen von 462 mg bzw. 240 mg) führen zu einer bioäquivalenten MMF-Exposition.<sup>7</sup></span>",
  "footnote2": "<span style='color: #4c4d4f;'><b style='color: #003865;'>a</b> Infektionen mit Herpes zoster sind aufgetreten.<br><b style='color: #003865;'>b</b> Adjustierte mittlere Anzahl der Tage mit vom Patienten erfassten Ereignis: 1,4 bei VUMERITY<sup>™</sup> und 2,6 bei Tecfidera<sup>®</sup> (adjustierte relative Rate: 0,54 (95%-KI: 0,39-0,75); p= 0,0003).<br><b style='color: #003865;'>c</b> 0,8% der Patienten unter VUMERITY<sup>™</sup> vs. 4,8% der Patienten unter TECFIDERA<sup>®</sup>.</span>",
  "hiddenRefs": "<sup refs='ref3 ref4 ref5 ref39 ref13 ref11 ref1'></sup>"
  }
}
</i18n>

<template>
  <wiz-slide>
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
      <wiz-image
        class="chapter-background-image"
        src="../../common/media/images/chapter-background-images/chapter-background-1.png"
      ></wiz-image>
    </wiz-bg-grid-container>

    <wiz-bg-grid-container
      id="contentArea"
      class="content-area"
      component-name="Content area"
    >
      <wiz-image
        id="icon"
        :text="$t('icon')"
        :src="'./media/images/icon.png'"
        component-name="Icon"
      ></wiz-image>
      <wiz-text
        id="title"
        :text="$t('title')"
        component-name="Title"
      ></wiz-text>

      <wiz-bg-container
        id="wrapper1"
        class="pa wrapper"
        component-name="Wrapper"
      >
        <wiz-text
          id="note1"
          class="pa note"
          :text="$t('note1')"
          component-name="Note"
        ></wiz-text>
        <wiz-image
          id="graph1"
          class="pa graph"
          :src="'./media/images/graph.png'"
          component-name="Graph"
        ></wiz-image>
        <wiz-image
          id="arrow"
          :src="'./media/images/arrow.png'"
          component-name="Arrow"
        ></wiz-image>
        <wiz-text
          id="section1"
          class="pa section"
          :text="$t('section1')"
          component-name="Section"
        ></wiz-text>
        <wiz-text
          id="list1"
          class="pa list"
          :text="$t('list1')"
          component-name="List"
        ></wiz-text>
        <wiz-bg-container
          id="popupButton1"
          v-goto="toSlide1"
          class="nav-wrapper"
          component-name="Navigation container"
        >
          <wiz-text
            :text="$t('caption1')"
            class="nav-text"
          ></wiz-text>
        </wiz-bg-container>
      </wiz-bg-container>

      <wiz-bg-container
        id="wrapper2"
        class="pa wrapper"
        component-name="Wrapper"
      >
        <wiz-text
          id="note2"
          class="pa note"
          :text="$t('note2')"
          component-name="Note"
        ></wiz-text>
        <wiz-image
          id="graph2"
          class="pa graph"
          :src="'./media/images/graph.png'"
          component-name="Graph"
        ></wiz-image>
        <wiz-bg-container
          id="block1"
          class="pa block"
          component-name="Block"
        >
          <wiz-text
            id="section2"
            class="pa section"
            :text="$t('section2')"
            component-name="Section"
          ></wiz-text>
        </wiz-bg-container>
        <wiz-text
          id="list2"
          class="pa list"
          :text="$t('list2')"
          component-name="List"
        ></wiz-text>
        <wiz-bg-container
          id="popupButton2"
          v-goto="toSlide2"
          class="nav-wrapper"
          component-name="Navigation container"
        >
          <wiz-text
            :text="$t('caption2')"
            class="nav-text"
          ></wiz-text>
        </wiz-bg-container>
      </wiz-bg-container>

      <wiz-bg-container
        id="wrapper3"
        class="pa wrapper"
        component-name="Wrapper"
      >
        <wiz-text
          id="note3"
          class="pa note"
          :text="$t('note3')"
          component-name="Note"
        ></wiz-text>
        <wiz-image
          id="graph3"
          class="pa graph"
          :src="'./media/images/graph.png'"
          component-name="Graph"
        ></wiz-image>
        <wiz-bg-container
          id="block2"
          class="pa block"
          component-name="Block"
        >
          <wiz-text
            id="section3"
            class="pa section"
            :text="$t('section3')"
            component-name="Section"
          ></wiz-text>
        </wiz-bg-container>
        <wiz-text
          id="list3"
          class="pa list"
          :text="$t('list3')"
          component-name="List"
        ></wiz-text>
        <wiz-bg-container
          id="popupButton3"
          v-goto="toSlide3"
          class="nav-wrapper"
          component-name="Navigation container"
        >
          <wiz-text
            :text="$t('caption3')"
            class="nav-text"
          ></wiz-text>
        </wiz-bg-container>
      </wiz-bg-container>
    </wiz-bg-grid-container>

    <wiz-bg-grid-container
      id="footnoteArea"
      class="footnote-area"
      component-name="Footnote area"
    >
      <wiz-text
        id="hiddenRefs"
        class="pa hidden"
        :text="$t('hiddenRefs')"
        component-name="Hidden references"
      ></wiz-text>

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
  </wiz-slide>
</template>
<script>
export default {
	data() {
		return {
			toSlide1: {
				slide: 'vumeritySafetyPopup1',
				chapter: 'popups'
			},
			toSlide2: {
				slide: 'vumeritySafetyPopup2',
				chapter: 'popups'
			},
			toSlide3: {
				slide: 'vumeritySafetyPopup3',
				chapter: 'popups'
			}
		};
	}
};
</script>
<style scoped>
#headlineWrapper .chapter-background-image {
  width: 257px;
  height: 154px;
  transform: matrix(1, 0, 0, 1, 684, -10);
}

.wrapper {
  position: absolute;
  top: 0;
  left: 0;
}

#wrapper1 {
  width: 220px;
  height: 300px;
  transform: matrix(1, 0, 0, 1, 11, 90);
}

#wrapper2 {
  width: 441px;
  height: 300px;
  transform: matrix(1, 0, 0, 1, 234, 90);
}

#wrapper3 {
  width: 241px;
  height: 410px;
  transform: matrix(1, 0, 0, 1, 679, 90);
}

#wrapper4 {
  width: 251px;
  height: 48px;
  transform: matrix(1, 0, 0, 1, 12, 416);
}

#icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 68px;
  height: 68px;
  transform: matrix(1, 0, 0, 1, -1, -10);
}

#arrow {
  position: absolute;
  top: 0;
  left: 0;
  width: 215px;
  height: 72px;
  transform: matrix(1, 0, 0, 1, 0, 52);
}

#title {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 25px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 30px;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 125, -20);
}

.note {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 15px;
  font-family: 'Open Sans Condensed', sans-serif;
}

#note1 {
  transform: matrix(1, 0, 0, 1, 60, 34);
}

#note2 {
  transform: matrix(1, 0, 0, 1, 191, 34);
}

#note3 {
  transform: matrix(1, 0, 0, 1, 44, 34);
}

#contentArea .graph {
  position: absolute;
  top: 0;
  left: 0;
  width: 23px;
  height: 19px;
  font-size: 16px;
}

#graph1 {
  transform: matrix(1, 0, 0, 1, 169, 11);
}

#graph2 {
  transform: matrix(1, 0, 0, 1, 260, 11);
}

#graph3 {
  transform: matrix(1, 0, 0, 1, 163, 11);
}

#graph4 {
  transform: matrix(1, 0, 0, 1, 222, 4);
}

.block {
  position: absolute;
  top: 0;
  left: 0;
}

#block1 {
  width: 436px;
  height: 41px;
  background: #6b2763;
  transform: matrix(1, 0, 0, 1, 0, 68);
}

#block2 {
  width: 215px;
  height: 41px;
  background: #133862;
  transform: matrix(1, 0, 0, 1, 0, 68);
}

.section {
  position: absolute;
  top: 0;
  left: 0;
  color: #ffffff;
  font-size: 20px;
  font-family: 'Open Sans Condensed', sans-serif;
}

#section1 {
  transform: matrix(1, 0, 0, 1, 62, 75);
}

#section2 {
  transform: matrix(1, 0, 0, 1, 182, 7);
}

#section3 {
  transform: matrix(1, 0, 0, 1, 80, 7);
}

.list {
  position: absolute;
  top: 0;
  left: 0;
}

.list::v-deep li:before {
  content: '';
  position: absolute;
  left: 0;
  width: 4px;
  height: 4px;
  margin-top: 10px;
  border-radius: 50%;
  background: #c61e4d;
}

.list::v-deep li {
  padding-bottom: 14px;
  padding-left: 14px;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
}

#list1 {
  width: 210px;
  height: 147px;
  transform: matrix(1, 0, 0, 1, 3, 128);
}

#list2 {
  width: 400px;
  height: 125px;
  transform: matrix(1, 0, 0, 1, 24, 129);
}

#list3 {
  width: 225px;
  height: 271px;
  transform: matrix(1, 0, 0, 1, 3, 129);
}
#list3::v-deep li  {
  font-size: 16px;
}

#list3::v-deep li {
  padding-bottom: 3px;
}

#button {
  position: absolute;
  top: 0;
  left: 0;
  width: 251px;
  height: 48px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}

#footnote1 {
  transform: matrix(1, 0, 0, 1, -25, 93);
}

#footnote2 {
  width: 900px;
  transform: matrix(1, 0, 0, 1, -25, 112);
}

#footnoteArea {
  pointer-events: none;
}

#contentArea .nav-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 173px;
  height: 47px;
  transform: matrix(1, 0, 0, 1, 22, -3);
  cursor: pointer;
}
#contentArea .nav-wrapper .nav-text{
  position: absolute;
  left: 0;
  width: 100%;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 0, 5);
  font-size: 25px;
  font-family: 'Open Sans Condensed';
}
#contentArea #popupButton2 {
  transform: matrix(1, 0, 0, 1, 132, -3);
}

#contentArea .button.wiz-bg-button {
  max-height: 45px;
}

#contentArea .button.wiz-bg-button::v-deep .wiz-button {
  padding-right: 0;
}

#contentArea .button.wiz-bg-button::v-deep .icon-wrapper {
  visibility: hidden;
  pointer-events: all;
}

#contentArea .button::v-deep p span {
  font-size: 25px;
  font-family: 'Open Sans Condensed', sans-serif;
}

</style>
