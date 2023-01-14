import { MutableRefObject } from 'react'

import { useTabsStore } from '@/stores/tabs-store'

import { BasicContent, SocialContent } from '../content'
import SnapshotCard from '../SnapshotCard'
import { HookExample } from './HookExample'

interface HookCardProps {
  constraintsRef: MutableRefObject<null>
}

export const HookCard = ({ constraintsRef }: HookCardProps) => {
  const openTab = useTabsStore((state) => state.openTab)

  return (
    <>
      <SnapshotCard
        dragRef={constraintsRef}
        className="absolute bottom-32 shadow-md lg:right-24"
        cardId={2}
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
              },
              {
                link: 'https://drive.google.com/drive/folders/1f2k0LmXC_D9KkbbW5JGd0PV6DB7Qgbg-?usp=sharing',
                name: 'onClick() => curriculum()'
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
        className="absolute right-36 top-10 hidden md:flex"
        desirableWidth="15vw"
        minWidth="400px"
        maxWidth="500px"
        dragRef={constraintsRef}
        cardId={3}
      >
        <HookExample />
      </SnapshotCard>
    </>
  )
}
