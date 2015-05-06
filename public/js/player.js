bootbox.dialog({
                title: "Welcome! Who are you?",
                message: '<div class="row">  ' +
                    '<div class="col-md-12"> ' +
                    '<form class="form-horizontal"> ' +
                    '<div class="form-group"> ' +
                    '<label class="col-md-4 control-label" for="name">Name</label> ' +
                    '<div class="col-md-4"> ' +
                    '<input id="name" name="name" type="text" placeholder="Your name" class="form-control input-md"> ' +
                    '<span class="help-block">Here goes your name</span> </div> ' +
                    '</div> ' +
                    '<div class="form-group"> ' +
                    '<label class="col-md-4 control-label" for="gender">Are you male or female?</label> ' +
                    '<div class="col-md-4"> <div class="radio"> <label for="gender-0"> ' +
                    '<input type="radio" name="gender" id="gender-0" value="male" checked="checked"> ' +
                    'Male</label> ' +
                    '</div><div class="radio"> <label for="gender-1"> ' +
                    '<input type="radio" name="gender" id="gender-1" value="female">Female</label> ' +
                    '</div> ' +
                    '</div> </div>' +
                    '</form> </div>  </div>',
                buttons: {
                    success: {
                        label: "Join!",
                        className: "btn-success",
                        callback: function () {
                            var name = $('#name').val();
                            var gender = $("input[name='gender']:checked").val()
                            
							$(".playerimg .sticker-img").css("background-image","url('/genimage/"+gender+"/"+name+"')")
							$(".playerimg .sticker-img").css("background-size", "contain")
                        }
                    }
                }
            }
        );

Sticker.init('.sticker')









function lose(){
	$("#playerimg").toggleClass('hinge animated');
	
	// do something when animation ends
	$("#playerimg").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){
		bootbox.alert("You're out!")
	});

};