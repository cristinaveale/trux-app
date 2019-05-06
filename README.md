# trux-app

## Installation

```
$ npm install -g yarn
$ yarn global add @vue/cli
$ mkdir -p pkg/http/web
$ cd pkg/http/web
$ vue create app
$ cd app
$ vue add vuetify
$ yarn serve
```

Open app at http://localhost:8080

install okta for user auth:

```
$ yarn add @okta/okta-vue@1.0.7
$ yarn add vue-router@3.0.2
$ yarn add vuex@3.0.1
$ yarn add axios@0.18.0
```

`/me` route is where the bulk of the functionality takes place: the user should be able to query for Food Truxs via Twitter's API, favorite Trux returned from the query, see more details about the Trux, and leave a personal comment on the Trux.

Take note that both the `/me` and `repo/:id` have a `meta: { requiresAuth: true }` property specifying that the user must be authenticated to access that area of the app. The Okta plugin will use it to redirect the user the Okta login page if not authenticated.
