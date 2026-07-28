import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hint-tracker/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/hint-tracker/"!</div>
}
