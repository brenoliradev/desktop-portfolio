import { motion } from 'framer-motion'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { CgProfile } from 'react-icons/cg'

import { BasicContent, SnapshotCard } from '@/components'
import { HookCard } from '@/components/_SnapshotCard/group'
import { useStack } from '@/hooks'
import { Meta } from '@/layouts'
import { Main } from '@/templates'

const Index = () => {
  const constraintsRef = useRef(null)
  const { addPriority, stackOrder } = useStack()
  const [isOpen, setIsOpen] = useState<any>([])

  const findPriority = useCallback(
    (id: number, defaultPriority: number) => {
      const myItem = stackOrder.find((item) => item.id === id)

      return myItem?.priority || defaultPriority
    },
    [stackOrder]
  )

  const open = (id: number) => {
    setIsOpen([...isOpen, { id, open: true }])
  }

  useEffect(() => {
    console.log('my open tabs -> ', isOpen)
    console.log()
  }, [isOpen])

  return (
    <Main
      meta={
        <Meta
          title="Breno Lira - Frontend"
          description="Breno Lira portfolio."
        />
      }
    >
      <div
        onClick={() => open(1)}
        className="absolute top-4 left-4 cursor-pointer rounded-md bg-secondary p-1.5 drop-shadow-sm"
      >
        <CgProfile color="#f2f2f2" size={64} />
      </div>
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
          <span>
            <BasicContent
              message={`Hello, I'm Breno.`}
              commentMessage={[
                'A Frontend Developer',
                'React.JS, Next.JS and TypeScript'
              ]}
              animate={false}
            />
            <BasicContent className="pt-4" message={``} animate={true} />
          </span>
        </SnapshotCard>

        <motion.div
          drag
          dragConstraints={constraintsRef}
          className="backdrop mx-auto flex cursor-grab items-center justify-center rounded-full bg-secondary p-2 drop-shadow-md"
        >
          <Image
            src={'/assets/images/icon/react-icon.svg'}
            width={98}
            height={98}
            alt="react icon"
            className="cursor-grab"
            draggable={false}
          />
        </motion.div>

        <div className="absolute bottom-24 flex">
          <HookCard
            addPriority={addPriority}
            constraintsRef={constraintsRef}
            findPriority={findPriority}
          />
        </div>
      </motion.div>
    </Main>
  )
}

export default Index
