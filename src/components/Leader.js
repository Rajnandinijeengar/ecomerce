import React from "react";

const Leader = () => {
  const teamMembers = [
    {
      name: "Thomas Alison",
      role: "Shop Manager",
      img: "assets/img/team/team-1.jpg",
    },
    {
      name: "Emily Sophia",
      role: "Shop Manager",
      img: "assets/img/team/team-2.jpg",
    },
    {
      name: "Thomas Alison",
      role: "Shop Manager",
      img: "assets/img/team/team-3.jpg",
    },
    {
      name: "Lucy Victoria",
      role: "Shop Manager",
      img: "assets/img/team/team-4.jpg",
    },
  ];

  return (
    <section className="mtteam__area pt-70 pb-90 p-relative">
      <div className="container">
        {/* Section Title */}
        <div className="mt-section-content text-center mb-50">
          <h3 className="mt-section-title">
            <span>★</span> Meet our <span>Expert Team</span> <span>★</span>
          </h3>
          <p>
            Our dedicated team at FreshMart is here to make your shopping <br />
            experience exceptional. Each member brings expertise.
          </p>
        </div>

        {/* Team Members Row */}
        <div className="row">
          {teamMembers.map((member, index) => (
            <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
              <div className="mtteam__wrapper p-relative fix mb-30">
                <div className="mtteam__item mtteam__border br-12 text-center">
                  <img src={member.img} alt={member.name} className="mb-15" />
                  <div className="mtteam__content">
                    <h3 className="mtteam__title">
                      <a href="team-details.html">{member.name}</a>
                    </h3>
                  </div>
                  <div className="mtteam__info text-center">
                    <h5 className="mtteam__member-name">
                      <a href="team-details.html">{member.name}</a>
                    </h5>
                    <span className="mtteam__member-regi">{member.role}</span>
                    <div className="mtteam__member-social mt-30">
                      <a href="a"><i className="fa-brands fa-pinterest" /></a>
                      <a href="b"><i className="fa-brands fa-instagram" /></a>
                      <a href="c"><i className="fa-brands fa-facebook-f" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leader;
