import React, { useState, useEffect } from 'react';
import course1_1 from '../assets/courses/course1/course1_1.jpg'
import course1_2 from '../assets/courses/course1/courses1_2.jpg'
import course1_3 from '../assets/courses/course1/course1_3.jpg'
import course1_4 from '../assets/courses/course1/course1_4.jpg'
import img1 from '../assets/courses/course2/1.jpg'
import img2 from '../assets/courses/course2/2.jpg'
import img3 from '../assets/courses/course2/3.jpg'
import img4 from '../assets/courses/course2/4.jpg'
import img5 from '../assets/courses/course2/5.jpg'
import img6 from '../assets/courses/course2/6.jpg'
import course6_1 from '../assets/courses/course6/1.jpg'
import course6_2 from '../assets/courses/course6/2.jpg'
import course6_3 from '../assets/courses/course6/3.jpg'
import course6_4 from '../assets/courses/course6/4.jpg'
import course6_5 from '../assets/courses/course6/5.jpg'
import course6_6 from '../assets/courses/course6/6.jpg'
import course9_1 from '../assets/courses/course9/1.jpg'
import course9_2 from '../assets/courses/course9/2.jpg'
import course9_3 from '../assets/courses/course9/3.jpg'
import course9_4 from '../assets/courses/course9/4.jpg'
import course11_1 from '../assets/courses/course11/1.jpg'
import course11_2 from '../assets/courses/course11/2.jpg'
import course11_3 from '../assets/courses/course11/3.jpg'
import course11_4 from '../assets/courses/course11/4.jpg'
import course11_5 from '../assets/courses/course11/5.jpg'
import course11_6 from '../assets/courses/course11/6.jpg'
import course11_7 from '../assets/courses/course11/7.jpg'
import course11_8 from '../assets/courses/course11/8.jpg'

type Course = {
  title: string;
  subtitle: string;
  quickFacts: string[];
  learn: string[];
  practice: string[];
  certification: string[];
  cta: string;
  images: string[];
};

const courses: Course[] = [
  {
    title: '1 Month Professional Makeup Course',
    subtitle: 'Become a professional makeup artist in just 30 days! Master bridal, party, glam, and advanced makeup with expert trainers and hands-on practice.',
    quickFacts: [
      'Duration: 1 month (30 days), 5 days/week, 2–3 hours/day',
      'Level: Beginners & aspiring professionals',
      'Certification: Professional Certificate on Completion',
      'Fees: ₹60,000',
      'Location: Kasi Academy, Janakpuri',
    ],
    learn: [
      'Skin preparation, product & brush knowledge',
      'Day & night makeup base: HD, dewy, matte',
      'Eye makeup: natural, smokey, glitter, cut crease, eyeliner styles, false lash application',
      'Bridal makeup: engagement, haldi/mehendi, wedding, reception',
      'Party & glam looks: soft glam, red-carpet, international trends',
      'Contouring, highlighting, lip art, ombré lips',
      'Draping (dupatta/saree), hairstyling basics',
    ],
    practice: [
      'Daily hands-on practice',
      'Use of top professional products',
      'Individual trainer attention',
      'Photoshoot guidance for your portfolio',
    ],
    certification: [
      'Receive a professional certificate',
      'Ideal for launching a freelance or salon career',
    ],
    cta: 'Seats Limited — Book Your Spot Now!',
    // images: [
    //   'https://www.instagram.com/p/C3Mu_UhPLQr/?igsh=OWVzbDhkaHE0eWk2',
    //   'https://www.instagram.com/p/C3MtXGlvzkj/?igsh=Y3EyZXd5eGZ2Y3By',
    //   'https://www.instagram.com/p/CuuLXlnJPoJ/?igsh=MXJiaXJsZmdtMG56ag==',
    //   'https://www.instagram.com/p/Cud1ctjPh4f/?igsh=MWc2b24xZHhtMzgyNA==',
    // ],
    // images: [
    //   'https://instagram.fdel1-5.fna.fbcdn.net/v/t39.30808-6/468128014_18106085980453218_9220929554674650365_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjE0NDB4MTgwMC5zZHIuZjMwODA4LmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fdel1-5.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2QEtBr5XGSC_gfFyGK8WAcRD8_ktkwEig-OMiJZj7s9sppVnh2s0i-xJTqmMGyDWMNB-X8VOqTbhBkk0QneYUKab&_nc_ohc=0eA_yHxtJqcQ7kNvwGIRKTr&_nc_gid=vnF_eEHDR3_8fUkjcVTcBQ&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzMwMDIxOTI4ODQ1NDczODk4Nw%3D%3D.3-ccb7-5&oh=00_AfZWtwJ4C-2ysTG59nuotGrVjZ4Y-IiCZqedLCpzu7ZvsA&oe=68C857EE&_nc_sid=10d13b',
    //   'https://instagram.fdel1-5.fna.fbcdn.net/v/t39.30808-6/468212619_18106086049453218_4528695760154149291_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjE0NDB4MTgwMC5zZHIuZjMwODA4LmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fdel1-5.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2QEuIRnICywciztJX0-wDfAwYOWrk3NbtqC-AQ1XSxQkdeTuIjoFY5rhn58JQQ-YvdyTjL-QsR3VEXeO8u4BD4lz&_nc_ohc=MsnSfjjGuhYQ7kNvwFyhUZ0&_nc_gid=JuqMC_b3wy6YDhGCNH5mxQ&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzMwMDIxMjEyNjY3MjQzNTQ5MQ%3D%3D.3-ccb7-5&oh=00_AfZ_M0Dw2fXflsa0ZNuEAV-kjt-xEXyHKnb3Q1HNozJwTw&oe=68C84D30&_nc_sid=10d13b',
    //   'https://instagram.fdel1-3.fna.fbcdn.net/v/t51.29350-15/360037397_183444701376323_5433905313751817015_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjE0NDB4MTgwMC5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fdel1-3.fna.fbcdn.net&_nc_cat=111&_nc_oc=Q6cZ2QFuQ6edo_ESCWFamtjABjaGx0cHBH9vhEH319C_C0_a9bCTBhuI3hKw6U2j-g1inOW2xdjoTwa7UoSK3CBtGIkw&_nc_ohc=15l6esXT_NIQ7kNvwHNtXn2&_nc_gid=rvGfJBgILXP7k_3VRjMqIA&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzE0NzUwMzE4OTAyMzMyNDY4MQ%3D%3D.3-ccb7-5&oh=00_AfaJpkbCUvsQRy9Ugsb45fcvMCFL_pF1NjMDfbmgvbzWNw&oe=68C84758&_nc_sid=10d13b',
    //   'https://instagram.fdel1-7.fna.fbcdn.net/v/t51.29350-15/358028403_2009016532780431_7502091214124674781_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjE0NDB4MTYyNi5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fdel1-7.fna.fbcdn.net&_nc_cat=103&_nc_oc=Q6cZ2QGzPYBeEI8FqyubjTmK8dduJoFpQmOxlIpcegkMDcPazqElL495Rhv9_A1qSmoJvuRN3nL-UdF-Z0mtgMvCtJIh&_nc_ohc=GM6ZkJKf1lgQ7kNvwHmEsZP&_nc_gid=8JohcOi0txY9naMcZldFZw&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzE0MjkwMzE4NDQ5NDU2Njk0Mw%3D%3D.3-ccb7-5&oh=00_AfYwetkL-B2iqs4QNAHtw8lW9_cXR8GLtHb8dGnvbm4qYg&oe=68C83FF9&_nc_sid=10d13b'
    // ],
    images:[course1_1,course1_2,course1_3,course1_4]
  },
  {
    title: '45 Days International Professional Makeup Course',
    subtitle: 'Go global with advanced makeup mastery! Learn international trends, bridal looks, and advanced techniques in just 1.5 months.',
    quickFacts: [
      'Duration: 45 days, 5 days/week, 3–4 hours/day',
      'Level: Beginners & aspiring professionals',
      'Certification: Internationally recognized certificate',
      'Fees: ₹80,000',
      'Location: Kasi Academy, Janakpuri',
    ],
    learn: [
      'Skin analysis, international products, color theory',
      'HD, dewy, matte & airbrush base techniques',
      'Eye makeup: Hollywood smokey, cut crease, halo, foxy eyes, shimmer, glossy, lash fixing',
      'Bridal makeup: Indian, Pakistani, Bengali, South Indian, Western',
      'Party glam, fashion & editorial looks',
      'Contouring/highlighting, nude/bold makeup, high-fashion/creative looks',
      'Bridal/party hairstyles, saree & dupatta draping (international techniques)',
    ],
    practice: [
      'Daily application with international products',
      'Portfolio photoshoots, real client/model experience',
      'Personalized trainer feedback',
    ],
    certification: [
      'International certificate for global freelance, salon, or bridal work',
      'Social media branding tips provided',
    ],
    cta: 'Seats Limited — Enroll Today!',
    // images: [
    //   'https://www.instagram.com/p/DOJYppIE41Y/?igsh=MWV2YjVsMGV4cXF5OQ==',
    //   'https://www.instagram.com/p/DOJYRJ5E5c2/?igsh=MWUxdDNjcGRlYTRtZw==',
    //   'https://www.instagram.com/p/DOJVTF7E3Ql/?igsh=MTN0OHJoMjd4cG91MA==',
    //   'https://www.instagram.com/p/DMN7QIITuN2/?igsh=MXgwZHhyaWk5d3NlZA==',
    //   'https://www.instagram.com/p/DMLr9npTGhj/?igsh=MWRmbmlhdWVncWl2OQ==',
    //   'https://www.instagram.com/p/DJgeobwxBvG/?igsh=MWo3dXJjdWs2ZzR4OQ==',
    // ],
    // images:[
    //   'https://instagram.fdel1-5.fna.fbcdn.net/v/t51.2885-15/542135691_18133393393453218_1322895403391687767_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjE0NDB4MTcyMS5zZHIuZjgyNzg3LmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fdel1-5.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2QFJhq6YEbe_hdi2TotqmiNd1RvRr7nz5JADyecpRgjQ6NmDagvjoo9TN2wQBp6DATa9owXN13w5wZW5vYiUd0VR&_nc_ohc=WlF939NB5S0Q7kNvwE0EhFg&_nc_gid=LVWSmTCeIxFjDRax0uxduw&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzcxMzYwNzc3NDUwNjI4MDU0Mw%3D%3D.3-ccb7-5&oh=00_AfZ_sTa3t70eOowEMY0zRqReZ9UXmKWlMu4FDIo2S4AdQQ&oe=68C83287&_nc_sid=10d13b',
    //   'https://instagram.fdel1-5.fna.fbcdn.net/v/t51.2885-15/540537837_18133393126453218_2093417032367910238_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjE0NDB4MTkyMC5zZHIuZjgyNzg3LmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fdel1-5.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2QEROK6seMmvfdbJhD_f00xdrDjsfEoVzVemTJ_zEIBg9IsR7_uXwx8pjDazbfavmQT_YlJ2IJayaobNCK-gMBMV&_nc_ohc=QY726aW8TPwQ7kNvwHd9CjN&_nc_gid=-7AOBp_r6f5G6j7zsqRzvA&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzcxMzYwNjA4NzQ1NjUyNTAwNA%3D%3D.3-ccb7-5&oh=00_AfZNNmcL7C1x1UpWpziAIEM2DhUkYe_9PTRMuSaG3ZrWrA&oe=68C854A2&_nc_sid=10d13b',
    //   'https://instagram.fdel1-5.fna.fbcdn.net/v/t51.2885-15/540531242_18133390666453218_5388650949954257526_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjE0NDB4MTkyMC5zZHIuZjgyNzg3LmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fdel1-5.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2QElPM0zjuAG8LZ1nWIEUl9mXz7D-NcIDDoW-0xFis7Uky1Vip2wrlFI1xTrvC5iQ_URejHqiDkuqN4Qgx9Gutun&_nc_ohc=_sgk6CEOSr0Q7kNvwEzqwUK&_nc_gid=rzC4VYrIMJhduRGgv33GFg&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzcxMzU5MzAzMDY4ODg4NjQ3Nw%3D%3D.3-ccb7-5&oh=00_AfbiojyG5_grMY_rVu-b2uQvmpONCE_hKqEbHgEQAOzjLA&oe=68C84C10&_nc_sid=10d13b',
    //   'https://instagram.fdel1-5.fna.fbcdn.net/v/t51.2885-15/521696346_18128884510453218_4641793169331300122_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjE0NDB4MTgyOS5zZHIuZjgyNzg3LmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fdel1-5.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2QFS4p0vsTm2ACOPYOKQt64zfTxz11XZatjUxz2JxaRMoV0hngQ7cS7t4wrjV0hWPiFLTiCTLwHlr9CipkYj6EuS&_nc_ohc=4zg-mW6iQtMQ7kNvwElCZjr&_nc_gid=ltuN4RBbQsOP_A-Lr8Q0eQ&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzY3ODg1NzA2MzYxNjY2ODUzNA%3D%3D.3-ccb7-5&oh=00_AfbzpGfMu2f53IORy9b8UjhNg2wLVHRlpfGcC1FH3eKZIw&oe=68C83A4A&_nc_sid=10d13b',
    //   'https://instagram.fdel1-5.fna.fbcdn.net/v/t51.2885-15/521167332_18128805427453218_1713863625532961090_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjE0NDB4MTY5My5zZHIuZjgyNzg3LmRlZmF1bHRfaW1hZ2UuZXhwZXJpbWVudGFsIn0&_nc_ht=instagram.fdel1-5.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2QE-LuLWKyamuFU0vAyLLoD5r_TjUXDEJcguJ9aR8eSMD4l_FmJepXlT_Ywlr7t8YEt1456Rh5m3BXpiEtKAFjrl&_nc_ohc=0Gx98b6wDV4Q7kNvwG09arT&_nc_gid=Nm7MfGFOOP3R61EFXmQihQ&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzY3ODIyNjg3MTEzNTAwNDc3MQ%3D%3D.3-ccb7-5&oh=00_Afaa0o8CA8xTmdkaWua6WHFXT3pT0FFxmDB1VsBtzyRWfQ&oe=68C84D2C&_nc_sid=10d13b',
    //   'https://instagram.fdel1-5.fna.fbcdn.net/v/t51.2885-15/496800919_18122502100453218_7359239587680309876_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjE0NDB4MTQ0MC5zZHIuZjc1NzYxLmRlZmF1bHRfaW1hZ2UuZXhwZXJpbWVudGFsIn0&_nc_ht=instagram.fdel1-5.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2QG_F86CilrnK34mUObE0HxCaUGwB7KK0AeKe68JLNPGUn7l1s3iCLnLOSEiGYA5IqiSizAWbaCUGkI06roSdt_l&_nc_ohc=6MaoTfIYhr0Q7kNvwFdnleV&_nc_gid=-jbbwvaRqzyhfKa3c563sw&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzYzMDAzNjAxOTY0NDIxMDExOA%3D%3D.3-ccb7-5&oh=00_AfZB03Gjy5HJcwmFRerQE_6xTLEvCR6S79bhux7SRT53aw&oe=68C83A42&_nc_sid=10d13b'
    // ]
    images:[img1,img2,img3,img4,img5,img6]
  },
  {
    title: '15 Days Professional Hairstyling & Makeup Course',
    subtitle: 'Become a 2-in-1 beauty expert in just 15 days!',
    quickFacts: [
      'Duration: 15 days, 5 days/week, 3 hours/day',
      'Level: Beginners & professionals',
      'Certification: Certificate on Completion',
      'Fees: ₹30,000',
      'Location: Janakpuri/Uttam Nagar',
    ],
    learn: [
      'Hairstyling: prep, sectioning, straightening, curling, braids, buns, open/bridal styles',
      'Quick party makeup: skin prep, soft glam, nude/smokey/glitter, lashes',
      'Bridal touch-up: quick makeup, hairstyle, dupatta setting, saree draping',
    ],
    practice: [
      'Daily model practice, product & tool use',
      'Photoshoot for portfolio',
    ],
    certification: [
      'Great for rapid freelance launch or upskilling for bookings',
    ],
    cta: 'Seats Limited — Book Now!',
    images: [],
  },
  {
    title: '7 Days Professional PMU (Permanent Makeup) Course',
    subtitle: 'Master trending Permanent Makeup — brows, lips, eyeliner!',
    quickFacts: [
      'Duration: 7 days, 4–5 hours/day',
      'Level: Beginners & professionals',
      'Certification: Internationally Recognized Certificate',
      'Fees: ₹35,000',
      'Location: Janakpuri/Uttam Nagar',
    ],
    learn: [
      'Skin anatomy, hygiene, tools, pigments',
      'Microblading, ombre/powder/combination brows',
      'Lip techniques: blush, tint, full color',
      'Eyeliner & lash enhancement',
      'Practice on latex & live models',
      'Portfolio & certificate',
    ],
    practice: [
      'High income potential, individualized attention, start your own PMU services',
    ],
    certification: [],
    cta: 'Seats Limited — Enroll Now!',
    images: [],
  },
  {
    title: '15 Days Professional Nail Art & Extension Course',
    subtitle: 'Become a certified nail artist in just 15 days!',
    quickFacts: [
      'Duration: 15 days, 5 days/week, 3 hours/day',
      'Level: Beginners & professionals',
      'Certification: Professional Certificate',
      'Fees: ₹19,999',
      'Location: Janakpuri/Uttam Nagar',
    ],
    learn: [
      'Nail anatomy, prep, cuticle care',
      'Gel/acrylic extensions, overlays, refill & removal',
      'Nail art: glitter, ombré, chrome, marble, 3D, encapsulation, trending styles',
    ],
    practice: [
      'Hands-on daily and model practice',
      'Portfolio building',
    ],
    certification: [
      'Ideal for freelance, salon, or home-based business',
    ],
    cta: 'Seats Limited — Book Now!',
    images: [],
  },
  {
    title: '3 Days Intensive Bridal Makeup Masterclass',
    subtitle: 'Specialize in modern, classic, and reception bridal looks in just 3 days!',
    quickFacts: [
      'Duration: 3 days, 4–5 hours/day',
      'Level: Aspiring & pro makeup artists',
      'Certification: Certificate of Participation/Completion',
      'Fees: ₹15,000',
      'Location: Janakpuri/Uttam Nagar',
    ],
    learn: [
      'Flawless bridal base & party looks (Engagement/Reception)',
      'Eye makeup: glitter, cut crease, smokey',
      'Contouring, highlighting, bridal lips',
      'Dupatta and jewelry setting, basic bridal hairstyles',
      'Photoshoot techniques for portfolio',
    ],
    practice: [
      'Live demos, hands-on work, personalized feedback',
    ],
    certification: [],
    cta: 'Limited Seats — Register Now!',
    // images: [
    //   'https://www.instagram.com/p/DOTYvjAE5Ke/?igsh=bWl6ZzA3MHNvc2E3',
    //   'https://www.instagram.com/p/DHvcg63S8Ls/?img_index=2&igsh=MXN0YTV4MXVsZzhpcQ==',
    //   'https://www.instagram.com/p/DGNlUlqTt0q/?igsh=MWV2MDR6eDlhbTFnYw==',
    //   'https://www.instagram.com/p/DGJAbcCzgCX/?igsh=MXhqaDdoamNwMmdvaA==',
    //   'https://www.instagram.com/p/DFZk6ZDxPqY/?igsh=MTA4a3ptZ3gzcGJxNw==',
    //   'https://www.instagram.com/p/DKAI9JBTEMB/?igsh=MW9zOXNnd3ZrendjZg==',
    // ],
    // images:[
    //   'https://instagram.fdel1-5.fna.fbcdn.net/v/t51.2885-15/543689755_18133747786453218_3242545405356623959_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjE0NDB4MTQ0MC5zZHIuZjgyNzg3LmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fdel1-5.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2QGdteTMjuMN07nNzuYeqfSGZfCqnAl9n4whvwfJgAW4LWKryNb49lW33G9JOzdkW3cVy_7POxmK-ZA44TzSE3HV&_nc_ohc=3UlrUmYokRoQ7kNvwGBGRUm&_nc_gid=mhLFERUVPBWX7cYOCYJjIA&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzcxNjQyMjkyNjg0MjcyMTM0OA%3D%3D.3-ccb7-5&oh=00_AfapCIi5Za_GhJHHBAVdBqbB30aUTVoVdoJ8UNPUamaWzA&oe=68C846AF&_nc_sid=10d13b',
    //   'https://instagram.fdel1-3.fna.fbcdn.net/v/t51.2885-15/487228014_17961443741909567_4193605447858973944_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjE0NDB4MTgwMC5zZHIuZjc1NzYxLmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fdel1-3.fna.fbcdn.net&_nc_cat=111&_nc_oc=Q6cZ2QHpAUgtZfS4nGTJexcr3AaRvOvSUREfQFADq65glyn5b_01VHPJJQncFRwxYiTPF8NPpJqqmVjdEkjecstryghk&_nc_ohc=0cDVv9PrXbAQ7kNvwGli1gS&_nc_gid=qcRjoUalDM4rcUxNwKil4g&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzU5ODIyMDAyNTk1NTc2NTgwNQ%3D%3D.3-ccb7-5&oh=00_AfYyyVpzyNNX547uZmPGrSNHanAVOyppXAFrLwfEHFV5lA&oe=68C83179&_nc_sid=10d13b',
    //   'https://instagram.fdel1-5.fna.fbcdn.net/v/t51.2885-15/479495429_18114855286453218_650032867636144494_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjE0NDB4MTY4NC5zZHIuZjc1NzYxLmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fdel1-5.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2QEbJ8Jw68G9P8tqPMSf7XM8prIDalnb2RDWRbbW_GHUozPJ6AlOG5Oxv1kH5OLT8XcupyKRZYE-BXvIMvV6btC3&_nc_ohc=HSxOj2iSCBMQ7kNvwHMt3D8&_nc_gid=Vt8clkRcMh1y8hnw52-rRw&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzU3MDY3NDIyMjEyMzM3NTkxNA%3D%3D.3-ccb7-5&oh=00_AfbrL3C5sj4Xs8K_OnjPpqstVx9Eg8KaHgtroIzoxnakgQ&oe=68C84FCF&_nc_sid=10d13b',
    //   'https://instagram.fdel1-5.fna.fbcdn.net/v/t51.2885-15/479499555_18114680068453218_6051776950005479012_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjE0NDB4MTgwMC5zZHIuZjc1NzYxLmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fdel1-5.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2QG7m6dJkE2EiLl5dYmZqcstkoURICHgDkgvcUk9VGmb3fDF3T4pU-Yq0rlFXV-GhrCbl7dnzM0kYnQdH2QPVzD8&_nc_ohc=ZWZ3qbHtQT4Q7kNvwH_Rhgo&_nc_gid=J7zUS-1f0BVDgr0xw-T5Rw&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzU2OTM4NjA2NTIwNTUyNjY3OQ%3D%3D.3-ccb7-5&oh=00_AfZFLArBudD8dFm2kHm6Vz4MpiZMO-c5ID5_n0Fmg1O3Pw&oe=68C85F7B&_nc_sid=10d13b',
    //   'https://instagram.fdel1-5.fna.fbcdn.net/v/t51.2885-15/475433535_18112887460453218_9054449492458948981_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjE0NDB4MTY4Ni5zZHIuZjc1NzYxLmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fdel1-5.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2QF4cISGRfJuqGR5iWbW5PHfXVJbXAGEAfCWe3XESeK2L5yDiFf5ko1wNH8WRewtkFg_Xu6JJZaYh0kC6rLue3Xs&_nc_ohc=eWu5Gpyy9eQQ7kNvwFeNQGQ&_nc_gid=kZBQDv2KRhwLpgwF4QNDMQ&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzU1NjAzNTcyMzA5NjU1NDEzNg%3D%3D.3-ccb7-5&oh=00_AfZrssk5TxKxg8UVnVAlA1dcI9hfFNt-8z5hyOJHE5gZew&oe=68C85BF3&_nc_sid=10d13b',
    //   'https://instagram.fdel1-5.fna.fbcdn.net/v/t51.2885-15/500686464_18123672898453218_3729585253961005487_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjE0NDB4MTgwMC5zZHIuZjc1NzYxLmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fdel1-5.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2QFh346hsx-gKRr-K1Od4MG0OA_0S4nxhyKTswnaG3hS60eN2yISdADrjKKdWCXc-YQk1vHWVpxMHnFxb0ZqLtMR&_nc_ohc=GLFZ2LjV5ksQ7kNvwExVAYb&_nc_gid=8f4q-RnDK7iY0w0ntzHDbg&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzYzODk0Nzg4NDg2MDk4MjAxNw%3D%3D.3-ccb7-5&oh=00_AfbGc2Z945jVCGbTo5CoIW_yp5e9NbT3sU0MGJqDQ7zcuQ&oe=68C850DD&_nc_sid=10d13b'
    // ]
    images:[course6_1,course6_2,course6_3,course6_4,course6_5,course6_6]
  },
  {
    title: 'Salon Management & Entrepreneurship Course',
    subtitle: 'Build & manage a successful salon business in 30 days!',
    quickFacts: [
      'Duration: 30 days, 5 days/week, 2–3 hours/day',
      'Level: Owners, managers, aspiring entrepreneurs',
      'Certification: Salon Management Professional Certificate',
      'Fees: ₹40,000',
      'Location: Janakpuri/Uttam Nagar',
    ],
    learn: [
      'Salon business models, setup, budgeting',
      'Operations, staff, inventory, hygiene',
      'Client handling, sales, communication',
      'Marketing, branding, social media, promotions',
      'Financial management, legal, accounting, compliance',
    ],
    practice: [
      'Roleplays, case studies, guest lectures, project work',
    ],
    certification: [],
    cta: 'Seats Limited — Enroll Now!',
    images: [],
  },
  {
    title: 'Airbrush Makeup Course – Basic to Advance',
    subtitle: 'Master flawless airbrush makeup — basic to editorial in just 7 days!',
    quickFacts: [
      'Duration: 7 days, customizable, 3–4 hours/day',
      'Level: Beginners & advanced',
      'Certification: Professional Airbrush Makeup Certificate',
      'Fees: ₹9,999',
      'Location: Janakpuri/Uttam Nagar',
    ],
    learn: [
      'Airbrush machine, tool maintenance, hygiene',
      'Techniques: day, party, bridal, HD/glam, corrective, body/tattoo coverage',
    ],
    practice: [
      'Daily practice, portfolio shoots, model practice',
    ],
    certification: [],
    cta: 'Seats Limited — Enroll Now!',
    // images: [
    //   'https://www.instagram.com/p/DJbASwWx8VK/?igsh=cXJ4Nm5renh5ZWsw',
    //   'https://www.instagram.com/p/DGDDwcIxTUs/?igsh=Y291MnI0YjVvdDZx',
    //   'https://www.instagram.com/p/DGDDdanRHa3/?igsh=ZHo0ZWF1ZWE3NGY0',
    //   'https://www.instagram.com/reel/C4DF1-IPadP/?igsh=MW5wNWtmbmpqMmxkcw==',
    //   'https://www.instagram.com/p/C_yd4JIh1qw/?igsh=MXY5OGU0ajVidnJ2ag==',
    // ],
    // images:[
    //   'https://instagram.fdel1-5.fna.fbcdn.net/v/t51.2885-15/496173395_18122292169453218_2764397010070685977_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjE0NDB4MTY2OS5zZHIuZjc1NzYxLmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fdel1-5.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2QGnA_KapemdCrkfCX9tH5tDzbOCMqXNntE9nwGfnPEZ5DsEDHEuhXzsvRhyKAtfwBCYTuRBNdHhSicFUFcMJaG0&_nc_ohc=c85MtlOFB7wQ7kNvwFpIAQl&_nc_gid=CXSCI1mUmytPWrt64q4Ieg&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzYyODQ5NTIxMzY0OTQ0NjIxOA%3D%3D.3-ccb7-5&oh=00_AfarB5OgW37Z1P4n9T0cyHWq6x0QUokRtMuAVLVYkMnwCw&oe=68C8601B&_nc_sid=10d13b',
    //   'https://instagram.fdel1-5.fna.fbcdn.net/v/t51.2885-15/479911729_18114425119453218_6467291183044914758_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjE0NDB4MTgwMC5zZHIuZjc1NzYxLmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fdel1-5.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2QEGkmfuh2rg6UKNsBqAMt6h40jj8MaaQxrbYisGyB5R83DAFXJveKbV1NqX3unHJoMIeAvghGIa7PwX-VaPLzml&_nc_ohc=F8i5Cd9shwkQ7kNvwE7x9IO&_nc_gid=pY_5SkV8HhX2agz87yXbng&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzU2NzcxMTg1MjY5Mzg5NDQ0NA%3D%3D.3-ccb7-5&oh=00_AfZ-rNTvUE3uJRilgF0GVNdZ5d0VtPWnqJ4eBv3QSPet4g&oe=68C85A5E&_nc_sid=10d13b',
    //   'https://instagram.fdel1-5.fna.fbcdn.net/v/t51.2885-15/479538716_18114424903453218_3155214323898470977_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjE0NDB4MTgwMC5zZHIuZjc1NzYxLmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fdel1-5.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2QEh_WF2dwXlRS92pYPno1Lfvehbcblaw_AqT7kFHm60sAkR_dsaxXANHfqJhxD8lyO5vkYfjRdcVcj5YX8TIRZj&_nc_ohc=Rk-IpAsib9UQ7kNvwHTYtHc&_nc_gid=32XewvQcTH8A0r9uxsrjxQ&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzU2NzcxMDU0NTM4ODAwOTE0Mw%3D%3D.3-ccb7-5&oh=00_AfbFWqsAcKvpkzHH_ZtE26cEE4lCGmqmRClZ6kaXHbPkmg&oe=68C84138&_nc_sid=10d13b',
    //   'https://instagram.fdel1-5.fna.fbcdn.net/v/t39.30808-6/468074692_18106088707453218_7857024192656993179_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjE0NDB4MTgwMC5zZHIuZjMwODA4LmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fdel1-5.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2QETyoK8cZFdTb-mOY6WrL6veWwUnfhsjHn1Kr1GonYfTvwDOqNFWZGz2NaJB6a1c58Pj6fjHqA5kGtytPIswo0N&_nc_ohc=ktvkk0P9YtYQ7kNvwGeCV3y&_nc_gid=064b0IVDfCNBJqQuruzWOg&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzQ1NDk1NTI2NTU5Mjg3NTY5Ng%3D%3D.3-ccb7-5&oh=00_AfZOHqE-uy96OXvx001VlmFDP6vEY4ej4EGcUy-07KiNiA&oe=68C83ADA&_nc_sid=10d13b'
    // ]
    images:[course9_1,course9_2,course9_3,course9_4]
  },
  {
    title: '3 Days Professional Lash Extension Course',
    subtitle: 'Learn classic, hybrid & volume lash extension in 3 days!',
    quickFacts: [
      'Duration: 3 days, 4–5 hours/day',
      'Level: Beginners & professionals',
      'Certification: Professional Lash Extension Certificate',
      'Fees: ₹9,999',
      'Location: Janakpuri/Uttam Nagar',
    ],
    learn: [
      'Theory, hygiene, classic/hybrid/volume techniques',
      'Lash mapping, practice on models, aftercare, client consultation',
    ],
    practice: [
      'High-demand skill for freelance/salon work, small batch training',
    ],
    certification: [],
    cta: 'Book Your Seat Now!',
    images: [],
  },
  {
    title: '30 Days Professional Haircut & Chemical Treatment Course',
    subtitle: 'Cut, color, and chemically treat with confidence — full mastery in 30 days!',
    quickFacts: [
      'Duration: 30 days, 5 days/week, 3–4 hours/day',
      'Level: Beginners & professionals',
      'Certification: Professional Haircut & Chemical Treatment Certificate',
      'Fees: ₹85,000',
      'Location: Janakpuri/Uttam Nagar',
    ],
    learn: [
      'All haircuts (basic to advanced), layers, graduation, trending styles',
      'Chemical: spa, smoothening, straightening, rebonding, keratin, coloring, balayage, ombré, root touch-up',
      'Finishing: blow-dry, styling, tool techniques',
      'Aftercare, client maintenance',
    ],
    practice: [
      'Hands-on mannequins/models, live model practice, portfolio building',
    ],
    certification: [],
    cta: 'Seats Limited — Enroll Now!',
    images: [],
  },
  {
    title: '7 Days Prosthetic & Fantasy Makeup Course',
    subtitle: 'Master high-demand prosthetic and fantasy makeup skills for film, theatre, fashion & events!',
    quickFacts: [
      'Duration: 7 days, intensive training, 4–5 hours daily',
      'Level: Beginners & professionals in makeup, film, and creative arts',
      'Certification: Professional Certificate in Prosthetic & Fantasy Makeup',
      'Fees: ₹45,000',
      'Location: Kasi Academy, Janakpuri / Uttam Nagar',
    ],
    learn: [
      'Tools, products, and materials for prosthetics; skin safety and hygiene',
      'Basic prosthetic applications: cuts, bruises, wounds, burns, scars',
      'Advanced prosthetics: facial alterations, aging makeup, character features',
      'Fantasy makeup basics: color theory, glitter, gems, body paints, avant-garde concepts',
      'Fantasy makeup advance: character transformations including animal, fairy, mythical creature looks, and use of props/accessories',
      'Full character creation combining prosthetic and fantasy elements for theatrical, film & stage styles',
      'Final project: create and present a complete prosthetic + fantasy look, portfolio building',
    ],
    practice: [
      'Hands-on daily training with professional prosthetic materials and creative tools',
      'Model presentations and photoshoot preparation guidance',
      'Personalized corrections and mentoring',
    ],
    certification: [
      'Build a unique professional portfolio in editorial, special effects, and creative makeup sectors',
      'Acquire sought-after skills for film, theatre, television, and event makeup artistry',
    ],
    cta: 'Seats Limited — Enroll Now!',
    // images: [
    //   'https://www.instagram.com/p/DJBCjtczqsN/?igsh=OHJ2ZmZra203dmNk',
    //   'https://www.instagram.com/p/DJBBKjaTfa6/?igsh=MWFrbjVxcGUxazM4cQ==',
    //   'https://www.instagram.com/p/DI_-lN4T-I3/?igsh=MWpqbDF0Ynp1bno1cA==',
    //   'https://www.instagram.com/p/DI_-Fm5zHje/?igsh=MWVpb3dwN3FyNDBpMQ==',
    //   'https://www.instagram.com/p/DI_99H5TXob/?igsh=OXBlNGQ0dTF0NnJm',
    //   'https://www.instagram.com/p/DHdLPWLRVHk/?igsh=MXFhMGp3enJnaHN1Zw==',
    //   'https://www.instagram.com/p/DHaXxe0xiTj/?igsh=MjhvbzhmMXV2aGpz',
    //   'https://www.instagram.com/p/DHaXa8JxDIY/?igsh=YWd4ZWd2a3o5dWk2',
    // ],
    images:[course11_1,course11_2,course11_3,course11_4,course11_5,course11_6,course11_7,course11_8]
  },
];

const Courses = () => {
  const [carouselIndex, setCarouselIndex] = useState(0); // for carousel
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [modalImgIndex, setModalImgIndex] = useState(0);

  // Responsive: 4 on desktop, 2 on tablet, 1 on mobile
  const getVisibleCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 4;
      if (window.innerWidth >= 640) return 2;
    }
    return 1;
  };
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());
  React.useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, courses.length - visibleCount);
  const handlePrev = () => setCarouselIndex((i) => Math.max(0, i - 1));
  const handleNext = () => setCarouselIndex((i) => Math.min(maxIndex, i + 1));

  // Clamp carouselIndex if visibleCount changes (e.g., on resize)
  React.useEffect(() => {
    setCarouselIndex((i) => Math.min(i, maxIndex));
  }, [visibleCount, maxIndex]);

  // Calculate translateX so last set is always fully visible
  const getTranslateX = () => {
    if (carouselIndex === maxIndex) {
      return (maxIndex * 100) / visibleCount;
    }
    return (carouselIndex * 100) / visibleCount;
  };

  // Auto-slide (autoplay)
  const [isPaused, setIsPaused] = useState(false);
  useEffect(() => {
    if (isPaused) return;
    let interval: ReturnType<typeof setInterval> | null = setInterval(() => {
      handleNext();
    }, 3000);
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPaused, visibleCount, carouselIndex]);

  const openModal = (course: Course) => {
    setSelectedCourse(course);
    setModalImgIndex(0);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  // Modal image navigation
  const prevModalImg = () => setModalImgIndex((i) => {
    if (!selectedCourse?.images?.length) return 0;
    return i === 0 ? selectedCourse.images.length - 1 : i - 1;
  });
  const nextModalImg = () => setModalImgIndex((i) => {
    if (!selectedCourse?.images?.length) return 0;
    return i === selectedCourse.images.length - 1 ? 0 : i + 1;
  });

  return (
    <section id="courses" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our professional beauty courses designed for every level. Tap a course to see details!
          </p>
        </div>
        {/* Carousel */}
        <div className="relative mb-12">
          <button
            onClick={handlePrev}
            disabled={carouselIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-rose-100 text-rose-500 rounded-full p-2 shadow-md transition-all ${carouselIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            aria-label="Previous"
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
          </button>
          <div className="overflow-hidden pr-[85px]">
            <div
              className="flex gap-2 transition-transform duration-500"
              style={{ transform: `translateX(-${getTranslateX()}%)` }}
            >
              {courses.map((course: Course) => (
                <div
                  key={course.title}
                  className="min-w-0 flex-1 max-w-sm bg-white rounded-2xl shadow-lg card-hover cursor-pointer flex flex-col items-center p-6"
                  style={{ flex: `0 0 calc(100%/${visibleCount})` }}
                  onClick={() => openModal(course)}
                >
                  <div className="w-full h-40 rounded-xl overflow-hidden mb-4 border-2 border-pink-100 flex items-center justify-center bg-gray-50">
                    {course.images && course.images.length > 0 ? (
                      <img src={course.images[0]} alt={course.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-300 text-4xl">?</div>
                    )}
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-900 text-center mb-2 truncate w-full">{course.title}</h3>
                  <p className="text-gray-600 text-base text-center line-clamp-2 w-full mb-1">{course.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={handleNext}
            disabled={carouselIndex === maxIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-rose-100 text-rose-500 rounded-full p-2 shadow-md transition-all ${carouselIndex === maxIndex ? 'opacity-50 cursor-not-allowed' : ''}`}
            aria-label="Next"
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
        {/* Modal Popup */}
        {modalOpen && selectedCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 relative animate-fade-in overflow-y-auto max-h-[90vh]">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-rose-500 text-2xl font-bold"
                aria-label="Close"
              >
                &times;
              </button>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
                {selectedCourse.title}
              </h3>
              <p className="text-lg text-gray-700 mb-4 font-medium text-center">{selectedCourse.subtitle}</p>
              {selectedCourse.images && selectedCourse.images.length > 0 && (
                <div className="flex flex-col gap-2 items-center mb-4">
                  <div className="relative w-full flex justify-center items-center">
                    <button
                      onClick={prevModalImg}
                      className="absolute left-0 z-10 bg-white/80 hover:bg-rose-100 text-rose-500 rounded-full p-2 shadow-md transition-all"
                      style={{ top: '50%', transform: 'translateY(-50%)' }}
                      aria-label="Previous image"
                    >
                      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
                    </button>
                    <img
                      src={selectedCourse.images[modalImgIndex]}
                      alt="Course preview"
                      className="w-64 h-64 rounded-xl object-cover border-2 border-pink-200 mx-auto"
                    />
                    <button
                      onClick={nextModalImg}
                      className="absolute right-0 z-10 bg-white/80 hover:bg-rose-100 text-rose-500 rounded-full p-2 shadow-md transition-all"
                      style={{ top: '50%', transform: 'translateY(-50%)' }}
                      aria-label="Next image"
                    >
                      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
                    </button>
                  </div>
                  <div className="flex gap-1 justify-center mt-2">
                    {selectedCourse.images.map((_, i: number) => (
                      <button
                        key={i}
                        onClick={() => setModalImgIndex(i)}
                        className={`w-3 h-3 rounded-full border-2 ${modalImgIndex === i ? 'bg-rose-500 border-rose-500' : 'bg-white border-pink-200'}`}
                        aria-label={`Go to image ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div className="mb-4">
                <h4 className="font-semibold text-rose-500 mb-1">Quick Facts</h4>
                <ul className="list-disc ml-5 text-gray-700 mb-3">
                  {selectedCourse.quickFacts.map((fact: string, i: number) => (
                    <li key={i}>{fact}</li>
                  ))}
                </ul>
                <h4 className="font-semibold text-rose-500 mb-1">What You’ll Learn</h4>
                <ul className="list-disc ml-5 text-gray-700 mb-3">
                  {selectedCourse.learn.map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                {selectedCourse.practice.length > 0 && (
                  <>
                    <h4 className="font-semibold text-rose-500 mb-1">Practice & Support</h4>
                    <ul className="list-disc ml-5 text-gray-700 mb-3">
                      {selectedCourse.practice.map((item: string, i: number) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}
                {selectedCourse.certification.length > 0 && (
                  <>
                    <h4 className="font-semibold text-rose-500 mb-1">Certification & Career</h4>
                    <ul className="list-disc ml-5 text-gray-700 mb-3">
                      {selectedCourse.certification.map((item: string, i: number) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}
                <div className="mt-4 text-center">
                  <span className="inline-block bg-gradient-to-r from-rose-400 to-pink-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                    {selectedCourse.cta}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Courses;