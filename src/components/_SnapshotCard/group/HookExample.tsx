import { BasicContent } from '../content'

export const HookExample = () => (
  <span>
    <BasicContent
      message="const useInfo = () => {"
      animate={false}
      textSize="text-sm"
    />
    <BasicContent
      className="pl-4"
      message="const github = GIT_URL + lirbre"
      animate={false}
      textSize="text-sm"
    />
    <BasicContent
      className="pl-4"
      message="const linkedin = IN_URL + lirbre"
      animate={false}
      textSize="text-sm"
    />
    <BasicContent
      className="pl-4 pt-4"
      message="return { github, linkedin }"
      animate={false}
      textSize="text-sm"
    />
    <BasicContent message="}" animate={false} textSize="text-sm" />
    <BasicContent
      className="pt-4"
      message="export { useInfo }"
      animate={false}
      textSize="text-sm"
    />
  </span>
)
