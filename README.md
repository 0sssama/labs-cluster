# 1337KH Labs Clusters Map

Hellow. This tool is made by 1337 Khouribga students for 1337 Khouribga students to help make their lives at the school easier.

This tool will allow students to find available posts, posts that are not currently working, find students by login or name, and other features to come.

At [the bottom](#contributors) of this README, you will find a list of the contributors for this project. Wanna become one? here's how you can do that!


## How to contribute

### Creating your Intra app

First, head out to your Intranet dashboard's settings :

![enter image description here](https://i.ibb.co/tbBtYYM/Group-1.png)

Then go to API.

![enter image description here](https://i.ibb.co/48KxFxJ/Group-2.png)

Then press on "Register a new app".

![enter image description here](https://i.ibb.co/MVKwyvr/Group-2-1.png)

Fill the form with a name for your app, and a Redirect URI (it can be any random URL doesn't matter), and for the scopes just leave them as they are.

After your app is created, you will find your client UID and secret keys.

![Group-3](https://i.ibb.co/wCrrjck/Group-3.png)


### Creating a .env file

Now follow these steps :

 - Fork the repo
 - Clone it on your local machine
 - 'cd' into it, then create a '.env' file in the root of the project. Here is an example of how your .env file should look :
  ```
  # your intra app secret keys
CLIENT_UID=<YOUR CLIENT UID>
CLIENT_SECRET=<YOUR CLIENT SECRET>

# just copy this at it is. this is the url to which the app will make requests
NEXT_PUBLIC_URL=http://localhost:3000
```

### Dig in!

In order to dig in, you should first create a branch in which you will code the feature you want to add, you can do that using the following command :
```bash
git checkout -b <your branch name>
```

We recommend to call it something in this format `feature/my-feature`. ex: `feature/dark-mode` or `feature/api-optimization`

Now you need to install the app dependencies, you can do that using this command :
```bash
npm install
```
or if you're a yarn lover (like Ismail ;))
```bash
yarn install
```


Finally, you can run the app using this command
```bash
npm run dev
```
or
```bash
yarn dev
```
Now you can view the app by visiting `http://localhost:3000/`

After you finished coding and testing your feature, push to your branch. Then create a pull request to the `dev` branch in this repo. Have fun, and thanks a lot!


## Contributors

Here is a list of all the contributors to this project. Thanks to all of you!

- [Oussama LABRAMI](https://github.com/0sssama)
- [Abdelhadi SABANI (awbx)](https://github.com/awbx)
- [Nabil ATTIA](https://github.com/attia-nabil)
- [Rida EL-MAZARY](https://github.com/rida-el)

## Technologies used

- Next.js for frontend + backend
- TailwindCSS for styles
- Recoil.js for global states