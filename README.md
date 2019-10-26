<p align="center">
  <a href="https://ackl.in/">
    <img alt="James" src="https://ackl.in/icons/icon-96x96.png" width="96" />
  </a>
</p>
<h1 align="center">
  James Acklin, a coding designer
</h1>

My personal website, built with [Gatsby](https://www.gatsbyjs.org/), styled with [styled-components](https://www.gatsbyjs.org/) and [Tachyons](http://tachyons.io/), written in Markdown, and built and seved with [Now](https://zeit.co/home). I am a UX designer and front-end developer in Pittsburgh, PA, USA. [Come say hi!](https://ackl.in/)

## Quick start

1.  **Install Gatsby.**

    ```shell
    npm install -g gatsby
    ````

1.  **Start developing.**

    Navigate into the project directory and start it up.

    ```shell
    cd james-acklin-site/
    gatsby develop
    ```

2.  **Open the source code and start editing.**

    The project is now running at `http://localhost:8000`.

    [GraphiQL](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql), a data exploration tool, runs at `http://localhost:8000/___graphql`.

## Project files

```
.
├── src
├── .gitignore
├── .prettierignore
├── .prettierrc
├── gatsby-config.js
├── LICENSE
├── now.json
├── package-lock.json
├── package.json
└── README.md
```

1.  **`/src`**: All code relating to the front end of the site—components, fonts, Markdown source, and templates.

2.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

3.  **`.prettierignore`**: This file tells Pretter (see below) which files it should not format.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-config.js`**: Main Gatsby configuration.

6.  **`LICENSE`**: Gatsby is licensed under the MIT license.

7.  **`now.json`**: Configuration for [now.sh](https://now.sh/) deployments.

8. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of the npm dependencies that were installed for this project. **(You won’t change this file directly).**

9. **`package.json`**: A manifest file this Node.js project, which includes things like metadata, tasks, and dependencies.

10. **`README.md`**: This file.

## Deployments
If you are me, log in to Now and type:

```shell
now
```

Now is also integrated with GitHub, so simply create a pull request for a new staging deployment and merge the PR to promote it to production.