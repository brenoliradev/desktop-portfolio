import { Tooltip } from 'flowbite-react'
import { ReactElement } from 'react'

import { useTabsStore } from '@/stores/tabs-store'

export const IconWithTooltip = ({
  icon,
  className = '',
  content,
  tabId
}: {
  icon: ReactElement
  className?: string
  content: string
  tabId: number
}) => {
  const openTab = useTabsStore((state) => state.openTab)

  return (
    <div
      className={`absolute cursor-pointer ${className}`}
      onClick={() => openTab(tabId)}
    >
      <Tooltip
        content={content}
        placement="bottom"
        className="color-primary w-60 bg-secondary text-center"
      >
        <div className="rounded-md bg-secondary p-1.5 drop-shadow-sm">
          {icon}
        </div>
      </Tooltip>
    </div>
  )
}
