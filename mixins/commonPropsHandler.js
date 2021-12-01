import { eventBus } from './eventBus.js';

const commonPropsHandler = {
  data() {
    return {
      common: {},
    };
  },
  created() {
    const isSlide = () => { return this.$options.name === 'wiz-slide'; };

    const isApp = () => { return this.$options.name === 'wiz-app'; };

    const saveDefaultCommonProps = () => {
      if (this.$data.common) {
        this.$data.defaultCommon = { ...this.$data.common };
      }
    };

    const setProps = (component, props) => {
      if (props[component]) {
        this.common[component] = { ...this.$data.defaultCommon[component], ...props[component] };
        // console.log(component + ' props set');
      } else {
        this.common[component] = { ...this.$data.defaultCommon[component] };
        // console.log(component + ' default props set');
      }
    };

    const setPropsForAll = (props) => {
      const components = getCommonComponentsList();
      components.forEach((component) => { setProps(component, props); });
    };

    const getCommonComponentsList = () => { return Object.keys(this.$data.common); };

    const addSlidePropsToApp = (props) => {
      this.$data.addingProps = true;

      const isPropsEmpty = Object.keys(props).length === 0;

      if (!isPropsEmpty) {
        setPropsForAll(props);
      } else {
        // no common props passed!
        setPropsForAll({});
      }

      // wait for v-bind to update props
      this.$nextTick(() => {
        this.$data.addingProps = false;
      });
    };

    if (isSlide()) {
      eventBus.$emit('common-props', this.$parent.$data.common);
    }

    if (isApp()) {
      saveDefaultCommonProps();
      eventBus.$on('common-props', (payload) => { addSlidePropsToApp(payload); });
    }
  },
};

export default commonPropsHandler;
