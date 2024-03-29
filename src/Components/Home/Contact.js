import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <section class="contact_area section_gap" id="Contact">
          <h2>Contact us</h2>
          <div class="container">
            <div class="row">
              <div class="col-lg-3">
                <div class="contact_info">
                  <div class="info_item">
                    <i class="lnr lnr-home" />
                    <h6>Ismailia ,Egypt</h6>
                  </div>
                  <div class="info_item">
                    <i class="lnr lnr-phone-handset" />
                    <h6>
                      <a href="#">00 (440) 9865 562</a>
                    </h6>
                    <p>Mon to Fri 9am to 6 pm</p>
                  </div>
                  <div class="info_item">
                    <i class="lnr lnr-envelope" />
                    <h6>
                      <a href="#">support@colorlib.com</a>
                    </h6>
                    <p>Send us your query anytime!</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-9">
                <form
                  class="row contact_form"
                  action="contact_process.php"
                  method="post"
                  id="contactForm"
                  noValidate="noValidate"
                >
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        name="email"
                        placeholder="Enter email address"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="subject"
                        name="subject"
                        placeholder="Enter Subject"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <textarea
                        class="form-control"
                        name="message"
                        id="message"
                        rows="1"
                        placeholder="Enter Message"
                      />
                    </div>
                  </div>
                  <div class="col-md-12 text-right">
                    <button
                      type="submit"
                      value="submit"
                      class="primary-btn text-uppercase"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
