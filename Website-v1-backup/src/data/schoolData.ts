// Structured school data extracted from ssvehs.com

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  image: string;
  description: string;
  content: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  image: string;
  description: string;
  content: string;
}

export interface NoticeItem {
  id: string;
  title: string;
  date: string;
  category: string;
  description: string;
  content: string;
}

export interface TeacherItem {
  name: string;
  role: string;
  image: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  text: string;
}

export interface HolidayItem {
  title: string;
  date: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const schoolContact = {
  name: "Shree Siddhi Vinayagar English High School",
  trust: "P. K. Krishnan Educational Trust's",
  established: "23rd July 1981",
  founder: "Honorable Trustee Shree P. K. Krishnan sir",
  address: "Hariyali Village, Tagore Nagar, Vikhroli (E), Mumbai - 400 083",
  phone: "022-2574 5402",
  emails: [
    "info@ssvehs.com",
    "principal@ssvehs.com",
    "support@ssvehs.com"
  ],
  timing: [
    { section: "Nursery", time: "1:30 pm to 3:30 pm" },
    { section: "Jr. Kg (Morning)", time: "9:00 am to 12:00 pm" },
    { section: "Jr. Kg (Afternoon)", time: "1:30 pm to 4:30 pm" },
    { section: "Primary (1st - 4th)", time: "12:30 pm to 5:45 pm" },
    { section: "Secondary (5th - 10th)", time: "7:00 am to 12:15 pm" }
  ],
  socials: {
    facebook: "https://www.facebook.com/shreesiddhivinayagar?mibextid=ZbWKwL",
    instagram: "https://www.instagram.com/shree_siddhi_vinayagar01?igsh=bTNvdWZsdWFjdTFm"
  }
};

export const newsData: NewsItem[] = [
  {
    "id": "20",
    "title": "District Level School Game KARATE Competition 2025-26 (DSO)",
    "date": "2025-11-27",
    "image": "/assets/news-banners/2025-11-27WhatsApp Image 2025-11-25 at 11.07.47 AM.jpeg",
    "description": "Hearty congratulations to our karate champions for exceptional performance in the District Level School Game KARATE Competition 2025-26 organized by DSO.",
    "content": "Hearty congratulations to our school champions who showcased exemplary dedication, martial discipline, and fighting spirit at the District Level School Game KARATE Competition 2025-26 organized by District Sports Office (DSO). Several students secured gold, silver, and bronze podium finishes bringing great laurels to Shree Siddhi Vinayagar English High School."
  },
  {
    "id": "19",
    "title": "District Level School Game KARATE Competition 2025-26 (DSO)",
    "date": "2025-11-27",
    "image": "/assets/news-banners/2025-11-27WhatsApp Image 2025-11-25 at 10.04.18 AM.jpeg",
    "description": "Student participants achieved top positions in Kumite and Kata categories representing our school with pride.",
    "content": "Our karate team has continued its winning streak at the District Level School Games (DSO) 2025-26. Under the guidance of our physical training coaches and karate senseis, students bagged top honours across multiple weight divisions."
  },
  {
    "id": "17",
    "title": "STATE LEVEL KARATE CHAMPIONSHIPS PUNE",
    "date": "2025-02-25",
    "image": "/assets/news-banners/2025-02-2511.jpg",
    "description": "Outstanding medal haul: Gold - 05, Silver - 03, Bronze - 13, Total - 21 medals won by SSVEHS students!",
    "content": "STATE LEVEL KARATE CHAMPIONSHIPS PUNE:\n\n* Ananya Jadhav - 8/B (Kata - Gold / Kumite - Gold / Team Kata - Bronze)\n* Mohit Jagtap - 9/C (Kata - Gold / Kumite - Bronze / Team Kata - Bronze)\n* Sachi Utekar - 6/B (Kata - Gold / Kumite - Bronze)\n* Avni Jamsutkar - 5/A (Kata - Gold / Kumite - Bronze)\n* Mohd Raza Saheb - 8/B (Kata - Bronze / Kumite - Silver / Team Kata - Bronze)\n* Mayuresh Baing - 8/B (Kata - Bronze / Kumite - Silver)\n* Sakib Rahman - 8/A (Kata - Silver)\n* Prince Moruya - 8/B (Kata - Bronze / Kumite - Bronze)\n* Rehan Momin - 7/B (Kata - Bronze / Kumite - Bronze)\n* Swarup Talekar - 8/A (Kata - Bronze)\n\nTotal Medals: Gold - 05 | Silver - 03 | Bronze - 13 | Grand Total - 21"
  },
  {
    "id": "15",
    "title": "Storytelling: Magic Unfolds !",
    "date": "2024-12-04",
    "image": "/assets/news-banners/2024-12-0411.jpg",
    "description": "Storytelling is an ancient art that bridges the gap between imagination and reality, bringing characters and stories to life.",
    "content": "Storytelling competition was conducted with immense zeal and enthusiasm among primary and middle school students. Students demonstrated wonderful voice modulation, creative expressions, and moral themes, leaving the audience and judges spellbound."
  },
  {
    "id": "14",
    "title": "School Dance Competition 2024",
    "date": "2024-12-02",
    "image": "/assets/news-banners/2024-12-023.jpg",
    "description": "A vibrant celebration of rhythm, grace, and culture by our talented young dancers.",
    "content": "The Annual School Dance Competition 2024 took place in the school auditorium. Students presented folk, classical, and contemporary choreographies reflecting India's rich cultural heritage. The synchronization and costumes were acclaimed by all."
  },
  {
    "id": "13",
    "title": "Achievements at KIO Federation Cup Premier and Youth League National Karate League Championship (Delhi)",
    "date": "2024-11-27",
    "image": "/assets/news-banners/2024-11-27WhatsApp Image 2024-11-27 at 3.58.34 PM.jpeg",
    "description": "Proud moment as SSVEHS students represent the state at the National Karate League in New Delhi.",
    "content": "Students of Shree Siddhi Vinayagar English High School represented Maharashtra in the prestigious KIO Federation Cup Premier and Youth League National Karate League Championship in Delhi, bagging prominent titles."
  },
  {
    "id": "12",
    "title": "Object Talk Competition",
    "date": "2024-10-10",
    "image": "/assets/news-banners/2024-10-101 OT.jpg",
    "description": "Young learners showcased their analytical speaking and spontaneous communication skills.",
    "content": "The Object Talk Competition fostered public speaking skills, spontaneous vocabulary, and descriptive abilities among foundational and primary grade pupils."
  },
  {
    "id": "11",
    "title": "Elocution competition 2024",
    "date": "2024-10-10",
    "image": "/assets/news-banners/2024-10-101.jpg",
    "description": "Inspiring speeches delivered on patriotism, climate change, and character building.",
    "content": "The English and Hindi Elocution Competition 2024 encouraged students to express their viewpoints persuasively on national integration, leadership, and scientific temperament."
  },
  {
    "id": "10",
    "title": "Achievements (September 2024)",
    "date": "2024-10-07",
    "image": "/assets/news-banners/2024-10-07WhatsApp Image 2024-10-05 at 10.20.38 AM.jpeg",
    "description": "Felicitation of meritorious students in academics, sports, and cultural events.",
    "content": "Special assembly ceremony held to felicitate students who brought laurels in inter-school Olympiads, sports tournaments, and literary meets during the month of September."
  },
  {
    "id": "9",
    "title": "Sports : National Open Karate Championship",
    "date": "2024-09-25",
    "image": "/assets/news-banners/2024-09-251.jpeg",
    "description": "Gold and Bronze medals secured at the National Open Karate tournament.",
    "content": "Our karate prodigies competed against participants from over 12 states in the National Open Karate Championship and secured podium ranks."
  },
  {
    "id": "8",
    "title": "SPORTS: Weight Lifting Mumbai Suburban District Level Competition 2024",
    "date": "2024-09-16",
    "image": "/assets/news-banners/2024-09-161 Final.jpg",
    "description": "Historic triumph at the Mumbai Suburban District Level Weightlifting meet.",
    "content": "SSVEHS student lifters proved their mettle and strength, winning championship trophies at the Mumbai Suburban District Level Competition 2024."
  },
  {
    "id": "7",
    "title": "SPORTS : Andheri 10k Challenge Run",
    "date": "2024-09-16",
    "image": "/assets/news-banners/2024-09-162 Final.jpg",
    "description": "Endurance runners completed the Andheri 10k Challenge with top finishes.",
    "content": "Student athletes from SSVEHS successfully conquered the Andheri 10k Challenge Run, exemplifying stamina, physical health, and sportsmanship."
  },
  {
    "id": "6",
    "title": "S.S.C. RESULT 2023-24 TOPPERS",
    "date": "2024-05-30",
    "image": "/assets/news-banners/2024-05-30IMG-20240529-WA0002.jpg",
    "description": "Heartiest congratulations to the SSC Board toppers of Shree Siddhi Vinayagar English High School!",
    "content": "We take immense pride in celebrating our SSC 10th Board Examination 2024 toppers who attained distinction scores above 90% through consistent dedication and exceptional mentorship from our teachers."
  },
  {
    "id": "5",
    "title": "Proud to Announce 100% Result in SSC Examination 2024",
    "date": "2024-05-30",
    "image": "/assets/news-banners/2024-05-30IMG-20240529-WA0002.jpg",
    "description": "SSVEHS continues its legacy of academic excellence with 100% pass percentage in Maharashtra SSC Board.",
    "content": "Shree Siddhi Vinayagar English High School has once again achieved a 100% pass rate in the Maharashtra State Board SSC Examinations. All students passed with flying colors, affirming our institution's unwavering commitment to quality education."
  },
  {
    "id": "2",
    "title": "Silver medal won by Riddhi Shirodkar",
    "date": "2024-03-15",
    "image": "/assets/img/medal2--v1.png",
    "description": "Mastery in state athletics championship brings silver medal to school.",
    "content": "Riddhi Shirodkar bagged the prestigious Silver Medal in the state level athletic championships. The Trust management and principal congratulated her on this monumental achievement."
  }
];

export const eventsData: EventItem[] = [
  {
    "id": "34",
    "title": "School Picnic 2025",
    "date": "2025-02-27",
    "image": "/assets/events-banners/2025-02-27FotoJet1.jpg",
    "description": "Annual educational and recreational picnic for students to explore, bond, and create joyful memories.",
    "content": "The annual school picnic 2025 was organized with great enthusiasm. Students enjoyed outdoor recreational activities, fun rides, team building games, and delicious food under the careful supervision of our teaching and non-teaching staff."
  },
  {
    "id": "32",
    "title": "79th Independence Day Celebration",
    "date": "2025-08-15",
    "image": "/assets/events-banners/2025-02-27FotoJet3.jpg",
    "description": "Patriotic zeal and cultural tributes honoring our nation's independence.",
    "content": "The school campus resonated with patriotic spirit during the 79th Independence Day Celebration. The national tricolor was unfurled by the Dignitaries, followed by the National Anthem, March Past by school scouts and guides, and patriotic songs and skits."
  },
  {
    "id": "31",
    "title": "Collage Competition",
    "date": "2025-01-24",
    "image": "/assets/events-banners/2025-01-24WhatsApp Image 2025-01-24 at 1.32.56 PM.jpeg",
    "description": "Fostering creativity and visual expression through thematic paper collage art.",
    "content": "Students demonstrated wonderful artistic ingenuity in the Inter-Class Collage Competition on themes of environmental conservation, Indian heritage, and digital future."
  },
  {
    "id": "30",
    "title": "Session on Educating Students about Monsoon-related Diseases",
    "date": "2024-12-22",
    "image": "/assets/events-banners/2024-12-221.jpg",
    "description": "Health awareness drive on prevention of dengue, malaria, chikungunya, and leptospirosis.",
    "content": "Medical professionals and health educators conducted an informative session educating students on hygiene, mosquito breeding prevention, clean water consumption, and symptom identification during the monsoon season."
  },
  {
    "id": "29",
    "title": "School Foundation Day Celebration 2025-26",
    "date": "2025-07-23",
    "image": "/assets/events-banners/2024-11-221.jpg",
    "description": "Commemorating the founding of Shree Siddhi Vinayagar English High School on 23rd July 1981.",
    "content": "We commemorated the auspicious 44th Foundation Day of our school. Founded by Shree P. K. Krishnan sir in 1981, the institution continues to nurture generations of leaders with values, intellect, and compassion."
  },
  {
    "id": "28",
    "title": "Guru Purnima & Poster Competition 2025-26",
    "date": "2025-07-15",
    "image": "/assets/events-banners/2024-09-061.jpg",
    "description": "Expressing reverence and gratitude to teachers alongside creative poster making.",
    "content": "Special assembly and poster contest held on Guru Purnima. Students offered floral tributes and heartfelt speeches to their gurus and mentors."
  },
  {
    "id": "26",
    "title": "मराठी भाषा दिवस (Marathi Bhasha Diwas)",
    "date": "2025-02-27",
    "image": "/assets/events-banners/2024-08-201.jpg",
    "description": "आज श्री सिद्धी विनयागर इंग्लिश हायस्कूल मध्ये मराठी भाषा दिवस उत्साहात साजरा करण्यात आला.",
    "content": "शाळेत २७ फेब्रुवारी रोजी थोर कवी कुसुमाग्रज यांच्या जयंती निमित्त 'मराठी भाषा गौरव दिन' उत्साहात साजरा करण्यात आला. विद्यार्थ्यांनी सुंदर मराठी कविता, पोवाडे, नाटिका आणि भाषणे सादर केली."
  },
  {
    "id": "24",
    "title": "Career Guidance and Counseling Program",
    "date": "2024-10-15",
    "image": "/assets/events-banners/2024-08-203.jpg",
    "description": "Empowering secondary students with insights into future career pathways and higher education choices.",
    "content": "Expert counselors and educationists guided 9th and 10th standard students on emerging fields, aptitude assessment, competitive exams, and stream selection."
  },
  {
    "id": "23",
    "title": "Celebrating 44th Annual Day",
    "date": "2024-12-20",
    "image": "/assets/events-banners/2024-06-212.jpg",
    "description": "Grand cultural extravaganza featuring music, drama, dance, and annual award presentations.",
    "content": "The 44th Annual Day was marked by majestic theatrical performances, folk dances, musical recitals, and prize distribution honoring academic and co-curricular excellence."
  },
  {
    "id": "22",
    "title": "School Camp 2024",
    "date": "2024-11-10",
    "image": "/assets/events-banners/2024-05-01cloth 2.jpg",
    "description": "Adventure, leadership workshops, and outdoor skills camp for students.",
    "content": "An invigorating multi-day school camp fostering independence, survival skills, tent pitching, team spirit, and physical resilience in nature."
  },
  {
    "id": "21",
    "title": "Teachers' Day Celebration",
    "date": "2024-09-05",
    "image": "/assets/events-banners/2024-02-29prize2.jpeg",
    "description": "Heartfelt student-led celebration honoring the guiding lights of SSVEHS.",
    "content": "Students took on the roles of student-teachers, organized cultural skits, games, and felicitated all respected teachers with tokens of respect."
  },
  {
    "id": "18",
    "title": "Celebrating International Yoga Day",
    "date": "2024-06-21",
    "image": "/assets/events-banners/sports.jpg",
    "description": "Mass yogasanas, pranayama, and meditation sessions promoting wellness and mental clarity.",
    "content": "Hundreds of students and staff participated in guided yoga protocols, surya namaskars, and mindfulness exercises on International Yoga Day."
  }
];

export const noticesData: NoticeItem[] = [
  {
    "id": "6",
    "title": "Admissions Now Open for 2026–2027!",
    "date": "2026-01-15",
    "category": "Admissions",
    "description": "Admissions are open for Nursery, Jr. KG, Sr. KG, Primary (1st to 4th), and Secondary (5th to 10th) for the academic year 2026–2027.",
    "content": "Shree Siddhi Vinayagar English High School invites applications for admissions for the academic year 2026–2027. We offer holistic education following the Maharashtra State Board curriculum with modern classroom amenities, computer labs, science laboratories, martial arts training, and co-curricular development. Visit our school office or contact us at 022-2574 5402 / info@ssvehs.com."
  },
  {
    "id": "5",
    "title": "Requesting for Auto Driver details as per new guidelines of Maharashtra Govt. (Education Dept.)",
    "date": "2025-10-12",
    "category": "Safety Guidelines",
    "description": "Mandatory submission of transport driver credentials and verification details.",
    "content": "As per the statutory directive of the Maharashtra State Education Department, all parents utilizing private auto-rickshaws and vans for transporting their children are requested to furnish driver license copies, vehicle registration numbers, police verification certificates, and contact details to the school office without fail."
  },
  {
    "id": "4",
    "title": "Notice for Collage Competition",
    "date": "2025-01-18",
    "category": "Competitions",
    "description": "Guidelines, topics, and criteria for the upcoming inter-class collage making competition.",
    "content": "All students from grades 5 to 10 are invited to participate in the Annual Collage Making Competition. Materials must be eco-friendly. Prizes will be awarded for originality, aesthetic composition, and relevance to the given social themes."
  }
];

export const teachersData: TeacherItem[] = [
  {
    "name": "MRS. UMA CHINTA",
    "role": "HEAD MISTRESS",
    "image": "/assets/img/abt1.jpg"
  },
  {
    "name": "MS. RENUKA SINGH",
    "role": "PRINCIPAL",
    "image": "/assets/img/abt2.jpg"
  },
  {
    "name": "MRS. AKILADEVI NAGESWARAN",
    "role": "SECONDARY SUPERVISOR",
    "image": "/assets/img/abt3.jpg"
  },
  {
    "name": "MR. AJAY SINGH",
    "role": "VICE-PRINCIPAL",
    "image": "/assets/img/abt1.jpg"
  },
  {
    "name": "MRS. SHOBHA NAIR",
    "role": "PRIMARY SECTION IN-CHARGE",
    "image": "/assets/img/abt2.jpg"
  },
  {
    "name": "MR. VITTHAL MORE",
    "role": "SPORTS DIRECTOR & ATHLETICS COACH",
    "image": "/assets/img/abt3.jpg"
  },
  {
    "name": "MRS. SANGEETA PATIL",
    "role": "SENIOR MATHEMATICS FACULTY",
    "image": "/assets/img/abt1.jpg"
  },
  {
    "name": "MRS. KAVITA SHARMA",
    "role": "SCIENCE & LAB COORDINATOR",
    "image": "/assets/img/abt2.jpg"
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    "name": "Dr Pooja Patil",
    "role": "Parent",
    "text": "Shree Siddhi Vinayagar English High School is really a good School. It has good and caring teaching staff also they maintain well-disciplined environment in school premises. They are the best in curriculum. I like their focus on extra-curricular activities too, like sports, yoga, and different competitions which is good for social, personal and physical improvement of students. BEST SCHOOL."
  },
  {
    "name": "Mansi Shirodkar",
    "role": "Parent",
    "text": "\"Shree Siddhi Vinayagar English High School: Where Dreams Take Flight!\" Thanks to the school's impeccable bus pick-up and drop-off services for the DSO event, our kids' safety and comfort come first. Thanks to the school's generous support, our young athletes shine. Winners of the DSO Athletics Competition received track pants, T-shirts, running shoes, spike shoes, and socks from the school. Our children's all-round development matters. Shree Siddhi Vinayagar is more than a school; it's a nurturing haven!"
  },
  {
    "name": "सुभाष दामोदरे",
    "role": "पालक (Parent)",
    "text": "मी तनिष्का चे वडील सुभाष दामोदरे. तनिष्का या आदी सातवी इयत्ते पर्यंत डोंबिवली मध्ये शिक्षण घेत होती. त्या वेळेस स्पोर्ट्स विषयी आम्हाला काही माहित नव्हते. मी विक्रोळी मध्ये शिफ्ट झाल्यानंतर श्री सिद्धिविनायांनगर स्कूल मध्ये ऍडमिशन घेतल्या नंतर पहिल्याच वर्षी स्पोर्ट्स चा खूप मोठा अनुभव आला. शाळेचे विठ्ठल सर यांनी माझी मुलगी तनिष्का मधील स्पोर्ट्स ची ऍक्टिव्हिटी पाहून पहिल्याच वर्षी अंडर 17 मधून 400 मिटर मध्ये DSO मध्ये स्पर्धेत रेजिस्ट्रेशन केले. आणि मुलगी देखील पहिली आली. विठ्ठल सर यांनी या वर्षी देखील चांगली प्रॅक्टिस घेतली आणि मुलीला अंडर 19 मध्ये उतरविलीले. मुलीने देखील चांगला परफॉर्मन्स दाखवून प्रत्येक इव्हेंट्स मध्ये पहिला क्रमांक पटकवला आणि जिल्ह्यास्तरीय मध्ये खेळली. मुलीचा स्पोर्ट्स ग्राउंड वरील परफॉर्मन्स पाहून शाळेने तिला महागातील स्पोर्ट्स किट घेऊन दिले आणि ते पाहून मुलीने देखील निश्चय केला स्पोर्ट्स मध्ये इंटरनॅशनल पर्यंत जायचं. मी शाळेचा आणि विठ्ठल सरांचा खूप आभारी आहे. मी त्यांचे आभार व्यक्त करतो त्यांच्या मुळे DSO काय आहे त्याचे मुलीच्या भविष्यामध्ये किती फायदे आहेत. योग्य डाएट योग्य वर्कआऊट हे समजले. सरांनी देखील आश्वासन दिले पुढच्या वर्षी DSO च्या इव्हेन्ट मध्ये माझी मुलगी पुढे जाईल."
  },
  {
    "name": "Shipra Ojha",
    "role": "Parent",
    "text": "We've noticed great improvement, thanks you for Supportive teaching!! Your commitment towards child is safe and the way you keep environment evident is much appreciated."
  }
];

export const holidaysData: HolidayItem[] = [
  {
    "title": "Ganesha Festival",
    "date": "07-09-2024 to 12-09-2024",
    "image": "/assets/img/holiday/ganesha-festival.avif"
  },
  {
    "title": "Eid-E-Milad",
    "date": "16-09-2024",
    "image": "/assets/img/holiday/Eid.E.Milad.jpg"
  },
  {
    "title": "Anant Chaturdashi",
    "date": "17-09-2024",
    "image": "/assets/img/holiday/ANANT CHATURDASHI.avif"
  },
  {
    "title": "Mahatma Gandhi Jayanti",
    "date": "02-10-2024",
    "image": "/assets/img/holiday/MAHATMA GANDHI JAYANTI.avif"
  },
  {
    "title": "Dussehra",
    "date": "12-10-2024",
    "image": "/assets/img/holiday/dussehra.avif"
  },
  {
    "title": "Diwali Vacation",
    "date": "28-10-2024 to 11-11-2024",
    "image": "/assets/img/holiday/diwali.avif"
  },
  {
    "title": "Guru Nanak Jayanti",
    "date": "15-11-2024",
    "image": "/assets/img/holiday/gurunanak jayanti.jpg"
  },
  {
    "title": "Mahaparinirvan Din",
    "date": "06-12-2024",
    "image": "/assets/img/holiday/MAHAPARINIRVAN.avif"
  },
  {
    "title": "Christmas Vacation",
    "date": "25-12-2024 to 01-01-2025",
    "image": "/assets/img/holiday/CHRISTMAS.avif"
  },
  {
    "title": "Makar Sankranti",
    "date": "14-01-2025",
    "image": "/assets/img/holiday/makar-sankranti.avif"
  },
  {
    "title": "Chhatrapati Shivaji Maharaj Jayanti",
    "date": "19-02-2025",
    "image": "/assets/img/holiday/csmj.jpg"
  },
  {
    "title": "Holi (Dhulivandan)",
    "date": "14-03-2025",
    "image": "/assets/img/holiday/holi.jpg"
  },
  {
    "title": "Eid-Ul-Fitr (Ramzan Eid)",
    "date": "31-03-2025",
    "image": "/assets/img/holiday/EID-UL-FITR.jpg"
  },
  {
    "title": "Mahavir Jayanti",
    "date": "10-04-2025",
    "image": "/assets/img/holiday/MAHAVIR JAYANTI.jpg"
  },
  {
    "title": "Bakri Eid",
    "date": "17-06-2025",
    "image": "/assets/img/holiday/BAKRI EID.jpg"
  },
  {
    "title": "Ashadhi Ekadashi",
    "date": "06-07-2025",
    "image": "/assets/img/holiday/Ashadi_Ekadashi.jpg"
  },
  {
    "title": "Gopal Kala / Dahi Handi",
    "date": "16-08-2025",
    "image": "/assets/img/holiday/GOPAL KALA.avif"
  },
  {
    "title": "Parsi New Year",
    "date": "15-08-2025",
    "image": "/assets/img/holiday/parsi.jpg"
  },
  {
    "title": "Raksha Bandhan",
    "date": "09-08-2025",
    "image": "/assets/img/holiday/raksha-bandhan.jpg"
  }
];

export const faqsData: FAQItem[] = [
  {
    "question": "What is the admission procedure?",
    "answer": "Please refer the admission link provided on the website. For those seeking\n                    admissions, an informal interaction will be conducted in which child and both the\n                    parents have to be present. The final decision of the admission committee will be\n                    binding."
  },
  {
    "question": "What curriculum will the school follow?",
    "answer": "SSVEHS follows Maharashtra State Board curriculum."
  },
  {
    "question": "How many terms will the school have?",
    "answer": "The school has 2-unit tests and 2 semesters."
  },
  {
    "question": "What will be the school timings?",
    "answer": "School timings are: Nursery: 1:30pm to 3:30pm Jr Kg: 1:30pm to 4:30pm Jr Kg: 9:00am to 12:00pm Primary: 12:30pm to 5:45pm Secondary: 7:00am to 12:15pm"
  },
  {
    "question": "Will the school authorities be taking adequate measures to ensure\n                    hygiene in\n                    the school?",
    "answer": "SSVEHS maintains a high standard of cleanliness and hygiene. There\n                    are\n                    regular checks and monitoring by the school administration."
  },
  {
    "question": "What is the kind of security offered to the students?",
    "answer": "The school has installed CCTV in all classrooms. Students are always\n                    accompanied by teachers or the class monitors when they are moving\n                    from one block to the other."
  },
  {
    "question": "How often will there be PTM’s?",
    "answer": "PTM’s are conducted after each term assessment and end of every month."
  },
  {
    "question": "Other than a PTM, when can a parent interact with the teacher?",
    "answer": "SSVEHS considers parents as partners in the education process and\n                    parents are free to meet teachers, with prior appointment, as and\n                    when necessary."
  },
  {
    "question": "Is it necessary to take different Parent ID’s if they have more than\n                    one child studying in this school?",
    "answer": "Yes, it is compulsory to take different ID’s. Since the ID carries\n                    photographs of parents as well as child. They need to carry this ID\n                    to the respective class to meet the teachers or attend the meetings."
  },
  {
    "question": "Does this school conduct paperless exams?",
    "answer": "Yes. In paperless format, questions were asked orally. Every student\n                    must write the answer for each question on the black board. This\n                    format helps the student’s pay attention to the questions, improve\n                    listening to abilities and writing skills. Students who are weak in\n                    answering the questions are identified so that more attention can be\n                    given to them."
  },
  {
    "question": "What is the school’s approach to homework and assignments?",
    "answer": "Homework is meant to be a positive experience and to encourage\n                    children to learn. Homework and assignments are sent through PIS\n                    (people information system) to the mobile of the parents, so they\n                    are aware about it daily."
  },
  {
    "question": "What is the school uniform policy?",
    "answer": "Students will wear the full school uniform to school, every day. Parents are expected to support the school in the matter of correct\n                    uniform. If the student is not in full uniform, a teacher or any other staff\n                    member will provide a verbal reminder and present the student with a\n                    ‘Uniform Notice’ and a penalty may be imposed."
  },
  {
    "question": "What is the About Fees and deadline for every month. And is there\n                    a fine applicable in case of non-payment within the due date?",
    "answer": "Please get in touch with the school for fee details. Fees must be\n                    paid on or before 20th of every month. In case of further delay, a\n                    fine of Rs. 10 will be applicable for each day till the time of\n                    payment."
  },
  {
    "question": "What is the process to pay school fees. What is the offline and\n                    online mode?",
    "answer": "Offline mode: By cash or cheque at school fee counter.\n                        Timings of the counter are 9 am to 5 pm on all working days. Online mode: By scanning the QR code kept the fee counter. Through Bank transfer – Bank Name: Saraswat Co-op Bank Ltd Account Name: Shree Siddhivinayagar English High School Account Number: 124100100103554 IFSC Code: SRCB0000124 After making the payment through online mode, a screen shot has\n                        to be sent to WhatsApp number 8104986862"
  },
  {
    "question": "What happens if the school fee is not paid for more than a quarter?",
    "answer": "School will send a reminder for the payment. Even after reminder, if\n                    the fees are not paid then the school may initiate legal action to\n                    recover the same. And any charges incurred for the legal process has\n                    to be borne by the parents."
  },
  {
    "question": "Is medical policy for the child compulsory and what is the premium?",
    "answer": "Yes. We take utmost care of the children at the school. In case of\n                    any untoward incident in the school premises, this medical policy\n                    will cover medical expenses that will be incurred. The premium is\n                    Rs. 122 per child per year and this must be paid by the parents.\n                    Click the link to view the policy certificate"
  }
];

export const studentRules = [
  "Students should strictly abide by the rules and regulations laid down by the school management and must maintain utmost discipline.",
  "Regularity and punctuality are mandatory. Students must arrive at school at least 10 minutes before the scheduled morning or afternoon bell.",
  "Full school uniform is compulsory on all regular working days. The uniform must be neat, clean, well-ironed, and worn with polished shoes.",
  "Bringing mobile phones, electronic gadgets, unauthorized smartwatches, chewing gum, or valuable jewellery to school is strictly forbidden.",
  "Damage to school property, classrooms, furniture, computers, or library books will be viewed seriously and the cost of repair/replacement will be borne by the student's parents.",
  "Leave of absence must be sanctioned in advance through the student school handbook. In case of illness, a valid medical certificate must be submitted on the day of rejoining.",
  "Respect towards teachers, school staff, fellow students, and visitors is an intrinsic principle of SSVEHS. Unruly, discourteous, or abusive behavior will lead to strict disciplinary action including suspension.",
  "Homework and project assignments must be completed and submitted on time as per the teacher's schedule.",
  "Students must actively participate in sports, arts, exhibitions, physical training, and co-curricular programs designed for holistic growth.",
  "Identity cards must be worn around the neck at all times during school hours and school transit."
];

export const parentRules = [
  "Parents are requested to check the student handbook/calendar daily for homework, teacher notices, circulars, and teacher remarks.",
  "Parents must ensure their children arrive at school on time and dressed in clean, proper school uniform.",
  "Private auto-rickshaw or van drivers hired by parents must submit valid driver license, police verification, and emergency contact details to the school office.",
  "Parents are strictly not permitted to enter classrooms directly during teaching hours without prior permission from the Principal or Head Mistress.",
  "Parent-Teacher Meetings (PTM) are organized periodically and attendance is compulsory for both parents to discuss academic progress and student welfare.",
  "Tuition and term fees must be remitted strictly on or before the due dates stipulated in the fee schedule to ensure seamless administrative operations.",
  "Parents must inform the school management immediately in writing regarding any changes in residence, telephone numbers, or medical emergency conditions.",
  "A healthy, cooperative partnership between parents and teachers is essential for the holistic intellectual, emotional, and physical upbringing of every child."
];
