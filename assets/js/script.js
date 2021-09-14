
'use strict';

    

$(document).ready(function () {
    // $('#myNavbar .dropdown').hover(function(){
    //     $(this).addClass('open')
    // })

    // $('#myNavbar .dropdown').mouseout(function(){
    //     $(this).removeClass('open')
    // })
    

    $('#fncloseid').on('click touchstart', function(){
        $('.positionbottombanner').hide();
        // $('.positionbottombanner').css({'position': 'inherit !importent'})
    })
        
    //debugger;
	var browserName  = window.navigator.appName;
		if(browserName.includes('internet explorer')){
			$('#alertModal').modal({
				show:true,
				backdrop: 'false',
			})
		}

                //$('.lazy').lazy();
                $('[data-toggle="tooltip"]').tooltip();

	
	
    var WH = $(window).height();
    $('#myCarousel .carousel-inner img').height(WH);



debugger;
    var obj = [];
    $.get('prop.txt',  function (data) {
        var content = data;

        var LinesToRead = content.split('\n');

        $.each(LinesToRead, function (index, item) {
            if (item.includes(":")) {
                var key = item.split(":")[0].trim();
                var value = escape(item.split(":")[1].trim());
                obj[key] = unescape(value);
            }
        })

        //console.log(obj.WebSiteName);

        ko.applyBindings(new ViewModel(obj));
    }, 'text');


    var ViewModel = function (obj) {
        this.WebSiteName = ko.observable(obj.WebSiteName);
        this.heading = ko.observable(obj.heading);
        this.title = ko.observable(obj.title);
        this.BannerImage_1_Title = ko.observable(obj.BannerImage_1_Title);
        this.BannerImage_1_Text = ko.observable(obj.BannerImage_1_Text);
        this.BannerImage_2_Title = ko.observable(obj.BannerImage_2_Title);
        this.BannerImage_2_Text = ko.observable(obj.BannerImage_2_Text);
        this.BannerImage_3_Title = ko.observable(obj.BannerImage_3_Title);
        this.BannerImage_3_Text = ko.observable(obj.BannerImage_3_Text);
        this.IndexShortTextAfterBanner = ko.observable(obj.IndexShortTextAfterBanner);
		this.IndexShortTextAfterBanner2 = ko.observable(obj.IndexShortTextAfterBanner2);
		this.IndexShortTextAfterBanner3 = ko.observable(obj.IndexShortTextAfterBanner3);
        this.IndexPhotoTitle_1 = ko.observable(obj.IndexPhotoTitle_1);
        this.IndexPhotoText_1 = ko.observable(obj.IndexPhotoText_1);
        this.IndexPhotoTitle_2 = ko.observable(obj.IndexPhotoTitle_2);
        this.IndexPhotoText_2 = ko.observable(obj.IndexPhotoText_2);
        this.IndexPhotoTitle_3 = ko.observable(obj.IndexPhotoTitle_3);
        this.IndexPhotoText_3 = ko.observable(obj.IndexPhotoText_3);
        this.CompanyName = ko.observable(obj.CompanyName);
        this.phone = ko.observable(obj.phone);
        this.fax = ko.observable(obj.fax);
        this.email = ko.observable(obj.email);

        this.PrivacyPolicyBannerTitle = ko.observable(obj.PrivacyPolicyBannerTitle);
        this.PrivacyPolicyBannerText = ko.observable(obj.PrivacyPolicyBannerText);
        this.PrivacyPolicyText = ko.observable(obj.PrivacyPolicyText);
        this.PrivacyPolicyPoint_1 = ko.observable(obj.PrivacyPolicyPoint_1);
        this.PrivacyPolicyPoint_2 = ko.observable(obj.PrivacyPolicyPoint_2);
        this.PrivacyPolicyPoint_3 = ko.observable(obj.PrivacyPolicyPoint_3);

        this.TermsConditionsBannerTitle = ko.observable(obj.TermsConditionsBannerTitle);
        this.TermsConditionsBannerText = ko.observable(obj.TermsConditionsBannerText);
        this.TermsConditionsText = ko.observable(obj.TermsConditionsText);
        this.TermsConditionsPoint_1 = ko.observable(obj.TermsConditionsPoint_1);
        this.TermsConditionsPoint_2 = ko.observable(obj.TermsConditionsPoint_2);
        this.TermsConditionsPoint_3 = ko.observable(obj.TermsConditionsPoint_3);
        this.TermsConditionsPoint_4 = ko.observable(obj.TermsConditionsPoint_4);
        this.TermsConditionsPoint_5 = ko.observable(obj.TermsConditionsPoint_5);
        this.TermsConditionsPoint_6 = ko.observable(obj.TermsConditionsPoint_6);
        this.TermsConditionsPoint_7 = ko.observable(obj.TermsConditionsPoint_7);
        this.TermsConditionsPoint_8 = ko.observable(obj.TermsConditionsPoint_8);
        this.TermsConditionsPoint_9 = ko.observable(obj.TermsConditionsPoint_9);
        this.TermsConditionsPoint_10 = ko.observable(obj.TermsConditionsPoint_10);
        this.TermsConditionsPoint_11 = ko.observable(obj.TermsConditionsPoint_11);
        this.TermsConditionsPoint_12 = ko.observable(obj.TermsConditionsPoint_12);
        this.TermsConditionsPoint_13 = ko.observable(obj.TermsConditionsPoint_13);
        this.TermsConditionsPoint_14 = ko.observable(obj.TermsConditionsPoint_14);
        this.TermsConditionsPoint_15 = ko.observable(obj.TermsConditionsPoint_15);
        this.TermsConditionsPoint_16 = ko.observable(obj.TermsConditionsPoint_16);
        this.TermsConditionsPoint_17 = ko.observable(obj.TermsConditionsPoint_17);
        this.TermsConditionsPoint_18 = ko.observable(obj.TermsConditionsPoint_18);
        this.TermsConditionsPoint_19 = ko.observable(obj.TermsConditionsPoint_19);
        this.TermsConditionsPoint_20 = ko.observable(obj.TermsConditionsPoint_20);
        this.TermsConditionsPoint_21 = ko.observable(obj.TermsConditionsPoint_21);
        this.TermsConditionsPoint_22 = ko.observable(obj.TermsConditionsPoint_22);
        this.TermsConditionsPoint_23 = ko.observable(obj.TermsConditionsPoint_23);
        this.TermsConditionsPoint_24 = ko.observable(obj.TermsConditionsPoint_24);
        this.TermsConditionsPoint_25 = ko.observable(obj.TermsConditionsPoint_25);
        this.TermsConditionsPoint_26 = ko.observable(obj.TermsConditionsPoint_26);
        this.TermsConditionsPoint_27 = ko.observable(obj.TermsConditionsPoint_27);
        this.TermsConditionsPoint_28 = ko.observable(obj.TermsConditionsPoint_28);
        this.TermsConditionsConclusion = ko.observable(obj.TermsConditionsConclusion);


        this.AccommodationsBannerTitle = ko.observable(obj.AccommodationsBannerTitle);
        this.AccommodationsBannerText = ko.observable(obj.AccommodationsBannerText);
        this.AccommodationsTitle = ko.observable(obj.AccommodationsTitle);
        this.AccommodationsText = ko.observable(obj.AccommodationsText);

        this.facility_fh_Title_1 = ko.observable(obj.facility_fh_Title_1);
        this.facility_fh_Text_1 = ko.observable(obj.facility_fh_Text_1);
        this.facility_fh_Text_2 = ko.observable(obj.facility_fh_Text_2);
        this.facility_fh_Text_3 = ko.observable(obj.facility_fh_Text_3);
        this.facility_fh_Text_4 = ko.observable(obj.facility_fh_Text_4);
        this.facility_fh_Text_5 = ko.observable(obj.facility_fh_Text_5);
        this.facility_fh_Text_6 = ko.observable(obj.facility_fh_Text_6);
        this.facility_fh_Text_7 = ko.observable(obj.facility_fh_Text_7);
        this.facility_fh_Text_8 = ko.observable(obj.facility_fh_Text_8);
        this.facility_fh_Text_9 = ko.observable(obj.facility_fh_Text_9);
        this.facility_fh_Text_10 = ko.observable(obj.facility_fh_Text_10);
        this.facility_fh_Text_11 = ko.observable(obj.facility_fh_Text_11);
        this.facility_fh_Text_12 = ko.observable(obj.facility_fh_Text_12);
        this.facility_fh_Text_13 = ko.observable(obj.facility_fh_Text_13);
        this.facility_fh_Text_14 = ko.observable(obj.facility_fh_Text_14);
        this.facility_fh_Text_15 = ko.observable(obj.facility_fh_Text_15);
        this.facility_fh_Text_16 = ko.observable(obj.facility_fh_Text_16);
        this.facility_fh_Text_17 = ko.observable(obj.facility_fh_Text_17);
        this.facility_fh_Text_18 = ko.observable(obj.facility_fh_Text_18);
        this.facility_fh_Text_19 = ko.observable(obj.facility_fh_Text_19);
        this.facility_fh_Text_20 = ko.observable(obj.facility_fh_Text_20);
        this.facility_fh_Text_21 = ko.observable(obj.facility_fh_Text_21);
        this.facility_fh_Text_22 = ko.observable(obj.facility_fh_Text_22);
        this.facility_fh_Text_23 = ko.observable(obj.facility_fh_Text_23);
        this.facility_fh_Text_24 = ko.observable(obj.facility_fh_Text_24);

        this.facility_0_Title_1 = ko.observable(obj.facility_0_Title_1);
        this.facility_0_Title_2 = ko.observable(obj.facility_0_Title_2);
        this.facility_0_Title_3 = ko.observable(obj.facility_0_Title_3);
        this.facility_0_Title_4 = ko.observable(obj.facility_0_Title_4);
        this.facility_0_Title_5 = ko.observable(obj.facility_0_Title_5);
        this.facility_0_Title_6 = ko.observable(obj.facility_0_Title_6);

        this.facility_1_Title_1 = ko.observable(obj.facility_1_Title_1);
        this.facility_1_Text_1 = ko.observable(obj.facility_1_Text_1);
        this.facility_1_Text_2 = ko.observable(obj.facility_1_Text_2);
        this.facility_1_Text_3 = ko.observable(obj.facility_1_Text_3);
        this.facility_1_Text_4 = ko.observable(obj.facility_1_Text_4);
        this.facility_1_Text_5 = ko.observable(obj.facility_1_Text_5);
        this.facility_1_Text_6 = ko.observable(obj.facility_1_Text_6);
        this.facility_1_Text_7 = ko.observable(obj.facility_1_Text_7);
        this.facility_1_Text_8 = ko.observable(obj.facility_1_Text_8);
        this.facility_1_Text_9 = ko.observable(obj.facility_1_Text_9);
        this.facility_1_Text_10 = ko.observable(obj.facility_1_Text_10);
        this.facility_1_Text_11 = ko.observable(obj.facility_1_Text_11);
        this.facility_1_Text_12 = ko.observable(obj.facility_1_Text_12);
        this.facility_1_Text_13 = ko.observable(obj.facility_1_Text_13);
        this.facility_1_Text_14 = ko.observable(obj.facility_1_Text_14);
        this.facility_1_Text_15 = ko.observable(obj.facility_1_Text_15);
        this.facility_1_Text_16 = ko.observable(obj.facility_1_Text_16);
        this.facility_1_Text_17 = ko.observable(obj.facility_1_Text_17);
		this.facility_1_Text_18 = ko.observable(obj.facility_1_Text_18);
		this.facility_1_Text_19 = ko.observable(obj.facility_1_Text_19);
		this.facility_1_Text_20 = ko.observable(obj.facility_1_Text_20);
		this.facility_1_Text_21 = ko.observable(obj.facility_1_Text_21);
		this.facility_1_Text_22 = ko.observable(obj.facility_1_Text_22);
		this.facility_1_Text_23 = ko.observable(obj.facility_1_Text_23);
        this.facility_1_Text_24 = ko.observable(obj.facility_1_Text_24);
		this.facility_1_Text_25 = ko.observable(obj.facility_1_Text_25);
		this.facility_1_Text_26 = ko.observable(obj.facility_1_Text_26);
		this.facility_1_Text_27 = ko.observable(obj.facility_1_Text_27);

        this.facility_2_Title_1 = ko.observable(obj.facility_2_Title_1);
        this.facility_2_Text_1 = ko.observable(obj.facility_2_Text_1);
        this.facility_2_Text_2 = ko.observable(obj.facility_2_Text_2);
        this.facility_2_Text_3 = ko.observable(obj.facility_2_Text_3);
        this.facility_2_Text_4 = ko.observable(obj.facility_2_Text_4);
        this.facility_2_Text_5 = ko.observable(obj.facility_2_Text_5);
        this.facility_2_Text_6 = ko.observable(obj.facility_2_Text_6);
        this.facility_2_Text_7 = ko.observable(obj.facility_2_Text_7);
        this.facility_2_Text_8 = ko.observable(obj.facility_2_Text_8);
        this.facility_2_Text_9 = ko.observable(obj.facility_2_Text_9);
        this.facility_2_Text_10 = ko.observable(obj.facility_2_Text_10);
        this.facility_2_Text_11 = ko.observable(obj.facility_2_Text_11);
        this.facility_2_Text_12 = ko.observable(obj.facility_2_Text_12);
        this.facility_2_Text_13 = ko.observable(obj.facility_2_Text_13);
        this.facility_2_Text_14 = ko.observable(obj.facility_2_Text_14);
        this.facility_2_Text_15 = ko.observable(obj.facility_2_Text_15);
		this.facility_2_Text_16 = ko.observable(obj.facility_2_Text_16);
		this.facility_2_Text_17 = ko.observable(obj.facility_2_Text_17);
		this.facility_2_Text_18 = ko.observable(obj.facility_2_Text_18);
		this.facility_2_Text_19 = ko.observable(obj.facility_2_Text_19);
		this.facility_2_Text_20 = ko.observable(obj.facility_2_Text_20);
		this.facility_2_Text_21 = ko.observable(obj.facility_2_Text_21);
		this.facility_2_Text_22 = ko.observable(obj.facility_2_Text_22);
		this.facility_2_Text_23 = ko.observable(obj.facility_2_Text_23);
		this.facility_2_Text_24 = ko.observable(obj.facility_2_Text_24);

        this.facility_3_Title_1 = ko.observable(obj.facility_3_Title_1);
        this.facility_3_Text_1 = ko.observable(obj.facility_3_Text_1);
        this.facility_3_Text_2 = ko.observable(obj.facility_3_Text_2);
        this.facility_3_Text_3 = ko.observable(obj.facility_3_Text_3);
        this.facility_3_Text_4 = ko.observable(obj.facility_3_Text_4);
        this.facility_3_Text_5 = ko.observable(obj.facility_3_Text_5);
        this.facility_3_Text_6 = ko.observable(obj.facility_3_Text_6);
        this.facility_3_Text_7 = ko.observable(obj.facility_3_Text_7);
        this.facility_3_Text_8 = ko.observable(obj.facility_3_Text_8);
        this.facility_3_Text_9 = ko.observable(obj.facility_3_Text_9);
        this.facility_3_Text_10 = ko.observable(obj.facility_3_Text_10);
        this.facility_3_Text_11 = ko.observable(obj.facility_3_Text_11);
		this.facility_3_Text_12 = ko.observable(obj.facility_3_Text_12);
		this.facility_3_Text_13 = ko.observable(obj.facility_3_Text_13);
		this.facility_3_Text_14 = ko.observable(obj.facility_3_Text_14);
		this.facility_3_Text_15 = ko.observable(obj.facility_3_Text_15);
		this.facility_3_Text_16 = ko.observable(obj.facility_3_Text_16);
		this.facility_3_Text_17 = ko.observable(obj.facility_3_Text_17);
		this.facility_3_Text_18 = ko.observable(obj.facility_3_Text_18);
		this.facility_3_Text_19 = ko.observable(obj.facility_3_Text_19);
		this.facility_3_Text_20 = ko.observable(obj.facility_3_Text_20);
		this.facility_3_Text_21 = ko.observable(obj.facility_3_Text_21);
		
        this.AboutBannerTitle = ko.observable(obj.AboutBannerTitle);
        this.AboutBannerText = ko.observable(obj.AboutBannerText);
		this.AboutTitle = ko.observable(obj.AboutTitle);
        this.AboutText = ko.observable(obj.AboutText);
		this.AboutText2 = ko.observable(obj.AboutText2);
		this.AboutText3 = ko.observable(obj.AboutText3);
        this.AboutBackgroundText = ko.observable(obj.AboutBackgroundText);


        this.ContactBannerTitle = ko.observable(obj.ContactBannerTitle);
        this.BottomBannerText = ko.observable(obj.BottomBannerText);

        this.BottomBannerText = ko.observable(obj.BottomBannerText);
		this.SocialNetwork_instagram = ko.observable('https://' + obj.SocialNetwork_instagram);
        this.SocialNetwork_facebook = ko.observable('https://' + obj.SocialNetwork_facebook);
        this.SocialNetwork_twitter = ko.observable('https://' + obj.SocialNetwork_twitter);
        this.SocialNetwork_linkedIn = ko.observable('https://' + obj.SocialNetwork_linkedIn);
        this.SocialNetwork_Pinterest = ko.observable('https://' + obj.SocialNetwork_Pinterest);
        this.SocialNetwork_youtube = ko.observable('https://' + obj.SocialNetwork_youtube);
        this.SocialNetwork_whatsapp = ko.observable('https://' + obj.SocialNetwork_whatsapp);
		this.SocialNetwork_whatsapp_desks = ko.observable('https://' + obj.SocialNetwork_whatsapp_desks);
        this.SocialNetwork_blog = ko.observable('https://' + obj.SocialNetwork_blog);
        this.SocialNetwork_fbMessenger = ko.observable('https://' + obj.SocialNetwork_fbMessenger);

        this.BookingBannerTitle = ko.observable(obj.BookingBannerTitle);
        this.BookingBannerText = ko.observable(obj.BookingBannerText);
        this.Booking_Whatsapp = ko.observable(obj.Booking_Whatsapp);
        this.Booking_Phone = ko.observable(obj.Booking_Phone);
        this.Booking_Email = ko.observable(obj.Booking_Email);
        this.Booking_Phone1 = ko.observable('tel:' + obj.Booking_Phone);
        this.Booking_Email1 = ko.observable('mailto:'  + obj.Booking_Email);
        this.Booking_Desks_Phone1 = ko.observable('tel:' + obj.Booking_Desks_Phone1);
        this.Booking_Desks_Email1 = ko.observable('mailto:'  + obj.Booking_Desks_Email1);
    };



});