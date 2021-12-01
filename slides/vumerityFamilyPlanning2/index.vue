<i18n>
{
  "deu": {
    "headline": "<span style='color: #007fa3;'><b>ICH WÜNSCHE MIR EINE FLEXIBLE THERAPIE<br><span style='color: #ce0058;'>MIT WENIG WECHSELWIRKUNGSPOTENZIAL</span></b></span>",
    "title": "<span style='color: #003865'><b>VUMERITY<sup>™</sup> wird rasch eliminiert und hat keine bekannten<br>CYP450-Wechselwirkungen<sup>1,2</sup></b></span>",
    "list1Item1": "<span style='color: #4c4d4f'><ul><li>Die terminale Halbwertszeit von VUMERITY<sup>™</sup> ist kurz (~ 1 Stunde für<br>MMF)<sup>1</sup> und bei der Mehrzahl der Patienten ist nach 24 Stunden kein<br>zirkulierendes MMF mehr vorhanden.<sup>2</sup></li></ul></span>",
    "list1Item2": "<span style='color: #4c4d4f'><ul><li>Das Ausatmen von CO<sub>2</sub> ist der primäre Weg der Elimination von MMF,<br>das im Urin nur in Spuren nachweisbar ist.<sup>1</sup></li><li>VUMERITY<sup>™</sup> wird ohne Beteiligung des Cytochrom-P450-Systems<br>verstoffwechselt, sodass keine klinisch bedeutsamen Wechselwirkungen<br>bei Verabreichung zusammen mit CYP-Inhibitoren oder -Induktoren zu<br>erwarten sind.<sup>1</sup></li></ul></span>",
    "footnote1": "<span style='color: #4c4d4f'><b style='color: #003865;'>MMF:</b> Monomethylfumarat.</span>",
    "hiddenRefs": "<sup refs='ref1 ref11'></sup>"
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
        v-goto="nav2"
        class="icon"
        component-name="Icon"
        src="./media/images/icon1.png"
      ></wiz-image>

      <wiz-bg-container id="listWrapper">
        <wiz-text
          id="list1"
          class="lists"
          component-name="List"
          :text="$t('list1Item1')"
        ></wiz-text>
        <wiz-text
          id="list2"
          class="lists"
          component-name="List"
          :text="$t('list1Item2')"
        ></wiz-text>
      </wiz-bg-container>
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
    </wiz-bg-grid-container>
  </wiz-slide>
</template>
<script>
export default {
	data() {
		return {
			nav2: {
				chapter: 'familyPlanning',
				slide: 'vumerityFamilyPlanning1'
			}
		};
	}
};
</script>
<style>
#app .vumerityFamilyPlanning2 .wiz-slide .chapter-background-image {
    width: 298px;
    height: 154px;
    transform: matrix(1, 0, 0, 1, 642, -10);
}
</style>
<style scoped>
.wiz-slide .headline {
  /* transform: matrix(1, 0, 0, 1, 0, 55); */
  z-index: 2;
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
  transform: matrix(1, 0, 0, 1, 187, -5);
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

#listWrapper{
  position: absolute;
  top: 0;
  left: 0;
  width: 600px;
  height: 251px;
  transform: matrix(1, 0, 0, 1, 315, 168);
}
#list2{
  transform: matrix(1, 0, 0, 1, 0, 80);
}
.lists {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 619px;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
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
  transform: matrix(1, 0, 0, 1, -25, 148);
}
#list1{
  cursor: pointer;
}
</style>
