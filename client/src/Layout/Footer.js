
import React, { Component } from "react"; 

class Footer extends Component {

    render() {

        return (
            <div class="footer py-4 d-flex flex-lg-column" id="kt_footer">
		        <div class="container-fluid d-flex flex-column flex-md-row flex-stack">
			        <div class="text-dark order-2 order-md-1">
				        <span class="text-muted fw-bold me-2">2022©</span>
				        <a href="#" target="_blank" class="text-gray-800 text-hover-primary">Learn2Earn</a>
			        </div>
			        <ul class="menu menu-gray-600 menu-hover-primary fw-bold order-1">
				        <li class="menu-item">
					        <a href="#" target="_blank" class="menu-link px-2">About</a>
				        </li>
				        <li class="menu-item">
					        <a href="#" target="_blank" class="menu-link px-2">Support</a>
				        </li>
				        <li class="menu-item">
					        <a href="#" target="_blank" class="menu-link px-2">Purchase</a>
				        </li>
			        </ul>
		        </div>
	        </div>

)

    }

}

export default Footer;


