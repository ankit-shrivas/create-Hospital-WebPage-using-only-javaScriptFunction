//Js for header

function Header(headerContent, headerLink){
	var headerDom=document.querySelector("header");
		headerDom.style.backgroundColor="#23b5b9";
		headerDom.classList.add("p-1");
		headerDom.innerHTML+=`
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<div id="Mq">
						</div>
					</div>
					<div class="col-md-6 ">
						<div class="text-end" id="smLink">
						</div>
					</div>
				</div>
			</div>
		`;
	for(var i in headerContent){
		//console.log(headerContent[i]);
		if(i==0){
			Mq.innerHTML+=`<marquee><a href="${headerLink[i]}" class="text-light text-decoration-none"><b>${headerContent[i]}</b></a></marquee>`;
		}else{
			smLink.innerHTML+=`<a href="${headerLink[i]}" class="px-2 text-light"><i class="${headerContent[i]}"></i></a>`;
		}
	}	
	
}
Header(["ABC Hospital Centre For Accident, Trauma, Physiotherapy, Emergency & Cancer Care", "fa fa-facebook", "fa fa-twitter", "fa fa-instagram", "fa fa-linkedin"],[" ","https://www.facebook.com", "https://www.twitter.com", "https://www.instagram.com", "https://www.linkedin.com"]);

	
	//js for nav using Arrow function
	let footerData=["Trauma Care", "General Surgery", "Arthoscopic Surgery", "Orthopaedic Surgery", "Spine and Neurosurgery", "Other Facilities"];
	let address=["Landmark (Ring Road No.2) Gandhi Square, Near Nehru Nagar, Beside shiv Temple Chhattisgarh", "00000-123456", "abchospitalbsp@gmail.com"];
let navigation=(tabName, tabLink)=>{
	var navDom=document.querySelector("nav");
		navDom.classList.add("sticky");
		//navDom.setAttribute("style", "position:fixed; z-index:1; background-color:white;")
		navDom.innerHTML+=`
			<div class="container-fluid">
				<div class="row">
					<div class="col-md-4 ">
						<div class="dis-inline-block">
							<a class="text-20 color text-decoration-none">
								<img src="https://static.vecteezy.com/system/resources/thumbnails/021/809/795/small/doctors-day-illustration-png.png" width="50px">
								<b>ABC Hospital India</b>
							</a>
						</div>
					</div>
					<div class="col-md-8 ">
						<div class="navContent py-3">
							<ul id="navTab" class=" list-unstyled d-flex text-center">
							</ul>
						</div>
					</div>
				</div>
			</div>
		`;
	for(var i=0; i<tabName.length; i++){
		navTab.innerHTML+=`<li class="col"><a href="${tabLink[i]}" class="text-decoration-none color"><b>${tabName[i]}</b></a></li>`;
	}

	var appoint=document.querySelectorAll("#navTab>li");
		appoint[7].classList.add("block");
		appoint[7].setAttribute("style", "background-color:#232e78; padding:5px;");
	var appointAnchor=document.querySelectorAll("#navTab>li>a");	
		appointAnchor[7].style.color="white";
	
	Footer(tabName, tabLink, [  "ABC HOSPITAL is an advanced centre in Multispecility Health Care. We have more than 20 years experience in medical care field.", "We have expertise in all type of Orthopedic, Trauma, Joint-Replacement, Spine Surgery & Cancer Surgery . We have dedicated experienced Team to handle all type of Emergency Polytrauma & Mass Casuality.", "We have state of art, advanced Physiotherpy and Rehabilitation centre with more than 15 years experienced Physiotherpist. General Surgery, Maxillofacial, Gaynecological Surgery , Intensive Care facility also available."], footerData, address);
}
	
navigation(["Home", "About", "Services", "Our Doctors", "Gallery", "Career", "Contact Us", "Appointment"], ["index.html", "about.html", "services.html", "doctors.html", "gallery.html", "career.html", "contact.html", "appointment.html"]);

	//js for slider
	
let Slider=()=>{
	var sliderDom=document.querySelector("slider");
		sliderDom.innerHTML+=`
		<div class="">
			<!-- Carousel -->
				<div id="demo" class="carousel slide" data-bs-ride="carousel">

			<!-- Indicators/dots -->
				  <div class="carousel-indicators">
					<button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
					<button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
					<button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
				  </div>
				  
			<!-- The slideshow/carousel -->
				  <div class="carousel-inner">
					<div class="carousel-item active">
					  <img src="https://images.pexels.com/photos/207601/pexels-photo-207601.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Los Angeles" class="d-block" style="width:100%; height:80%;">
					</div>
					<div class="carousel-item">
					  <img src="https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Chicago" class="d-block" style="width:100%; height:80%;">
					</div>
					<div class="carousel-item">
					  <img src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600" alt="New York" class="d-block" style="width:100%; height:80%;">
					</div>
				  </div>
				  
			<!-- Left and right controls/icons -->
				  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
					<span class="carousel-control-prev-icon"></span>
				  </button>
				  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
					<span class="carousel-control-next-icon"></span>
				  </button>
				</div>
			</div>	
		`;
}	
Slider();

	//js for services
let Service=(Sicon, Sname)=>{
	var serviceDom=document.querySelector("service");
		serviceDom.innerHTML+=`
			<div class="container py-5">
				<div class="row text-center" id="serviceRow">
				</div>
			</div>
		`;
	for(var i in Sicon)	{
		serviceRow.innerHTML+=`<div class="col-md-3">
									<div class="">
										<a href="#" class="border border-2 border-info p-3 d-block text-decoration-none" ><i class="${Sicon[i]}"></i> ${Sname[i]}</a>
									</border>
								</div>
		`;
	}
}	
Service(["fa fa-ambulance", "fa fa-user-md","fa fa-address-card", "fa fa-map-marker",],["Emergency Ambulane", "Find Doctors", "Book Appointment", "Get Direction"]);

	//js for article
function Article(paraContent, day, morning, evening){
	var articleDom=document.querySelector("article");
		articleDom.innerHTML+=`
			<div class="container">
					<div class="col-md-12 text-center">
						<h3>ABC Hospital-Centre For Accident, Trauma, Physiotherapy, Emergency & Cancer Care</h3>
						
						<img src="https://img.freepik.com/free-vector/tiny-doctors-patients-near-hospital-flat-vector-illustration-therapist-face-mask-saying-goodbye-cured-people-near-medical-building-ambulance-emergency-clinic-concept_74855-25338.jpg" width="80%" height="40%">
					</div>
			
				<div class="row">
					<div class="col-md-6 py-4">
						<div id="paragraph">
						
						</div>
					</div>
					<div class="col-md-6">
							<div class="text-center pt-5">
								<h2>OPD TIME</h2>
							</div>
						<div>
							<table class="table table-bordered">
								<thead class="table-info">
									<tr>
										<th>Day</th>
										<th>Morning</th>
										<th>Evening</th>
									</tr>
								</thead>
								<tbody id="tableContent">
								</tbody>
							</table>
						</div>
					</div>
				</div>	
		`;
		
	for(var i in paraContent){
		paragraph.innerHTML+=`<p>${paraContent[i]}</p>`;
	};
	for(var i=0; i<day.length; i++){
		tableContent.innerHTML+=`<tr >
									<td>${day[i]}</td>
									<td>${morning[i]}</td>
									<td>${evening[i]}</td>
								</tr>`;
	}	
	var tdata=document.querySelectorAll("#tableContent>tr>td");
		tdata[19].style.color="red";
	
}	
Article(["ABC Hospital is an advanced centre in Multispecility Health Care. We have more than 20 years of experience in the medical care field.", "We have expertise in all types of Orthopedic, Trauma, Joint-Replacement, Spine Surgery & Cancer Surgery . We have a dedicated experienced Team to handle all types of Emergency Polytrauma & Mass Casuality.", "Our Team includes Senior Orthopedic Surgeon (Dr. XYZ) with More than 20 years experienced.",	"We provide all types of Cancer Treatment including Medical and Surgical Oncology . All type of Cancer Surgery & Chemotherapy the facility is available with a very experienced Oncologist (Dr.xyz) and his team.", "We have state of art, advanced Physiotherapy and Rehabilitation centre with more than 15 years experienced Physiotherpist.", "General Surgery, Maxillofacial, Gynecological Surgery , Intensive Care facility also available."], ["Monday", "TuesDay", "WednesDay", "Thursday", "Friday", "Saturday", "Sunday"], ["11:00 am – 2:00 pm", "11:00 am – 2:00 pm", "11:00 am – 2:00 pm", "11:00 am – 2:00 pm", "11:00 am – 2:00 pm", "11:00 am – 2:00 pm", "Only Emergency Services on Prior Appointment"], ["6:00 pm – 8:00 pm", "6:00 pm – 8:00 pm", "6:00 pm – 8:00 pm", "6:00 pm – 8:00 pm", "6:00 pm – 8:00 pm", "6:00 pm – 8:00 pm"," "]);	

	//js for Section
	
function Section(c1, c2, c3){
	var sectionDom=document.querySelector("section");
		sectionDom.setAttribute("style", "background-color:#23b5b9; padding:30px 10px;");
		sectionDom.innerHTML+=`
			<div class="container">
						<div class="text-center py-4">
							<h3 class="text-light "><b>Facilities And Treatments</b></h3>
						</div>
					<!-- Carousel -->
					<div id="demo" class="carousel slide" data-bs-ride="carousel">

					  <!-- Indicators/dots -->
					  <div class="carousel-indicators">
						<button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
						<button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
						<button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
					  </div>
					 <!-- The slideshow/carousel -->
					  <div class="carousel-inner">
						<div class="carousel-item active">
							<div class="row" id="carousel1">
							</div>
						</div>
						<div class="carousel-item">
							<div class="row" id="carousel2">
							</div>
						</div>	
						<div class="carousel-item">
						  <div class="row" id="carousel3">
						  </div>
						</div>
					  </div>
					  <!-- Left and right controls/icons -->
					  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
						<span class="carousel-control-prev-icon"></span>
					  </button>
					  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
						<span class="carousel-control-next-icon"></span>
					  </button>
					</div>
				</div>
				
				<div class="text-center pt-5">
					<button class="bg-blue text-light p-2">View All Facilities</button>
				</div>
		`;
		for(var i in c1){
			carousel1.innerHTML+=`
					<div class="col-md-3">
						 <img src=${c1[i]} class="d-block" style="width:100%">
					</div>
				`;
				
				carousel2.innerHTML+=`
					<div class="col-md-3">
						 <img src=${c2[i]} class="d-block" style="width:100%">
					</div>
				`;
				carousel3.innerHTML+=`
					<div class="col-md-3">
						 <img src=${c3[i]} class="d-block" style="width:100%">
					</div>
				`;
		}
}	
Section(["https://images.pexels.com/photos/3845126/pexels-photo-3845126.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/2324837/pexels-photo-2324837.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/263194/pexels-photo-263194.jpeg?auto=compress&cs=tinysrgb&w=600"], ["https://images.pexels.com/photos/3279202/pexels-photo-3279202.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/3376799/pexels-photo-3376799.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/263194/pexels-photo-263194.jpeg?auto=compress&cs=tinysrgb&w=600" ], ["https://images.pexels.com/photos/3825541/pexels-photo-3825541.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/3376799/pexels-photo-3376799.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/3376787/pexels-photo-3376787.jpeg?auto=compress&cs=tinysrgb&w=600"]);

	//js for doctors
function Doctor(d1){
	var doctorDom=document.querySelector("doctor");
		doctorDom.style.padding="30px";
		doctorDom.innerHTML+=`
			<div class="container text-center">
					<div class="py-5">
						<h3>MEET OUR DOCTORS</h3>
					</div>
				<div class="row" id="drImg">
				</div>
			</div>
		`;
		for(var i=0; i<d1.length; i++){
			drImg.innerHTML+=`<div class="col-md-4">
									<div >
										<div class="border border-info p-3">
											<img src="${d1[i]}">
										</div>
										<div class="bg-lightblue p-3">
											<div class="p-3">
												<h3>Name: Dr. xyz </h3>
											</div>
										<div>
											<button class=" bg-blue text-light">View Details</button>
										</div>
										</div>
									</div>
								</div>
				`;
		}
}	
Doctor(["https://t3.ftcdn.net/jpg/01/26/84/36/240_F_126843644_XBjpjIlMfdhjO1fCDbZMnfV0Qm3ixXTK.jpg", "https://t3.ftcdn.net/jpg/01/26/84/36/240_F_126843644_XBjpjIlMfdhjO1fCDbZMnfV0Qm3ixXTK.jpg" , "https://t3.ftcdn.net/jpg/01/26/84/36/240_F_126843644_XBjpjIlMfdhjO1fCDbZMnfV0Qm3ixXTK.jpg"]);


		//js for div
function get(){
	var getDom=document.querySelector("#map");
		getDom.setAttribute("style", "background-color:#23b5b9; padding:10px;")
		getDom.innerHTML+=`
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<div class="text-end">
							<input type="button" value="Get Direction" class="bg-blue text-light">
						</div>
					</div>
					<div class="col-md-6">
						<div>
							<input type="button" value="Get Direction" class="bg-blue text-light">
						</div>
					</div>
				</div>
			</div>
		`;
}	
get();	

	//js for footer

	
function Footer(tabName, tabLink, footerContent, footerData, address){
	var footerDom=document.querySelector("footer");
		footerDom.classList.add("bg-dark");
		footerDom.innerHTML+=`
			<div class="container">
				<div class="row ">
					<div class="col-md-4">
							<div>
								<img src="https://static.vecteezy.com/system/resources/thumbnails/021/809/795/small/doctors-day-illustration-png.png" width=100px;>
								<a class="text-light text-decoration-none"><b>ABC HOSPITAL</b></a>
							</div>
							<ul id="homeData" class="list-unstyled"></ul>
					</div>
					<div class="col-md-2">
								<div class="pt-5">
									<h5 class="text-light">Useful Links</h5>
								</div>
							<ul id="aboutData" class="list-unstyled"></ul>
					</div>
					<div class="col-md-3">
								<div class="pt-5">
									<h5 class="text-light">TREATMENTS & FACILITIES</h5>
								</div>	
							<ul id="treatmentData" class="list-unstyled"></ul>
					</div>
					<div class="col-md-3">
								<div class="pt-5">
									<h5 class="text-light">CONTACT US</h5>
								</div>	
							<ul id="addressData" class="list-unstyled"></ul>
					</div>
				</div>
			</div>
		`;
	for(var i in footerContent){
		homeData.innerHTML+=`
			<li class="p-1"><a class="text-light text-decoration-none">${footerContent[i]}</a></li>
		`;
	}
	for(var i in tabName){
		aboutData.innerHTML+=`
			<li class="p-1"><a class="text-light text-decoration-none">${tabName[i]}</a></li>
		`;
	}	
	for(var i in footerData){
		treatmentData.innerHTML+=`
			<li class="p-1"><a class="text-light text-decoration-none">${footerData[i]}</a></li>
		`;
	}
	for(var i in address){
		addressData.innerHTML+=`
			<li class="p-1"><a class="text-light text-decoration-none">${address[i]}</a></li>
		`;
	}
}	
	