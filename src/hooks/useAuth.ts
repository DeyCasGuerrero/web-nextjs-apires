import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export function useAuthGmail() {
    const { data: session } = useSession();
    const [userImage, setUserImage] = useState<string | undefined>(undefined);

    useEffect(() => {
        if (session?.user?.image) {
            setUserImage(session.user.image);
        } else {
            setUserImage(undefined);
        }
    }, [session]);

    return { session, userImage };
}


export { useSession as exportSession, useState as exportUserImage };