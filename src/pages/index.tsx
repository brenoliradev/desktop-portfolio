import { motion } from 'framer-motion'
import Image from 'next/image'
import { useCallback, useRef, useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { MdPermContactCalendar } from 'react-icons/md'

import { BasicContent, SnapshotCard } from '@/components'
import { HookCard } from '@/components/_SnapshotCard/group'
import { IconWithTooltip } from '@/components/IconWithTooltip'
import { useStack } from '@/hooks'
import { Meta } from '@/layouts'
import { Main } from '@/templates'

const Index = () => {
  const constraintsRef = useRef(null)
  const { addPriority, stackOrder } = useStack()
  const [isOpen, setIsOpen] = useState<any>([
    { id: 1, open: false },
    { id: 2, open: false },
    { id: 3, open: false }
  ])

  const findPriority = useCallback(
    (id: number, defaultPriority: number) => {
      const myItem = stackOrder.find((item) => item.id === id)

      return myItem?.priority || defaultPriority
    },
    [stackOrder]
  )

  const open = (id: number) => {
    const sliceIndex = isOpen.findIndex((item: any) => item.id === id)
    if (sliceIndex !== -1) {
      const copy = [...isOpen]
      copy[sliceIndex].open = true
      setIsOpen(copy)
      return
    }

    setIsOpen([...isOpen, { id, open: true }])
  }

  const close = (id: number) => {
    const sliceIndex = isOpen.findIndex((item: any) => item.id === id)
    const copy = [...isOpen]

    copy[sliceIndex].open = false

    setIsOpen(copy)
  }

  return (
    <Main
      meta={
        <Meta
          title="Breno Lira - Frontend"
          description="Breno Lira portfolio."
        />
      }
    >
      <IconWithTooltip
        content="Click to open an profile tab"
        className="top-4 left-4"
        icon={<CgProfile color="#f2f2f2" size={64} />}
      />
      <IconWithTooltip
        content="Click to open an profile tab"
        className="bottom-4 right-4"
        icon={<MdPermContactCalendar color="#f2f2f2" size={64} />}
      />
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
          close={close}
          isOpen={isOpen[0].open}
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
            width={76}
            height={76}
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
            close={close}
            isOpen={isOpen[1].open}
            isExpanded={isOpen[2].open}
            open={open}
          />
        </div>
      </motion.div>
    </Main>
  )
}

export default Index
