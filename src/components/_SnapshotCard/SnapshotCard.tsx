import { ReactElement } from 'react'

interface SnapshotProps {
  minWidth?: string
  desirableWidth?: string
  maxWidth?: string
  content?: ReactElement
}

const SnapshotCard = ({
  minWidth = '600px',
  desirableWidth = '15vw',
  maxWidth = '900px',
  content = <></>
}: SnapshotProps) => {
  return (
    <div
      style={{
        width: `clamp(${minWidth}, ${desirableWidth}, ${maxWidth})`
      }}
      className="flex h-[300px] flex-col rounded-md bg-secondary shadow-xl"
    >
      <div className="flex h-9 w-full items-center gap-1.5 rounded-t-md bg-[#ccc]/5 px-4">
        <div className="h-3.5 w-3.5 rounded-full bg-[#E7503B]"></div>
        <div className="h-3.5 w-3.5 rounded-full bg-[#ECBB38]"></div>
        <div className="h-3.5 w-3.5 rounded-full bg-[#6FD5A8]"></div>
      </div>
      <div className="h-[270px] w-full rounded-b-md p-4">{content}</div>
    </div>
  )
}

export default SnapshotCard
