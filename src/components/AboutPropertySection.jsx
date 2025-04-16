import React from 'react'

const AboutPropertySection = () => {
    return (
        <section className="bg-black py-12 min-h-screen px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl sm:text-5xl text-center mb-16 text-white">
                    About the Property:
                </h1>

                <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
                    <div className="w-full lg:w-[475px] h-72 sm:h-96 rounded-lg overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4560.211018904414!2d78.32972857588763!3d17.422109783470976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb935148bbb97b%3A0xca457ec883d6b3cd!2sAltF%20Coworking%20-%20Hyderabad%2C%20Financial%20District!5e1!3m2!1sen!2sin!4v1738241549814!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    <ul className="text-white text-2xl sm:text-3xl lg:text-4xl flex flex-col gap-4">
                        <li>- 628 workstations</li>
                        <li>- 8 meeting rooms</li>
                        <li>- Podcast room</li>
                        <li>- Scandinavian aesthetics</li>
                        <li>- Ergonomic furniture</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default AboutPropertySection
