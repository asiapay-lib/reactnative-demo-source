
- **React Native Setup**

- **Requirment**

    1.[React Native](https://reactnative.dev/docs/environment-setup)
    2.For IDE tool, you can install [Visual Studio Code](https://code.visualstudio.com/download)
    3.npm

- **AsiaPay demo App installation**
    1. create New folder for demo project
    2. In that folder create react native project with below command in terminal
    ``npx create-react-app my-app`` 
   note - my-app is demo app example name 
   3. npm install - "npm i" 
   4. Install asiapay package - "npm i asiapay"
   

- **Update Merchant ID Configuaration**

In App.js file 
1. Add ``import Asiapay from 'asiapay';`` 

2. For asiapay merchant enviroment setup 

    1. In `App.js` to update merchant id on the below code, :
    
    ``React.useEffect(() => {
    Asiapay.setup('SANDBOX', '88624174');
    }, []);``
  
3. For Payment call add below code
    ``Asiapay.hostedcall(merchantId: string, amount: string, currency: string, orderRef: string, remark: string)``
    For example,
    ``Asiapay.hostedcall('88624174', '1', 'HKD', Date.now().toString(), 'Test')``


- **For iOS**

- **Requirment**

    1.Xcode 15 and later

- **PaySDK Version**

Below information show the version of AsiaPay iOS PaySDK .

```
iOS: 2.6.25

```

- **AsiaPay demo App iOS Build**  

1. Remove or comment below code for fbRecatNativeSpec [if issue will come regarding to fbReactNativeSpec]

> Path - node_modules/react-native/scripts/find-node.sh

    if [[ -s "$HOME/.nvm/nvm.sh" ]]; then
    # shellcheck source=/dev/null
    . "$HOME/.nvm/nvm.sh" --no-use
    nvm use 2> /dev/null || nvm use default
    elif [[ -x "$(command -v brew)" && -s "$(brew --prefix nvm)/nvm.sh" ]]; then
    # shellcheck source=/dev/null
    . "$(brew --prefix nvm)/nvm.sh" --no-use
    nvm use 2> /dev/null || nvm use default
    fi
    
2. install the pod in iOS folder[cd ios] - "Pod install"


- **Xcode Setting**

    1. Add bundle ID to project setting general tab(if required)
    2. If required add  ``armv64`` to ``Pod -> Target -> asiapay -> build settings -> excluded architectures`` for ios simulator 


- **Update RSA Key for PaySDK**
    
    1. Add ``paysdk.plist`` and set value of certificate and "Domain" key value pair. Value for the Domain is optional
    2. For further description kindly follow [PaySDK Guide on iOS](https://github.com/asiapay-lib/paysdk-ios-lib)
        
        
- **Run React Native iOS App with two ways:-**

A. From React native project 
1. start the metro with below command in another terminal window 
 ``react-native start --reset-cache``
   Note - Run the single metro at a time
 2. Run the ios app with below command`
 ``npx react-native run-ios``  

B. Directly from Xcode
    A. you can also run the project from ios folder 
    1. open the workspace project from ios folder and run the project
   Note :-  No need to start metro it will automatically start the metro
   
   -**FAQ** :
1. “macOS cannot verify that this app is free from malware” 
    - give the permission for metro libraries from securiry and privacy section in mac preferences
2. Herms fremework not found - app crash after launching 
   - add herms.xcframework to xcode setting general tab "Frame Library and embedded content" section
3. could not find module 'AP_PaySDK' for target 'arm64-apple-ios-simulator'   
  - If required add  ``armv64`` to ``Pod -> Target -> asiapay -> build settings -> excluded architectures`` for ios simulator 

4. fatal error: module map file YogaKit.modulemap not found
    - Need to add  ``armv64`` to ``Pods -> build settings -> excluded architecture`` for ios simulator


- **AsiaPay demo App Android Build**  

- **Requirment** 

    buildToolsVersion = "33.0.0"
    minSdkVersion = 26
    compileSdkVersion = 33
    targetSdkVersion = 33
    kotlinVersion = "1.7.10"
    
    - **PaySDK Version**

    Below information show the version of AsiaPay iOS Android PaySDK  .

    ```
    Android: PaySDK-2.7.69
    
    ``
    
- **Update RSA Key for PaySDK**
    -For further description kindly follow [PaySDK Guide on Android](https://github.com/asiapay-lib/paysdk-android-lib)

- **Run React Native android App :-**

A. From React native project 
    1. start the metro with below command in another terminal window 
 ``react-native start --reset-cache``
    2. Run the ios app with below command`
 ``npx react-native run-android``  
 
 -**FAQ** :
 
 1. > if getting Execution failed for task ':gradle-plugin:compileKotlin'.
 What went wrong:
 Execution failed for task ':gradle-plugin:compileKotlin'.
 > A failure occurred while executing org.jetbrains.kotlin.compilerRunner.GradleCompilerRunnerWithWorkers$GradleKotlinCompilerWorkAction
    > Internal compiler error. See log for more details
  
 buildscript {
   ext {
      kotlinVersion = "1.7.10"
   }
   dependencies {
     classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlinVersion"
   }
 }

 -----------------------------------------------------------------------
 
2. if not find PaySDK-2.7.69 then add below code in build.gradle app after buildscript block
 allprojects {
   repositories {
     maven {
       // All of React Native (JS, Obj-C sources, Android binaries) is installed from npm
       url("$rootDir/../node_modules/react-native/android")
     }
     maven {
       // Android JSC is installed from npm
       url("$rootDir/../node_modules/jsc-android/dist")
     }
     mavenCentral {
       // We don't want to fetch react-native from Maven Central as there are
       // older versions over there.
       content {
         excludeGroup "com.facebook.react"
       }
     }
     google()
     jcenter()
     maven { url 'https://www.jitpack.io' }
     flatDir {
       dirs "$rootDir/../node_modules/asiapay/android/libs"
       //dirs 'libs'
     }
   }
 }  


