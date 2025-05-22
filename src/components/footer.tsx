import { User2, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 rounded-t-lg shadow-sm px-4 py-6 mt-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content - Horizontal on desktop, vertical on mobile */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          {/* Support Section - Now aligns horizontally with contacts */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 w-full lg:w-auto">
            <div className="flex items-center gap-3">
              <div className="bg-orange-500 p-2 rounded-lg shadow-sm">
                <User2 className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800">Technical Support</h3>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <div>
                  <p className="text-gray-700 font-medium">24/7 Support</p>
                  <p className="text-sm text-gray-600">Always ready to help</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <div>
                  <p className="text-gray-700 font-medium">Email</p>
                  <p className="text-sm text-gray-600">support@tehamatech.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Persons - Horizontal layout */}
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <div className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors min-w-[200px]">
              <h4 className="font-semibold text-gray-800 mb-1 text-sm">Collins Patrick Marwa</h4>
              <a
                href="tel:+255750304745"
                className="flex items-center gap-2 text-orange-600 hover:text-orange-500 transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                +255 750 304 745
              </a>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors min-w-[200px]">
              <h4 className="font-semibold text-gray-800 mb-1 text-sm">Jofrey Nyamasheki</h4>
              <a
                href="tel:+255767413968"
                className="flex items-center gap-2 text-orange-600 hover:text-orange-500 transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                +255 767 413 968
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Tehama Tech Solution. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

