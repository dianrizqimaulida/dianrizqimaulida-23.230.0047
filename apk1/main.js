function hitungtotal(){

    var nama = (document.form.inama.value);
    var tujuan = (document.form.itujuan.value);
    var jumlahpaket = parseFloat (document.form.ijumlah.value);
    var ht = 0.0 ;
    var sub = 0.0;
    var diskon = 0.0;
    var total = 0.0;
    if (tujuan == "Museum Geologi") {

        ht = 23000;
    }
    else if(tujuan == "Museum Fatahillah")
    {
        ht = 25000;
    }
    else if(tujuan=="Museum Batik")
    {
        ht = 27000;
    }
    else
    {
        ht = 25000;
    }

    sub = jumlahpaket*ht;

    if (document.form.imamber.checked == true) 
    {
        diskon = 0.08 * sub;
    }
    else
    {
        diskon=0.0;
    }
    total = sub - diskon;
    document.form.otiket.value=eval(ht);
    document.form.osub.value=eval(sub);
    document.form.odiskon.value=eval(diskon);
    document.form.ototal.value=eval(total);
}