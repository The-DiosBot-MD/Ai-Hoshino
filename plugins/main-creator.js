let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;AdrianOficial⁩;;\nFN:AdrianOficial⁩\nORG:AdrianOficial\nTITLE:\nitem1.TEL;waid=5218261275256:5218261275256\nitem1.X-ABLabel:おDanịel.xyz⁩\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:おDanịel.xyz⁩\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'おDanịel.xyz⁩', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
