import { BasicContent, SnapshotCard } from '@/components'
import { Meta } from '@/layouts'
import { Main } from '@/templates'

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="My Portfolio"
          description="A Frontend portfolio using Parallax effect."
        />
      }
    >
      <div className="container flex h-screen w-screen items-center justify-center">
        <SnapshotCard
          content={<BasicContent message={`Hello, I'm Breno.`} />}
        />
      </div>
    </Main>
  )
}

export default Index
