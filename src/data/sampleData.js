export const artistData = [
  {
    id: "pianist-seoyeon",
    name: "이서연",
    engName: "Seoyeon Lee",
    instrument: "Piano",
    intro: "감성을 연주하는 피아니스트 이서연입니다.",
    profileImage: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2670&auto=format&fit=crop", 
    bio: `음악은 저에게 언어 그 이상입니다. 
    
    5세부터 피아노를 시작하여 국내 유수의 콩쿠르에서 입상하며 두각을 나타냈습니다. 예원학교, 서울예고를 거쳐 서울대학교 음악대학을 우수한 성적으로 졸업했습니다. 이후 독일 하노버 국립음대에서 석사 과정을 밟으며 유럽적인 감성을 체득했습니다.
    
    현재는 솔리스트로서의 활동뿐만 아니라 실내악, 반주 등 다양한 분야에서 관객과 소통하고 있습니다. 단순히 악보를 재현하는 연주자가 아닌, 작곡가의 의도를 깊이 있게 탐구하고 저만의 해석을 더해 청중에게 위로와 감동을 전하는 예술가가 되고 싶습니다.`,
    mainTrack: {
      title: "Chopin: Nocturne Op.9 No.2",
      composer: "Frederic Chopin",
      description: "가장 사랑받는 쇼팽의 녹턴 중 하나로, 서정적인 멜로디가 특징입니다.",
      audioUrl: "#" 
    },
    archive: [
      { title: "Piano Sonata No. 14 'Moonlight'", composer: "L. v. Beethoven", year: "2023 Recital" },
      { title: "Liebestraum No. 3", composer: "Franz Liszt", year: "2023 Summer Concert" },
      { title: "Clair de Lune", composer: "Claude Debussy", year: "2022 Graduation" },
      { title: "Impromptu No. 3", composer: "Franz Schubert", year: "2021 Competition" }
    ],
    contact: {
      email: "pianist_sy@example.com",
      instagram: "@seoyeon_piano"
    }
  },
  {
    id: "violinist-jungho",
    name: "박정호",
    engName: "Jungho Park",
    instrument: "Violin",
    intro: "열정적이고 섬세한 선율의 바이올리니스트",
    profileImage: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?q=80&w=2670&auto=format&fit=crop",
    bio: `바이올린의 현 위에서 인생을 노래합니다.
    
    줄리어드 음대를 졸업하고 뉴욕 필하모닉 객원 단원으로 활동하며 세계적인 무대 경험을 쌓았습니다. 귀국 후에는 '앙상블 디토'의 멤버로 활동하며 클래식 음악의 대중화에 앞장서 왔습니다. 
    
    현재는 한국예술종합학교 영재교육원에 출강하며 후학 양성에도 힘쓰고 있으며, 매년 독주회를 통해 관객들과 만나고 있습니다.`,
    mainTrack: {
      title: "Zigeunerweisen, Op. 20",
      composer: "Pablo de Sarasate",
      description: "집시의 우수와 정열을 담은 사라사테의 대표곡입니다.",
      audioUrl: "#"
    },
    archive: [
      { title: "Violin Concerto in E minor", composer: "F. Mendelssohn", year: "2024 Spring Concert" },
      { title: "Partita No. 2", composer: "J.S. Bach", year: "2023 Solo Recital" },
      { title: "Four Seasons - Winter", composer: "A. Vivaldi", year: "2022 Ensemble" }
    ],
    contact: {
      email: "jungho.vn@example.com",
      instagram: "@jungho_violin"
    }
  },
  {
    id: "vocal-minji",
    name: "김민지",
    engName: "Minji Kim",
    instrument: "Vocal (Soprano)",
    intro: "맑고 청아한 목소리의 소프라노 김민지",
    profileImage: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=2670&auto=format&fit=crop",
    bio: `무대 위에서 가장 빛나는 소프라노가 되고자 합니다.
    
    이탈리아 밀라노 베르디 국립음악원을 수석 졸업하고, 라 스칼라 아카데미지 디플롬을 취득했습니다. 오페라 '라 트라비아타', '마술피리', '리골레토' 등 다수의 작품에서 주역으로 활약했습니다.
    
    풍부한 감성과 정확한 테크닉을 바탕으로 고전부터 현대 가곡까지 폭넓은 레퍼토리를 소화하며 평단의 호평을 받고 있습니다.`,
    mainTrack: {
      title: "O mio babbino caro",
      composer: "Giaocchini Puccini",
      description: "오페라 '잔니 스키키'에 나오는 유명한 아리아입니다.",
      audioUrl: "#"
    },
    archive: [
      { title: "Queen of the Night Aria", composer: "W.A. Mozart", year: "2023 Opera Magic Flute" },
      { title: "Quando men vo", composer: "G. Puccini", year: "2023 Gala Concert" },
      { title: "Ave Maria", composer: "F. Schubert", year: "2022 Christmas Concert" }
    ],
    contact: {
      email: "minji.sop@example.com",
      instagram: "@minji_soprano"
    }
  },
  {
    id: "guitarist-sangwoo",
    name: "최상우",
    engName: "Sangwoo Choi",
    instrument: "Classical Guitar",
    intro: "기타의 여섯 줄로 세상을 그립니다.",
    profileImage: "https://images.unsplash.com/photo-1550985543-f47f38aee65d?q=80&w=2670&auto=format&fit=crop",
    bio: `스페인 마드리드 왕립음악원에서 기타를 수학하며 스페인 음악의 정수를 배웠습니다.
    
    알함브라 국제 콩쿠르 2위 입상 등 다수의 국제 콩쿠르에서 실력을 인정받았습니다. 독주뿐만 아니라 바이올린, 플룻과의 듀오 연주 등 다양한 형태의 실내악 활동을 활발히 전개하고 있습니다.
    
    따뜻하고 깊이 있는 울림으로 청중의 마음에 평안을 주는 연주를 지향합니다.`,
    mainTrack: {
      title: "Recuerdos de la Alhambra",
      composer: "Francisco Tárrega",
      description: "트레몰로 주법이 아름다운 클래식 기타의 명곡입니다.",
      audioUrl: "#"
    },
    archive: [
      { title: "Asturias (Leyenda)", composer: "Isaac Albéniz", year: "2023 Spain Tour" },
      { title: "Cavatina", composer: "Stanley Myers", year: "2022 Cinema Concert" },
      { title: "Capricho Árabe", composer: "F. Tárrega", year: "2021 Recital" }
    ],
    contact: {
      email: "sangwoo.gt@example.com",
      instagram: "@sangwoo_guitar"
    }
  }
];

export const academyData = [
  {
    id: "sound-art-academy",
    name: "Sound Art Academy",
    slogan: "당신의 음악적 꿈을 실현하는 공간",
    intro: "Sound Art Academy는 체계적인 커리큘럼과 최고의 강사진을 통해 전문적인 음악 교육을 제공합니다. 입시부터 취미까지, 개인의 목표에 맞춘 1:1 맞춤형 레슨을 경험해보세요.",
    programs: [
      {
        title: "입시 전문 반",
        description: "예중, 예고, 음대 입시를 목표로 하는 학생들을 위한 집중 트레이닝 과정입니다.",
        highlight: "2023학년도 서울예고 합격생 3명 배출"
      },
      {
        title: "취미 / 성인 반",
        description: "기초부터 심화까지, 즐겁게 배우며 나만의 레퍼토리를 만들어가는 과정입니다.",
        highlight: "정기 연주회 참여 기회 제공"
      }
    ],
    representative: {
      name: "김민수",
      role: "원장 / 작곡",
      intro: "음악이 주는 즐거움과 성취감을 모든 분들과 나누고 싶습니다.",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2670&auto=format&fit=crop"
    },
    instructors: [
      { name: "박지민", role: "Piano", image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=2670&auto=format&fit=crop" },
      { name: "최동훈", role: "Vocal", image: "https://images.unsplash.com/photo-1549834125-9ca0f8a50422?q=80&w=2670&auto=format&fit=crop" },
      { name: "정하늘", role: "Guitar", image: "https://images.unsplash.com/photo-1550985543-f47f38aee65d?q=80&w=2670&auto=format&fit=crop" }
    ],
    schedule: [
      { date: "2024.05.20", event: "제 5회 정기 연주회 (예술의 전당)" },
      { date: "2024.03.15", event: "입시 설명회 개최" },
      { date: "2023.12.25", event: "크리스마스 하우스 콘서트" }
    ],
    contact: {
      address: "서울시 강남구 테헤란로 123, 3층",
      phone: "02-1234-5678",
      email: "contact@soundart.com",
      instagram: "@soundart_academy"
    }
  },
  {
    id: "groove-music-lab",
    name: "Groove Music Lab",
    slogan: "Be Your Own Artist",
    intro: "Groove Music Lab은 실용음악 전문 아카데미입니다. 트렌디한 감각과 실전 위주의 수업으로 여러분을 프로 뮤지션으로 이끌어 드립니다.",
    programs: [
      {
        title: "프로듀서 / 비트메이킹",
        description: "Logic Pro X, Ableton Live를 활용한 나만의 음원 제작 클래스",
        highlight: "자작곡 음원 발매 지원"
      },
      {
        title: "보컬 / 싱어송라이터",
        description: "발성 레슨부터 작사, 작곡, 녹음까지 올인원 커리큘럼",
        highlight: "유명 기획사 내방 오디션 기회"
      }
    ],
    representative: {
      name: "J-Beat",
      role: "디렉터 / 프로듀서",
      intro: "누구나 자신만의 리듬을 가지고 있습니다. 그 리듬을 찾아드리겠습니다.",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2670&auto=format&fit=crop"
    },
    instructors: [
      { name: "Lisa", role: "Vocal Trainer", image: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=2670&auto=format&fit=crop" },
      { name: "DK", role: "Drum / Rhythm", image: "https://images.unsplash.com/photo-1519892300165-cb5542fb67c7?q=80&w=2670&auto=format&fit=crop" },
      { name: "K-Jun", role: "MIDI / Synth", image: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=2670&auto=format&fit=crop" }
    ],
    schedule: [
      { date: "2024.06.10", event: "정기 버스킹 공연 (홍대)" },
      { date: "2024.04.20", event: "신인 개발 오디션" },
      { date: "2024.02.14", event: "발렌타인 커버 곡 콘테스트" }
    ],
    contact: {
      address: "서울시 마포구 와우산로 45, 2층",
      phone: "02-9876-5432",
      email: "info@groovelab.com",
      instagram: "@groove_lab_official"
    }
  }
];
