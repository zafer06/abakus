<script>
    export let form;
</script>

<div class="container">
    <div class="row">
        <div class="col-12">
            {#if form?.errors?.amount}
                <div class="alert alert-danger" role="alert">
                    {form?.errors?.amount[0]}
                </div>
            {/if}
        </div>
    </div>

    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Mevduat Faizi Hesapla</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Basit bir şekilde mevduat faiz gelirinizi öğrenebilirsiniz.</h6>
                    <div class="row mt-3">
                        <div class="col-md-4">
                            <form method="post" class="row">
                                <div class="col">
                                    <div class="mb-3">
                                        <label for="amount" class="form-label">Hesaplanacak Tutar</label>
                                        <input type="text" name="amount" class="form-control"/>
                                    </div>
                                    <div class="mb-3">
                                        <label for="expiry" class="form-label">Vade Süresi</label>
                                        <input type="text" name="expiry" class="form-control"/>
                                    </div>
                                    <div class="mb-3">
                                        <label for="freeAmount" class="form-label">Boşta Kalan Tutar</label>
                                        <input type="text" name="freeAmount" class="form-control" disabled/>
                                    </div>
                                </div>

                                <div class="col">
                                    <div class="mb-3">
                                        <label for="ratio" class="form-label">Mevduat Oranı</label>
                                        <input type="text" name="ratio" class="form-control"/>
                                    </div>
                                    <div class="mb-3">
                                        <label for="taxRate" class="form-label">Stopaj Oranı</label>
                                        <select name="taxRate" class="form-select">
                                            <option value="15">%15</option>
                                            <option value="10">%10</option>
                                            <option value="5">%5</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <button type="submit" class="form-control btn btn-primary" style="margin-top:32px">Hesapla</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div class="col-md-8">
                            <div class="infoPanel">
                                <div class="row text-center mb-4">
                                    <div class="col-4">
                                        <div class="title">Brüt Tutar</div>
                                        <div class="value">0</div>
                                    </div>
                                    <div class="col-4">
                                        <div class="title">Stopaj Tutarı</div>
                                        <div class="value">0</div>
                                    </div>
                                    <div class="col-4">
                                        <div class="title">Net Tutar</div>
                                        <div class="value">0</div>
                                    </div>
                                </div>
                                <div class="row text-center mb-4">
                                    <div class="col-4">
                                        <div class="title">Başlama Tarihi</div>
                                        <div class="value">0</div>
                                    </div>
                                    <div class="col-4">
                                        <div class="title">Bitiş Tarihi</div>
                                        <div class="value">0</div>
                                    </div>
                                    <div class="col-4">
                                        <div class="title">Süre</div>
                                        <div class="value">0 Gün</div>
                                    </div>
                                </div>
                                <div class="row text-center">
                                    <div class="col-4">
                                        <div class="title">Hesaplanan Tutar</div>
                                        <div class="value">0</div>
                                    </div>
                                    <div class="col-4">
                                        <div class="title">Genel Toplam</div>
                                        <div class="value">0</div>
                                    </div>
                                    <div class="col-4">
                                        <div class="title">Net Oran</div>
                                        <div class="value">%0</div>
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
