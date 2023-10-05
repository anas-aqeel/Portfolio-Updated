import { Metadata } from 'next'
import { BiDetail } from 'react-icons/bi'
import Social from '../components/shared/Social'
import { Slide } from '../animation/Slide'
import Diaries from '../components/pages/Diaries'

export const metadata: Metadata = {
  title: 'Diary | Anas Aqeel',
  metadataBase: new URL('https://ai-developer.vercel.app/diary'),
  description: "Read latest stories from Anas Aqeel's Diary",
  openGraph: {
    title: 'Diary | Anas Aqeel',
    url: 'https://ai-developer.vercel.app/diary',
    description: "Read latest stories from Anas Aqeel's Diary",
    images:
      'https://res.cloudinary.com/victoreke/image/upload/v1692636087/victoreke/blog.png',
  },
}

export default async function Diary() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <section className="max-w-[950px] mb-12 pb-12 border-b dark:border-zinc-800 border-zinc-100">
        <div className="max-w-2xl">
          <Slide>
            <h1 className="font-incognito font-black tracking-tight sm:text-5xl text-3xl mb-6 lg:leading-[3.7rem]">
              Diary
            </h1>
            <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed mb-8">
              Welcome to my personal diary domain where I share personal stories
              about things I&apos;ve learned, projects I&apos;m hacking on and
              just general findings. I also write for other publications.
            </p>

            <Social type="publication" />
          </Slide>
        </div>
      </section>

      <Slide delay={0.1}>
        <div className="flex items-center gap-x-3 mb-8">
          <BiDetail />
          <h2 className="text-xl font-semibold tracking-tight">Explore All</h2>
        </div>
        <Diaries />
      </Slide>
    </main>
  )
}
