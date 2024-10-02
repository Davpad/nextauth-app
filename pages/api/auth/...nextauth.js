import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { useSession } from 'next-auth/react';


export default NextAuth({
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        })
    ]
});

const ProtectedPage = () => {
    const { data: session } = useSession();
    if (!session) return <p>No tienes acceso</p>;
    return <p>Contenido protegido</p>;
};