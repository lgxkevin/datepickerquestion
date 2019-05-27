Symtech Programming Question
=======


## Problem Description

The purpose of this question is to evaluate your ability as a web developer.

The task will have you create a [JQuery plugin][https://learn.jquery.com/plugins/basic-plugin-creation/], which will transform the below input into a datetime picker.
The datetime picker should be initialized with the date returned from `/api/date/` selected initially. 
The endpoint generates a random date, so you will need to request the date from it using AJAX.
You should then be able to pick a different date, and post it to `/api/date/`, with it being correctly parsed into a C# `DateTime` serverside.

Please **do not** copy an existing date-picker plugin, as this is not a test of your ability to find and use existing plugins.

Please spend no more than a few hours on the question, and complete as many of the requirements below as possible.


## Requirements

These requrements are ordered in order of importance. Start at the top, and work your way down.

* Create a JQuery plugin, which is called on an HTML input, to initialize it as a datetime picker, i.e. `$("#datetime").dateTime()`.
* Add a pop-up, which is displayed when the input is clicked on.
* Add time controls to the pop-up, which allow a user to select a time, and set the time component of the input to match the selected time.
* Add date controls to the pop-up, which allow a user to select a date, and set the date component of the input to match the selected date.
* Request a datetime from `/api/date/`, and initialize the date-picker with that datetime.
* Post the currently selected datetime to `/api/date/`, and ensure it is correctly parsed to a C# `DateTime`.