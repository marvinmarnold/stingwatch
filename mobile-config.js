App.info({
  id: 'org.stingraymappingproject.sting-watch',
  name: 'StingWatch',
  description: 'StingWatch',
  author: 'The Stingray Mapping Project',
  email: 'marvin@unplugged.im',
  website: 'https://stingraymappingproject.org',
  version: '0.0.1'
});

App.icons({
  iphone: 'public/apple-icon.png',
  iphone_2x: 'public/apple-icon-144x144.png',
  iphone_3x: 'public/apple-icon-180x180.png',
  ipad: 'public/apple-icon.png',
  ipad_2x: 'public/apple-icon-144x144.png',
  android_ldpi: 'public/android-icon-36x36.png',
  android_mdpi: 'public/android-icon-48x48.png',
  android_hdpi: 'public/android-icon-72x72.png',
  android_xhdpi: 'public/android-icon-192x192.png'
});

App.accessRule('https://*.amazonaws.com');
App.accessRule('https://stingwatch.meteor.com');
App.accessRule('https://*.mapbox.com');
App.accessRule('http://*.mapbox.com');
