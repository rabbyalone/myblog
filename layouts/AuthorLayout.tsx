import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = content

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <section id="about-me" className="bg-white py-5 px-4 md:px-5 lg:px-5 xl:px-5 relative">
          <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0 ">
            <div className="flex flex-col items-center space-x-2 pt-8 relative z-10">
              {avatar && (
                <Image
                  src={avatar}
                  alt="avatar"
                  width={192}
                  height={192}
                  className="h-48 w-48 rounded-full"
                />
              )}
              <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight text-gray-800">
                {name}
              </h3>
              <div className="text-gray-900 dark:text-gray-700">{occupation}</div>
              <div className="text-gray-900 dark:text-gray-700">{company}</div>
              <div className="flex space-x-3 pt-6">
                <SocialIcon kind="mail" href={`mailto:${email}`} />
                <SocialIcon kind="github" href={github} />
                <SocialIcon kind="linkedin" href={linkedin} />
                <SocialIcon kind="twitter" href={twitter} />
              </div>
            </div>
            <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
              <div className="container mx-auto text-center relative z-10">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6">
                  Hi, I'm Rabby Hasan
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8">
                  Senior Full Stack .NET Engineer
                </p>
              </div>
              <div className="text-justify !list-none relative z-10 porse"> {children}</div>
              {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 z-0"></div> */}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
const SkillItem = ({ icon, label }) => {
  return (
    <div className="flex items-center">
      {icon}
      <span className="ml-2">{label}</span>
    </div>
  )
}
