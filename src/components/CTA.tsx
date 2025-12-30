const CTA: React.FC = () => {
  return (
    <section id="cta" className="mt-10 mb-5 lg:my-20">
      <div className="relative h-full w-full z-10 mx-auto py-12 sm:py-20">
        <div className="h-full w-full">
          {/* Background */}
          <div className="rounded-3xl opacity-95 absolute inset-0 -z-10 h-full w-full bg-[#050a02] bg-[linear-gradient(to_right,#12170f_1px,transparent_1px),linear-gradient(to_bottom,#12170f_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <div className="rounded-3xl absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_50%_500px,#1C1C02,transparent)]"></div>
          </div>

          {/* Content */}
          <div className="h-full flex flex-col items-center justify-center text-white text-center px-5">
            <h2 className="text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-4 max-w-2xl">
              Let’s Build Something Meaningful
            </h2>

            <p className="mx-auto max-w-xl md:px-5 text-gray-300">
              This landing page project demonstrates my ability to design,
              develop, and deploy modern web applications using Next.js as part
              of an internship assignment.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center sm:gap-4">
              <a
                href="#"
                className="px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition"
              >
                View Project
              </a>

              <a
                href="https://github.com/ashettigar01/landing-page-assignment"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg border border-white text-white font-medium hover:bg-white hover:text-black transition"
              >
                View Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
