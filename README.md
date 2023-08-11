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

Text alignment icons made by [HideMaru](https://thenounproject.com/hiddemaru/) on The Noun Project using CC BY 3.0 License.

## Next steps

- Logging in and authentication
- Favourite fonts
- Save font pairs
- Text completion for font search
- Save font settings
- Functional variable font manipulation
- Database
- Improved font playground and text editing
