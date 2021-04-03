const Deposit = () => {
	return (
		<div className="container mt-3">
			<div className="card">
  			<div className="card-body">
	    		<h5 className="card-title">Mevduat Faizi Hesapla</h5>
	    		<h6 className="card-subtitle mb-2 text-muted">Basit bir şekilde mevduat faiz gelirinizi öğrenebilirsiniz.</h6>
	    		
	    		<div className="row mt-3">
	    			<div className="col-4">
	    				<form className="row">
	    					<div className="col">
									<div className="mb-3">
		    						<label for="amount" className="form-label">Hesaplanacak Tutar</label>
		    						<input type="text" className="form-control" tabIndex="1" />
		    					</div>
		    					<div className="mb-3">
		    						<label for="expiry" className="form-label">Vade Süresi</label>
		    						<input type="text" className="form-control" tabIndex="3" />
		    					</div>
		    					<div className="mb-3">
		    						<label for="expiry" className="form-label">Boşta Kalan Tutar</label>
		    						<input type="text" className="form-control" tabIndex="5" />
		    					</div>
	    					</div>

	    					<div className="col">
	    						<div className="mb-3">
	    							<label for="ratio" className="form-label">Mevduat Oranı</label>
	    							<input type="text" className="form-control" tabIndex="2" />
	    						</div>
	    						<div className="mb-3">
	    							<label for="expiry" className="form-label">Stopaj Oranı</label>
	    							<select className="form-select" tabIndex="4">
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
	    						<div className="value">0,00</div>
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