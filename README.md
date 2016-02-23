# Goals
IMSI-Catchers, AKA Stingrays have gained increased attention recently.
But they have still yet to gain widespread awareness amongst the public.
One reason may be that most tools required to investigate them are either closed source, require rooting, or some combination of both.

The goal of StingWatch is to be a platform independent tool that anybody can use.
Depending on the environment StingWatch is installed on, it may have more or less functionality.
For example, on an unrooted phone, it may only be able to do limited GSM based detection based on IMSI paging and empty nearest neighbors list. However if installed on a computer connected to gnuradio, it would be able to scan multiple channels and do more advanced scanning.

To be able to run ubiquitously, StingWatch is written with JavaScript, which can increasingly be run everywhere.

Ultimately, this technology is just a tool for greater policy change.
We intend to prove that stingray technology is often misused to disproportionately target certain minority groups and other civil groups.
We hope this information will reinforce the larger debate around these devices and ultimately lead to their abolition. Shortly, we will relaunch stingraymappingproject.org as the umbrella organization to address these issues so that this repo and StingWatch can focus on technology.

# Development Plan
It's not yet clear if StingWatch will be a single codebase or, more likely, a platform that supports various platforms.
At this point, there is a three phased development plan.

## Phase 1: Mobile App (current as of Feb 7, 2016)
Using Meteor and by exposing Telephony data over Cordova plugins, StingWatch can do basic GSM stingray detection.
Like most existing IMSI-catcher applications, we will use a heuristic scoring algorithm to measure threat level.
This will include:
- changing LAC/MNC/MCC
- Empty nearest neighbors list

Although Meteor + Cordova may complicate things in the short term, they will ultimately help improve our reach as we can target more devices with less effort.
Also by packaging the technology as a web app, we can avoid wasting efforts on complicated native UI development and database adapters.

Dependencies also under development:
 - [meteor-imsi-catcher](https://github.com/marvinmarnold/meteor-imsi-catcher) - hardware agnostic detection.
 - [cordova-plugin-telephony](https://github.com/marvinmarnold/cordova-plugin-telephony) - pull telephony information from phone.

## Phase 2: API access to data
Current conversations about stingray usage are often limited by access to data about these things. After addressing some critical privacy issues, we will make our data accessible through a public API.

But once our data is made available, we hope this will encourage other IMSI-catcher applications to do the same. We will seek to encourage all IMSI-catcher apps to centralize their data in one place for ease of access and improved data consistency.

## Phase 3: Hardware
Once things are working with standard mobile hardware, we will create adapters to run the same code base on other integrated devices.
For example, RTL-SDR is a cheap (~$20) radio dongle that can be used to monitor the base station you are conneted to or the base
stations around you.
Because Meteor runs off Node.js, we will be able to easily install it on most architectures.

### Usage
Deploy to your android, using a local server
````
meteor run android-device -p 4000
````
Deploy to your android, using remote server
````
meteor run android-device --mobile-server http://stingwatch.meteor.com
````

### Build notes
http://stackoverflow.com/questions/28585818/meteor-android-apps-does-not-install-on-4-1-1/29562922#29562922
android
meteor build PATH_TO_BUILD --server https://stingwatch.meteor.com

keytool -genkey -alias name -keyalg RSA -keysize 2048 -validity 10000 -keystore name.keystore

jarsigner -keystore name.keystore -digestalg SHA1 -sigalg MD5withRSA -tsa http://timestamp.digicert.com  release-unsigned.apk name

~/.meteor/android_bundle/android-sdk/build-tools/21.0.0/zipalign -f -v 4 unaligned.apk myapp.apk

Version number
http://stackoverflow.com/questions/32179872/meteor-js-android-version-code

https://www.digitalocean.com/community/tutorials/java-keytool-essentials-working-with-java-keystores

### Offline/background notes
https://forum.ionicframework.com/t/how-to-run-cordova-plugin-in-android-background-service/6677/8
http://stackoverflow.com/questions/10343828/creating-an-android-service-with-phonegap-have-phonegap-app-run-even-when-clos
https://github.com/AdamBrodzinski/Meteor-Cordova-Status
https://forums.meteor.com/t/is-ddp-working-when-mobile-client-offline-or-running-in-background/9518/3
