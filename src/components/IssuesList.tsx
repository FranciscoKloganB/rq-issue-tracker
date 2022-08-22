import { useIssues } from "@hooks"
import { IssueItem } from "./IssueItem"
import { Border, Paragraph } from "@components/styled"
import { FaSpinner } from "react-icons/fa"

export default function IssuesList() {
  const issues = useIssues()

  if (issues.isLoading) {
    return (
      <div className="w-full text-center">
        <FaSpinner className="m-auto animate-spin text-white" />
      </div>
    )
  }

  if (issues.isError) {
    return (
      <div>
        <Paragraph>{issues.error}</Paragraph>
      </div>
    )
  }

  return (
    <div>
      <ul>
        {issues.data.map((issue: Issue) => (
          <div key={issue.id}>
            <Border>
              <IssueItem
                id={issue.id}
                assignee={issue.assignee}
                commentsCount={issue.comments.length}
                createdBy={issue.createdBy}
                createdDate={issue.createdDate}
                labelNames={issue.labels}
                number={issue.number}
                status={issue.status}
                title={issue.title}
              />
            </Border>
          </div>
        ))}
      </ul>
    </div>
  )
}
