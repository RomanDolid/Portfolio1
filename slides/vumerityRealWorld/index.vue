<i18n>
{
  "deu": {
    "headline": "<span style='color: #007fa3;'><b>HOW DOES VUMERITY COMPARE <br>TO OTHER DMTs </b></span><span style='color: #ce0058;'><b>IN THE REAL WORLD?</b></span>",
    "headlineNote": "<span style='color: #003865;'>...so that I can choose the right treatment for my patients<sup refs='ref63 ref70 ref65 ref15 ref66 ref67'>1-6</sup></span>",
    "caption1": "<span style='color: #003865;'><b>The efficacy of VUMERITY is demonstrated by TECFIDERA real-world <br>effectiveness data in patients with RRMS<sup refs='ref63 ref70 ref65 ref15 ref66 ref67'>1-6</sup></b></span>",
    "caption2": "<span style='color: #003865;'><b>Giving you the reassurance of real-world effectiveness of VUMERITY*</b></span>",
    "title1": "<span style='color: #003865;'><b>Time to first relapse <br>significantly reduced <br>compared with:</b></span>",
    "title2": "<span style='color: #003865;'><b>Similar effectiveness <br>relative to fingolimod <br>regarding:</b></span>",
    "list1Item1": "<ul><li><span class='color: #4c4d4f'>IFNs<sup refs='ref63 ref70'>1,2</sup></span></li><li><span class='color: #4c4d4f'>Glatiramer acetate<sup refs='ref63 ref70'></sup></span></li><li><span class='color: #4c4d4f'>Teriflunomide<sup refs='ref63 ref65'></sup></span></li></ul>",
    "list2Item1": "<ul><li><span class='color: #4c4d4f'>Relapses<sup refs='ref70 ref15'></sup><sup>**</sup></span></li><li><span class='color: #4c4d4f'>Disability progression<sup refs='ref15'></sup><sup>**</sup></span></li><li><span class='color: #4c4d4f'>Neuroperformance and MRI outcomes<sup refs='ref66 ref67'></sup></span></li></ul>",
    "note1": "<span class='color: #4c4d4f'>(p=0.0004)</span>",
    "note2": "<span class='color: #4c4d4f'>(p=0.0011)</span>",
    "note3": "<span class='color: #4c4d4f'>(p=0.0003)</span>",
    "hiddenRefs": "<sup refs='ref63 ref70 ref65 ref15 ref66 ref67 ref1 ref7 ref2'></sup>",
    "footnote1": "<span class='color: #4c4d4f'>* VUMERITY has bioequivalent exposure to monomethyl fumarate (MMF) as TECFIDERA at therapeutic doses (462 mg and 240 mg, respectively).<sup refs='ref1 ref7 ref2'></sup></span>",
    "footnote2": "<span class='color: #4c4d4f'>** A matched comparative analysis of 1922 patients showing that relapse rates did not differ and there was no difference in the hazard of 1-year confirmed disability worsening.<sup refs='ref15'></sup></span>",
    "footnote3": "<span class='color: #4c4d4f'><b style='color: #003865;'>DMT:</b> Disease Modifying Therapy; <b style='color: #003865;'>IFN:</b> Interferon; <b style='color: #003865;'>MRI:</b> Magnetic Resonance Imaging; <b style='color: #003865;'>RRMS:</b> Relapsing Remitting Multiple Sclerosis.</span>"

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
      <wiz-text
        id="headlineNote"
        class="headline-note"
        :text="$t('headlineNote')"
        component-name="Headline note"
      ></wiz-text>
      <wiz-image
        id="chapterBackgroundImage"
        class="chapter-background-image"
        src="../../common/media/images/chapter-background-images/chapter-background-1.png"
      ></wiz-image>
    </wiz-bg-grid-container>

    <wiz-bg-grid-container
      class="content-area"
      component-name="Content area"
    >
      <wiz-image
        id="icon"
        src="./media/images/icon.png"
        :component-name="'Icon'"
      ></wiz-image>
      <wiz-text
        id="caption1"
        class="caption"
        :text="$t('caption1')"
        component-name="Caption"
      ></wiz-text>

      <wiz-bg-container
        id="wrapper1"
        class="pa wrapper"
        :component-name="'Wrapper'"
      >
        <wiz-text
          id="title1"
          class="title"
          :text="$t('title1')"
          component-name="Title"
        ></wiz-text>
        <wiz-text
          id="list1"
          class="lists"
          component-name="List"
          :text="$t('list1Item1')"
        ></wiz-text>
        <wiz-text
          id="note1"
          class="note"
          component-name="Note"
          :text="$t('note1')"
        ></wiz-text>
        <wiz-text
          id="note2"
          class="note"
          component-name="Note"
          :text="$t('note2')"
        ></wiz-text>
        <wiz-text
          id="note3"
          class="note"
          component-name="Note"
          :text="$t('note3')"
        ></wiz-text>
      </wiz-bg-container>
      <wiz-bg-container
        id="wrapper2"
        class="wrapper"
        :component-name="'Wrapper'"
      >
        <wiz-text
          id="title2"
          class="title"
          :text="$t('title2')"
          component-name="Title"
        ></wiz-text>
        <wiz-text
          id="list2"
          class="lists"
          component-name="List"
          :text="$t('list2Item1')"
        ></wiz-text>
      </wiz-bg-container>

      <wiz-text
        id="caption2"
        class="caption"
        :text="$t('caption2')"
        component-name="Caption"
      ></wiz-text>
    </wiz-bg-grid-container>

    <wiz-bg-grid-container
      class="footnote-area"
      component-name="Footnote area"
    >
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
      <wiz-text
        id="footnote3"
        class="footnote"
        component-name="Footnote"
        :text="$t('footnote3')"
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
#icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 70px;
  height: 70px;
  transform: matrix(1, 0, 0, 1, 0, -10);
}
.caption {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 25px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 1.2;
  text-align: center;
}
#caption1 {
  transform: matrix(1, 0, 0, 1, 118, -5);
}
#caption2 {
  transform: matrix(1, 0, 0, 1, 110, 430);
}
#app .wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 279px;
  height: 299px;
  border-radius: 10px;
  background: #e5f2f6;
}
#wrapper1 {
  transform: matrix(1, 0, 0, 1, 157, 86);
}
#wrapper2 {
  transform: matrix(1, 0, 0, 1, 460, 86);
}
.title {
  position: absolute;
  top: 0;
  left: 0;
  color: #003865;
  font-size: 25px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 28px;
  text-align: center;
}
#title1 {
  transform: matrix(1, 0, 0, 1, 37, 26);
}
#title2 {
  transform: matrix(1, 0, 0, 1, 33, 26);
}
.lists {
  position: absolute;
  top: 0;
  left: 0;
  width: 619px;
  font-weight: 300;
  font-size: 20px;
  line-height: 1.2;
  transform: matrix(1, 0, 0, 1, 315, 85);
}
.lists::v-deep li:before {
  content: '';
  position: absolute;
  top: 11px;
  left: 0;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: #c61e4d;
}
.lists::v-deep li {
  position: relative;
  margin-bottom: 16px;
  padding-left: 12px;
}
#list1 {
  width: 210px;
  height: 147px;
  transform: matrix(1, 0, 0, 1, 21, 137);
}
#app #list1::v-deep li {
  margin-bottom: 25px;
}
#list2 {
  width: 232px;
  height: 127px;
  transform: matrix(1, 0, 0, 1, 21, 137);
}
#footnote1 {
  width: 670px;
  transform: matrix(1, 0, 0, 1, -25, 110);
}
#footnote2 {
  width: 800px;
  transform: matrix(1, 0, 0, 1, -25, 121);
}
#footnote3 {
  width: 900px;
  transform: matrix(1, 0, 0, 1, -25, 147);
}
.note {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 11px;
}
#note1 {
  transform: matrix(1, 0, 0, 1, 33, 163);
}
#note2 {
  transform: matrix(1, 0, 0, 1, 33, 213);
}
#note3 {
  transform: matrix(1, 0, 0, 1, 33, 261);
}
.wiz-slide #chapterBackgroundImage {
  width: 257px;
  height: 154px;
  transform: matrix(1, 0, 0, 1, 684, -10);
}
</style>
