import { useMemo } from 'react'

interface BasicContentProps {
  message?: string
  commentMessage?: string | string[]
  className?: string
  animate?: boolean
  textSize?: string
}

const BasicContent = ({
  className = '',
  message = '',
  commentMessage,
  animate = true,
  textSize = 'text-base'
}: BasicContentProps) => {
  const memoizedAnimate = useMemo(
    () =>
      animate && (
        <span
          className="ml-1.5"
          style={{ animation: 'typing .85s ease-in-out infinite' }}
        >
          &#124;
        </span>
      ),
    [animate]
  )

  return (
    <div className={`${className}`}>
      {message && (
        <p className={`text-primary ${textSize}`}>
          {message}
          {memoizedAnimate}
        </p>
      )}
      {commentMessage && Array.isArray(commentMessage)
        ? commentMessage!.map((item: string, i: number) => (
            <p key={i} className={`text-primary ${textSize} opacity-50`}>
              &#60;&#45;&#45; {item} &#45;&#45;&#62;
            </p>
          ))
        : commentMessage && (
            <p className={`text-primary ${textSize} opacity-50`}>
              &#60;&#45;&#45; {commentMessage} &#45;&#45;&#62;
            </p>
          )}
    </div>
  )
}

export default BasicContent
