
export default function HomePage() {
  return (
    <main className="bg-white text-gray-800 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-green-500 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">IntelliBash WellBeing Ltd.</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Empowering underserved communities in India through education, clothing, health awareness, and yoga.
        </p>
        <button className="mt-6 bg-white text-teal-600 px-6 py-3 rounded-2xl shadow-md font-semibold hover:bg-gray-100">
          Donate Now
        </button>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg">
          To uplift lives in India by providing access to education, basic essentials, health education, and holistic wellness through yoga. We believe in thoughtful giving and sustainable impact.
        </p>
      </section>

      {/* Programs Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProgramCard title="Clothing Drives" icon="🧥" description="Distributing gently used clothing and essentials to families in need." />
            <ProgramCard title="Education Support" icon="📚" description="Providing school supplies, tutoring, and scholarships for underserved youth." />
            <ProgramCard title="Health Awareness" icon="🩺" description="Organizing hygiene workshops, menstrual education, and mobile health camps." />
            <ProgramCard title="Yoga & Wellness" icon="🧘" description="Promoting mental and physical well-being through yoga sessions and stress management." />
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Real Stories, Real Impact</h2>
        <p className="text-lg">
          From rural schools in Bihar to slum communities in Delhi, your support helps us reach thousands. Together, we create brighter, healthier futures.
        </p>
      </section>

      {/* Call to Action */}
      <section className="bg-teal-600 text-white py-12 text-center">
        <h3 className="text-2xl font-bold mb-4">Be a part of the IntelliBash mission</h3>
        <button className="bg-white text-teal-700 px-8 py-3 rounded-2xl font-semibold shadow hover:bg-gray-100">
          Get Involved
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} IntelliBash WellBeing Ltd. All rights reserved.</p>
      </footer>
    </main>
  );
}

function ProgramCard({ title, icon, description }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
