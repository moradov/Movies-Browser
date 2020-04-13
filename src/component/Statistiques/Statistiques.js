import React from "react";
import Statistique from "./stat/stat";
const Stat = () => {
  const stats = [
    {
      name: "Job Posts",
      number: "+1000",
      icon: "fa fa-briefcase"
    },
    {
      name: "All Companies",
      number: "+207",
      icon: "fa fa-building"
    },
    {
      name: "Total Members",
      number: "+700",
      icon: "fa fa-users"
    },
    {
      name: "Happy Members",
      number: "+800",
      icon: "fa fa-smile-o"
    }
  ];
  return (
    <section class='counter'>
      <div class='container'>
        {stats.map(st => (
          <Statistique
            key={st.name}
            icon={st.icon}
            name={st.name}
            number={st.number}
          />
        ))}
      </div>
    </section>
  );
};
export default Stat;
