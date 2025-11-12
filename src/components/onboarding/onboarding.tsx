"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { useTelegram } from "@/shared/providers/telegram-miniapp-provider";
import { useUserAction } from "@/user/hooks/user/useUserAction";
import { cn } from "@/lib/cn";

type OnboardingScreen = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  emoji: string;
  accentClass: string;
};

const onboardingScreens: OnboardingScreen[] = [
  {
    id: 1,
    title: "Welcome to Gefter",
    subtitle: "ገፍትር",
    description: "Track informal debt, split bills, and manage peer-to-peer money with your friends seamlessly.",
    emoji: "👋",
    accentClass: "bg-primary/15 text-primary",
  },
  {
    id: 2,
    title: "Split Bills Easily",
    subtitle: "Share expenses",
    description: "Split restaurant bills, rent, utilities, and more with your friends. Everyone pays their fair share.",
    emoji: "🧾",
    accentClass: "bg-wise-green/20 text-wise-green",
  },
  {
    id: 3,
    title: "Stay in Control",
    subtitle: "Stay organised",
    description: "Keep track of who owes you money and who you owe. Get reminders and settle up without the awkwardness.",
    emoji: "💰",
    accentClass: "bg-accent/20 text-accent",
  },
];

export function Onboarding() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const router = useRouter();
  const { user: currentTGUser, isLoading: isTelegramLoading, error: telegramError } = useTelegram();
  const { registerUser, isRegisteringUser, registerUserError } = useUserAction();

  const totalScreens = onboardingScreens.length;
  const activeScreen = onboardingScreens[currentScreen];
  const isLastScreen = currentScreen === totalScreens - 1;

  const userDisplayName = useMemo(() => {
    if (!currentTGUser) {
      return "there";
    }

    return currentTGUser.first_name ?? currentTGUser.last_name ?? currentTGUser.username ?? "there";
  }, [currentTGUser]);

  const handleComplete = async () => {
    if (isRegisteringUser) {
      return;
    }

    if (!currentTGUser) {
      router.replace("/");
      return;
    }

    try {
      await registerUser({ user: currentTGUser });
      router.replace("/");
    } catch (error) {
      console.error("Failed to register user", error);
    }
  };

  const handleNext = async () => {
    if (currentScreen < totalScreens - 1) {
      setCurrentScreen((previous) => Math.min(previous + 1, totalScreens - 1));
      return;
    }

    await handleComplete();
  };

  const handlePrevious = () => {
    setCurrentScreen((previous) => Math.max(previous - 1, 0));
  };

  const handleSkip = async () => {
    await handleComplete();
  };

  if (isTelegramLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background-light text-text-primary">
        <p className="text-sm text-text-secondary">Preparing your onboarding...</p>
      </div>
    );
  }

  if (telegramError) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background-light px-4 text-center text-text-primary">
        <div className="max-w-sm space-y-4 rounded-2xl bg-card-light p-6 shadow-elevated-md">
          <p className="text-lg font-semibold">We couldn&apos;t connect to Telegram</p>
          <p className="text-sm text-text-secondary">
            Please refresh the page or re-open the mini app to try again.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-background-light px-4 py-6 text-text-primary transition-colors">
      <header className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white shadow-elevated-sm">
            <span className="text-lg font-bold">G</span>
          </div>
          <span className="text-lg font-semibold text-text-primary">Gefter</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleSkip}
          className="text-sm font-medium text-text-secondary hover:text-text-primary"
          disabled={isRegisteringUser}
        >
          Skip
        </Button>
      </header>

      <div className="mb-8 flex justify-center gap-2">
        {onboardingScreens.map((screen) => {
          const isActive = screen.id === activeScreen.id;
          return (
            <span
              key={screen.id}
              aria-hidden="true"
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                isActive ? "w-8 bg-accent" : "w-2 bg-card-light",
              )}
            />
          );
        })}
      </div>

      <main className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-sm rounded-2xl bg-card-light p-8 text-center shadow-elevated-md">
          <div
            className={cn(
              "mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full text-4xl",
              activeScreen.accentClass,
            )}
          >
            <span>{activeScreen.emoji}</span>
          </div>

          <h1 className="text-2xl font-bold leading-tight text-text-primary">{activeScreen.title}</h1>
          <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-text-secondary">
            {activeScreen.subtitle}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-text-secondary">{activeScreen.description}</p>

          {currentScreen === 0 ? (
            <div className="mt-6 rounded-xl bg-card-light-alt p-4 text-left">
              <p className="text-sm font-medium">
                Hello, <span className="font-semibold text-text-primary">{userDisplayName}</span> 👋
              </p>
              <p className="mt-1 text-xs text-text-secondary">
                Let&apos;s help you stay on top of shared expenses with friends and family.
              </p>
            </div>
          ) : null}

          {registerUserError ? (
            <div className="mt-4 rounded-lg bg-wise-red/10 p-3 text-left text-sm text-wise-red">
              Something went wrong while getting you set up. Please try again.
            </div>
          ) : null}
        </div>
      </main>

      <footer className="mt-8 space-y-3">
        <Button
          variant="accent"
          size="lg"
          fullWidth
          onClick={handleNext}
          disabled={isRegisteringUser}
          className="flex items-center justify-center gap-2"
        >
          {isLastScreen ? (isRegisteringUser ? "Finishing..." : "Get Started") : "Next"}
          {!isLastScreen ? <span className="material-symbols-outlined text-xl">arrow_forward</span> : null}
        </Button>

        {currentScreen > 0 ? (
          <Button
            variant="secondary"
            size="md"
            fullWidth
            onClick={handlePrevious}
            disabled={isRegisteringUser}
            className="flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-xl">arrow_back</span>
            Back
          </Button>
        ) : null}

        <p className="text-center text-xs text-text-secondary">
          {currentScreen + 1} of {totalScreens}
        </p>
      </footer>
    </div>
  );
}
