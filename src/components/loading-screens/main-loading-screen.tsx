"use client"

import { useEffect, useState } from "react"

interface LoadingScreenProps {
  isLoading: boolean
  loadingSteps?: Array<{
    key: string
    label: string
    completed: boolean
  }>
  onComplete?: () => void
}

export function LoadingScreen({ isLoading, loadingSteps = [], onComplete }: LoadingScreenProps) {
  const [showLogo, setShowLogo] = useState(true)
  const [showText, setShowText] = useState(true)
  const [showSubtext, setShowSubtext] = useState(false)

  // Calculate progress based on completed steps
  const completedSteps = loadingSteps.filter((step) => step.completed).length
  const totalSteps = loadingSteps.length
  const progress = totalSteps > 0 ? (completedSteps / totalSteps) * 100 : 0

  // Get current loading message
  const getCurrentLoadingMessage = () => {
    const currentStep = loadingSteps.find((step) => !step.completed)
    if (currentStep) {
      return currentStep.label
    }

    if (completedSteps === totalSteps && totalSteps > 0) {
      return "Almost ready!"
    }

    return "Loading..."
  }

  useEffect(() => {
    // Logo animation
    const logoTimer = setTimeout(() => setShowLogo(true), 0)

    // Text animations
    const textTimer = setTimeout(() => setShowText(true), 1)
    const subtextTimer = setTimeout(() => setShowSubtext(true), 2)

    return () => {
      clearTimeout(logoTimer)
      clearTimeout(textTimer)
      clearTimeout(subtextTimer)
    }
  }, [])

  // Handle completion when all steps are done
  useEffect(() => {
    if (!isLoading && completedSteps === totalSteps && totalSteps > 0) {
      const completionTimer = setTimeout(() => {
        if (onComplete) {
          onComplete()
        }
      }, 500) // Small delay for better UX

      return () => clearTimeout(completionTimer)
    }
  }, [isLoading, completedSteps, totalSteps, onComplete])

  // Don't render if not loading and no steps provided
  if (!isLoading && totalSteps === 0) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-primary/20 via-background to-primary/10">
      {/* Animated Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-primary/5 rounded-full animate-ping delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo Animation */}
        <div
          className={`mb-8 transition-all duration-1000 ease-out ${
            showLogo ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-50 translate-y-8"
          }`}
        >
          <div className="relative">
            {/* Outer Ring */}
            <div className="w-24 h-24 rounded-full border-4 border-primary/20 animate-spin-slow">
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-primary-foreground">G</span>
              </div>
            </div>

            {/* Pulsing Ring */}
            <div className="absolute inset-0 w-24 h-24 rounded-full border-2 border-primary animate-ping opacity-20"></div>
          </div>
        </div>

        {/* App Name */}
        <div
          className={`mb-2 transition-all duration-800 ease-out delay-300 ${
            showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h1 className="text-4xl font-bold text-foreground tracking-tight">Gefter</h1>
        </div>

        {/* Amharic Subtitle */}
        <div
          className={`mb-8 transition-all duration-800 ease-out delay-500 ${
            showSubtext ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-xl text-primary font-medium">ገፍትር</p>
        </div>

        {/* Loading Bar */}
        <div className="w-64 mb-4">
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground animate-pulse">{getCurrentLoadingMessage()}</p>
        </div>

        {/* Floating Dots Animation */}
        <div className="absolute -bottom-20 flex space-x-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200"></div>
        </div>
      </div>

      {/* Bottom Branding */}
      <div className="absolute bottom-8 text-center">
        <p className="text-xs text-muted-foreground">Track • Split • Settle</p>
      </div>
    </div>
  )
}
