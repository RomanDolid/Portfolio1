<i18n>
{
  "deu": {
    "headline": "<span style='color: #007fa3;'><b>DIE NÄCHSTE GENERATION EINER ETABLIERTEN<br>RRMS-THERAPIE</b></span> <span style='color: #ce0058;'><b>MIT VERBESSERTER<br>GASTROINTESTINALER VERTRÄGLICHKEIT<sup>a,1-4</sup></b></span>",
    "title": "<span class='color: #003865'><b>VUMERITY<sup>™</sup> und Tecfidera<sup>®</sup> sind bioäquivalent<sup>b,2-5</sup></b></span>",
    "description1": "<span style='color: #ffffff;'><b>TECFIDERA<sup>®</sup><br><span>(Dimethylfumarat)<sup>6</sup></span></b></span>",
    "description2": "<span style='color: #ffffff;'><b>Aktiver Metabolit<br><span>MMF<sup>5</sup></span></b></span>",
    "description3": "<span style='color: #ffffff;'>Methanol</span>",
    "description4": "<span style='color: #ffffff;'><b>VUMERITY<sup>™</sup><br><span>(Diroximelfumarat)<sup>5</sup></span></b></span>",
    "description5": "<span style='color: #ffffff;'><b>Aktiver Metabolit<br><span>MMF<sup>5</sup></span></b></span>",
    "description6": "<span style='color: #ffffff;'>Methanol</span>",
    "description7": "<span style='color: #ffffff;'>HES</span>",
    "description8": "<span style='color: #ffffff;'>RDC-8439</span>",
    "note1": "<span style='color: #4C4D4F;'>Esterase</span>",
    "note2": "<span style='color: #4C4D4F;'>100 %</span>",
    "note3": "<span style='color: #4C4D4F;'>Esterase</span>",
    "note4": "<span style='color: #4C4D4F;'>> 90 %</span>",
    "note5": "<span style='color: #4C4D4F;'>Esterase</span>",
    "note6": "<span style='color: #4C4D4F;'>< 10 %</span>",
    "caption": "<span style='color: #4c4d4f;'>VUMERITY<sup>™</sup> hat eine andere chemische Struktur als Tecfidera<sup>®</sup>, wird aber bei oraler Verab-<br>reichung rasch in den gleichen aktiven Metaboliten, Monomethylfumarat (MMF), umgewandelt.<sup>4</sup></span>",
    "paragraph1": "<span style='color: #4c4d4f;'>VUMERITY<sup>™</sup> und<br>Tecfidera<sup>®</sup> führen zu<br>einer bioäquivalenten<br>MMF-Exposition<sup>b,3,5</sup>; daher<br>sind <b>vergleichbare<br>Wirksamkeits- und<br>Sicherheitsprofile</b><br>zu erwarten.<sup>2</sup></span>",
    "paragraph2": "<span style='color: #4c4d4f;'>VUMERITY<sup>™</sup> hat eine<br>andersartige chemische<br>Struktur, von der man<br>annimmt, dass sie den<br><b>Magen-Darm-Trakt<br>weniger reizt</b> und damit<br>die gastrointestinale<br>Verträglichkeit verbessern<br>kann.<sup>2-4</sup></span>",
    "footnote1": "<span style='color: #4c4d4f;'>Darstellung modifiziert nach Palte MJ <i>et al.</i> Adv Ther. 2019; 36: 3154-3165</span>",
    "footnote2": "<span style='color: #4c4d4f;'><b style='color: #003865;'>a</b> Bei VUMERITY<sup>™</sup>-Patienten wurden weniger schwere gastrointestinale Ereignisse über eine kürzere Dauer an Tagen (Reduktion um 46%) beobachtet als bei Dimethylfumarat-<br>Patienten, was zu einer geringeren Rate an Therapieabbrüchen (0,8% vs. 4,8%) führte. Die adjustierte mittlere Anzahl der Tage mit gastrointestinalen Symptomen (IGISIS-Score<br>≥ 2) betrug 1,4 vs. 2,6 (adjustierte Rate Ratio 0,54 [95%-KI] 0,39 – 0,75; p = 0,0003).<sup>2</sup> | <b>b</b> VUMERITY<sup>™</sup> und Tecfidera<sup>®</sup>  (in therapeutischen Dosierungen von 462 mg bzw. 240 mg)<br>führen zu einer bioäquivalenten MMF-Exposition. | <b style='color: #003865;'>HES:</b> 2-Hydroxyethylsuccinimid; <b style='color: #003865;'>MMF:</b> Monomethylfumarat; <b style='color: #003865;'>RRMS:</b> Schubförmig remittierende Multiple Sklerose.</span>",
    "hiddenRefs": "<sup refs='ref2 ref3 ref4 ref6 ref1 ref11'>'></sup>"
  }
}
</i18n>

<template>
  <wiz-slide>
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
      <wiz-text
        id="title"
        :text="$t('title')"
        :component-name="'Title'"
      ></wiz-text>

      <wiz-bg-container
        id="schemeWrapper"
        :component-name="'Scheme wrapper'"
      >
        <wiz-image
          id="scheme1"
          src="./media/images/scheme1.png"
          :component-name="'Scheme'"
        ></wiz-image>
        <wiz-image
          id="scheme2"
          src="./media/images/scheme2.png"
          :component-name="'Scheme'"
        ></wiz-image>
        <wiz-image
          id="scheme3"
          src="./media/images/scheme3.png"
          :component-name="'Scheme'"
        ></wiz-image>
        <wiz-image
          id="scheme4"
          src="./media/images/scheme4.png"
          :component-name="'Scheme'"
        ></wiz-image>

        <wiz-image
          id="line"
          src="./media/images/line.png"
          :component-name="'Line'"
        ></wiz-image>

        <wiz-image
          id="arrow1"
          src="./media/images/arrow1.png"
          :component-name="'Arrow'"
        ></wiz-image>
        <wiz-image
          id="arrow2"
          src="./media/images/arrow2.png"
          :component-name="'Arrow'"
        ></wiz-image>
        <wiz-image
          id="arrow3"
          src="./media/images/arrow3.png"
          :component-name="'Arrow'"
        ></wiz-image>
        <wiz-image
          id="plus1"
          class="plus"
          src="./media/images/plus.png"
          :component-name="'Plus'"
        ></wiz-image>
        <wiz-image
          id="plus2"
          class="plus"
          src="./media/images/plus.png"
          :component-name="'Plus'"
        ></wiz-image>
        <wiz-image
          id="plus3"
          class="plus"
          src="./media/images/plus.png"
          :component-name="'Plus'"
        ></wiz-image>

        <wiz-text
          id="note1"
          class="note"
          :text="$t('note1')"
          :component-name="'Note'"
        ></wiz-text>
        <wiz-text
          id="note2"
          class="note"
          :text="$t('note2')"
          :component-name="'Note'"
        ></wiz-text>
        <wiz-text
          id="note3"
          class="note"
          :text="$t('note3')"
          :component-name="'Note'"
        ></wiz-text>
        <wiz-text
          id="note4"
          class="note"
          :text="$t('note4')"
          :component-name="'Note'"
        ></wiz-text>
        <wiz-text
          id="note5"
          class="note"
          :text="$t('note5')"
          :component-name="'Note'"
        ></wiz-text>
        <wiz-text
          id="note6"
          class="note"
          :text="$t('note6')"
          :component-name="'Note'"
        ></wiz-text>

        <wiz-bg-container
          id="block1"
          class="block"
          :component-name="'Block'"
        >
          <wiz-text
            id="description1"
            class="description"
            :text="$t('description1')"
            :component-name="'Description'"
          ></wiz-text>
        </wiz-bg-container>

        <wiz-bg-container
          id="block2"
          class="block"
          :component-name="'Block'"
        >
          <wiz-text
            id="description2"
            class="description"
            :text="$t('description2')"
            :component-name="'Description'"
          ></wiz-text>
        </wiz-bg-container>

        <wiz-bg-container
          id="block3"
          class="block"
          :component-name="'Block'"
        >
          <wiz-text
            id="description3"
            class="description"
            :text="$t('description3')"
            :component-name="'Description'"
          ></wiz-text>
        </wiz-bg-container>

        <wiz-bg-container
          id="block4"
          class="block"
          :component-name="'Block'"
        >
          <wiz-text
            id="description4"
            class="description"
            :text="$t('description4')"
            :component-name="'Description'"
          ></wiz-text>
        </wiz-bg-container>

        <wiz-bg-container
          id="block5"
          class="block"
          :component-name="'Block'"
        >
          <wiz-text
            id="description5"
            class="description"
            :text="$t('description5')"
            :component-name="'Description'"
          ></wiz-text>
        </wiz-bg-container>

        <wiz-bg-container
          id="block6"
          class="block"
          :component-name="'Block'"
        >
          <wiz-text
            id="description6"
            class="description"
            :text="$t('description6')"
            :component-name="'Description'"
          ></wiz-text>
        </wiz-bg-container>

        <wiz-bg-container
          id="block7"
          class="block"
          :component-name="'Block'"
        >
          <wiz-text
            id="description7"
            class="description"
            :text="$t('description7')"
            :component-name="'Description'"
          ></wiz-text>
        </wiz-bg-container>

        <wiz-bg-container
          id="block8"
          class="block"
          :component-name="'Block'"
        >
          <wiz-text
            id="description8"
            class="description"
            :text="$t('description8')"
            :component-name="'Description'"
          ></wiz-text>
        </wiz-bg-container>

        <wiz-text
          id="caption"
          :text="$t('caption')"
          :component-name="'Caption'"
        ></wiz-text>
      </wiz-bg-container>

      <wiz-bg-container
        id="wrapper1"
        v-goto="{ chapter: 'popups', slide: 'vumerityBioPopup' }"
        class="wrapper"
        :component-name="'Wrapper'"
      >
        <wiz-text
          id="paragraph1"
          class="paragraph"
          :text="$t('paragraph1')"
          :component-name="'Paragraph'"
        ></wiz-text>
        <wiz-image
          id="icon2"
          src="./media/images/icon2.png"
        ></wiz-image>
      </wiz-bg-container>
      <wiz-bg-container
        id="wrapper2"
        class="wrapper"
        :component-name="'Wrapper'"
      >
        <wiz-text
          id="paragraph2"
          class="paragraph"
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
        class="footnote"
        :text="$t('footnote1')"
        :component-name="'Footnote'"
      ></wiz-text>
      <wiz-text
        id="footnote2"
        class="footnote"
        :text="$t('footnote2')"
        :component-name="'Footnote'"
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
    return {};
  },
};
</script>

<style scoped>
#headlineWrapper .chapter-background-image {
  left: 14px;
  width: 257px;
  height: 154px;
}

#headline {
  transform: matrix(1, 0, 0, 1, 0, 11);
  z-index: 10;
}

#title {
  position: absolute;
  top: 0;
  left: 0;
  color: #003865;
  font-size: 25px;
  font-family: "Open Sans Condensed", sans-serif;
  transform: matrix(1, 0, 0, 1, 208, 9);
}

#schemeWrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 650px;
  height: 370px;
  transform: matrix(1, 0, 0, 1, 0, 132);
}

#scheme1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 101px;
  height: 48px;
  transform: matrix(1, 0, 0, 1, 27, 6);
}

#scheme2 {
  position: absolute;
  top: 0;
  left: 0;
  width: 94px;
  height: 48px;
  transform: matrix(1, 0, 0, 1, 327, 6);
}

#scheme3 {
  position: absolute;
  top: 0;
  left: 0;
  width: 152px;
  height: 57px;
  transform: matrix(1, 0, 0, 1, 2, 191);
}

#scheme4 {
  position: absolute;
  top: 0;
  left: 0;
  width: 94px;
  height: 48px;
  transform: matrix(1, 0, 0, 1, 326, 155);
}

#arrow1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 111px;
  height: 23px;
  transform: matrix(1, 0, 0, 1, 163, 72);
}

#arrow2 {
  position: absolute;
  top: 0;
  left: 0;
  width: 113px;
  height: 48px;
  transform: matrix(1, 0, 0, 1, 162, 222);
}

#arrow3 {
  position: absolute;
  top: 0;
  left: 0;
  width: 113px;
  height: 48px;
  transform: matrix(1, 0, 0, 1, 161, 283);
}

#arrow4 {
  position: absolute;
  top: 0;
  left: 0;
  width: 22px;
  height: 72px;
  transform: matrix(1, 0, 0, 1, 383, 233);
}

#icon1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 17px;
  height: 23px;
  transform: matrix(1, 0, 0, 1, 228, 6);
}

#icon2 {
  position: absolute;
  top: 0;
  left: 0;
  overflow: visible;
  width: 23px;
  height: 19px;
  transform: matrix(1, 0, 0, 1, 200, 6);
}

#icon3 {
  position: absolute;
  top: 0;
  left: 0;
  width: 44px;
  height: 38px;
  transform: matrix(1, 0, 0, 1, 152, -20);
}

#icon4 {
  position: absolute;
  top: 0;
  left: 0;
  width: 44px;
  height: 38px;
  transform: matrix(1, 0, 0, 1, 147, -19);
}

#icon5 {
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 31px;
  transform: matrix(1, 0, 0, 1, 231, -14);
}

#icon6 {
  position: absolute;
  top: 0;
  left: 0;
  width: 37px;
  height: 36px;
  transform: matrix(1, 0, 0, 1, 210, -11);
}

#icon7 {
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 31px;
  transform: matrix(1, 0, 0, 1, 219, -15);
}

.block {
  position: absolute;
  top: 0;
  left: 0;
  height: 47px;
  border-bottom-left-radius: 18px;
  border-top-right-radius: 18px;
}

#block1 {
  width: 156px;
  background: #751d66;
  transform: matrix(1, 0, 0, 1, 0, 60);
}

#block2 {
  width: 175px;
  background: #007fa3;
  transform: matrix(1, 0, 0, 1, 286, 60);
  border-top-right-radius: 0px;
  border-bottom-left-radius: 0px;
  border-top-left-radius: 18px;
  border-bottom-right-radius: 18px;
}

#block3 {
  width: 115px;
  background: #751d66;
  transform: matrix(1, 0, 0, 1, 529, 60);
}

#block4 {
  width: 155px;
  background: #003661;
  pointer-events: none;
  transform: matrix(1, 0, 0, 1, 0, 256);
}

#block5 {
  width: 175px;
  background: #007fa3;
  transform: matrix(1, 0, 0, 1, 286, 209);
  border-top-right-radius: 0px;
  border-bottom-left-radius: 0px;
  border-top-left-radius: 18px;
  border-bottom-right-radius: 18px;
}

#block6 {
  width: 174px;
  background: #003661;
  transform: matrix(1, 0, 0, 1, 286, 296);
}

#block7 {
  width: 115px;
  background: #003661;
  transform: matrix(1, 0, 0, 1, 529, 210);
}

#block8 {
  width: 115px;
  background: #003661;
  transform: matrix(1, 0, 0, 1, 529, 296);
}

.wiz-slide #line {
  position: absolute;
  top: 0;
  left: 0;
  width: 647px;
  height: 3px;
  transform: matrix(1, 0, 0, 1, -1, 130);
}

.wiz-slide .plus {
  position: absolute;
  top: 0;
  left: 0;
  width: 22px;
  height: 23px;
  transform: matrix(1, 0, 0, 1, 482, 74);
}

#plus2 {
  transform: matrix(1, 0, 0, 1, 482, 224);
}

#plus3 {
  transform: matrix(1, 0, 0, 1, 482, 309);
}

.description {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 20px;
  font-family: "Open Sans Condensed", sans-serif;
  line-height: 19px;
  text-align: center;
}

.description::v-deep span span {
  font-size: 15px;
}

#description1 {
  transform: matrix(1, 0, 0, 1, 21, 5);
}

#description2 {
  transform: matrix(1, 0, 0, 1, 18, 5);
}

#description3 {
  transform: matrix(1, 0, 0, 1, 26, 14);
}

#description4 {
  transform: matrix(1, 0, 0, 1, 19, 4);
}

#description5 {
  transform: matrix(1, 0, 0, 1, 18, 5);
}

#description6 {
  transform: matrix(1, 0, 0, 1, 56, 14);
}

#description7 {
  transform: matrix(1, 0, 0, 1, 45, 14);
}

#description8 {
  transform: matrix(1, 0, 0, 1, 26, 15);
}

.note {
  position: absolute;
  top: 0;
  left: 0;
  font: 15px/15px "Open Sans";
  transform: matrix(1, 0, 0, 1, 189, 61);
}

#note2 {
  transform: matrix(1, 0, 0, 1, 198, 90);
}

#note3 {
  transform: matrix(1, 0, 0, 1, 198, 211);
}

#note4 {
  transform: matrix(1, 0, 0, 1, 205, 240);
}

#note5 {
  transform: matrix(1, 0, 0, 1, 198, 299);
}

#note6 {
  transform: matrix(1, 0, 0, 1, 205, 327);
}

#caption {
  position: absolute;
  top: 0;
  left: 0;
  font-weight: 300;
  font-size: 15px;
  font-family: "Open Sans", sans-serif;
  line-height: 1.3;
  text-align: center;
  transform: matrix(1, 0, 0, 1, 2, -62);
}

.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 233px;
  border-radius: 10px;
  background: #e5f2f6;
}

#wrapper1 {
  height: 200px;
  transform: matrix(1, 0, 0, 1, 663, 74);
  cursor: pointer;
}

#wrapper2 {
  height: 197px;
  transform: matrix(1, 0, 0, 1, 663, 287);
}

.paragraph {
  position: absolute;
  top: 0;
  left: 0;
  font-weight: 300;
  font-size: 18px;
  font-family: "Open Sans", sans-serif;
  line-height: 1.2;
  text-align: center;
}

#paragraph1 {
  transform: matrix(1, 0, 0, 1, 13, 14);
}

#paragraph2 {
  transform: matrix(1, 0, 0, 1, 12, 5);
}

#footnote1 {
  transform: matrix(1, 0, 0, 1, -25, 95);
}

#footnote2 {
  transform: matrix(1, 0, 0, 1, -25, 113);
  width: 800px;
  line-height: 11px;
}

#popup {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 234px;
  height: 200px;
  cursor: pointer;
  transform: matrix(1, 0, 0, 1, 735, 266);
}
</style>
