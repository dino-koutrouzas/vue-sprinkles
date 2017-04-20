# Vue on Rails with Webpacker
This is a simple demonstration of one way you could organise [Vue.js](https://github.com/vuejs/vue) files in your Rails 5 app, using the new [Webpacker](https://github.com/rails/webpacker) gem.

The idea is to be able to incorporate Vue's features into your project, without completely abandonning the traditional way of authoring Rails views.

Be sure to reference [https://github.com/rails/webpacker](https://github.com/rails/webpacker) to ensure you're all set-up to start using this gem in your development environment.

### Quickstart
`bundle`, `bin/webpack-dev-server`, then `bin/rails server` in a separate terminal window.

## Description
This example uses the Tabs component from [Bulma](https://github.com/jgthms/bulma), and its implementation is based on the exercise in the following Laracasts [epsidoe](https://laracasts.com/series/learn-vue-2-step-by-step/episodes/11).

If you're new to Vue I highly reccomend working through this series, along with the official documentation on [vuejs.org](https://vuejs.org).

##### Bulma
Bulma is pulled in via CDN for simplicity, and does not provide us with any default JavaScript itself which leaves us to implement our own behaviours as we please.

### Structure

##### Components
Vue components in this project are stored as .vue files in `app/assets/javascript/components`, then referenced in the pack files that need to access them. e.g. in `app/assets/javascript/packs/welcome/index.js` as `import Tabs from '../../components/b-tabs.vue'`.

Two components (one for an individual 'Tab', and one for a collection of 'Tabs') are used to demonstrate how one component can be referenced inside another. `b-` is used in the naming of components here only by convention, to hint that the component template is from Bulma.

##### Pack namespacing
In this example, files in `javascript/packs` (the default entry point for Webpack) are organised according to their corresponding controller and view, in this case welcome#index. In `packs/welcome/index.js` we create a new Vue instance to be mounted on the `#welcome-index` element, and that pack is then referenced in `views/welcome/index.html.erb` as `<%= javascript_pack_tag 'welcome/index' %>`.

##### Rails views
Inside the Tabs component (`<b-tabs></b-tabs>`) within `welcome/index.html.erb`, a single 'hard-coded' tab shows how you could compose individual tabs (or any component) directly in a Rails view. This is followed by an example of iterating over a `@welcome_tabs` hash contaning the name and contents of a three tabs (in this case provided by a `application_helper.rb`).

Neither of these examples involve asynchronous requests to the server or rendering of JSON, since all the data is provided in the view (either directly or via the helper).

##### Turbolinks
Turbolinks has been removed for simplicity, but it can be used with Vue. Reference this Go Rails [episode](https://gorails.com/episodes/how-to-use-vuejs-and-turbolinks-together) for how you can use Vue and Turbolinks together.

## Behaviour
This is a simple implementation of Tabbed content, a type of interactive functionality we're all familiar with. Watch the [laracasts episode](https://laracasts.com/series/learn-vue-2-step-by-step/episodes/11) for a breakdown on how this functionality is applied from scratch here, using Vue.

Although there is a bit of set-up involed, it could pay off once your UI needs to deal with more complex interactions, and this is even shown by how simple it is to apply the final step of conditionally showing and hiding the relevant tab content.

##### JavaScript Sprinkles
Since the raw data is rendered on the server, before the Vue instance is [mounted](https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram) on the client side, a fade-in has been applied in vanilla JavaScript & CSS in `assets/javascripts/application.js` and `assets/stylesheets/application.css` to remove any unwanted flickering when the page loads.

### Troubleshooting
It's worth reading the documentation and requirements for using [Webpacker](https://github.com/rails/webpacker) and reference any issues there which might relate to using Webpacker on your system.

#### Improvements
Improvements and suggestions are welcome.

This project will be soon be updated to also show how you can use Vue to retrieve data from your Rails asynchronosly, as well as other use cases and implementation of Vue in Rails with Webpacker.