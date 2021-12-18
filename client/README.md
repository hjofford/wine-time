# Wine Time
Picture this - It's Friday morning and you've had a hectic week at work. You've also made the 'interesting' and possibly ill-advised decision to study while working full-time in an international corporate role. To add to your Freaky-Friday-Franticness, it's the second last week of December, and you haven't even begun to find your friends and family gifts... it truly is a NIGHTMARE before Christmas. GET ME A GLASS OF WINE! Oh... and leave the bottle.

'Wine Time' is a simple productivity/task management app that helps you set out all your daily/project 'To do's' in a JIRA/Trello style board, with drag and drop capabilities. You can move your task along each stream to track the work to be completed, current progress, tasks that need to be reviewed and a summary of what you've already finished. 

So when life gets tough, use Wine Time to plan and track your day. Each completed task brings you one step closer to the sweet nectar of the gods.

The website is hosted through [Heroku](https://devcenter.heroku.com/categories/reference) and the code repositry is available on [GitHub](https://github.com/)

## How to use Wine-Time:

#### To Add new Streams/Tasks
* Click 'Add Stream' button to create a new stream
  * Add Stream Title you'd like to add
  * Submit the task to the Wine Time board

* Click 'Add Task' button to create a new task
  * Add Task Title, Content/Description, and the relevant stream you'd like to add it to
  * Submit the task to the Wine Time board

#### To Delete a Stream/Task
* Click the bin/trash icon next to the Stream Title or Task

#### Tracking task/project progression
* Once you have all your tasks added to the board, you can track your task completion/milestones using the integrated Atlassian Beautiful DnD (Drag and Drop)
  *  Simply drag and drop a task tile to any of the 


Use the Wine Time Productivity App [here](#).

## Technologies used:
This full-stack (MERN) app was developed in Node JS and React, using the following dependencies:

- [Express JS](https://expressjs.com/)
  - ```npm install express```
- [pgSessions](https://www.npmjs.com/package/express-pg-session)
  - ```npm install express-pg-session```
- [Connect-PG-Simple](https://www.npmjs.com/package/connect-pg-simple)
  - ```npm install connect-pg-simple```
- [Axios](https://axios-http.com/docs/intro)
  - ```npm install axios```
- [Dotenv](https://www.npmjs.com/package/dotenv)
  - ```npm install dotenv```

This App was developed using a MERN stack. Documentation about MERN stacks can be found [HERE](https://outweb.io/documentation.html)

When using Express JS MVC structure, remember to require each dependency on your main server.js file. You must also module.exports your 'models' and 'controllers' and then require these files on your server.js in order to utilise them.

The Wine Time databases were created using PostgreSQL. You can find the SQL scripts inside ```schema.sql.```

These databases are then connected to Heroku using the following CLI commands:

```heroku login```
```heroku addons:create heroku-postgresql:PLAN_NAME EXAMPLE: heroku addons:create``` ```heroku-postgresql:hobby-dev```
```heroku pg:push example_db DATABASE_URL```
Check your Heroku app for added database

## Project Discovery + Planning:
[Trello PM Board](#)
[Figma Layout](#)

## Future Enhancements:



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
