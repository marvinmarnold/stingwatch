# Getting started

## Download core
````
git clone git@github.com:marvinmarnold/stingwatch.git
````

## Install NPM packages
````
meteor npm install --save react react-addons-pure-render-mixin react-dom react-hammerjs react-router twitter
````

## Link packages
````
cd stingwatch/packages
git clone git@github.com:marvinmarnold/bootstrap.git
cd bootstrap
git checkout stingwatch
cd ..

git clone git@github.com:marvinmarnold/cordova-plugin-telephony.git
git clone git@github.com:marvinmarnold/meteor-device-id.git
git clone git@github.com:marvinmarnold/meteor-imsi-catcher-catcher.git
````

## Setup Android
Follow Meteor Guide http://guide.meteor.com/mobile.html to setup Android platform.

## Configure settings
Copy `settings-example.json` to `settings.json`.

Register with Mapbox and Twitter. Fill in `settings.json` with keys.

## Run on Device
With device plugged in, run:
````
meteor run android-device -p 4000 --settings settings.json
````
