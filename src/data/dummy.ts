export const socialLinks = {
  whatsapp: "https://wa.me/6281234567890",
  instagram: "https://instagram.com/glorious.esport",
  tiktok: "https://tiktok.com/@glorious.esport",
  youtube: "https://youtube.com/@gloriousesport",
  discord: "https://discord.gg/glorious",
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
  role: string;
  rank: string;
  image: string | null;
  teamName: string;
  joinDate: string;
  whatsapp: string;
  tiktok: string;
  quote: string;
  status: "active" | "inactive";
  playTime: string;
  winRate: string;
  kdRatio: string;
  favoriteWeapon: string;
}

export interface Team {
  id: number;
  name: string;
  logo: null;
  totalMember: number;
  members: Member[];
}

export const teams: Team[] = [
  {
    id: 1,
    name: "AI5",
    logo: null,
    totalMember: 5,
    members: [
      { nickname: "King", uid: "1234567890", name: "Ahmad Fauzi", role: "IGL", rank: "Conqueror", image: null, teamName: "AI5", joinDate: "2020-03-01", whatsapp: "081234567890", tiktok: "@king_glorious", quote: "Kalah adalah sukses yang tertunda.", status: "active", playTime: "2.400 jam", winRate: "28.5%", kdRatio: "4.2", favoriteWeapon: "M416" },
      { nickname: "Shadow", uid: "1234567891", name: "Budi Pratama", role: "Assault", rank: "Ace Master", image: null, teamName: "AI5", joinDate: "2020-06-15", whatsapp: "081234567891", tiktok: "@shadow_glorious", quote: "Bermain dengan hati.", status: "active", playTime: "1.800 jam", winRate: "24.1%", kdRatio: "3.8", favoriteWeapon: "AKM" },
      { nickname: "Ryuk", uid: "1234567892", name: "Citra Dewi", role: "Sniper", rank: "Ace", image: null, teamName: "AI5", joinDate: "2021-01-10", whatsapp: "081234567892", tiktok: "@ryuk_glorious", quote: "Satu tembakan, satu kill.", status: "active", playTime: "2.100 jam", winRate: "22.3%", kdRatio: "3.5", favoriteWeapon: "AWM" },
      { nickname: "Zeus", uid: "1234567893", name: "Dedi Kurniawan", role: "Support", rank: "Crown", image: null, teamName: "AI5", joinDate: "2021-04-20", whatsapp: "081234567893", tiktok: "@zeus_glorious", quote: "Tim di atas segalanya.", status: "active", playTime: "1.500 jam", winRate: "20.8%", kdRatio: "2.9", favoriteWeapon: "M416" },
      { nickname: "Viper", uid: "1234567894", name: "Eko Saputra", role: "Assault", rank: "Ace", image: null, teamName: "AI5", joinDate: "2021-07-05", whatsapp: "081234567894", tiktok: "@viper_glorious", quote: "Pantang mundur sebelum bertempur.", status: "active", playTime: "1.900 jam", winRate: "23.7%", kdRatio: "3.6", favoriteWeapon: "Beryl M762" },
    ],
  },
  {
    id: 2,
    name: "AIS",
    logo: null,
    totalMember: 5,
    members: [
      { nickname: "Neo", uid: "2234567890", name: "Fajar Hidayat", role: "IGL", rank: "Ace Master", image: null, teamName: "AIS", joinDate: "2020-08-12", whatsapp: "082234567890", tiktok: "@neo_glorious", quote: "Strategi adalah kunci kemenangan.", status: "active", playTime: "2.000 jam", winRate: "25.2%", kdRatio: "3.9", favoriteWeapon: "M416" },
      { nickname: "Phoenix", uid: "2234567891", name: "Gilang Ramadan", role: "Sniper", rank: "Ace", image: null, teamName: "AIS", joinDate: "2021-02-18", whatsapp: "082234567891", tiktok: "@phoenix_glorious", quote: "Bangkit dari abu.", status: "active", playTime: "1.700 jam", winRate: "21.5%", kdRatio: "3.2", favoriteWeapon: "Kar98k" },
      { nickname: "Titan", uid: "2234567892", name: "Hendra Gunawan", role: "Assault", rank: "Crown", image: null, teamName: "AIS", joinDate: "2021-05-22", whatsapp: "082234567892", tiktok: "@titan_glorious", quote: "Kekuatan sejati berasal dari dalam.", status: "active", playTime: "1.400 jam", winRate: "19.8%", kdRatio: "2.8", favoriteWeapon: "SCAR-L" },
      { nickname: "Venom", uid: "2234567893", name: "Indra Lesmana", role: "Support", rank: "Ace", image: null, teamName: "AIS", joinDate: "2021-09-14", whatsapp: "082234567893", tiktok: "@venom_glorious", quote: "Mematikan dalam diam.", status: "active", playTime: "1.600 jam", winRate: "22.1%", kdRatio: "3.1", favoriteWeapon: "UMP45" },
      { nickname: "Wolf", uid: "2234567894", name: "Joko Susilo", role: "Assault", rank: "Crown", image: null, teamName: "AIS", joinDate: "2022-01-30", whatsapp: "082234567894", tiktok: "@wolf_glorious", quote: "Berburu bersama, menang bersama.", status: "active", playTime: "1.200 jam", winRate: "18.4%", kdRatio: "2.5", favoriteWeapon: "M762" },
    ],
  },
  {
    id: 3,
    name: "Alpha",
    logo: null,
    totalMember: 5,
    members: [
      { nickname: "Axel", uid: "3234567890", name: "Kevin Alexander", role: "IGL", rank: "Conqueror", image: null, teamName: "Alpha", joinDate: "2020-04-01", whatsapp: "083234567890", tiktok: "@axel_glorious", quote: "Pemimpin yang baik adalah pemimpin yang melayani.", status: "active", playTime: "2.500 jam", winRate: "29.0%", kdRatio: "4.5", favoriteWeapon: "M416" },
      { nickname: "Bolt", uid: "3234567891", name: "Lucas Fernando", role: "Assault", rank: "Ace Master", image: null, teamName: "Alpha", joinDate: "2020-10-10", whatsapp: "083234567891", tiktok: "@bolt_glorious", quote: "Kecepatan adalah senjataku.", status: "active", playTime: "2.100 jam", winRate: "24.8%", kdRatio: "4.0", favoriteWeapon: "AKM" },
      { nickname: "Cipher", uid: "3234567892", name: "Mario Teguh", role: "Sniper", rank: "Ace", image: null, teamName: "Alpha", joinDate: "2021-03-15", whatsapp: "083234567892", tiktok: "@cipher_glorious", quote: "Membaca pergerakan lawan.", status: "active", playTime: "1.800 jam", winRate: "22.6%", kdRatio: "3.4", favoriteWeapon: "AWM" },
      { nickname: "Dash", uid: "3234567893", name: "Nanda Pratama", role: "Support", rank: "Crown", image: null, teamName: "Alpha", joinDate: "2021-08-20", whatsapp: "083234567893", tiktok: "@dash_glorious", quote: "Dukungan adalah fondasi kemenangan.", status: "active", playTime: "1.500 jam", winRate: "20.1%", kdRatio: "2.7", favoriteWeapon: "M416" },
      { nickname: "Echo", uid: "3234567894", name: "Oscar Wirawan", role: "Assault", rank: "Ace", image: null, teamName: "Alpha", joinDate: "2022-02-14", whatsapp: "083234567894", tiktok: "@echo_glorious", quote: "Suara langkahku adalah akhir bagimu.", status: "active", playTime: "1.300 jam", winRate: "19.5%", kdRatio: "2.6", favoriteWeapon: "Beryl M762" },
    ],
  },
  {
    id: 4,
    name: "Bravo",
    logo: null,
    totalMember: 5,
    members: [
      { nickname: "Ace", uid: "4234567890", name: "Pandu Setiawan", role: "IGL", rank: "Ace", image: null, teamName: "Bravo", joinDate: "2021-01-05", whatsapp: "084234567890", tiktok: "@ace_glorious", quote: "Nomor satu adalah tujuan utama.", status: "active", playTime: "1.700 jam", winRate: "21.3%", kdRatio: "3.3", favoriteWeapon: "M416" },
      { nickname: "Boss", uid: "4234567891", name: "Qori Firmansyah", role: "Assault", rank: "Crown", image: null, teamName: "Bravo", joinDate: "2021-06-18", whatsapp: "084234567891", tiktok: "@boss_glorious", quote: "Usaha tidak pernah mengkhianati.", status: "active", playTime: "1.400 jam", winRate: "19.2%", kdRatio: "2.8", favoriteWeapon: "SCAR-L" },
      { nickname: "Cruz", uid: "4234567892", name: "Rizky Ardiansyah", role: "Sniper", rank: "Crown", image: null, teamName: "Bravo", joinDate: "2021-10-22", whatsapp: "084234567892", tiktok: "@cruz_glorious", quote: "Kesabaran adalah peluru terbaik.", status: "active", playTime: "1.300 jam", winRate: "18.7%", kdRatio: "2.6", favoriteWeapon: "Kar98k" },
      { nickname: "Duke", uid: "4234567893", name: "Sari Dewi Lestari", role: "Support", rank: "Diamond", image: null, teamName: "Bravo", joinDate: "2022-03-11", whatsapp: "084234567893", tiktok: "@duke_glorious", quote: "Bersatu kita teguh.", status: "active", playTime: "1.000 jam", winRate: "17.1%", kdRatio: "2.3", favoriteWeapon: "UMP45" },
      { nickname: "Edge", uid: "4234567894", name: "Teuku Ryan", role: "Assault", rank: "Crown", image: null, teamName: "Bravo", joinDate: "2022-06-25", whatsapp: "084234567894", tiktok: "@edge_glorious", quote: "Tepi jurang adalah tempat terbaik.", status: "active", playTime: "900 jam", winRate: "16.8%", kdRatio: "2.4", favoriteWeapon: "M762" },
    ],
  },
  {
    id: 5,
    name: "Delta",
    logo: null,
    totalMember: 5,
    members: [
      { nickname: "Archer", uid: "5234567890", name: "Umar Zaki", role: "IGL", rank: "Ace", image: null, teamName: "Delta", joinDate: "2021-02-14", whatsapp: "085234567890", tiktok: "@archer_glorious", quote: "Tepat sasaran, tepat waktu.", status: "active", playTime: "1.600 jam", winRate: "22.0%", kdRatio: "3.0", favoriteWeapon: "M416" },
      { nickname: "Blade", uid: "5234567891", name: "Vino Bastian", role: "Sniper", rank: "Ace", image: null, teamName: "Delta", joinDate: "2021-07-30", whatsapp: "085234567891", tiktok: "@blade_glorious", quote: "Tajam seperti pisau.", status: "active", playTime: "1.800 jam", winRate: "21.4%", kdRatio: "3.1", favoriteWeapon: "AWM" },
      { nickname: "Cobalt", uid: "5234567892", name: "Winda Sari", role: "Assault", rank: "Crown", image: null, teamName: "Delta", joinDate: "2021-12-05", whatsapp: "085234567892", tiktok: "@cobalt_glorious", quote: "Biru tak selalu sedih.", status: "active", playTime: "1.300 jam", winRate: "19.0%", kdRatio: "2.7", favoriteWeapon: "AKM" },
      { nickname: "Drift", uid: "5234567893", name: "Xavier Putra", role: "Support", rank: "Diamond", image: null, teamName: "Delta", joinDate: "2022-04-18", whatsapp: "085234567893", tiktok: "@drift_glorious", quote: "Mengalir seperti air.", status: "active", playTime: "1.100 jam", winRate: "17.5%", kdRatio: "2.2", favoriteWeapon: "Thompson" },
      { nickname: "Eclipse", uid: "5234567894", name: "Yoga Pratomo", role: "Assault", rank: "Crown", image: null, teamName: "Delta", joinDate: "2022-08-08", whatsapp: "085234567894", tiktok: "@eclipse_glorious", quote: "Gerhana adalah awal babak baru.", status: "active", playTime: "950 jam", winRate: "17.0%", kdRatio: "2.3", favoriteWeapon: "Beryl M762" },
    ],
  },
  {
    id: 6,
    name: "Omega",
    logo: null,
    totalMember: 5,
    members: [
      { nickname: "Bane", uid: "6234567890", name: "Zacky Anwar", role: "IGL", rank: "Ace Master", image: null, teamName: "Omega", joinDate: "2020-11-20", whatsapp: "086234567890", tiktok: "@bane_glorious", quote: "Akhir dari segalanya.", status: "active", playTime: "2.200 jam", winRate: "26.3%", kdRatio: "4.1", favoriteWeapon: "M416" },
      { nickname: "Cypher", uid: "6234567891", name: "Andi Kurnia", role: "Assault", rank: "Ace", image: null, teamName: "Omega", joinDate: "2021-05-10", whatsapp: "086234567891", tiktok: "@cypher_glorious", quote: "Kode adalah pedangku.", status: "active", playTime: "1.900 jam", winRate: "23.5%", kdRatio: "3.7", favoriteWeapon: "SCAR-L" },
      { nickname: "Draco", uid: "6234567892", name: "Bambang Suprapto", role: "Sniper", rank: "Crown", image: null, teamName: "Omega", joinDate: "2021-09-28", whatsapp: "086234567892", tiktok: "@draco_glorious", quote: "Naga api yang tak terkalahkan.", status: "active", playTime: "1.500 jam", winRate: "20.4%", kdRatio: "3.0", favoriteWeapon: "Kar98k" },
      { nickname: "Enigma", uid: "6234567893", name: "Cahyo Nugroho", role: "Support", rank: "Crown", image: null, teamName: "Omega", joinDate: "2022-02-05", whatsapp: "086234567893", tiktok: "@enigma_glorious", quote: "Misteri adalah identitasku.", status: "active", playTime: "1.200 jam", winRate: "18.9%", kdRatio: "2.5", favoriteWeapon: "UMP45" },
      { nickname: "Fenix", uid: "6234567894", name: "Deni Ramdhan", role: "Assault", rank: "Ace", image: null, teamName: "Omega", joinDate: "2022-07-15", whatsapp: "086234567894", tiktok: "@fenix_glorious", quote: "Terlahir kembali dari api.", status: "active", playTime: "1.100 jam", winRate: "18.2%", kdRatio: "2.6", favoriteWeapon: "M762" },
    ],
  },
];

export interface ScrimResult {
  week: string;
  teamRankings: {
    rank: number;
    teamName: string;
    members: Pick<Member, "nickname" | "uid" | "name" | "role" | "rank" | "image" | "teamName" | "joinDate" | "whatsapp" | "tiktok" | "quote" | "playTime">[];
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
          { nickname: "Axel", uid: "3234567890", name: "Kevin Alexander", role: "IGL", rank: "Conqueror", image: null, teamName: "Alpha", joinDate: "2020-04-01", whatsapp: "083234567890", tiktok: "@axel_glorious", quote: "Pemimpin yang baik adalah pemimpin yang melayani.", playTime: "2.500 jam" },
          { nickname: "Bolt", uid: "3234567891", name: "Lucas Fernando", role: "Assault", rank: "Ace Master", image: null, teamName: "Alpha", joinDate: "2020-10-10", whatsapp: "083234567891", tiktok: "@bolt_glorious", quote: "Kecepatan adalah senjataku.", playTime: "2.100 jam" },
          { nickname: "Cipher", uid: "3234567892", name: "Mario Teguh", role: "Sniper", rank: "Ace", image: null, teamName: "Alpha", joinDate: "2021-03-15", whatsapp: "083234567892", tiktok: "@cipher_glorious", quote: "Membaca pergerakan lawan.", playTime: "1.800 jam" },
          { nickname: "Dash", uid: "3234567893", name: "Nanda Pratama", role: "Support", rank: "Crown", image: null, teamName: "Alpha", joinDate: "2021-08-20", whatsapp: "083234567893", tiktok: "@dash_glorious", quote: "Dukungan adalah fondasi kemenangan.", playTime: "1.500 jam" },
          { nickname: "Echo", uid: "3234567894", name: "Oscar Wirawan", role: "Assault", rank: "Ace", image: null, teamName: "Alpha", joinDate: "2022-02-14", whatsapp: "083234567894", tiktok: "@echo_glorious", quote: "Suara langkahku adalah akhir bagimu.", playTime: "1.300 jam" },
        ],
      },
      {
        rank: 2,
        teamName: "Omega",
        members: [
          { nickname: "Bane", uid: "6234567890", name: "Zacky Anwar", role: "IGL", rank: "Ace Master", image: null, teamName: "Omega", joinDate: "2020-11-20", whatsapp: "086234567890", tiktok: "@bane_glorious", quote: "Akhir dari segalanya.", playTime: "2.200 jam" },
          { nickname: "Cypher", uid: "6234567891", name: "Andi Kurnia", role: "Assault", rank: "Ace", image: null, teamName: "Omega", joinDate: "2021-05-10", whatsapp: "086234567891", tiktok: "@cypher_glorious", quote: "Kode adalah pedangku.", playTime: "1.900 jam" },
          { nickname: "Draco", uid: "6234567892", name: "Bambang Suprapto", role: "Sniper", rank: "Crown", image: null, teamName: "Omega", joinDate: "2021-09-28", whatsapp: "086234567892", tiktok: "@draco_glorious", quote: "Naga api yang tak terkalahkan.", playTime: "1.500 jam" },
          { nickname: "Enigma", uid: "6234567893", name: "Cahyo Nugroho", role: "Support", rank: "Crown", image: null, teamName: "Omega", joinDate: "2022-02-05", whatsapp: "086234567893", tiktok: "@enigma_glorious", quote: "Misteri adalah identitasku.", playTime: "1.200 jam" },
          { nickname: "Fenix", uid: "6234567894", name: "Deni Ramdhan", role: "Assault", rank: "Ace", image: null, teamName: "Omega", joinDate: "2022-07-15", whatsapp: "086234567894", tiktok: "@fenix_glorious", quote: "Terlahir kembali dari api.", playTime: "1.100 jam" },
        ],
      },
      {
        rank: 3,
        teamName: "AI5",
        members: [
          { nickname: "King", uid: "1234567890", name: "Ahmad Fauzi", role: "IGL", rank: "Conqueror", image: null, teamName: "AI5", joinDate: "2020-03-01", whatsapp: "081234567890", tiktok: "@king_glorious", quote: "Kalah adalah sukses yang tertunda.", playTime: "2.400 jam" },
          { nickname: "Shadow", uid: "1234567891", name: "Budi Pratama", role: "Assault", rank: "Ace Master", image: null, teamName: "AI5", joinDate: "2020-06-15", whatsapp: "081234567891", tiktok: "@shadow_glorious", quote: "Bermain dengan hati.", playTime: "1.800 jam" },
          { nickname: "Ryuk", uid: "1234567892", name: "Citra Dewi", role: "Sniper", rank: "Ace", image: null, teamName: "AI5", joinDate: "2021-01-10", whatsapp: "081234567892", tiktok: "@ryuk_glorious", quote: "Satu tembakan, satu kill.", playTime: "2.100 jam" },
          { nickname: "Zeus", uid: "1234567893", name: "Dedi Kurniawan", role: "Support", rank: "Crown", image: null, teamName: "AI5", joinDate: "2021-04-20", whatsapp: "081234567893", tiktok: "@zeus_glorious", quote: "Tim di atas segalanya.", playTime: "1.500 jam" },
          { nickname: "Viper", uid: "1234567894", name: "Eko Saputra", role: "Assault", rank: "Ace", image: null, teamName: "AI5", joinDate: "2021-07-05", whatsapp: "081234567894", tiktok: "@viper_glorious", quote: "Pantang mundur sebelum bertempur.", playTime: "1.900 jam" },
        ],
      },
      {
        rank: 4,
        teamName: "AIS",
        members: [
          { nickname: "Neo", uid: "2234567890", name: "Fajar Hidayat", role: "IGL", rank: "Ace Master", image: null, teamName: "AIS", joinDate: "2020-08-12", whatsapp: "082234567890", tiktok: "@neo_glorious", quote: "Strategi adalah kunci kemenangan.", playTime: "2.000 jam" },
          { nickname: "Phoenix", uid: "2234567891", name: "Gilang Ramadan", role: "Sniper", rank: "Ace", image: null, teamName: "AIS", joinDate: "2021-02-18", whatsapp: "082234567891", tiktok: "@phoenix_glorious", quote: "Bangkit dari abu.", playTime: "1.700 jam" },
          { nickname: "Titan", uid: "2234567892", name: "Hendra Gunawan", role: "Assault", rank: "Crown", image: null, teamName: "AIS", joinDate: "2021-05-22", whatsapp: "082234567892", tiktok: "@titan_glorious", quote: "Kekuatan sejati berasal dari dalam.", playTime: "1.400 jam" },
          { nickname: "Venom", uid: "2234567893", name: "Indra Lesmana", role: "Support", rank: "Ace", image: null, teamName: "AIS", joinDate: "2021-09-14", whatsapp: "082234567893", tiktok: "@venom_glorious", quote: "Mematikan dalam diam.", playTime: "1.600 jam" },
          { nickname: "Wolf", uid: "2234567894", name: "Joko Susilo", role: "Assault", rank: "Crown", image: null, teamName: "AIS", joinDate: "2022-01-30", whatsapp: "082234567894", tiktok: "@wolf_glorious", quote: "Berburu bersama, menang bersama.", playTime: "1.200 jam" },
        ],
      },
    ],
    individualAwards: [
      { category: "Kill Terbanyak", playerNickname: "Axel", teamName: "Alpha" },
      { category: "MVP Mingguan", playerNickname: "Bane", teamName: "Omega" },
      { category: "Support Terbaik", playerNickname: "Enigma", teamName: "Omega" },
      { category: "Sniper Terbaik", playerNickname: "Cipher", teamName: "Alpha" },
    ],
  },
];

export const organization = {
  leader: {
    nickname: "King",
    position: "Ketua Clan",
    image: "/member1.jpg",
  },
  officers: [
    {
      nickname: "Shadow",
      position: "Wakil Ketua",
      image: "/member2.jpg",
    },
    {
      nickname: "Ryuk",
      position: "Admin",
      image: "/member3.jpg",
    },
    {
      nickname: "Zeus",
      position: "Koordinator Tim",
      image: "/member4.jpg",
    },
    {
      nickname: "Viper",
      position: "Pelatih",
      image: "/member5.jpg",
    },
    {
      nickname: "Storm",
      position: "Admin",
      image: "/member6.jpg",
    },
  ],
};