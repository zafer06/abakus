/******************************************************************************
*	Footer Component
*
* Uygulamanin footer alani tasarim gorunumu icin gerekli kodlari icerir.
*
* Zafer Çelenk (zafercelenk@gmail.com)
*******************************************************************************/
import React from 'react'
import { version } from '../../package.json'

const Footer = () => {
	return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-12 text-center">
          Abaküs -- Finansal Hesap Makinesi, Ankara 2021
          <br />
          Sürüm: { version }
				</div>
			</div>
		</div>
	)
}

export default Footer