<%@ page contentType="text/css;charset=UTF-8" %>
<%@ taglib uri="http://www.zkoss.org/dsp/web/core" prefix="c" %>

<c:set var="HighLight" value="#00AAA0"/>

html,
body {
	margin: 0;
	padding: 0;
	height: 100%;
	width: 100%;
	background-color: #D4E3F4;
	overflow: hidden;
}

<%-- login --%>

.login-window {
	background-color: #00AAA0;
}

.login-box {
	width: 450px;
	border-radius: 5px;
}

.login-box-body {
	height: 300px;
	text-align: center;
	
}

.login-box-header {
	height: 50px;
}

.login-box-header-txt {
	color: black;
	position: relative;
	top: 30px;
}

.login-box-header-logo {
	padding-top: 20px;
	padding-bottom: 25px;
}

.login-box-footer {
}

.login-box-footer-pnl {

}

.login-label {
	color: black;
	text-align: right;
	width: 20%;
}

.login-field {
	text-align: left;
	width: 40%;
}

.login-btn {
	height: 36px;
	width: 72px;
}

.login-east-panel,
.login-west-panel {

}

<%-- header --%>

.desktop-header-left {
	margin: 0;
	margin-left: 5px;
	margin-top: 3px;
}

.desktop-header-right {
	margin: 0;
	margin-top: 3px;
	padding-right: 5px;
}

.disableFilter img {
	opacity: 0.2;
	filter: progid: DXImageTransform . Microsoft . Alpha(opacity=20);
	-moz-opacity: 0.2;
}

.z-tab-selected {
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;	-moz-border-radius: 0;
	-o-border-top-left-radius: 0;
	-o-border-top-right-radius: 0;
	-ms-border-radius: 0;
	background: #FCF4D9;

}
.z-tab-selected .z-tab-content{
	color : white;
}

.toolbar {
	padding: 0px;
	height: 35px;
}


.adwindow-toolbar, .adwindow-toolbar .z-north-body {

}

.z-toolbar {
	padding : 2px;
}

.toolbar-button {
	width : 28px !important;
}

.toolbar-button img
, .toolbar-button img:hover 
{
	width: 22px;
	height: 22px;
	border-style: solid;
	border-width: 1px;
	border-color: transparent;
}

.z-toolbarbutton {
    display: inline-block;
    width: auto;
    height: auto;
    border: 1px solid 
    transparent;
    margin: 0;
    padding: 0;
    line-height: auto;
    position: relative;
    cursor: pointer;
}

.z-toolbarbutton:hover {
	border : none; 
	background: #5e94b8;
	-webkit-box-shadow: none;
	-moz-box-shadow: none;
	-o-box-shadow: none;
	-ms-box-shadow: none;
	box-shadow: none;
}

.z-toolbarbutton-checked {
	border-color: transparent;
	background: #fff;
}

.embedded-toolbar-button img {
	width: 22px;
	height: 22px;
	<%--padding: 0px 1px 0px 1px;--%>
	border-style: solid;
	border-width: 1px;
	border-color: transparent;
}

.attachment-drag-entered img {
	opacity: 1;
}

z-toolbar-body {
	width: 100%;
}

.depressed img {
	border-style: inset;
	border-width: 1px;
	border-color: #9CBDFF;
	background-color: #C4DCFB;
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
	padding: 0px 1px 0px 1px;
}

.desktop-header {
	height: 50px;
	background-color: #00867D;
}
}

<%-- button --%>

.action-button {
	height: 15px;
	width: 48px;
	padding: 0px;
}

.action-text-button {
	height: 15px;
	width: 80px;
	padding: 0px;
}

.editor-button {
	width: 25px;
	height: 25px;
	padding: 0px;
}

.editor-button img {
	vertical-align: middle;
	text-align: center;
}

<%-- desktop --%>

div.wc-modal,
div.wc-modal-none,
div.wc-highlighted,
div.wc-highlighted-none {
	background-color: white;
}

.desktop-tabpanel {
	margin: 0;
	padding: 0;
	border: 0;
	position: absolute;
}

.menu-search {
	background-color: #E0EAF7;
}

<%-- adwindow and form --%>

.adform-content-none {
	overflow: auto;
	position: absolute;
	width: 100%;
	margin: 3px;
}

.adwindow-status {
	background-color: #DDE3EB;
	color: black;
	height: 25px;
	padding-top: 0;
	pdding-bottom: 0;
	<%-- background-image: url(../images/bar-bg.png);
	background-repeat: repeat-x;
	background-position: center left;
	--%>
}

.adwindow-nav {
	width: 110px;
}

.adwindow-left-nav {
	border-right: 1px solid #919191;
	border-left: none;
}

.adwindow-nav:hover {
	overflow:auto;
}

.adwindow-right-nav {
	border-left: 1px solid #7EAAC6;
	border-right: none;
}

.adwindow-nav-content {
	height: 100%;
	width: 110px;
}

.adwindow-navbtn-dis,
.adwindow-navbtn-sel,
.adwindow-navbtn-uns {
	border: 0px;
	margin-top: 3px;
	padding-top: 2px;
	padding-bottom: 2px;
}

.adwindow-navbtn-sel {
	background-color: #9CBDFF;
	color: #FFFFFF;
	cursor: pointer;
	border-top: none;
	border-bottom: none;
}

.adwindow-left-navbtn-sel {
	border-left: none;
	border-right: none;
	text-align: right;
	-moz-border-radius-topleft: 5px;
	-moz-border-radius-bottomleft: 5px;
	-webkit-border-top-left-radius: 5px;
	-webkit-border-bottom-left-radius: 5px;
	background-color: ${HighLight};
}

.adwindow-right-navbtn-sel {
	border-right: none;
	border-left: none;
	text-align: left;
	-moz-border-radius-topright: 5px;
	-moz-border-radius-bottomright: 5px;
	-webkit-border-top-right-radius: 5px;
	-webkit-border-bottom-right-radius: 5px;
	background-color: ${HighLight};
}

.adwindow-navbtn-uns {
	background-color: #C4DCFB;
	color: #000000;
	cursor: pointer;
}

.adwindow-navbtn-dis {
	background-color: #AAAAAA;
}

.adwindow-navbtn-uns,
.adwindow-navbtn-dis {
	border-top: none;
	border-bottom: none;
}

.adwindow-left-navbtn-uns,
.adwindow-left-navbtn-dis {
	background-image: url(../images/adtab-bg-uns.png);
	border-left: none;
	border-right: none;
	text-align: right;
	-moz-border-radius-topleft: 5px;
	-moz-border-radius-bottomleft: 5px;
	-webkit-border-top-left-radius: 5px;
	-webkit-border-bottom-left-radius: 5px;
	-moz-box-shadow: 0 0 5px #333;
	-webkit-box-shadow: 0 0 5px #333;
	box-shadow: 0 0 5px #333;
}

.adwindow-right-navbtn-uns,
.adwindow-right-navbtn-dis {
	background-image: url(../images/adtab-bg-uns.png);
	border-right: none;
	border-left: none;
	text-align: left;
	-moz-border-radius-topright: 5px;
	-moz-border-radius-bottomright: 5px;
	-webkit-border-top-right-radius: 5px;
	-webkit-border-bottom-right-radius: 5px;
	-moz-box-shadow: 0 0 5px #333;
	-webkit-box-shadow: 0 0 5px #333;
	box-shadow: 0 0 5px #333;
}

<%-- ad tab --%>

.adtab-body {
	position: absolute;
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100%;
	border: none;
}

.adtab-content {
	margin: 0;
	padding: 0;
	border: none;
	overflow: auto;
	width: 100%;
	height: 100%;
	position: absolute;
	background-color: #EDEDED;
}

.adtab-grid-panel {
	position: absolute;
	overflow: hidden;
	width: 100%;
	height: 100%;
}

.adtab-grid {
	width: 100%;
	position: absolute;
}

.adtab-tabpanels {
	width: 80%;
	border-top: 1px solid #9CBDFF;
	border-bottom: 1px solid #9CBDFF;
	border-left: 2px solid #9CBDFF;
	border-right: 2px solid #9CBDFF;
}

<%-- status bar --%>

.status {
	width: 100%;
	height: 25px;
	padding-top: 0;
	padding-bottom: 0;
}

.status-db {
	padding-top: 0;
	padding-bottom: 0;
	padding-left: 5px;
	padding-right: 5px;
	cursor: pointer;
	height: 100%;
	margin: 0;
	border-left: solid 1px #9CBDFF;
	color: black;
	display : block;
	text-align : center;
	min-width: 85px;
}

.status-info {
	padding-right: 10px;
	padding-left: 10px;
	border-left: solid 1px #9CBDFF;
	color: black;
	display : block;
	word-break: break-all;
	width: max-content;
}

.status-border {
	border: solid 1px #9CBDFF;
}

.message-error {
	background-color: #ffd7d7;
}

.message-error-text {
	color: black;
	margin-top: 10px;
}

.message-info {
	background-color: #FFFFFF;
}

.message-info-text {
	color: black;
}

.message-warning {
	background-color: yellow;
}

.form-button {
	width: 99%;
}

.form-button img {
	height: 24px;
	width: 24px;
}
<%-- Combobox --%>

.z-combobox-disd {
	color: black !important;
	cursor: default !important;
	opacity: 1;
	-moz-opacity: 1;
	-khtml-opacity: 1;
	filter: alpha(opacity=100);
}

.z-combobox-disd * {
	color: black !important;
	cursor: default !important;
}

.z-combobox-text-disd {
	background-color: #ECEAE4 !important;
}

<%-- Button --%>

.z-button-disd {
	color: black;
	cursor: default;
	opacity: .6;
	-moz-opacity: .6;
	-khtml-opacity: .6;
	filter: alpha(opacity=60);
}

<%-- highlight focus form element --%>

input:focus,
textarea:focus,
.z-combobox-inp:focus,
z-datebox-inp:focus {
	border: 1px solid #0000ff;
}

<%-- menu tree cell --%>
.menu-item input[type="checkbox"] {
    float: right;
}
<%--

div.z-tree-body td.menu-tree-cell {
	cursor: pointer;
	padding: 0 2px;
	overflow: visible;
}

div.menu-tree-cell-cnt {
	border: 0;
	margin: 0;
	padding: 0;
	white-space: nowrap
}

td.menu-tree-cell-disd * {
	color: #C5CACB !important;
	cursor: default !important;
}

td.menu-tree-cell-disd a:visited,
td.menu-tree-cell-disd a:hover {
	text-decoration: none !important;
	cursor: default !important;
	;
	border-color: #D0DEF0 !important;
}

div.z-dottree-body td.menu-tree-cell {
	cursor: pointer;
	padding: 0 2px;
	overflow: visible;
}

div.z-filetree-body td.menu-tree-cell {
	cursor: pointer;
	padding: 0 2px;
	overflow: visible;
}

div.z-vfiletree-body td.menu-tree-cell {
	cursor: pointer;
	padding: 0 2px;
	overflow: visible;
}

tr.z-row td.z-row-inner {
	background-color: #FAFAFA;
	margin-left: 4px;
	margin-right: 4px;
	border-bottom: 0px solid #DDE3EB;
	border-left: 0;
	border-right: 0px solid #DDE3EB;
}
 --%>
 
<%-- Document Status Indicator First Column - Number --%>

.docStatus td:first-child {
	width: 40px;
}

.docStatus td:nth-child(3) {
	width: 40px;
	text-align: right;
}

.docStatus-sep {
	min-width: 10px !important;
}

<%-- Document Status Indicator 3rd Column - Name Label --%>

.docStatus td {
	text-align: left;
}

input[type="checkbox"] {
	border: 1px solid #bbbbbb;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
	padding: 9px;
	display: inline-block;
	position: relative;
	appearance: none;
	-webkit-appearance: initial !important;
}

input[type="checkbox"]:active,
input[type="checkbox"]:checked:active {
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px 1px 3px rgba(0, 0, 0, 0.1);
}

input[type="checkbox"]:checked {
	background-color: #e9ecee;
	border: 1px solid #adb8c0;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05), inset 15px 10px -12px rgba(255, 255, 255, 0.1);
	background: url('../images/zul/input/check.png')
}

input[type="checkbox"]:checked::before {
	content: none;
}

input[type="checkbox"]:disabled {
	border: 1px solid #f0f0f0 !important;
	background: f0f0f0;
}

input[type="checkbox"]:checked:after {
	background: url('../images/zul/input/check.png');
	position: absolute;
	top: 0px;
	left: 3px;
	color: #99a1a7;
}

.z-checkbox-cnt {
	position: relative;
	bottom: 8px;
}

.z-tab-close {
	background-image: url(../images/zul/tab/tab-close.png);
	background-repeat: no-repeat;
	cursor: pointer;
	display: block;
	width: 12px;
	height: 22px;
	position: absolute;
	right: 1px;
	top: 1px;
	z-index: 15;
}

.touch-screen-friendly .flat-button {
	color: white;
	background: darkgreen;
	width: 100%;
	height: 40px;
	border: none;
}

.touch-screen-friendly .z-list-header-cnt,
.touch-screen-friendly .z-list-cell-cnt {
	padding-top: 15px;
	padding-bottom: 15px;
}

div.z-list-cell-cnt {
	padding: 1px 0 1px 0;
	margin-right: 3px;
}

.touch-screen-friendly .z-textbox,
.touch-screen-friendly .z-intbox,
.touch-screen-friendly .z-decimalbox,
.touch-screen-friendly .z-longbox,
.touch-screen-friendly .z-doublebox {
	width: 100%;
	height: auto;
}

.touch-screen-friendly .z-row-cnt {
	background: darkgreen;
	padding: 0;
}

.touch-screen-friendly .flat-button-tl,
.touch-screen-friendly .flat-button-tl .flat-button,
.touch-screen-friendly .flat-button-cl,
.touch-screen-friendly .flat-button-cl .flat-button {
	width: 0px;
	height: 0px;
	padding: 0px;
}

.touch-screen-friendly .flat-button-cm {
	text-align: right;
}

.touch-screen-friendly div.z-overflow-hidden > input[type=checkbox],
.touch-screen-friendly div.z-overflow-hidden > input[type=radio] {
	width: 3em !important;
	height: 3em;
	-moz-appearance: none;
	-o-appearance: none;
}

.z-north-body {
	
}

.touch-screen-friendly .message-screen-info {
	text-align: left;
	vertical-align: top;
	background: lightgreen;
}

.touch-screen-friendly .z-button {
	height: 80px;
}

.z-tab {
	border-right: 1px solid;
}

.z-panel-header {
	padding: 10px 16px;
}

.z-grid-body .z-cell {
    padding: 5px 5px;
}

.z-column-content, .z-row-content, .z-group-content, .z-groupfoot-content, .z-footer-content,
.z-listheader-content, .z-listcell-content, .z-listgroup-content, .z-listgroupfoot-content, .z-listfooter-content {
    padding: 3px 2px;
}

.z-datebox-button, .z-bandbox-button, .z-combobox-button {
    padding-top: 4px;
}

.z-select,
.z-textbox, .z-decimalbox, .z-intbox, .z-longbox, .z-doublebox,
.z-combobox-button, .z-bandbox-button, .z-datebox-button, .z-timebox-button, .z-spinner-button, .z-doublespinner-button,
.z-combobox-input, .z-bandbox-input, .z-datebox-input, .z-timebox-input, .z-spinner-input, .z-doublespinner-input {
	height: 32px;
}

<%-- Progress Monitor Window--%>

.progress-monitor {
	border: 2px solid #1b4b99;
	color: #f9f9f8;
	padding: 20px;
	background: url("../images/processing.svg") no-repeat;
	background-position: 550px 25px;
	background-color: white;
}

.progress-monitor-cm-noborder {}

<%-- Heading Field button parent component. --%>

.form-button span{
	width: 100%;
}

<%-- Multi Select List & Table Editor Start --%>

.multi-select-box {
}

.multi-select-popup {
  background: #f5f5f5;
  border: solid 1px #828282;
  border-radius: 5px;
  max-height: 350px;
  min-width: 250px;
  overflow: auto;
}

.multi-select-vbox {
  background: white;
  border-radius: 5px;
  padding: 5px;
  width: 100%;
}

.multi-select-textbox {
  background-color: white !important;
}

.multi-select-textbox-readonly {
  background-color: #F0F0F0 !important;
}

<%-- Multi Select List & Table Editor End --%>


<%-- Attachment by Drag & Drop Start --%>

.attachment-drag-entered {
	background: #1F9BDE !important;
	outline: #FFFFFF dashed 4px !important;
	outline-offset: -35px !important;
	-webkit-transition: outline-offset .2s ease-in-out, background-color .2s linear !important;
	transition: outline-offset .2s ease-in-out, background-color .2s linear !important;
}

.attachment-drag-entered .drop-here-label {
	display: block;
	padding-top: 175px;
	color: #FFFFFF;
	text-align: center;
	font-size: xx-large;
}

.drop-progress-meter {
	width:99% !important;
	margin: 3px 0px;
}

.z-progressmeter-image {
	background: linear-gradient(to bottom, #1eff00 0%, #1a6b18 100%);
}
.z-button .quickButtons .z-button-cm {background-image: none; font-weight: bolder; height: 30px; width:250px;}

.attachment-drag-entered,
.attachment-drag-entered .z-button .z-button-tl,
.attachment-drag-entered .z-button .z-button-tm,
.attachment-drag-entered .z-button .z-button-tr,
.attachment-drag-entered .z-button .z-button-cl,
.attachment-drag-entered .z-button .z-button-cm,
.attachment-drag-entered .z-button .z-button-cr,
.attachment-drag-entered .z-button .z-button-bl,
.attachment-drag-entered .z-button .z-button-bm,
.attachment-drag-entered .z-button .z-button-br {
    background : #1f9bde;
}

<%-- Attachment by Drag & Drop End --%>

.drop-here-div {
	width: 100%;
	height: 100%;
	background: #FFFFFF;
	outline: #1F9BDE dashed 4px;
	outline-offset: -15px;
	-webkit-transition: outline-offset .2s ease-in-out, background-color .2s linear;
	transition: outline-offset .2s ease-in-out, background-color .2s linear; 
}

.drop-here-label {
	display: block;
	padding-top: 175px;
	color: #1F9BDE;
	text-align: center;
	font-size: xx-large;
}

.toolbar-save-image img {
	padding: 2px;
	box-shadow: 0px 0px 4px 2px red;
}

<%-- Smart Sidebar --%>

.ssb-header-grid {
	width: 100%;
	height: 100%;
}

.ssb-header {
	top: 0px;
	right: 0px;
	width: 40%;
	z-index: 10;
	height: 100%;
	padding-top: 60px;
	position: absolute;
	background-color: #fff;
	border-top: 1px solid #008cff;
	border-left: 1px solid #003764;
}

.ssb-header-card {
	box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}

.ssb-animate-right {
	animation: animateright 0.7s;
}

.smart-sidebar-north,.smart-sidebar-center,.smart-sidebar-south {
	border: 1px solid #1c4961 !important;
	width: 100%;
}

.smart-sidebar-north {
	background: #1f9bde;
}

.smart-sidebar-south {
	padding: 3px;
}

.ssb_searchSerial, .ssb_searchProduct, .ssb_searchCategory {
	width: 25%;
	height: 24px;
	margin: 1px;
	padding: 1px 5px;
}

.ssb-btn {
	width: 100px;
}

<%-- Smart Sidebar for Product --%>

.ssb-product-row {
	background: #FFF;
}

.ssb-product-row.selected {
	background: linear-gradient(to bottom, #00ffe7 0, #00c4f5 100%) !important;
	background-clip: padding-box;
}

<%-- Sidebar Product Panel with Qty --%>

.ssb-content {
	overflow-y: scroll;
	max-height: 60%;
}

.ssb-product-qty-panel {
	display: none;
	position: fixed;
	z-index: 50;
	padding-top: 100px;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgb(0,0,0);
	background-color: rgba(0,0,0,0.4);
}

.ssb-product-qty-panel .ssb-content {
	top: 20%;
	left: 25%;
	width: 35%;
	padding: 2px;
	min-width: 400px;
	max-width: 800px;
	background: white;
	position: relative;
	border-radius: 5px;
	border: 5px outset #1C6EA4;
	-webkit-box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.75);
	-moz-box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.75);
	box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.75);
}

.ssb-qty-limit {
	width: 120px;
	height: 25px;
	text-align: right;
	box-sizing: border-box;
}

.ssb-qty-div {
	margin: 5px;
	display: flex;
	text-align: center;
}

.ssb-qty-div: nth-child(1) {
	text-align: left;
}

.ssb-qty-div button {
	width: 50%;
	margin: 1px;
	height: 30px;
	display: inline-block;
}

.ssb-qty-tbl {
	width: 100%;
	padding: 5px;
	border: none;
	border-collapse: collapse;
}

.ssb-qty-tbl-row td {
	width: 33%;
	padding: 3px;
	text-align: center;
}

.ssb-qty-tbl-row td:nth-child(n+2):nth-child(-n+3) {
}

.ssb-qty-tbl-row td input,
.ssb-qty-tbl-row-total td input {
	display: inline;
	text-align: right;
	box-sizing: border-box;
	width: 100%;
	height: 25px;
}

.dp-act-box, .dp-fav-content, .dp-rec-content, .dp-userfav-content, .dp-views-box {
	padding: 2px;
	background-color: #fcfcfc !important;
	border-radius: 5px !important;
	border: #d8d8d8 1px solid !important;
}

.dp-fav-toolbar, .dp-rec-toolbar, .dp-userfav-toolbar {
	padding: 2px;
	background-color: #e7e7e7 !important;
	border: 1px solid #d8d8d8 !important;
	border-radius: 5px;
	height: inherit !important;
	background-image: url() !important;
}

div.dp-doc-items td:hover span, div.dp-fav-items td:hover a, div.dp-rec-items .z-toolbarbutton:hover a, div.dp-views-items .z-toolbarbutton:hover a {
	color: #ffffff !important;
}

.dp-rec-toolbar .z-toolbar-body {
	width: 98% !important;
	padding-left: 5px;
	padding-right: 5px;
}

.dp-rec-toolbar .z-toolbar-content {
	width: 99% !important;
}


.dp-userfav-toolbar img {
	width: 20px;
	height: 20px;
}

.listbox-simple tr.z-list-item-seld
, .listbox-simple tr.z-list-item-over-seld
, .listbox-simple tr.z-list-item-over 
{
	background: none;
	color: #000;
}

.text-highlight {
	background-color: white !important;
	background-image: none;
}

.text-highlight:focus {
	background-color: yellow !important;
	background-image: none;
}

.z-textbox:focus, .z-decimalbox:focus, .z-intbox:focus, .z-longbox:focus, .z-doublebox:focus, z-datebox-inp:focus
, z-combobox-inp:focus, input:focus
{
    background-color: #fff6aa !important;
    background-image: none;
    border: 2px solid red !important;
}

<%-- desktop header migration start --%> 
 
.desktop-header-migration td {
	vertical-align: middle;
}

.desktop-header-migration .z-button .z-button-tl,
.desktop-header-migration .z-button .z-button-tm,
.desktop-header-migration .z-button .z-button-tr,
.desktop-header-migration .z-button .z-button-cl,
.desktop-header-migration .z-button .z-button-cm,
.desktop-header-migration .z-button .z-button-cr,
.desktop-header-migration .z-button .z-button-bl,
.desktop-header-migration .z-button .z-button-bm,
.desktop-header-migration .z-button .z-button-br {
    background : #153764;
}

.desktop-header-migration img {
    margin-top: -1px;
}
<%-- desktop header migration end --%> 

.z-north-body, .z-south-body, .z-west-body, .z-center-body, .z-east-body {
	line-height: 12px;
	padding: 0px;
	color: rgba(0,0,0,0.9);
}

.z-toolbarbutton-content {
	word-break: break-all;
	white-space:normal;
	font-size: inherit;
	color: inherit;
	background-color: inherit !important;
	font-family: inherit;
	font-weight: inherit;
	font-style: inherit;
	display: inherit;
	position: inherit;
	border: inherit;
	padding: inherit;
	border-radius: inherit;
}

.z-window {
	background-color: #fff;
	padding : 0;
}

.z-window-content {
	padding:3px;
}

.adhome-portal .z-hlayout-inner {
	width: 100%;
}

.z-panelchildren {
 padding:5px;
}

<%-- DocStatus --%>
.docStatus-separator {
	min-width :10px !important;
}

<%-- Row Group --%>
.z-group-icon {
	display: inline-block;
	font-family: FontAwesome;
	font-weight: normal;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.z-group-icon-close:before {
	content: "\f0da";
}

.z-group-icon-open:before {
	content: "\f0d7";
}

<%-- confirm panel --%>
.confirm-panel {
	width: auto;
	height: auto;
	position: relative;
	padding-left: 2px;
	padding-right: 2px;
}

.confirm-panel-right {
	float: right;
}

.confirm-panel-left {
	float: left;
}

.confirm-panel-center{
	padding-left: 5px;
	float: left;
}

<%-- zk.wcs : 5 --%>
.z-listbox-header table, .z-listbox-body table, .z-listbox-footer table {
	width: 100% !important;
}

.menu-tree .z-treerow .z-treecell {
	width: 100% !important;
}

.menu-tree .z-treerow .z-treecell.menu-item-checkbox {
	width: 36px !important;
}

.activity-left-date.z-datebox-input {
	width: 42%!important;
}
.activity-right-time.z-datebox-input.z-datebox-rightedge {
	width: 42%!important;
}

.adform-content .z-west-splitter {
    background-color:#c1c1c1;
    width: 3px;
}

.z-tabs-content, .z-tabs {
	min-height: 38px;
}

.z-tab {
	padding: 6px 16px;
}

.z-window-header {
	padding-bottom: 8px;
}

.adwindow-nav-content {
	height: min-content; 
}

.z-treerow.z-treerow-selected>.z-treecell, .z-treerow .z-treecell :hover {
    background: #6cb2b6 !important;
}

.z-search-box .z-combobox, .z-search-box .z-combobox-input {
    width: 99% !important;
}

.quick-grid-panel .z-textbox, .quick-grid-panel .z-decimalbox, .quick-grid-panel .z-intbox, .quick-grid-panel .z-longbox, .quick-grid-panel .z-doublebox {
	width: 99% !important;
}

.quick-grid-panel .z-combobox-input {
    width: 76% !important;
}

.quick-grid-panel .z-search-box .z-combobox-input{
    width: 99% !important;
}

.quick-grid-panel .z-datebox-input,
.quick-grid-panel .z-timebox-input {
	width: 69%;
}
