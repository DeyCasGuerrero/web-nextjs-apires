import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { signIn } from "next-auth/react";

export function useAuth() {
    const { data: session, status} = useSession();
    const [userImage, setUserImage] = useState<string | undefined>(undefined);

    useEffect(() => {
        if (session?.user?.image) {
            setUserImage(session.user.image);
        } else {
            setUserImage("https://i.postimg.cc/cJ77K6Rv/AdoPev2.png");
        }
    }, [session]);

    return { session,status, userImage };
}

export { useSession as exportSession, useState as exportUserImage };

export const handleGoogleSignIn = async () => {
    const result = await signIn('google', {
        redirect: true,
        callbackUrl: '/',
    });

    if (result?.error) {
        alert(result.error);
    }
};

export const handleGitHubSignIn = async () => {
    const result = await signIn('github', {
        redirect: true,
        callbackUrl: '/',
    });

    if (result?.error) {
        alert(result.error);
    }
};
