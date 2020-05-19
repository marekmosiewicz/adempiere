/******************************************************************************
 * Product: Adempiere ERP & CRM Smart Business Solution                       *
 * This program is free software; you can redistribute it and/or modify it    *
 * under the terms version 2 of the GNU General Public License as published   *
 * by the Free Software Foundation. This program is distributed in the hope   *
 * that it will be useful, but WITHOUT ANY WARRANTY; without even the implied *
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.           *
 * See the GNU General Public License for more details.                       *
 * You should have received a copy of the GNU General Public License along    *
 * with this program; if not, write to the Free Software Foundation, Inc.,    *
 * 59 Temple Place, Suite 330, Boston, MA 02111-1307 USA.                     *
 * For the text or an alternative of this public license, you may reach us    *
 * Copyright (C) 2003-2014 e-Evolution,SC. All Rights Reserved.               *
 * Contributor(s): Victor Perez www.e-evolution.com                           *
 *****************************************************************************/

package org.adempiere.webui.component;

import org.adempiere.webui.apps.AEnv;
import org.compiere.model.Obscure;
import org.zkoss.zk.ui.WrongValueException;
import org.zkoss.zk.ui.event.EventListener;
import org.zkoss.zk.ui.event.Events;
import org.zkoss.zul.Constraint;
import org.zkoss.zul.Div;

/**
 * @author e-Evolution , victor.perez@e-evolution.com
 *    <li>Implement embedded or horizontal tab panel https://adempiere.atlassian.net/browse/ADEMPIERE-319
 *    <li>New ADempiere 3.8.0 ZK Theme Light  https://adempiere.atlassian.net/browse/ADEMPIERE-320
 */

public class StringBox extends org.zkoss.zul.Textbox
{
    /**
	 * 
	 */
	private static final long serialVersionUID = 7089099079981906933L;

	//private Textbox textbox = null;
	
	private Obscure	m_obscure = null;

    
	public boolean isReadonly()
	{
		return super.isReadonly();
	}
        /**
     * 
     * @param integral
     */
    public StringBox()
    {
        super();
        init();
    }
    
    private void init()
    {
		String style = AEnv.isFirefox2() ? "display: inline" : "display: inline-block"; 
        style = style + ";white-space:nowrap";
        super.setStyle(style);	     
    }
    
    
    
    
    
    /**
     * 
     * @param value
     */
    public void setValue(Object value)
    {
    	if (value == null)
    		super.setValue(null);
    	else
    		super.setValue(value.toString());
    }
    
    /**
     * 
     * @return BigDecimal
     */
    public String getValue()
    {
    	return super.getValue();
    }
    
	/**
	 * 
	 * @return boolean
	 */
	public boolean isEnabled()
	{
		 return super.isReadonly();
	}
	
	/**
     * method to ease porting of swing form
     * @param listener
     */
	public void addFocusListener(EventListener listener) {
		super.addEventListener(Events.ON_FOCUS, listener);
		super.addEventListener(Events.ON_BLUR, listener);
	}
	
	@Override
	public boolean addEventListener(String evtnm, EventListener listener)
	{
	     
	         return super.addEventListener(evtnm, listener);
	     
	}
	
	@Override
	public void focus()
	{
		super.focus();
	}
	
	public org.zkoss.zul.Textbox getTextBox()
	{
		return this;
	}
	@Override
	public boolean isDisabled() {
		return super.isDisabled();
	}
	@Override
	public void setDisabled(boolean disabled) {
		super.setDisabled(disabled);
	}
	@Override
	public void setReadonly(boolean readonly) {
		super.setReadonly(readonly);
	}
	@Override
	public String getName() {
		return super.getName();
	}
	@Override
	public void setName(String name) {
		super.setName(name);
	}
	@Override
	public String getErrorMessage() {
		return super.getErrorMessage();
	}
	@Override
	public void clearErrorMessage(boolean revalidateRequired) {
		super.clearErrorMessage(revalidateRequired);
	}
	@Override
	public void clearErrorMessage() {
		super.clearErrorMessage();
	}
	@Override
	public String getText() throws WrongValueException {
		return super.getText();
	}
	@Override
	public void setText(String value) throws WrongValueException {
		super.setText(value);
	}
	@Override
	public int getMaxlength() {
		return super.getMaxlength();
	}
	@Override
	public void setMaxlength(int maxlength) {
		super.setMaxlength(maxlength);
	}
	@Override
	public int getCols() {
		return super.getCols();
	}
	@Override
	public void setCols(int cols) throws WrongValueException {
		super.setCols(cols);
	}
	@Override
	public int getTabindex() {
		return super.getTabindex();
	}
	@Override
	public void setTabindex(int tabindex) throws WrongValueException {
		super.setTabindex(tabindex);
	}
	@Override
	public boolean isMultiline() {
		return super.isMultiline();
	}
	@Override
	public String getType() {
		return super.getType();
	}
	@Override
	public void select() {
		super.select();
	}
	@Override
	public void setConstraint(String constr) {
		super.setConstraint(constr);
	}
	@Override
	public Object getRawValue() {
		return super.getRawValue();
	}
	@Override
	public String getRawText() {
		return super.getRawText();
	}
	@Override
	public void setRawValue(Object value) {
		super.setRawValue(value);
	}
	@Override
	public boolean isValid() {
		return super.isValid();
	}
	@Override
	public void setSelectedText(int start, int end, String newtxt,
			boolean isHighLight) {
		super.setSelectedText(start, end, newtxt, isHighLight);
	}
	@Override
	public void setSelectionRange(int start, int end) {
		super.setSelectionRange(start, end);
	}
	//FIXME ZK9
	//@Override
	//public String getAreaText() {
	//	return super.getText();
	//}
	@Override
	public void setConstraint(Constraint constr) {
		super.setConstraint(constr);
	}
	@Override
	public Constraint getConstraint() {
		return super.getConstraint();
	}
	@Override
	public void setValue(String value) throws WrongValueException {
		super.setValue(value);
	}
	@Override
	public void setType(String type) throws WrongValueException {
		super.setType(type);
	}
	@Override
	public int getRows() {
		return super.getRows();
	}
	@Override
	public void setRows(int rows) throws WrongValueException {
		super.setRows(rows);
	}
	@Override
	public void setMultiline(boolean multiline) {
		super.setMultiline(multiline);
	}
	
	public void setObscureType(String obscureType)
    {
    	if (obscureType != null && obscureType.length() > 0)
		{
			m_obscure = new Obscure ("", obscureType);
		}
    	else
    	{
    		m_obscure = null;
    	}
    	setValue(getValue());
    }
	
	public void setWidth(String width)
	{
		super.setWidth(width);
	}
	
	public void setHeight(String height)
	{
		super.setHeight(height);
	}
	
}
