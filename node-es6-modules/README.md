# Goal

Built a simple list of products
- Each iteration will have its own **pull request** to master
- Each commit will be **pushed** as soon as possible to prevent blockers
- All in **2 weeks** 😉

## First iteration

Build a shop with **just** a list of products

- Vanila ES6 in front-end
    - No additional library
    - **Not even for HTTP requests**
- CSS framework of your choice
- Vanila NodeJS 10 **API** in back-end
- JSON file storage
    - Read & write to disk on each request

## Second iteration

Build a shop with **just** a list of products

- React 16.8 in front-end
    - ESLint
    - No state manager (Redux, etc)
    - API fetching done in components
    - Unit & integration tests
- CSS framework of your choice
    - Integrate with React
- Express NodeJS **API**
    - ESLint
    - Express router
    - Unit & integration tests
    - Implement fast caching for storage 🤯
- JSON file storage
    - Ensure sync on disk

## Third iteration

On top of the second iteration, add categories and build filters for the list of products

- React in front-end
    - Move **all** API calls to Redux
    - Optimise re-renders 😳
- Express NodeJS **API**
- MySQL storage
    - Products table
    - Categories table
