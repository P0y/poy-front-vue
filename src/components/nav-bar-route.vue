<script>
// Allows stubbing BaseLink in unit tests
const BaseLink = 'BaseLink'
const BaseIcon = 'BaseIcon'

export default {
    name: "NavBarRoute",
    functional: true,
    props: {
        routes: {
            type: Array,
            required: true
        }
    },
    // Render functions are an alternative to templates
    render(h, { props, $style = {} } ) {
        function getRouteTitle(route) {
            return route.title
        }
        function getRouteIcon(route) {
            console.log(route)
            return route.icon
        }
        return props.routes.map((route) => (
            <BaseLink
                tag='li'
                key={route.name}
                to={route}
                exact-active-class={$style.active}
            >
                <BaseIcon name={getRouteIcon(route)}></BaseIcon> 
                <a>{getRouteTitle(route)}</a>
            </BaseLink>
        ))
    },
}
</script>

<style lang="scss" module>
a {
    padding-left: $size-icon-padding-vertical;
}
.active a {
  display: inline-block;
  font-weight: 600;
  color: $color-link-text-active;
  text-decoration: none;
  cursor: default;
}
</style>