# Ionic + Angular Frontend Design: Demo Trading Platform

## How to host the app on a browser

Run this ```ionic serve``` in the terminal.

The app should be running on the browser at [localhost:8100](http://localhost:8100)

## How to generate the Android APK

### First step - generate an Android file

#### If this is your first time do these first steps, if not, skip:

Run this before doing anything:

```npm install @capacitor/core @capacitor/cli```

Then we need to enable the capacitor by running this in the terminal:

```ionic integrations enable capacitor```

> **BEWARE!** If for some reason it none of these work, and you're a macOS user, 
> try putting _sudo_ in front of them.

The next step is to initialize our app by the following line in terminal: <br>

```npx cap init [appName] [appId]```

where the `[appName]` should be the actual name of the app, for eg. "tradingApp", <br>
and the `[appId]` is the domain identifier of your app `(ex: com.tradingApp.app)`.

The next thing to do is to run ```ionic build``` in the terminal. This generates <br>
a ```www``` file, so don't touch it.

> If you're a macOS user, put _sudo_ in front of it in case it doesn't work. 

Going forward, the next thing to do is to write ```npx cap add android``` <br>
and this will generate the native android file ready to be used in Android Studio for eg.

> If you made some changes, and you don't want to entirely rebuild the android file <br>
> just type in ```npx cap sync android```.

And last but not least, we run ```npx cap open android```. <br>
Now if you have Android Studio installed on your computer, it will open it up for you. <br>
If not, go and install Android studio and try this line again.

### Some potential bug fixes in the Android Studio

Now for some reason, you will have 5 errors: <br>
- 4 package import related (these will be shown inside the build window in Android Studio) <br>
- 1 for videos not showing up (this one is a logical error, therefore no error message will be seen) <br>

The first four are easy. Go inside these four files (In Android Studio):
- PushPlugin.java
- FCMService.java
- BackgroundActionButtonHandler.java
- PushHandlerActivity.java

All of these files will have a common error, and that is that for import packages that start with <br>
```android.support.v4.``` need to be replaced with ```androidx.core.```

The video error is quite simple to solve. You need to go the *AndroidManifest.xml*, and on the <br>
```<application>``` tag you need to write the following: <br>
```<application android:usesCleartextTraffic="true">```. 
And that's how you solve both the issues <br>

### Second step - Generating an APK in Android Studio for Android devices

In Android Studio, in the _Build_ tab, click on _Generate Signed Bundle / APK..._

It will open up a window making you choose between two radio points, <br>
and here you will select the _APK_ option. <br>

Then you will see a bunch of form inputs, so you need to go ahead and fill them all out.<br>

After filling them up, click on Next.

Now you have two more options before finishing it all up and that is to choose between <br>
_release_ or _debug_.

Select release, then tick both of the checkboxes before clicking on Finish.

It will then proceed to build the APK file for you.

The APK file should be generated in the same file the Android Studio is reading the scripts from.
To be more specific, the filepath should look something like this:

android -> app -> build -> release -> APP.apk

## How to generate the IOS IPK

In VSCode, in Terminal, type: <br>
```npx cap init [appName] [appId]```

where the `[appName]` should be the actual name of the app, for eg. "tradingApp", <br>
and the `[appId]` is the domain identifier of your app `(ex: com.tradingApp.app)`.

The next thing to do is to run ```ionic build``` in the terminal. This generates <br>
a ```www``` file, so don't touch it.

The next thing is to type, in the terminal: <br>
```npx cap add ios```.

After that, we type in: <br>
```npx cap open ios```.

Now this line will work only if you have XCode installed, meaning that if you don't
have XCode installed (which is only available on macOS devices), this line is pretty
much useless.

But you have the _ios_ file which you can open in other IOS code editors, such as
_Xamarin_.
