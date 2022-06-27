import { memo } from 'react'

interface BasicContentProps {
  message?: string
  commentMessage?: string | string[]
  className?: string
}

const BasicContent = ({
  className = '',
  message = '',
  commentMessage
}: BasicContentProps) => {
  return (
    <div className={`${className}`}>
      <p className="text-primary">
        {message}
        <span
          className="ml-1.5"
          style={{ animation: 'typing .85s ease-in-out infinite' }}
        >
          &#124;
        </span>
      </p>
      {commentMessage && Array.isArray(commentMessage)
        ? commentMessage!.map((item: string, i: number) => (
            <p key={i} className="text-primary opacity-50">
              &#60;&#45;&#45; {item} &#45;&#45;&#62;
            </p>
          ))
        : commentMessage && (
            <p className="text-primary opacity-50">
              &#60;&#45;&#45; {commentMessage} &#45;&#45;&#62;
            </p>
          )}
    </div>
  )
}

export default memo(BasicContent)
