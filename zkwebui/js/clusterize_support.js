/*******************************************************************************
 * Clusterize JS implementation By Sachin Bhimani
 * 
 * Reference: https://clusterize.js.org
 ******************************************************************************/

var playground = {

	clusterize : null,
	initClusterize : function() {
		var opts = {
			scrollId : 'scrollArea',
			contentId : 'contentArea',
			rows_in_block : 30,
			blocks_in_cluster : 2,
			keep_parity : false
//			callbacks : {
//				scrollingProgress : function(progress) {
//					console.log('Scroll Progress :' + progress);
//				}
//			}
		};

		playground.clusterize = new Clusterize(opts);
	}
};

// Load the report
$(window).load(function() {

	var timeoutfn;
	clearTimeout(timeoutfn);
	timeoutfn = setTimeout(function() {

		if (playground.clusterize) {
			playground.clusterize.destroy(true);
		}

		playground.initClusterize();
	}, 500);
});

// Unload the report
$(window).unload(function() {

	if (playground.clusterize) {
		playground.clusterize.destroy(true);
	}
});