import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Hamza", 
      role: "Bride",
      company: "Garden Wedding 2023",
      // image: "https://media.istockphoto.com/id/1135381173/photo/portrait-of-a-young-man-outdoors-smiling.jpg?s=612x612&w=0&k=20&c=J8DKGHI8o-oj8cY1CCNpFY2V9OmVVbJuKSO2DdbMvRg=",
      quote: "Kasi’s makeup course was amazing! Her attention to detail and the way she teaches techniques really helped me improve. She showed me how to enhance natural beauty, and I truly feel like I’ve become the best version of myself as a makeup artist.",
      rating: 5
    },
    {
      name: "Sana Khan",
      role: "Model",
      company: "Fashion Editorial Shoot",
      // image: "https://images.pexels.com/photos/3992660/pexels-photo-3992660.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "Learning from Kasi has been a dream! She really understands how makeup works both in real life and on camera. Her lessons are creative yet practical, showing us how to create looks that are artistic but still wearable. She’s a true professional and an inspiring teacher.",
      rating: 5
    },
    {
      name: "Pooja Gupta",
      role: "Event Coordinator",
      company: "Luxury Events Co.",
      // image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "I highly recommend Kasi’s makeup course to anyone serious about learning. Her professionalism, punctuality, and incredible talent make her the perfect teacher for students who want to build skills for luxury events and special occasions.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left md:text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Student
            <span className="gradient-text"> Testimonials</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read what clients say about their experience working with Kasi Academy. 
            Every testimonial represents a beautiful transformation and lasting relationship.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 card-hover relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-rose-300" />
              
              <div className="flex items-center mb-6">
                {/* <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                /> */}
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {testimonial.role}
                  </p>
                  <p className="text-rose-500 text-sm font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-left md:text-center">
          <div className="bg-gray-900 rounded-2xl p-6 md:p-12 text-white">
            <h3 className="font-display text-3xl font-bold mb-6">
              Ready for Your Transformation?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience the artistry and professionalism that has made hundreds of clients 
              feel beautiful and confident. Let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-gray-900">
              <a href="https://www.instagram.com/kasiacademy">  View Portfolio</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;