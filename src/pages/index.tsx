import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

import { BasicContent, SnapshotCard } from '@/components'
import { SocialContent } from '@/components/_SnapshotCard/content'
import { Meta } from '@/layouts'
import { Main } from '@/templates'

const Index = () => {
  const constraintsRef = useRef(null)

  return (
    <Main
      meta={
        <Meta
          title="Breno Lira - Frontend"
          description="Breno Lira portfolio using Parallax effect."
        />
      }
    >
      <motion.div
        ref={constraintsRef}
        className="flex h-screen w-full flex-col items-center justify-center gap-4 overflow-hidden"
      >
        <SnapshotCard className="absolute top-24" dragRef={constraintsRef}>
          <BasicContent
            message={`Hello, I'm Breno.`}
            commentMessage={[
              'A Frontend Developer',
              'React.JS, Next.JS and TypeScript'
            ]}
          />
        </SnapshotCard>

        <div className="absolute bottom-24 flex">
          <SnapshotCard
            className="relative left-12 top-10 hidden md:flex"
            desirableWidth="15vw"
            minWidth="200px"
            maxWidth="500px"
            dragRef={constraintsRef}
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
          <SnapshotCard dragRef={constraintsRef} className="z-10 shadow-2xl">
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
            minWidth="400px"
            maxWidth="500px"
            dragRef={constraintsRef}
          >
            <span>
              <BasicContent
                message="const useInfo = () => {"
                animate={false}
                textSize="text-sm"
              />
              <BasicContent
                className="pl-4"
                message="const github = GIT_URL + lirbre"
                animate={false}
                textSize="text-sm"
              />
              <BasicContent
                className="pl-4"
                message="const linkedin = IN_URL + lirbre"
                animate={false}
                textSize="text-sm"
              />
              <BasicContent
                className="pl-4 pt-4"
                message="return { github, linkedin }"
                animate={false}
                textSize="text-sm"
              />
              <BasicContent message="}" animate={false} textSize="text-sm" />
              <BasicContent
                className="pt-4"
                message="export { useInfo }"
                animate={false}
                textSize="text-sm"
              />
            </span>
          </SnapshotCard>
        </div>
      </motion.div>
    </Main>
  )
}

export default Index
