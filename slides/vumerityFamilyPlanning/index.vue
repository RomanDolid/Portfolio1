<i18n>
{
  "deu": {
    "headline": "<span style='color: #007fa3;'><b>I NEED A TREATMENT THAT IS </b></span><span style='color: #ce0058;'><b>FLEXIBLE</b></span>",
    "headlineNote": "<span style='color: #003865;'>...allowing my patients to plan for a family<sup refs='ref21 ref1'></sup></span>",
    "title": "<span class='color: #003865'><b>VUMERITY supports your patients’ family planning needs</b></span>",
    "tab1": "<b>Before pregnancy</b>",
    "tab2": "<b>During pregnancy</b>",
    "tab3": "<b>After pregnancy</b>",
    "list1_li1": "<span style='color: #4c4d4f;'><ul><li>Stabilising the disease with an effective DMT before conceiving may reduce the risk of<br>postpartum relapse<sup>1</sup></li><li>No contraindication with oral contraceptives<sup>2*</sup>, no involvement of cytochrome P450, and no<br>data on the effects of VUMERITY on human fertility<sup>2</sup></li><li>Rapid elimination with no circulating MMF after 24h, so no washout period needed<sup>2,3</sup></li></ul></span>",
    "list2_li1": "<span style='color: #4c4d4f;'><ul><li>Use only during pregnancy if the potential benefit justifies the potential risk to the fetus<sup>2</sup></li><li>VUMERITY and TECFIDERA are currently the only oral DMTs not contraindicated during<br>pregnancy<sup>2-7</sup></li></ul></span>",
    "list3_li1": "<span style='color: #4c4d4f;'><ul><li>Reinitiating an effective DMT may be a priority after giving birth, to reduce risk of postpartum<br>relapse<sup>1</sup></li><li>It is unknown whether VUMERITY or its metabolites are excreted in human milk. The benefit<br>of breastfeeding for the child and the benefit of therapy for the woman should be taken into<br>account<sup>2</sup></li></ul></span>",
    "paragraph": "<span style='color: #4c4d4f;'>VUMERITY is not recommended during pregnancy, however it may be used if clearly needed and if the potential benefit justifies the potential risk to the foetus<sup>2</sup></span>",
    "footnote1": "<span style='color: #4c4d4f;'>* Norelgestromin and ethinyk estradiol.</span>",
    "footnote2": "<span style='color: #4c4d4f;'><b class='color: #003865'>DMT:</b> Disease Modifying Treatment; <b class='color: #003865'>MMF:</b> Monomethyl Fumarate.</span>",
    "hiddenRefs": "<span style='color: #4c4d4f;'><sup refs='ref1 ref21 ref38 ref39 ref40 ref41 ref42'></sup></span>"
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
        class="pa chapter-background-image"
        src="../../common/media/images/chapter-background-images/chapter-background-2.png"
      ></wiz-image>
    </wiz-bg-grid-container>
    <wiz-bg-grid-container
      class="content-area"
      component-name="Content area"
    >
      <wiz-text
        id="title"
        class="pa"
        component-name="Title"
        :text="$t('title')"
      ></wiz-text>
      <wiz-image
        id="icon1"
        class="pa icon"
        component-name="Icon"
        src="./media/images/icon1.png"
      ></wiz-image>
      <wiz-image
        id="icon2"
        class="pa icon"
        component-name="Icon"
        src="./media/images/icon2.png"
      ></wiz-image>
      <wiz-image
        id="icon3"
        class="pa icon"
        component-name="Icon"
        src="./media/images/icon3.png"
      ></wiz-image>
      <wiz-bg-tab-group
        id="tabGroups"
        class="pa tab-groups"
        :items="tabItem"
        component-name="Tab group"
      >
        <div slot="0">
          <wiz-text
            id="list1"
            class="list"
            component-name="List"
            :text="$t('list1_li1')"
          ></wiz-text>
          <wiz-image
            id="graph"
            v-goto="toSlide1"
            class="pa"
            component-name="Graph"
            src="./media/images/graph.png"
          ></wiz-image>
        </div>
        <div slot="1">
          <wiz-text
            id="list2"
            class="list"
            component-name="List"
            :text="$t('list2_li1')"
          ></wiz-text>
        </div>
        <div slot="2">
          <wiz-text
            id="list3"
            class="list"
            component-name="List"
            :text="$t('list3_li1')"
          ></wiz-text>
        </div>
      </wiz-bg-tab-group>
      <wiz-text
        id="paragraph"
        class="pa"
        :text="$t('paragraph')"
        component-name="Paragraph"
      ></wiz-text>
    </wiz-bg-grid-container>

    <wiz-bg-grid-container
      class="footnote-area"
      component-name="Footnote area"
    >
      <wiz-text
        id="hiddenRefs"
        class="pa hidden"
        :text="$t('hiddenRefs')"
        component-name="Hidden references"
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
import wizBgTabGroup from 'wiz-bg-tab-group';

export default {
  components: {
    wizBgTabGroup,
  },
  data() {
    return {
      tabItem: [
        { name: this.$t('tab1') },
        { name: this.$t('tab2') },
        { name: this.$t('tab3') },
      ],
      toSlide1: {
        slide: 'vumerityFamilyPlanningPopup',
        chapter: 'popups',
      },
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
.headline {
  transform: matrix(1, 0, 0, 1, 0, 55);
}
#title {
  top: 0;
  left: 0;
  color: #003865;
  font-size: 25px;
  font-family: 'Open Sans Condensed', sans-serif;
  line-height: 30px;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 171, 11);
}

.icon {
  top: 0;
  left: 0;
  z-index: 2;
  width: 94px;
  height: 94px;
}

#icon1 {
  transform: matrix(1, 0, 0, 1, 106, 87);
}

#icon2 {
  transform: matrix(1, 0, 0, 1, 402, 87);
}

#icon3 {
  transform: matrix(1, 0, 0, 1, 701, 87);
}

#tabGroups {
  top: 0;
  left: 0;
  width: 895px;
  height: 211px;
  transform: matrix(1, 0, 0, 1, -1, 173);
}

#tabGroups.tab-groups {
  flex-flow: column;
}

#tabGroups.tab-groups ::v-deep .tabs-content {
  border-top: none;
  border-bottom: 1px solid #bec6c4;
  border-radius: 0 0 10px 10px;
}

#tabGroups.tab-groups ::v-deep .tab-button:last-child {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 0;
}

#tabGroups.tab-groups ::v-deep .tab-button:first-child {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 0;
}

.list {
  position: absolute;
  top: 0;
  left: 0;
}

.list::v-deep li:before {
  content: '';
  position: absolute;
  left: 0;
  width: 4px;
  height: 4px;
  margin-top: 10px;
  border-radius: 50%;
  background: #c61e4d;
}

.list::v-deep li {
  padding-bottom: 19px;
  padding-left: 14px;
  font-weight: 300;
  font-size: 20px;
  line-height: 22px;
}

#list1 {
  transform: matrix(1, 0, 0, 1, 23, 56);
}

#graph {
  top: 0;
  left: 0;
  z-index: 2;
  width: 23px;
  height: 19px;
  transform: matrix(1, 0, 0, 1, 794, 181);
}

#graph::v-deep img{
  display: block;
}

#list2 {
  transform: matrix(1, 0, 0, 1, 23, 86);
}

#list3 {
  transform: matrix(1, 0, 0, 1, 23, 65);
}

#paragraph {
  top: 0;
  left: 0;
  width: 640px;
  font-size: 17px;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 128, 426);
}

#footnote1{
  transform: matrix(1, 0, 0, 1, -24, 126);
}

#footnote2{
  transform: matrix(1, 0, 0, 1, -25, 148);
}

</style>
