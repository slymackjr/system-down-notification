import SystemDownNotification from "@/components/system-down-notification"
import Footer from "@/components/footer"
import Header from "@/components/header"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <SystemDownNotification />
      </main>
      <Footer />
    </div>
  )
}
