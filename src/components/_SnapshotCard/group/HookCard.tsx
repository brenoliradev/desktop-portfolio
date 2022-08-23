import { MutableRefObject } from 'react'

import { SocialContent } from '../content'
import SnapshotCard from '../SnapshotCard'
import { HookExample } from './HookExample'

interface HookCardProps {
  constraintsRef: MutableRefObject<null>
  addPriority: (id: number) => void
  findPriority: (id: number, defaultPriority: number) => number
  close: (id: number) => void
}

export const HookCard = ({
  constraintsRef,
  addPriority,
  findPriority,
  close
}: HookCardProps) => {
  return (
    <>
      <SnapshotCard
        dragRef={constraintsRef}
        className="shadow-2xl"
        handlePriority={addPriority}
        cardId={3}
        cardPriority={findPriority(3, 2)}
        close={close}
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
        close={close}
      >
        <HookExample />
      </SnapshotCard>
    </>
  )
}
