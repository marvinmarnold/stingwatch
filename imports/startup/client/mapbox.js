export function configMapbox() {
  Mapbox.load({
    plugins: ['heat', 'label']
  });
}
