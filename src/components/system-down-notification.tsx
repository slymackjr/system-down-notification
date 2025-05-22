import { AlertTriangle, Clock } from "lucide-react"

export default function SystemDownNotification() {
  return (
    <div className="max-w-3xl w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-red-600 p-4 flex items-center justify-center">
        <AlertTriangle className="text-white mr-2 h-8 w-8" />
        <h1 className="text-xl md:text-2xl font-bold text-white">System Currently Unavailable</h1>
      </div>

      <div className="p-6 md:p-8">
        <div className="flex items-center mb-6 text-amber-600 bg-amber-50 p-3 rounded-lg">
          <Clock className="h-5 w-5 mr-2 flex-shrink-0" />
          <p className="text-sm">
            Our team is actively working to resolve this issue. We apologize for any inconvenience.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">What Happened?</h2>
            <p className="text-gray-600">
              We are currently experiencing technical difficulties with our system. Our technical team has been notified
              and is working diligently to resolve the issue as quickly as possible.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">What Should You Do?</h2>
            <p className="text-gray-600 mb-4">
              Please contact our technical support team for assistance. Our lead technical support specialists are
              available to help you:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="font-medium text-gray-800">Collins Patrick Marwa</h3>
                <p className="text-sm text-gray-500 mb-2">Lead Technical Support</p>
                <a
                  href="tel:+255750304745"
                  className="flex items-center text-orange-600 hover:text-orange-500 font-medium"
                >
                  +255 750 304 745
                </a>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="font-medium text-gray-800">Jofrey Nyamasheki</h3>
                <p className="text-sm text-gray-500 mb-2">Technical Support Specialist</p>
                <a
                  href="tel:+255767413968"
                  className="flex items-center text-orange-600 hover:text-orange-500 font-medium"
                >
                  +255 767 413 968
                </a>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">When Will Service Resume?</h2>
            <p className="text-gray-600">
              We are working to restore service as soon as possible. For the latest updates, please contact our
              technical support team.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

