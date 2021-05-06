
import { initAuth0 } from '@auth0/nextjs-auth0';

export default initAuth0({
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
  secret: process.env.AUTH0_SECRET,
  baseURL: process.env.AUTH0_BASE_URL,
  clientSecret: process.env.CLIENT_SECRET,
  routes: {
    /**
     * Either a relative path to the application or a valid URI to an external domain.
     * This value must be registered on the authorization server.
     * The user will be redirected to this after a logout has been performed.
     * You can also use the AUTH0_POST_LOGOUT_REDIRECT environment variable.
     */
    postLogoutRedirect: process.env.AUTH0_REDIRECT_URI,

    /**
     * Relative path to the application callback to process the response from the authorization server.
     * Defaults to `/api/auth/callback`
     * You can also use the AUTH0_CALLBACK environment variable.
     */
    callback: process.env.AUTH0_CALLBACK
  }

});