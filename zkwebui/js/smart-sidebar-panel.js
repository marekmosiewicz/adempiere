/*******************************************************************************
 * Copyright (C) 2017 Adaxa Pty Ltd. All Rights Reserved. This program is free
 * software; you can redistribute it and/or modify it under the terms version 2
 * of the GNU General Public License as published by the Free Software
 * Foundation. This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 ******************************************************************************/
/*******************************************************************************
 * Smart Sidebar panel
 * 
 * @author Sachin Bhimani @ Logilite
 * @since Sep 28, 2018
 ******************************************************************************/

function SmartSideBar()
{
	var timeout = null;
	var prefix = 'ssb-qty-tbl';

	this.btnOK = btnOK;
	this.search = search;
	this.btnCancel = btnCancel;
	this.qtyUpdate = qtyUpdate;
	this.calcTotal = calcTotal;
	this.createNewRow = createNewRow;
	this.appendInnerHtmlContent = appendInnerHtmlContent;

	// 
	function appendInnerHtmlContent(parentCompID, innerHtmlStructure)
	{
		var parentComp = document.getElementById(parentCompID);
		parentComp.innerHTML = innerHtmlStructure;

		$('.z-west, .z-north').css('z-index', 5);
	} // appendInnerHtmlContent

	function createNewRow()
	{
		var table = document.getElementById(prefix);
		var rowNo = table.rows.length - 1;

		var row = table.insertRow(rowNo);
		row.setAttribute('class', prefix + '-row');

		createTD(row, 0, '-td-size', '-td-size-nb-' + rowNo, '-td-size-nb', 'smartSideBar.qtyUpdate(' + rowNo + ')', false);
		createTD(row, 1, '-td-qty', '-td-qty-nb-' + rowNo, '-td-qty-nb', 'smartSideBar.qtyUpdate(' + rowNo + ')', false);
		createTD(row, 2, '-td-total', '-td-total-nb-' + rowNo, '-td-total-nb', 'smartSideBar.calcTotal()', true);
	} // createNewRow

	function createTD(row, cellNo, cellClass, nbID, nbClass, nbOnChange, isNbReadOnly)
	{
		var nb = document.createElement('input');
		nb.setAttribute('type', 'number');
		nb.setAttribute('id', prefix + nbID);
		nb.setAttribute('class', prefix + nbClass);
		nb.setAttribute('onchange', nbOnChange);
		nb.setAttribute('align', 'center');
		nb.setAttribute('valign', 'middle');
		nb.setAttribute('value', '0');
		nb.readOnly = isNbReadOnly;

		var cell = row.insertCell(cellNo);
		cell.setAttribute('class', prefix + cellClass);
		cell.appendChild(nb);
	} // createTD

	function qtyUpdate(rowNo)
	{
		var nbSize = document.getElementById(prefix + '-td-size-nb-' + rowNo);
		var nbQty = document.getElementById(prefix + '-td-qty-nb-' + rowNo);
		var nbTotal = document.getElementById(prefix + '-td-total-nb-' + rowNo);

		nbTotal.value = nbSize.value * nbQty.value;
		nbTotal.onchange();
	} // qtyUpdate

	function calcTotal()
	{
		var sum = 0;
		var btnOk = document.getElementById('btnsbqtyok');
		var nbLimit = document.getElementById('ssb-qty-limit');
		var nbTotal = document.getElementById(prefix + '-td-nettotal');

		// Units columns
		$('.ssb-qty-tbl-td-total-nb').each(function ()
		{
			sum += parseFloat(this.value);
		});

		nbTotal.value = sum;
		btnOk.disabled = (nbLimit.value != nbTotal.value);
	} // calcTotal

	function btnOK(cmp, productID)
	{
		var table = document.getElementById(prefix);
		var totalRow = table.rows.length - 2; // Subtract Row Header + Total

		var row = 1;
		var arrayObj = [];
		$('.ssb-qty-tbl-row').each(function ()
		{
			if (row <= totalRow)
			{
				var size = this.cells[0].children.namedItem(prefix + '-td-size-nb-' + row).value;
				var qty = this.cells[1].children.namedItem(prefix + '-td-qty-nb-' + row).value;

				if (size !== undefined && size !== '' && size !== '0' && size !== 0 && qty !== undefined && qty !== '' && qty !== '0' && qty !== 0)
				{
					arrayObj.push(
					{
						ItemSize: size,
						QtyEntered: qty
					});
				}
				row++;
			}
		});

		var cmpID;
		if (typeof cmp == 'string')
			cmpID = cmp;
		else if (typeof cmp.id == 'string')
			cmpID = cmp.id;
		else
		{
			alert('Component ID not found.');
			return;
		}

		var jsonData = JSON.stringify(arrayObj);

		
		// Send event to server side
		var widget = zk.Widget.$(cmpID);
		var event = new zk.Event(widget, 'onSSBCreateEvent', {data: ["" + productID, jsonData]}, {toServer: true});
		zAu.send(event)

		btnCancel();
	} // btnOK

	function btnCancel()
	{
		var div = document.getElementsByClassName('ssb-product-qty-panel')[0];
		div.parentNode.removeChild(div);

		$('.z-west')
			.css('z-index', 12);
		$('.z-north')
			.css('z-index', 16);
	} // btnCancel

	function search(tabID)
	{
		// Clear the timeout if it has already been set. This will prevent the
		// previous task from executing. If it has been less than <MILLISECONDS>
		clearTimeout(timeout);

		// Make a new timeout set to go off in 1000ms
		timeout = setTimeout(function ()
		{
			searchRows(tabID);
		}, 1000);
	} // search

	function searchRows(tabID)
	{
		var patnSerial = new RegExp(document.getElementsByClassName('ssb_searchSerial_' + tabID)[0].value, 'i');
		var patnProduct = new RegExp(document.getElementsByClassName('ssb_searchProduct_' + tabID)[0].value, 'i');
		var patnCategory = new RegExp(document.getElementsByClassName('ssb_searchCategory_' + tabID)[0].value, 'i');

		$('.ssb-product-row_' + tabID).filter(function ()
		{
			var row = $(this).context;

			var rowTxtSerial = row.attributes.PVALUE.value;
			var rowTxtProduct = row.attributes.PNAME.value;
			var rowTxtCategory = row.attributes.PCTGRY.value;

			if (patnSerial.test(rowTxtSerial) && patnProduct.test(rowTxtProduct) && patnCategory.test(rowTxtCategory))
				row.style.display = "";
			else
				row.style.display = "none";
		});
	} // searchRows

}

var smartSideBar = new SmartSideBar();
