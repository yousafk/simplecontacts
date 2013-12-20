$(document).ready(function () {      
           
            //utility sorting function to help sort json object
                var sort_by = function (field, reverse, primer) {
                    var key = function (x) { return primer ? primer(x[field]) : x[field] };

                    return function (a, b) {
                        var A = key(a), B = key(b);
                        return ((A < B) ? -1 : ((A > B) ? 1 : 0)) * [-1, 1][+!!reverse];
                    }
                };
                
            //get_contact by id!
                var get_contact_by_id = function (contact_id) {
                    var contact = "";

                    for (var i = 0; i < contacts.length; i++) {
                        if (contacts[i].id == contact_id) {
                            return contacts[i];
                        }
                    }
                    return contact;
                };

                
            //after the page loads, make ajax call to get he list of contacts
            $.getJSON("contacts.json", function (data) {
             
                //sort the list of contents alphabetically
                data.sort(sort_by("fname", true, function (a) {
                    return a.toUpperCase()
                }));
             
                contacts = data;
             
                //loop through array and create lego elements and append to
                //contact list - http://blog.raavel.com/2013/08/06/lego/
                
                for (var i = 0; i < data.length; i++) {
                    var contact = data[i];

                    var staff;
                    
                    if ( (contact.id < 162) && (contact.position !== "Faculty") )
                    {
                         staff = "Staff";
                    } else 
                    {
                        staff = null;
                    }

                    var dayPhone = String(contact.dayPhone);
                    var eveningPhone = String(contact.eveningPhone);
                    var cellPhone = String(contact.cellPhone);

                    //Search by first name, last name, position, all  numbers 

                    var contant_li = $("<li />", {
                        "data-filtertext":  contact.fname + " " + contact.lname + " " +  "Position " + 
                                            contact.position + " " + dayPhone.replace(/-/gi, '')  + " " + eveningPhone.replace(/-/gi, '') + " " + 
                                            cellPhone.replace(/-/gi,'') + " " + staff

                    });

                    var contant_href = $("<a />", {
                        "text": contact.fname + " " + contact.lname, 
                        "data-contact-id": contact.id
                    });


                    
                        if (contact.position != "Faculty") //Staff
                         {
                             var contant_div = $("<div />", {
                              "text": "Staff",
                              "class": "badge badge-warning"
                             });

                             $(contant_li).append(contant_href);
                             $(contant_href).append(contant_div);
                             $("#main-contact-list").append(contant_li);


                         } else //Faculty
                         {
                             var contant_div = $("<div />", {
                                 "text": contact.position,
                                 "class": "badge badge-success"
                                });

                             $(contant_li).append(contant_href);
                             $(contant_href).append(contant_div);
                             $("#main-contact-list").append(contant_li);
                         }
                }

                //when you add dynamic data to a jquerymobile listview -
                //you have to refresh it
                $("#main-contact-list").listview('refresh');
             
                //hide the ajax loader image and show the listview
               // $("div.loader").hide(0, function () {
                $("#main-contact-list").fadeIn();

                //function to handle the click of a contact
            $("body").delegate("#main-contact-list li a", "tap", function (event, ui) {
                event.preventDefault();
             
                //get the appropriate contact from the json object and paint the details pane
                var contact = get_contact_by_id($(this).attr("data-contact-id"));
                   
                        $("div.name").html(contact.fname + " " + contact.lname);
                        $("div.position").html(contact.position);
                        $("div.dayPhone").html("<a class='ui-link' href='tel:" + contact.dayPhone + "'>" + contact.dayPhone + "</a>");
                        $("div.cellPhone").html("<a class='ui-link' href='tel:" + contact.cellPhone + "'>" + contact.cellPhone + "</a>");
                        $("div.eveningPhone").html("<a class='ui-link' href='tel:" + contact.eveningPhone + "'>" + contact.eveningPhone + "</a>");
                        $("div.picture").html("<img class='profilePic' src='" + contact.picture + "'>");
                        
                        //after the details pane is painted, navigate user to details view
                        $.mobile.changePage("#contact-details", { transition: "slidefade" });
            });
        });
});
