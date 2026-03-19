import { RedirectToSignIn, SignedIn } from "@neondatabase/neon-js/auth/react";
import { useAuth } from "../Context/AuthContext";

export default function Onboarding() {
  const { user } = useAuth();

  if (!user) {
    return <RedirectToSignIn />;
  }

  return (
    <SignedIn>
          <h1>Onboarding</h1>
    </SignedIn>
  );
}
