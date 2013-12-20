<h1>Simple Contacts</h1>
<h2>with JQueryMobile + BootStrap</h2>
<p>Dissect a JSON file of contacts into a list page of contacts marked by badges with a details page with formatted data. Ability to search the data with numbers and names</p>
<h1>Useful for hosting your own contacts directory online, for school or friends, or can even be altered for a list of various forms of data</h1>
<br>
<img src="http://i.imgur.com/ZDoIFwU.png">
<img src="http://i.imgur.com/UQyctQd.png?1">
<h2>Default JSON Format</h2>
<code>
	[{
		id:"",
		"position":"",
		"lname":"",
		"fname":"",
		"dayPhone":"",
		"cellPhone":"",
		"eveningPhone":"",
		"picture":""
	}]
</code>

<p>If the format is altered, it must be altered in the main.js</p>
<code>
	//sort the list of contents alphabetically
 	data.sort(sort_by("fname", true, function (a) {
                    return a.toUpperCase()
    	}));
</code>

<h2>Showing JSON data to HTML</h2>
<code>
	$("div.name").html(contact.fname + " " + contact.lname);
</code>
<p>variable such as contact.fname and contact.lname may be changed if changed in the JSON file.</p>

<h2>HTML file should have: </h2>
<code>
	<div data-role="page" id="contact-details">

      <div data-role="header">
            <a id="backbutton" class="header-icon ui-bar-a" data-rel="back" data-role="button"><img src="images/back.png" /></a> 
            <h1>Details</h1>
      </div>

	<div data-role="content" id="details">             

            <span>name</span>
            <div class="name">
            </div>
            
            <span>position</span>
            <div class="position">
            </div>
            
            <span>day phone</span>
            <div class="dayPhone">
            </div>

            <span>cell phone</span>
            <div class="cellPhone">
            </div>

            <span>evening phone</span>
            <div class="eveningPhone">
            </div>

            
            <div class="picture">
            </div> 
    </div>
    </div><!-- /page -->
</code>