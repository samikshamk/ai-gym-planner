import { RedirectToSignIn, SignedIn } from "@neondatabase/neon-js/auth/react";
import { useAuth } from "../Context/AuthContext";
import { goalOptions, experienceOptions, daysOptions, sessionOptions, equipmentOptions, splitOptions } from "../constants/options";
import { Card } from "../Components/UI/Card";
import { Select } from "../Components/UI/Select";
import { Textarea } from "../Components/UI/Textarea";
import { Button } from "../Components/UI/Button";
import { ArrowRight } from "lucide-react";

export default function Onboarding() {
  const { user } = useAuth();

  if (!user) {
    return <RedirectToSignIn />;
  }

  return (
    <SignedIn>
      <div className="min-h-screen pt-24 pb-12 px-6">
        <div className="max-w-xl mx-auto">
          {/* Progress Indicator */}
          {/* Step 1:Questionaire */}
          <Card variant="bordered">
            <h1 className="text-2xl font-bold mb-2">
                Tell Us About Yourself
              </h1>
              <p className="text-[var(--color-muted)] mb-6">
                Help us create the perfect plan for you.
              </p>
              <form className="space-y-5">
                <Select
                  id="goal"
                  label="What's your primary goal?"
                  options={goalOptions}
                />
                <Select
                  id="experience"
                  label="Training experience"
                  options={experienceOptions}
                />
                <div className="grid grid-cols-2 gap-4">
                  <Select
                    id="daysPerWeek"
                    label="Days per week"
                    options={daysOptions}
                  />
                  <Select
                    id="sessionLength"
                    label="Session length"
                    options={sessionOptions}
                  />
                </div>
                <Select
                  id="equipment"
                  label="Equipment access"
                  options={equipmentOptions}
                />

                <Select
                  id="preferredSplit"
                  label="Preferred training split"
                  options={splitOptions}
                />

                <Textarea
                 id="injuries"
                  label="Any injuries or limitations? (optional)"
                  placeholder="E.g., lower back issues, shoulder impingement..."
                  rows={3}
                />
                <div className="flex gap-3 pt-2">
                  <Button type="submit" className="flex-1 gap-2">
                    Generate My Plan <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>

              </form>
          </Card>
          {/* Step 2:Generating  */}

        </div>
      </div>
    </SignedIn>
  );
}
