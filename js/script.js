var length = [];


$(window).resize(function() {
    setMargins(); 


    length[0] = 0;
    length[1] = $('#sticky-container-1').height() + $('#sticky-container-1').position().top;
    length[2] = $('#sticky-container-2').height() + $('#sticky-container-2').position().top; 

    console.log($('#sticky-wrapper-1').offset().top + ":" + length[1]);
    console.log($('#sticky-wrapper-2').offset().top);

    if ($(window).width() < 640) {

        $('#sticky-content-1').css({
            'position': 'relative',
            'top': 0,
            'visibility': 'visible'

        });

        $('#sticky-content-2').css({
            'position': 'relative',
            'top': 0,
            'visibility': 'visible'
        });
    }

});

$(document).ready(function () {

    initButtons();
    ////////////////////////////
    //STICKY CONTAINERS
    var container = window;
    if (get_browser_info().name == "Chrome" || get_browser_info().name == "MSIE") {
        container = "#parallax-container";
    }

    length[0] = 0;
    length[1] = $('#sticky-container-1').height() + $('#sticky-container-1').position().top;
    length[2] = $('#sticky-container-2').height() + $('#sticky-container-2').position().top;
    
        
    // console.log(length);
    console.log(get_browser_info().name);
    

    $(container).scroll(function () {
        console.log('scrolling');
            for (var i = 1; i < 3; i++) {
        if($(window).width() > 640) {
                var scroll = -$('#sticky-wrapper-' + i).offset().top;
                // console.log($('#sticky-container-' + i).height());
                    console.log(i + ":" + length[i] + ":" + $('#sticky-container-' + i).height() + ":" + scroll);

                // console.log($(this));
                var height = $('#sticky-content-' + i).height() + 'px';
                
                if (scroll < 0) {
                    $('#sticky-content-' + i).css({
                            'visibility': 'visible'
                            // 'position': 'fixed',
                            // 'top': length[i] + $(window).height()/2, //- $('#sticky-content-' + i).height()/2, //scroll + $(window).height()/2 - $('#sticky-content-' + i).height()/2, //scroll + $(window).height - $('.sticky-content').height()/2,
                            // 'height': height
                        });

                    console.log(i + ":" + "ok!");
                    $('#sticky-content-' + i).css({
                        'position': 'absolute',
                        'top': $(window).height()/2 - $('#sticky-content-' + i).height()/2
                    });

                } else if (scroll + $(window).height() < length[i]) {
                    console.log(i + ":" + "else if");

                    $('#sticky-content-' + i).css({
                            'visibility': 'visible'
                            // 'position': 'fixed',
                            // 'top': length[i] + $(window).height()/2, //- $('#sticky-content-' + i).height()/2, //scroll + $(window).height()/2 - $('#sticky-content-' + i).height()/2, //scroll + $(window).height - $('.sticky-content').height()/2,
                            // 'height': height
                        });

                    if (i == 1) {
                        $('#sticky-content-' + i).css({
                        'position': 'absolute',
                        // 'bottom': '-500',
                        'top': scroll + $(window).height()/2 - $('#sticky-content-' + i).height()/2
                    });
                    } else {
                        $('#sticky-content-' + i).css({
                        'position': 'absolute',
                        // 'bottom': '-500',
                        'top': scroll + $(window).height()/2 - $('#sticky-content-' + i).height()/2

                        // 'top': length[i] - length[i-1] - $(window).height()/2 -  $('#sticky-content-' + i).height()//releaseLength[i] - $('#sticky-container-' + i).height() - $('#sticky-content-' + i).height()/2
                    });
                    }
                    

                } else {
                        console.log(i + ":" + "else");


                    
                        $('#sticky-content-' + i).css({
                            'visibility': 'hidden'
                            // 'position': 'fixed',
                            // 'top': length[i] + $(window).height()/2, //- $('#sticky-content-' + i).height()/2, //scroll + $(window).height()/2 - $('#sticky-content-' + i).height()/2, //scroll + $(window).height - $('.sticky-content').height()/2,
                            // 'height': height
                        });
                    
                        $('#sticky-content-' + i).css({
                            'position': 'fixed',
                            'top': length[i] + length[i-1] + $(window).height()/2 - $('#sticky-content-' + i).height()/2, //scroll + $(window).height()/2 - $('#sticky-content-' + i).height()/2, //scroll + $(window).height - $('.sticky-content').height()/2,
                            'height': height
                        });
                    

                }


        } else {
            $('#sticky-content-' + i).css({
                        'position': 'relative',
                        'visibility': 'visible'
                        // 'top': 50
                    });
        }
            };
        
        setMargins();

            // console.log($('.sticky-container').height());
    });

    


});




function setMargins() {
    for (var i = 1; i < 3; i++) {
    width = $('#sticky-content-' + i).width();
    containerWidth = $('#sticky-container-' + i).width();  
    leftMargin = (containerWidth-width)/2;    
    $('#sticky-content-' + i).css("marginLeft", leftMargin);  
    // console.log(leftMargin); 
}
}

function get_browser_info(){
    var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; 
    if(/trident/i.test(M[1])){
        tem=/\brv[ :]+(\d+)/g.exec(ua) || []; 
        return {name:'IE ',version:(tem[1]||'')};
        }   
    if(M[1]==='Chrome'){
        tem=ua.match(/\bOPR\/(\d+)/)
        if(tem!=null)   {return {name:'Opera', version:tem[1]};}
        }   
    M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
    return {
      name: M[0],
      version: M[1]
    };
 }

 function initButtons() {
    $( ".expander" ).click(function() {
        if ($(this).prev().hasClass('hide')) {
            $(this).prev().removeClass('hide').addClass('show');
            $(this).prev().parent().addClass('darken');
            $(this).text('Show Less');
        } else {
            $(this).prev().addClass('hide').removeClass('show');
            $(this).prev().parent().removeClass('darken');
            $(this).text('Learn More');
        }
    });
 }