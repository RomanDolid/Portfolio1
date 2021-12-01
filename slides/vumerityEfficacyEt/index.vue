<i18n>
{
  "deu": {
    "headline": "<span style='color: #007fa3;'><b><mark>I WANT TO TREAT EARLY</mark> USING AN EFFECTIVE<br>DMT WITH A QUICK ONSET OF ACTION</b></span>",
    "headlineNote": "<span style='color: #003865;'>...allowing my patients to keep exploring with fewer interruptions<sup refs='ref10 ref56'></sup></span>",
    "title": "<span style='color: #003865;'><b>A significant reduction in Gd+ lesions was demonstrated as early as<br/>7 weeks in patients who received either VUMERITY or TECFIDERA (p<0.01)<sup refs='ref10 ref56'></sup><sup>*</sup></b></span>",
    "graphTitle1": "<span style='color: #007fa3;'><b>% of patients free from Gd+ lesions<sup refs='ref10 ref56'></sup></b></span>",
    "graphTitle2": "<span style='color: #007fa3;'><b>Mean Gd+ lesion count<sup refs='ref56'></sup></b></span>",
    "scale1Caption": "<span style='color: #4c4d4f;'>Baseline</span>",
    "scale2Caption": "<span style='color: #4c4d4f;'>Baseline</span>",
    "graph1Value1": "<span style='color: #003865;'>69%</span>",
    "graph1Value2": "<span style='color: #003865;'>73%</span>",
    "graph1Value3": "<span style='color: #003865;'>96%</span>",
    "graph2Value1": "<span style='color: #003865;'>30% <br><span class='text-smaller'>reduction</span><br/><span style='color: #4c4d4f;'>p=0.0090</span>",
    "graph2Value2": "<span style='color: #003865;'>90% <br><span class='text-smaller'>reduction</span><br/><span style='color: #4c4d4f;'>p<0.0001</span>",
    "graph2ScaleItem1": "<span style='color: #4c4d4f;'>1.0</span>",
    "graph2ScaleItem2": "<span style='color: #4c4d4f;'>0.7</span>",
    "graph2ScaleItem3": "<span style='color: #4c4d4f;'>0.2</span>",
    "button1": "<span style='color: #4c4d4f;'><b>Baseline</b> <br>EVOLVE MS-2 <br><span class='text-small'><b>(TEC/VUM)</b></span></span>",
    "button2": "<span style='color: #4c4d4f;'><b>7 weeks</b> <br>EVOLVE MS-1 baseline <br><span class='text-small'><b>(VUM)</b></span></span>",
    "button3": "<span style='color: #4c4d4f;'><b>48 weeks</b> <br>EVOLVE MS-1 <br><span class='text-small'><b>(VUM)</b></span></span>",
    "note1": "<span style='color: #4c4d4f;'>n=291</span>",
    "note2": "<span style='color: #4c4d4f;'>n=292</span>",
    "note3": "<span style='color: #4c4d4f;'>n=82</span>",
    "note4": "<span style='color: #4c4d4f;'>n=314</span>",
    "footnote1": "<span style='color: #4c4d4f;'>* Patients included in EVOVLE MS-1 were either rolled over from EVOLVE MS-2, where they had received 5 weeks treatment with VUMERITY or TECFIDERA, or were newly enrolled in the EVOLVE trial program.<sup refs='ref57'></sup></span>",
    "footnote2": "<span style='color: #4c4d4f;'><b>Gd+:</b> Gadolinium-Enhancing; <b>MS:</b> Multiple Sclerosis; <b>TEC:</b> Tecfidera; <b>VUM:</b> Vumerity.</span>"
  }
}
</i18n>

<template>
  <wiz-slide>
    <!-- ========================== HEADER ========================== -->
    <wiz-bg-grid-container
      id="headlineWrapper"
      class="headline-wrapper"
      :component-name="'Headline &amp; Subhead container'"
    >
      <wiz-text
        id="headline"
        class="headline"
        :text="$t('headline')"
        :component-name="'Headline'"
      ></wiz-text>
      <wiz-text
        id="headlineNote"
        class="headline-note"
        :text="$t('headlineNote')"
        :component-name="'Headline note'"
      ></wiz-text>
      <wiz-image
        id="chapterImage"
        class="chapter-background-image"
        src="../../common/media/images/chapter-background-images/chapter-background-4.png"
        :component-name="'Headline logo'"
      ></wiz-image>
    </wiz-bg-grid-container>
    <!-- ========================== CONTENT AREA ========================== -->
    <wiz-bg-grid-container
      id="contentArea"
      class="content-area"
      :component-name="'Content area'"
      :class="{state1: isState1True, state2: isState2True, state3: isState3True}"
    >
      <wiz-image
        id="icon"
        class="pa icon"
        :src="'./media/images/icon.png'"
        :component-name="'Icon'"
      ></wiz-image>
      <wiz-text
        id="title"
        class="pa title"
        :text="$t('title')"
        :component-name="'Title'"
      ></wiz-text>
      <!-- ========================== WRAPPER 1 ========================== -->
      <wiz-container
        id="wrapper1"
        class="pa wrapper"
        :component-name="'Wrapper'"
      >
        <wiz-image
          id="gotoPopupIcon1"
          v-goto="{chapter: 'popups', slide: 'vumerityEfficacyEtPopup1'}"
          class="pa go-to-popup-icon cursor-pointer"
          :src="'./media/images/gotoPopupIcon1.png'"
          :component-name="'Icon'"
        ></wiz-image>
        <!-- ========================== WRAPPER 1: TITLE ========================== -->
        <wiz-text
          id="graphTitle1"
          class="pa graph-title"
          :text="$t('graphTitle1')"
          :component-name="'Title'"
        ></wiz-text>
        <!-- ========================== WRAPPER 1: SCALE ========================== -->
        <wiz-container
          id="scale1"
          class="pa scale"
          :component-name="'Scale'"
        ></wiz-container>
        <wiz-text
          id="scale1Caption"
          class="pa scale1-caption"
          :text="$t('scale1Caption')"
          :component-name="'Caption'"
        ></wiz-text>
        <!-- ========================== WRAPPER 1: PERCENTS ========================== -->
        <wiz-text
          id="graph1Value1"
          class="pa graph-value"
          :text="$t('graph1Value1')"
          :component-name="'Value'"
        ></wiz-text>
        <wiz-text
          id="graph1Value2"
          class="pa graph-value"
          :text="$t('graph1Value2')"
          :component-name="'Value'"
        ></wiz-text>
        <wiz-text
          id="graph1Value3"
          class="pa graph-value"
          :text="$t('graph1Value3')"
          :component-name="'Value'"
        ></wiz-text>
        <!-- ========================== WRAPPER 1: ARROWS ========================== -->
        <wiz-container
          id="barWrapper1"
          class="pa"
          :component-name="'Wrapper'"
        >
          <wiz-image
            id="graph1Bar"
            class="pa graph1-bar"
            :src="'./media/images/graph1bar.png'"
            :component-name="'Bar'"
          ></wiz-image>
          <wiz-container
            id="arrowWrapper"
            class="pa arrow-wrapper"
            :component-name="'Wrapper'"
          >
            <wiz-image
              id="graph1Arrow"
              class="pa"
              :src="'./media/images/graph1arrow.png'"
              :component-name="'Arrow'"
            ></wiz-image>
          </wiz-container>
        </wiz-container>
        <!-- ========================== WRAPPER 1: NOTES ========================== -->
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
        <wiz-text
          id="note3"
          class="pa note"
          :text="$t('note3')"
          :component-name="'Note'"
        ></wiz-text>
        <!-- ========================== WRAPPER 1: NAVIGATOR ========================== -->
        <wiz-container
          id="navigation1"
          v-goto="{chapter: 'popups', slide: 'vumerityEfficacyEtPopup1'}"
          class="pa navigation cursor-pointer"
          :component-name="'Navigation'"
        ></wiz-container>
      </wiz-container>
      <!-- ========================== WRAPPER 2 ========================== -->
      <wiz-container
        id="wrapper2"
        class="pa wrapper"
        :component-name="'Wrapper'"
      >
        <wiz-image
          id="gotoPopupIcon2 cursor-pointer"
          v-goto="{chapter: 'popups', slide: 'vumerityEfficacyEtPopup2'}"
          class="pa go-to-popup-icon"
          :src="'./media/images/gotoPopupIcon2.png'"
          :component-name="'Icon'"
        ></wiz-image>
        <!-- ========================== WRAPPER 2: TITLE ========================== -->
        <wiz-text
          id="graphTitle2"
          class="pa graph-title"
          :text="$t('graphTitle2')"
          :component-name="'Title'"
        ></wiz-text>
        <!-- ========================== WRAPPER 2: SCALE ========================== -->
        <wiz-container
          id="scale2"
          class="pa scale"
          :component-name="'Scale'"
        ></wiz-container>
        <wiz-text
          id="scale2Caption"
          class="pa scale2Caption"
          :text="$t('scale2Caption')"
          :component-name="'Caption'"
        ></wiz-text>
        <wiz-container
          id="graph2ScaleY"
          class="pa"
          :component-name="'Scale'"
        >
          <wiz-text
            id="graph2ScaleItem1"
            class="pa scale-item"
            :text="$t('graph2ScaleItem1')"
            :component-name="'Scale item'"
          ></wiz-text>
          <wiz-text
            id="graph2ScaleItem2"
            class="pa scale-item"
            :text="$t('graph2ScaleItem2')"
            :component-name="'Scale item'"
          ></wiz-text>
          <wiz-text
            id="graph2ScaleItem3"
            class="pa scale-item"
            :text="$t('graph2ScaleItem3')"
            :component-name="'Scale item'"
          ></wiz-text>
        </wiz-container>
        <!-- ========================== WRAPPER 2: GRAPH VALUES ========================== -->
        <wiz-text
          id="graph2Value1"
          class="pa graph-value"
          :text="$t('graph2Value1')"
          :component-name="'Value'"
        ></wiz-text>
        <wiz-text
          id="graph2Value2"
          class="pa graph-value"
          :text="$t('graph2Value2')"
          :component-name="'Value'"
        ></wiz-text>
        <!-- ========================== WRAPPER 2: ARROWS ========================== -->
        <wiz-container
          id="barWrapper2"
          class="pa"
          :component-name="'Wrapper'"
        >
          <wiz-image
            id="graph2Arrow"
            class="pa"
            :src="'./media/images/graph2arrow.png'"
            :component-name="'Arrow'"
          ></wiz-image>
        </wiz-container>
        <!-- ========================== WRAPPER 2: NOTE ========================== -->
        <wiz-text
          id="note4"
          class="pa note"
          :text="$t('note4')"
          :component-name="'Note'"
        ></wiz-text>
        <!-- ========================== WRAPPER 2: NAVIGATION ========================== -->
        <wiz-container
          id="navigation2"
          v-goto="{chapter: 'popups', slide: 'vumerityEfficacyEtPopup2'}"
          class="pa navigation cursor-pointer"
          :component-name="'Navigation'"
        ></wiz-container>
      </wiz-container>
      <!-- ========================== BUTTONS ========================== -->
      <wiz-container
        id="buttonWrapper"
        class="pa"
        :component-name="'Wrapper'"
      >
        <wiz-image
          id="line"
          class="pa"
          :src="'./media/images/line.png'"
          :component-name="'Line'"
        ></wiz-image>
        <wiz-container
          id="button1"
          class="pa state-button"
          :class="{active: isState1True}"
          :component-name="'Button'"
          @click.native="changeState1"
        >
          <wiz-text
            id="button1Text"
            class="pa"
            :text="$t('button1')"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="button2"
          class="pa state-button"
          :class="{active: isState2True}"
          :component-name="'Button'"
          @click.native="changeState2"
        >
          <wiz-text
            id="button2Text"
            class="pa"
            :text="$t('button2')"
          ></wiz-text>
        </wiz-container>
        <wiz-container
          id="button3"
          class="pa state-button"
          :class="{active: isState3True}"
          :component-name="'Button'"
          @click.native="changeState3"
        >
          <wiz-text
            id="button3Text"
            class="pa"
            :text="$t('button3')"
          ></wiz-text>
        </wiz-container>
      </wiz-container>
    </wiz-bg-grid-container>
    <!-- ========================== FOOTNOTES ========================== -->
    <wiz-bg-grid-container
      id="footnoteArea"
      class="pa footnote-area"
      :component-name="'Footnote area'"
    >
      <wiz-text
        id="footnote1"
        class="pa footnote"
        :text="$t('footnote1')"
        :component-name="'Footnote'"
      ></wiz-text>
      <wiz-text
        id="footnote2"
        class="pa footnote"
        :text="$t('footnote2')"
        :component-name="'Footnote'"
      ></wiz-text>
    </wiz-bg-grid-container>
  </wiz-slide>
</template>
<script>
export default {
  data() {
    return {
      isState1True: true,
      isState2True: false,
      isState3True: false,
      test: { chapter: 'popups', slide: 'vumerityEfficacyEtPopup1', animation: true },
    };
  },
  methods: {
    changeState1() {
      this.isState1True = true;
      this.isState2True = false;
      this.isState3True = false;
    },
    changeState2() {
      this.isState1True = false;
      this.isState2True = true;
      this.isState3True = false;
    },
    changeState3() {
      this.isState1True = false;
      this.isState2True = false;
      this.isState3True = true;
    },
  },
};
</script>
<style scoped>
  /* ======================= HEADER ===================== */
  #headline {
    z-index: 1;
  }

  /* ======================= CONTENT AREA ===================== */
  .title {
    width: 750px;
    height: 60px;
    font-size: 25px;
    font-family: 'Open Sans Condensed', sans-serif;
    line-height: 30px;
    text-align: center;
    transform: matrix(1, 0, 0, 1, 73, -4);
  }

  #contentArea {
    z-index: 1;
  }

  #icon {
    top: 0;
    left: 0;
    width: 67px;
    height: 67px;
    transform: matrix(1, 0, 0, 1, 0, -10);
  }

  /* ======================= WRAPPER 1 ===================== */
  .wrapper {
    width: 420px;
    height: 323px;
    border: 1px solid #bec6c4;
    border-radius: 10px;
  }

  #wrapper1 {
    transform: matrix(1, 0, 0, 1, 2, 86);
  }

  .go-to-popup-icon {
    overflow: visible;
    width: 23px;
    height: 19px;
    transform: matrix(1, 0, 0, 1, 386, 4) !important;
  }

  .graph-title {
    width: 100%;
    height: 30px;
    font-size: 20px;
    font-family: 'Open Sans Condensed', sans-serif;
    text-align: center;
    transform: matrix(1, 0, 0, 1, 0, 22);
  }

  /* ======================= WRAPPER 1: SCALE ===================== */
  .scale {
    width: 275px;
    height: 1px;
    background-color: #4c4d4f;
  }

  #scale1 {
    transform: matrix(1, 0, 0, 1, 78, 288);
  }

  #scale1Caption {
    width: 50px;
    height: 20px;
    font-weight: 300;
    font-size: 15px;
    font-family: 'Open Sans Condensed', sans-serif;
    transform: matrix(1, 0, 0, 1, 26, 277);
  }

  /* ======================= WRAPPER 1: PERCENTS ===================== */
  .graph-value {
    width: 150px;
    height: 60px;
    font-weight: 800;
    font-size: 50px;
    line-height: 1.2;
    opacity: 0;
    transition: all 300ms ease-in-out;
  }

  .graph-value ::v-deep .text-smaller {
    font-weight: 700;
    font-size: 20px;
    font-family: 'Open Sans Condensed', sans-serif;
  }

  .graph-value ::v-deep span:nth-of-type(2) {
    display: inline-block;
    margin-top: 0;
    font-weight: 400;
    font-size: 15px;
    font-family: 'Open Sans Condensed', sans-serif;
    line-height: 1;
    transform: matrix(1, 0, 0, 1, 0, -7);
  }

  #graph1Value1 {
    opacity: 1;
    transform: matrix(1, 0, 0, 1, 105, 215);
  }

  #contentArea.state1 #graph1Value2,
  #contentArea.state1 #graph1Value3 {
    transform: matrix(1, 0, 0, 1, 105, 215);
  }

  #contentArea.state2 #graph1Value1 ::v-deep span,
  #contentArea.state3 #graph1Value1 ::v-deep span {
    color: #bec6c4 !important;
  }

  #contentArea.state2 #graph1Value2 {
    opacity: 1;
    transform: matrix(1, 0, 0, 1, 105, 124);
  }

  #contentArea.state2 #graph1Value3 {
    transform: matrix(1, 0, 0, 1, 105, 124);
  }

  #contentArea.state3 #graph1Value2 {
    transform: matrix(1, 0, 0, 1, 105, 124);
  }

  #contentArea.state3 #graph1Value3 {
    opacity: 1;
    transform: matrix(1, 0, 0, 1, 105, 71);
  }

  /* ======================= WRAPPER 1: ARROWS ===================== */
  #barWrapper1 {
    overflow: hidden;
    width: 87px;
    height: 251px;
    transform: matrix(1, 0, 0, 1, 262, 37);
  }

  #arrowWrapper {
    overflow: hidden;
    width: 87px;
    height: 209px;
    transform: matrix(1, 0, 0, 1, 0, -1);
  }

  #graph1Bar {
    width: 50px;
    height: 44px;
    transform: matrix(1, 0, 0, 1, 17, 208);
  }

  #graph1Arrow {
    width: 84px;
    height: 211px;
    transition: transform 400ms ease-in-out;
    transform: matrix(1, 0, 0, 1, 0, 210);
  }

  #contentArea.state2 #graph1Arrow {
    transform: matrix(1, 0, 0, 1, 0, 93);
  }

  #contentArea.state3 #graph1Arrow {
    transform: matrix(1, 0, 0, 1, 0, 39);
  }

  /* ======================= WRAPPER 1: NOTES ===================== */

  .note {
    font-size: 14px;
    font-family: 'Open Sans Condensed', sans-serif;
  }

  #note1,
  #note2,
  #note3 {
    transform: matrix(1, 0, 0, 1, 380, 298);
  }

  #contentArea.state1 #note2,
  #contentArea.state1 #note3 {
    opacity: 0;
  }

  #contentArea.state2 #note1,
  #contentArea.state2 #note3 {
    opacity: 0;
  }

  #contentArea.state2 #note2 {
    transform: matrix(1, 0, 0, 1, 380, 298);
  }

  #contentArea.state3 #note1,
  #contentArea.state3 #note2 {
    opacity: 0;
  }

  #contentArea.state3 #note3 {
    transform: matrix(1, 0, 0, 1, 380, 298);
  }

  /* ======================= WRAPPER 1: NAVIGATION ===================== */
  .navigation {
    width: 100px;
    height: 68px;
  }

  #navigation1 {
    transform: matrix(1, 0, 0, 1, 350, -15);
  }

  /* ======================= WRAPPER 2 ===================== */
  #wrapper2 {
    transform: matrix(1, 0, 0, 1, 475, 87);
  }

  /* ======================= WRAPPER 2: SCALE ===================== */
  #scale2 {
    width: 300px;
    transform: matrix(1, 0, 0, 1, 30, 75);
  }

  #scale2Caption {
    width: 50px;
    height: 20px;
    font-weight: 300;
    font-size: 15px;
    font-family: 'Open Sans Condensed', sans-serif;
    transform: matrix(1, 0, 0, 1, 340, 65);
  }

  #graph2ScaleY {
    width: 22px;
    height: 220px;
    transform: matrix(1, 0, 0, 1, 7, 65);
  }

  .scale-item {
    width: 21px;
    height: 20px;
    font-weight: 300;
    font-size: 15px;
    font-family: 'Open Sans Condensed', sans-serif;
  }

  #graph2ScaleItem1 {
    transform: matrix(1, 0, 0, 1, 0, 0);
  }

  #graph2ScaleItem2 {
    transform: matrix(1, 0, 0, 1, 0, 82);
  }

  #graph2ScaleItem3 {
    transform: matrix(1, 0, 0, 1, 0, 194);
  }

  #graph2ScaleItem2,
  #graph2ScaleItem3 {
    display: none;
  }

  #contentArea.state2 #graph2ScaleItem2 {
    display: block;
  }

  #contentArea.state3 #graph2ScaleItem2,
  #contentArea.state3 #graph2ScaleItem3 {
    display: block;
  }

  #contentArea.state3 #graph2ScaleItem3 {
    transform: matrix(1, 0, 0, 1, 0, 194);
  }

  /* ======================= WRAPPER 2: GRAPH VALUES ===================== */
  #graph2Value1 {
    transform: matrix(1, 0, 0, 1, 175, 145);
  }

  #contentArea.state1 #graph2Value1,
  #contentArea.state1 #graph2Value2 {
    line-height: 17px;
    transform: matrix(1, 0, 0, 1, 175, 11);
  }

  #contentArea.state2 #graph2Value1 {
    line-height: 17px;
    opacity: 1;
    transform: matrix(1, 0, 0, 1, 175, 145);
  }

  #contentArea.state2 #graph2Value2 {
    line-height: 17px;
    transform: matrix(1, 0, 0, 1, 175, 146);
  }

  #contentArea.state3 #graph2Value1 {
    line-height: 17px;
    transform: matrix(1, 0, 0, 1, 175, 145);
  }

  #contentArea.state3 #graph2Value2 {
    line-height: 17px;
    opacity: 1;
    transform: matrix(1, 0, 0, 1, 175, 242);
  }

  /* ======================= WRAPPER 2: ARROWS ===================== */
  #barWrapper2 {
    overflow: hidden;
    width: 87px;
    height: 210px;
    transform: matrix(1, 0, 0, 1, 72, 76);
  }

  #graph2Arrow {
    width: 84px;
    height: 211px;
    transition: transform 400ms ease-in-out;
    transform: matrix(1, 0, 0, 1, 0, -211);
  }

  #contentArea.state2 #graph2Arrow {
    transform: matrix(1, 0, 0, 1, 0, -103);
  }

  #contentArea.state3 #graph2Arrow {
    transform: matrix(1, 0, 0, 1, 0, 0);
  }

  /* ======================= WRAPPER 2: NOTE ===================== */
  #contentArea.state1 #note4,
  #contentArea.state2 #note4,
  #contentArea.state3 #note4 {
    transform: matrix(1, 0, 0, 1, 380, 297);
  }

  /* ======================= WRAPPER 2: NAVIGATION ===================== */
  #navigation2 {
    transform: matrix(1, 0, 0, 1, 350, -15);
  }

  /* ======================= BUTTONS ===================== */
  #buttonWrapper {
    width: 910px;
    height: 80px;
    transform: matrix(1, 0, 0, 1, 0, 421);
  }

  #line {
    overflow: visible;
    width: 826px;
    height: 15px;
    transform: matrix(1, 0, 0, 1, 71, -5);
  }

  .state-button {
    width: 145px;
    height: 55px;
    border: 1px solid #bec6c4;
    border-radius: 10px;
    cursor: pointer;
  }

  .state-button .wiz-text {
    margin: 0 auto;
    font-weight: 300;
    font-size: 17px;
    font-family: 'Open Sans Condensed', sans-serif;
    line-height: 17px;
    text-align: center;
  }

  .state-button .wiz-text ::v-deep .text-small {
    font-size: 12px;
  }

  .state-button.active {
    background-color: #ce0058;
    box-shadow: inset 0 0 1px 0 #4c4d4f;
  }

  .state-button.active .wiz-text ::v-deep span {
    color: #fff !important;
  }

  #button1 {
    transform: matrix(1, 0, 0, 1, 0, 20);
  }

  #button2 {
    transform: matrix(1, 0, 0, 1, 160, 20);
  }

  #button3 {
    transform: matrix(1, 0, 0, 1, 752, 20);
  }

  #button1Text {
    transform: matrix(1, 0, 0, 1, 36, 3);
  }

  #button2Text {
    transform: matrix(1, 0, 0, 1, 11, 3);
  }

  #button3Text {
    transform: matrix(1, 0, 0, 1, 35, 3);
  }

  /* ======================= FOOTNOTES ===================== */
  .wiz-slide .footnote-area {
    width: 760px !important;
    height: 55px !important;
    transform: matrix(1, 0, 0, 1, 55, 709) !important;
  }

  #footnote1 {
    transform: matrix(1, 0, 0, 1, 2, 1);
  }

  #footnote1 ::v-deep b {
    font-weight: 800;
  }

  #footnote2 {
    transform: matrix(1, 0, 0, 1, 2, 40);
  }
</style>
