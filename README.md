# README

## How to use boilerplate

Clone the repository and take the contents of the boilerplate into your own project (Versions can be upgraded later. i.e. ReactNative).

The key features included on this boilerplate:
* Project Structure
* General stylesheet for handy common styles.
* Redux
* React Navigation with Redux
* Simple initial routes setup for React Navigation.
* babel-plugin-module-resolver setup for easier development
* jsconfig.json for Visual Studio to support autocomplete with shorcuts of babel module resolver.

## Project Structure (Please follow it)
* **src**
  * **api** - External API related functions.
  * **assets** - Images and such things.
  * **components** - Reusable common/generic components.
  * **navigation** - All Navigation related stuff, only the navigation definition, the actual screns are imported.
  * **features** - Most code will be here. It contains all "features" that the apps is build up, example: **_auth_**, **_user_**, **_jobs_**, etc. For each "feature", create the following structure:
    * **screens** - Screen components. i.e. **_Login_**, **_Register_**, etc.
    * **components** - Custom usually reusable components tied to the feature. i.e. **_JobDetail_**, **_JobHeader_**, etc.
    * **reducers** - Redux Reducer for the data related to the feature. If applies.
    * **actions** - Redux actions related to the feature. (For now constants are included in the same file).
  * **styles** - Styles for the App.
  * **redux** - Redux root definition (combine all reducers).
  
## Manual setup

1. Init React Native project
    ```
    $ react-native init AwesomeProject
    ```
2. Copy the contents for everything except package.json and yarn.lock.

3. Add packages manually:

```
$ yarn add @react-native-community/async-storage @react-native-community/cli immutable jetifier lodash prop-types react-native-gesture-handler react-native-vector-icons react-navigation react-redux redux redux-persist redux-thunk
```

```
$ yarn add -D metro-react-native-babel-preset
```

4. For conflicting packages with Android X, run before build:
```
$ npx jetify
```
