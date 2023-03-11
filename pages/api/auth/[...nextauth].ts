import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"

const defaultRedirectUrl = ({ url, baseUrl }: { url: string; baseUrl: string }) => {
  if (url.startsWith("/")) return `${baseUrl}${url}`
  else if (new URL(url).origin === baseUrl) return url
  return baseUrl
}

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async redirect(params) {
      const defaultRedirect = await defaultRedirectUrl(params)

      const url = new URL(defaultRedirect);

      // Remove the state and code parameters from the URLSearchParams object
      const queryParams = new URLSearchParams(url.search);
      queryParams.delete('state');
      queryParams.delete('code');

      // Update the search property of the URL object with the modified params
      url.search = queryParams.toString();

      // Get the modified URL string
      return url.toString();
    },
  }
}

export default NextAuth(authOptions)
