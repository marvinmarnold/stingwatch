App.info({
  id: 'org.stingraymappingproject.sting_watch',
  name: 'StingWatch',
  description: 'StingWatch',
  author: 'The Stingray Mapping Project',
  email: 'marvin@unplugged.im',
  website: 'https://www.stingraymappingproject.org',
  version: '0.2.36',
});

App.icons({
  android_mdpi: 'public/android-icon-48x48.png',
  android_hdpi: 'public/android-icon-72x72.png',
  android_xhdpi: 'public/android-icon-96x96.png',
  android_xxhdpi: 'public/android-icon-144x144.png',
  android_xxxhdpi: 'public/android-icon-192x192.png'
});

App.accessRule('https://*.amazonaws.com');
App.accessRule('https://*.mapbox.com');
App.accessRule('http://*.mapbox.com');
App.accessRule('https://*.stingraymappingproject.org');
App.accessRule('https://*.twitter.com');

App.launchScreens({
  android_mdpi_portrait: 'public/splash/screen.png',
  android_mdpi_landscape: 'public/splash/screen-land.png',
  android_hdpi_portrait: 'public/splash/screen.png',
  android_hdpi_landscape: 'public/splash/screen-land.png',
  android_xhdpi_portrait: 'public/splash/screen.png',
  android_xhdpi_landscape: 'public/splash/screen-land.png',
  android_xxhdpi_portrait: 'public/splash/screen.png',
  android_xxhdpi_landscape: 'public/splash/screen-land.png',
  android_xxxhdpi_portrait: 'public/splash/screen.png',
  android_xxxhdpi_landscape: 'public/splash/screen-land.png',
});

App.setPreference('android-versionCode', '36');
// App.setPreference('BackgroundColor', '0xff0000ff');
// App.setPreference('Orientation', 'default');
// App.setPreference('Orientation', 'all', 'ios');
