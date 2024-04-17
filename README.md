# Netflix With GPT - A Netflix clone with GPT powered Search engine

To view the application, click here → 🔥[Netflix With GPT](https://netflixwithgpt.netlify.app/ "Netflix With GPT")🔥

## 💻 Functional: 
- Modules (Pages) 
    - Module 1 - Authentication
        - Feature 1 - Sign In
        - Feature 2 - Sign up
    - Module 2 - Browse
        - Feature 1 - Movie Component
            - Movie Trailer
            - Movie Details
        - Feature 2 - Secondary Component
            - Movie Lists
                - Now Playing Movies
                - Popular Movies
                - Trending Movies
                - Top-rated Movies
                - Upcoming Movies
    - Module 3 - GPT powered Search
        - Feature 1 - Search
        - Feature 2 - Recommendation

## 🎯 Non-functional
- Desktop-first
- Responsive
- Authentication
- Versioning (github)
- Performance 

## 👨🏻‍💻Tech choices
- ReactJS (scaffolded with CRA)
- TailwindCSS
- Single responsibility via Custom hooks
- State management using React-Redux
- Firebase for authentication backend
- Routing using React-router-dom



## 💡Development sequence
- Create React App
- Configured TailwindCSS 
- Header
- Routing of App
- Login Form
- Sign up Form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying our app to production
- Create SignUp User Account
- Implement Sign In user Api
- Created Redux Store with userSlice
- Implemented Sign out 
- Update Profile
- BugFix: Sign up user displayName and profile picture update
- BugFix: if the user is not logged in Redirect /browse to Login Page and vice-versa
- Unsubscibed to the onAuthStateChanged callback
- Add hardcoded values to the constants file
- Regiter TMDB API & create an app & get access token
- Get Data from TMDB now playing movies list API
- Custom Hook for Now Playing Movies
- Create movieSlice
- Update Store with movies Data
- Planning for MainContauiner & secondary container
- Fetch Data for Trailer Video
- Update Store with Trailer Video Data
- Embedded the Yotube video and make it autoplay and mute
- Tailwind Classes to make Main Container look awesome
- Build Secondary Component
- Build Movie List
- build Movie Card
- TMDB Image CDN URL
- Made the Browsre page amazing with Tailwind CSS
- usePopularMovies Custom hook
- GPT Search Page
- GPT Search Bar
- (BONUS) (Multi-language Feature in our App)
- Get Open AI Api Key 
- Gpt Search API Call
- fetched gptMoviesSuggestions from TMDB
- created gptSlice added data
- Resused Movie List component to make movie suggestion container
- Memoization
- Added .env file
- Adding .env file to gitignore
- Made our Site Responsive


## 📽️ Project Setup
- Before starting the project please add .env file and add the following ENVs
    - REACT_APP_OPENAI_KEY
    