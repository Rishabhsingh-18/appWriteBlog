import React from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    { name: 'Home', slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
    {
      name: "Dashboard",
      slug: "/dashboard",
      active: authStatus,
    },
  ]

  return (
    <header className="w-full bg-gray-900 shadow-lg px-6 lg:px-12">
      <Container>
        <nav className="flex items-center justify-between py-4">

          {/* 🔥 LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              BlogApp
            </span>
          </Link>

          {/* 🔥 NAV ITEMS */}
          <ul className="flex items-center gap-4">

            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="px-4 py-2 rounded-lg text-white font-medium hover:text-blue-400 hover:bg-gray-700 transition duration-200"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}

            {/* 🔥 LOGOUT BUTTON */}
            {authStatus && (
              <li className="text-white">
                <LogoutBtn />
              </li>
            )}

          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header