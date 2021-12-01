<i18n>
{
  "deu": {
    "headline": "<span style='color: #007fa3;'><b>ICH BRAUCHE EINE ORALE BEHANDLUNG</b></span><br/><span style='color: #ce0058;'><b>MIT KLAREN MONITORING-EMPFEHLUNGEN<sup refs='ref1'>1</sup></b></span>",
    "title1": "<span style='color: #007fa3;'><b>Anfangsdosis<sup>a</sup></b></span>",
    "title2": "<span style='color: #003865;'><b>Erhaltungsdosis</b></span>",
    "title3": "<span style='color: #007fa3;'><b>Monitoring vor Therapiebeginn<sup>1</sup></b></span>",
    "title4": "<span style='color: #003865;'><b>Monitoring während der Therapie<sup>1</sup></b></span>",
    "description1": "<span class='color: #4c4d4f'>231 mg 2×/Tag, oral,<br><b>mit oder ohne<br>Mahlzeit<sup>b,1</sup></b></span>",
    "description2": "<span class='color: #4c4d4f'>462 mg 2×/Tag, oral,<br><b>mit oder ohne<br>Mahlzeit<sup>b,1</sup></b></span>",
    "caption": "<span class='color: #4c4d4f'>Tage</span>",
    "list1_li1": "<span class='color: #4c4d4f'>Großes Blutbild, einschließlich Lymphozyten</span>",
    "list1_li2": "<span class='color: #4c4d4f'>Leberwerte (Aminotransferasen,<br>z.B. ALT, AST, und Gesamtbilirubin)</span>",
    "list1_li3": "<span class='color: #4c4d4f'>Nierenfunktion (Kreatinin, Blut-Harnstoff-<br>Stickstoff, Urinanalyse)</span>",
    "list1_li4": "<span class='color: #4c4d4f'>MRT (in den letzten 3 Monaten)</span>",
    "list2_li1": "<span class='color: #4c4d4f'>Großes Blutbild, einschließlich Lymphozyten,<br>alle 3 Monate<sup>c</sup></span>",
    "list2_li2": "<span class='color: #4c4d4f'>Leberwerte, wenn klinisch indiziert</span>",
    "list2_li3": "<span class='color: #4c4d4f'>Nierenfunktion, nach 3 und 6 Monaten, danach<br>alle 6-12 Monate und wenn klinisch indiziert</span>",
    "list2_li4": "<span class='color: #4c4d4f'>MRT, wenn klinisch indiziert</span>",
    "num1": "<span style='color: #ffffff;'><b>1</b></span>",
    "num2": "<span style='color: #ffffff;'><b>2</b></span>",
    "num3": "<span style='color: #ffffff;'><b>3</b></span>",
    "num4": "<span style='color: #ffffff;'><b>4</b></span>",
    "num5": "<span style='color: #ffffff;'><b>5</b></span>",
    "num6": "<span style='color: #ffffff;'><b>6</b></span>",
    "num7": "<span style='color: #ffffff;'><b>7</b></span>",
    "num8": "<span style='color: #ffffff;'><b>8</b></span>",
    "footnote1": "<span class='color: #4c4d4f'><b style='color: #003865;'>a</b> VUMERITY™ darf nicht bei Patienten mit schwerer Lymphopenie (Lymphozytenzahl < 0,5 × 10<sup>9</sup>/l) angewendet werden.<sup>1</sup></span>",
    "footnote2": "<span class='color: #4c4d4f'><b style='color: #003865;'>b</b> VUMERITY™ muss im Ganzen und unzerteilt geschluckt werden. Die Kapseln dürfen nicht zerdrückt oder zerkaut werden und der Inhalt darf nicht auf Nahrung gestreut werden.<sup>1</sup></span>",
    "footnote3": "<span class='color: #4c4d4f'><b style='color: #003865;'>c</b> VUMERITY™ sollte bei Patienten mit anhaltender schwerer Lymphopenie (Lymphozytenzahl < 0,5 × 10<sup>9</sup>/l), die mehr als 6 Monate andauert, abgesetzt werden.<sup>1</sup></span>",
    "footnote4": "<span class='color: #4c4d4f'><b style='color: #003865;'>ALT:</b> Alanin-Aminotransferase; <b style='color: #003865;'>AST:</b> Aspartat-Aminotransferase.</span>"
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
        id="chapterImage"
        class="chapter-background-image"
        src="../../common/media/images/chapter-background-images/chapter-background-1.png"
      ></wiz-image>
    </wiz-bg-grid-container>

    <wiz-bg-grid-container
      class="content-area"
      component-name="Content area"
    >
      <wiz-bg-container
        id="wrapper1"
        class="wrapper"
        :component-name="'Wrapper'"
      >
        <wiz-image
          id="icon1"
          class="icon"
          src="./media/images/icon1.png"
          :component-name="'Icon'"
        ></wiz-image>
        <wiz-text
          id="title1"
          class="title"
          :text="$t('title1')"
          component-name="Title"
        ></wiz-text>
        <wiz-text
          id="description1"
          class="description"
          :text="$t('description1')"
          component-name="Description"
        ></wiz-text>
      </wiz-bg-container>
      <wiz-bg-container
        id="wrapper2"
        class="wrapper"
        :component-name="'Wrapper'"
      >
        <wiz-image
          id="icon2"
          class="icon"
          src="./media/images/icon2.png"
          :component-name="'Icon'"
        ></wiz-image>
        <wiz-text
          id="title2"
          class="title"
          :text="$t('title2')"
          component-name="Title"
        ></wiz-text>
        <wiz-text
          id="description2"
          class="description"
          :text="$t('description2')"
          component-name="Description"
        ></wiz-text>
      </wiz-bg-container>

      <wiz-bg-container
        id="wrapper3"
        :component-name="'Wrapper'"
      >
        <wiz-image
          id="icon3"
          src="./media/images/icon3.png"
          :component-name="'Icon'"
        ></wiz-image>
        <wiz-text
          id="caption"
          :text="$t('caption')"
          component-name="Caption"
        ></wiz-text>
        <wiz-text
          id="num1"
          class="num"
          :text="$t('num1')"
          component-name="Number"
        ></wiz-text>
        <wiz-text
          id="num2"
          class="num"
          :text="$t('num2')"
          component-name="Number"
        ></wiz-text>
        <wiz-text
          id="num3"
          class="num"
          :text="$t('num3')"
          component-name="Number"
        ></wiz-text>
        <wiz-text
          id="num4"
          class="num"
          :text="$t('num4')"
          component-name="Number"
        ></wiz-text>
        <wiz-text
          id="num5"
          class="num"
          :text="$t('num5')"
          component-name="Number"
        ></wiz-text>
        <wiz-text
          id="num6"
          class="num"
          :text="$t('num6')"
          component-name="Number"
        ></wiz-text>
        <wiz-text
          id="num7"
          class="num"
          :text="$t('num7')"
          component-name="Number"
        ></wiz-text>
        <wiz-text
          id="num8"
          class="num"
          :text="$t('num8')"
          component-name="Number"
        ></wiz-text>
      </wiz-bg-container>

      <wiz-bg-container
        id="wrapper4"
        class="wrapper"
        :component-name="'Wrapper'"
      >
        <wiz-text
          id="title3"
          class="title"
          :text="$t('title3')"
          component-name="Title"
        ></wiz-text>
        <wiz-bg-container
          id="textWrapper1"
          class="text-wrapper"
          :component-name="'Wrapper'"
        >
          <wiz-image
            id="textIcon1"
            class="text-icon"
            src="./media/images/icon4.png"
            :component-name="'Icon'"
          ></wiz-image>
          <wiz-text
            id="iconText1"
            class="icon-text"
            :text="$t('list1_li1')"
            component-name="Text"
          ></wiz-text>
        </wiz-bg-container>
        <wiz-bg-container
          id="textWrapper2"
          class="text-wrapper"
          :component-name="'Wrapper'"
        >
          <wiz-image
            id="textIcon2"
            class="text-icon"
            src="./media/images/icon5.png"
            :component-name="'Icon'"
          ></wiz-image>
          <wiz-text
            id="iconText2"
            class="icon-text"
            :text="$t('list1_li2')"
            component-name="Text"
          ></wiz-text>
        </wiz-bg-container>
        <wiz-bg-container
          id="textWrapper5"
          class="text-wrapper"
          :component-name="'Wrapper'"
        >
          <wiz-image
            id="textIcon5"
            class="text-icon"
            src="./media/images/icon6.png"
            :component-name="'Icon'"
          ></wiz-image>
          <wiz-text
            id="iconText5"
            class="icon-text"
            :text="$t('list1_li3')"
            component-name="Text"
          ></wiz-text>
        </wiz-bg-container>
        <wiz-bg-container
          id="textWrapper6"
          class="text-wrapper"
          :component-name="'Wrapper'"
        >
          <wiz-image
            id="textIcon6"
            class="text-icon"
            src="./media/images/icon7.png"
            :component-name="'Icon'"
          ></wiz-image>
          <wiz-text
            id="iconText6"
            class="icon-text"
            :text="$t('list1_li4')"
            component-name="Text"
          ></wiz-text>
        </wiz-bg-container>
      </wiz-bg-container>
      <wiz-bg-container
        id="wrapper5"
        class="wrapper"
        :component-name="'Wrapper'"
      >
        <wiz-text
          id="title4"
          class="title"
          :text="$t('title4')"
          component-name="Title"
        ></wiz-text>
        <wiz-bg-container
          id="textWrapper3"
          class="text-wrapper"
          :component-name="'Wrapper'"
        >
          <wiz-image
            id="textIcon3"
            class="text-icon"
            src="./media/images/icon4.png"
            :component-name="'Icon'"
          ></wiz-image>
          <wiz-text
            id="iconText3"
            class="icon-text"
            :text="$t('list2_li1')"
            component-name="Text"
          ></wiz-text>
        </wiz-bg-container>
        <wiz-bg-container
          id="textWrapper4"
          class="text-wrapper"
          :component-name="'Wrapper'"
        >
          <wiz-image
            id="textIcon4"
            class="text-icon"
            src="./media/images/icon5.png"
            :component-name="'Icon'"
          ></wiz-image>
          <wiz-text
            id="iconText4"
            class="icon-text"
            :text="$t('list2_li2')"
            component-name="Text"
          ></wiz-text>
        </wiz-bg-container>
        <wiz-bg-container
          id="textWrapper7"
          class="text-wrapper"
          :component-name="'Wrapper'"
        >
          <wiz-image
            id="textIcon7"
            class="text-icon"
            src="./media/images/icon6.png"
            :component-name="'Icon'"
          ></wiz-image>
          <wiz-text
            id="iconText7"
            class="icon-text"
            :text="$t('list2_li3')"
            component-name="Text"
          ></wiz-text>
        </wiz-bg-container>
        <wiz-bg-container
          id="textWrapper8"
          class="text-wrapper"
          :component-name="'Wrapper'"
        >
          <wiz-image
            id="textIcon8"
            class="text-icon"
            src="./media/images/icon7.png"
            :component-name="'Icon'"
          ></wiz-image>
          <wiz-text
            id="iconText8"
            class="icon-text"
            :text="$t('list2_li4')"
            component-name="Text"
          ></wiz-text>
        </wiz-bg-container>
      </wiz-bg-container>
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
      <wiz-text
        id="footnote4"
        class="footnote"
        component-name="Footnote"
        :text="$t('footnote4')"
      ></wiz-text>
    </wiz-bg-grid-container>
  </wiz-slide>
</template>

<script>
export default {
	data() {
		return {};
	}
};
</script>

<style scoped>
#chapterImage.chapter-background-image {
  left: 14px;
  width: 257px;
  height: 154px;
}

#headline {
  transform: matrix(1, 0, 0, 1, -1, 48);
  z-index: 1;
}

.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 434px;
  height: 150px;
  border-right: 1px solid #bec6c4;
}
.content-area .icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 143px;
  height: 79px;
}
.description {
  position: absolute;
  top: 0;
  left: 0;
  font-weight: 300;
  font-size: 18px;
  font-family: "Open Sans", sans-serif;
  line-height: 22px;
}
.caption {
  position: absolute;
  top: 0;
  left: 0;
  font-weight: 300;
  font-size: 18px;
  font-family: "Open Sans", sans-serif;
  line-height: 22px;
}
.title {
  position: absolute;
  top: 0;
  left: 0;
  color: #003865;
  font-size: 22px;
  font-family: "Open Sans Condensed", sans-serif;
  line-height: 27px;
}
#description1 {
  transform: matrix(1, 0, 0, 1, 171, 50);
}
#description2 {
  transform: matrix(1, 0, 0, 1, 182, 50);
}

#title1 {
  color: #007fa3;
  transform: matrix(1, 0, 0, 1, 121, 0);
}
#title2 {
  transform: matrix(1, 0, 0, 1, 123, 0);
}
#title3 {
  color: #007fa3;
  transform: matrix(1, 0, 0, 1, -3, -5);
}
#title4 {
  transform: matrix(1, 0, 0, 1, 0, -46);
}
#icon1 {
  transform: matrix(1, 0, 0, 1, 15, 44);
}
#icon2 {
  transform: matrix(1, 0, 0, 1, 25, 44);
}

/* wrapper 1 */

#wrapper1 {
  transform: matrix(1, 0, 0, 1, 38, -4);
}

/* wrapper 2 */

#wrapper2 {
  transform: matrix(1, 0, 0, 1, 466, -4);
  border-right: none;
}

/* wrapper 3 */

#wrapper3 {
  position: absolute;
  top: 0;
  left: 0;
  width: 900px;
  height: 85px;
  transform: matrix(1, 0, 0, 1, -1, 141);
}

#caption {
  position: absolute;
  top: 0;
  left: 0;
  font-weight: 300;
  font-size: 18px;
  font-family: "Open Sans", sans-serif;
  line-height: 22px;
  transform: matrix(1, 0, 0, 1, 0, 30);
}

#icon3 {
  position: absolute;
  top: 0;
  left: 0;
  width: 844px;
  height: 71px;
  transform: matrix(1, 0, 0, 1, 53, 5);
}

.num {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 20px;
  font-family: "Open Sans Condensed", sans-serif;
  line-height: 1.2;
}

#num1 {
  transform: matrix(1, 0, 0, 1, 76, 29);
}

#num2 {
  transform: matrix(1, 0, 0, 1, 134, 29);
}

#num3 {
  transform: matrix(1, 0, 0, 1, 192, 29);
}

#num4 {
  transform: matrix(1, 0, 0, 1, 250, 29);
}

#num5 {
  transform: matrix(1, 0, 0, 1, 308, 29);
}

#num6 {
  transform: matrix(1, 0, 0, 1, 366, 29);
}

#num7 {
  transform: matrix(1, 0, 0, 1, 424, 29);
}

#num8 {
  transform: matrix(1, 0, 0, 1, 514, 29);
}

/* wrapper 4 */

#wrapper4 {
  height: 223px;
  transform: matrix(1, 0, 0, 1, 55, 250);
  width: 417px;
}
.text-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 380px;
  height: 42px;
}
.wiz-slide .text-icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 38px;
  height: 38px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
.icon-text {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 16px;
  line-height: 1.2;
  transform: matrix(1, 0, 0, 1, 50, 11);
}
#textWrapper1 {
  transform: matrix(1, 0, 0, 1, -3, 35);
}
#textWrapper2 {
  transform: matrix(1, 0, 0, 1, -3, 86);
}
#textWrapper5 {
  transform: matrix(1, 0, 0, 1, -3, 137);
}
#textWrapper6 {
  transform: matrix(1, 0, 0, 1, -3, 187);
}
#iconText2,
#iconText5,
#iconText7,
#iconText3 {
  transform: matrix(1, 0, 0, 1, 50, 0);
}

/* wrapper 5 */

#wrapper5 {
  height: 155px;
  border-right: 0;
  transform: matrix(1, 0, 0, 1, 491, 292);
}
#textWrapper3 {
  transform: matrix(1, 0, 0, 1, 0, -6);
}
#textWrapper4 {
  transform: matrix(1, 0, 0, 1, 0, 44);
}
#textWrapper4 {
  transform: matrix(1, 0, 0, 1, 0, 44);
}
#textWrapper7 {
  transform: matrix(1, 0, 0, 1, 0, 95);
}
#textWrapper8 {
  transform: matrix(1, 0, 0, 1, 0, 145);
}

/* footnote */

.footnote {
  position: absolute;
  top: 0;
  left: 0;
}
#footnote1 {
  transform: matrix(1, 0, 0, 1, -25, 99);
}
#footnote2 {
  transform: matrix(1, 0, 0, 1, -25, 111);
  width: 810px;
}
#footnote3 {
  transform: matrix(1, 0, 0, 1, -25, 123);
}
#footnote4 {
  transform: matrix(1, 0, 0, 1, -25, 146);
}
</style>
