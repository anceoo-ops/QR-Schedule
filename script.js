const times = [
    "08:10 — 08:50",
    "08:55 — 09:35",
    "09:50 — 10:30",
    "10:40 — 11:20",
    "11:30 — 12:10",
    "12:15 — 12:55",
    "13:25 — 14:05",
    "14:10 — 14:50"
];

const schedules = {

    "4a": {
        teacher: "Audzinātāja: V. Cielava",
        Pirmdiena: [
            ["Angļu valoda", "310"],
            ["Dabaszinības", "305"],
            ["Matemātika", "209"],
            ["Teātra māksla", "305"],
            ["Vizuālā māksla", "107"]
        ],
        Otrdiena: [
            ["Matemātika", "209"],
            ["Dabaszinības", "305"],
            ["Latviešu valoda", "304"],
            ["Matemātika", "209"],
            ["Sociālās zinības un vēsture", "305"],
            ["Angļu valoda", "310"]
        ],
        Trešdiena: [
            ["Klases stunda", "209"],
            ["Latviešu valoda", "304"],
            ["Sports un veselība", "101"],
            ["Mūzika", "308"],
            ["Sociālās zinības un vēsture", "305"],
            ["Mūzika", "308"]
        ],
        Ceturtdiena: [
            ["F.Latviešu valoda", "304"],
            ["Dizains un tehnoloģijas", "107"],
            ["Matemātika", "209"],
            ["Latviešu valoda", "304"],
            ["Angļu valoda", "310"],
            ["Sports un veselība", "101"]
        ],
        Piektdiena: [
            ["Datorika", "204"],
            ["Latviešu valoda", "304"],
            ["Sports un veselība", "101"],
            ["Matemātika", "209"],
            ["Latviešu valoda", "304"]
        ]
    },

    "4b": {
        teacher: "Audzinātāja: A. Trivaškeviča",
        Pirmdiena: [
            ["F.Latviešu valoda", "303"],
            ["Matemātika", "209"],
            ["Dabaszinības", "305"],
            ["Angļu valoda", "310"],
            ["Latviešu valoda", "303"],
            ["Vizuālā māksla", "107"]
        ],
        Otrdiena: [
            ["Latviešu valoda", "303"],
            ["Sports un veselība", "101"],
            ["Matemātika", "209"],
            ["Dabaszinības", "305"],
            ["Angļu valoda", "310"]
        ],
        Trešdiena: [
            ["Mūzika", "308"],
            ["Klases stunda", "205"],
            ["Matemātika", "209"],
            ["Latviešu valoda", "303"],
            ["Mūzika", "308"],
            ["Sports un veselība", "101"]
        ],
        Ceturtdiena: [
            ["Angļu valoda", "310"],
            ["Matemātika", "209"],
            ["Teātra māksla", "305"],
            ["Sociālās zinības un vēsture", "205"],
            ["Sports un veselība", "101"],
            ["Dizains un tehnoloģijas", "107"]
        ],
        Piektdiena: [
            ["Matemātika", "209"],
            ["Datorika", "204"],
            ["Sociālās zinības un vēsture", "205"],
            ["Latviešu valoda", "303"],
            ["Latviešu valoda", "303"]
        ]
    },

    "5a": {
        teacher: "Audzinātāja: A. Štrausa",
        Pirmdiena: [
            ["Matemātika", "311"],
            ["Vizuālā māksla", "107"],
            ["Dizains un tehnoloģijas", "112"],
            ["Dizains un tehnoloģijas", "112"],
            ["Latviešu valoda", "306"],
            ["Mūzika", "308"]
        ],
        Otrdiena: [
            ["Sports un veselība", "101"],
            ["Vācu valoda", "103"],
            ["Matemātika", "311"],
            ["Matemātika", "311"],
            ["Mūzika", "308"],
            ["Latviešu valoda", "306"]
        ],
        Trešdiena: [
            ["Latviešu valoda", "306"],
            ["Vācu valoda", "103"],
            ["Dabaszinības", "305"],
            ["Sports un veselība", "101"],
            ["Literatūra", "306"],
            ["Sociālās zinības un vēsture", "305"]
        ],
        Ceturtdiena: [
            ["Matemātika", "311"],
            ["Latviešu valoda", "306"],
            ["Matemātika", "311"],
            ["Dabaszinības", "305"],
            ["Latviešu valoda", "306"],
            ["Angļu valoda", "307"]
        ],
        Piektdiena: [
            ["F.Matemātika", "311"],
            ["Sports un veselība", "101"],
            ["Literatūra", "306"],
            ["Datorika", "204"],
            ["Angļu valoda", "307"],
            ["Klases stunda", "306"]
        ]
    },

    "5b": {
        teacher: "Audzinātāja: S. Balode",
        Pirmdiena: [
            ["Dabaszinības", "305"],
            ["Latviešu valoda", "306"],
            ["Matemātika", "311"],
            ["Mūzika", "308"],
            ["Angļu valoda", "310"],
            ["Literatūra", "306"]
        ],
        Otrdiena: [
            ["F.Matemātika", "311"],
            ["Latviešu valoda", "306"],
            ["Mūzika", "308"],
            ["Vizuālā māksla", "107"],
            ["Sports un veselība", "101"],
            ["Dabaszinības", "305"]
        ],
        Trešdiena: [
            ["Matemātika", "311"],
            ["Latviešu valoda", "306"],
            ["Vācu valoda", "103"],
            ["Dizains un tehnoloģijas", "108"],
            ["Dizains un tehnoloģijas", "108"],
            ["Angļu valoda", "310"]
        ],
        Ceturtdiena: [
            ["Vācu valoda", "103"],
            ["Sociālās zinības un vēsture", "305"],
            ["Sports un veselība", "101"],
            ["Latviešu valoda", "306"],
            ["Matemātika", "311"],
            ["Klases stunda", "208"]
        ],
        Piektdiena: [
            ["Latviešu valoda", "306"],
            ["Literatūra", "306"],
            ["Datorika", "204"],
            ["Matemātika", "311"],
            ["Matemātika", "311"],
            ["Sports un veselība", "101"]
        ]
    },

    "6a": {
        teacher: "Audzinātāja: I. Jansone",
        Pirmdiena: [
            ["Vācu valoda / Krievu valoda", "103./205."],
            ["Dizains un tehnoloģijas", "112"],
            ["Mūzika", "308"],
            ["Latviešu valoda", "306"],
            ["Sociālās zinības un vēsture", "311"],
            ["Dabaszinības", "305"]
        ],
        Otrdiena: [
            ["Literatūra", "306"],
            ["Mūzika", "308"],
            ["Dabaszinības", "305"],
            ["Matemātika", "302"],
            ["Vizuālā māksla", "107"],
            ["Sports un veselība", "101"],
            ["Latviešu valoda", "306"]
        ],
        Trešdiena: [
            ["Matemātika", "302"],
            ["Matemātika", "302"],
            ["Latviešu valoda", "306"],
            ["Sociālās zinības un vēsture", "311"],
            ["Sports un veselība", "101"],
            ["Literatūra", "306"],
            ["Angļu valoda", "307"]
        ],
        Ceturtdiena: [
            ["F.Teātra māksla", "305"],
            ["Sociālās zinības un vēsture", "311"],
            ["Latviešu valoda", "306"],
            ["Sports un veselība", "101"],
            ["Angļu valoda", "307"],
            ["Matemātika", "302"]
        ],
        Piektdiena: [
            ["Matemātika", "302"],
            ["Vācu valoda / Krievu valoda", "103./205."],
            ["Sociālās zinības un vēsture", "311"],
            ["Matemātika", "302"],
            ["Datorika", "204"],
            ["Klases stunda", "108"]
        ]
    },

    "6b": {
        teacher: "Audzinātāja: I. Grietniece",
        Pirmdiena: [
            ["Vācu valoda / Krievu valoda", "103./205."],
            ["Mūzika", "308"],
            ["Datorika", "204"],
            ["Matemātika", "302"],
            ["Dabaszinības", "305"],
            ["Sociālās zinības un vēsture", "311"]
        ],
        Otrdiena: [
            ["F.Teātra māksla", "305"],
            ["Sociālās zinības un vēsture", "311"],
            ["Dizains un tehnoloģijas", "108"],
            ["Sports un veselība", "101"],
            ["Mūzika", "308"],
            ["Matemātika", "302"]
        ],
        Trešdiena: [
            ["Sports un veselība", "101"],
            ["Dabaszinības", "305"],
            ["Sociālās zinības un vēsture", "311"],
            ["Matemātika", "302"],
            ["Angļu valoda", "307"],
            ["Latviešu valoda", "304"]
        ],
        Ceturtdiena: [
            ["Matemātika", "302"],
            ["Latviešu valoda", "304"],
            ["Latviešu valoda", "304"],
            ["Vizuālā māksla", "107"],
            ["Matemātika", "302"],
            ["Sociālās zinības un vēsture", "311"],
            ["Sports un veselība", "101"]
        ],
        Piektdiena: [
            ["Latviešu valoda", "304"],
            ["Vācu valoda / Krievu valoda", "103./205."],
            ["Literatūra", "304"],
            ["Literatūra", "304"],
            ["Matemātika", "302"],
            ["Angļu valoda", "307"],
            ["Klases stunda", "302"]
        ]
    },

    "7a": {
        teacher: "Audzinātājs: D. Zevaliča",
        Pirmdiena: [
            ["Dizains un tehnoloģijas", "112"],
            ["Latviešu valoda", "303"],
            ["Angļu valoda", "310"],
            ["Vizuālā māksla", "107"],
            ["Mūzika", "308"],
            ["Latvijas un pasaules vēsture", "205"]
        ],
        Otrdiena: [
            ["Angļu valoda", "310"],
            ["Matemātika", "201"],
            ["Vācu valoda / Krievu valoda", "103./205."],
            ["Datorika", "204"],
            ["Literatūra", "303"],
            ["Latviešu valoda", "303"],
            ["Sports un veselība", "101"]
        ],
        Trešdiena: [
            ["Matemātika", "101"],
            ["Sports un veselība", "101"],
            ["Angļu valoda", "310"],
            ["Teātra māksla", "305"],
            ["Ģeogrāfija", "207"],
            ["Inženierzinības", "112"],
            ["Klases stunda", "303"]
        ],
        Ceturtdiena: [
            ["Latviešu valoda", "303"],
            ["Bioloģija", "207"],
            ["Vācu valoda / Krievu valoda", "103./205."],
            ["Datorika", "204"],
            ["Literatūra", "303"],
            ["Matemātika", "201"]
        ],
        Piektdiena: [
            ["Matemātika", "311"],
            ["Sociālās zinības", "311"],
            ["Matemātika", "207"],
            ["Bioloģija", "207"],
            ["Ģeogrāfija", "209"],
            ["Latvijas un pasaules vēsture", "205"],
            ["Sports un veselība", "101"]
        ]
    },

    "7b": {
        teacher: "Audzinātāja: O. Tanana-Lejava",
        Pirmdiena: [
            ["Matemātika", "204"],
            ["Datorika", "204"],
            ["Vizuālā māksla", "107"],
            ["Latvijas un pasaules vēsture", "205"],
            ["Sports un veselība", "101"],
            ["Ģeogrāfija", "207"]
        ],
        Otrdiena: [
            ["Mūzika", "308"],
            ["Bioloģija", "207"],
            ["Vācu valoda / Krievu valoda", "103./205."],
            ["Latviešu valoda", "303"],
            ["Klases stunda", "307"],
            ["Matemātika", "201"]
        ],
        Trešdiena: [
            ["Teātra māksla", "305"],
            ["Latviešu valoda", "303"],
            ["Ģeogrāfija", "207"],
            ["Bioloģija", "207"],
            ["Latvijas un pasaules vēsture", "205"],
            ["Angļu valoda", "307"],
            ["Inženierzinības", "112"]
        ],
        Ceturtdiena: [
            ["Datorika", "204"],
            ["Matemātika", "201"],
            ["Vācu valoda / Krievu valoda", "103./205."],
            ["Matemātika", "101"],
            ["Sports un veselība", "101"],
            ["Literatūra", "303"],
            ["Angļu valoda", "307"]
        ],
        Piektdiena: [
            ["Latviešu valoda", "303"],
            ["Literatūra", "303"],
            ["Dizains un tehnoloģijas", "108"],
            ["Matemātika", "101"],
            ["Sports un veselība", "101"],
            ["Sociālās zinības", "311"],
            ["Angļu valoda", "307"]
        ]
    },

    "8a": {
        teacher: "Audzinātāja: V. Dižpētere",
        Pirmdiena: [
            ["Latviešu valoda", "203"],
            ["Latvijas un pasaules vēsture", "205"],
            ["Fizika", "202"],
            ["Ģeogrāfija", "207"],
            ["Ķīmija", "207"],
            ["Matemātika", "310"],
            ["Angļu valoda", "310"],
            ["Dizains un tehnoloģijas", "112"]
        ],
        Otrdiena: [
            ["Latviešu valoda", "203"],
            ["Angļu valoda", "310"],
            ["Matemātika", "201"],
            ["Latvijas un pasaules vēsture", "205"],
            ["Krievu valoda", "205"],
            ["Ģeogrāfija", "207"],
            ["Mūzika", "308"],
            ["Sports un veselība", "101"]
        ],
        Trešdiena: [
            ["Datorika", "204"],
            ["Matemātika", "302"],
            ["Bioloģija", "302"],
            ["Literatūra", "203"],
            ["Sports un veselība", "101"],
            ["Ķīmija", "207"]
        ],
        Ceturtdiena: [
            ["Krievu valoda", "205"],
            ["Angļu valoda", "310"],
            ["Datorika", "204"],
            ["Matemātika", "201"],
            ["Vizuālā māksla", "107"],
            ["Fizika", "202"],
            ["Sports un veselība", "101"]
        ],
        Piektdiena: [
            ["F.Latviešu valoda", "203"],
            ["Latviešu valoda", "203"],
            ["Bioloģija", "302"],
            ["Literatūra", "203"],
            ["Sociālās zinības", "206"],
            ["Klases stunda", "203"],
            ["Matemātika", "307"]
        ]
    },

    "8b": {
        teacher: "Klasvadītāja: J. Poceviča",
        Pirmdiena: [
            ["Ķīmija", "207"],
            ["Fizika", "202"],
            ["Latviešu valoda", "303"],
            ["Literatūra", "303"],
            ["Latvijas un pasaules vēsture", "205"],
            ["Datorika", "204"]
        ],
        Otrdiena: [
            ["Bioloģija", "302"],
            ["Latviešu valoda", "303"],
            ["Angļu valoda", "310"],
            ["Matemātika", "201"],
            ["Matemātika", "201"],
            ["Vizuālā māksla", "107"],
            ["Krievu valoda", "205"],
            ["Sports un veselība", "101"]
        ],
        Trešdiena: [
            ["F. Latviešu valoda", "303"],
            ["Datorika", "204"],
            ["Literatūra", "303"],
            ["Angļu valoda", "310"],
            ["Sports un veselība", "101"],
            ["Bioloģija", "302"],
            ["Klases stunda", "305"],
            ["Mūzika", "308"]
        ],
        Ceturtdiena: [
            ["Matemātika", "201"],
            ["Latvijas un pasaules vēsture", "205"],
            ["Ķīmija", "207"],
            ["Ģeogrāfija", "207"],
            ["Krievu valoda", "205"],
            ["Angļu valoda", "310"],
            ["Sports un veselība", "101"]
        ],
        Piektdiena: [
            ["Fizika", "202"],
            ["Matemātika", "209"],
            ["Latviešu valoda", "303"],
            ["Sociālās zinības", "206"],
            ["Matemātika", "209"],
            ["Ģeogrāfija", "207"],
            ["Dizains un tehnoloģijas", "108"]
        ]
    },

    "9a": {
        teacher: "Klasvadītāja: I. Grigaleviča",
        Pirmdiena: [
            ["Bioloģija", "302"],
            ["Angļu valoda", "310"],
            ["Latviešu valoda", "306"],
            ["Matemātika", "209"],
            ["Dizains un tehnoloģijas", "112"],
            ["Dizains un tehnoloģijas", "112"],
            ["Mūzika", "308"],
            ["Literatūra", "306"]
        ],
        Otrdiena: [
            ["Vācu valoda / Krievu valoda", "103/205"],
            ["Latvijas un pasaules vēsture", "205"],
            ["Fizika", "202"],
            ["Latviešu valoda", "306"],
            ["Ķīmija", "207"],
            ["Matemātika", "209"],
            ["Klases stunda", "310"],
            ["Sports un veselība", "101"]
        ],
        Trešdiena: [
            ["Angļu valoda", "310"],
            ["Ģeogrāfija", "207"],
            ["Datorika", "204"],
            ["Literatūra", "306"],
            ["Matemātika", "209"],
            ["Vizuālā māksla", "107"],
            ["Sports un veselība", "101"]
        ],
        Ceturtdiena: [
            ["F. Latviešu valoda", "306"],
            ["Sociālās zinības", "206"],
            ["Angļu valoda", "310"],
            ["Matemātika", "209"],
            ["Ķīmija", "207"],
            ["Latviešu valoda", "306"],
            ["Matemātika", "209"]
        ],
        Piektdiena: [
            ["Vācu valoda / Krievu valoda", "103/205"],
            ["Bioloģija", "302"],
            ["Ģeogrāfija", "207"],
            ["Latvijas un pasaules vēsture", "205"],
            ["Sports un veselība", "101"],
            ["Fizika", "202"],
            ["F. Matemātika", "209"]
        ]
    },

    "9b": {
        teacher: "Klasvadītāja: G. Garbuzova",
        Pirmdiena: [
            ["F. Latviešu valoda", "306"],
            ["Ķīmija", "207"],
            ["Krievu valoda", "205"],
            ["Klases stunda", "311"],
            ["Matemātika", "209"],
            ["Angļu valoda", "310"],
            ["Latviešu valoda", "306"],
            ["Ģeogrāfija", "207"]
        ],
        Otrdiena: [
            ["Ķīmija", "207"],
            ["Fizika", "202"],
            ["Latviešu valoda", "306"],
            ["Mūzika", "308"],
            ["Matemātika", "209"],
            ["Dizains un tehnoloģijas", "108"],
            ["Dizains un tehnoloģijas", "108"],
            ["Literatūra", "306"]
        ],
        Trešdiena: [
            ["Latvijas un pasaules vēsture", "205"],
            ["Angļu valoda", "310"],
            ["Vizuālā māksla", "107"],
            ["Datorika", "204"],
            ["Sociālās zinības", "206"],
            ["Matemātika", "209"],
            ["Literatūra", "306"],
            ["Sports un veselība", "101"]
        ],
        Ceturtdiena: [
            ["F. Matemātika", "209"],
            ["Sports un veselība", "101"],
            ["Bioloģija", "302"],
            ["Angļu valoda", "310"],
            ["Matemātika", "209"],
            ["Krievu valoda", "205"],
            ["Latviešu valoda", "306"]
        ],
        Piektdiena: [
            ["Ģeogrāfija", "207"],
            ["Fizika", "202"],
            ["Matemātika", "209"],
            ["Sports un veselība", "101"],
            ["Latvijas un pasaules vēsture", "205"],
            ["Bioloģija", "302"]
        ]
    },

    "10": {
        teacher: "Klasvadītājs: G. Trahimoviča",
        Pirmdiena: [
            ["Programmēšana", "204"],
            ["Klases stunda", "206"],
            ["Ģeogrāfija", "207"],
            ["Projekta darbs", "204"],
            ["Ķīmija", "103"],
            ["Matemātika", "209"],
            ["Sports un veselība", "101"]
        ],
        Otrdiena: [
            ["Fizika", "202"],
            ["Matemātika", "209"],
            ["Ģeogrāfija", "207"],
            ["Angļu valoda", "103"],
            ["Programmēšana", "204"],
            ["Programmēšana", "204"],
            ["Sports un veselība", "101"]
        ],
        Trešdiena: [
            ["Sociālās zinātnes", "206"],
            ["Matemātika", "209"],
            ["Dizains un tehnoloģijas", "108"],
            ["Literatūra", "304"],
            ["Literatūra", "304"],
            ["Ķīmija", "103"],
            ["Ķīmija", "103"],
            ["Angļu valoda", "103"]
        ],
        Ceturtdiena: [
            ["Vēsture", "206"],
            ["Dizains un tehnoloģijas", "108"],
            ["Dizains un tehnoloģijas", "108"],
            ["Angļu valoda", "103"],
            ["Sociālās zinātnes", "206"],
            ["Latviešu valoda", "304"],
            ["Latviešu valoda", "304"]
        ],
        Piektdiena: [
            ["Vēsture", "206"],
            ["Ģeogrāfija", "207"],
            ["Fizika", "202"],
            ["Fizika", "202"],
            ["Matemātika", "209"],
            ["Angļu valoda", "103"]
        ]
    },

    "11": {
        teacher: "Klasvadītāja: I. Erliha",
        Pirmdiena: [
            ["Dizains un tehnoloģijas", "108"],
            ["Bioloģija", "302"],
            ["Bioloģija", "302"],
            ["Fizika", "202"],
            ["Fizika", "202"],
            ["Angļu valoda", "103"],
            ["Matemātika", "209"]
        ],
        Otrdiena: [
            ["Dizains un tehnoloģijas", "108"],
            ["Dizains un tehnoloģijas", "108"],
            ["Sports un veselība", "101"],
            ["Klases stunda", "207"],
            ["Angļu valoda", "103"],
            ["Krievu valoda", "205"]
        ],
        Trešdiena: [
            ["Projekta darbs", "212"],
            ["Projekta darbs", "212"],
            ["Krievu valoda", "205"],
            ["Angļu valoda", "103"],
            ["Programmēšana", "204"],
            ["Programmēšana", "204"],
            ["Matemātika", "209"],
            ["Sociālās zinātnes", "206"]
        ],
        Ceturtdiena: [
            ["Sports un veselība", "101"],
            ["Latviešu valoda", "303"],
            ["Latviešu valoda", "303"],
            ["Fizika", "202"],
            ["Ķīmija", "103"],
            ["Ķīmija", "103"],
            ["Angļu valoda", "103"]
        ],
        Piektdiena: [
            ["Sports un veselība", "101"],
            ["Sociālās zinātnes", "206"],
            ["Vēsture", "206"],
            ["Ķīmija", "103"],
            ["Fizika", "202"],
            ["Literatūra", "303"],
            ["Literatūra", "303"]
        ]
    },

    "12": {
        teacher: "Klasvadītāja: A. Švītiņa",
        Pirmdiena: [
            ["Matemātika", "209"],
            ["Ķīmija", "103"],
            ["Ķīmija", "103"],
            ["Angļu valoda", "103"],
            ["Bioloģija / Dizains un tehnoloģijas", "302/108"],
            ["Bioloģija / Dizains un tehnoloģijas", "302/108"],
            ["Bioloģija / Dizains un tehnoloģijas", "302/108"]
        ],
        Otrdiena: [
            ["Latviešu valoda", "304"],
            ["Latviešu valoda", "304"],
            ["Sports un veselība", "101"],
            ["Literatūra", "304"],
            ["Literatūra", "304"],
            ["Ķīmija", "103"],
            ["Ķīmija", "103"],
            ["Ķīmija", "103"]
        ],
        Trešdiena: [
            ["Ķīmija", "103"],
            ["Sociālās zinātnes", "206"],
            ["Sociālās zinātnes", "206"],
            ["Matemātika", "209"],
            ["Angļu valoda", "103"],
            ["Bioloģija / Dizains un tehnoloģijas", "212/108"],
            ["Bioloģija / Dizains un tehnoloģijas", "212/108"],
            ["Bioloģija / Dizains un tehnoloģijas", "212/108"]
        ],
        Ceturtdiena: [
            ["Sports un veselība", "101"],
            ["Angļu valoda", "103"],
            ["Sociālās zinātnes", "206"],
            ["Sociālās zinātnes", "206"],
            ["Kultūras pamati", "108"],
            ["Matemātika", "209"],
            ["Kultūras pamati", "108"]
        ],
        Piektdiena: [
            ["Sports un veselība", "101"],
            ["Matemātika", "209"],
            ["Angļu valoda", "103"],
            ["Kultūras pamati", "108"],
            ["Klases stunda", "103"],
            ["Sociālās zinātnes", "206"],
            ["Sociālās zinātnes", "206"]
        ]
    }
};


let currentClass = "";


function showSchedule(className) {

    currentClass = className;

    const scheduleElement = document.getElementById("schedule");
    const classSchedule = schedules[className];

    if (!classSchedule) {
        scheduleElement.innerHTML = "<p>Šai klasei saraksts nav pieejams.</p>";
        return;
    }

    const days = [
        "Pirmdiena",
        "Otrdiena",
        "Trešdiena",
        "Ceturtdiena",
        "Piektdiena"
    ];

    let html = "";

    html += `
        <h2 class="schedule-title">
            ${className === "10" || className === "11" || className === "12"
                ? className + ". klase"
                : className + " klase"}
        </h2>

        <div class="teacher">
            ${classSchedule.teacher}
        </div>

        <div class="day-tabs">
    `;

    days.forEach((day, index) => {

        const shortDay = {
            "Pirmdiena": "PI",
            "Otrdiena": "OT",
            "Trešdiena": "TR",
            "Ceturtdiena": "CE",
            "Piektdiena": "PK"
        };

        html += `
            <button
                class="day-tab ${index === 0 ? "active" : ""}"
                onclick="showDay('${day}', this)"
            >
                ${shortDay[day]}
            </button>
        `;
    });

    html += `
        </div>

        <div id="daySchedule"></div>
    `;

    scheduleElement.innerHTML = html;

    showDay(
        "Pirmdiena",
        document.querySelector(".day-tab")
    );

    scheduleElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


function showDay(day, button) {

    const classSchedule = schedules[currentClass];
    const lessons = classSchedule[day];

    document.querySelectorAll(".day-tab").forEach(tab => {
        tab.classList.remove("active");
    });

    button.classList.add("active");

    let html = `
        <div class="day-title">
            ${day.toUpperCase()}
        </div>
    `;

    lessons.forEach((lesson, index) => {

        const subject = lesson[0];
        const room = lesson[1];

        html += `
            <div class="lesson">

                <div class="lesson-number">
                    ${index + 1}. STUNDA
                </div>

                <div class="lesson-time">
                    ${times[index]}
                </div>

                <div class="lesson-name">
                    ${subject}
                </div>

                <div class="lesson-room">
                    📍 Kabinets ${room}
                </div>

            </div>
        `;
    });

    document.getElementById("daySchedule").innerHTML = html;
}