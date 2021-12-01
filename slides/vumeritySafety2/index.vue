<i18n>
{
  "deu": {
    "headline": "<span style='color: #007fa3;'><b>VUMERITY<sup>™</sup> – DAS FUMARAT DER NÄCHSTEN<br>GENERATION.<sup>a,1,2</sup></b> <span style='color: #ce0058;'><b>BASIEREND AUF DER EVIDENZ<br>UND ERFAHRUNG VON TECFIDERA<sup>®</sup><sup>2-7</sup></b></span></span>",
    "headlineNote": "<span style='color: #003865;'></span>",
    "title": "<span style='color: #003865;'><b>VUMERITY<sup>™</sup> und Tecfidera<sup>®</sup> sind bioäquivalent.<sup>b,8</sup> Das Wirksamkeits- und<br>Sicherheitsprofil von VUMERITY<sup>™</sup> stützt sich daher auf die 13-Jahres-Daten<br>von Tecfidera<sup>®</sup> – der weltweit meistverordneten oralen MS-Therapie.<sup>2-7,9</sup></b></span>",
    "number": "<span style='color: #003865;'>>500.000</span>",
    "paragraph1": "<span style='color: #4c4d4f;'>mit TECFDIERA<sup>®</sup> behandelte Patienten,<br>mit <span style='color: #007fa3;'>>1.000.000</span> Patientenjahren.<sup>c,4,9</sup></span>",
    "paragraph2": "<span style='color: #4c4d4f;'>In kontrollierten und nicht kontrollierten klinischen Studien wurden insgesamt 1.057 Patienten mit VUMERITY<sup>™</sup><br>behandelt und über einen Zeitraum von bis zu 2 Jahren beobachtet.<sup>d,7</sup></span>",
    "footnote1": "<span style='color: #4c4d4f;'><b style='color: #003865;'>a</b> Bei VUMERITY<sup>™</sup>-Patienten wurden weniger schwere gastrointestinale Ereignisse über eine kürzere Dauer an Tagen (Reduktion um 46%) beobachtet als bei Dimethylfumarat-Patienten, was zu einer geringeren Rate an Therapieabbrüchen (0,8% vs. 4,8%) führte. Die adjustierte mittlere Anzahl der Tage mit gastrointestinalen Symptomen (IGISIS-Score ≥ 2) betrug 1,4 vs. 2,6 (adjustierte Rate Ratio 0,54 [95%-KI] 0,39-0,75; p = 0,0003).<sup>2</sup> | <b style='color: #003865;'>b</b> VUMERITY<sup>™</sup> und Tecfidera<sup>®</sup> (in therapeutischen Dosierungen von 462 mg bzw. 240 mg) führen zu einer bioäquivalenten MMF-Exposition. | <b style='color: #003865;'>c</b> Davon waren 6.335 Patienten (14.241 Patientenjahre) aus klinischen Studien. | <b style='color: #003865;'>d</b> Stichtag: 1. September 2020.</span>",
    "footnote2": "<span style='color: #4c4d4f;'><b style='color: #003865;'>MMF:</b> Monomethylfumarat.</span>",
    "hiddenReferences": "<sup refs='ref2 ref3 ref11 ref13 ref4 ref5 ref42 ref1 ref43'></sup>"
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
      <wiz-text
        id="headlineNote"
        class="pa headline-note"
        :text="$t('headlineNote')"
        component-name="Headline note"
      ></wiz-text>
      <wiz-image
        class="chapter-background-image"
        src="../../common/media/images/chapter-background-images/chapter-background-1.png"
      ></wiz-image>
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
      <wiz-image
        id="icon"
        class="pa"
        :src="'./media/images/icon.png'"
        component-name="Icon"
      ></wiz-image>
      <wiz-text
        id="title"
        class="pa"
        :text="$t('title')"
        component-name="Title"
      ></wiz-text>

      <wiz-image
        id="people1"
        class="pa people"
        :src="'./media/images/people1.png'"
        component-name="People"
      ></wiz-image>
      <wiz-image
        id="people2"
        class="pa people"
        :src="'./media/images/people2.png'"
        component-name="People"
      ></wiz-image>

      <wiz-text
        id="number"
        class="pa"
        :text="$t('number')"
        component-name="Number"
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
  </wiz-slide>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
#headline {
  transform: matrix(1, 0, 0, 1, 0, 11);
}
#headlineWrapper .chapter-background-image {
  width: 257px;
  height: 154px;
  z-index: -1;
  transform: matrix(1, 0, 0, 1, 684, -10);
}

#icon {
  top: 0;
  left: 0;
  width: 68px;
  height: 68px;
  transform: matrix(1, 0, 0, 1, 1, -10);
}

#title {
  top: 0;
  left: 0;
  font-size: 25px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 30px;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 111, -20);
}

.people {
  top: 0;
  left: 0;
}

#people1 {
  width: 411px;
  height: 72px;
  transform: matrix(1, 0, 0, 1, -156, 178);
}

#people2 {
  width: 408px;
  height: 72px;
  transform: matrix(1, 0, 0, 1, 608, 178);
}

#number {
  top: 0;
  left: 0;
  font-weight: 800;
  font-size: 84px;
  transform: matrix(1, 0, 0, 1, 247, 149);
}

.paragraph {
  top: 0;
  left: 0;
  font-size: 20px;
  text-align: center;
}

.paragraph::v-deep span > span {
  color: #007fa3;
  font-weight: 800;
}

#paragraph1 {
  transform: matrix(1, 0, 0, 1, 262, 260);
}

#paragraph2 {
  width: 900px;
  font-size: 18px;
  transform: matrix(1, 0, 0, 1, 11, 406);
}

#footnote1 {
  width: 805px;
  transform: matrix(1, 0, 0, 1, -25, 90);
}

#footnote2 {
  transform: matrix(1, 0, 0, 1, -25, 148);
}

</style>
