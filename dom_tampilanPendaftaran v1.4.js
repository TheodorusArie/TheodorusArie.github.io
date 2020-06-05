let form1 = document.getElementById('form-utama');
let capcha = document.getElementById('Capcha');
let statusCapcha = true;
let capchaArr = [];

while (statusCapcha) {
    let randomNumber = Math.floor(Math.random() * 9);
    if (capchaArr.length === 6) {
        statusCapcha = false;

    }
    else if (capchaArr.length % 2 === 0) {
        capchaArr.push(randomNumber);
        console.log('3');
    }
    else {
        let kamus = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let randomAlphabet = kamus[Math.floor(Math.random() * 25)];
        capchaArr.push(randomAlphabet);
    }

}

for (let i = 0; i < capchaArr.length; i++) {
    capcha.value += capchaArr[i];
}

// console.log(name,'====');
//console.log(form1.action);
form1.addEventListener('submit', validasi);
function validasi() {
    let nomorHandphone = document.getElementById('Handphone').value;
    let daerahTempatTinggal = document.getElementById('Daerah').value;
    let name = document.getElementById('Nama').value;
    let resubmitCapcha = document.getElementById('resubmitCapcha').value;
    let entryDaerah = document.getElementById('Daerah').value;
    let negara = [
        'aceh', 'sumatra Utara', 'Sumatra Barat', 'Riau', 'Kepulauan Riau', 'Jambi', 'Bengkulu', 'Sumatra Selatan', 'Kepulauan Bangka Belitung', 'Lampung', 'Banten', 'Jawa Barat', 'Jakarta', 'Jawa Tengah', 'Yogyakarta', 'Jawa Timur', 'Bali', 'Nusa Tenggara Barat', 'Nusa Tenggara Timur', 'Kalimantan Barat', 'Kalimantan Selatan', 'Kalimantan Tengah', 'Kalimantan Timur', 'Kalimantan Utara', 'Gorontalo', 'Sulawesi Barat', 'Sulawesi Selatan', 'Sulawesi Tengah', 'Sulawesi Tenggara', 'Sulawesi Utara', 'Maluku', 'Maluku Utara', 'Papua Barat', 'Papua'
    ];
    let negaraCapital = [];

    let tempEntry = entryDaerah.toUpperCase();
    for (let i = 0; i < negara.length; i++) {
        let tempNegara = negara[i].toUpperCase();
        negaraCapital.push(tempNegara);
    }


    if (name == "" || nomorHandphone == "" || daerahTempatTinggal == "") {
        alert('Isi Semua Data');

        form1.action = `https://theodorusarie.github.io/`;
    }

    else if (capcha.value === resubmitCapcha) {
        if (nomorHandphone[0] === '0') {
            let negaraTampungan = [];
            let statusDaerah = true;
            for (let i = 0; i < negaraCapital.length; i++) {
                if (tempEntry === negaraCapital[i]) {
                    alert('SAATNYA BELAJAR');
                    let goToPage = document.getElementById('food').value;
                    window.location = `https://theodorusarie.github.io/${goToPage}.html`;
                    //form1.action = `${goToPage}.html`;
                    statusDaerah = false;
                }
            }
            if (statusDaerah === true) {
                for (let i = 0; i < negaraCapital.length; i++) {
                    if (tempEntry[0] === negaraCapital[i][0])
                        negaraTampungan.push(negaraCapital[i]);
                }
                if (negaraTampungan.length === 0) {
                    alert(`Maaf daerah yang kamu maksud tidak ada di list kami, tolong pilih sesuai list ini : ${negaraCapital}`)
                }
                else {
                    let tampilanAlert = '';
                    tampilanAlert = `tolong isi DAERAH sesuai pilihan: apakah ini DAERAH yang mungkin kamu maksud ? ${negaraTampungan}`;
                    alert(tampilanAlert);
                    window.location = "https://theodorusarie.github.io/index.html";
                    //form1.action = `https://theodorusarie.github.io/`;
                }
            }


        }
        else {
            alert('NOMOR HANDPHONE HARUS DIAWALI DENGAN 0');
            window.location = "https://theodorusarie.github.io/index.html";
            //form1.action = `https://theodorusarie.github.io/`;
        }


    }
    else {
        alert('CAPCHA SALAH');
        window.location = "https://theodorusarie.github.io/index.html";
        //form1.action = `https://theodorusarie.github.io/`;

    }


    return false;
}
