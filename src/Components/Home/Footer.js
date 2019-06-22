import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div class="footer-bottom">
			<div class="container">
				<div class="d-flex justify-content-between align-items-center flex-wrap">
					<p class="footer-text">
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart-o" ></i> by <a href="#" target="_blank">CAREBLOCKS</a></p>
					<div class="footer-social d-flex align-items-center">
						<a href="/"><i class="fab fa-facebook-f"></i></a>
						<a href="#"><i class="fab fa-twitter"></i></a>
						<a href="#"><i class="fab fa-linkedin-in"></i></a>
					</div>
				</div>
			</div>
		</div>

      </div>
    )
  }
}
