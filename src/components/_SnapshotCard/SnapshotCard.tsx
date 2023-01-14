import { motion } from 'framer-motion'
import {
  MutableRefObject,
  ReactElement,
  useEffect,
  useMemo,
  useState
} from 'react'

import { useStackOrderStore } from '@/stores/stackorder-store'
import { useTabsStore } from '@/stores/tabs-store'

interface SnapshotProps {
  minWidth?: string
  desirableWidth?: string
  maxWidth?: string
  children?: ReactElement
  className?: string
  dragRef: MutableRefObject<null>
  cardId: number
}

const SnapshotCard = ({
  minWidth = '350px',
  desirableWidth = '32vw',
  maxWidth = '600px',
  children = <></>,
  className = '',
  dragRef,
  cardId
}: SnapshotProps) => {
  const closeTab = useTabsStore((state) => state.closeTab)
  const isOpen = useTabsStore((state) => state.isOpen)
  const addPriority = useStackOrderStore((state) => state.addPriority)
  const stackOrder = useStackOrderStore((state) => state.stackOrder)

  const [render, setRender] = useState<boolean>(isOpen[cardId - 1]?.open!)

  // hold reference for effect since i'm using zustand selector
  const memoCardId = useMemo(() => cardId, [cardId])

  useEffect(() => {
    // timer to ensure the animation end
    if (isOpen[memoCardId - 1]?.open!) return setRender(true)

    const myTimeout = setTimeout(() => setRender(false), 300)

    // make it clear itself when desconstruct
    /* eslint-disable consistent-return */
    return () => clearTimeout(myTimeout)
  }, [isOpen, memoCardId])

  return (
    <>
      {render && (
        <motion.div
          style={{
            width: `clamp(${minWidth}, ${desirableWidth}, ${maxWidth})`,
            animation: `${isOpen ? 'fadeIn' : 'fadeOut'} .3s`,
            zIndex: `${stackOrder[memoCardId - 1]!.priority * 10}`
          }}
          className={`flex h-[200px] flex-col rounded-md bg-secondary shadow-xl sm:h-[270px] cursor-grab ${className}`}
          drag
          dragMomentum={false}
          dragConstraints={dragRef}
          onDragStart={() => addPriority(cardId)}
        >
          <div className="flex h-9 w-full items-center gap-1.5 rounded-t-md bg-[#ccc]/5 px-4">
            <button
              onClick={() => closeTab(cardId)}
              className="h-3.5 w-3.5 cursor-pointer rounded-full bg-[#E7503B]"
            ></button>
            <div className="h-3.5 w-3.5 rounded-full bg-[#ECBB38]"></div>
            <div className="h-3.5 w-3.5 rounded-full bg-[#6FD5A8]"></div>
          </div>
          <div className="flex h-[270px] w-full flex-col justify-between rounded-b-md p-4">
            {children}
            <p className="font-bold text-primary">&#62;</p>
          </div>
        </motion.div>
      )}
    </>
  )
}

export default SnapshotCard
