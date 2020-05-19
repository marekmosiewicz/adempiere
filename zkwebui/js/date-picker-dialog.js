/*
 * Show date picker dialog box [ Touch Screen ]
 * 
 * @author Sachin D Bhimani
 * 
 * @reference http://amsul.ca/pickadate.js
 */

function DatePickerDialog() {

	this.showdialogbox = showdialogbox;

	function showdialogbox(displayTextId, containerID, dateFormat) {

		var $input = $("#" + displayTextId).pickadate({
			container : "#" + containerID,
			closeOnSelect : true,
			closeOnClear : false,
			format: dateFormat,
			formatSubmit : dateFormat,
			today : '',
			clear : '',
			close : '',

			onSet : function(context) {
				var result = "";
				if (this.get() != 'undefined' && this.get() != null)
					result = this.get();

				zkau.send({
					uuid : displayTextId,
					cmd : 'onDatePickSelectEvent',
					data : [ result ],
					ctl : true
				});
			} // onSet

		});

		var picker = $input.pickadate('picker');
		
	}
}

var datepickerdialog = new DatePickerDialog();