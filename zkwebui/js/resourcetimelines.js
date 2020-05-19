/*
 *  Time line integration for shown Resource VS Resource Assignment data. 
 *  Manipulation of data as insertion, update, deletion etc...
 *  
 * @author Sachin D Bhimani
 * 
 * @reference http://visjs.org/examples/timeline/other/groupsPerformance.html
 */



var resources = new vis.DataSet();
var tickets = new vis.DataSet();

function ResourceTimeLines(uuid, resources_groups, res_assign_items) {

	// var localDate = new Date().getTime();
	// var localization = Intl.DateTimeFormat().resolvedOptions().timeZone;

	// specify options
	var wgt = zk.Widget.$(uuid);
	var divID = wgt.uuid;

	var options = {
		groupOrder : 'id, content',
		start : new Date(),
		end : new Date(1000 * 60 * 60 * 24 + (new Date()).valueOf()),
		// editable : true,
		editable : {
			add : true, // add new items by double tapping
			updateTime : true, // drag items horizontally
			updateGroup : true, // drag items from one group to another
			remove : true
		// delete an item by tapping the delete button top right
		},

		margin : {
			item : 10, // minimal margin between items
			axis : 0
		// minimal margin between items and the axis
		},

		orientation : 'top'

	// tooltipOnItemUpdateTime : true,

	/*
	 * locales : { // create a new locale (text strings should be replaced with //
	 * localized strings) mylocale : { current : 'current', time : 'time' } },
	 */
	// use the new locale
	// locale : 'mylocale',
	// locale : localization,
	// moment : function(localDate) {
	// return vis.moment(localDate).utc();
	// },
	/*
	 * onMove : function(item, callback) { // item.content = prompt('onMove Edit
	 * items text:', item.content); if (item.content != null) { callback(item); //
	 * send back adjusted item
	 * 
	 * item.start = vis.moment(vis.moment(item.start)).valueOf(); item.end =
	 * vis.moment(vis.moment(item.end)).valueOf();
	 * 
	 * var json_data = JSON.stringify(item);
	 * 
	 * zAu.cmd0.showBusy(null); var event = new zk.Event(wgt, 'onTimeLineEvent', {
	 * data : [ json_data ] }, { toServer : true }); zAu.send(event); //
	 * zkau.send({ // uuid : divID, // cmd : 'onTimeLineEvent', // data : [
	 * json_data ], // ctl : true // }); } else { callback(null); // cancel
	 * updating the item } }
	 */

	// onMove : function(item, callback) {
	// console.log("onMove");
	// },
	//
	// onAdd : function(item, callback) {
	// console.log("onAdd");
	// },
	//
	// onRemove : function(item, callback) {
	// console.log("onRemove");
	// },
	//
	// onUpdate : function(item, callback) {
	// console.log("onUpdate");
	// }
	};

//	var groups = new vis.DataSet();
//	groups.add(resources_groups);

	resources.clear();
	resources.add(resources_groups);
	
//	var items = new vis.DataSet();
//	items.add(res_assign_items);
	tickets.clear();
	tickets.add(res_assign_items);
	
	// create a Time line
	var container = document.getElementById(divID);
	timeline = new vis.Timeline(container, tickets, resources, options);

	/*
	 * timeline.onclick = function(event) { var props =
	 * timeline.getEventProperties(event) console.log(props); };
	 * 
	 * timeline.onRemove = function(item, callback) { var props =
	 * timeline.getEventProperties(item) console.log(props); };
	 */

	// timeline.addGroup(resources_groups);
	// new vis.Timeline(container, items, groups, options)
	// timeline.setGroups(resources_groups);
	// timeline.setItems(res_assign_items);
}

function updateTicket(ticket) {
	timeline.itemsData.update(ticket);
}

function reloadData(resources_groups, res_assign_items) {
	resources.clear();
	resources.add(resources_groups);
	
	tickets.clear();
	tickets.add(res_assign_items);
	
	timeline.setData(resources_groups, res_assign_items);
}
