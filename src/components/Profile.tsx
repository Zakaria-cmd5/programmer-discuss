'use client';

import { useSession } from "next-auth/react";

const Profile = () => {
  const session = useSession();

  return (
    <div>
        {session.data?.user ? 'Signed In' : 'Sigend Out'}
    </div>
  )
}

export default Profile