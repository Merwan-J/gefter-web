"use client"
import { createContext, useContext, useEffect, useState } from "react";
import { init, useLaunchParams, User as TelegramUser, useRawInitData } from '@telegram-apps/sdk-react';
import { LoadingScreen } from "@/components/loading-screens/main-loading-screen";

interface TelegramContextType {
  user: TelegramUser | null;
  rawInitData: string | null;
  isLoading: boolean;
  error: Error | null;
  isInitialized: boolean;
}

const TelegramContext = createContext<TelegramContextType>({
  user: null,
  rawInitData: null,
  isLoading: true,
  error: null,
  isInitialized: false,
});

export const useTelegram = () => {
  const context = useContext(TelegramContext);
  if (!context) {
    throw new Error('useTelegram must be used within a TelegramProvider');
  }
  return context;
};

function ClientTelegramProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [user, setUser] = useState<TelegramUser | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  
  const launchParams = useLaunchParams();
  const rawInitData = useRawInitData() || null;

  useEffect(() => {
    async function initializeTelegram() {
      try {
        await init();
        setIsInitialized(true);
        setUser(launchParams?.tgWebAppData?.user as TelegramUser);
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to initialize'));
        setIsLoading(false);
      }
    }

    initializeTelegram();
  }, [launchParams]);

  return (
    <TelegramContext.Provider 
      value={{ 
        user, 
        isLoading, 
        error, 
        isInitialized, 
        rawInitData 
      }}
    >
      {children}
    </TelegramContext.Provider>
  );
}

export function TelegramProvider({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <LoadingScreen 
        isLoading={true}
        loadingSteps={[
          {
            key: "telegram-connection",
            label: "Setting up Telegram connection...",
            completed: false
          }
        ]}
      />
    );  }

  return <ClientTelegramProvider>{children}</ClientTelegramProvider>;
}


