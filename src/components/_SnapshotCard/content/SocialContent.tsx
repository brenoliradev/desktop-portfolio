import { memo } from 'react'

interface SocialContentProps {
  message?: string
  commentMessage?: SocialProps[]
  className?: string
}

interface SocialProps {
  link: string
  name: string
}

const SocialContent = ({
  className = '',
  message = '',
  commentMessage
}: SocialContentProps) => {
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
      <div className="flex flex-col">
        {commentMessage &&
          Array.isArray(commentMessage) &&
          commentMessage!.map(({ link, name }: SocialProps, i: number) => (
            <a
              href={link}
              key={i}
              className="cursor-pointer text-primary opacity-50 hover:opacity-60"
              target="_blank"
              rel="noreferrer"
            >
              &#60;&#45;&#45; {name} &#45;&#45;&#62;
            </a>
          ))}
      </div>
    </div>
  )
}

export default memo(SocialContent)
