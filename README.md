# Social Sharing Image Generator App

This app is designed to help users easily create a social sharing image for their individual blog posts.

## How it works

- Enter the URL of the target page into the first input field
- The app uses `fetch` to scrape the `<title>` tag text from the page
- A request is then sent to Cloudinary to generate an image based on some config, including the title we scraped
- Cloudinary generates the image and it's served to the user

## To do

- Set the correct image size
- Add download button for image
- Allow scraped page details to be edited
- Also pull in author, date, logo, etc
- Change font, colour, size, position, etc
- Split the title over multiple lines if needed
- Allow the user to specify a background (blank colour, image from Unsplash API or uploaded directly, or pattern)
- Improve UI visuals
- Allow user to create an account and set permanent details (i.e. site name, logo)
