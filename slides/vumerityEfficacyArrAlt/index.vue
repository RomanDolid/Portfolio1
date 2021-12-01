<i18n>
  {
  "deu": {
  "headline": "<span style='color: #007fa3;'><b>ICH BRAUCHE EINE BEHANDLUNG,<br><span style='color: #ce0058;'>DIE DIE RRMS UNTER KONTROLLE HÄLT<sup refs='ref5 ref4'></sup></span></b></span>",

  "value1": "<span style='color: #4c4d4f;'><b>80,4%</b></span>",
  "note1_1": "<span style='color: #4c4d4f;'>Reduktion der jährlichen<br>Schubrate in der Gesamtpopulation<br>in Woche 96<sup refs='ref5'></sup></span>",
  "note1_2": "<span style='color: #4c4d4f;'>n=1051; 95%-KI: 76,6-83,6; <i>p</i><0,0001<br><i>Adjustierte jährliche Schubrate:</i> 12 Monate vor Studienbeginn: <b>0,70</b>; VUMERITY<sup>™</sup>: <b>0,14</b></span>",
  "value2": "<span style='color: #4c4d4f;'><b>88,9%</b></span>",
  "note2_1": "<span style='color: #4c4d4f;'>Reduktion der jährlichen Schubrate<br>bei neudiagnostizierten Patienten<br>in Woche 96<sup refs='ref5'></sup></span>",
  "note2_2": "<span style='color: #4c4d4f;'>n=109; 95%-KI: 80,4-93,7; <i>p</i><0,0001<br><i>Adjustierte jährliche Schubrate:</i> 12 Monate vor Studienbeginn: <b>1,15</b>; VUMERITY<sup>™</sup>: <b>0,13</b></span>",
  "value3": "<span style='color: #4c4d4f;'><b>73,1%</b></span>",
  "note3_1": "<span style='color: #4c4d4f;'>Reduktion der jährlichen Schubrate<br>bei Patienten mit Wechsel von<br>IFN/GA in Woche 96<sup refs='ref5'></sup></span>",
  "note3_2": "<span style='color: #4c4d4f;'>n=338; 95%-KI: 64,0-79,9; <i>p</i><0,0001<br><i>Adjustierte jährliche Schubrate:</i> 12 Monate vor Studienbeginn: <b>0,55</b>; VUMERITY<sup>™</sup>: <b>0,15</b></span>",

  "tab1Caption": "<b>Gesamtpopulation</b>",
  "tab2Caption": "<b>Neudiagnostiziert</b>",
  "tab3Caption": "<b>Wechsel von IFN/GA</b>",
  "caption1_1": "<span style='color: #003865;'><b>EVOLVE MS-1: Signifikante Reduktion<br>der jährlichen Schubrate unter VUMERITY<sup>™</sup><br>über alle Studienpopulationen hinweg<sup>a,</sup><sup refs='ref5'></sup></b></span>",
  "caption2_1": "<span style='color: #003865;'><b>EVOLVE MS-1: Signifikante Reduktion<br>der jährlichen Schubrate unter VUMERITY<sup>™</sup><br>über alle Studienpopulationen hinweg<sup>a,</sup><sup refs='ref5'></sup></b></span>",
  "caption3_1": "<span style='color: #003865;'><b>EVOLVE MS-1: Signifikante Reduktion<br>der jährlichen Schubrate unter VUMERITY<sup>™</sup><br>über alle Studienpopulationen hinweg<sup>a,</sup><sup refs='ref5'></sup></b></span>",
  "paragraph1": "<span style='color: #4c4d4f;'>><b style='color: #003865;'> 8 von 10</b> Patienten<br>blieben über 2 Jahre<br>schubfrei<sup>b,</sup><sup refs='ref5'></sup></span>",
  "paragraph2": "<span style='color: #4c4d4f;'>Niedrige Schubraten:<br><b style='color: #003865;'>~1 Schub alle<br>7 Jahre<sup refs='ref5'></sup></b></span>",
  "footnote1": "<span style='color: #4c4d4f;'><b style='color: #003865;'>Neudiagnostiziert:</b> Diagnose einer RRMS innerhalb von 1 Jahr vor Studienbeginn und DMT-naiv. <b style='color: #003865;'>Wechsel von IFN/GA:</b> Erhielten Interferon oder Glatirameracetat (IFN/GA) als letzte DMT.<sup refs='ref5'></sup><br><b style='color: #003865;'>a</b> EVOLVE MS-1 war eine einarmige offene Studie, bei der die jährliche Schubrate ein explorativer Endpunkt war.<sup refs='ref4'></sup><br><b style='color: #003865;'>b</b> 81,6% der Gesamtpopulation; 84,5% der neudiagnostizierten Patienten und 81,7% der Patienten, die von IFN/GA wechselten.</span>",
  "footnote2": "<span style='color: #4c4d4f;'><b style='color: #003865;'>KI:</b> Konfidenzintervall; <b style='color: #003865;'>DMT:</b> Krankheitsmodifizierende Therapie; <b style='color: #003865;'>GA:</b> Glatirameracetat; <b style='color: #003865;'>IFN:</b> Interferon; <b style='color: #003865;'>MS:</b> Multiple Sklerose; <b style='color: #003865;'>RRMS:</b> Schubförmig remittierende Multiple Sklerose.</span>"
  }
  }
</i18n>

<template>
  <wiz-slide>
    <wiz-bg-grid-container
      id="headlineWrapper"
      class="headline-wrapper back-cont-bio pa"
      :component-name="'Headline & Subhead container'"
    >
      <wiz-text
        id="headline"
        class="headline"
        :text="$t('headline')"
        :component-name="'Headline'"
      ></wiz-text>
      <wiz-image
        class="chapter-background-image"
        src="../../common/media/images/chapter-background-images/chapter-background-1.png"
      ></wiz-image>
    </wiz-bg-grid-container>

    <wiz-bg-grid-container
      id="contentArea"
      class="content-area back-cont-bio"
      :component-name="'Content area'"
    >
      <wiz-bg-tab-group
        id="tabGroups"
        class="tab-groups"
        :items="tabItem"
        :component-name="'Tab group'"
      >
        <div slot="0">
          <wiz-image
            id="icon1_1"
            class="caption-icon"
            :src="'./media/images/caption-icon.png'"
            :component-name="'Icon'"
          ></wiz-image>
          <wiz-text
            id="caption1_1"
            class="tab-group-caption"
            :text="$t('caption1_1')"
            :component-name="'Caption'"
          ></wiz-text>

          <wiz-bg-container
            id="schemeWrapper1"
            class="scheme-wrapper"
            :component-name="'Wrapper'"
          >
            <wiz-image
              id="scheme1"
              class="scheme"
              :src="'./media/images/scheme-1.png'"
              :component-name="'Scheme'"
            ></wiz-image>
            <wiz-text
              id="value1"
              class="value"
              :text="$t('value1')"
              :component-name="'Value'"
            ></wiz-text>

            <wiz-text
              id="note1_1"
              class="scheme-note"
              :text="$t('note1_1')"
              :component-name="'Note'"
            ></wiz-text>
          </wiz-bg-container>
          <wiz-text
            id="note1_2"
            class="tab-note"
            :text="$t('note1_2')"
            user-label="Note"
          ></wiz-text>
        </div>
        <div slot="1">
          <wiz-image
            id="icon2_1"
            class="caption-icon"
            :src="'./media/images/caption-icon.png'"
            :component-name="'Icon'"
          ></wiz-image>
          <wiz-text
            id="caption2_1"
            class="tab-group-caption"
            :text="$t('caption2_1')"
            :component-name="'Caption'"
          ></wiz-text>

          <wiz-bg-container
            id="schemeWrapper2"
            v-goto="slidePopup"
            class="scheme-wrapper"
            :component-name="'Wrapper'"
          >
            <wiz-image
              id="scheme2"
              class="scheme"
              :src="'./media/images/scheme-2.png'"
              :component-name="'Scheme'"
            ></wiz-image>
            <wiz-text
              id="value2"
              class="value"
              :text="$t('value2')"
              :component-name="'Value'"
            ></wiz-text>
            <wiz-text
              id="note2_1"
              class="scheme-note"
              :text="$t('note2_1')"
              :component-name="'Icon'"
            ></wiz-text>
          </wiz-bg-container>
          <wiz-text
            id="note2_2"
            class="tab-note"
            :text="$t('note2_2')"
            user-label="Note"
          ></wiz-text>
        </div>
        <div slot="2">
          <wiz-image
            id="icon3_1"
            class="caption-icon"
            :src="'./media/images/caption-icon.png'"
            :component-name="'Icon'"
          ></wiz-image>
          <wiz-text
            id="caption3_1"
            class="tab-group-caption"
            :text="$t('caption3_1')"
            :component-name="'Caption'"
          ></wiz-text>

          <wiz-bg-container
            id="schemeWrapper3"
            v-goto="slidePopup"
            class="scheme-wrapper"
            :component-name="'Wrapper'"
          >
            <wiz-image
              id="scheme3"
              class="scheme"
              :src="'./media/images/scheme-3.png'"
              :component-name="'Scheme'"
            ></wiz-image>
            <wiz-text
              id="value3"
              class="value"
              :text="$t('value3')"
              :component-name="'Value'"
            ></wiz-text>
            <wiz-text
              id="note3_1"
              class="scheme-note"
              :text="$t('note3_1')"
              :component-name="'Value'"
            ></wiz-text>
          </wiz-bg-container>
          <wiz-text
            id="note3_2"
            class="tab-note"
            :text="$t('note3_2')"
            user-label="Note"
          ></wiz-text>
        </div>
      </wiz-bg-tab-group>

      <wiz-bg-container
        id="wrapper1"
        :component-name="'Wrapper'"
      >
        <wiz-image
          id="icon2"
          :src="'./media/images/icon-2.png'"
          :component-name="'Icon'"
        ></wiz-image>
        <wiz-text
          id="paragraph1"
          class="side-paragraph"
          :text="$t('paragraph1')"
          :component-name="'Paragraph'"
        ></wiz-text>
        <wiz-image
          id="icon3"
          :src="'./media/images/icon-3.png'"
          :component-name="'Icon'"
        ></wiz-image>
        <wiz-image
          id="icon4"
          :src="'./media/images/icon-4.png'"
          :component-name="'Icon'"
        ></wiz-image>
        <wiz-text
          id="paragraph2"
          class="side-paragraph"
          :text="$t('paragraph2')"
          :component-name="'Paragraph'"
        ></wiz-text>
      </wiz-bg-container>
    </wiz-bg-grid-container>
    <wiz-bg-grid-container
      id="footnoteArea"
      class="footnote-area"
      :component-name="'Footnote area'"
    >
      <wiz-text
        id="footnote1"
        class="footnote pa"
        :text="$t('footnote1')"
        :component-name="'Footnote'"
      ></wiz-text>
      <wiz-text
        id="footnote2"
        class="footnote pa"
        :text="$t('footnote2')"
        :component-name="'Footnote'"
      ></wiz-text>
    </wiz-bg-grid-container>
  </wiz-slide>
</template>
<script>
import wizBgTabGroup from '../../node_modules/wiz-bg-tab-group/index.vue';

export default {
  components: {
    wizBgTabGroup,
  },
  data() {
    return {
      slidePopup: {
        chapter: '',
        slide: '',
      },
      slidePopup2: {
        chapter: '',
        slide: '',
      },
      tabItem: [
        { name: this.$t('tab1Caption') },
        { name: this.$t('tab2Caption') },
        { name: this.$t('tab3Caption') },
      ],
    };
  },
};
</script>
<style scoped>
  .pa {
    position: absolute;
    top: 0;
    left: 0;
  }
  #app .chapter-background-image {
    left: 14px;
    width: 257px;
    height: 154px;
  }
  #contentArea {
    z-index: 2;
  }
  #app .caption-icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 51px;
    height: 51px;
    transform: matrix(1, 0, 0, 1, 16, 16);
  }
  .tab-group-caption {
    position: absolute;
    top: 0;
    left: 0;
    width: 490px;
    color: #003865;
    font-size: 25px;
    font-family: 'Open Sans Condensed', sans-serif;
    line-height: 30px;
    text-align: center;
    transform: matrix(1, 0, 0, 1, 68, 12);
  }

  #wrapper1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 253px;
    height: 462px;
    border-radius: 10px;
    background: #ebf3f6;
    transform: matrix(1, 0, 0, 1, 644, 2);
    cursor: pointer;
  }
  #barLine3_2::v-deep img,
  #icon1::v-deep img {
    position: absolute;
  }
  #icon1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 19px;
    transform: matrix(1, 0, 0, 1, 214, 15);
  }
  #icon2 {
    position: absolute;
    top: 0;
    left: 0;
    width: 237px;
    height: 48px;
    transform: matrix(1, 0, 0, 1, 8, 53);
  }
  #icon3 {
    position: absolute;
    top: 0;
    left: 0;
    width: 232px;
    height: 23px;
    transform: matrix(1, 0, 0, 1, 8, 215);
  }
  #icon4 {
    position: absolute;
    top: 0;
    left: 0;
    width: 224px;
    height: 139px;
    transform: matrix(1, 0, 0, 1, 15, 276);
  }
  .side-paragraph {
    position: absolute;
    top: 0;
    left: 0;
    width: 220px;
    height: 100px;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
  }
  #paragraph1 {
    transform: matrix(1, 0, 0, 1, 17, 109);
  }

  #icon2_2 {
    transform: matrix(1, 0, 0, 1, 382, 16);
  }
  .side-paragraph::v-deep b {
    color: #003865;
    font-weight: 800;
  }
  #paragraph2 {
    transform: matrix(1, 0, 0, 1, 17, 303);
  }
  #footnote1 {
    width: 810px;
    line-height: 1.3;
    transform: matrix(1, 0, 0, 1, -25, 97);
    font-size: 9px;
  }
  #footnote2 {
    line-height: 1.1;
    transform: matrix(1, 0, 0, 1, -25, 139);
    font-size: 9px;
  }
  .scheme-wrapper{
    position: absolute;
    top: 0;
    left: 0;
    width: 400px;
    height: 157px;
    border-top: 1px solid #7c878e;
    transform: matrix(1, 0, 0, 1, 105, 154);
  }
  .value{
    position: absolute;
    top: 0;
    left: 0;
    color: #003865;
    font-size: 85px;
    transform: matrix(1, 0, 0, 1, 133, -17);
  }
  .value b{
    font-weight: 800;
  }
  .nav-icon{
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 19px;
    transform: matrix(1, 0, 0, 1, 372, 16);
    cursor: pointer;
  }
  .scheme-note{
    position: absolute;
    top: 0;
    left: 0;
    width: 322px;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    transform: matrix(1, 0, 0, 1, 100, 93);
  }
  .scheme-note ::v-deep b{
    font-weight: 800;
  }
  .slide .scheme{
    position: absolute;
    top: 0;
    left: 0;
    width: 88px;
    height: 150px;
    transform: matrix(1, 0, 0, 1, 25, 0);
  }
  #app .scheme-wrapper{
    position: absolute;
    top: 0;
    left: 0;
    width: 400px;
    height: 157px;
    border-top: 1px solid #7c878e;
    transform: matrix(1, 0, 0, 1, 105, 154);
  }
  .value::v-deep b{
    color: #003865;
    font-weight: 800;
  }
  .nav-icon::v-deep img{
    position: absolute;
  }
  .tab-note{
    position: absolute;
    top: 0;
    left: 0;
    width: 566px;
    font-size: 14px;
    line-height: 16px;
    transform: matrix(1, 0, 0, 1, 9, 373);
  }
</style>
