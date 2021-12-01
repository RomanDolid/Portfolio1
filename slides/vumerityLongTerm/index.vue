<i18n>
{
  "deu": {
    "headline": "<span style='color: #007fa3;'><b>ICH WÜNSCHE MIR EINE THERAPIE,<br/><b style='color: #ce0058;'>DIE LANGFRISTIG WIRKT<sup>1-5</sup></b></b></span>",
    "caption1": "<span style='color: #003865;'><b>VUMERITY<sup>™</sup> stützt sich auf die 13-Jahres-Daten<br>zur Langzeitwirksamkeit von Tecfidera<sup>®a,</sup><sup>1-5</sup></b></span>",
    "title1": "<span style='color: #4c4d4f;'>Fast die Hälfte aller<br>Patienten blieb über<br>10 Jahre <b style='color: #003865;'>schubfrei</b><sup>b,3</sup></span>",
    "description1": "<span style='color: #4c4d4f;'><b style='color: #003865;'>Die jährliche Schubrate</b><br>blieb über 10 Jahre<br><b style='color: #003865;'>niedrig</b><sup>c,3</sup></span>",
    "title2": "<span style='color: #4c4d4f;'><b style='color: #003865;'>7 von 10 Patienten</b><br>blieben über 10 Jahre<br>ohne Behinderungs-<br>progression<sup>d,3</sup></span>",
    "description2": "<span style='color: #4c4d4f;'>>70% der Patienten ohne<br>Gehbehinderung bei<br>Baseline <b style='color: #003865;'>behielten ihre<br>Gehfähigkeit über<br>10 Jahre bei</b><sup>e,3</sup></span>",
    "title3": "<span style='color: #4c4d4f;'><b style='color: #003865;'>7 von 10 Patienten</b><br>hatten in Jahr 7 keine<br>neuen T1-Läsionen<sup>f,5</sup></span>",
    "description3": "<span style='color: #4c4d4f;'><b style='color: #003865;'>Geringer</b> jährlicher<br>prozentualer <b style='color: #003865;'>Hirnvolumen-<br>verlust</b> über bis zu 8 Jahre,<br>in etwa vergleichbar mit<br>gesunden Erwachsenen<sup>g,5</sup></span>",
    "footnote1": "<span style='color: #4c4d4f;'><b style='color: #003865;'>a</b> VUMERITY<sup>™</sup> und Tecfidera<sup>®</sup> (in therapeutischen Dosierungen von 462 mg bzw. 240 mg) führen zu einer bioäquivalenten MMF-Exposition.<sup>6</sup></span>",
    "footnote2": "<span style='color: #4c4d4f;'><b style='color: #003865;'>b</b> 45% der kontinuierlich mit Tecfidera<sup>®</sup> behandelten Patienten (TEC/TEC; n=501).</span>",
    "footnote3": "<span style='color: #4c4d4f;'><b style='color: #003865;'>c</b> Die jährliche Schubrate von über 10 Jahre kontinuierlich mit Tecfidera<sup>®</sup> behandelten Patienten (2 Jahre DEFINE/CONFIRM; ≥ 8 Jahre ENDORSE) wurde auf Grundlage eines negativen binomialen Regressionsmodells<br>berechnet, und hinsichtlich Studie, Region, Baseline Alter (<40 vs. ≥40 Jahre), Baseline EDSS-Wert (≤2.0 vs. >2.0) und Anzahl der Schübe im Jahr vor Studienbeginn (DEFINE/CONFIRM) adjustiert.</span>",
    "footnote4": "<span style='color: #4c4d4f;'><b style='color: #003865;'>d</b> 72% der mit Tecfidera<sup>®</sup> behandelten Patienten (TEC/TEC; n=358)<sup>4</sup> blieben über 10 Jahre frei von einer über 24 Wochen anhaltenden Behinderungsprogression. Der geschätzte Anteil der Patienten mit<br>Behinderungsprogression und die Zeit bis zur Behinderungsprogression von bis zu 480 Wochen wurde auf Grundlage der Kaplan-Meier-Schätzers berechnet. Die Behinderungsprogression wurde definiert<br>als ein Anstieg des EDSS um ≥1,0 Punkte vom EDSS-Baselinewert von ≥1 oder einem Anstieg des EDSS um 1,0 Punkte vom EDSS-Baselinewert 0 (jeweils über 24 Wochen bestätigt).</span>",
    "footnote5": "<span style='color: #4c4d4f;'><b style='color: #003865;'>e</b> 77% der mit Tecfidera<sup>®</sup> behandelten Patienten (TEC/TEC; n=358)<sup>4</sup> behielten ihre Gehfähigkeit. Keine Gehbehinderung wurde in der ENDORSE-Studie als kein Überschreiten des EDSS-Werts von 3,5 definiert.</span>",
    "footnote6": "<span style='color: #4c4d4f;'><b style='color: #003865;'>f</b> 72% der mit Tecfidera<sup>®</sup> behandelten Patienten (n=93) blieben jährlich über einen Zeitraum von 9 Jahren frei von T1-hypointensen Läsionen (7 Jahre ENDORSE).</span>",
    "footnote7": "<span style='color: #4c4d4f;'><b style='color: #003865;'>g</b> Der jährliche Hirnvolumenverlust liegt zwischen -0,19% und -0,37%. Der jährliche Hirnvolumenverlust bei gesunden Erwachsenen liegt jährlich zwischen -0,1% und -0,3%.</span>",
    "footnote8": "<span style='color: #4c4d4f;'><b style='color: #003865;'>EDSS:</b> Expanded disability status scale; <b style='color: #003865;'>RRMS:</b> Schubförmig remittierende Multiple Sklerose.</span>",
    "hiddenRefs": "<sup refs='ref4_1 ref5 ref13 ref29 ref12 ref1'></sup>"
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
        class="headline"
        :text="$t('headline')"
        component-name="Headline"
      ></wiz-text>
      <wiz-image
        id="chapterBackgroundImage"
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
        class="icon pa"
        src="./media/images/icon.png"
        component-name="Icon"
      ></wiz-image>
      <wiz-text
        id="caption1"
        class="caption pa"
        :text="$t('caption1')"
        component-name="Caption"
      ></wiz-text>
      <wiz-bg-container
        id="wrapper1"
        v-goto="toSlide1"
        class="wrapper pa"
        component-name="Wrapper"
      >
        <wiz-image
          id="icon1"
          class="icon icon-wrapper pa"
          src="./media/images/icon1.png"
          component-name="Icon"
        ></wiz-image>
        <wiz-image
          id="icon2"
          class="icon icon-graph pa"
          src="./media/images/icon2.png"
          component-name="Icon"
        ></wiz-image>
        <wiz-text
          id="title1"
          class="title pa"
          :text="$t('title1')"
          component-name="Title"
        ></wiz-text>
        <wiz-image
          id="icon3"
          class="icon pa"
          src="./media/images/icon3.png"
          component-name="Icon"
        ></wiz-image>
        <wiz-text
          id="description1"
          class="description pa"
          :text="$t('description1')"
          component-name="Description"
        ></wiz-text>
      </wiz-bg-container>

      <wiz-bg-container
        id="wrapper2"
        v-goto="toSlide2"
        class="wrapper pa"
        component-name="Wrapper"
      >
        <wiz-image
          id="icon4"
          class="icon icon-wrapper pa"
          src="./media/images/icon4.png"
          component-name="Icon"
        ></wiz-image>
        <wiz-image
          id="icon5"
          class="icon icon-graph pa"
          src="./media/images/icon2.png"
          component-name="Icon"
        ></wiz-image>
        <wiz-text
          id="title2"
          class="title pa"
          :text="$t('title2')"
          component-name="Title"
        ></wiz-text>
        <wiz-image
          id="icon6"
          class="icon pa"
          src="./media/images/icon5.png"
          component-name="Icon"
        ></wiz-image>
        <wiz-text
          id="description2"
          class="description pa"
          :text="$t('description2')"
          component-name="Description"
        ></wiz-text>
      </wiz-bg-container>

      <wiz-bg-container
        id="wrapper3"
        class="wrapper pa"
        component-name="Wrapper"
      >
        <wiz-image
          id="icon7"
          class="icon icon-wrapper pa"
          src="./media/images/icon6.png"
          component-name="Icon"
        ></wiz-image>
        <wiz-text
          id="title3"
          class="title pa"
          :text="$t('title3')"
          component-name="Title"
        ></wiz-text>
        <wiz-image
          id="icon9"
          class="icon pa"
          src="./media/images/icon7.png"
          component-name="Icon"
        ></wiz-image>
        <wiz-text
          id="description3"
          class="description pa"
          :text="$t('description3')"
          component-name="Description"
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
        class="footnote"
        :text="$t('footnote1')"
        component-name="Footnote"
      ></wiz-text>
      <wiz-text
        id="footnote2"
        class="footnote"
        :text="$t('footnote2')"
        component-name="Footnote"
      ></wiz-text>
      <wiz-text
        id="footnote3"
        class="footnote"
        :text="$t('footnote3')"
        component-name="Footnote"
      ></wiz-text>
      <wiz-text
        id="footnote4"
        class="footnote"
        :text="$t('footnote4')"
        component-name="Footnote"
      ></wiz-text>
      <wiz-text
        id="footnote5"
        class="footnote"
        :text="$t('footnote5')"
        component-name="Footnote"
      ></wiz-text>
      <wiz-text
        id="footnote6"
        class="footnote"
        :text="$t('footnote6')"
        component-name="Footnote"
      ></wiz-text>
      <wiz-text
        id="footnote7"
        class="footnote"
        :text="$t('footnote7')"
        component-name="Footnote"
      ></wiz-text>
      <wiz-text
        id="footnote8"
        class="footnote"
        :text="$t('footnote8')"
        component-name="Footnote"
      ></wiz-text>
      <wiz-text
        id="hiddenRefs"
        class="hidden"
        :text="$t('hiddenRefs')"
        :component-name="'Hidden references'"
      ></wiz-text>
    </wiz-bg-grid-container>
  </wiz-slide>
</template>
<script>
export default {
  data() {
    return {
      toSlide1: {
        slide: 'vumerityLongTermPopup1',
        chapter: 'popups',
      },
      toSlide2: {
        slide: 'vumerityLongTermPopup2',
        chapter: 'popups',
      },
      toSlide3: {
        slide: '',
        chapter: '',
      },
    };
  },
};
</script>
<style>
.vumerityLongTerm #bottomLeftAngle {
  transform: matrix(1, 0, 0, 1, 44, 575);
}
.vumerityLongTerm #bottomShadowImage {
  transform: matrix(1, 0, 0, 1, 0, 609);
}
.vumerityLongTerm #logo {
  display: none;
}
</style>
<style scoped>
.headline {
  width: 615px;
}
.headline-note {
  width: 520px;
}
.wiz-slide #chapterBackgroundImage {
  width: 257px;
  height: 154px;
  transform: matrix(1, 0, 0, 1, 684, -10);
}
.wiz-slide .icon {
  width: 70px;
  height: 70px;
}
.wiz-slide .icon-wrapper {
  width: 48px;
  height: 48px;
}
.wiz-slide .icon-graph {
  width: 23px;
  height: 22px;
}
.caption {
  font: 25px/1.2 'Open Sans Condensed', sans-serif;
  text-align: center;
}
.title {
  font: 300 22px/24px 'Open Sans', sans-serif;
  text-align: center;
}
.title::v-deep b {
  font-weight: 800;
}
.description {
  font: 300 17px/20px 'Open Sans', sans-serif;
  text-align: center;
}
#description1 {
    width: 221px;
    transform: matrix(1, 0, 0, 1, 16, 212);
}
#description2 {
width: 334px;
  transform: matrix(1, 0, 0, 1, -40, 212);
}
#description3 {
  width: 230px;
  transform: matrix(1, 0, 0, 1, 10, 212);
}
.wiz-slide .wrapper {
  width: 250px;
  height: 325px;
  border-radius: 10px;
  background: #e5f2f6;
  cursor: pointer;
}
#icon {
  transform: matrix(1, 0, 0, 1, 0, -10);
}
#icon1 {
  transform: matrix(1, 0, 0, 1, 102, -25);
}
#icon2 {
  transform: matrix(1, 0, 0, 1, 213, 12);
}
#icon3 {
  width: 218px;
  height: 44px;
  transform: matrix(1, 0, 0, 1, 18, 159);
}
#icon4 {
  transform: matrix(1, 0, 0, 1, 102, -25);
}
#icon5 {
  transform: matrix(1, 0, 0, 1, 213, 12);
}
#icon6 {
  width: 241px;
  height: 57px;
  transform: matrix(1, 0, 0, 1, 5, 148);
}
#icon7 {
  transform: matrix(1, 0, 0, 1, 101, -24);
}
#icon8 {
  transform: matrix(1, 0, 0, 1, 213, 12);
}
#icon9 {
  width: 193px;
  height: 69px;
  transform: matrix(1, 0, 0, 1, 28, 130);
}
#caption1 {
  width: 635px;
  transform: matrix(1, 0, 0, 1, 131, -5);
}
#wrapper1 {
  transform: matrix(1, 0, 0, 1, 34, 86);
}
#wrapper2 {
  transform: matrix(1, 0, 0, 1, 303, 87);
}
#wrapper3 {
  transform: matrix(1, 0, 0, 1, 572, 87);
}
#title1 {
    width: 229px;
    transform: matrix(1, 0, 0, 1, 10, 36);
}
#title2 {
    width: 228px;
    transform: matrix(1, 0, 0, 1, 12, 35);
}
#title3 {
    width: 221px;
    transform: matrix(1, 0, 0, 1, 15, 34);
}
.footnote {
  line-height: 12px;
}
#logo {
  display: none;
}
#footnote1 {
  width: 650px;
  transform: matrix(1, 0, 0, 1, -25, 18);
}
#footnote2 {
  width: 416px;
  transform: matrix(1, 0, 0, 1, -25, 30);
}
#footnote3 {
  width: 961px;
  line-height: 12px;
  text-indent: -8px;
  transform: matrix(1, 0, 0, 1, -17, 42);
}
#footnote4 {
  width: 920px;
  text-indent: -8px;
  transform: matrix(1, 0, 0, 1, -17, 66);
}
#footnote5 {
  width: 950px;
  transform: matrix(1, 0, 0, 1, -25, 102);
}
#footnote6 {
  width: 920px;
  transform: matrix(1, 0, 0, 1, -25, 114);
}
#footnote7 {
  width: 920px;
  transform: matrix(1, 0, 0, 1, -25, 126);
}
#footnote8 {
  width: 1055px;
  transform: matrix(1, 0, 0, 1, -25, 147);
}
</style>
