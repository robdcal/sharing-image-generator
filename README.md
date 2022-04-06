# Social Sharing Image Generator App

This app is designed to help users easily create a social sharing image for their individual blog posts.

## How it works

- Enter the URL of the target page into the first input field
- The app uses `fetch` to scrape the `<title>` tag text from the page
- A request is then sent to Cloudinary to generate an image based on some config, including the title we scraped
- Cloudinary generates the image and it's served to the user

## To do

- Improve UI visuals
- Change image font, etc
- Allow the user to specify an image (blank colour, image, etc)
- Set the correct image size
- Split the title over multiple lines if needed
- etc etc
