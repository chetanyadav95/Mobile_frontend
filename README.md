# Ionic + Angular Frontend Design: Demo Trading Platform

## How to host the app on a browser

Run this ```ionic serve``` in the terminal.

The app should be running on the browser at [localhost:8100](http://localhost:8100)

## How to generate the Android APK

### First step - generate an Android file

* Run this before doing anything:

```npm install @capacitor/core @capacitor/cli```

* Then we need to enable the capacitor by running this in the terminal:

```ionic integrations enable capacitor```

> **BEWARE!** If for some reason it none of these work, and you're a macOS user, 
> try putting _sudo_ in front of them.

* Moving on, the next step is to run this ```sudo ionic build cordova android``` in the terminal. <br>
Notice ```android``` in the line. We are putting it there because we want android. Makes sense.

* The next step is to initialize our app by the following line in terminal: <br>

```npx cap init [appName] [appId]```

where the `[appName]` should be the actual name of the app, for eg. "tradingApp", <br>
and the `[appId]` is the domain identifier of your app `(ex: com.tradingApp.app)`.

* The next thing to do is to run ```ionic build``` in the terminal. This generates <br>
a ```www``` file, so don't touch it.

> If you're a macOS user, put _sudo_ in front of it in case it doesn't work. 

* Going forward, the next thing to do is to write ```npx cap add android``` <br>
and this will generate the native android file ready to be used in Android Studio for eg.

* And last but not least, we run ```npx cap open android```. <br>
Now if you have Android Studio installed on your computer, it will open it up for you. <br>
If not, go and install Android studio and try this line again.

> **IF ANDROID STUDIO TELLS YOU TO UPDATE SOME GRADLE SCRIPTS, DO NOT UPDATE THEM, <br>
BECAUSE IT IS REFERRING TO THE ALREADY PERFECTLY WORKING GRADLE SCRIPTS GENERATED IN VSCODE!!!**
