import ValentineCard from "@/components/valentine-card"
import FloatingHearts from "@/components/floating-hearts"

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-100 to-pink-200 p-4">
      <FloatingHearts />
      <ValentineCard />
    </main>
  )
}