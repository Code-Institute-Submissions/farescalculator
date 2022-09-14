# Fares Calculator <img align="right" width="75" height="75" src="favicon.ico">

## Site Goals

Fares Calculator is a site for people to look up Local Link Rural Transport routes in Cork to view timetables and get exact fare costs for their journey.
The site is targetted at people of all ages who are interested in travelling on these routes.   

Fares Calculator is useful for these potential passengers by allowing them to plan for a journey by picking out routes that have suitable pickup and drop points.
As times are published in the timetables they can work out a journey that suits their needs or adjust their schedule to match the pick up times.

The Fares Calculation popup is particularly useful as it spares the potential passenger from trying to work through complicated grids of fare structures that are incomprehensible to the average person. Instead they can pick from a set of select options (calculation parameters) to get an exact fare.

Important Note: All references to Local Link are for Local Link Cork only.

![](assets/images/responsiveLook.webp)

# UX/UI & Features

## Design Choices

- A three page website is a preferred minimum to satisfy the user requirement as opposed to a one page scroll.
- As a fourth Search Results page is planned, the required user interaction would make a single page scroll not a sensible approach.
- A simple colour scheme is preferred with lots of white space to present a modern no nonsense site which is uncluttered clear and inviting.
- As the audience will typically access this site from a mobile Phone while on the move, the layout is presented in a Mobile Application Format rather than a more typical website appearance.
- As the target audience is likely to include people with accessibility issues the site is designed to make browsing as simple as possible with very clear instructions.
- The instruction footer on the index.html (landing page) encourages the users to find out more about the available routes and explains clearly how to proceed.
- The navigation is by buttons only without a menu or a hamburger. This is in keeping with the Mobile Application apparoach.
- By clicking Search Now the user is taken to the single.html page (in a future version this will be a Search results page.)
- The single page provides the user with three clear options:
    - Calculate Fares
        This is a popup that allows the user provide us with the necessary parameters to calculate the fare and present it on screen.
    - View Timetables
        This a table presentation of the Stops with the scheduled times can be easily seen.
        On a Mobile device this wide table has a scrolling feature so that the Stops stay fixed.
        The User can also choose the change the direction of travel by clicking the Change Direction button.
    - Download a PDF version of the route.
        On a Mobile device a download notice will typically appear.
        On larger devices typically the user can view the pdf and download using the browser download feature.
        The download PDF button opens in a new tab (future versions will decide this based on a provided accessibilty option as a new tab can confusing to screen readers etc.)
- There is a New Search button available in the header at all times to enable the user to return to index.html (Home).
- Using json files allows for this site to dynamically generate pertinent information to a user.

## User Stories

- Users need information in relation to where they can travel with Local Link buses and what services are running close to where they live.
    - This site assists them hugely in that regard. The information a user needs is clearly laid out for them in an easy to navigate website.
- User need to be able to check out what it will cost them to travel on Local Link services.
    - This site will assist users by allowing them to get an accurate calculation of cost.
- Users need to be made aware of developments and news in relation to Local Link activities.
    - This site will assist them as they can see all Facebook, Instagram and Twitter posts by clicking on the social media icons in the header.
- Users need to be able to trust the information given to them.
    - Because this site publishes data directly from json files generated directly from regulated sources, data accuracy is not compromised.
        - Note: The timetable is not produced from json just now but it will be in the next version.
- Users need to be able to find all of their required in one place.
    - This site presents all of the information they require in an easy to navigate presentation.
        - Note: There is only one route published at present but once the search results feature is in place then all routes will be available.

## Site Navigation
 
- The Logo is featured in the top left corner. This links to the top of the index page called Home.
- The navigation links are buttons situated to the bottom centre of the page. The other pages are Single (with a Fares Calcualtion Popup) and Timetable.
- The navigation links are in an attractive and visually clear websafe font which change color on hover to show a contrast.
- The font color of the navigation clearly stands out against a well contrasted background.
- The navigation is really simple with very little scope for confusion.

---- 

![](assets/images/header.webp)

![](assets/images/hamburgerclosed.webp)  |  ![](assets/images/hamburger.webp)

## Header

- The branding of the site is consistent as this is the common header used throughout the site and is situated at the top of every page.
- The color scheme is simple using the green and blue from the logo. Socail media icons use the appropriate colors.
- As the header includes the Home button (New Search) this provides a consistent experience for the person browsing the site. 
- The header logo tells the user which Rural Transport entity they are looking at. 
- The New Search button indicates that this a site that allows for them to search for suitable routes.
----  

## Pages  

### Index Page titled Home  

Hero Section

- The hero section shows an attractive background image of hikers with a dog, this helps to cement the message of what the site is about.
- A CTA is included as a text overlay. This links to the subscribe page when clicked.
- The CTA has a background color with opacity which allows the image to show through and yet aid in reading clarity.
- The background color of the CTA also complements the green in the logo.  
- The image of the dog smiling with a header which belongs to the ethos section is pulled up into the hero section for added visual impact. 

![](assets/images/hero.webp)

Ethos Section

The ethos section is displayed in 3 columns. These columns stack on smaller devices.

Left Column

- The left column shows the dog smiling image and the associated header which combined contain a positive emotional message.
- Below this is a challenge statement seeking to engage the user. 
- Below the challenge statement are some interesting fact statements. 

![](assets/images/ethosleft.webp)

Center and Right Columns

- The center and right columns are laid out with 4 key Why? statements.
- These address the main reasons why it is important for users to consider bringing their dogs with them on hikes.

![](assets/images/ethoscenterright.webp)

### Trails Page

Voted trails of the week

- This consists of 3 highlighted trails that are presented in 3 columns.
- These columns stack on smaller devices.
- Each column has a featured trail with details about that trail including a youtube video and a link to to an external site.
- Each column has a different background colour to clearly show that each trail is a seperate entity.

![](assets/images/trails.webp)

### Gallery Page

This contains images of dogs on hiking trails.

- This consists of images displayed in 4 columns in masonry format.
- The column count changes as devices get smaller.
- On mobile phones each image is displayed one above the other.
- Each image has a hover effect.
- Each image has a lightbox effect with navigation included in the lightbox display.

![](assets/images/gallery.webp)
![](assets/images/lightbox.webp)

### Subscribe Page

This page is where a user can subscribe.

Hero Section

This is identical to the hero section on the index.html page. (Please see index page information above)

- This consists of 2 columns in 1/3 to 2/3 layout.
- The left column has similarities to the ethos left column. (Please see ethos left column on index page above)
- Below this is a challenge statement seeking to engage the user is an audio piece provided by a hiker.
- Below that is a headline inviting a user to listen to the audio.

![](assets/images/audio.webp)

- The right column has the subscription form.
- The form is laid out in 3 distinct areas:
    - Subscriber details
    - Subscriber Login Details
    - Trail Regional Preferences
- A subscribe button is clearly visible and it's background color draws a users attention to it.

![](assets/images/subscribeform.webp)
![](assets/images/subscribebutton.webp)

----

## Footer

The footer is used for all pages. However the subscribe page is slightly different in that the Subscribe button is omitted from the footer as it is used with the subscribe form.

![](assets/images/footersubscribe.webp)

The footer is displayed in 3 columns.

- The left column has an elevator pitch statement promoting the site.
- The middle column contains our social media icons. These link to external social media pages.
- The right column displays a subscribe button which links to the subscribe page.

![](assets/images/footer.webp)

----

# Testing

Tests carried out by me.

- This site was tested by me to ensure that all of the pages on this site work in different browsers: Edge, Chrome, Safari and Firefox.
- I checked that the site works in responsive mode on all of these browsers.
- These tests were carried out on all pages of the site.
- The navigation works well on all browsers and the responsive hamburger works well on all browsers.
- The subscribe form works well and form validation works where required fields will not allow a bypass without valid entries. The email field will only accept a valid email structure and the submit button works as expected.

Validator Testing

- HTML:             All pages were passed through the official https://validator.w3.org/ and no errors were found.
- CSS:              All pages were passed through the official https://jigsaw.w3.org/css-validator/ and no errors were found.
- Accessibility:    By running the site pages through Lighthouse in Inspect on Chrome I got the following results:

index desktop                |  index mobile
:-----------------:|:-----------------:
![](assets/images/indexdesktop.webp)  |  ![](assets/images/indexmobile.webp)

trails desktop               |  trails mobile
:-----------------:|:-----------------:
![](assets/images/trailsdesktop.webp)  |  ![](assets/images/trailsmobile.webp)

gallery desktop               |  gallery mobile
:-----------------:|:-----------------:
![](assets/images/gallerydesktop.webp)  |  ![](assets/images/gallerymobile.webp)

subscribe desktop               |  subscribe mobile
:-----------------:|:-----------------:
![](assets/images/subscribedesktop.webp)  |  ![](assets/images/subscribemobile.webp)

----

## Development Transition

### Initial Wireframe Concept

index.html                 |  trails.html
:-----------------:|:-----------------:
![](docs/wireframes/index.webp)  |  ![](docs/wireframes/trailspage.webp)

gallery.html               |  login.html
:-----------------:|:-----------------:
![](docs/wireframes/gallerypage.webp)  |  ![](docs/wireframes/loginpage.webp)

- July 12th I introduce a fancy multiline button with a pacman hover effect on Footer. See Credits for keenanpayne.com.
- July 14th I decide to remove the Login Form as I deem it confusing to include it at this point when I do not have a fully working login framework.
- So all login references become subscribe references.
- July 17th I am introduced to the world of flexbox. I decide to implement it on the site.
- This is an important development as it will have an impact on all my responsive development work yet to come.
- July 18th Use Javascript for Submit button and form validation. This is required because the button is not a regular submit button.
- July 21st I decide that Project1 should be free of Javascript and perform as CSS only
- So all javascript coding for the subscribe form are removed. 
- The Subscribe button which leans on javascript for its fancy multiline pacman styyle is now a regular submit button.
- This also applies to the Button in the footer.
- July 21st I decide to introduce a CSS only hamburger. I introduce this and it works fine. But this implementation fails the w3 html validator.
- I try a few others and same result. I naively decide to rollback to pre hamburger implementation attempts. 
- This does not go well but after some nervous work and assistance from Tutor support I get back to a good place.
- Lesson learned and an unexpected crash course in github.
- July 22nd I implement a CSS only hamburger. See Credits for alvarotrigo. This works well and does pass w3 html validator.
- July 24th I introduce CSS only lightbox. See Credits for veritygriscti

----

## Bug Fixes

### Solved Bugs

- July 12th I discovered a problem with the Readme file in that I could not get Wireframes in PDF format to work.
    - Fix 914854db37d5a4f86d42053262d710da332bdf6e changed to images instead.

- July 13th Due to a typo at the top of style.css which had a ripple effect of formatting issues further down the style.css document. I had various formatting problems that needed a tidy up.
    - Fix 00cfa733a6ee2ea4a31b3c6ea74a4e78b181d82d Some css reformatting required.

- July 14th Due to mistakes with relative path the site when viewed on github looked wrong with the hero image missing.
    - Fix 58ba9b492aeddd10a609252606df2537313d8f14 Fixed relative path.

- July 18th Form validation javascript error.
    - Fix bc31621d1b85133355cee5943063c6f8cdbdebac Fixed javascript

- July 21st Spacing errors in social media and a type error in the hero section.
    - Fix fcf07b6278ee7159886b0fd78bf7ac21bc3cb269 Spacing errors and typo fixed.

- July 21st Spacing errors on trails page.
    - Fix 2b16e4e5dbef380f4f1e7a6af4a3437fce5587cc Spacing errors fixed.

- July 21st Font issue with roboto condensed not proper use of syntax
    - Fix 1dd56159346b445ee90f27ab84e014e2c46d9248 Syntax sorted.

- July 21st Footer button div background flagged by w3 validator.
    - Fix da51a9fe6febd809cfa2f751a498cce465a06a64 Div background changed.

- July 21st Submit button on subscribe form error.
- Fix 346c0eaae930b12539ffdd56452240ca05d84b1e Submit button changed.

- July 23rd Responsive style error at 768px.
    - Fix d95b1db63be036f9ef035b3ab8c30354013f8e79 Hamburger styling changed.

- July 24th Active not working on all navaigaion links.
    - Fix 69498a174c8037baab815540a40b6369249091d6 Active sorted.

- July 24th Parse error in style sheet.
    - Fix 44e2697a2b3a9d793f98e204647fdf89992d1f61 Parse error fixed.

- July 24th css validator error background color of none is not allowed.
    - Fix 05bc1f2ff0bb552c6040a4ab266cf1872f40ba48 Background is now transparent.

- August 1st alt on site logo is incorrect.
    - Fix 621349334ae3b57a7a08558b37ebe4fef2b03e95 alt changed.

- August 10th href error on logo.
    - Fix 9867899eee98ff6f2261ff1c88a55923bdbe7165 Fixed href on logo on all pages.

- August 11th Typo errors on hero section and audio on subscribe form.
    - Fix 26c5c65972f311beea14dce239216f82a366b0bd Typos fixed.

- August 11th aria-describedby errors.
- Fix 26c5c65972f311beea14dce239216f82a366b0bd Errors fixed.
    - Fix 26c5c65972f311beea14dce239216f82a366b0bd Errors Fixed.

- August 11th Radio input typo.
    - Fix 3d5eba0f518565392cd4d068c4db59237c6f3217 Typo fixed.

- August 11th Typo in comments on gallery page.
    - Fix bb0143d3cf97e1f47696f1383d3a63c65e82aea6 Typo fixed.

- August 11th aria labels issues on footer.
    - Fix dfeb94bb3ce18b41701cadd66e101c7e7e7fb9f9 aria labels fixed.
    - Fix 95de492e7fabc4fd17a378ab67e49b37eef2540a aria labels fixed.

- Ausust 11th typos in footer with regard to href.
    - Fix 95de492e7fabc4fd17a378ab67e49b37eef2540a typo fixed.
    - Fix 1a737936cadf2b62ecaf91772a0539869576ffb4 typo fixed.
    - Fix a2bcb9c20c9520e266394eb6ddf298c9480be700 typo fixed.
    - Fix 5aeb1b196f7fe4e95fe99aabb4ab5de18b1b0af4 typo fixed.
    - Fix 851c02a77587329aacdbc8b85c9c9fc8cee0d046 typo fixed.

- August 11th typos on aria labels in footer.
    - Fix b4bf39bb9f5bc81cdd58c0537c3fabf88a9d465a typo fixed.
    - Fix 4bc856ed1b17308387e456063c0a9e24eab10e1a typo fixed.

- August 12th typos in readme.
    - Fix c9d56780de488604175e08fb123e791dcd6cbf94 typo fixed.

### Unfixed Bugs

- No known unfixed bugs

----

## Deployment

The site is deployed to GitHub pages. 

- Git status check in Gitpod to ensure all is oushed to GitHub.
- In the GitHub repository under Recent Repositories select [TMartin88/dog-friendly-trails](https://github.com/TMartin88/dog-friendly-trails)
- Then Settings.
- Then Pages.
- Under Build and Deployment select Deploy from a branch from the Source dropdown list.
- Pick main and then root from the Branch selection area.
- Now GitHub Pages displays a link to the live site.

The live link to the site on GitHub is: [Dog Friendly Trails](https://tmartin88.github.io/dog-friendly-trails)

----

## Future Features

- To include a Login Form with Password Reset.
- To setup a CMS like structure for Trails complete with Search and Filter options where subscribers could upload to.
- To create a popup subscribe instead of a subscribe page.
- Moderated forum for dog loving hikers to interact and exchange experiences.

----

## Performance Improvements

- To include ms flex for IE10 and ensure compatibility with older browsers.
- To streamline HTML structure.
- To improve css to be more efficient.
- I would consider learning and using Flex grid for complete site layout.
- To improve use of flexbox.
- To get all lighthouse results close to 100%.
- With regard to gallery images to really get them compressed down to around or less than 50 kb.

----
 
## Credits

### Inspiration

- Credit to my great friends and companions, a Jack Russell called Luna and Buddha whose breed is unknown. "Happy trails".

### Instruction

- Flex Box Tuition thanks to w3schools and CSS Tricks
- Credit to w3schools for javascript tuition on submit and form validation on subscribe form. Actually I threw out all Javascript opting for a CSS only site.

### Content

- Credit for Fetch API to [javascripttutorial](https://www.javascripttutorial.net/javascript-fetch-api/)
- Credit for Filter Array ideas to [w3schools] (https://www.w3schools.com/jsref/jsref_filter.asp)

### Media

- Thanks to my friend and hiking companion Ger Killilea for most of the photos.
- Pxhere.com for the hero image.
- Pexels for 4 of the gallery images boggyvalley, rockyriver, smallboyanddog and icyriver.
- Thank you for the Turraun Route Loop picture to [The Curvy Hiker] (https://thecurvyhiker.wordpress.com/the-canine-companions/)
- Pixabay.com for Dog smiling image on ethos section.
- Knocknarea Trail image is thanks to Pete Houghton - Wordpress.com
- Ger Killilea for Audio piece on hiking.
- Trail Videos are embeeded iframe links fro youtube.
- Social media icons coutesy of Love Running Project.

----



