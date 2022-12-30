import { Toast } from 'flowbite-react'
import { useEffect, useState } from 'react'
import { MdWarning } from 'react-icons/md'

export const ToastComponent = () => {
  const [hidden, setHidden] = useState<boolean>(true)

  useEffect(() => {
    const autoClose = setTimeout(() => setHidden(false), 7000)

    // cleanup timeout
    return () => {
      clearTimeout(autoClose)
    }
  }, [])

  return (
    <>
      {hidden ? (
        <Toast className="absolute top-4 right-4 bg-secondary duration-150">
          <div className="dark:text-blue-200 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg">
            <MdWarning size={32} color="yellow" />
          </div>
          <div className="ml-3 text-sm font-normal">
            Try interacting with the icons!
          </div>
          <Toast.Toggle />
        </Toast>
      ) : (
        <></>
      )}
    </>
  )
}
