# About StingWatch
StingWatch is an Android app built with Meteor (using React + Cordova) to catch IMSI-catchers (aka Stingrays or cell site simulators). These are electronic devices for mass surveillance used by many local police departments and other groups around the world. [Learn more](https://www.stingraymappingproject.org).

In a nutshell, StingWatch:
- is based on modular components that in the long run should make the code reusable across many types of devices (PCs, iPhones, IoT, RaspberryPi, etc.)
- will contribute and pull from a shared database for advanced detections
- is more limited functionality and reliability than other well established apps like [SnoopSnitch](https://opensource.srlabs.de/projects/snoopsnitch) and [AIMSICD](https://github.com/CellularPrivacy/Android-IMSI-Catcher-Detector)
- does not require rooting

## imsi-catcher-catcher
The main package that StingWatch relies on is [imsi-catcher-catcher](https://github.com/marvinmarnold/meteor-imsi-catcher-catcher).
imsi-catcher-catcher is also being incorporated into another project at the same time, [StingWatch Desktop](https://github.com/marvinmarnold/stingwatch-desktop), a version of StingWatch that can run on anything that supports gnuradio and Meteor, like an [Intel Compute Stick](http://www.intel.com/content/www/us/en/compute-stick/intel-compute-stick.html).

# Get StingWatch
## Precompiled
* [Google Play](https://play.google.com/apps/testing/org.stingraymappingproject.sting_watch) (in beta testing)
* FDroid coming soon
* Direct APK link coming soon

## Setup
Make sure the following are installed:
- git, curl: `sudo apt-get install git curl`
- Meteor: https://www.meteor.com/install
- Android SDK: https://guide.meteor.com/mobile.html

## Get the code and plugins
Both these methods are assuming an installation into `~/.stingwatch`.
### Option 1: Script
`curl https://stingraymappingproject.org/install.sh | sh`

### Option 2: Manual
These instructions are copied from the install script above:
````
# Get StingWatch
git clone git@github.com:marvinmarnold/stingwatch.git
cd stingwatch

# Install NPM packages
sudo meteor npm install --save react react-addons-pure-render-mixin react-dom react-hammerjs react-router twitter

# Setup location for packages
mkdir packages
cd packages

# Link to Bootstrap
git clone git@github.com:marvinmarnold/bootstrap.git
cd bootstrap
git checkout stingwatch
cd ..

git clone git@github.com:marvinmarnold/cordova-plugin-telephony.git
git clone git@github.com:marvinmarnold/meteor-device-id.git
git clone git@github.com:marvinmarnold/meteor-imsi-catcher-catcher.git
git clone git@github.com:marvinmarnold/meteor-reactive-local-store.git
cd ..

# Copy over settings
cp settings-example.json settings.json

chmod +x stingwatch.sh
````

## Configure settings
Register with Mapbox and Twitter.
Fill in `settings.json` with keys.

# Use StingWatch
Make sure your Android device is plugged in and that `adb devices` shows it.

## Local server
The fastest way to get started it to make your computer the server the app talks to.
````
cd ~/.stingwatch
./stingwatch
````
The server will start the server on `localhost:4000` and is equivalent to running `meteor run android-device -p 4000 --settings settings.json
`.
