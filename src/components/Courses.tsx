import { useState } from 'react';
import { enrollInCourse, EnrollmentPayload } from '../services/enrollment';
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
import course7day from '../assets/images/Permanent Makeup (PMU) course_ microblading and powder brows close-up, tools, pigments, and expert results..png'
import coruse30day from '../assets/images/30 Days Professional Haircut & Chemical Treatment Course_ stylist performing haircuts and chemical treatments.png'
import course3day from '../assets/courses/course3day/course3day.png'
import course15day from '../assets/courses/course15day/course15day.jpg'
import course15day1 from '../assets/courses/course15day/course15day1.jpg'
import salon from '../assets/courses/course30/salon.jpg'
import imga1 from  '../assets/bannerCourse/1.jpg'
import imga2 from  '../assets/bannerCourse/2.png'
import imga3 from  '../assets/bannerCourse/3.png'
import imga4 from  '../assets/bannerCourse/4.jpg'
import imga5 from  '../assets/bannerCourse/5.jpg'


type Course = {
  title: string;
  subtitle: string;
  durationDays: number;
  quickFacts: string[];
  learn: string[];
  practice: string[];
  certification: string[];
  cta: string;
  images: string[];
};


const imgalist: string[] = [imga1, imga2, imga3, imga4, imga5];



const courses: Course[] = [
  {
    title: '1 Month Professional Makeup Course',
    subtitle: 'Become a professional makeup artist in just 30 days! Master bridal, party, glam, and advanced makeup with expert trainers and hands-on practice.',
    durationDays: 30,
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
    images:[course1_1,course1_2,course1_3,course1_4]
  },
  {
    title: '45 Days International Professional Makeup Course',
    subtitle: 'Go global with advanced makeup mastery! Learn international trends, bridal looks, and advanced techniques in just 1.5 months.',
    durationDays: 45,
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
    images:[img1,img2,img3,img4,img5,img6]
  },
  {
    title: '15 Days Professional Hairstyling & Makeup Course',
    subtitle: 'Become a 2-in-1 beauty expert in just 15 days!',
    durationDays: 15,
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
    images: [course15day],
  },
  {
    title: '7 Days Professional PMU (Permanent Makeup) Course',
    subtitle: 'Master trending Permanent Makeup — brows, lips, eyeliner!',
    durationDays: 7,
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
    images: [course7day],
  },
  {
    title: '15 Days Professional Nail Art & Extension Course',
    subtitle: 'Become a certified nail artist in just 15 days!',
    durationDays: 15,
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
    images: [course15day1],
  },
  {
    title: '3 Days Intensive Bridal Makeup Masterclass',
    subtitle: 'Specialize in modern, classic, and reception bridal looks in just 3 days!',
    durationDays: 3,
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
    images:[course6_1,course6_2,course6_3,course6_4,course6_5,course6_6]
  },
  {
    title: 'Salon Management & Entrepreneurship Course',
    subtitle: 'Build & manage a successful salon business in 30 days!',
    durationDays: 30,
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
    images: [salon],
  },
  {
    title: 'Airbrush Makeup Course – Basic to Advance',
    subtitle: 'Master flawless airbrush makeup — basic to editorial in just 7 days!',
    durationDays: 7,
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
    images:[course9_1,course9_2,course9_3,course9_4]
  },
  {
    title: '3 Days Professional Lash Extension Course',
    subtitle: 'Learn classic, hybrid & volume lash extension in 3 days!',
    durationDays: 3,
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
    images: [course3day],
  },
  {
    title: '30 Days Professional Haircut & Chemical Treatment Course',
    subtitle: 'Cut, color, and chemically treat with confidence — full mastery in 30 days!',
    durationDays: 30,
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
    images: [coruse30day],
  },
  {
    title: '7 Days Prosthetic & Fantasy Makeup Course',
    subtitle: 'Master high-demand prosthetic and fantasy makeup skills for film, theatre, fashion & events!',
    durationDays: 7,
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
    images:[course11_1,course11_2,course11_3,course11_4,course11_5,course11_6,course11_7,course11_8]
  },
];

const Courses = () => {
  const [modalOpen, setModalOpen] = useState(false);
  // const navigate=useNavigate()
  // Categories: show cards (3, 7, 15, 30, 30+)
  type FilterKey = '3' | '7' | '15' | '30' | '30+';
  const [selectedCategory, setSelectedCategory] = useState<FilterKey | null>(null);
  const [enrollOpenFor, setEnrollOpenFor] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<EnrollmentPayload>({ name: '', phoneNumber: '', mail: '', message: '' });
  const [submitMsg, setSubmitMsg] = useState<string | null>(null);

  const getCoursesForCategory = (category: FilterKey) => {
    if (category === '3') return courses.filter((c) => c.durationDays === 3);
    if (category === '7') return courses.filter((c) => c.durationDays === 7);
    if (category === '15') return courses.filter((c) => c.durationDays === 15);
    if (category === '30') return courses.filter((c) => c.durationDays === 30);
    return courses.filter((c) => c.durationDays > 30);
  };

  const openModal = (category: FilterKey) => {
    setSelectedCategory(category);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);
  const openEnroll = (courseTitle: string) => {
    setEnrollOpenFor(courseTitle);
    setForm({ name: '', phoneNumber: '', mail: '', message: '' });
    setSubmitMsg(null);
  };
  const closeEnroll = () => {
    setEnrollOpenFor(null);
    setSubmitting(false);
  };
  const submitEnroll = async () => {
    if (!enrollOpenFor) return;
    setSubmitting(true);
    setSubmitMsg(null);
    try {
      await enrollInCourse(enrollOpenFor, form);
      setSubmitMsg('Enrollment submitted successfully. We will contact you soon.');
    } catch (e: any) {
      setSubmitMsg(e?.message || 'Failed to submit. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };


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
        {/* Only 4 category cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 mb-12">
          {([
            { key: '3', label: '3 Days', desc: 'Quick masterclasses' },
            { key: '7', label: '7 Days', desc: 'Short-term intensive courses' },
            { key: '15', label: '15 Days', desc: 'Two-week pro upskill courses' },
            { key: '30', label: '30 Days', desc: 'One-month professional courses' },
            { key: '30+', label: '30+ Days', desc: 'Advanced and extended programs' },
          ] as { key: FilterKey; label: string; desc: string }[]).map((cat, index) => {
            const count = getCoursesForCategory(cat.key).length;
            return (
              <div
                key={cat.key}
                className="bg-white rounded-2xl shadow-lg card-hover cursor-pointer flex flex-col items-center p-6"
                onClick={() => openModal(cat.key)}
              >
                <div className="w-full h-40 rounded-xl overflow-hidden mb-4 border-2 border-pink-100 flex items-center justify-center bg-gray-50">
                  <img 
                    className="h-full w-full object-cover" 
                    src={imgalist[index % imgalist.length]} 
                    alt={`${cat.label} courses`} 
                  />
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900 text-center mb-1">{cat.label} Courses</h3>
                <div className="text-sm text-gray-500 mt-1">{cat.desc}</div>
                <div className="mt-2 inline-block bg-rose-50 text-rose-600 px-3 py-1 rounded-full text-xs font-semibold">
                      {count} course{count !== 1 ? 's' : ''}
                    </div>
                <p className="text-gray-600 text-sm text-center pt-2">Tap to view all</p>
              </div>
            );
          })}
        </div>
        {/* Modal Popup */}
        {modalOpen && selectedCategory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white md:rounded-2xl md:shadow-2xl w-full mx-auto relative animate-fade-in overflow-y-auto h-[90vh]  md:h-screen md:max-h-screen">
              <div className="sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-rose-100 px-6 py-3 flex items-center justify-between">
                <h3 className="font-display text-xl md:text-2xl font-bold text-gray-900">
                  {selectedCategory} Day Courses
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-rose-500 text-2xl font-bold"
                  aria-label="Close"
                >
                  &times;
                </button>
              </div>
              <div className="px-6 pt-4 pb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getCoursesForCategory(selectedCategory).map((course) => (
                  <div key={course.title} className="border border-pink-100 rounded-xl p-4 md:p-5 bg-white h-full">
                    <div className="flex flex-col gap-4 h-full">
                      <div>
                        <div className="w-full h-[300px] rounded-lg overflow-hidden border-2 border-pink-200 flex items-center justify-center bg-gray-50">
                    {course.images && course.images.length > 0 ? (
                      <img src={course.images[0]} alt={course.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-300 text-4xl">?</div>
                    )}
                  </div>
                      </div>
                      <div className="flex-1 flex flex-col">
                        <h4 className="font-display text-xl md:text-2xl font-bold text-gray-900">{course.title}</h4>
                        <p className="text-gray-700 mb-4 font-medium">{course.subtitle}</p>
                        <div className="border-t border-pink-100 my-2" />
                        <div className="grid grid-cols-1 gap-4">
                          <div>
                            <h5 className="font-semibold text-rose-500 mb-1">Quick Facts</h5>
                            <ul className="list-disc ml-5 text-gray-700 mb-3">
                              {course.quickFacts.map((fact, i) => (
                                <li key={i}>{fact}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-rose-500 mb-1">What You’ll Learn</h5>
                            <ul className="list-disc ml-5 text-gray-700 mb-3">
                              {course.learn.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          </div>
                          {course.practice.length > 0 && (
                            <div>
                              <h5 className="font-semibold text-rose-500 mb-1">Practice & Support</h5>
                              <ul className="list-disc ml-5 text-gray-700 mb-3">
                                {course.practice.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {course.certification.length > 0 && (
                            <div>
                              <h5 className="font-semibold text-rose-500 mb-1">Certification & Career</h5>
                              <ul className="list-disc ml-5 text-gray-700 mb-3">
                                {course.certification.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                        <div className="mt-auto pt-2">
                          <button
                            onClick={() => openEnroll(course.title)}
                            className="inline-block bg-gradient-to-r from-rose-400 to-pink-500 hover:opacity-95 text-white w-full text-center px-3 py-2 rounded-full font-semibold text-xs"
                            aria-label="Book Your Seat Now"
                          >
                            Book Your Seat Now!
                          </button>
                        </div>
                      </div>
                    </div>
                </div>
              ))}
              </div>
              </div>
            </div>
          </div>
        )}
        {enrollOpenFor && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white md:rounded-2xl md:shadow-2xl w-full max-w-lg mx-auto p-6 relative animate-fade-in">
              <button
                onClick={closeEnroll}
                className="absolute top-4 right-4 text-gray-400 hover:text-rose-500 text-2xl font-bold"
                aria-label="Close"
              >
                &times;
              </button>
              <h3 className="font-display text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">Join {enrollOpenFor}</h3>
              <div className="space-y-3">
                <input
                  placeholder="Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-rose-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300"
                />
                <input
                  placeholder="Phone Number"
                  value={form.phoneNumber}
                  onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
                  className="w-full border border-rose-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300"
                />
                <input
                  placeholder="Email"
                  type="email"
                  value={form.mail}
                  onChange={(e) => setForm({ ...form, mail: e.target.value })}
                  className="w-full border border-rose-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300"
                />
                <textarea
                  placeholder="Message (optional)"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full border border-rose-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300 min-h-[90px]"
                />
                {submitMsg && (
                  <div className="text-center text-sm text-gray-600">{submitMsg}</div>
                )}
                <button
                  disabled={submitting || !form.name || !form.phoneNumber || !form.mail}
                  onClick={submitEnroll}
                  className={`w-full px-4 py-2 rounded-lg font-semibold text-white ${
                    submitting || !form.name || !form.phoneNumber || !form.mail
                      ? 'bg-rose-300 cursor-not-allowed'
                      : 'bg-gradient-to-r from-rose-400 to-pink-500 hover:opacity-95'
                  }`}
                >
                  {submitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Courses;