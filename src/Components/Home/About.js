import React, { Component } from 'react'
import '../../Style/Home/About.css'
export default class About extends Component {
  render() {
    return (
      <div id="About">
        <section class="about_area lite_bg">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-12">
                <div class="about_details lite_bg">
                  <h2>
                    Welcome to{" "}
                    <span>
                      CARE<strong>BLOCKS</strong>
                    </span>
                  </h2>
                  <h4>
                    CareBlocks is a decentralized application based on a
                    distributed peer-to-peer (P2P) network (blockchain). We
                    are taking a data-centric perspective as data is at the
                    heart of digital healthcare , specifically data access &
                    storage, security and trust. With better access to
                    patient data, medical errors and costs can be reduced,
                    and patient safety and outcomes can be improved.
                  </h4>
                </div>
              </div>
            </div>
            <div class="about_bg overlay" />
          </div>
        </section>
      </div>
    );
  }
}
