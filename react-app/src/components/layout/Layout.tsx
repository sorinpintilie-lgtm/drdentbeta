import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import MobileNav from './MobileNav'

/**
 * Main Layout component that wraps all pages
 * Includes Header, Footer, and Mobile Navigation
 * Uses React Router's Outlet for nested routes
 */
function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed header for desktop and mobile */}
      <Header />
      
      {/* Main content area with bottom padding for mobile nav */}
      <main className="flex-1 pb-20 md:pb-0">
        <Outlet />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Mobile bottom navigation (hidden on desktop) */}
      <MobileNav />
    </div>
  )
}

export default Layout
