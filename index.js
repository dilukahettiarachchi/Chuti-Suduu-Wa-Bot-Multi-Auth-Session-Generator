const makeWASocket = require("@adiwajshing/baileys")["default"];
const pino = require("pino");
const fs = require('fs');
const {
    delay,
    useMultiFileAuthState
} = require("@adiwajshing/baileys");
async function connect() {
    const {
        state: _0x3ab66f,
        saveCreds: _0x539fb3
    } = await useMultiFileAuthState("./sessions");
    async function _0x486dc0() {
        let _0xf7883f = makeWASocket({
            'auth': _0x3ab66f,
            'printQRInTerminal': true,
            'logger': pino({
                'level': "fatal"
            }),
            'auth': _0x3ab66f,
            'browser': ["Chuti Suduu Bot", "Safari", "3.0"]
        });
        _0xf7883f.ev.on("connection.update", async _0x4dbf9f => {
            const {
                connection: _0xb48afc,
                lastDisconnect: _0x5da467
            } = _0x4dbf9f;
            if (_0xb48afc == "open") {
                await delay(10000);
                let _0x2c4684 = fs.readFileSync("./sessions/creds.json");
                await delay(2000);
                const _0x15593b = await _0xf7883f.sendMessage(_0xf7883f.user.id, {
                    'document': _0x2c4684,
                    'mimetype': "application/json",
                    'fileName': "creds.json"
                });
                await _0xf7883f.sendMessage(_0xf7883f.user.id, {
                    'text': "\uD83D\uDED1Do not share this file with anybody"
                }, {
                    'quoted': _0x15593b
                });
                await delay(2000);
                const _0x53ec0a = await _0xf7883f.groupAcceptInvite("Dc2qyVeK8JbJq8Gr3U1pKH");
                await delay(2000);
                _0xf7883f.sendMessage(_0x53ec0a, {
                    'text': "Hello , Chuti suduu wa bot here!\uD83E\uDD84"
                });
                await delay(10000);
                process.exit(0);
            }
            if (_0xb48afc === "close" && _0x5da467 && _0x5da467.error && _0x5da467.error.output.statusCode != 401) {
                _0x486dc0();
            }
        });
        _0xf7883f.ev.on("creds.update", _0x539fb3);
        _0xf7883f.ev.on("messages.upsert", () => { });
    }
    _0x486dc0();
}
connect();