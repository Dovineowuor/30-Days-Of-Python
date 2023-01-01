import { FunctionComponent, useCallback, useEffect } from "react";
import styles from "./Learntinoui.module.css";

const Learntinoui: FunctionComponent = () => {
  const onContactMeClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='contactSection']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onWorkClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='worksContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className={styles.learntinoui}>
      <div className={styles.body}>
        <div className={styles.body}>
          <div className={styles.navBarParent}>
            <div className={styles.navBar}>
              <nav className={styles.navBackGround} id="nav" />
              <button className={styles.resume} autoFocus>
                <img className={styles.vectorIcon} alt="" src="../vector.svg" />
                <b className={styles.work}>Resume</b>
              </button>
              <button className={styles.aboutMe} autoFocus>
                <b className={styles.aboutMe1}>About Me</b>
                <div className={styles.aboutMeChild} />
              </button>
              <button
                className={styles.contactMe}
                autoFocus
                onClick={onContactMeClick}
              >
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="../vector1.svg"
                />
                <b className={styles.contactMe1}> Contact Me!</b>
              </button>
              <button className={styles.logo} autoFocus>
                <div className={styles.backItem} />
                <b className={styles.learntino}>Learntino</b>
              </button>
              <button
                className={styles.work1}
                autoFocus
                onClick={onWorkClick}
                data-animate-on-scroll
              >
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="../vector2.svg"
                />
                <b className={styles.work2}>Work</b>
              </button>
            </div>
            <div className={styles.heroBannerParent}>
              <div className={styles.heroBanner}>
                <img
                  className={styles.heroBannerChild}
                  alt=""
                  src="../rectangle-1@2x.png"
                />
                <div className={styles.heroBannerItem} />
                <div className={styles.subTitle}>
                  <div className={styles.coolSubtitle} />
                  <b className={styles.softwareEngineer}>Software Engineer</b>
                </div>
              </div>
              <div className={styles.parts}>
                <section className={styles.about} id="about">
                  <img
                    className={styles.vectorIcon3}
                    alt=""
                    src="../vector3.svg"
                  />
                  <div className={styles.aboutMeSectionText} />
                  <div className={styles.aboutme}>
                    <b className={styles.about1}>About</b>
                    <b className={styles.me}>Me</b>
                  </div>
                  <p className={styles.loremIpsumDolorSitAmetCon} id="about">
                    <p className={styles.loremIpsumDolor}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maxime mollitia,
                    </p>
                    <p className={styles.loremIpsumDolor}>
                      molestiae quas vel sint commodi repudiandae consequuntur
                      voluptatum laborum
                    </p>
                    <p className={styles.loremIpsumDolor}>
                      numquam blanditiis harum quisquam eius sed odit fugiat
                      iusto fuga praesentium
                    </p>
                    <p className={styles.loremIpsumDolor}>
                      optio, eaque rerum! Provident similique accusantium nemo
                      autem. Veritatis
                    </p>
                    <p className={styles.loremIpsumDolor}>
                      obcaecati tenetur iure eius earum ut molestias architecto
                      voluptate aliquam
                    </p>
                    <p className={styles.loremIpsumDolor}>
                      nihil, eveniet aliquid culpa officia aut!Lorem ipsum dolor
                      sit amet consectetur adipisicing elit. Maxime mollitia,
                    </p>
                    <p className={styles.loremIpsumDolor}>
                      molestiae quas vel sint commodi repudiandae consequuntur
                      voluptatum laborum
                    </p>
                    <p className={styles.loremIpsumDolor}>
                      numquam blanditiis harum quisquam eius sed odit fugiat
                      iusto fuga praesentium
                    </p>
                    <p className={styles.loremIpsumDolor}>
                      optio, eaque rerum! Provident similique accusantium nemo
                      autem. Veritatis
                    </p>
                    <p className={styles.loremIpsumDolor}>
                      obcaecati tenetur iure eius earum ut molestias architecto
                      voluptate aliquam
                    </p>
                    <p className={styles.nihilEvenietAliquid1}>
                      nihil, eveniet aliquid culpa officia aut!
                    </p>
                  </p>
                </section>
                <div className={styles.works}>
                  <div
                    className={styles.works1}
                    data-scroll-to="worksContainer"
                  >
                    <b className={styles.work3}>Work</b>
                    <img
                      className={styles.vectorIcon4}
                      alt=""
                      src="../vector4.svg"
                    />
                  </div>
                  <div className={styles.works2}>
                    <div className={styles.project1Parent}>
                      <a
                        className={styles.project1}
                        href="https://surfreports.com"
                      >
                        <img
                          className={styles.project1Icon}
                          alt="Surfer"
                          src="../project1@2x.png"
                        />
                        <button className={styles.surf} autoFocus />
                        <div className={styles.mernStack}>MERN Stack</div>
                        <b className={styles.surfReport}>Surf Report</b>
                        <div className={styles.firstWork} />
                      </a>
                      <div className={styles.project2Parent}>
                        <a
                          className={styles.project2}
                          href="https://ledwall.com"
                        >
                          <div className={styles.secondWork} />
                          <img
                            className={styles.project2Icon}
                            alt="Led WAll"
                            src="../project2@2x.png"
                          />
                        </a>
                        <a
                          className={styles.project3}
                          href="https://calculator.com"
                        >
                          <div className={styles.secondWork1} />
                          <img
                            className={styles.project2Icon1}
                            alt="calculator"
                            src="../project21@2x.png"
                          />
                          <button className={styles.surf1} />
                          <div className={styles.reactjavascriptcss}>
                            React/<span>JavaScript</span>/CSS
                          </div>
                          <b className={styles.calculator}>Calculator</b>
                        </a>
                      </div>
                      <div className={styles.frameWrapper}>
                        <div className={styles.pastelPazzleParent}>
                          <img
                            className={styles.pastelPazzleIcon}
                            alt="puzzle"
                            src="../pastelpazzle@2x.png"
                          />
                          <a
                            className={styles.project5}
                            href="https://runbuddy.com"
                            target="_blank"
                          >
                            <div className={styles.secondWork2} />
                            <img
                              className={styles.project2Icon2}
                              alt="run buddy"
                              src="../project22@2x.png"
                            />
                            <button className={styles.surf2} autoFocus />
                            <div className={styles.htmlcss}>HTML/CSS</div>
                            <b className={styles.runBuddy}>Run Buddy</b>
                          </a>
                        </div>
                      </div>
                    </div>
                    <button className={styles.pastelPuzzle} autoFocus />
                    <div className={styles.mernStack1}>MERN Stack</div>
                    <b className={styles.pastelPuzzle1}>Pastel Puzzle</b>
                  </div>
                </div>
                <footer
                  className={styles.contactSection}
                  id="contact"
                  data-scroll-to="contactSection"
                >
                  <b className={styles.contact}>Contact</b>
                  <div className={styles.contacts} />
                  <img
                    className={styles.vectorIcon5}
                    alt=""
                    src="../vector5.svg"
                  />
                  <div className={styles.phoneParent}>
                    <a
                      className={styles.phone}
                      href="tel:222-222-2222"
                      data-animate-on-scroll
                    >
                      <div className={styles.phone1}>222-222-2222</div>
                      <img
                        className={styles.vectorIcon6}
                        alt=""
                        src="../vector6.svg"
                      />
                    </a>
                    <a className={styles.email} href="mailto:user@domain.com">
                      <img
                        className={styles.vectorIcon7}
                        alt=""
                        src="../vector7.svg"
                      />
                      <div className={styles.email1}>user@domain.com</div>
                    </a>
                    <a className={styles.github} href="https://github/">
                      <img
                        className={styles.vectorIcon8}
                        alt=""
                        src="../vector8.svg"
                      />
                      <div className={styles.github1}>Github</div>
                    </a>
                    <a className={styles.twitter} href="https://twitter.com/">
                      <div className={styles.github1}>Twitter</div>
                      <img
                        className={styles.vectorIcon9}
                        alt=""
                        src="../vector9.svg"
                      />
                    </a>
                    <a className={styles.spotify} href="https://spotify.com">
                      <div className={styles.spotify1}>Spotify</div>
                      <img
                        className={styles.vectorIcon10}
                        alt=""
                        src="../vector10.svg"
                      />
                    </a>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.ledWall} autoFocus />
      <div className={styles.nodeiot}>Node/IoT</div>
      <b className={styles.ledWall1}>Led Wall</b>
    </div>
  );
};

export default Learntinoui;
