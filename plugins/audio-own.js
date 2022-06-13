import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/ownerku.mp3'
conn.sendFile(m.chat, vn, 'ownerku.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.help = ['owner']
handler.tags = ['sound']
handler.command = /^(owner)$/i
handler.fail = null
handler.exp = 100
export default handler
