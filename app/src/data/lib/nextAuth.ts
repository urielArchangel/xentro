
import { NextAuthOptions } from "next-auth";
import TwitterProvider from 'next-auth/providers/twitter'

console.log({ p:process.env.XclientID!,c: process.env.XclientSecret!})

export const nextAuthConfig:NextAuthOptions={
  
    providers:[
   
        TwitterProvider({
            clientId: process.env.XclientID!,
            clientSecret: process.env.XclientSecret!,
            version: '2.0', // Use Twitter API v2
          }),
    ],
    callbacks: {
        async jwt({ token, account }) {
          // Add the Twitter user ID to the token if it exists
          if (account) {
            token.userId = account.providerAccountId; // Twitter's user ID
          }
          return token;
        },
        async session({ session, token }) {
          // Add the Twitter user ID to the session object
          session.user.id = token.userId as string;
          return session;
        },
      },

}
