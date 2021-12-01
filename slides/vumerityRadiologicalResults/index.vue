<i18n>
{
  "deu": {
    "headline": "<span style='color: #007fa3;'><b>ICH WÜNSCHE MIR EINE THERAPIE,</b><br/><span style='color: #ce0058;'><b>DIE DIE ENTZÜNDUNGSAKTIVITÄT<br>SCHNELL UND EFFEKTIV REDUZIERT<sup>1-3</sup></b></span></span>",
    "title": "<span style='color: #003865;'><b>VUMERITY<sup>™</sup>: Signifikante Verbesserung radiologischer Ergebnisse<sup>1-3</sup></b></span>",
    "caption1": "<span style='color: #4C4D4F;'><b>EVOLVE MS-1</b></span>",
    "caption2": "<span style='color: #4C4D4F;'><b>EVOLVE MS-1 + MS-2</b></span>",
    "caption3": "<span style='color: #4C4D4F;'><b>EVOLVE MS-1 + MS-2</b></span>",
    "description1": "<span style='color: #4C4D4F;'><b style='color: #003865;'>Signifikante<br>Reduktion</b> der<br>Gd+-Läsionen über<br>alle Studienpopulationen<br>hinweg<sup>1</sup></span>",
    "description2": "<span style='color: #4C4D4F;'><b style='color: #003865;'>> 9 von 10</b><br>Patienten ohne<br>Gd+-Läsionen<br>nach ~55 Wochen<sup>2</sup></span>",
    "description3": "<span style='color: #4C4D4F;'><b style='color: #003865;'>Rasche<br>Reduktion</b> der<br>Gd+-Läsionen<br>bereits nach<br>7 Wochen<sup>3</sup></span>",
    "value1": "<span style='color: #003865;'><b>61,5<sup>%</sup></b><br><span><b>REDUKTION</b></span></span>",
    "value2": "<span style='color: #003865;'><b>75,0<sup>%</sup></b><br><span><b>REDUKTION</b></span></span>",
    "value3": "<span style='color: #003865;'><b>66,7<sup>%</sup></b><br><span><b>REDUKTION</b></span></span>",
    "note1": "<span style='color: #003865;'>Gesamt-<br>population</span>",
    "note2": "<span style='color: #003865;'>Neu-<br>diagnostiziert</span>",
    "note3": "<span style='color: #003865;'>Wechsel<br>von IFN/GA</span>",
    "footnote": "<span style='color: #4C4D4F;'><b style='color: #003865;'>Gd+:</b> Gadolinium-aufnehmend.</span>",
    "hiddenRefs": "<sup refs='ref5 ref8 ref9'></sup>"
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
        id="icon1"
        class="pa"
        src="./media/images/icon1.png"
        component-name="Icon"
      ></wiz-image>
      <wiz-text
        id="title"
        class="pa"
        :text="$t('title')"
        component-name="Title"
      ></wiz-text>
      <wiz-bg-container
        id="wrapper1"
        v-goto="toSlide1"
        class="wrapper pa"
        component-name="Wrapper"
      >
        <wiz-image
          id="iconGraph1"
          class="icon-graph pa"
          src="./media/images/icon-graph.png"
          component-name="Icon"
        ></wiz-image>
        <wiz-text
          id="caption1"
          class="caption pa"
          :text="$t('caption1')"
          component-name="Caption"
        ></wiz-text>
        <wiz-text
          id="description1"
          class="description pa"
          :text="$t('description1')"
          component-name="Description"
        ></wiz-text>
        <wiz-text
          id="note1"
          class="note pa"
          :text="$t('note1')"
          component-name="Note"
        ></wiz-text>
        <wiz-text
          id="note2"
          class="note pa"
          :text="$t('note2')"
          component-name="Note"
        ></wiz-text>
        <wiz-text
          id="note3"
          class="note pa"
          :text="$t('note3')"
          component-name="Note"
        ></wiz-text>
        <wiz-bg-container
          id="container1"
          class="container pa"
          component-name="Container"
        >
          <wiz-image
            id="containerIcon1"
            class="container-icon pa"
            src="./media/images/container-icon.png"
            component-name="Icon"
          ></wiz-image>
          <wiz-text
            id="value1"
            class="value pa"
            :text="$t('value1')"
            component-name="Value"
          ></wiz-text>
        </wiz-bg-container>
        <wiz-bg-container
          id="container2"
          class="container pa"
          component-name="Container"
        >
          <wiz-image
            id="containerIcon2"
            class="container-icon pa"
            src="./media/images/container-icon.png"
            component-name="Icon"
          ></wiz-image>
          <wiz-text
            id="value2"
            class="value pa"
            :text="$t('value2')"
            component-name="Value"
          ></wiz-text>
        </wiz-bg-container>
        <wiz-bg-container
          id="container3"
          class="container pa"
          component-name="Container"
        >
          <wiz-image
            id="containerIcon3"
            class="container-icon pa"
            src="./media/images/container-icon.png"
            component-name="Icon"
          ></wiz-image>
          <wiz-text
            id="value3"
            class="value pa"
            :text="$t('value3')"
            component-name="Value"
          ></wiz-text>
        </wiz-bg-container>
      </wiz-bg-container>
      <wiz-bg-container
        id="wrapper2"
        v-goto="toSlide2"
        class="wrapper pa"
        component-name="Wrapper"
      >
        <wiz-image
          id="iconGraph2"
          class="icon-graph pa"
          src="./media/images/icon-graph.png"
          component-name="Icon"
        ></wiz-image>
        <wiz-text
          id="caption2"
          class="caption pa"
          :text="$t('caption2')"
          component-name="Caption"
        ></wiz-text>
        <wiz-text
          id="description2"
          class="description pa"
          :text="$t('description2')"
          component-name="Description"
        ></wiz-text>
        <wiz-image
          id="icon2"
          class="pa"
          src="./media/images/icon2.png"
          component-name="Icon"
        ></wiz-image>
      </wiz-bg-container>
      <wiz-bg-container
        id="wrapper3"
        v-goto="toSlide3"
        class="wrapper pa"
        component-name="Wrapper"
      >
        <wiz-image
          id="iconGraph3"
          class="icon-graph pa"
          src="./media/images/icon-graph.png"
          component-name="Icon"
        ></wiz-image>
        <wiz-text
          id="caption3"
          class="caption pa"
          :text="$t('caption3')"
          component-name="Caption"
        ></wiz-text>
        <wiz-text
          id="description3"
          class="description pa"
          :text="$t('description3')"
          component-name="Description"
        ></wiz-text>
        <wiz-image
          id="icon3"
          class="pa"
          src="./media/images/icon3.png"
          component-name="Icon"
        ></wiz-image>
      </wiz-bg-container>
    </wiz-bg-grid-container>

    <wiz-bg-grid-container
      id="footnoteArea"
      class="footnote-area"
      component-name="Footnote area"
    >
      <wiz-text
        id="footnote"
        class="footnote"
        :text="$t('footnote')"
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
				slide: 'vumerityEfficacyMriPopup1',
				chapter: 'popups'
			},
			toSlide2: {
				slide: 'vumerityEfficacyEtPopup2',
				chapter: 'popups'
			},
			toSlide3: {
				slide: 'vumerityEfficacyEtPopup1',
				chapter: 'popups'
			}
		};
	}
};
</script>
<style>
.vumerityRadiologicalResults #bottomLeftAngle {
  transform: matrix(1, 0, 0, 1, 44, 575);
  display: none;
}
.vumerityRadiologicalResults #bottomShadowImage {
  transform: matrix(1, 0, 0, 1, 0, 686);
}
</style>
<style scoped>
.headline {
  width: 615px;
  transform: matrix(1, 0, 0, 1, 0, 11);
}

#title {
  font: 25px/25px "Open Sans Condensed";
  transform: matrix(1, 0, 0, 1, 127, 12);
}

.wiz-slide #chapterBackgroundImage {
  width: 257px;
  height: 154px;
  transform: matrix(1, 0, 0, 1, 684, -10);
}

.wrapper {
  width: 285px;
  height: 399px;
  transform: matrix(1, 0, 0, 1, 0, 85);
  background: #eaf2f5;
  border-radius: 10px;
}

#wrapper2 {
  transform: matrix(1, 0, 0, 1, 306, 85);
}

#wrapper3 {
  transform: matrix(1, 0, 0, 1, 612, 85);
}

.wiz-slide .icon-graph {
  width: 23px;
  height: 19px;
  transform: matrix(1, 0, 0, 1, 247, 17);
}

#icon1 {
  width: 68px;
  height: 68px;
  transform: matrix(1, 0, 0, 1, -1, -9);
}

#icon2 {
  width: 133px;
  height: 122px;
  transform: matrix(1, 0, 0, 1, 75, 236);
}

#icon3 {
  width: 86px;
  height: 86px;
  transform: matrix(1, 0, 0, 1, 98, 249);
}

.caption {
  font: 20px/20px "Open Sans Condensed";
  transform: matrix(1, 0, 0, 1, 91, 50);
}

#caption2 {
  transform: matrix(1, 0, 0, 1, 62, 50);
}

#caption3 {
  transform: matrix(1, 0, 0, 1, 62, 50);
}

.description {
  font: 22px/26px "Open Sans";
  transform: matrix(1, 0, 0, 1, 13, 78);
  text-align: center;
}

.description::v-deep span b {
  font-weight: 900;
}

#description2 {
  transform: matrix(1, 0, 0, 1, 47, 78);
}

#description3 {
  transform: matrix(1, 0, 0, 1, 62, 78);
}

.container {
  width: 84px;
  height: 84px;
  border: 1px solid #ce0058;
  border-radius: 50%;
  background: #ffffff;
  transform: matrix(1, 0, 0, 1, 9, 234);
}

#container2 {
  transform: matrix(1, 0, 0, 1, 99, 234);
}

#container3 {
  transform: matrix(1, 0, 0, 1, 188, 234);
}

.value {
  font: 27px/15px "Open Sans";
  transform: matrix(1, 0, 0, 1, 9, 23);
  text-align: center;
}

.value::v-deep span span {
  font-size: 12px;
  font-family: "Open Sans Condensed";
}

.wiz-slide .container-icon {
  width: 25px;
  height: 15px;
  transform: matrix(1, 0, 0, 1, 30, 62);
}

.note {
  font: 15px/18px "Open Sans Condensed";
  text-align: center;
  transform: matrix(1, 0, 0, 1, 25, 325);
}

#note2 {
  transform: matrix(1, 0, 0, 1, 108, 325);
}

#note3 {
  transform: matrix(1, 0, 0, 1, 203, 325);
}

#footnote {
  transform: matrix(1, 0, 0, 1, -25, 138);
}
</style>
