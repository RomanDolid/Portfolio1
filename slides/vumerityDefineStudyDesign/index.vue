<i18n>
{
  "deu": {
    "headline": "<span style='color: #007fa3;'><b>STUDIENDESIGN</b></span><br><span style='color: #ce0058;'><b>DEFINE</b></span>",
    "headlineNote": "<span style='color: #4c4d4f;'>DEFINE ist eine multizentrische, randomisierte, doppelblinde, placebokontrollierte Studie mit RRMS-Patienten über 2 Jahre.<sup>1</sup></span>",
    "section1": "<span style='color: #4c4d4f;'>Randomisierung<br>1:1:1<br>n = 1.237</span>",
    "section2": "<span style='color: #4c4d4f;'>Neurologische<br>Untersuchungen<sup>b</sup></span>",
    "section3": "<span style='color: #4c4d4f;'>MRT-Untersuchungen<sup>c</sup><br>n = 540</span>",
    "year1": "<b style='color: #4c4d4f;'>Jahr 1</b>",
    "year2": "<b style='color: #4c4d4f;'>Jahr 2</b>",
    "note1": "<b style='color: #ffffff;'>TECFIDERA<sup>®</sup> 240 mg 2×/Tag (n = 410)</b>",
    "note2": "<b style='color: #ffffff;'>TECFIDERA<sup>®</sup> 240 mg 3×/Tag<sup>a</sup> (n = 416)</b>",
    "note3": "<b style='color: #ffffff;'>PLACEBO (n = 408)</b>",
    "note4": "<span style='color: #4c4d4f;'>0</span>",
    "note5": "<span style='color: #4c4d4f;'>12</span>",
    "note6": "<span style='color: #4c4d4f;'>24</span>",
    "note7": "<span style='color: #4c4d4f;'>36</span>",
    "note8": "<span style='color: #4c4d4f;'>89</span>",
    "note9": "<span style='color: #4c4d4f;'>60</span>",
    "note10": "<span style='color: #4c4d4f;'>72</span>",
    "note11": "<span style='color: #4c4d4f;'>84</span>",
    "note12": "<span style='color: #4c4d4f;'>96</span>",
    "caption1": "<span style='color: #ffffff;'><b>Endpunkte<sup>1</sup>:</b></span>",
    "caption2": "<span style='color: #ffffff;'><b>Einschlusskriterien<sup>1</sup>:</b></span>",
    "list1_li1": "<span style='color: #ffffff;'>Anteil der Patienten mit Schub über 2 Jahre</span>",
    "list2_li1": "<span style='color: #ffffff;'>Anzahl neuer/sich vergrößernder T2-Läsionen über 2 Jahre</span>",
    "list2_li2": "<span style='color: #ffffff;'>Anzahl der Gd+-Läsionen über 2 Jahre</span>",
    "list2_li3": "<span style='color: #ffffff;'>Jährliche Schubrate über 2 Jahre<sup>d</sup></span>",
    "list2_li4": "<span style='color: #ffffff;'>Zeit bis zur Behinderungsprogression<sup>e</sup></span>",
    "list3_li1": "<span style='color: #ffffff;'>EDSS-Wert 0 – 5, ≥ 1 Schub im Vorjahr oder ≥ 1 Gd+-Läsion<br>in den letzten 6 Wochen vor der Randomisierung</span>",
    "list3_li2": "<span style='color: #ffffff;'>Keine Behandlung mit Interferon beta oder Glatirameracetat in den letzten 3 Monaten<br>oder Natalizumab in den letzten 6 Monaten</span>",
    "paragraph1": "<span style='color: #ffffff;'>Primärer Endpunkt:</span>",
    "paragraph2": "<span style='color: #ffffff;'>Sekundäre Endpunkte:</span>",
    "footnote1": "<span style='color: #4c4d4f;'><b style='color: #003865;'>a</b> Die Gabe von Tecfidera<sup>®</sup> 3×/Tag ist nicht zugelassen. | <b style='color: #003865;'>b</b> Neurologische Untersuchungen wurden bei Baseline, alle 3 Monate und zum Zeitpunkt eines vermuteten Schubs durchgeführt. | <b style='color: #003865;'>c</b> MRT-Untersuchungen wurden bei Baseline, nach 6 Monaten sowie nach 1 Jahr und nach 2 Jahren durchgeführt. | <b style='color: #003865;'>d</b> Die jährliche Schubrate wurde in jeder Behandlungsgruppe als die Gesamtzahl der in der Gruppe aufgetretenen Schübe geteilt durch die Gesamtzahl der Patientenjahre in der Studie nach 2 Jahren für diese Gruppe berechnet (abzüglich der Zeit, in der alternative MS-Medikamente angewendet wurden). | <b style='color: #003865;'>e</b> Die Behinderungsprogression war definiert als ein Anstieg des EDSS-Werts um ≥ 1,0 Punkte bei Patienten mit einem Baselinewert von ≥ 1,0 oder ein Anstieg um mindestens 1,5 Punkte bei Patienten mit einem Ausgangswert von 0, jeweils mit Bestätigung nach 12 Wochen.</span>",
    "footnote2": "<span style='color: #4c4d4f;'><b style='color: #003865;'>EDSS:</b> Expanded disability status scale; <b style='color: #003865;'>Gd+:</b> Gadolinium-aufnehmend; <b style='color: #003865;'>MRT:</b> Magnetresonanztomographie.</span>",
    "hiddenReferences": "<sup refs='ref46'></sup>"
  }
}
</i18n>

<template>
  <wiz-slide
    class="slide-popup"
    @slideswipe.native.stop
  >
    <wiz-bg-container
      class="pa custom-popup"
      component-name="Custom popup"
    >
      <wiz-bg-close-popup-button
        class="pa close-slide-popup-button"
        component-name="Close slide popup"
      ></wiz-bg-close-popup-button>

      <wiz-bg-grid-container
        id="headerArea"
        class="header-area"
        component-name="Headline &amp; Subhead container"
      >
        <wiz-text
          id="headline"
          class="pa headline"
          :text="$t('headline')"
          component-name="Headline"
        ></wiz-text>
        <wiz-text
          id="headlineNote"
          class="pa headline-note"
          :text="$t('headlineNote')"
          component-name="Headline note"
        ></wiz-text>
      </wiz-bg-grid-container>

      <wiz-bg-grid-container
        id="contentArea"
        class="content-area"
        component-name="Content area"
      >
        <wiz-bg-container
          id="wrapper1"
          class="pa wrapper"
          :component-name="'Wrapper'"
        >
          <wiz-text
            id="section1"
            class="pa section"
            :text="$t('section1')"
            component-name="Section"
          ></wiz-text>
          <wiz-text
            id="section2"
            class="pa section"
            :text="$t('section2')"
            component-name="Section"
          ></wiz-text>
          <wiz-text
            id="section3"
            class="pa section"
            :text="$t('section3')"
            component-name="Section"
          ></wiz-text>
          <wiz-text
            id="year1"
            class="pa year"
            :text="$t('year1')"
            component-name="Year"
          ></wiz-text>
          <wiz-text
            id="year2"
            class="pa year"
            :text="$t('year2')"
            component-name="Year"
          ></wiz-text>

          <wiz-bg-container
            id="block1"
            class="pa block"
            :component-name="'Wrapper'"
          >
            <wiz-text
              id="note1"
              class="pa note"
              :text="$t('note1')"
              component-name="Note"
            ></wiz-text>
          </wiz-bg-container>
          <wiz-bg-container
            id="block2"
            class="pa block"
            :component-name="'Wrapper'"
          >
            <wiz-text
              id="note2"
              class="pa note"
              :text="$t('note2')"
              component-name="Note"
            ></wiz-text>
          </wiz-bg-container>
          <wiz-bg-container
            id="block3"
            class="pa block"
            :component-name="'Wrapper'"
          >
            <wiz-text
              id="note3"
              class="pa note"
              :text="$t('note3')"
              component-name="Note"
            ></wiz-text>
          </wiz-bg-container>
          <wiz-bg-container
            id="scheme"
            class="pa"
            :component-name="'Scheme'"
          >
            <wiz-text
              id="note4"
              class="pa note value"
              :text="$t('note4')"
              component-name="Note"
            ></wiz-text>
            <wiz-text
              id="note5"
              class="pa note value"
              :text="$t('note5')"
              component-name="Note"
            ></wiz-text>
            <wiz-text
              id="note6"
              class="pa note value"
              :text="$t('note6')"
              component-name="Note"
            ></wiz-text>
            <wiz-text
              id="note7"
              class="pa note value"
              :text="$t('note7')"
              component-name="Note"
            ></wiz-text>
            <wiz-text
              id="note8"
              class="pa note value"
              :text="$t('note8')"
              component-name="Note"
            ></wiz-text>
            <wiz-text
              id="note9"
              class="pa note value"
              :text="$t('note9')"
              component-name="Note"
            ></wiz-text>
            <wiz-text
              id="note10"
              class="pa note value"
              :text="$t('note10')"
              component-name="Note"
            ></wiz-text>
            <wiz-text
              id="note11"
              class="pa note value"
              :text="$t('note11')"
              component-name="Note"
            ></wiz-text>
            <wiz-text
              id="note12"
              class="pa note value"
              :text="$t('note12')"
              component-name="Note"
            ></wiz-text>
            <wiz-bg-container
              id="point1"
              class="pa point"
              :component-name="'Wrapper'"
            ></wiz-bg-container>
            <wiz-bg-container
              id="point2"
              class="pa point"
              :component-name="'Wrapper'"
            ></wiz-bg-container>
            <wiz-bg-container
              id="point3"
              class="pa point"
              :component-name="'Wrapper'"
            ></wiz-bg-container>
            <wiz-bg-container
              id="point4"
              class="pa point"
              :component-name="'Wrapper'"
            ></wiz-bg-container>
            <wiz-bg-container
              id="point5"
              class="pa point"
              :component-name="'Wrapper'"
            ></wiz-bg-container>
            <wiz-bg-container
              id="point6"
              class="pa point"
              :component-name="'Wrapper'"
            ></wiz-bg-container>
            <wiz-bg-container
              id="point7"
              class="pa point"
              :component-name="'Wrapper'"
            ></wiz-bg-container>
            <wiz-bg-container
              id="point8"
              class="pa point"
              :component-name="'Wrapper'"
            ></wiz-bg-container>
            <wiz-bg-container
              id="point9"
              class="pa point"
              :component-name="'Wrapper'"
            ></wiz-bg-container>
            <wiz-image
              id="icon1"
              class="pa icon"
              src="./media/images/icon.png"
              :component-name="'Icon'"
            ></wiz-image>
            <wiz-image
              id="icon2"
              class="pa icon"
              src="./media/images/icon.png"
              :component-name="'Icon'"
            ></wiz-image>
            <wiz-image
              id="icon3"
              class="pa icon"
              src="./media/images/icon.png"
              :component-name="'Icon'"
            ></wiz-image>
            <wiz-image
              id="icon4"
              class="pa icon"
              src="./media/images/icon.png"
              :component-name="'Icon'"
            ></wiz-image>
          </wiz-bg-container>
          <wiz-image
            id="arrow"
            class="pa"
            src="./media/images/arrow.png"
            :component-name="'Icon'"
          ></wiz-image>
          <wiz-image
            id="line"
            class="pa"
            src="./media/images/line.png"
            :component-name="'Icon'"
          ></wiz-image>
        </wiz-bg-container>

        <wiz-bg-container
          id="wrapper2"
          class="pa wrapper"
          :component-name="'Wrapper'"
        >
          <wiz-text
            id="caption1"
            class="pa caption"
            :text="$t('caption1')"
            component-name="Caption"
          ></wiz-text>
          <wiz-text
            id="caption2"
            class="pa caption"
            :text="$t('caption2')"
            component-name="Caption"
          ></wiz-text>
          <wiz-text
            id="list1"
            class="pa list"
            :text="$t('list1_li1')"
            component-name="List"
          ></wiz-text>
          <wiz-text
            id="list2"
            class="pa list"
            :text="$t('list2_li1')"
            component-name="List"
          ></wiz-text>
          <wiz-text
            id="list3"
            class="pa list"
            :text="$t('list2_li2')"
            component-name="List"
          ></wiz-text>
          <wiz-text
            id="list4"
            class="pa list"
            :text="$t('list2_li3')"
            component-name="List"
          ></wiz-text>
          <wiz-text
            id="list5"
            class="pa list"
            :text="$t('list2_li4')"
            component-name="List"
          ></wiz-text>
          <wiz-text
            id="list6"
            class="pa list"
            :text="$t('list3_li1')"
            component-name="List"
          ></wiz-text>
          <wiz-text
            id="list7"
            class="pa list"
            :text="$t('list3_li2')"
            component-name="List"
          ></wiz-text>
          <wiz-text
            id="paragraph1"
            class="pa paragraph"
            :text="$t('paragraph1')"
            component-name="Paragraph"
          ></wiz-text>
          <wiz-text
            id="paragraph2"
            class="pa paragraph"
            :text="$t('paragraph2')"
            component-name="Paragraph"
          ></wiz-text>
        </wiz-bg-container>
      </wiz-bg-grid-container>

      <wiz-bg-grid-container
        id="footnoteArea"
        class="footnote-area"
        component-name="Footnote area"
      >
        <wiz-text
          id="footnote1"
          class="pa footnote"
          component-name="Footnote"
          :text="$t('footnote1')"
        ></wiz-text>
        <wiz-text
          id="footnote2"
          class="pa footnote"
          component-name="Footnote"
          :text="$t('footnote2')"
        ></wiz-text>
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
          active: true,
        },
      },
    };
  },
};
</script>

<style scoped>
.header-area #headline {
  transform: matrix(1, 0, 0, 1, -42, 57);
}
#headlineNote {
  top: 0;
  left: 0;
  width: 760px;
  color: #003865;
  font-weight: 300;
  font-size: 18px;
  line-height: 1.2;
  transform: matrix(1, 0, 0, 1, -42, 145);
}
.wrapper {
  top: 0;
  left: 0;
}
#wrapper1 {
  width: 680px;
  height: 230px;
  transform: matrix(1, 0, 0, 1, 48, 57);
}

.section {
  top: 0;
  left: 0;
  font-size: 14px;
}
#section1 {
  transform: matrix(1, 0, 0, 1, -17, 46);
}
#section2 {
  transform: matrix(1, 0, 0, 1, -17, 145);
}
#section3 {
  transform: matrix(1, 0, 0, 1, -17, 191);
}

.year {
  top: 0;
  left: 0;
  font-size: 16px;
}
#year1 {
  transform: matrix(1, 0, 0, 1, 248, 0);
}
#year2 {
  transform: matrix(1, 0, 0, 1, 509, 0);
}

.block {
  top: 0;
  left: 0;
  width: 522px;
  height: 27px;
}
#block1 {
  background: #80276c;
  transform: matrix(1, 0, 0, 1, 139, 26);
}
#block2 {
  background: #80276c;
  transform: matrix(1, 0, 0, 1, 139, 62);
}
#block3 {
  background: linear-gradient(to left, #c7cacd, #7e858c);
  transform: matrix(1, 0, 0, 1, 139, 97);
}

.note {
  top: 0;
  left: 0;
  font-size: 14px;
  line-height: 1.2;
}
.note.value {
font-size: 17px;
}
#note1 {
  transform: matrix(1, 0, 0, 1, 7, 6);
}
#note2 {
  transform: matrix(1, 0, 0, 1, 7, 6);
}
#note3 {
  transform: matrix(1, 0, 0, 1, 7, 6);
}
#note4 {
  transform: matrix(1, 0, 0, 1, 30, 0);
}
#note5 {
  transform: matrix(1, 0, 0, 1, 80, 0);
}
#note6 {
  transform: matrix(1, 0, 0, 1, 140, 0);
}
#note7 {
  transform: matrix(1, 0, 0, 1, 204, 0);
}
#note8 {
  transform: matrix(1, 0, 0, 1, 273, 0);
}
#note9 {
  transform: matrix(1, 0, 0, 1, 341, 0);
}
#note10 {
  transform: matrix(1, 0, 0, 1, 408, 0);
}
#note11 {
  transform: matrix(1, 0, 0, 1, 473, 0);
}
#note12 {
  transform: matrix(1, 0, 0, 1, 533, 0);
}

#scheme {
  top: 0;
  left: 0;
  width: 570px;
  height: 90px;
  transform: matrix(1, 0, 0, 1, 112, 140);
}

.point {
  top: 0;
  left: 0;
  width: 14px;
  height: 17px;
  background: #80276c;
}
#point1 {
  transform: matrix(1, 0, 0, 1, 28, 18);
}
#point2 {
  transform: matrix(1, 0, 0, 1, 82, 18);
}
#point3 {
  transform: matrix(1, 0, 0, 1, 142, 18);
}
#point4 {
  transform: matrix(1, 0, 0, 1, 206, 18);
}
#point5 {
  transform: matrix(1, 0, 0, 1, 275, 18);
}
#point6 {
  transform: matrix(1, 0, 0, 1, 343, 18);
}
#point7 {
  transform: matrix(1, 0, 0, 1, 410, 18);
}
#point8 {
  transform: matrix(1, 0, 0, 1, 474, 18);
}
#point9 {
  transform: matrix(1, 0, 0, 1, 535, 18);
}

.slide .icon {
  top: 0;
  left: 0;
  width: 29px;
  height: 49px;
}
#icon1 {
  transform: matrix(1, 0, 0, 1, 20, 37);
}
#icon2 {
  transform: matrix(1, 0, 0, 1, 134, 37);
}
#icon3 {
  transform: matrix(1, 0, 0, 1, 267, 37);
}
#icon4 {
  transform: matrix(1, 0, 0, 1, 527, 37);
}

#arrow {
  top: 0;
  left: 0;
  width: 26px;
  height: 80px;
  transform: matrix(1, 0, 0, 1, 111, 35);
}
#line {
  top: 0;
  left: 0;
  width: 2px;
  height: 120px;
  transform: matrix(1, 0, 0, 1, 395, 18);
}

/* wrapper 2 */

#wrapper2 {
  width: 969px;
  height: 143px;
  background: #133862;
  transform: matrix(1, 0, 0, 1, -84, 328);
}
.caption {
  top: 0;
  left: 0;
  font-size: 10px;
}
#caption1 {
  transform: matrix(1, 0, 0, 1, 41, 13);
}
#caption2 {
  transform: matrix(1, 0, 0, 1, 503, 13);
}

.list {
  top: 0;
  left: 0;
  width: 390px;
  color: #003865;
  font-weight: 300;
  font-size: 10px;
  line-height: 1.2;
}
.list::before {
  content: '';
  position: absolute;
  top: 5px;
  left: -7px;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background: #ffffff;
}
#list1 {
  transform: matrix(1, 0, 0, 1, 48, 41);
}
#list2 {
  transform: matrix(1, 0, 0, 1, 48, 81);
}
#list3 {
  transform: matrix(1, 0, 0, 1, 48, 93);
}
#list4 {
  transform: matrix(1, 0, 0, 1, 48, 105);
}
#list5 {
  transform: matrix(1, 0, 0, 1, 48, 118);
}
#list6 {
  transform: matrix(1, 0, 0, 1, 510, 31);
}
#list7 {
  transform: matrix(1, 0, 0, 1, 510, 57);
}
.paragraph {
  top: 0;
  left: 0;
  font-size: 10px;
  line-height: 1.1;
}
#paragraph1 {
  transform: matrix(1, 0, 0, 1, 41, 28);
}
#paragraph2 {
  transform: matrix(1, 0, 0, 1, 41, 68);
}

/* footnote */

#footnote1 {
  width: 920px;
  line-height: 1.1;
  transform: matrix(1, 0, 0, 1, -67, 66);
}
#footnote2 {
  width: 930px;
  transform: matrix(1, 0, 0, 1, -67, 124);
}
</style>
