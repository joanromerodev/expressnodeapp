# Express - Node JS App

This app offers you a quick understanding of the use of express in a node app. It's basically designed to test functionalities such routes, rendering views, using view engines, express-sessions and Filesystem.

## Technologies

> Framework or Language

- [Node](https://nodejs.org/en) - Evented I/O for the backend

> Libraries, modules and packages

- [Express](https://www.npmjs.com/package/express) - Provides small, robust tooling for HTTP servers, making it a great solution for single page applications, websites, hybrids, or public HTTP APIs.
- [Express Sessions](https://www.npmjs.com/package/express-session) - Create a session middleware with the given `options`
- [Nodemon](https://www.npmjs.com/package/nodemon) - nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
- [PUG](https://www.npmjs.com/package/pug) - Pug is a high performance template engine heavily influenced by HAML and implemented with JavaScript for NodeJS and browsers
- [dotenv](https://www.npmjs.com/package/dotenv) - Dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`
- [File System](https://nodejs.org/dist/latest-v18.x/docs/api/fs.html#file-system) - This module enables interacting with the file system in a way modeled on standard POSIX functions

## Pre-requisites

You must have already installed:

- Node (latest version) : See [how to install](https://nodejs.dev/en/learn/how-to-install-nodejs/) NodeJS
- Visual Studio Code : See how to install VS Code for [Windows](https://code.visualstudio.com/docs/setup/windows), [Mac](https://code.visualstudio.com/docs/setup/mac) or [Linux](https://code.visualstudio.com/docs/setup/linux)

## How to install

### Clone the project

To be able to use the code and edit its files, you can easily clone this project by running the following command in your preferred command shell:

     git clone https://github.com/joanromerodev/expressnodeapp

### Install dependencies

As you may know, the packages folder wasn't uploaded since the **_.gitignore_** file excludes it. In those cases, and to get every package up to date, it's important for you to install them manually. You can do it by running the following command:

1.  Change your directory by calling this line in your command shell
    ```
      cd [your-project-directory]
    ```
2.  Once you're in the main directory, start installing the dependencies in the following order:
    ```
      npm install express
    ```
    ```
      npm install express-session
    ```
    ```
      npm install nodemon
    ```
    ```
      npm install pug
    ```
    ```
      npm install dotenv
    ```

## Configure

Since the .env file isn't here, what you need to do is to create a new one in the root directory. Then set the following environment variables.

```
	# Define a port so the app will use it if available
	PORT=4000
	# Setting a secret key will be useful for session integrity
	# You can set a custom secret key like "blackcat" but take into account security standars
	SECRET_KEY=yoursecret #Suggested pattern: f970ddc55b2dfef4d48991d0f6ff96...
	# User login related variables
	ALLOWED_USER=admin
	ALLOWED_PASS=expressnodeapp
```

Take into account that this web-app simulates a login connection by getting the allowed user and password from the `.env` file. This is **not recommended** in a real production environment since the data could get compromised. What you can do is to modify the project to connect with a database which retrieves the user and password registered securely. Since this is a development environment, you can set the value for the `ALLOWED_USER` and `ALLOWED_PASS` as you may prefer. These values will be the ones that the app will require in the login view.

## Understanding the DB

As mentioned before, this app simulates a connection with a database. The database is a JSON file called _user.json_ which contains an object with the different values for the app such as name, email, phone. I could have created a `json-server` but it requires further configuration so, since this is a simple app, I preferred to create a _User.js_ file simulating a model **(MVC)** which using a function `getUserData()` will return the values from the JSON file and then will export the value to the required controller. If any value wants to be modified, the app logic will do it by itself when you edit the information in the **/settings** route. But if you want to add more keys and values to the JSON file so you can render them in the **/dashboard** view according to your requirements, just simply go and edit the _user.json_ file and change the return logic for the function `getUserData()` in the _User.js_ file.

## Edit the scripts

In order to be able to use **nodemon** package, you'll need to add an script calling nodemon and the main route to your _package.json_ file so that way when you run the command to start the app, it'll call the app by using nodemon. Locate in the root folder your _package.json_ file and add the following:

```json
	{
		"name": "azurenodeapp",
		"version": "0.0.1",
		...
		"scripts":{
			"start":"node app.js"
			//Add the script to call app.js through nodemon
			"dev": "nodemon app.js"
		}
	}
```

**IMPORTANT NOTE:** Remember that everytime that any file changes its content, nodemon will restart the server to render the information up to date. However everytime the server restarts, your session will get finished so you'll have to login back again. Since the _user.json_ file content changes when you edit the value in the **/settings** route, the server will restart and you'll get signed out. There are two ways to prevent this:

1.  To properly configurate express-session to not kill the session when it's updating the _user.json_ file
2.  To run the app as if you are in production environment using the script **"start"**. This way the server won't get restarted when the _user.json_ file content changes because it doesn't affect a real production environment.

## Run the app

To run the app locally, you'll only need to run the following command:

- Developing environment:
  `npm run dev`
- Developing environment:
  `npm run start`

Depending on the port that you set in the _.env_ file, you'll open your browser and go to the following URL:

    http://localhost:{your_port}

For example, if the PORT I set in _.env_ file is 4000, then I'll go to the following URL:

    http://localhost:4000

## Conclusions

Finally, in this app you'll be able to:

1.  Login with your credentials in `/login` route
2.  Check the logged user info in dashboard `/` route
3.  Edit or update the user info in settings `/settings` route

## License

MIT

**Free Software, yeeeeeep!**
