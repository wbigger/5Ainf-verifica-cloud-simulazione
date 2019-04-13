var app = {
	init: function() {
		console.log("init");
		$.getJSON("api/data.json")
		.done(app.showCards)
		.fail(app.onError);
	},
	showCards(dataJson) {
		console.log(dataJson);
		dataJson.cardList.forEach(element => {
			let card = `<div class="col-lg-3 col-md-6 mb-4 net-all">
			<div class="card h-100">
			  <img class="card-img-top" src="${element.imgUrl}" alt="GitHub">
			  <div class="card-body">
				<h4 class="card-title">${element.title}</h4>
				<p class="card-text">${element.desc}</p>
			  </div>
			  <div class="card-footer">
				<a href="${element.buttonUrl}" class="btn btn-primary">Accedi</a>
			  </div>
			</div>
		  </div>`;
		  $("#container").append(card);
		});
	},
	onError: function(e) {
		console.log(`Ajax error: ${JSON.stringify(e)}`);
	}

}

$(document).ready(app.init);
