import { motion } from 'framer-motion'
import Image from 'next/image'
import { useCallback, useEffect, useRef } from 'react'

import { BasicContent, SnapshotCard } from '@/components'
import { SocialContent } from '@/components/_SnapshotCard/content'
import { useStack } from '@/hooks'
import { Meta } from '@/layouts'
import { Main } from '@/templates'

const Index = () => {
  const constraintsRef = useRef(null)
  const { addPriority, stackOrder } = useStack()

  const findPriority = useCallback(
    (id: number, defaultPriority: number) => {
      const myItem = stackOrder.find((item) => item.id === id)

      return myItem?.priority || defaultPriority
    },
    [stackOrder]
  )

  useEffect(() => {
    console.log('my stack order -> ', stackOrder)
  }, [stackOrder])

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
        <SnapshotCard
          className="absolute top-24"
          dragRef={constraintsRef}
          cardId={1}
          cardPriority={findPriority(1, 1)}
          handlePriority={addPriority}
        >
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
            handlePriority={addPriority}
            cardId={2}
            cardPriority={findPriority(2, 1)}
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
          <SnapshotCard
            dragRef={constraintsRef}
            className="shadow-2xl"
            handlePriority={addPriority}
            cardId={3}
            cardPriority={findPriority(3, 2)}
          >
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
            className="relative right-12 top-10 hidden md:flex"
            desirableWidth="15vw"
            minWidth="400px"
            maxWidth="500px"
            dragRef={constraintsRef}
            handlePriority={addPriority}
            cardId={4}
            cardPriority={findPriority(4, 3)}
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
