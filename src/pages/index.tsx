import Image from 'next/image'

import { BasicContent, SnapshotCard } from '@/components'
import { SocialContent } from '@/components/_SnapshotCard/content'
import { Meta } from '@/layouts'
import { Main } from '@/templates'

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Breno Lira - Frontend"
          description="Breno Lira portfolio using Parallax effect."
        />
      }
    >
      <div className="container flex h-screen w-screen flex-col items-center justify-center gap-4">
        <SnapshotCard>
          <BasicContent
            message={`Hello, I'm Breno.`}
            commentMessage={[
              'A Frontend Developer',
              'React.JS, Next.JS and TypeScript'
            ]}
          />
        </SnapshotCard>

        <div className="flex">
          <SnapshotCard
            className="relative left-12 top-10 hidden md:flex"
            desirableWidth="15vw"
            minWidth="200px"
            maxWidth="500px"
          >
            <div className="mx-auto pt-8">
              <Image
                src={'/assets/images/icon/react-icon.svg'}
                width={98}
                height={98}
                alt="react icon"
              />
            </div>
          </SnapshotCard>
          <SnapshotCard className="z-10 shadow-2xl">
            <SocialContent
              message={`const { github, linkedin } = useInfo()`}
              commentMessage={[
                {
                  link: 'https://www.linkedin.com/in/lirbre/',
                  name: 'console.log(linkedin)'
                },
                {
                  link: 'https://github.com/lirbre',
                  name: 'console.log(github)'
                }
              ]}
            />
          </SnapshotCard>
          <SnapshotCard
            className="relative right-12 top-10 z-20 hidden md:flex"
            desirableWidth="15vw"
            minWidth="200px"
            maxWidth="500px"
          >
            <BasicContent message="export { useInfo }" />
          </SnapshotCard>
        </div>
      </div>
    </Main>
  )
}

export default Index
