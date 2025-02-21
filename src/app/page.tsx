import Navbar from '@/components/navbar';

import OnboardingFlow from './_components/onboarding-flow';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="flex flex-1 flex-col h-[calc(100vh-64px)] items-center justify-center">
        <OnboardingFlow />
      </main>
    </div>
  );
};