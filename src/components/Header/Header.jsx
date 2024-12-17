import React from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: 'Aibot', slug: "/aibot", active: true },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ];

  return (
    <header className="bg-gradient-to-r from-gray-500 to-gray-800 py-4 shadow-lg">
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <Logo width="80px" className="transition-transform duration-300 hover:scale-110" />
            </Link>
          </div>

          {/* Navigation Items */}
          <ul className="hidden md:flex space-x-6">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="text-white text-lg px-4 py-2 rounded-full bg-transparent hover:bg-white hover:text-gray-800 transition-all duration-300 ease-in-out shadow-md"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
          </ul>

          {/* Logout Button */}
          {authStatus && (
            <div className="hidden md:block">
              <LogoutBtn />
            </div>
          )}

          {/* Mobile Menu */}
          <div className="md:hidden">
            <button className="text-white hover:text-gray-400 focus:outline-none">
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
