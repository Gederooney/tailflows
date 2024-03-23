import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { getToken } from 'next-auth/jwt'

const { NEXTAUTH_SECRET, GITHUB_AUTH_CLIENT_SECRET, GITHUB_AUTH_CLIENT_ID } = process.env

const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: GITHUB_AUTH_CLIENT_ID ?? '',
      clientSecret: GITHUB_AUTH_CLIENT_SECRET ?? '',
    }),
  ],
  pages: {
    signIn: '',
    signOut: '',
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
