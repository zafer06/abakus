import React from 'react'

const AppMenu = () => {
  return (
    <>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Hesapla</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">Hakkında</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://github.com/zafer06/abakus">Github</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default AppMenu