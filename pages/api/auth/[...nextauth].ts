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

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const nextAuthResponse = await NextAuth(req, res, authOptions)
  console.log({ nextAuthResponse })
  return nextAuthResponse
}
