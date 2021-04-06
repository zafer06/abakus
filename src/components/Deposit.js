/******************************************************************************
*	Deposit Component
*
* Mevduat faiz hesaplamasi icin kullanici bilgilerini alacak formu ve islem
* sonuc arayuzunu olusturur. Hesaplama islemi icin gerekli fonksiyonlari icerir.
*
* Zafer Çelenk (zafercelenk@gmail.com)
*******************************************************************************/
import React, { useState } from 'react'

const Deposit = () => {
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
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Mevduat Faizi Hesapla</h5>
          <h6 className="card-subtitle mb-2 text-muted">Basit bir şekilde mevduat faiz gelirinizi öğrenebilirsiniz.</h6>
          
          <div className="row mt-3">
            <div className="col-4">
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
                    <input type="text" name="ratio" className="form-control" tabIndex="2" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="taxRate" className="form-label">Stopaj Oranı</label>
                    <select name="taxRate" className="form-select" tabIndex="4">
                      <option value="15" selected>%15</option>
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
            
            <div className="col-8 infoPanel">
              <div className="row text-center mb-4">
                <div className="col-4">
                  <div className="title">Brüt Tutar</div>
                  <div className="value">{ report.amount }</div>
                </div>
                <div className="col-4">
                  <div className="title">Stopaj Tutarı</div>
                  <div className="value">{ report.tax }</div>
                </div>
                <div className="col-4">
                  <div className="title">Net Tutar</div>
                  <div className="value">{ report.grossAmount }</div>
                </div>
              </div>
              <div className="row text-center mb-4">
                <div className="col-4">
                  <div className="title">Başlama Tarihi</div>
                  <div className="value">---</div>
                </div>
                <div className="col-4">
                  <div className="title">Bitiş Tarihi</div>
                  <div className="value">---</div>
                </div>
                <div className="col-4">
                  <div className="title">Süre</div>
                  <div className="value">0</div>
                </div>
              </div>
              <div className="row text-center">
                <div className="col-4">
                  <div className="title">Hesaplanan Tutar</div>
                  <div className="value">0,00</div>
                </div>
                <div className="col-4">
                  <div className="title">Genel Toplam</div>
                  <div className="value">0,00</div>
                </div>
                <div className="col-4">
                  <div className="title">Net Oran</div>
                  <div className="value">0,00</div>
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
  let amount = Number(form.amount.replace(",", "."));
  let freeAmount = Number(form.freeAmount.replace(",", "."));
  let ratio = Number(form.ratio.replace(",", "."));
  let expiry = form.expiry

  let currencySymbol = " TL";

  // Bosta birakilan para varsa
  amount = amount - freeAmount;

  let grossAmount = (amount / 100) * (ratio / 365) * expiry;
  let tax = (grossAmount * Number(form.taxRate)) / 100;
  let netAmount = grossAmount - tax;
  let today = new Date();
  let endDate = addDays(Number(expiry));
  
  let equivalentRatio = (grossAmount * 36500) / ((amount + freeAmount) * expiry);
  
  const calcReport = {
    amount: formatNumber(amount) + currencySymbol,
    grossAmount: formatNumber(grossAmount) + currencySymbol,
    tax: formatNumber(tax) + currencySymbol,
    netAmount: formatNumber(netAmount) + currencySymbol,
    grandTotal: formatNumber(amount + netAmount) + currencySymbol,
    equivalentRatio: '%' + formatNumber(equivalentRatio),
    beginDate: formatDate(today),
    endDate: formatDate(endDate),
    diffDays: diffDays(today, endDate) + " Gün",
  }

  return calcReport
}

function addDays(days) {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  
  let today = new Date();
  return new Date(today.getTime() + days * oneDay);
}

function formatNumber(number) {
  // Create our number formatter.
  let formatter = new Intl.NumberFormat('tr-TR', {
      style: 'decimal',
      currency: 'TRY',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      // These options are needed to round to whole numbers if that's what you want.
      //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  return formatter.format(number);
}

function formatDate(date) {
  let formatter = new Intl.DateTimeFormat('tr-TR', {
    dateStyle: 'full',
    timeStyle: 'short'
  });

  return formatter.format(date);
  //return new Intl.DateTimeFormat('tr-TR').format(date);
}

function diffDays(begin, end) {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  return Math.round(Math.abs((begin - end) / oneDay));
}

export default Deposit