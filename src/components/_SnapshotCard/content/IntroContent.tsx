interface BasicContentProps {
  message?: string
  className?: string
}

const BasicContent = ({ className = '', message = '' }: BasicContentProps) => {
  return (
    <div className={`${className}`}>
      <p className="text-[#f2f2f2]">{message}</p>
    </div>
  )
}

export default BasicContent
