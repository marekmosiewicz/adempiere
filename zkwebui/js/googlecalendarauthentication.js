/*******************************************************************************
 * Copyright (C) 2017 Adaxa Pty Ltd. All Rights Reserved. This program is free
 * software; you can redistribute it and/or modify it under the terms version 2
 * of the GNU General Public License as published by the Free Software
 * Foundation. This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 ******************************************************************************/
/*******************************************************************************
 * Google calendar Authentication for accessing calendar
 * 
 * @author Sachin Bhimani @ Logilite
 * @since June 20, 2018
 *******************************************************************************/

function GoogleCalendarAuthentication()
{
	this.createUserAuthCode = createUserAuthCode;

	var btn;
	var AD_User_ID;
	var GoogleAuth;
	var isFireSyncEvent;


	// Enter a client ID for a web application from the Google API Console: https://console.developers.google.com/apis/credentials?project=_ In your API Console project, add a JavaScript origin that corresponds to the domain where you will be running the script.
	var gcClientID;


	// Enter one or more authorization scopes. Refer to the documentation for the API or https://developers.google.com/people/v1/how-tos/authorizing for details.
	var SCOPE = 'https://www.googleapis.com/auth/calendar';

	function createUserAuthCode(ad_user_id, btn_id, fire_sync_event, gc_client_id)
	{
		AD_User_ID = ad_user_id;
		gcClientID = gc_client_id;
		isFireSyncEvent = fire_sync_event;

		if (gcClientID === undefined || gcClientID === null || gcClientID === "")
		{
			alert('Please specify Google Calendar configuration for Client ID.');
			return;
		}

		if (btn_id !== undefined && btn_id !== null && btn_id !== "")
			btn = document.getElementById(btn_id);

		// Load the API's client and auth2 modules.
		// Call the initClient function after the modules load.
		gapi.load('client:auth2', initClient);
	} // createUserAuthCode

	function initClient()
	{
		// Initialize the gapi.client object, which app uses to make API requests.
		// Get API key and client ID from API Console.
		// 'scope' field specifies space-delimited list of access scopes.
		gapi.client.init(
			{
				'scope': SCOPE,
				'clientId': gcClientID
			})
			.then(function ()
			{
				GoogleAuth = gapi.auth2.getAuthInstance();
				if (GoogleAuth === undefined || GoogleAuth === null)
				{
					alert("Something went wrong!!! Please verify Client ID.");
					return;
				}

        // Call handleAuthClick function for generating 'response_type' code
				handleAuthClick();
			});
	} // createUserAuthCode

	function handleAuthClick()
	{
		GoogleAuth.grantOfflineAccess().then(

				// for success
				function (resp)
				{
					if (resp.code)
					{
						var auth_code = resp.code;
						zkEvent(auth_code, 'SAVE');
					}
					else
					{
						alert("Something went wrong!!! " + resp);
						console.log("Something went wrong!!! " + resp);
					}
				},

				// for failure
				function (error)
				{
					var err;
					if (typeof error.error == 'string')
						err = error.error;
					else
						err = error;

					if (err === 'popup_blocked_by_browser')
						alert('A popup has been blocked by the browser, Please enable and try again');
					else if (err === 'access_denied')
						alert('Denied the permission for Sync event to Google Calendar.');
					else if (err === 'popup_closed_by_user')
						console.log(err);
					else if (err === 'immediate_failed')
						// Error raised when using signIn with
						// prompt:'none' option.
						console.log(err);
					else
						console.log(err);
				});
	} // handleAuthClick

	function zkEvent(auth_code, operation)
	{
		var uid = null;
		if (btn)
			uid = btn.id;

		zkau.send(
		{
			uuid: uid,
			cmd: 'onGoogleSignEvent',
			data: [AD_User_ID, auth_code, operation, isFireSyncEvent],
			ctl: true
		});
	} // zkEvent
}

var googleCalendarAuthentication = new GoogleCalendarAuthentication();

// Reference from:
// https://developers.google.com/api-client-library/javascript/samples/samples
// https://developers.google.com/identity/sign-in/web/server-side-flow