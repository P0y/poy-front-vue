import Vue from 'vue'

// https://webpack.js.org/guides/dependency-management/#require-context
const requireComponent = require.context('.', false, /_base-[\w-]+\.vue$/)

requireComponent.keys().map(filename => {
    const componentConfig = requireComponent(filename)
    const componentName = filename
    // Remove the "./_" from the beginning
    .replace(/^\.\/_/, '')
    // Remove the file extension from the end
    .replace(/\.\w+$/, '')
    // Split up kebabs
    .split('-')
    // uppercase
    .map((kebab) => kebab.charAt(0).toUpperCase() + kebab.slice(1))
    // Concatenated
    .join('')

    // Globally register the component
    Vue.component(componentName, componentConfig.default || componentConfig)
})