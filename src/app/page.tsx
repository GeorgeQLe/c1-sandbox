import Navbar from '@/components/navbar';

import OnboardingFlow from './_components/onboarding-flow';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="flex flex-col items-center justify-center pt-2">
        <OnboardingFlow/>
      </main>
    </div>
  );
};