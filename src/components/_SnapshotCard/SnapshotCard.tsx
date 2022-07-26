import { motion } from 'framer-motion'
import {
  MutableRefObject,
  ReactElement,
  useCallback,
  useEffect,
  useState
} from 'react'

interface SnapshotProps {
  minWidth?: string
  desirableWidth?: string
  maxWidth?: string
  children?: ReactElement
  className?: string
  dragRef: MutableRefObject<null>
}

const SnapshotCard = ({
  minWidth = '350px',
  desirableWidth = '32vw',
  maxWidth = '600px',
  children = <></>,
  className = '',
  dragRef
}: SnapshotProps) => {
  const [visibility, setVisibility] = useState<boolean>(true)
  const [render, setRender] = useState<boolean>(true)

  const close = useCallback(() => setVisibility(false), [visibility])

  useEffect(() => {
    // timer to ensure the animation end
    if (visibility) return

    const myTimeout = setTimeout(() => setRender(false), 300)

    // make it clear itself when desconstruct
    /* eslint-disable consistent-return */
    return () => clearTimeout(myTimeout)
  }, [visibility])

  return (
    <motion.div
      style={{
        width: `clamp(${minWidth}, ${desirableWidth}, ${maxWidth})`,
        animation: `${visibility ? 'fadeIn' : 'fadeOut'} .3s`
      }}
      className={`flex h-[200px] flex-col rounded-md bg-secondary shadow-xl sm:h-[270px] cursor-grab ${
        render ? '' : 'hidden md:hidden'
      } ${className}`}
      drag
      dragMomentum={false}
      dragConstraints={dragRef}
    >
      <div className="flex h-9 w-full items-center gap-1.5 rounded-t-md bg-[#ccc]/5 px-4">
        <div
          onClick={close}
          className="h-3.5 w-3.5 cursor-pointer rounded-full bg-[#E7503B]"
        ></div>
        <div className="h-3.5 w-3.5 rounded-full bg-[#ECBB38]"></div>
        <div className="h-3.5 w-3.5 rounded-full bg-[#6FD5A8]"></div>
      </div>
      <div className="flex h-[270px] w-full flex-col justify-between rounded-b-md p-4">
        {children}
        <p className="font-bold text-primary">&#62;</p>
      </div>
    </motion.div>
  )
}

export default SnapshotCard
