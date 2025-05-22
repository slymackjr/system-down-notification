import { AlertCircle } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 py-4 px-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl font-bold text-gray-800">4jsFitnessCenter</span>
        </div>
        <div className="flex items-center text-red-600">
          <AlertCircle className="w-5 h-5 mr-2" />
          <span className="text-sm font-medium">System Down</span>
        </div>
      </div>
    </header>
  )
}

