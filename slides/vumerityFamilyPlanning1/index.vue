<i18n>
{
  "deu": {
    "headline": "<span style='color: #007fa3;'><b>ICH BRAUCHE EINE THERAPIE,<br><span style='color: #ce0058;'>DIE ZUM LEBEN MEINER PATIENTINNEN PASST<sup>1</sup></span></b></span>",
    "title": "<span style='color: #003865'><b>VUMERITY<sup>™</sup> emöglicht Flexibilität bei der Familienplanung</b></span>",
    "list1Item1": "<span style='color: #4c4d4f'><ul><li>Keine Wechselwirkungen mit oralen Kontrazeptiva zu erwarten.<sup>a,2,3</sup></li><li>Kein Hinweis auf ein erhöhtes Risiko verminderter Fertilität.<sup>2,3</sup></li><li>Die Anwendung von VUMERITY<sup>™</sup> während der Schwangerschaft wird<br>nicht empfohlen.<sup>2</sup></li><li>VUMERITY<sup>™</sup> und Tecfidera<sup>®</sup> sind derzeit die einzigen oralen DMTs,<br>die während der Schwangerschaft nicht kontraindiziert sind.<sup>2-7</sup></li><li>Es muss eine Entscheidung darüber getroffen werden, ob das Stillen<br>zu unterbrechen ist oder ob die Behandlung mit VUMERITY<sup>™</sup> zu<br>unterbrechen ist.<sup>2</sup></li><li>Das Langzeitwirksamkeits- und -sicherheitsprofil von VUMERITY<sup>™</sup> stützt<br>sich auf die Wirksamkeits- und Sicherheitsdaten von Tecfidera<sup>®</sup> über bis<br>zu 13 Jahre.<sup>2,3,8,9</sup></li></ul></span>",
    "footnote1": "<span style='color: #4c4d4f'><b style='color: #003865;'>a</b> Norgestimat und Ethinylestradiol.</span>",
    "footnote2": "<span style='color: #4c4d4f'><b style='color: #003865;'>DMT:</b> Krankheitsmodifizierende Therapie.</span>",
    "hiddenRefs": "<sup refs='ref14 ref1 ref11 ref35 ref36 ref37 ref38 ref13 ref5'></sup>"
  }
}
</i18n>

<template>
  <wiz-slide>
    <wiz-bg-grid-container
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
        class="chapter-background-image"
        src="../../common/media/images/chapter-background-images/chapter-background-2.png"
      ></wiz-image>
    </wiz-bg-grid-container>
    <wiz-bg-grid-container
      class="content-area"
      component-name="Content area"
    >
      <wiz-text
        id="title"
        component-name="Title"
        :text="$t('title')"
      ></wiz-text>

      <wiz-image
        id="icon1"
        class="icon"
        component-name="Icon"
        src="./media/images/icon1.png"
      ></wiz-image>

      <wiz-text
        id="list1"
        class="lists"
        component-name="List"
        :text="$t('list1Item1')"
      ></wiz-text>
    </wiz-bg-grid-container>

    <wiz-bg-grid-container
      class="footnote-area"
      component-name="Footnote area"
    >
      <wiz-text
        id="hiddenRefs"
        class="hidden"
        component-name="Hidden references"
        :text="$t('hiddenRefs')"
      ></wiz-text>

      <wiz-text
        id="footnote1"
        class="footnote"
        component-name="Footnote"
        :text="$t('footnote1')"
      ></wiz-text>
      <wiz-text
        id="footnote2"
        class="footnote"
        component-name="Footnote"
        :text="$t('footnote2')"
      ></wiz-text>
    </wiz-bg-grid-container>
  </wiz-slide>
</template>
<script>
export default {
  data() {
    return {
      nav: {
        chapter: 'familyPlanning',
        slide: '',
      },
    };
  },
};
</script>
<style>
#app .vumerityFamilyPlanning1 .wiz-slide .chapter-background-image {
    width: 298px;
    height: 154px;
    transform: matrix(1, 0, 0, 1, 642, -10);
}
</style>
<style scoped>
#headline{
  z-index: 2;
}
#title {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 25px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 30px;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 171, 11);
}

#icon1 {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 378px;
  height: 404px;
  transform: matrix(1, 0, 0, 1, -83, 77);
}

.lists {
  position: absolute;
  top: 0;
  left: 0;
  width: 619px;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  transform: matrix(1, 0, 0, 1, 315, 85);
}

.lists::v-deep li:before {
  content: '';
  position: absolute;
  top: 10px;
  left: 0;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #c61e4d;
}

.lists::v-deep li {
  position: relative;
  margin-bottom: 16px;
  padding-left: 14px;
}

#footnote1 {
  transform: matrix(1, 0, 0, 1, -25, 126);
}

#footnote2 {
  transform: matrix(1, 0, 0, 1, -25, 148);
}
</style>
