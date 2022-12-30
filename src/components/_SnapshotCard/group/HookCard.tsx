import { MutableRefObject } from 'react'

import { useTabsStore } from '@/stores/tabs-store'

import { BasicContent, SocialContent } from '../content'
import SnapshotCard from '../SnapshotCard'
import { HookExample } from './HookExample'

interface HookCardProps {
  constraintsRef: MutableRefObject<null>
  addPriority: (id: number) => void
  findPriority: (id: number, defaultPriority: number) => number
}

export const HookCard = ({
  constraintsRef,
  addPriority,
  findPriority
}: HookCardProps) => {
  const openTab = useTabsStore((state) => state.openTab)

  return (
    <div className="relative flex">
      <SnapshotCard
        dragRef={constraintsRef}
        className="relative shadow-md"
        handlePriority={addPriority}
        cardId={2}
        cardPriority={findPriority(2, 2)}
      >
        <>
          <SocialContent
            message={`const { github, linkedin, getInfo } = useInfo()`}
            commentMessage={[
              {
                link: 'https://www.linkedin.com/in/lirbre/',
                name: 'onClick() => linkedin()'
              },
              {
                link: 'https://github.com/lirbre',
                name: 'onClick() => github()'
              }
            ]}
          />
          <div onClick={() => openTab(3)}>
            <BasicContent
              message={`getInfo()`}
              animate={false}
              className="cursor-pointer hover:opacity-90"
            />
          </div>
        </>
      </SnapshotCard>
      <SnapshotCard
        className="relative right-12 top-10 hidden md:flex"
        desirableWidth="15vw"
        minWidth="400px"
        maxWidth="500px"
        dragRef={constraintsRef}
        handlePriority={addPriority}
        cardId={3}
        cardPriority={findPriority(3, 3)}
      >
        <HookExample />
      </SnapshotCard>
    </div>
  )
}
