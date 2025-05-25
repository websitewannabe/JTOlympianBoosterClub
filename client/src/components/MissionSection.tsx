const MissionSection = () => {
  return (
    <section id="mission" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl text-primary mb-2">OUR MISSION</h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <p className="text-xl mb-8 text-center">
            The Olympian Booster Club exists to support and enhance the athletic experience for all Olympian High School student-athletes through fundraising, volunteerism, and community engagement.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-lightgray p-6 rounded-lg text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-hand-holding-heart text-2xl"></i>
              </div>
              <h3 className="font-montserrat font-bold text-xl mb-3 text-primary">SUPPORT</h3>
              <p>Provide financial and volunteer support to all athletic programs at Olympian High School.</p>
            </div>
            
            <div className="bg-lightgray p-6 rounded-lg text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-trophy text-2xl"></i>
              </div>
              <h3 className="font-montserrat font-bold text-xl mb-3 text-primary">RECOGNIZE</h3>
              <p>Recognize and celebrate the achievements and contributions of our student-athletes.</p>
            </div>
            
            <div className="bg-lightgray p-6 rounded-lg text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users text-2xl"></i>
              </div>
              <h3 className="font-montserrat font-bold text-xl mb-3 text-primary">UNITE</h3>
              <p>Build a strong sense of community and school spirit among students, parents, and alumni.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
