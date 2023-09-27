import React, { useState } from "react";
import "./Scroll.css";
import { Waypoint } from "react-waypoint";
import { useSpring, animated } from "react-spring";

export default function Scroll() {
  const [toggleTxt, settoggleTxt] = useState(false);

  const animation = useSpring({
    opacity: toggleTxt ? 1 : 0,
    transform: toggleTxt ? "translateX(0)" : "translateX(-50%)",
  });

  return (
    <div>
      <p className="scroll-txt">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non quod hic
        praesentium voluptatum fuga, minus maiores quas omnis eius vitae
        voluptates, quisquam quia obcaecati eaque explicabo veniam, iure amet
        molestias nisi sed quis ratione? Velit nostrum quis esse impedit placeat
        iure voluptatum, adipisci perspiciatis maiores illo tenetur ducimus
        necessitatibus, repudiandae ratione! Facilis dolorem temporibus
        consectetur atque libero tempore, iure delectus molestiae similique
        quibusdam officia fuga aspernatur molestias quas cupiditate ullam.
        Commodi eaque cum, necessitatibus asperiores beatae soluta nobis quae
        neque delectus sit in ipsum. Sunt aperiam quia eveniet, accusantium,
        sapiente nesciunt cupiditate nam consectetur culpa hic aut
        necessitatibus commodi non reiciendis mollitia at accusamus modi quos
        corrupti delectus provident repudiandae omnis eos quaerat. Accusamus quo
        iure labore voluptas unde possimus excepturi tempora tenetur est
        mollitia quaerat sint nisi officia, beatae illo dolorem. Iusto fugit
        itaque similique, cum, suscipit explicabo in doloribus atque vero velit
        a repellat impedit iste corporis quam! Amet libero adipisci corrupti
        quidem maiores voluptate odit culpa quam iure. Sapiente voluptatem nam
        velit ullam ipsam optio sed mollitia tempore nesciunt eum laboriosam,
        dolor modi? Quisquam quia saepe, natus facilis accusantium et corrupti
        itaque aliquid est quam quos quod aut dignissimos consequatur pariatur
        qui amet, minus nihil! Quam, tenetur!
      </p>
      <p className="scroll-txt">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non quod hic
        praesentium voluptatum fuga, minus maiores quas omnis eius vitae
        voluptates, quisquam quia obcaecati eaque explicabo veniam, iure amet
        molestias nisi sed quis ratione? Velit nostrum quis esse impedit placeat
        iure voluptatum, adipisci perspiciatis maiores illo tenetur ducimus
        necessitatibus, repudiandae ratione! Facilis dolorem temporibus
        consectetur atque libero tempore, iure delectus molestiae similique
        quibusdam officia fuga aspernatur molestias quas cupiditate ullam.
        Commodi eaque cum, necessitatibus asperiores beatae soluta nobis quae
        neque delectus sit in ipsum. Sunt aperiam quia eveniet, accusantium,
        sapiente nesciunt cupiditate nam consectetur culpa hic aut
        necessitatibus commodi non reiciendis mollitia at accusamus modi quos
        corrupti delectus provident repudiandae omnis eos quaerat. Accusamus quo
        iure labore voluptas unde possimus excepturi tempora tenetur est
        mollitia quaerat sint nisi officia, beatae illo dolorem. Iusto fugit
        itaque similique, cum, suscipit explicabo in doloribus atque vero velit
        a repellat impedit iste corporis quam! Amet libero adipisci corrupti
        quidem maiores voluptate odit culpa quam iure. Sapiente voluptatem nam
        velit ullam ipsam optio sed mollitia tempore nesciunt eum laboriosam,
        dolor modi? Quisquam quia saepe, natus facilis accusantium et corrupti
        itaque aliquid est quam quos quod aut dignissimos consequatur pariatur
        qui amet, minus nihil! Quam, tenetur!
      </p>
      <Waypoint
        bottomOffset="30%"
        onEnter={() => {
          if (!toggleTxt) {
            settoggleTxt(true);
          }
        }}
      />
      <animated.div style={animation} className="cta-section">
        <h2>N'en ratez pas une miette ! </h2>
        <form action="">
          <label htmlFor="email">Inscrivez-vous à la newsletter</label>
          <input type="email" id="email" />
        </form>
      </animated.div>
      <p className="scroll-txt">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non quod hic
        praesentium voluptatum fuga, minus maiores quas omnis eius vitae
        voluptates, quisquam quia obcaecati eaque explicabo veniam, iure amet
        molestias nisi sed quis ratione? Velit nostrum quis esse impedit placeat
        iure voluptatum, adipisci perspiciatis maiores illo tenetur ducimus
        necessitatibus, repudiandae ratione! Facilis dolorem temporibus
        consectetur atque libero tempore, iure delectus molestiae similique
        quibusdam officia fuga aspernatur molestias quas cupiditate ullam.
        Commodi eaque cum, necessitatibus asperiores beatae soluta nobis quae
        neque delectus sit in ipsum. Sunt aperiam quia eveniet, accusantium,
        sapiente nesciunt cupiditate nam consectetur culpa hic aut
        necessitatibus commodi non reiciendis mollitia at accusamus modi quos
        corrupti delectus provident repudiandae omnis eos quaerat. Accusamus quo
        iure labore voluptas unde possimus excepturi tempora tenetur est
        mollitia quaerat sint nisi officia, beatae illo dolorem. Iusto fugit
        itaque similique, cum, suscipit explicabo in doloribus atque vero velit
        a repellat impedit iste corporis quam! Amet libero adipisci corrupti
        quidem maiores voluptate odit culpa quam iure. Sapiente voluptatem nam
        velit ullam ipsam optio sed mollitia tempore nesciunt eum laboriosam,
        dolor modi? Quisquam quia saepe, natus facilis accusantium et corrupti
        itaque aliquid est quam quos quod aut dignissimos consequatur pariatur
        qui amet, minus nihil! Quam, tenetur!
      </p>
      <p className="scroll-txt">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non quod hic
        praesentium voluptatum fuga, minus maiores quas omnis eius vitae
        voluptates, quisquam quia obcaecati eaque explicabo veniam, iure amet
        molestias nisi sed quis ratione? Velit nostrum quis esse impedit placeat
        iure voluptatum, adipisci perspiciatis maiores illo tenetur ducimus
        necessitatibus, repudiandae ratione! Facilis dolorem temporibus
        consectetur atque libero tempore, iure delectus molestiae similique
        quibusdam officia fuga aspernatur molestias quas cupiditate ullam.
        Commodi eaque cum, necessitatibus asperiores beatae soluta nobis quae
        neque delectus sit in ipsum. Sunt aperiam quia eveniet, accusantium,
        sapiente nesciunt cupiditate nam consectetur culpa hic aut
        necessitatibus commodi non reiciendis mollitia at accusamus modi quos
        corrupti delectus provident repudiandae omnis eos quaerat. Accusamus quo
        iure labore voluptas unde possimus excepturi tempora tenetur est
        mollitia quaerat sint nisi officia, beatae illo dolorem. Iusto fugit
        itaque similique, cum, suscipit explicabo in doloribus atque vero velit
        a repellat impedit iste corporis quam! Amet libero adipisci corrupti
        quidem maiores voluptate odit culpa quam iure. Sapiente voluptatem nam
        velit ullam ipsam optio sed mollitia tempore nesciunt eum laboriosam,
        dolor modi? Quisquam quia saepe, natus facilis accusantium et corrupti
        itaque aliquid est quam quos quod aut dignissimos consequatur pariatur
        qui amet, minus nihil! Quam, tenetur!
      </p>
      <p className="scroll-txt">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non quod hic
        praesentium voluptatum fuga, minus maiores quas omnis eius vitae
        voluptates, quisquam quia obcaecati eaque explicabo veniam, iure amet
        molestias nisi sed quis ratione? Velit nostrum quis esse impedit placeat
        iure voluptatum, adipisci perspiciatis maiores illo tenetur ducimus
        necessitatibus, repudiandae ratione! Facilis dolorem temporibus
        consectetur atque libero tempore, iure delectus molestiae similique
        quibusdam officia fuga aspernatur molestias quas cupiditate ullam.
        Commodi eaque cum, necessitatibus asperiores beatae soluta nobis quae
        neque delectus sit in ipsum. Sunt aperiam quia eveniet, accusantium,
        sapiente nesciunt cupiditate nam consectetur culpa hic aut
        necessitatibus commodi non reiciendis mollitia at accusamus modi quos
        corrupti delectus provident repudiandae omnis eos quaerat. Accusamus quo
        iure labore voluptas unde possimus excepturi tempora tenetur est
        mollitia quaerat sint nisi officia, beatae illo dolorem. Iusto fugit
        itaque similique, cum, suscipit explicabo in doloribus atque vero velit
        a repellat impedit iste corporis quam! Amet libero adipisci corrupti
        quidem maiores voluptate odit culpa quam iure. Sapiente voluptatem nam
        velit ullam ipsam optio sed mollitia tempore nesciunt eum laboriosam,
        dolor modi? Quisquam quia saepe, natus facilis accusantium et corrupti
        itaque aliquid est quam quos quod aut dignissimos consequatur pariatur
        qui amet, minus nihil! Quam, tenetur!
      </p>
      <p className="scroll-txt">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non quod hic
        praesentium voluptatum fuga, minus maiores quas omnis eius vitae
        voluptates, quisquam quia obcaecati eaque explicabo veniam, iure amet
        molestias nisi sed quis ratione? Velit nostrum quis esse impedit placeat
        iure voluptatum, adipisci perspiciatis maiores illo tenetur ducimus
        necessitatibus, repudiandae ratione! Facilis dolorem temporibus
        consectetur atque libero tempore, iure delectus molestiae similique
        quibusdam officia fuga aspernatur molestias quas cupiditate ullam.
        Commodi eaque cum, necessitatibus asperiores beatae soluta nobis quae
        neque delectus sit in ipsum. Sunt aperiam quia eveniet, accusantium,
        sapiente nesciunt cupiditate nam consectetur culpa hic aut
        necessitatibus commodi non reiciendis mollitia at accusamus modi quos
        corrupti delectus provident repudiandae omnis eos quaerat. Accusamus quo
        iure labore voluptas unde possimus excepturi tempora tenetur est
        mollitia quaerat sint nisi officia, beatae illo dolorem. Iusto fugit
        itaque similique, cum, suscipit explicabo in doloribus atque vero velit
        a repellat impedit iste corporis quam! Amet libero adipisci corrupti
        quidem maiores voluptate odit culpa quam iure. Sapiente voluptatem nam
        velit ullam ipsam optio sed mollitia tempore nesciunt eum laboriosam,
        dolor modi? Quisquam quia saepe, natus facilis accusantium et corrupti
        itaque aliquid est quam quos quod aut dignissimos consequatur pariatur
        qui amet, minus nihil! Quam, tenetur!
      </p>
      <p className="scroll-txt">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non quod hic
        praesentium voluptatum fuga, minus maiores quas omnis eius vitae
        voluptates, quisquam quia obcaecati eaque explicabo veniam, iure amet
        molestias nisi sed quis ratione? Velit nostrum quis esse impedit placeat
        iure voluptatum, adipisci perspiciatis maiores illo tenetur ducimus
        necessitatibus, repudiandae ratione! Facilis dolorem temporibus
        consectetur atque libero tempore, iure delectus molestiae similique
        quibusdam officia fuga aspernatur molestias quas cupiditate ullam.
        Commodi eaque cum, necessitatibus asperiores beatae soluta nobis quae
        neque delectus sit in ipsum. Sunt aperiam quia eveniet, accusantium,
        sapiente nesciunt cupiditate nam consectetur culpa hic aut
        necessitatibus commodi non reiciendis mollitia at accusamus modi quos
        corrupti delectus provident repudiandae omnis eos quaerat. Accusamus quo
        iure labore voluptas unde possimus excepturi tempora tenetur est
        mollitia quaerat sint nisi officia, beatae illo dolorem. Iusto fugit
        itaque similique, cum, suscipit explicabo in doloribus atque vero velit
        a repellat impedit iste corporis quam! Amet libero adipisci corrupti
        quidem maiores voluptate odit culpa quam iure. Sapiente voluptatem nam
        velit ullam ipsam optio sed mollitia tempore nesciunt eum laboriosam,
        dolor modi? Quisquam quia saepe, natus facilis accusantium et corrupti
        itaque aliquid est quam quos quod aut dignissimos consequatur pariatur
        qui amet, minus nihil! Quam, tenetur!
      </p>
    </div>
  );
}
