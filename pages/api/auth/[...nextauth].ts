import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { NextApiRequest, NextApiResponse } from "next"

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
}

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (process.env.NEXTAUTH_URL) {
    // workaround: Since next-auth ignore NEXTAUTH_URL internally in favor of `x-forwarded-host` if deployed on Vercel,
    // we need to override the header here for NEXTAUTH_URL to take effect
    req.headers["x-forwarded-host"] = process.env.NEXTAUTH_URL
  }
  return NextAuth(req, res, authOptions)
}
