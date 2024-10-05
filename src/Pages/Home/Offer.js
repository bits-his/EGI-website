import React from "react";
import { GrCertificate } from "react-icons/gr";
import { IoMdCheckmark, IoMdTime } from "react-icons/io";
import { LiaUserGraduateSolid } from "react-icons/lia";
import { LuShieldCheck } from "react-icons/lu";
import { SiSololearn, SiTicktick } from "react-icons/si";
import { VscGitPullRequestCreate } from "react-icons/vsc";

export default function Offer() {
  return (
    <>
      <div className="p-3">
        <h2 className="container-heading">About Us</h2>
        <div className="row">
          <div className="col-md-12 ps-5 pt-3">
            <div className="offer">
              <h3>What we Offer</h3>
              <p>
                On her way she met a copy. The copy warned the Little Blind
                Text, that where it came from it would have been rewritten a
                thousand times and everything that was left from its origin
                would be the word.
              </p>
            </div>
            <div className="row">
              <div className="col-md-6 offer-icon-section">
                <div className="offer-icon">
                  <LuShieldCheck />
                </div>
                <div className="offer-icon-desc">
                  <h2>Safety First</h2>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia.
                  </p>
                </div>
              </div>
              <div className="col-md-6 offer-icon-section">
                <div className="offer-icon">
                  <IoMdTime />
                </div>
                <div className="offer-icon-desc">
                  <h2>Regular Classes</h2>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia.
                  </p>
                </div>
              </div>
              <div className="col-md-6 offer-icon-section">
                <div className="offer-icon">
                  <GrCertificate />
                </div>
                <div className="offer-icon-desc">
                  <h2>Certified Teachers</h2>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia.
                  </p>
                </div>
              </div>
              <div className="col-md-6 offer-icon-section">
                <div className="offer-icon">
                  <VscGitPullRequestCreate />
                </div>
                <div className="offer-icon-desc">
                  <h2>Creative Lessons</h2>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-5 offer-side">
            <h2>welcome</h2>
            <p>jsjsjshjsjauwhjehsu</p>
          </div> */}
        </div>
      </div>
    </>
  );
}
