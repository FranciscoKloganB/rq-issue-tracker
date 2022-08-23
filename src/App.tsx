import { Link, Route, Routes, useMatch } from "react-router-dom"

import { AppContainer, Heading } from "@components/styled"
import AddIssue from "@pages/AddIssue"
import Issue from "@pages/Issue"
import Issues from "@pages/Issues"

function App() {
  const isRootPath = useMatch({ path: "/", end: true })
  return (
    <AppContainer>
      {!isRootPath ? <Link to="/">Back to Issues List</Link> : <span>&nbsp;</span>}
      <Heading className="mb-2 lg:mb-6">Issue Tracker</Heading>
      <Routes>
        <Route path="/" element={<Issues />} />
        <Route path="/add" element={<AddIssue />} />
        <Route path="/issue/:number" element={<Issue />} />
      </Routes>
    </AppContainer>
  )
}

export default App
