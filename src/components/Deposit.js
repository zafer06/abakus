/******************************************************************************
*	Deposit Component
*
* Mevduat faiz hesaplamasi icin kullanici bilgilerini alacak formu ve islem
* sonuc arayuzunu olusturur. Hesaplama islemi icin gerekli fonksiyonlari icerir.
*
* Zafer Çelenk (zafercelenk@gmail.com)
*******************************************************************************/
const Deposit = () => {
	 const depositInfo = {
    	grossAmount: 0,
			tax: 0,
			netAmount: 0,
			today: new Date(),
			endDate: 0,
			equivalentRatio: 0
   }

	function calculate(form) {
		let amount = Number(form.amount.replace(",", "."));
    let freeAmount = Number(form.freeAmount.replace(",", "."));
    let ratio = Number(form.ratio.replace(",", "."));
    let expiry = form.expiry

    //let currencySymbol = " TL";

		// Bosta birakilan para varsa
    amount = amount - freeAmount;

  	depositInfo.grossAmount = (amount / 100) * (ratio / 365) * expiry
		depositInfo.tax = (depositInfo.grossAmount * form.tax) / 100
		depositInfo.netAmount = depositInfo.grossAmount - form.tax
		depositInfo.today = new Date()
		depositInfo.endDate = addDays(Number(expiry))
		depositInfo.equivalentRatio = (depositInfo.grossAmount * 36500) / ((amount + freeAmount) * expiry)
    

		console.log("Gross Amount: ", depositInfo.grossAmount)
		/*
		
		this.resultData.amount = utils.formatNumber(amount) + currencySymbol;
		this.resultData.grossAmount = utils.formatNumber(grossAmount) + currencySymbol;
		this.resultData.tax = utils.formatNumber(tax) + currencySymbol;
		this.resultData.netAmount = utils.formatNumber(netAmount) + currencySymbol;
		this.resultData.grandTotal = utils.formatNumber(amount + netAmount) + currencySymbol;
		this.resultData.equivalentRatio = '%' + utils.formatNumber(equivalentRatio);
		this.resultData.beginDate = utils.formatDate(today);
		this.resultData.endDate = utils.formatDate(endDate);
		this.resultData.diffDays = utils.diffDays(today, endDate) + " Gün";
		*/
	}

	function addDays(days) {
  	const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

  	let today = new Date();
  	return new Date(today.getTime() + days * oneDay);
	}

	const onSubmit = (e) => {
		e.preventDefault()

		const data = new FormData(e.target)
		const form = Object.fromEntries(data)
		calculate(form)
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
	    							<label htmlFor="expiry" className="form-label">Stopaj Oranı</label>
	    							<select name="expiry" className="form-select" tabIndex="4">
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

	    			<div className="col-8 infoPanel">
	    				<div className="row text-center mb-4">
	    					<div className="col-4">
	    						<div className="title">Brüt Tutar</div>
	    						<div className="value">{depositInfo.grossAmount}</div>
	    					</div>
	    					<div className="col-4">
	    						<div className="title">Stopaj Tutarı</div>
	    						<div className="value">0,00</div>
	    					</div>
	    					<div className="col-4">
	    						<div className="title">Net Tutar</div>
	    						<div className="value">0,00</div>
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

export default Deposit