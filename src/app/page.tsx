import { Button } from "@nextui-org/react";
import * as actions from "@/actions";
import Profile from "@/components/Profile";

export default async function Home() {
  return (
    <div>
      <form action={actions.signIn}>
        <Button type="submit">Signin</Button>
      </form>

      <form action={actions.signOut}>
        <Button type="submit">Signout</Button>
      </form>

      <Profile />
    </div>
  );
}
