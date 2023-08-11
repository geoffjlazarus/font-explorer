# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# Font Explorer

Font Explorer is a web application to manipulate variable fonts. Variable fonts are a contemporary font format that have a greater variety of adjustable attributes than previous font formats.

Font Explorer has three primary features:

1. Font Sampler
   
   Font Sampler retrieves 5 random fonts from the top 50 variable fonts on the Google Fonts API.
   The user is able to enter custom text and manipulate the weight and tracking of the font.
   Custom text changes the displayed text for each of the 5 fonts.
   A refresh button retrieves a new 5 random fonts via the API.

2. Font Pairs
   
   Font Pairs is stimuli for creative font pairings. This feature retrieves 5 random font pairs as possible pairings.
   The pairing is always a serif font with a sans-serif font. A randomised font pairing might surprise the typographer with a combination they had no previously considered. This feature also draws upon the variable fonts provided by the Google fonts API. A refresh button retrieves 5 new pairs of serif and sans-serif fonts.

3. Font Playground

   Font Playground displays a randomised font from the top 50 variable fonts provided by the Google webfonts API. 
   This feature provides traditional text manipulation features: the ability to bold, italicise or underline the displayed text, the ability to change the colour of the displayed text, buttons to change the text alignment from left, center, right and justified. A slider allows the user to adjust the displayed font size. These manipulations change real time in the displayed Lorem Ipsum paragraph of sample text. An additional text field allows users to provide their own custom text.


## Technologies Used

- HTML
- CSS
- JavaScript
  - React
  - Express
  - Axios
- Google webfonts API

## Next steps

- Logging in and authentication
- Favourite fonts
- Save font settings
- Functional variable font manipulation
- Database
- Improved font playground and text editing