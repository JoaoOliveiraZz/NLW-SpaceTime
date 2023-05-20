import { CopyRight } from '@/components/Copyright'
import { HeroSection } from '@/components/HeroSection'
import { Signin } from '@/components/Signin'
import { EmptyMemories } from '@/components/EmptyMemories'
import { cookies } from 'next/headers'
import { Profile } from '@/components/Profile'
export default function Home() {
  const isAuthenticated = cookies().has('token')

  return (
    <main className="grid min-h-screen grid-cols-2 ">
      {/* Left Session */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
        {/* Stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

        {isAuthenticated ? <Profile /> : <Signin />}

        <HeroSection />

        <CopyRight />
      </div>

      {/* Right Session */}
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <EmptyMemories />
      </div>
    </main>
  )
}
