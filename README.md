# Personal Site
This project will be a re-do of my current portfolio site. Using a React front-end with Flask back-end, the website will be fully responsive, and allow me to add posts and information simply. It will feature my projects, skills, and contact information. Blog will temporarily be stored in json file instead of DB.

## Back-End
### Dependencies
- Flask
- python-dotenv

### Endpoints
- GET('/api/blog/recent/\<amount\>')
    - Returns the specified number of recent posts
- GET('/api/blog/post/\<id\>')
    - Returns the post with specified ID

## Front-End
### Dependencies
- axios
- react-router-dom
- moment
- styled-components

### Routes
- (/) Home
    - Displays basic info and recent posts
- (/blog/{pageNumber}) Blog
    - Displays 10 recent blog posts in pages with images and short descriptions
- (/post/{id})
    - Displays full post with given ID
- (/contact) Contact
    - Page to quick-email me