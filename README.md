### Simple Contacts with JQueryMobile + BootStrap
Dissect a JSON file of contacts into a list page of contacts marked by badges with a details page with formatted data. Ability to search the data with numbers and names</p>
<h1>Useful for hosting your own contacts directory online, for school or friends, or can even be altered for a list of various forms of data

![List View]("http://i.imgur.com/ZDoIFwU.png" "List View")
![List View]("http://i.imgur.com/UQyctQd.png?1" "Details Page")

## Default JSON Format

`[{
		id:"",
		"position":"",
		"lname":"",
		"fname":"",
		"dayPhone":"",
		"cellPhone":"",
		"eveningPhone":"",
		"picture":""
	}]`

If the format is altered, it must be altered in the main.js such as in the sorting function
`//sort the list of contents alphabetically
 	data.sort(sort_by("fname", true, function (a) {
                    return a.toUpperCase()
    	}));
`
## Showing JSON data to HTML
Just use the html function, pass the object and key. 
Variable such as contact.fname and contact.lname may be changed if changed in the JSON file.

`$("div.name").html(contact.fname + " " + contact.lname);`
If you're using the GitHub for Mac, simply sync your repository and you'll see the new branch.

## HTML file should have: 
`<div data-role="page" id="contact-details">

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
    </div><!-- /page -->`