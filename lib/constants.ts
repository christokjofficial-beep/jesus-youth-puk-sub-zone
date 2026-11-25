import { Pillar, Ministry, BaptismSceneStage, MovementStatistic, FaithTestimony } from "@/types";

export const SITE_METADATA = {
  title: "Jesus Youth — A Missionary Movement at the Heart of the Church",
  description: "Official international Catholic youth movement recognized by the Holy See. Rooted in baptismal renewal, personal holiness, and active missionary discipleship across 40+ countries.",
  canonicalUrl: "https://jesusyouth.org",
  motto: "A Missionary Movement at the Heart of the Church",
  scripturalTheme: "Go to the ends of the earth (Acts 1:8)",
};

export const MOVEMENT_STATS: MovementStatistic[] = [
  { value: "40+", label: "Countries Worldwide", subtext: "Active across 5 continents" },
  { value: "1985", label: "International Year of Youth", subtext: "Formal naming & Vatican recognition" },
  { value: "6", label: "Spiritual Pillars", subtext: "The foundation of daily discipleship" },
  { value: "100k+", label: "Active Members & Volunteers", subtext: "Campus, parish, and mission outreaches" },
];

export const SIX_PILLARS: Pillar[] = [
  {
    id: "prayer",
    number: "01",
    title: "Daily Personal Prayer",
    subtitle: "The Sacred Oasis of Quiet Time",
    scripture: "In the morning, while it was still very dark, he got up and went out to a deserted place, and there he prayed.",
    reference: "Mark 1:35",
    description: "Every disciple begins in quiet friendship with Jesus. Setting aside a dedicated, undistracted daily 'quiet time' is the bedrock where Christ transforms the soul.",
    keyPractices: [
      "Daily dedicated 20–30 min Quiet Time",
      "Morning offering & adoration before the Blessed Sacrament",
      "Spiritual examination of conscience each evening"
    ],
    spiritualFruit: "Interior peace, intimacy with the Trinity, and clear discernment of God's will.",
    accentColor: "from-sacred-400 to-sacred-600"
  },
  {
    id: "word-of-god",
    number: "02",
    title: "The Word of God",
    subtitle: "Living Scripture as Light for the Path",
    scripture: "Your word is a lamp to my feet and a light to my path.",
    reference: "Psalm 119:105",
    description: "God speaks directly through the Sacred Scriptures. Daily reading, meditation (Lectio Divina), and memorization anchor the mind against worldly distractions.",
    keyPractices: [
      "Daily Lectio Divina (Read, Meditate, Pray, Contemplate)",
      "Systematic study of the Gospels and Epistles",
      "Carrying God's Word into university campuses and workplaces"
    ],
    spiritualFruit: "Wisdom, spiritual vigilance, and Christ-centered worldview.",
    accentColor: "from-amber-400 to-sacred-gold"
  },
  {
    id: "sacramental-life",
    number: "03",
    title: "Sacramental Life",
    subtitle: "The Holy Eucharist & Reconciliation",
    scripture: "Whoever eats my flesh and drinks my blood has eternal life, and I will raise them up at the last day.",
    reference: "John 6:54",
    description: "The Eucharist is the source and summit of our Christian existence. Frequent participation in Holy Mass and regular Confession keep the soul continually renewed.",
    keyPractices: [
      "Frequent, reverent participation in the Holy Sacrifice of the Mass",
      "Regular Sacrament of Reconciliation (Confession)",
      "Eucharistic Adoration and hours of silent vigil"
    ],
    spiritualFruit: "Sanctifying grace, purification from sin, and divine courage.",
    accentColor: "from-sacred-lightGold to-sacred-500"
  },
  {
    id: "fellowship",
    number: "04",
    title: "Christian Fellowship",
    subtitle: "Walking in Communion & Mutual Sanctification",
    scripture: "They devoted themselves to the apostles’ teaching and to fellowship, to the breaking of bread and to prayer.",
    reference: "Acts 2:42",
    description: "No Christian walks alone. Small faith communities, cell groups, and prayer households provide mutual accountability, joyful brotherhood, and unconditional support.",
    keyPractices: [
      "Weekly cell group meetings & charismatic prayer gatherings",
      "One-on-one spiritual companionship and brotherhood/sisterhood",
      "Sharing meals, testimonies, and intercessory burdens together"
    ],
    spiritualFruit: "Deep emotional and spiritual healing, enduring fraternal love.",
    accentColor: "from-celestial-400 to-celestial-600"
  },
  {
    id: "evangelisation",
    number: "05",
    title: "Evangelisation",
    subtitle: "Boldness to Proclaim Christ to the Modern World",
    scripture: "Go into all the world and proclaim the good news to the whole creation.",
    reference: "Mark 16:15",
    description: "Having encountered Christ, the youth cannot remain silent. Through lifestyle witness, modern arts, music, and campus missions, the Gospel is creatively shared with every soul.",
    keyPractices: [
      "Lifestyle evangelisation in universities, offices, and culture",
      "Music, digital media, creative arts, and youth festivals",
      "Personal witnessing and leading peers to an encounter with Jesus"
    ],
    spiritualFruit: "Missional fire, bold testimony, and conversion of hearts.",
    accentColor: "from-water-400 to-water-600"
  },
  {
    id: "option-for-poor",
    number: "06",
    title: "Option for the Poor",
    subtitle: "Loving Christ in the Distressed & Forgotten",
    scripture: "Truly I tell you, whatever you did for one of the least of these brothers and sisters of mine, you did for me.",
    reference: "Matthew 25:40",
    description: "True holiness always overflows in Christlike mercy. Visiting orphanages, slums, elderly homes, and prisons allows youth to touch the wounded body of Jesus.",
    keyPractices: [
      "Regular visits to homes for the destitute, hospitals, and slums",
      "Educational support and mentorship for underprivileged children",
      "Living with simplicity and solidarity in consumerist cultures"
    ],
    spiritualFruit: "Humility, tender mercy, and liberation from materialism.",
    accentColor: "from-sacred-600 to-sacred-800"
  }
];

export const BAPTISM_SCENE_STAGES: BaptismSceneStage[] = [
  {
    id: 1,
    phase: "I. The Living Waters of the Jordan",
    title: "The Cry in the Wilderness",
    subtitle: "A Voice Crying in the Desert: Prepare the Way of the Lord",
    scripture: "Behold, the Lamb of God who takes away the sin of the world! (John 1:29)",
    narrative: "On the banks of the sacred river Jordan, amidst the arid wilderness of Judea, living waters flow. John the Baptist proclaims a baptism of repentance, calling souls to prepare their hearts. Here, the eternal Word enters into human history, approaching the waters in supreme humility.",
    visualCue: "Gentle flowing river, ambient desert stones, reflective cool water ripples, morning celestial haze.",
    spiritualMeaning: "Recognizing our spiritual thirst and answering the divine call to repentance and renewal.",
    bgColor: "from-celestial-950 via-water-900 to-celestial-900",
    accentColor: "text-water-300"
  },
  {
    id: 2,
    phase: "II. The Sacred Immersion",
    title: "Dying to Sin with Christ",
    subtitle: "Submerged into the Depths of Grace",
    scripture: "Do you not know that all of us who were baptized into Christ Jesus were baptized into His death? (Romans 6:3)",
    narrative: "Jesus steps into the depths of the Jordan, sanctifying the waters for all eternity. As we are immersed with Him in baptism, our old self of sin, guilt, and spiritual darkness is buried in the mystical depths. The water caustics illuminate the submerged soul with deep heavenly blue.",
    visualCue: "Deep aquatic immersion, underwater refraction rays, dancing light caustics, rising purification bubbles.",
    spiritualMeaning: "Surrendering all brokenness, human pride, and sin into the purifying grace of Christ's cross.",
    bgColor: "from-water-900 via-celestial-900 to-water-950",
    accentColor: "text-water-200"
  },
  {
    id: 3,
    phase: "III. The Emergence into Divine Light",
    title: "Rising in Newness of Life",
    subtitle: "Clean Water Poured Out: A New Heart and a New Spirit",
    scripture: "I will sprinkle clean water upon you, and you shall be clean... A new heart I will give you, and a new spirit I will put within you. (Ezekiel 36:25-26)",
    narrative: "Breaking through the water surface, Christ rises from the river! Glistening droplets sparkle like diamonds against the sky. The waters that once signified death now gush forth as a wellspring leaping up to eternal life. The soul is reborn: adopted, washed, and clothed in radiant white.",
    visualCue: "Explosive water droplets breaking the surface, intense golden lens flares, glistening crest waves.",
    spiritualMeaning: "The resurrection life: spiritual adoption as beloved sons and daughters of the Almighty Father.",
    bgColor: "from-celestial-900 via-water-800 to-sacred-900",
    accentColor: "text-sacred-300"
  },
  {
    id: 4,
    phase: "IV. The Descent of the Holy Spirit",
    title: "The Heavens Opened & The Dove",
    subtitle: "The Father's Voice Across the Firmament",
    scripture: "The heavens were opened, and he saw the Spirit of God descending like a dove and alighting on him. And a voice from heaven said, 'This is my beloved Son, with whom I am well pleased.' (Matthew 3:16-17)",
    narrative: "The veil of heaven is torn open! Celestial rays of golden and purest white light cascade from eternity. The Holy Spirit descends in bodily form like a luminous white Dove, anointing Christ for His salvific ministry. The eternal Father declares His boundless love across all creation.",
    visualCue: "Luminous descending Dove geometry, blinding heavenly godrays, sacred golden particle aura.",
    spiritualMeaning: "Empowerment by the Holy Spirit: receiving the gifts, charisms, and divine fire for mission.",
    bgColor: "from-sacred-950 via-celestial-950 to-sacred-900",
    accentColor: "text-sacred-gold"
  },
  {
    id: 5,
    phase: "V. The Great Commission",
    title: "Sent to the Ends of the Earth",
    subtitle: "Living Out Our Baptismal Calling as Jesus Youth",
    scripture: "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit! (Matthew 28:19)",
    narrative: "Baptism is not the end of the journey—it is the commission! Consecrated in Christ, anointed by the Spirit, and loved by the Father, the youth of the Church arise. Jesus Youth carries this baptismal grace into campuses, universities, streets, hospitals, and digital highways across every nation on Earth.",
    visualCue: "Expansive global map of light, burning torches of faith, celestial halo enveloping the sacred cross.",
    spiritualMeaning: "Active missionary discipleship: being joyful witnesses of the Gospel in everyday life.",
    bgColor: "from-celestial-950 via-sacred-900 to-celestial-950",
    accentColor: "text-sacred-lightGold"
  }
];

export const MINISTRIES_DATA: Ministry[] = [
  {
    id: "campus",
    name: "Campus Ministry",
    tagline: "Transforming Universities into Centers of Grace",
    description: "College and university years shape the destiny of young adults. Campus ministry creates vibrant student prayer cells, organizes leadership retreats, and provides authentic Christian companionship amidst academic pressures.",
    targetAudience: "University & College Students",
    initiatives: ["Weekly Campus Prayer Cells", "Student Discipleship Retreats", "Spiritual Mentorship & Academic Guidance"],
    icon: "GraduationCap"
  },
  {
    id: "teens",
    name: "Teens Ministry",
    tagline: "Igniting Teenage Hearts with the Love of God",
    description: "Guiding high school teens through the turbulence of youth with joyful, dynamic, and relational faith formation that equips them to stand strong for Jesus.",
    targetAudience: "Adolescents & High Schoolers (Ages 13–19)",
    initiatives: ["Teens Discipleship Camps", "Life-in-the-Spirit Seminars for Teens", "Creative Faith Workshops & Talents Nights"],
    icon: "Sparkles"
  },
  {
    id: "professionals",
    name: "Professionals & Tech Apostolate",
    tagline: "Christ in Corporate, Healthcare & Digital Frontiers",
    description: "Empowering young doctors, software engineers, nurses, lawyers, and business leaders to live ethical, Christ-centered lives and evangelize their professional spheres.",
    targetAudience: "Young Working Professionals & Innovators",
    initiatives: ["Nurses & Healthcare Prayer Fellowships", "Tech Missionary Labs & Digital Outreaches", "Workplace Faith Cells & Ethics Forums"],
    icon: "Briefcase"
  },
  {
    id: "ftv",
    name: "Full-Time Volunteers (FTV)",
    tagline: "One Full Year Dedicated Entirely to the Lord",
    description: "Young adults who take a year off from studies or careers to give their lives entirely to intense missionary service, living simply and serving in pioneer mission lands.",
    targetAudience: "Young Adults Discerning Radical Mission",
    initiatives: ["6–12 Month Radical Mission Placements", "Pioneer Evangelization in Unreached Regions", "Intensive Missionary Training & Discernment"],
    icon: "Compass"
  },
  {
    id: "cultural-rexband",
    name: "Music & Media (Rexband / Kairos)",
    tagline: "Proclaiming the Gospel Through Contemporary Arts",
    description: "Pioneering contemporary Catholic music and multimedia worldwide. Rexband has performed across World Youth Days, arenas, and cultural festivals for over three decades.",
    targetAudience: "Global Youth & Cultural Arenas",
    initiatives: ["International Evangelistic Music Concerts", "Kairos Magazine & Digital Content Production", "Faith-Based Songwriting & Production Workshops"],
    icon: "Music"
  },
  {
    id: "family",
    name: "Family & Couples Ministry",
    tagline: "Domestic Churches Radiating Gospel Joy",
    description: "Nurturing young married couples who emerged from the youth movement to raise holy families, protect the sanctity of marriage, and mentor the next generation.",
    targetAudience: "Young Married Couples & Growing Families",
    initiatives: ["Couples Prayer Households", "Catholic Parenting & Marriage Retreats", "Intergenerational Family Mission Days"],
    icon: "Heart"
  }
];

export const TESTIMONIALS: FaithTestimony[] = [
  {
    id: "1",
    name: "Maria Fernandez",
    role: "Campus Ministry Leader",
    country: "Spain",
    quote: "Jesus Youth taught me that holiness isn't a museum relic—it's meant to be lived in the university lecture halls, in coffee shops, and in daily study. Daily prayer transformed my entire student life.",
    pillarImpact: "Daily Personal Prayer & Fellowship"
  },
  {
    id: "2",
    name: "Dr. Matthew Chen",
    role: "Healthcare Professional",
    country: "Singapore",
    quote: "In the sterile hospital corridors, the Six Pillars became my spiritual oxygen. Jesus Youth gave me a community of colleagues who pray before surgeries and treat patients with the dignity of Christ.",
    pillarImpact: "Sacramental Life & Option for the Poor"
  },
  {
    id: "3",
    name: "David & Rebecca O’Connor",
    role: "Full-Time Missionaries",
    country: "Ireland",
    quote: "Giving a year of our youth to full-time mission was the greatest decision we ever made. We witnessed young people in tears encountering the Eucharistic presence of Jesus for the first time.",
    pillarImpact: "Evangelisation & Word of God"
  }
];
