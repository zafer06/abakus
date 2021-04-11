/******************************************************************************
*	Deposit Component
*
* Mevduat faiz hesaplamasi icin kullanici bilgilerini alacak formu ve islem
* sonuc arayuzunu olusturur. Hesaplama islemi icin gerekli fonksiyonlari icerir.
*
* Zafer Çelenk (zafercelenk@gmail.com)
*******************************************************************************/
import React, { useState } from 'react'
import * as utils from '../utils'

const Deposit = () => {
  const currencySymbol = " TL";
  const [report, setReport] = useState({})
  

  const onSubmit = (e) => {
		e.preventDefault()

		const data = new FormData(e.target)
		const form = Object.fromEntries(data)
		let calcReport = calculate(form)

    setReport(calcReport)
	}

	return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Mevduat Faizi Hesapla</h5>
              <h6 className="card-subtitle mb-2 text-muted">Basit bir şekilde mevduat faiz gelirinizi öğrenebilirsiniz.</h6>
              <div className="row mt-3">
                <div className="col-md-4">
                  <form onSubmit={onSubmit} className="row">
                    <div className="col">
                      <div className="mb-3">
                        <label htmlFor="amount" className="form-label">Hesaplanacak Tutar</label>
                        <input type="text" name="amount" className="form-control" tabIndex="1" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="expiry" className="form-label">Vade Süresi</label>
                        <input type="text" name="expiry" className="form-control" tabIndex="3" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="freeAmount" className="form-label">Boşta Kalan Tutar</label>
                        <input type="text" name="freeAmount" className="form-control" tabIndex="5" />
                      </div>
                    </div>
                    
                    <div className="col">
                      <div className="mb-3">
                        <label htmlFor="ratio" className="form-label">Mevduat Oranı</label>
                        <input type="text" name="ratio" className="form-control" tabIndex="2"/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="taxRate" className="form-label">Stopaj Oranı</label>
                        <select name="taxRate" className="form-select" tabIndex="4">
                          <option value="15">%15</option>
                          <option value="10">%10</option>
                          <option value="5">%5</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">&nbsp;</label>
                        <button className="form-control btn btn-primary">Hesapla</button>
                      </div>
                    </div>
                  </form>
                </div>  
                
                <div className="col-md-8">
                  <div className="infoPanel">
                    <div className="row text-center mb-4">
                      <div className="col-4">
                        <div className="title">Brüt Tutar</div>
                        <div className="value">{ utils.formatNumber(report.grossAmount) + currencySymbol }</div>
                      </div>
                      <div className="col-4">
                        <div className="title">Stopaj Tutarı</div>
                        <div className="value">{ utils.formatNumber(report.tax) + currencySymbol }</div>
                      </div>
                      <div className="col-4">
                        <div className="title">Net Tutar</div>
                        <div className="value">{ utils.formatNumber(report.netAmount) + currencySymbol }</div>
                      </div>
                    </div>
                    <div className="row text-center mb-4">
                      <div className="col-4">
                        <div className="title">Başlama Tarihi</div>
                        <div className="value">{ utils.formatDate(report.beginDate) }</div>
                      </div>
                      <div className="col-4">
                        <div className="title">Bitiş Tarihi</div>
                        <div className="value">{ utils.formatDate(report.endDate) }</div>
                      </div>
                      <div className="col-4">
                        <div className="title">Süre</div>
                        <div className="value">{ report.diffDays } Gün</div>
                      </div>
                    </div>
                    <div className="row text-center">
                      <div className="col-4">
                        <div className="title">Hesaplanan Tutar</div>
                        <div className="value">{ utils.formatNumber(report.amount) + currencySymbol }</div>
                      </div>
                      <div className="col-4">
                        <div className="title">Genel Toplam</div>
                        <div className="value">{ utils.formatNumber(report.grandTotal) + currencySymbol }</div>
                      </div>
                      <div className="col-4">
                        <div className="title">Net Oran</div>
                        <div className="value">%{ utils.formatNumber(report.equivalentRatio) }</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
			    </div>
        </div>
      </div>
      
		</div>
	)
}

export function calculate(form) {
  let amount = utils.stringToNumber(form.amount);
  let freeAmount = utils.stringToNumber(form.freeAmount);
  let ratio = utils.stringToNumber(form.ratio);
  let expiry = Number(form.expiry)
  let taxRate = Number(form.taxRate)

  let grossAmount = (amount / 100) * (ratio / 365) * expiry;
  let tax = (grossAmount * taxRate) / 100;
  let today = new Date();
  let endDate = utils.addDays(expiry);

  const calcReport = {
    amount: amount - freeAmount,
    grossAmount: grossAmount,
    tax: tax,
    netAmount: grossAmount - tax,
    grandTotal: amount + (grossAmount - tax),
    equivalentRatio: (grossAmount * 36500) / ((amount + freeAmount) * expiry),
    beginDate: today,
    endDate: endDate,
    diffDays: utils.diffDays(today, endDate),
  }

  return calcReport
}

export default Deposit