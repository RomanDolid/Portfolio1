<i18n>
{
  "deu": {
    "headline": "<b style='color: #003865;'>VUMERITY-TREATED PATIENTS HAD A BRAIN VOLUME LOSS SIMILAR<br/>TO THAT OF HEALTHY ADULTS FOR UP TO 2 YEARS<sup>4*</sup></b>",
    "note1": "<span style='color: #4c4d4f;'>Estimated yearly <br>brain volume loss in <br>healthy adults<sup>4</sup></span>",
    "note2": "<span style='color: #4c4d4f;'>(–0.27 ±0.15%, <br>annually)</span>",
    "section1": "<span style='color: #4c4d4f;'>0.1</span>",
    "section2": "<span style='color: #4c4d4f;'>0.0</span>",
    "section3": "<span style='color: #4c4d4f;'>-0.1</span>",
    "section4": "<span style='color: #4c4d4f;'>-0.2</span>",
    "section5": "<span style='color: #4c4d4f;'>-0.3</span>",
    "section6": "<span style='color: #4c4d4f;'>-0.4</span>",
    "section7": "<span style='color: #4c4d4f;'>-0.5</span>",
    "nestLabel": "<span style='color: #4c4d4f;'><b style='color: #003865;'>Yearly PBVC in the EVOLVE MS-1 subgroup<sup>4</sup></b> <br>(n=365)</span>",
    "barLabel1": "<b style='color: #003865;'>Year 1</b>",
    "barLabel2": "<b style='color: #003865;'>Year 2</b>",
    "graphValue1": "<b style='color: #003865;'>-0.36</b>",
    "graphValue2": "<b style='color: #003865;'>-0.35</b>",
    "verticalLegend": "<span style='color: #4c4d4f;'>Mean yearly PBVC</span>",
    "footnote": "<span style='color: #4c4d4f;'><b style='color: #003865;'>MS:</b> Multiple Sclerosis; <b style='color: #003865;'>PBVC:</b> Percentage Brain Volume Change.</span>",
    "footnote2": "<span style='color: #4c4d4f;'>* Exploratory endpoint.</span>",
    "hiddenRefs": "<sup refs='ref30 ref54 ref8 ref9'></sup>"
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
        :component-name="'Close popup button'"
        class="popup-close"
      ></wiz-bg-close-popup-button>
      <wiz-bg-grid-container
        class="headline-wrapper"
        component-name="Headline &amp; Subhead container"
      >
        <wiz-text
          id="headline"
          class="pa headline-caption"
          :text="$t('headline')"
          component-name="Headline"
        ></wiz-text>
      </wiz-bg-grid-container>
      <wiz-bg-grid-container
        class="content-area"
        component-name="Content area"
      >
        <wiz-bg-container
          id="graphWrapper"
          class="pa"
          component-name="Graph container"
        >
          <wiz-bg-container
            id="block"
            class="pa"
            component-name="Block"
          >
            <wiz-text
              id="note1"
              :text="$t('note1')"
              class="pa note"
              component-name="Note"
            ></wiz-text>
            <wiz-text
              id="note2"
              :text="$t('note2')"
              class="pa note"
              component-name="Note"
            ></wiz-text>
          </wiz-bg-container>
          <wiz-image
            id="graphImage"
            src="./media/images/graph-image.png"
          ></wiz-image>
          <wiz-bg-container
            id="scaleWrapperY"
            class="pa"
            component-name="Scale container"
          >
            <wiz-text
              id="section1"
              :text="$t('section1')"
              class="pa scale-y-value"
              component-name="Scale"
            ></wiz-text>
            <wiz-text
              id="section2"
              :text="$t('section2')"
              class="pa scale-y-value"
              component-name="Scale"
            ></wiz-text>
            <wiz-text
              id="section3"
              :text="$t('section3')"
              class="pa scale-y-value"
              component-name="Scale"
            ></wiz-text>
            <wiz-text
              id="section4"
              :text="$t('section4')"
              class="pa scale-y-value"
              component-name="Scale"
            ></wiz-text>
            <wiz-text
              id="section5"
              :text="$t('section5')"
              class="pa scale-y-value"
              component-name="Scale"
            ></wiz-text>
            <wiz-text
              id="section6"
              :text="$t('section6')"
              class="pa scale-y-value"
              component-name="Scale"
            ></wiz-text>
            <wiz-text
              id="section7"
              :text="$t('section7')"
              class="pa scale-y-value"
              component-name="Scale"
            ></wiz-text>
          </wiz-bg-container>
          <wiz-text
            id="verticalLegend"
            class="pa"
            :text="$t('verticalLegend')"
            component-name="Vertical legend"
          ></wiz-text>
        </wiz-bg-container>
        <wiz-text
          id="nestLabel"
          :text="$t('nestLabel')"
          class="pa nest-label"
          component-name="Nest label"
        ></wiz-text>
        <wiz-text
          id="barLabel1"
          :text="$t('barLabel1')"
          class="pa bar-label"
          component-name="Bar label"
        ></wiz-text>
        <wiz-text
          id="barLabel2"
          :text="$t('barLabel2')"
          class="pa bar-label"
          component-name="Bar label"
        ></wiz-text>
        <wiz-text
          id="graphValue1"
          :text="$t('graphValue1')"
          class="pa bar-value"
          component-name="Bar value"
        ></wiz-text>
        <wiz-text
          id="graphValue2"
          :text="$t('graphValue2')"
          class="pa bar-value"
          component-name="Bar value"
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
          id="footnote"
          class="footnote"
          :text="$t('footnote')"
          component-name="Footnote"
        ></wiz-text>
        <wiz-text
          id="footnote2"
          class="footnote"
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
      slide: 'vumerityEfficacyArrAlt',
      common: {
        studyDesign: {
          actionType: 'navigation',
          disabled: false,
          goToSlide: {
            chapter: 'studyDesign',
            slide: 'vumerityStudyDesign1',
          },
        },
      },
    };
  },
};
</script>
<style scoped>
#headline{
  top: 0;
  left: 0;
  width: 740px;
  font-size: 25px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 30px;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 16, 81);
}

#graphWrapper{
  top: 0;
  left: 0;
  width: 900px;
  height: 490px;
  margin: 0;
  transform: matrix(1, 0, 0, 1, -22, 11);
}

#graphImage {
  width: 663px;
  height: 324px;
  transform: matrix(1, 0, 0, 1, 76, 64);
}

#block{
  top: 0;
  left: 0;
  width: 810px;
  height: 163px;
  background: #e5f2f6;
  transform: matrix(1, 0, 0, 1, 76, 181);
}

.note{
  top: 0;
  left: 0;
  font-weight: 300;
  font-size: 17px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 20px;
  text-align: center;
}

#note1{
  transform: matrix(1, 0, 0, 1, 680, 18);
}

#note2{
  transform: matrix(1, 0, 0, 1, 693, 101);
}

#scaleWrapperY{
  top: 0;
  left: 0;
  width: 31px;
  height: 358px;
  transform: matrix(1, 0, 0, 1, 42, 38);
}

.scale-y-value{
  width: 100%;
  font-size: 15px;
  font-family: 'Open Sans Condensed', sans-serif;
  text-align: right;
}

#section1{
  transform: matrix(1, 0, 0, 1, -2, 15);
}

#section2{
  transform: matrix(1, 0, 0, 1, -2, 70);
}
#section3{
  transform: matrix(1, 0, 0, 1, -2, 124);
}
#section4{
  transform: matrix(1, 0, 0, 1, -2, 179);
}
#section5{
  transform: matrix(1, 0, 0, 1, -2, 233);
}
#section6{
  transform: matrix(1, 0, 0, 1, -2, 287);
}
#section7{
  transform: matrix(1, 0, 0, 1, -2, 341);
}

#verticalLegend{
  font-weight: 300;
  font-size: 17px;
  font-family: 'Open Sans Condensed', sans-serif;
  transform: matrix(1, 0, 0, 1, -28, -109) rotate(-90deg);
}

#nestLabel{
  top: 0;
  left: 0;
  font-size: 15px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 18px;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 227, 56);
}

#nestLabel ::v-deep b{
  font-weight: 800;
  font-family: 'Open Sans', sans-serif;
}

.bar-label{
  width: 42px;
  font-size: 15px;
  font-family: 'Open Sans Condensed', sans-serif;
}

#barLabel1{
  transform: matrix(1, 0, 0, 1, 294, 102);
}

#barLabel2{
  transform: matrix(1, 0, 0, 1, 441, 102);
}

.bar-value{
  font-weight: 700;
  font-size: 20px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 24px;
}

#graphValue1{
  transform: matrix(1, 0, 0, 1, 292, 332);
}

#graphValue2{
  transform: matrix(1, 0, 0, 1, 439, 326);
}

#footnote{
  transform: matrix(1, 0, 0, 1, -68, 124);
}
#footnote2{
  transform: matrix(1, 0, 0, 1, -68, 110);
}

</style>
