let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;AdrianOficial⁩;;\nFN:AdrianOficial⁩\nORG:AdrianOficial\nTITLE:\nitem1.TEL;waid=595976126756:595976126756\nitem1.X-ABLabel:AdrianOficial⁩⁩\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:AdrianOficial⁩\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'おDanịel.xyz⁩', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
