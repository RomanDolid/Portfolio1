<i18n>
  {
  "deu": {
  "headline": "<span style='color: #007fa3;'><b>CAN VUMERITY REDUCE THE DAMAGE<br><span style='color: #ce0058;'>THAT CAUSES RRMS SYMPTOMS?</span></b></span>",
  "headlineNote": "<span style='color: #003865;'>...allowing my patients to keep functioning with fewer interruptions<sup refs='ref30 ref54'></sup></span>",

  "value1": "<span style='color: #4c4d4f;'><b>61.5%</b></span>",
  "note1_1": "<span style='color: #4c4d4f;'>Reduction Gd+ lesions in the<br>overall population at week 96<sup refs='ref8'></sup></span>",
  "note1_2": "<span style='color: #4c4d4f;'>n=475; Mean Gd+ lesion count at baseline 1.3; at Week 96, 0.5; <i>P</i>&lt;0.0001</span>",
  "value2": "<span style='color: #4c4d4f;'><b>75%</b></span>",
  "note2_1": "<span style='color: #4c4d4f;'>Reduction Gd+ lesions in newly<br>diagnosed patients at week 96<sup refs='ref8'></sup></span>",
  "note2_2": "<span style='color: #4c4d4f;'>n=91; Mean Gd+ lesion count at baseline 2.0; at Week 96, 0.5; <i>P</i>=0.0126</span>",
  "value3": "<span style='color: #4c4d4f;'><b>66.7%</b></span>",
  "note3_1": "<span style='color: #4c4d4f;'>Reduction Gd+ lesions in<br>IFN/GA Switch patients at week 96<sup refs='ref8'></sup></span>",
  "note3_2": "<span style='color: #4c4d4f;'>n=134; Mean Gd+ lesion count at baseline 0.6; at Week 96, 0.2; <i>P</i>=0.0040</span>",

  "tab1Caption": "<b>Overall population</b>",
  "tab2Caption": "<b>Newly diagnosed</b>",
  "tab3Caption": "<b>IFN/GA Switch</b>",
  "caption1_1": "<span style='color: #003865;'><b>EVOLVE MS-1*: VUMERITY significantly<br>reduces the mean number of Gd+ lesions on<br>MRI, across different study populations<sup refs='ref8'></sup></b></span>",
  "caption2_1": "<span style='color: #003865;'><b>EVOLVE MS-1*: VUMERITY significantly<br>reduces the mean number of Gd+ lesions on<br>MRI, across different study populations<sup refs='ref8'></sup></b></span>",
  "caption3_1": "<span style='color: #003865;'><b>EVOLVE MS-1*: VUMERITY significantly<br>reduces the mean number of Gd+ lesions on<br>MRI, across different study populations<sup refs='ref8'></sup></b></span>",
  "paragraph1": "<span style='color: #4c4d4f;'><b style='color: #003865;'>Brain volume loss<br>similar to that of<br>healthy adults for up<br>to 2 years<sup refs='ref9'></sup></b></span>",
  "paragraph2": "<span style='color: #003865;'>Mean (SD) yearly brain volume loss was –0.36<br>(0.60) in Year 1 and –0.35 (0.55) in Year 2<sup refs='ref9'></sup></span>",
  "footnote1": "<span style='color: #4c4d4f;'>* EVOLVE MS-1 was a single arm open label study. Efficacy was measured by exploratory endpoints.<sup refs='ref8'></sup> <br><b style='color: #003865;'>Newly diagnosed:</b> Diagnosed with RRMS within 1 year of study entry and naïve to DMTs. <b style='color: #003865;'>IFN/GA Switch:</b> Received interferon or glatiramer acetate (IFN/GA) as their last DMT.<sup refs='ref8'></sup></span>",
  "footnote2": "<span style='color: #4c4d4f;'><b style='color: #003865;'>DMT:</b> Disease Modifying Therapy; <b style='color: #003865;'>GA:</b> Glatiramer Acetate; <b style='color: #003865;'>Gd+:</b> Gadolinium-Enhancing; <b style='color: #003865;'>IFN:</b> Interferon; <b style='color: #003865;'>MRI:</b> Magnetic Resonance Imaging; <b style='color: #003865;'>MS:</b> Multiple Sclerosis; <br><b style='color: #003865;'>RRMS:</b> Relapsing Remitting Multiple Sclerosis; <b style='color: #003865;'>SD:</b> Standard Deviation; <b style='color: #003865;'>SE:</b> Standard Error.</span>"
  }
  }
</i18n>

<template>
  <wiz-slide>
    <wiz-bg-grid-container
      id="headlineWrapper"
      class="headline-wrapper"
      :component-name="'Headline & Subhead container'"
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
        class="chapter-background-image"
        src="../../common/media/images/chapter-background-images/chapter-background-1.png"
      ></wiz-image>
    </wiz-bg-grid-container>

    <wiz-bg-grid-container
      id="contentArea"
      class="content-area"
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
            v-goto="slidePopup"
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
            <wiz-image
              id="icon1_2"
              class="nav-icon"
              :src="'./media/images/icon-1.png'"
              :component-name="'Icon'"
            ></wiz-image>
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
            <wiz-image
              id="icon2_2"
              class="nav-icon"
              :src="'./media/images/icon-1.png'"
              :component-name="'Icon'"
            ></wiz-image>
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
            <wiz-image
              id="icon3_2"
              class="nav-icon"
              :src="'./media/images/icon-1.png'"
              :component-name="'Value'"
            ></wiz-image>
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
        v-goto="slidePopup2"
        :component-name="'Wrapper'"
      >
        <wiz-image
          id="icon1"
          :src="'./media/images/icon-1.png'"
          :component-name="'Icon'"
        ></wiz-image>
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
        chapter: 'popups',
        slide: 'vumerityEfficacyMriPopup1',
      },
      slidePopup2: {
        chapter: 'popups',
        slide: 'vumerityEfficacyMriPopup2',
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
    line-height: 28px;
    text-align: center;
    transform: matrix(1, 0, 0, 1, 68, 0);
  }

  #wrapper1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 253px;
    height: 462px;
    border-radius: 10px;
    background: #ebf3f6;
    cursor: pointer;
    transform: matrix(1, 0, 0, 1, 644, 2);
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
    width: 101px;
    height: 101px;
    transform: matrix(1, 0, 0, 1, 76, 36);
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
    width: 230px;
    height: 100px;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
  }
  #paragraph1 {
    transform: matrix(1, 0, 0, 1, 12, 152);
  }
  .side-paragraph::v-deep b {
    color: #003865;
    font-weight: 800;
  }
  #paragraph2 {
    font-size: 15px;
    font-family: 'Open Sans Condensed', sans-serif;
    line-height: 19px;
    transform: matrix(1, 0, 0, 1, 12, 271);
  }
  #footnote1 {
    width: 810px;
    transform: matrix(1, 0, 0, 1, -25, 97);
  }
  #footnote2 {
    width: 810px;
    transform: matrix(1, 0, 0, 1, -25, 133);
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
    transform: matrix(1, 0, 0, 1, 122, -17);
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
    cursor: pointer;
    transform: matrix(1, 0, 0, 1, 372, 16);
  }
  .scheme-note{
    position: absolute;
    top: 0;
    left: 0;
    width: 338px;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    transform: matrix(1, 0, 0, 1, 85, 93);
  }
  .scheme-note ::v-deep b{
    font-weight: 800;
  }
  .scheme{
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
    width: 490px;
    font-size: 14px;
    line-height: 16px;
    transform: matrix(1, 0, 0, 1, 9, 389);
  }
  #schemeWrapper1{
    cursor: pointer;
  }

</style>
