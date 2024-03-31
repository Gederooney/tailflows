import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

const { NEXTAUTH_SECRET, GITHUB_AUTH_CLIENT_SECRET, GITHUB_AUTH_CLIENT_ID } = process.env

const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: GITHUB_AUTH_CLIENT_ID!,
      clientSecret: GITHUB_AUTH_CLIENT_SECRET!,
      profile(profile, tokens) {
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          email: profile.email,
          image: profile.avatar_url,
          username: profile.login,
        }
      },
    }),
  ],
  pages: {
    signIn: '',
    signOut: '',
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
