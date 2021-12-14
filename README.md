# Client side:
https://github.com/raegar/tbd-app-2020

# Execution instructions
Run `npm start` in the console. Then send requests to the configured location on port 4000.

# Existing endpoints

## Staff Login
**Type**: GET
**Does**: Logs the user in and returns a token for the front end to use as verification for later endpoints.
**Parameters**:
    "username": string (Example: “lName.fName@ucp.ac.uk”)
    "password": encrypted string (Example: “Password” (but encrypted))
**Returns (if applicable)**:
    "userToken": string (Example: “we0yr897o5fds3ajs1dkl3f”)

## Add Clearing Form Submission:
**Type**: POST
**Does**: Sends the user submitted data to the server to add to the database.
**Parameters**:
    "clearingFormData": Object (Example: See the existing studentDetails.json for now, I’ll add a better example later)

TODO: How do we secure this against malicious attackers flooding us with junk data without making it easy to DDOS? Rate limit from IPs?

## Get Admin Analytics
**Type**: GET
**Does**: Returns data from the server to use for analytics, after checking to make sure the user is valid, that is.
**Parameters**:
    "userToken": string (Example: “we0yr897o5fds3ajs1dkl3f”)
    “requestedData”: array[string] (Example: [“Ethnicity”, “Age”])
**Returns (if applicable)**:
    "returnedData": object (Example: {“Ethnicity”: {data: here}, “Age”: {data: here})

# Endpoint format
**Type**: <POST/GET/other>
**Does**: <describe what this endpoint does>
**Parameters**:
    "parameter_name": <data type> (Example: <example>)
    "parameter_name2": <data type> (Example: <example>)
**Returns (if applicable)**:
    "result_parameter_name": <data type> (Example: <example>)
    "result_parameter_name2": <data type> (Example: <example>)
