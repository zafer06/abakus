/******************************************************************************
* Header Component
*
* Uygulamanin header alani tasarim gorunumu icin gerekli kodlari icerir.
*
* Zafer Çelenk (zafercelenk@gmail.com)
*******************************************************************************/
import React from 'react'
import AppLogo from './AppLogo'
import AppMenu from './AppMenu'

const Header = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <AppLogo />
        <AppMenu />
      </div>
		</nav>
	)
}

export default Header