import HomePage from "./home/page"
import ErrorBoundary from "../components/Error"
export default function Home() {
  return (
    <main >
     <ErrorBoundary>
     <HomePage/>
     </ErrorBoundary>
     
    </main>
  )
}
