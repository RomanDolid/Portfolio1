<i18n>
    {
        "deu": {}
    }
</i18n>

<template>
  <wiz-root>
    <div :class="globalClasses">
      <wiz-viewer>
        <wiz-bg-sidebar>
          <wiz-bg-back-to-custom-presentation
            v-bind="common.backToCustomPresentation"
            :icon="'./common/media/images/back-tocustom-presentation/defaultIcon.png'"
          ></wiz-bg-back-to-custom-presentation>
          <wiz-bg-sitemap
            v-bind="common.sitemap"
            :active-icon="'./common/media/images/co-bg-sidebar/vumerity/icon-active-sitemap.png'"
            :icon="'./common/media/images/co-bg-sidebar/icon-sitemap.png'"
            @sitemap-opened="closeMenu"
          ></wiz-bg-sitemap>
          <wiz-bg-references
            v-bind="common.references"
            :active-icon="'./common/media/images/co-bg-sidebar/vumerity/icon-active-references.png'"
            :icon="'./common/media/images/co-bg-sidebar/icon-references.png'"
            @references-opened="closeMenu"
          ></wiz-bg-references>
          <wiz-bg-study-design
            v-bind="common.studyDesign"
            :active-icon="'./common/media/images/co-bg-sidebar/vumerity/icon-active-sd.png'"
            :icon="'./common/media/images/co-bg-sidebar/icon-sd.png'"
          ></wiz-bg-study-design>
          <wiz-bg-smpc
            v-bind="common.smpc"
            :active-icon="'./common/media/images/co-bg-sidebar/vumerity/icon-active-smpc.png'"
            :icon="'./common/media/images/co-bg-sidebar/icon-smpc.png'"
          ></wiz-bg-smpc>
          <wiz-bg-back-button
            v-bind="common.backButton"
            :active-icon="'./common/media/images/back-button/defaultActiveIcon.png'"
            :icon="'./common/media/images/back-button/defaultIcon.png'"
          ></wiz-bg-back-button>
          <wiz-bg-reset
            v-bind="common.resetButton"
          ></wiz-bg-reset>
        </wiz-bg-sidebar>
        <common-layout></common-layout>
        <wiz-container
          id="logo"
          v-goto="gotoHome"
          class="logo"
        ></wiz-container>
        <wiz-bg-navigation-bar
          id="navbar"
          ref="navbar"
          class="navigator-bar"
          :class="{ disabled: currentSlide === 'vumerityHome', invisible: closingNavMenu }"
          v-bind="navigationBar"
          @slideswipe.native="checkHomePage"
        ></wiz-bg-navigation-bar>
      </wiz-viewer>
    </div>
  </wiz-root>
</template>

<script>
import commonLayout from './common/components/common-layout/common-layout.vue';
import smpc from './common/media/pdfs/smpc.pdf';

export default {
  name: 'wiz-app',
  components: {
    commonLayout,
  },
  data() {
    return {
      smpc,
      common: {
        backToCustomPresentation: {},
        sitemap: {},
        studyDesign: {
          disabled: false,
          actionType: 'slide',
          goToSlide: {
            chapter: 'studyDesign',
            slide: 'vumerityStudyDesign1',
          },
        },
        smpc: {
          disabled: false,
          openPdf: smpc,
        },
        references: {
          referencesHeader: '',
        },
        resetButton: {
          activeOnSlide: 'vumerityHome',
          selector: '#reset',
        },
        backButton: {},
      },
      navigationBar: {
        enableChapterMenuMode: false,
        animationTime: 2000,
        autocloseDelay: 3000,
        hideMenuOnChapters: [],
        hiddenChapters: ['core'],
        activeColor: '#ce0058',
        isDoubleTap: true,
      },
      closingNavMenu: false,
      gotoHome: {
        chapter: 'core',
        slide: 'vumerityHome',
      },
    };
  },
  computed: {
    currentSlide() {
      return this.$navigator.getCurrentSlide().slide;
    },
    currentChapter() {
      return this.$navigator.getCurrentSlide().chapter;
    },
    globalClasses() {
      return {
        slide: true,
        [this.currentSlide]: true,
        [this.currentChapter]: true,
        'refs-open': this.isReferencesOpen,
      };
    },
    ispopupSlide() {
      return ['popups', 'studyDesign'].includes(this.currentChapter);
    },
  },
  created() {},
  mounted() {
    this.watchReferencesState();
    this.setupHistoryHandler();
    this.setupNavigationHooks();
  },
  methods: {
    watchReferencesState() {
      this.$watch('$refs.references.opened', (value) => {
        this.isReferencesOpen = value;
      }, { deep: false, immediate: false });
    },
    setupHistoryHandler() {
      this.$navigator.onenter(this.historyHandler, { global: true });
    },
    historyHandler() {
      this.removeCurrentFromHistory();
      this.savePrevSlide();
    },
    removeCurrentFromHistory() {
      if (sessionStorage.getItem('navigationHistory')) {
        let history = JSON.parse(sessionStorage.getItem('navigationHistory'));
        history = history.filter((slide) => {
          return slide.slide !== this.currentSlide;
        }); sessionStorage.navigationHistory = JSON.stringify(history);
      }
    },
    savePrevSlide() {
      sessionStorage.currentSlide = JSON.stringify(this.$navigator.getCurrentSlide());
    },
    checkHomePage(event) {
      if (this.currentSlide === 'vumerityHome' || this.currentChapter === 'studyDesign' || this.currentChapter === 'popups') {
        event.stopPropagation();
      }
    },
    closeMenu() {
      this.$refs.navbar.opened = false;
      this.closingNavMenu = true;
      setTimeout(() => {
        this.closingNavMenu = false;
      }, 500);
    },
    setupNavigationHooks() {
      this.$navigator.onbeforeenter(() => {
        this.closeMenu();
      }, { global: true });
    },
  },
};
</script>

<style>
@import './common/styles/imports.css';
@import './common/styles/fonts.css';
</style>

<style lang="scss">
//here we can import scss globally
</style>

<style lang="scss" scoped>
</style>
