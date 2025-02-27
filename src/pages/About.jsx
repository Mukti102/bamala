import React from "react";

function About() {
  return (
    <div className="sm:px-16 px-3">
      <div className="grid md:grid-cols-2 gap-4 grid-cols-1 ">
        <div>
          <img
            src="https://i.pinimg.com/736x/53/cb/79/53cb799aa5b30efacba6bb053cb68c9e.jpg"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold">About Us</h1>
          <p className="md:mt-5 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            accusamus, quas, quia autem, quod quibusdam quidem quae quos
            quiaquae accusamus, quas, quia autem, quod quibusdam quidem quae
            quos
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
