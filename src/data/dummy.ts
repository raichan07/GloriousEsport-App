export const socialLinks = {
  whatsapp: "https://wa.me/6281234567890",
  instagram: "https://instagram.com/glorious.esport",
  tiktok: "https://tiktok.com/@glorious.esport",
  youtube: "https://youtube.com/@gloriousesport",
  discord: "https://discord.gg/glorious",
  facebook: "https://facebook.com/gloriousesport",
  twitter: "https://twitter.com/gloriousesport",
};

export const stats = {
  totalMember: 120,
  activeMember: 90,
  totalTeam: 6,
  achievement: 15,
  totalEvent: 8,
};

export interface Member {
  nickname: string;
  uid: string;
  name: string;
  asalKota: string;
  role: string;
  image: string | null;
  teamName: string;
  joinDate: string;
  whatsapp: string;
  tiktok: string;
  quote: string;
  status: "active" | "inactive";
  favoriteWeapon: string;
}

export interface Team {
  id: number;
  name: string;
  logo: string | null;
  totalMember: number;
  members: Member[];
}

export const teams: Team[] = [
  {
    id: 1,
    name: "Ai5",
    logo: "/asset/logoTim/logoAi5.jpg",
    totalMember: 5,
    members: [
      { nickname: "GExAhmadAi5",   uid: "1234567890", name: "Ahmad",    asalKota: "Palembang", role: "IGL",     image: "/asset/member/ahmad.jpg",  teamName: "Ai5", joinDate: "2020-03-01", whatsapp: "081234567890", tiktok: "@king_glorious",   quote: "Kalah adalah sukses yang tertunda.",        status: "active", favoriteWeapon: "M416"       },
      { nickname: "GExBayuAi5", uid: "1234567891", name: "Bayu",   asalKota: "Bandung",   role: "Assault", image: "/asset/member/bayu.jpg",   teamName: "Ai5", joinDate: "2020-06-15", whatsapp: "081234567891", tiktok: "@shadow_glorious", quote: "Bermain dengan hati.",                       status: "active", favoriteWeapon: "AKM"        },
      { nickname: "GExAlfieeAi5",   uid: "1234567892", name: "Alfiee",     asalKota: "Surabaya",  role: "Sniper",  image: "/asset/member/alfiee.jpg", teamName: "Ai5", joinDate: "2021-01-10", whatsapp: "081234567892", tiktok: "@ryuk_glorious",   quote: "Satu tembakan, satu kill.",                 status: "active", favoriteWeapon: "AWM"        },
      { nickname: "GExYusfiraAi5",   uid: "1234567893", name: "Roni", asalKota: "Medan",     role: "Support", image: "/asset/member/roni.jpg",   teamName: "Ai5", joinDate: "2021-04-20", whatsapp: "081234567893", tiktok: "@zeus_glorious",   quote: "Tim di atas segalanya.",                    status: "active", favoriteWeapon: "M416"       },
      { nickname: "GExLynixAi5",  uid: "1234567894", name: "Lynix",    asalKota: "Makassar",  role: "Assault", image: "/asset/member/eko.jpg",    teamName: "Ai5", joinDate: "2021-07-05", whatsapp: "081234567894", tiktok: "@viper_glorious",  quote: "Pantang mundur sebelum bertempur.",         status: "active", favoriteWeapon: "Beryl M762" },
    ],
  },
  {
    id: 2,
    name: "AIS",
    logo: null,
    totalMember: 5,
    members: [
      { nickname: "Neo",     uid: "2234567890", name: "Fajar Hidayat",  asalKota: "Jakarta",    role: "IGL",     image: null, teamName: "AIS", joinDate: "2020-08-12", whatsapp: "082234567890", tiktok: "@neo_glorious",     quote: "Strategi adalah kunci kemenangan.", status: "active", favoriteWeapon: "M416"   },
      { nickname: "Phoenix", uid: "2234567891", name: "Gilang Ramadan", asalKota: "Yogyakarta", role: "Sniper",  image: null, teamName: "AIS", joinDate: "2021-02-18", whatsapp: "082234567891", tiktok: "@phoenix_glorious", quote: "Bangkit dari abu.",                 status: "active", favoriteWeapon: "Kar98k" },
      { nickname: "Titan",   uid: "2234567892", name: "Hendra Gunawan", asalKota: "Semarang",   role: "Assault", image: null, teamName: "AIS", joinDate: "2021-05-22", whatsapp: "082234567892", tiktok: "@titan_glorious",   quote: "Kekuatan sejati berasal dari dalam.", status: "active", favoriteWeapon: "SCAR-L" },
      { nickname: "Venom",   uid: "2234567893", name: "Indra Lesmana",  asalKota: "Denpasar",   role: "Support", image: null, teamName: "AIS", joinDate: "2021-09-14", whatsapp: "082234567893", tiktok: "@venom_glorious",   quote: "Mematikan dalam diam.",             status: "active", favoriteWeapon: "UMP45"  },
      { nickname: "Wolf",    uid: "2234567894", name: "Joko Susilo",    asalKota: "Solo",       role: "Assault", image: null, teamName: "AIS", joinDate: "2022-01-30", whatsapp: "082234567894", tiktok: "@wolf_glorious",    quote: "Berburu bersama, menang bersama.",  status: "active", favoriteWeapon: "M762"   },
    ],
  },
  {
    id: 3,
    name: "Alpha",
    logo: null,
    totalMember: 5,
    members: [
      { nickname: "Axel",   uid: "3234567890", name: "Kevin Alexander", asalKota: "Jakarta",  role: "IGL",     image: null, teamName: "Alpha", joinDate: "2020-04-01", whatsapp: "083234567890", tiktok: "@axel_glorious",   quote: "Pemimpin yang baik adalah pemimpin yang melayani.", status: "active", favoriteWeapon: "M416"       },
      { nickname: "Bolt",   uid: "3234567891", name: "Lucas Fernando",  asalKota: "Surabaya", role: "Assault", image: null, teamName: "Alpha", joinDate: "2020-10-10", whatsapp: "083234567891", tiktok: "@bolt_glorious",   quote: "Kecepatan adalah senjataku.",                       status: "active", favoriteWeapon: "AKM"        },
      { nickname: "Cipher", uid: "3234567892", name: "Mario Teguh",     asalKota: "Bandung",  role: "Sniper",  image: null, teamName: "Alpha", joinDate: "2021-03-15", whatsapp: "083234567892", tiktok: "@cipher_glorious", quote: "Membaca pergerakan lawan.",                         status: "active", favoriteWeapon: "AWM"        },
      { nickname: "Dash",   uid: "3234567893", name: "Nanda Pratama",   asalKota: "Malang",   role: "Support", image: null, teamName: "Alpha", joinDate: "2021-08-20", whatsapp: "083234567893", tiktok: "@dash_glorious",   quote: "Dukungan adalah fondasi kemenangan.",               status: "active", favoriteWeapon: "M416"       },
      { nickname: "Echo",   uid: "3234567894", name: "Oscar Wirawan",   asalKota: "Bogor",    role: "Assault", image: null, teamName: "Alpha", joinDate: "2022-02-14", whatsapp: "083234567894", tiktok: "@echo_glorious",   quote: "Suara langkahku adalah akhir bagimu.",              status: "active", favoriteWeapon: "Beryl M762" },
    ],
  },
  {
    id: 4,
    name: "Bravo",
    logo: null,
    totalMember: 5,
    members: [
      { nickname: "Ace",  uid: "4234567890", name: "Pandu Setiawan",    asalKota: "Bekasi",      role: "IGL",     image: null, teamName: "Bravo", joinDate: "2021-01-05", whatsapp: "084234567890", tiktok: "@ace_glorious",  quote: "Nomor satu adalah tujuan utama.",    status: "active", favoriteWeapon: "M416"   },
      { nickname: "Boss", uid: "4234567891", name: "Qori Firmansyah",   asalKota: "Tangerang",   role: "Assault", image: null, teamName: "Bravo", joinDate: "2021-06-18", whatsapp: "084234567891", tiktok: "@boss_glorious", quote: "Usaha tidak pernah mengkhianati.",   status: "active", favoriteWeapon: "SCAR-L" },
      { nickname: "Cruz", uid: "4234567892", name: "Rizky Ardiansyah",  asalKota: "Depok",       role: "Sniper",  image: null, teamName: "Bravo", joinDate: "2021-10-22", whatsapp: "084234567892", tiktok: "@cruz_glorious", quote: "Kesabaran adalah peluru terbaik.",   status: "active", favoriteWeapon: "Kar98k" },
      { nickname: "Duke", uid: "4234567893", name: "Sari Dewi Lestari", asalKota: "Palembang",   role: "Support", image: null, teamName: "Bravo", joinDate: "2022-03-11", whatsapp: "084234567893", tiktok: "@duke_glorious", quote: "Bersatu kita teguh.",                status: "active", favoriteWeapon: "UMP45"  },
      { nickname: "Edge", uid: "4234567894", name: "Teuku Ryan",        asalKota: "Banda Aceh",  role: "Assault", image: null, teamName: "Bravo", joinDate: "2022-06-25", whatsapp: "084234567894", tiktok: "@edge_glorious", quote: "Tepi jurang adalah tempat terbaik.", status: "active", favoriteWeapon: "M762"   },
    ],
  },
  {
    id: 5,
    name: "Delta",
    logo: null,
    totalMember: 5,
    members: [
      { nickname: "Archer",  uid: "5234567890", name: "Umar Zaki",    asalKota: "Banjarmasin", role: "IGL",     image: null, teamName: "Delta", joinDate: "2021-02-14", whatsapp: "085234567890", tiktok: "@archer_glorious",  quote: "Tepat sasaran, tepat waktu.",     status: "active", favoriteWeapon: "M416"   },
      { nickname: "Blade",   uid: "5234567891", name: "Vino Bastian", asalKota: "Pontianak",   role: "Sniper",  image: null, teamName: "Delta", joinDate: "2021-07-30", whatsapp: "085234567891", tiktok: "@blade_glorious",   quote: "Tajam seperti pisau.",            status: "active", favoriteWeapon: "AWM"    },
      { nickname: "Cobalt",  uid: "5234567892", name: "Winda Sari",   asalKota: "Samarinda",   role: "Assault", image: null, teamName: "Delta", joinDate: "2021-12-05", whatsapp: "085234567892", tiktok: "@cobalt_glorious",  quote: "Biru tak selalu sedih.",          status: "active", favoriteWeapon: "AKM"    },
      { nickname: "Drift",   uid: "5234567893", name: "Xavier Putra",  asalKota: "Balikpapan",  role: "Support", image: null, teamName: "Delta", joinDate: "2022-04-18", whatsapp: "085234567893", tiktok: "@drift_glorious",   quote: "Mengalir seperti air.",           status: "active", favoriteWeapon: "Thompson"},
      { nickname: "Eclipse", uid: "5234567894", name: "Yoga Pratomo",  asalKota: "Manado",      role: "Assault", image: null, teamName: "Delta", joinDate: "2022-08-08", whatsapp: "085234567894", tiktok: "@eclipse_glorious", quote: "Gerhana adalah awal babak baru.", status: "active", favoriteWeapon: "Beryl M762" },
    ],
  },
  {
    id: 6,
    name: "Omega",
    logo: null,
    totalMember: 5,
    members: [
      { nickname: "Bane",   uid: "6234567890", name: "Zacky Anwar",     asalKota: "Pekanbaru", role: "IGL",     image: null, teamName: "Omega", joinDate: "2020-11-20", whatsapp: "086234567890", tiktok: "@bane_glorious",   quote: "Akhir dari segalanya.",               status: "active", favoriteWeapon: "M416"  },
      { nickname: "Cypher", uid: "6234567891", name: "Andi Kurnia",     asalKota: "Padang",    role: "Assault", image: null, teamName: "Omega", joinDate: "2021-05-10", whatsapp: "086234567891", tiktok: "@cypher_glorious", quote: "Kode adalah pedangku.",               status: "active", favoriteWeapon: "SCAR-L"},
      { nickname: "Draco",  uid: "6234567892", name: "Bambang Suprapto",asalKota: "Lampung",   role: "Sniper",  image: null, teamName: "Omega", joinDate: "2021-09-28", whatsapp: "086234567892", tiktok: "@draco_glorious",  quote: "Naga api yang tak terkalahkan.",      status: "active", favoriteWeapon: "Kar98k"},
      { nickname: "Enigma", uid: "6234567893", name: "Cahyo Nugroho",   asalKota: "Jambi",     role: "Support", image: null, teamName: "Omega", joinDate: "2022-02-05", whatsapp: "086234567893", tiktok: "@enigma_glorious", quote: "Misteri adalah identitasku.",          status: "active", favoriteWeapon: "UMP45" },
      { nickname: "Fenix",  uid: "6234567894", name: "Deni Ramdhan",    asalKota: "Batam",     role: "Assault", image: null, teamName: "Omega", joinDate: "2022-07-15", whatsapp: "086234567894", tiktok: "@fenix_glorious",  quote: "Terlahir kembali dari api.",          status: "active", favoriteWeapon: "M762"  },
    ],
  },
];

export interface ScrimResult {
  week: string;
  teamRankings: {
    rank: number;
    teamName: string;
    members: Pick<Member, "nickname" | "uid" | "name" | "asalKota" | "role" | "image" | "teamName" | "joinDate" | "whatsapp" | "tiktok" | "quote">[];
  }[];
  individualAwards: {
    category: string;
    playerNickname: string;
    teamName: string;
  }[];
}

export const scrimResults: ScrimResult[] = [
  {
    week: "Minggu 1 - Juni 2026",
    teamRankings: [
      {
        rank: 1,
        teamName: "Alpha",
        members: [
          { nickname: "Axel",   uid: "3234567890", name: "Kevin Alexander", asalKota: "Jakarta",  role: "IGL",     image: null, teamName: "Alpha", joinDate: "2020-04-01", whatsapp: "083234567890", tiktok: "@axel_glorious",   quote: "Pemimpin yang baik adalah pemimpin yang melayani." },
          { nickname: "Bolt",   uid: "3234567891", name: "Lucas Fernando",  asalKota: "Surabaya", role: "Assault", image: null, teamName: "Alpha", joinDate: "2020-10-10", whatsapp: "083234567891", tiktok: "@bolt_glorious",   quote: "Kecepatan adalah senjataku." },
          { nickname: "Cipher", uid: "3234567892", name: "Mario Teguh",     asalKota: "Bandung",  role: "Sniper",  image: null, teamName: "Alpha", joinDate: "2021-03-15", whatsapp: "083234567892", tiktok: "@cipher_glorious", quote: "Membaca pergerakan lawan." },
          { nickname: "Dash",   uid: "3234567893", name: "Nanda Pratama",   asalKota: "Malang",   role: "Support", image: null, teamName: "Alpha", joinDate: "2021-08-20", whatsapp: "083234567893", tiktok: "@dash_glorious",   quote: "Dukungan adalah fondasi kemenangan." },
          { nickname: "Echo",   uid: "3234567894", name: "Oscar Wirawan",   asalKota: "Bogor",    role: "Assault", image: null, teamName: "Alpha", joinDate: "2022-02-14", whatsapp: "083234567894", tiktok: "@echo_glorious",   quote: "Suara langkahku adalah akhir bagimu." },
        ],
      },
      {
        rank: 2,
        teamName: "Omega",
        members: [
          { nickname: "Bane",   uid: "6234567890", name: "Zacky Anwar",      asalKota: "Pekanbaru", role: "IGL",     image: null, teamName: "Omega", joinDate: "2020-11-20", whatsapp: "086234567890", tiktok: "@bane_glorious",   quote: "Akhir dari segalanya." },
          { nickname: "Cypher", uid: "6234567891", name: "Andi Kurnia",      asalKota: "Padang",    role: "Assault", image: null, teamName: "Omega", joinDate: "2021-05-10", whatsapp: "086234567891", tiktok: "@cypher_glorious", quote: "Kode adalah pedangku." },
          { nickname: "Draco",  uid: "6234567892", name: "Bambang Suprapto", asalKota: "Lampung",   role: "Sniper",  image: null, teamName: "Omega", joinDate: "2021-09-28", whatsapp: "086234567892", tiktok: "@draco_glorious",  quote: "Naga api yang tak terkalahkan." },
          { nickname: "Enigma", uid: "6234567893", name: "Cahyo Nugroho",    asalKota: "Jambi",     role: "Support", image: null, teamName: "Omega", joinDate: "2022-02-05", whatsapp: "086234567893", tiktok: "@enigma_glorious", quote: "Misteri adalah identitasku." },
          { nickname: "Fenix",  uid: "6234567894", name: "Deni Ramdhan",     asalKota: "Batam",     role: "Assault", image: null, teamName: "Omega", joinDate: "2022-07-15", whatsapp: "086234567894", tiktok: "@fenix_glorious",  quote: "Terlahir kembali dari api." },
        ],
      },
      {
        rank: 3,
        teamName: "Ai5",
        members: [
          { nickname: "King",   uid: "1234567890", name: "Ahmad Fauzi",    asalKota: "Palembang", role: "IGL",     image: "/asset/member/ahmad.jpg",  teamName: "Ai5", joinDate: "2020-03-01", whatsapp: "081234567890", tiktok: "@king_glorious",   quote: "Kalah adalah sukses yang tertunda." },
          { nickname: "Shadow", uid: "1234567891", name: "Budi Pratama",   asalKota: "Bandung",   role: "Assault", image: "/asset/member/bayu.jpg",   teamName: "Ai5", joinDate: "2020-06-15", whatsapp: "081234567891", tiktok: "@shadow_glorious", quote: "Bermain dengan hati." },
          { nickname: "Ryuk",   uid: "1234567892", name: "Citra Dewi",     asalKota: "Surabaya",  role: "Sniper",  image: "/asset/member/alfiee.jpg", teamName: "Ai5", joinDate: "2021-01-10", whatsapp: "081234567892", tiktok: "@ryuk_glorious",   quote: "Satu tembakan, satu kill." },
          { nickname: "Zeus",   uid: "1234567893", name: "Dedi Kurniawan", asalKota: "Medan",     role: "Support", image: "/asset/member/roni.jpg",   teamName: "Ai5", joinDate: "2021-04-20", whatsapp: "081234567893", tiktok: "@zeus_glorious",   quote: "Tim di atas segalanya." },
          { nickname: "Viper",  uid: "1234567894", name: "Eko Saputra",    asalKota: "Makassar",  role: "Assault", image: "/asset/member/eko.jpg",    teamName: "Ai5", joinDate: "2021-07-05", whatsapp: "081234567894", tiktok: "@viper_glorious",  quote: "Pantang mundur sebelum bertempur." },
        ],
      },
      {
        rank: 4,
        teamName: "AIS",
        members: [
          { nickname: "Neo",     uid: "2234567890", name: "Fajar Hidayat",  asalKota: "Jakarta",    role: "IGL",     image: null, teamName: "AIS", joinDate: "2020-08-12", whatsapp: "082234567890", tiktok: "@neo_glorious",     quote: "Strategi adalah kunci kemenangan." },
          { nickname: "Phoenix", uid: "2234567891", name: "Gilang Ramadan", asalKota: "Yogyakarta", role: "Sniper",  image: null, teamName: "AIS", joinDate: "2021-02-18", whatsapp: "082234567891", tiktok: "@phoenix_glorious", quote: "Bangkit dari abu." },
          { nickname: "Titan",   uid: "2234567892", name: "Hendra Gunawan", asalKota: "Semarang",   role: "Assault", image: null, teamName: "AIS", joinDate: "2021-05-22", whatsapp: "082234567892", tiktok: "@titan_glorious",   quote: "Kekuatan sejati berasal dari dalam." },
          { nickname: "Venom",   uid: "2234567893", name: "Indra Lesmana",  asalKota: "Denpasar",   role: "Support", image: null, teamName: "AIS", joinDate: "2021-09-14", whatsapp: "082234567893", tiktok: "@venom_glorious",   quote: "Mematikan dalam diam." },
          { nickname: "Wolf",    uid: "2234567894", name: "Joko Susilo",    asalKota: "Solo",       role: "Assault", image: null, teamName: "AIS", joinDate: "2022-01-30", whatsapp: "082234567894", tiktok: "@wolf_glorious",    quote: "Berburu bersama, menang bersama." },
        ],
      },
    ],
    individualAwards: [
      { category: "Kill Terbanyak", playerNickname: "Axel",   teamName: "Alpha" },
      { category: "MVP Mingguan",   playerNickname: "Bane",   teamName: "Omega" },
      { category: "Support Terbaik",playerNickname: "Enigma", teamName: "Omega" },
      { category: "Sniper Terbaik", playerNickname: "Cipher", teamName: "Alpha" },
    ],
  },
];

export const organization = {
  leader: {
    nickname: "Supriadi",
    position: "Owner",
    image: "/asset/member/ahmad.jpg",
  },
  officers: [
    { nickname: "Shadow", position: "Petugas 1",      image: "/asset/member/bayu.jpg"   },
    { nickname: "Ryuk",   position: "Petugas 2",             image: "/asset/member/alfiee.jpg" },
    { nickname: "Zeus",   position: "Petugas 3",   image: "/asset/member/roni.jpg"   },
    { nickname: "Viper",  position: "Petugas 4",           image: "/asset/member/eko.jpg"    },
    { nickname: "Storm",  position: "Petugas 5",             image: "/asset/member/lynix.jpg"  },
  ],
};
