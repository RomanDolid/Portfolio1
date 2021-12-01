import panZoom from 'vue-panzoom';

export default (Vue) => {
  Vue.use(panZoom, { componentName: 'pan-zoom' });
};
