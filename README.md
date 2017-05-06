# Vue on Rails with Webpacker
A simple demonstration of one way you could make us of [Vue.js](https://github.com/vuejs/vue) components a Rails 5.1 app, using the new [Webpacker](https://github.com/rails/webpacker) gem.

[View Live Demo](https://rails-vue.herokuapp.com)

The idea is to make it as simple as possible to start adding Vue to Rails projects, without completely abandonning the traditional way of authoring views.

Reference [https://github.com/rails/webpacker](https://github.com/rails/webpacker) to ensure you're all set-up to start using this gem in your development environment.

### Quickstart
`bundle`, `bin/webpack-dev-server`, then `bin/rails server` in a separate terminal window.

## Description
Implementing the Tabs component from [Bulma](https://github.com/jgthms/bulma). with Vue, based on the exercise in the following Laracasts [episode](https://laracasts.com/series/learn-vue-2-step-by-step/episodes/11).

If you're new to Vue I highly reccomend working through the series, along with the official documentation on [vuejs.org](https://vuejs.org).

##### Bulma
Bulma is pulled in via CDN for simplicity, and does not provide us with any default JavaScript behaviour itself, leaving us to implement our own as we please.

### Project Structure

##### Components
Components are stored as .vue files in their own separate directory `app/assets/javascript/components`.

Two components (one for an individual 'Tab', and one for a collection of 'Tabs') are used to demonstrate how one component can be referenced inside another. `b-` is used in the naming of components here only by convention, to indicate that the component template is from Bulma.

##### Packs
Webpacker sets up `javascript/packs` as the entry point for Webpack by default.

Components are then imported into 'pack' files e.g. in `app/assets/javascript/packs/welcome/index.js` as `import Tabs from '../../components/b-tabs.vue'`.

###### Pack namespacing
Mirroring Rails' view structure, for the purposes of this project, pack files are organised according corresponding controller and view, in this case welcome#index.

In `packs/welcome/index.js` we create a new Vue instance to be mounted on the `#welcome-index` element, and that pack is then referenced in `views/welcome/index.html.erb` as `<%= javascript_pack_tag 'welcome/index' %>`.

##### Rails views
In the Tabs custom `<b-tabs></b-tabs>` component within `welcome/index.html.erb`, a single 'hard-coded' tab shows how you could compose individual tabs (or any component) directly in a Rails view. This is followed by an example of making use of embedded ruby, by iterating over a `@welcome_tabs` hash contaning the name and contents of three additional tabs.

Neither of these examples involve asynchronous requests to the server or rendering of JSON, since all the data is provided in the view (either directly or via the helper).

##### Turbolinks
Turbolinks has been removed for simplicity, but it can play nice with Vue. Reference this Go Rails [episode](https://gorails.com/episodes/how-to-use-vuejs-and-turbolinks-together) for how you can use Vue and Turbolinks together.

### Troubleshooting
It's worth reading the documentation and requirements for using [Webpacker](https://github.com/rails/webpacker) and check any issues there which might relate to using Webpacker on your system.

#### Improvements
Improvements and suggestions are welcome.

This project will eventually be updated to demonstrate additional ways of implementing Vue in Rails with Webpacker.