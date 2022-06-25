import { BasicContent, SnapshotCard } from '@/components'
import { Meta } from '@/layouts'
import { Main } from '@/templates'

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Breno Lira - Frontend"
          description="Breno Lira portfolio using Parallax effect."
        />
      }
    >
      <div className="container flex h-screen w-screen items-center justify-center">
        <SnapshotCard
          content={
            <BasicContent
              message={`Hello, I'm Breno.`}
              commentMessage={[
                'A Frontend Developer',
                'React.JS, Next.JS and TypeScript'
              ]}
            />
          }
        />
      </div>
    </Main>
  )
}

export default Index
