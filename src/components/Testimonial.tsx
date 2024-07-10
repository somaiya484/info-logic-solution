"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import './instructor.css';

interface TestimonialData {
    name: string;
    role: string;
    feedback: string;
    agency: string;
    rating: number;
}

const testimonials: TestimonialData[] = [
    {
        name: "Joon-ho",
        role: "Instructor of Violin",
        feedback: "The instructor of Violin is exceptional and very professional.",
        agency: "Music Academy",
        rating: 5,
    },
    {
        name: "Mr. Smith",
        role: "Instructor of Guitar",
        feedback: "Mr. Smith has a unique way of teaching that makes learning guitar fun.",
        agency: "Guitar Institute",
        rating: 5,
    },
    {
        name: "Sarfaraz",
        role: "Instructor of Piano",
        feedback: "Sarfaraz is very knowledgeable and has a lot of patience with his students.",
        agency: "Piano Academy",
        rating: 5,
    },
    {
        name: "Daniel",
        role: "Instructor of Cello",
        feedback: "Daniel is a brilliant instructor who makes learning cello easy.",
        agency: "Cello School",
        rating: 5,
    },
    {
        name: "William Edward",
        role: "Instructor of Trumpet",
        feedback: "William Edward is a highly skilled instructor with a lot of experience.",
        agency: "Trumpet Studio",
        rating: 5,
    },
    {
        name: "George Benjamin",
        role: "Instructor of Bouzouki",
        feedback: "George Benjamin is an excellent instructor with a deep understanding of Bouzouki.",
        agency: "Bouzouki Academy",
        rating: 5,
    },
];

const Testimonial: React.FC = () => {
    return (
        <div className="gradient-background2 overflow-hidden py-20" id="testimonial">
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper w-[80%] mx-auto"
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index} className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-orange-500 flex flex-col justify-center items-center text-center">
                        <div className="mb-4 mt-20">
                            <h2 className="text-2xl font-bold text-amber-600 italic">{testimonial.name}</h2>
                            <p className="text-base font-medium text-red-700">{testimonial.role}</p>
                            <p className="text-sm text-red-500">{testimonial.agency}</p>
                        </div>
                        <p className="text-base italic text-gray-800 mb-4">"{testimonial.feedback}"</p>
                        <div className="flex justify-center items-center">
                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                                <span key={i} className="text-orange-400">&#9733;</span>
                            ))}
                            {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                                <span key={i} className="text-gray-300">&#9733;</span>
                            ))}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Testimonial;
