import { MutableRefObject } from 'react'

import { BasicContent, SocialContent } from '../content'
import SnapshotCard from '../SnapshotCard'
import { HookExample } from './HookExample'

interface HookCardProps {
  constraintsRef: MutableRefObject<null>
  addPriority: (id: number) => void
  findPriority: (id: number, defaultPriority: number) => number
  close: (id: number) => void
  isOpen: boolean
  isExpanded: boolean
  open: (id: number) => void
}

export const HookCard = ({
  constraintsRef,
  addPriority,
  findPriority,
  close,
  isExpanded,
  isOpen,
  open
}: HookCardProps) => {
  return (
    <>
      <SnapshotCard
        dragRef={constraintsRef}
        className="relative shadow-2xl"
        handlePriority={addPriority}
        cardId={2}
        cardPriority={findPriority(2, 2)}
        close={close}
        isOpen={isOpen}
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
          <div onClick={() => open(3)}>
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
        close={close}
        isOpen={isExpanded}
      >
        <HookExample />
      </SnapshotCard>
    </>
  )
}
