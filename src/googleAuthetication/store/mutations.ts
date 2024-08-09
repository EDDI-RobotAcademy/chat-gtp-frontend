import { MutationTree } from "vuex";
import { GoogleAuthenticationState } from "./states";
import { 
    REQUEST_IS_GOOGLE_AUTHENTICATED_TO_DJANGO,
} from "./mutation-types";

export interface AuthenticationMutations extends MutationTree<GoogleAuthenticationState> {
    [REQUEST_IS_GOOGLE_AUTHENTICATED_TO_DJANGO] (state: GoogleAuthenticationState, settingValue: boolean): void
}

const mutations: MutationTree<GoogleAuthenticationState> = {
    [REQUEST_IS_GOOGLE_AUTHENTICATED_TO_DJANGO] (state: GoogleAuthenticationState, settingValue: boolean): void {
        state.isGoogleAuthenticated = settingValue
    }
}

export default mutations as AuthenticationMutations