let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
	
	// ‼️ NOTE: Link script Jangan diubah, dihapus atau diganti
let text = `*SC NYA ADA DI AKUN GITHUB GW CARI SENDIRI ￣へ￣*
_Jangan Lupa Kasih Stars_
`
const templateButtons = [
    {index: 1, urlButton: {https://youtube.com/channel/UCoUIE95oCiyo_Ps0l9rhcdw: 'chenel YT', url: sgh}},
    {index: 2, urlButton: {displayText: 'Group Official', url: sgc}},
    {index: 3, quickReplyButton: {displayText: 'Owner', id: '.owner'}},
    {index: 4, quickReplyButton: {displayText: 'Donasi', id: '.donasi'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: thumb
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(s(ourcode|c))$/i

export default handler
