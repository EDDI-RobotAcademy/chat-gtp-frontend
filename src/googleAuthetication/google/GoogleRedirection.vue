<template>
    <div></div>
</template>

<script>
import router from '@/router';
import { mapActions, mapState } from 'vuex'

const googleauthenticationModule = 'googleauthenticationModule'
const accountModule = 'accountModule'

export default {
    data () {
        return{
            email:'',
            nickname: '',
            password: '',
            logintype:'',
        }
    },
    methods: {
        ...mapActions(googleauthenticationModule, [
            'requestGoogleAccessTokenToDjangoRedirection',
        ]),
        async setRedirectData () {
            const code = this.$route.query.code
            await this.requestGoogleAccessTokenToDjangoRedirection({ code })
            const accessToken = localStorage.getItem("GoogleAccessToken")
        }
    },
    async created () {
        await this.setRedirectData()
    }
}
</script>