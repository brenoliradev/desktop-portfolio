import { ReactElement } from 'react'

interface SnapshotProps {
  minWidth?: string
  desirableWidth?: string
  maxWidth?: string
  children?: ReactElement
  className?: string
}

const SnapshotCard = ({
  minWidth = '350px',
  desirableWidth = '32vw',
  maxWidth = '600px',
  children = <></>,
  className = ''
}: SnapshotProps) => {
  return (
    <div
      style={{
        width: `clamp(${minWidth}, ${desirableWidth}, ${maxWidth})`
      }}
      className={`flex h-[200px] flex-col rounded-md bg-secondary shadow-xl sm:h-[270px] ${className}`}
    >
      <div className="flex h-9 w-full items-center gap-1.5 rounded-t-md bg-[#ccc]/5 px-4">
        <div className="h-3.5 w-3.5 rounded-full bg-[#E7503B]"></div>
        <div className="h-3.5 w-3.5 rounded-full bg-[#ECBB38]"></div>
        <div className="h-3.5 w-3.5 rounded-full bg-[#6FD5A8]"></div>
      </div>
      <div className="flex h-[270px] w-full flex-col justify-between rounded-b-md p-4">
        {children}
        <p className="font-bold text-primary">&#62;</p>
      </div>
    </div>
  )
}

export default SnapshotCard
