import { AuthenticatedApp } from "@app/AuthenticatedApp"
import { UnauthenticatedApp } from "@app/UnauthenticatedApp"
import { Heading } from "@styled"
import { ActionsMenu } from "@nav"
import { useAuth } from "@hooks"
import { Breadcrumbs } from "@ui"
import { useCrumbs } from "@hooks"

function App() {
  const { isAuthenticated } = useAuth()
  const crumbsContext = useCrumbs()

  return (
    <div className="max-w-screen min-h-screen bg-slate-900">
      <div className="flex justify-end p-4 md:justify-between">
        <div className="hidden justify-start md:inline-block">
          <Breadcrumbs crumbs={crumbsContext.crumbs} />
        </div>
        <div>
          <ActionsMenu />
        </div>
      </div>
      <div className="container mx-auto px-4 py-3 lg:pt-6 xl:px-14 2xl:px-16">
        <Heading className="mb-2 lg:mb-6">Issue Tracker</Heading>
        {isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </div>
    </div>
  )
}

export default App
