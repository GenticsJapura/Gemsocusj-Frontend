import React from "react";

import member1 from "./img/member1.jpg";
import member2 from "./img/member2.jpg";

export default function CommetteMember() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12 text-center">
          <h3>COMMITTEE MEMBERS</h3>
          <hr className="HrBreaker" />
        </div>

        {/* Column One Start */}
        <div className="col-md-4 AboutUsComponent">
          <div class="card membersCard">
            <img
              src={member1}
              class="card-img-top"
              alt="memeber1"
              style={{ borderRadius: "20px" }}
            />
            <div class="card-body text-center">
              <p class="card-text memberrole">President</p>
              <p class="card-text">Senura Jayadeva</p>
            </div>
          </div>
        </div>
        {/* Column One End */}
        {/* Column One Start */}
        <div className="col-md-4 AboutUsComponent">
          <div class="card membersCard">
            <img
              src={member1}
              class="card-img-top"
              alt="memeber1"
              style={{ borderRadius: "20px" }}
            />
            <div class="card-body text-center">
              <p class="card-text memberrole">President</p>
              <p class="card-text">Senura Jayadeva</p>
            </div>
          </div>
        </div>
        {/* Column One End */}
        {/* Column One Start */}
        <div className="col-md-4 AboutUsComponent">
          <div class="card membersCard">
            <img
              src={member1}
              class="card-img-top"
              alt="memeber1"
              style={{ borderRadius: "20px" }}
            />
            <div class="card-body text-center">
              <p class="card-text memberrole">President</p>
              <p class="card-text">Senura Jayadeva</p>
            </div>
          </div>
        </div>
        {/* Column One End */}
      </div>
    </div>
  );
}
