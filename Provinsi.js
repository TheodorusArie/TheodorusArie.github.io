let negara = [
    'aceh', 'sumatra Utara', 'Sumatra Barat', 'Riau', 'Kepulauan Riau', 'Jambi', 'Bengkulu', 'Sumatra Selatan', 'Kepulauan Bangka Belitung', 'Lampung', 'Banten', 'Jawa Barat', 'Jakarta', 'Jawa Tengah', 'Yogyakarta', 'Jawa Timur', 'Bali', 'Nusa Tenggara Barat', 'Nusa Tenggara Timur', 'Kalimantan Barat', 'Kalimantan Selatan', 'Kalimantan Tengah', 'Kalimantan Timur', 'Kalimantan Utara', 'Gorontalo', 'Sulawesi Barat', 'Sulawesi Selatan', 'Sulawesi Tengah', 'Sulawesi Tenggara', 'Sulawesi Utara', 'Maluku', 'Maluku Utara', 'Papua Barat', 'Papua'
];
let negaraCapital = [];
let entry = 'sum';
let negaraTampungan = [];
let tempEntry = entry.toUpperCase();
for (let i = 0; i < negara.length; i++) {
    let tempNegara = negara[i].toUpperCase();
    negaraCapital.push(tempNegara);
}
for (let i = 0; i < negaraCapital.length; i++) {
    if (tempEntry[0] === negaraCapital[i][0]) {
        if (tempEntry[1] === negaraCapital[i][1]) {
            if (tempEntry[2] === negaraCapital[i][2]) {
                negaraTampungan.push(negaraCapital[i]);
            }

        }

    }
}
console.log(negaraTampungan);