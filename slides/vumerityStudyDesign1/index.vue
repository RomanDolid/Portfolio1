<i18n>
{
  "deu": {
    "headline": "<span style='color: #007fa3;'><b>STUDIENDESIGNS</b></span>",
    "chapter1": "<b style='color: #003865;'>VUMERITY<sup>™</sup>: klinische Studien</b>",
    "chapter2": "<b style='color: #003865;'>TECFIDERA<sup>®</sup>: klinische Studien</b>",
    "item1": "<span style='color: #ffffff;'><b>EVOLVE-MS-1</b></span>",
    "item2": "<span style='color: #ffffff;'><b>EVOLVE-MS-2</b></span>",
    "item3": "<span style='color: #ffffff;'><b>ENDORSE</b></span>",
    "item4": "<span style='color: #ffffff;'><b>DEFINE</b></span>",
    "item5": "<span style='color: #ffffff;'><b>CONFIRM</b></span>",
    "item6": "<span style='color: #ffffff;'><b>EXPERIENCE</b></span>"
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
        :component-name="'Headline &amp; Subhead container'"
      >
        <wiz-text
          id="headline"
          class="pa headline"
          :text="$t('headline')"
          component-name="Headline"
        ></wiz-text>
      </wiz-bg-grid-container>

      <wiz-bg-grid-container
        id="contentArea"
        class="content-area"
        :component-name="'Content area'"
      >
        <wiz-text
          id="chapter1"
          class="pa chapter"
          :text="$t('chapter1')"
          component-name="Chapter"
        ></wiz-text>
        <wiz-text
          id="chapter2"
          class="pa chapter"
          :text="$t('chapter2')"
          component-name="Chapter"
        ></wiz-text>

        <wiz-bg-container
          id="wrapper1"
          v-goto="toSlide1"
          class="pa wrapper"
          component-name="Wrapper"
        >
          <wiz-image
            id="button1"
            class="pa button"
            :src="'./media/images/button-1.png'"
            component-name="Button image"
          ></wiz-image>
          <wiz-image
            id="graph1"
            class="pa graph"
            :src="'./media/images/graph.png'"
            component-name="Graph"
          ></wiz-image>
          <wiz-text
            id="popupButton1"
            class="pa button"
            :text="$t('item1')"
            component-name="Button text"
          ></wiz-text>
        </wiz-bg-container>

        <wiz-bg-container
          id="wrapper2"
          v-goto="toSlide2"
          class="pa wrapper"
          component-name="Wrapper"
        >
          <wiz-image
            id="button2"
            class="pa button"
            :src="'./media/images/button-1.png'"
            component-name="Button image"
          ></wiz-image>
          <wiz-image
            id="graph2"
            class="pa graph"
            :src="'./media/images/graph.png'"
            component-name="Graph"
          ></wiz-image>
          <wiz-text
            id="popupButton2"
            class="pa button"
            :text="$t('item2')"
            component-name="Button text"
          ></wiz-text>
        </wiz-bg-container>

        <wiz-bg-container
          id="wrapper3"
          v-goto="toSlide3"
          class="pa wrapper"
          component-name="Wrapper"
        >
          <wiz-image
            id="button3"
            class="pa button"
            :src="'./media/images/button-2.png'"
            component-name="Button image"
          ></wiz-image>
          <wiz-image
            id="graph3"
            class="pa graph"
            :src="'./media/images/graph.png'"
            component-name="Graph"
          ></wiz-image>
          <wiz-text
            id="popupButton3"
            class="pa button"
            :text="$t('item3')"
            component-name="Button text"
          ></wiz-text>
        </wiz-bg-container>

        <wiz-bg-container
          id="wrapper4"
          v-goto="toSlide4"
          class="pa wrapper"
          component-name="Wrapper"
        >
          <wiz-image
            id="button4"
            class="pa button"
            :src="'./media/images/button-2.png'"
            component-name="Button image"
          ></wiz-image>
          <wiz-image
            id="graph4"
            class="pa graph"
            :src="'./media/images/graph.png'"
            component-name="Graph"
          ></wiz-image>
          <wiz-text
            id="popupButton4"
            class="pa button"
            :text="$t('item4')"
            component-name="Button text"
          ></wiz-text>
        </wiz-bg-container>

        <wiz-bg-container
          id="wrapper5"
          v-goto="toSlide5"
          class="pa wrapper"
          component-name="Wrapper"
        >
          <wiz-image
            id="button5"
            class="pa button"
            :src="'./media/images/button-2.png'"
            component-name="Button image"
          ></wiz-image>
          <wiz-image
            id="graph5"
            class="pa graph"
            :src="'./media/images/graph.png'"
            component-name="Graph"
          ></wiz-image>
          <wiz-text
            id="popupButton5"
            class="pa button"
            :text="$t('item5')"
            component-name="Button text"
          ></wiz-text>
        </wiz-bg-container>

        <wiz-bg-container
          id="wrapper6"
          v-goto="toSlide6"
          class="pa wrapper"
          component-name="Wrapper"
        >
          <wiz-image
            id="button6"
            class="pa button"
            :src="'./media/images/button-1.png'"
            component-name="Button image"
          ></wiz-image>
          <wiz-image
            id="graph6"
            class="pa graph"
            :src="'./media/images/graph.png'"
            component-name="Graph"
          ></wiz-image>
          <wiz-text
            id="popupButton6"
            class="pa button"
            :text="$t('item6')"
            component-name="Button text"
          ></wiz-text>
        </wiz-bg-container>
      </wiz-bg-grid-container>
      <wiz-bg-grid-container
        id="footnoteArea"
        class="footnote-area"
        :component-name="'Footnote area'"
      ></wiz-bg-grid-container>
    </wiz-bg-container>
  </wiz-slide>
</template>
<script>
export default {
	data() {
		return {
			toSlide1: {
				slide: 'vumerityEvolveMsStudyDesign1',
				chapter: 'studyDesign'
			},
			toSlide2: {
				slide: 'vumerityEvolveMsStudyDesign2',
				chapter: 'studyDesign'
			},
			toSlide3: {
				slide: 'vumerityEndorseStudyDesign',
				chapter: 'studyDesign'
			},
			toSlide4: {
				slide: 'vumerityDefineStudyDesign',
				chapter: 'studyDesign'
			},
			toSlide5: {
				slide: 'vumerityConfirmStudyDesign',
				chapter: 'studyDesign'
			},
			toSlide6: {
				slide: 'vumerityExperienceStudyDesign',
				chapter: 'studyDesign'
			},
			closeBtnNavigation: {
				slide: 'vumeritySafety',
				chapter: 'safety'
			},
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
.custom-popup #contentArea {
  transform: matrix(1, 0, 0, 1, 32, 140);
}

.chapter {
  top: 0;
  left: 0;
  font-size: 18px;
  font-family: 'Open Sans', sans-serif;
}

#chapter1 {
  transform: matrix(1, 0, 0, 1, 91, 11);
}

#chapter2 {
  transform: matrix(1, 0, 0, 1, 559, 11);
}

.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 251px;
  height: 47px;
}

#wrapper1 {
  transform: matrix(1, 0, 0, 1, 95, 102);
}

#wrapper2 {
  transform: matrix(1, 0, 0, 1, 95, 186);
}

#wrapper3 {
  transform: matrix(1, 0, 0, 1, 567, 271);
  /* transform: matrix(1, 0, 0, 1, 567, 102); */
}

#wrapper4 {
   transform: matrix(1, 0, 0, 1, 567, 102);
  /* transform: matrix(1, 0, 0, 1, 567, 186); */
}

#wrapper5 {
  transform: matrix(1, 0, 0, 1, 567, 186);
  /* transform: matrix(1, 0, 0, 1, 567, 271); */
}

#wrapper6 {
  transform: matrix(1, 0, 0, 1, 95, 271);
}

.custom-popup .button {
  position: absolute;
  top: 0;
  left: 0;
  width: 251px;
  height: 47px;
  transform: matrix(1, 0, 0, 1, 0, 0);
  text-align: center;
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 20px;
}

.custom-popup .button.wiz-text{
  height: fit-content;
  transform: matrix(1, 0, 0, 1, 0, 9);
}

.custom-popup .graph {
  top: 0;
  left: 0;
  width: 23px;
  height: 19px;
  font-size: 16px;
  transform: matrix(1, 0, 0, 1, 222, 5);
}

.custom-popup .button.wiz-bg-button {
  max-height: 45px;
}

.custom-popup .button.wiz-bg-button::v-deep .wiz-button {
  padding-right: 0;
}

.custom-popup .button.wiz-bg-button::v-deep .icon-wrapper {
  visibility: hidden;
  pointer-events: all;
}

.custom-popup .button::v-deep p span {
  color: #ffffff;
  font-size: 20px;
  font-family: 'Open Sans Condensed', sans-serif;
}
.wiz-slide .custom-popup #headline{
  transform: matrix(1, 0, 0, 1, -42, 58);
}

</style>
