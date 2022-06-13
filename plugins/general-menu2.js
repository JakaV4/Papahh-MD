import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")
let time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
conn.sendHydrated(m.chat, '*『 ɪɴᴛʀᴏᴅᴜᴄᴛɪᴏɴ 』*', `HAI,AKU ADALAH BOT YANG DIBERI NAMA NITSU BOTZ,AKU DI KEMBANGKAN OLEH SESEORANG YANG BERNAMA JAKA,BELIAU MEMAKAI SC DARI YOUTUBE PAPAH-CHAN,DAN BELIAU HANYA MENGRECODE SEDIKIT SAJA,,\nSILAHKAN KLIK TOMBOL MENU UNTUK MENAMPILKAN  MENU BOT\n\nᴅᴀᴛᴇ: ${date}\nᴛɪᴍᴇ: ${time} ﹙ɢᴍᴛ +7:00)`.trim(), './media/broadcast.jpg', 'Https://Instagram.com/itsme_nitsu', 'Instagram owner', null, null, [
[`ᴍᴇɴᴜ`, '.m'],
[`\nGw Pedo Dan Gw Bangga:v`, 'Bilek']
], m, {asLocation: true})
}
handler.help = ['menu']
handler.tags = ['general']
handler.command = /^(menu)$/i

export default handler
