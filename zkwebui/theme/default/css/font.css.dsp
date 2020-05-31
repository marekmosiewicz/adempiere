<%@ taglib uri="http://www.zkoss.org/dsp/web/core" prefix="c" %>
<%@ page contentType="text/css;charset=UTF-8" %>

@import url('https://fonts.googleapis.com/css?family=Open+Sans');

<%-- Window Font, For Default font configuration on whole system, require to update font on 'font.css.dsp', 'report.css', 'vis-timeline-graph2d.css', & etc. --%>

<c:set var="WindowFont" value="'Open Sans', sans-serif, Verdana, Arial, Helvetica"/>

.login-box-header-txt {
	font-weight: bold;
}

.desktop-header-font {
	font-family: ${WindowFont};
	font-size: 10px;
}

div.z-listbox-header th.z-list-header-sort div.z-list-header-cnt {
	font-family: ${WindowFont};
}

.z-listbox,
.z-list-item {
	font-family: ${WindowFont};
}

.z-combobox-inp,
.z-combobox-inp,
.z-textbox,
.z-decimalbox,
.z-checkbox-cnt {
	font-family: ${WindowFont};
}

.z-combobox-disd * {
	font-family: ${WindowFont};
}

.z-combo-item-text {
	font-size: 12px !important;
}

.z-combo-item-inner {
	font-size: 10px !important;
	font-style: italic;
}

.z-toolbar-body span {
	font-size: 11px;
}

.z-tab-seld .z-tab-text {
	font-family: ${WindowFont};
}

.z-west,
.z-center,
.z-east,
.z-north,
.z-south {
	font-family: ${WindowFont};
}

.z-west-header,
.z-center-header,
.z-east-header,
.z-north-header,
.z-south-header {
	font-family: ${WindowFont};
	font-size: 13px;
}

.z-tab .z-tab-text,
.z-tab .z-tab-hl:hover .z-tab-text {
	font-family: ${WindowFont};
}

div.recent-items a {
	text-decoration: none;
}

.adwindow-nav-content {
	font-family: ${WindowFont};
}

.adwindow-navbtn-sel {
	font-weight: bold;
}

.adwindow-navbtn-uns {
	font-weight: normal;
	font-family: ${WindowFont};
}

.status-db {
	font-weight: bold;
}

.status-info {
	font-weight: bold;
}

.message-error-text {
	font-weight: bold;
}

.message-warning-text {
	font-weight: bold;
}

.message-info-text {
	font-weight: bold;
}

.mandatory-decorator-text {
	font-weight: bold;
	font-size: xx-small;
}

div.z-tree-body td.menu-treecell {
	font-size: ${fontSizeM};
	font-weight: normal;
}

div.menu-treecell-cnt {
	font-family: ${WindowFont};
	font-size: ${fontSizeM};
	font-weight: normal;
}

div.z-dottree-body td.menu-treecell {
	font-size: ${fontSizeM};
	font-weight: normal;
}

div.z-filetree-body td.menu-treecell {
	font-size: ${fontSizeM};
	font-weight: normal;
}

div.z-vfiletree-body td.menu-treecell {
	font-size: ${fontSizeM};
	font-weight: normal;
}

.touch-screen-friendly .flat-button {
	font-size: 28px;
}

.touch-screen-friendly .z-list-header-cnt,
.touch-screen-friendly .z-list-cell-cnt {
	font-size: 28px;
}

div.z-list-cell-cnt {
	font-family: ${WindowFont};
}

.touch-screen-friendly .z-textbox,
.touch-screen-friendly .z-intbox,
.touch-screen-friendly .z-decimalbox,
.touch-screen-friendly .z-longbox,
.touch-screen-friendly .z-doublebox {
	font-size: 20px;
}

.touch-screen-friendly .message-screen-info {
	font-size: 30px;
	font-style: oblique;
}

.progress-monitor .z-label {
	font-size: medium;
}

input[type="checkbox"]:checked:after {
	font-size: 14px;
}

.z-window-overlapped-header {
	font-weight: bold !important;
}


<%-- FROM normsaf.css.dsp file - START --%> 

.z-label,
.z-radio-cnt,
.z-checkbox,
.z-checkbox-cnt,
.z-slider-pp,
input.button,
input.file,
.z-loading,
.z-errbox {
	font-family: ${WindowFont};
}

div.z-drop-cnt {
	font-family: ${WindowFont};
}

.z-auxheader-cnt {
	font-family: ${WindowFont};
}

.z-window-modal-header,
.z-window-popup-header,
.z-window-highlighted-header,
.z-window-overlapped-header,
.z-window-embedded-header {
	font-family: ${WindowFont};
}

.z-fieldset legend {
	font-family: ${WindowFont};
}

.z-groupbox-hl .z-groupbox-header {
	font-family: ${WindowFont};
}

.z-toolbar a,
.z-toolbar a:visited,
.z-toolbar a:hover {
	font-family: ${WindowFont};
	margin : 0;
}

.z-toolbar-button {
	font-family: ${WindowFont};
}

.z-button {
	font-family: ${WindowFont};
}

.z-button-os {
	font-family: ${WindowFont};
}

.z-paging td,
.z-paging span,
.z-paging input,
.z-paging div,
.z-paging button {
	font-family: ${WindowFont};
}

.z-paging .z-paging-btn {
	font-family: ${WindowFont};
}

.z-panel-header {
	font-family: ${WindowFont};
}

.z-panel-hm .z-panel-header {
	font-family: ${WindowFont};
}

.z-combobox {
	font-family: ${WindowFont};
}

.z-combobox-inp {
	font-family: ${WindowFont};
}

.z-combobox-pp {
	font-family: ${WindowFont};
}

.z-combo-item-text {
	font-family: ${WindowFont};
}

.z-bandbox {
	font-family: ${WindowFont};
}

.z-datebox {
	font-family: ${WindowFont};
}

.z-datebox-pp {
	font-family: ${WindowFont};
}

.z-datebox-timebox-inp {
	font-family: ${WindowFont};
}

.z-timebox-inp {
	font-family: ${WindowFont};
}

.z-spinner-inp {
	font-family: ${WindowFont};
}

.z-timebox-disd {
	font-family: ${WindowFont};
}

.z-calendar {
	font-family: ${WindowFont};
}

.z-textbox,
.z-decimalbox,
.z-intbox,
.z-longbox,
.z-doublebox {
	font-family: ${WindowFont};
}

.z-menubar-hor .z-menu,
.z-menubar-hor .z-menu-item,
.z-menubar-hor .z-menu-btn,
.z-menubar-hor .z-menu-item-btn,
.z-menubar-hor span,
.z-menubar-hor a,
.z-menubar-hor div,
.z-menubar-ver .z-menu,
.z-menubar-ver .z-menu-item,
.z-menubar-ver .z-menu-btn,
.z-menubar-ver .z-menu-item-btn,
.z-menubar-ver span,
.z-menubar-ver a,
.z-menubar-ver div {
	font-family: ${WindowFont};
}

.z-menu-cnt,
.z-menu-item-cnt {
	font-family: ${WindowFont};
}

.z-menu-popup {
	font-family: ${WindowFont};
}

div.z-footer-cnt,
div.z-row-cnt,
div.z-group-cnt,
div.z-group-foot-cnt,
div.z-column-cnt {
	font-family: ${WindowFont};
}

td.z-group-inner {
	font-family: ${WindowFont};
}

.z-group-inner .z-group-cnt span,
.z-group-inner .z-group-cnt {
	font-family: ${WindowFont};
}

.z-group-foot-inner .z-group-foot-cnt span,
.z-group-foot-inner .z-group-foot-cnt {
	font-family: ${WindowFont};
}

div.z-list-footer-cnt,
div.z-list-cell-cnt,
div.z-list-header-cnt {
	font-family: ${WindowFont};
}

td.z-list-group-inner div.z-list-cell-cnt {
	font-family: ${WindowFont};
}

td.z-list-group-foot-inner div.z-list-cell-cnt {
	font-family: ${WindowFont};
}

div.z-treefooter-content,
div.z-treecell-content,
div.z-treecol-content{
	font-family: ${WindowFont};
	padding : 2px;
}

.z-tabs-cnt li {
	font-family: ${WindowFont};
}

.z-tab .z-tab-text {
	font-family: ${WindowFont};
}

.z-tab-seld .z-tab-text {
	font-family: ${WindowFont};
}

.z-tab-disd .z-tab-text,
.z-tab-disd-seld .z-tab-text {
	font-family: ${WindowFont};
}

.z-tabs-ver .z-tabs-ver-cnt li {
	font-family: ${WindowFont};
}

.z-tab-ver .z-tab-ver-text {
	font-family: ${WindowFont};
}

.z-tab-accordion-text {
	font-family: ${WindowFont};
}

<%-- FROM normsaf.css.dsp file - END --%>

.z-treecell-content {
	line-height: 16px;
	overflow: visible;
}

.z-treecell-content .checkbox{
	float : right;
}