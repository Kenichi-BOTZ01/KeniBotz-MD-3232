let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `
Knp kak ${ye} Lagi Nyari Sc Ya? 

_MINTA AJA SAMA OWNER KAK CUMAN 10K, SEKEDAR TAMBAHAN BELI DEVICE BARU BUAT BOT DOANG KAKð_

WHATSAPP OWNER :
https://wa.me/62895388375000

JOIN GC BOT:
https://chat.whatsapp.com/LBHHmgLnr9Y5q7ZkhGikkI

ð *N o t e :* 
â¢ Jangan lupa minta izin owner sebelum menggunakan scriptnya kak!
â¢ Jangan Lupa kasih star, follow & kasih credit
â¢ Dilarang menjual Script Ini!
â¢ Jika menemukan bug di script, harap lapor owner
â¢ Dilarang reupload sc, Hanya boleh fork

conn.sendBut(m.chat, esce, 'Ingfo Bermanfaat', 'Thanks', '.menu', m) 
}
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(sc)$/i

module.exports = handler
