import React from "react";
import 'materialize-css/dist/css/materialize.min.css'

export const BreadCrumbCss = () => {

 	return(
    <div class="container">
			<div className="row pink">
				
				<a href="#!" class="breadcrumb center pink">  
					<button class="waves-effect waves-pink pink btn-flat text-white" type="button" name="action">price
						<i class="material-icons left">euro_symbol</i>
					</button>
				</a>
				<a href="#!" class="breadcrumb center pink">
					<button class="waves-effect waves-pink pink btn-flat text-white" type="button" name="action">Type of accommodation
						<i class="material-icons left">hotel</i>
					</button>
				</a>
				<a href="#!" class="breadcrumb center pink">
					<button class="waves-effect waves-pink pink btn-flat text-white" type="button" name="action">Free cancellation
						<i class="material-icons left">cancel</i>
					</button>
				</a>
				<a href="#!" class="breadcrumb center pink">
					<button class="waves-effect waves-pink pink btn-flat text-white" type="button" name="action">Reserve now
						<i class="material-icons left">insert_invitation</i>
					</button>
				</a>
			</div>
    </div>
  )
}