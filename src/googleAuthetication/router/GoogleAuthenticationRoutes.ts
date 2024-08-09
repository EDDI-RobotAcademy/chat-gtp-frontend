import googleRedirection from "@/googleAuthetication/google/GoogleRedirection.vue"

const GoogleAuthenticationRoutes = [
    {
        path: '/google_oauth/google-access-token',
        name: 'GoogleRedirection',
        component: googleRedirection
    },
]

export default GoogleAuthenticationRoutes