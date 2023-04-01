import { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from "next-auth/next";

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

export default function auth(req: NextApiRequest, res: NextApiResponse) {
  req.headers['x-forwarded-host'] = process.env.NEXTAUTH_URL
  return NextAuth(req, res, authOptions)
}
