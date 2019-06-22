import React, { Component } from 'react'
import logo1 from '../../img/department/d-icon1.png'; // Tell Webpack this JS file uses this image
import logo2 from '../../img/department/d-icon2.png'; // Tell Webpack this JS file uses this image
import logo3 from '../../img/department/d-icon3.png'; // Tell Webpack this JS file uses this image
import logo4 from '../../img/department/d-icon4.png'; // Tell Webpack this JS file uses this image
import logo5 from '../../img/department/d-icon5.png'; // Tell Webpack this JS file uses this image
import logo6 from '../../img/department/lung.png'; // Tell Webpack this JS file uses this image

export default class Orgnizatons extends Component {
  render() {
    return (
      <div className="dep" id="Departments">
        <section class="department_area section_gap">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-7">
					<div class="main_title">
						<h2><span>CARE<strong>BLOCKS</strong></span> Popular Departments</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
							magna aliqua.</p>
					</div>
				</div>
			</div>

			<div class="row">
					<div class="col-lg-2 text-center col-sm-6">
					<div class="single_department">
						<div class="dpmt-thumb" id="b">
							<img src={logo1} alt=""/>
						</div>
						<h4>Cardiology</h4>
					</div>
				</div>
				
				<div class="col-lg-2 text-center col-sm-6">
					<div class="single_department">
						<div class="dpmt-thumb">
							<img src={logo2} alt=""/>
						</div>
						<h4>Urology</h4>
					</div>
				</div>
			
				<div class="col-lg-2 text-center col-sm-6">
					<div class="single_department">
						<div class="dpmt-thumb">
							<img src={logo3} alt="dsf"/>
						</div>
						<h4>Dental Care</h4>
					</div>
				</div>

				<div class="col-lg-2 text-center col-sm-6">
					<div class="single_department">
						<div class="dpmt-thumb">
							<img src={logo4} alt=""/>
						</div>
						<h4>Eye Care</h4>
					</div>
				</div>
				
				<div class="col-lg-2 text-center col-sm-6">
					<div class="single_department">
						<div class="dpmt-thumb">
							<img src={logo5} alt=""/>
						</div>
						<h4>Neurology</h4>
					</div>
				</div>
				
				<div class="col-lg-2 text-center col-sm-6">
					<div class="single_department">
						<div class="dpmt-thumb">
							<img src={logo6} alt=""/>
						</div>
						<h4>Pulmonology</h4>
					</div>
				</div>

			</div>
		</div>
	</section>
	
      </div>
    )
  }
}
