if(jQuery('#loading').length){
var ld=(document.all);
var ns4=document.layers;
var ns6=document.getElementById&&!document.all;
var ie4=document.all;
if (ns4)
    ld=document.loading;
else if (ns6)
    ld=document.getElementById("loading").style;
else if (ie4)
    ld=document.all.loading.style;}
function init()
{
    if(ns4)
    {ld.visibility="hidden";}
    else
    if (ns6||ie4)
        ld.display="none";

}
jQuery( document ).ready( function( jQuery ) {
    if(jQuery('#yop-poll-send-email-notifications-yes').attr("checked")=='checked'){
        jQuery("#yop_poll_email_notification").show();
    }
    else{
        jQuery("#yop_poll_email_notification").hide();
    }

    if( jQuery( '#yop-poll-vote-permisions-guest' ).attr( "checked" ) == 'checked' ) {

        jQuery( '#yop-poll-vote-anonymous' ).show();

    }
    else{
        jQuery( '#yop-poll-vote-anonymous' ).hide();
    }
    jQuery("#yop-poll-edit-add-new-form").css('visibility', 'visible');
    if(jQuery('#yop-poll-send-email-notifications-yes').attr("checked")=='checked'){
        jQuery("#yop_poll_email_notification").show();
    }
  yop_poll_answers_sortable = function() {
    jQuery( ".yop-poll-answers-sortable" ).sortable( {
      update: function( event, ui ) {
        Ordinable = ui.item.parent().find( '.yop-poll-answer-order-input' );
        Ordinable.each( function( index, value ) {
          jQuery( this ).val( parseInt( index + 1 ) );
        } );
      },
      placeholder: "sortable-placeholder",
      forcePlaceholderSize: true,
      cursor: "move"
    } );


  }

  yop_poll_questions_sortable = function() {
    jQuery( ".yop-poll-questions-sortable" ).sortable( {
      update: function( event, ui ) {
        yop_poll_reorder_questions();
      },
      placeholder: "sortable-placeholder",
      forcePlaceholderSize: true,
      cursor: "move"
    } );
  }

  yop_poll_answers_sortable();
  yop_poll_questions_sortable()


  //<editor-fold desc="View Results Checkboxes">
  jQuery( '#yop-poll-view-results-custom' ).change( function() {
    if( jQuery( this ).attr( 'checked' ) == "checked" ) {
      jQuery( '#yop-poll-display-view-results-div' ).css( "display", "block" );
      jQuery( '.yop-poll-view-results-uncheck-nc, #yop-poll-view-results-never' ).attr( 'checked', false );
    }
    else {
      jQuery( '#yop-poll-display-view-results-div' ).css( "display", "none" );
    }
  } );
  jQuery( '.yop-poll-view-results-uncheck-nc' ).click( function() {
    jQuery( '#yop-poll-view-results-never, #yop-poll-view-results-custom' ).attr( 'checked', false );
    jQuery( '#yop-poll-display-view-results-div' ).css( "display", "none" );
  } );
  jQuery( '#yop-poll-view-results-never' ).click( function() {
    jQuery( '.yop-poll-view-results-uncheck-nc, #yop-poll-view-results-custom' ).attr( 'checked', false );
    jQuery( '#yop-poll-display-view-results-div' ).css( "display", "none" );
  } );
  //</editor-fold>

  //<editor-fold desc="Vote Permissions">
    if( jQuery( '#yop-poll-vote-permisions-guest' ).attr( "checked" ) == 'checked' ) {

        jQuery( '#yop-poll-vote-anonymous' ).hide();
        jQuery( '#yop-poll-vote-permisions-anonymous-yes' ).attr( "checked",true );

    }
    jQuery('#yop-poll-send-email-notifications-yes').click(function(){
           jQuery("#yop_poll_email_notification").show();

    });
        jQuery('#yop-poll-send-email-notifications-no').click(function(){
                jQuery("#yop_poll_email_notification").hide();

            });
  jQuery( '#yop-poll-vote-permisions-guest' ).change( function() {

      if( jQuery( '#yop-poll-vote-permisions-registered' ).attr( "checked" ) != 'checked' ) {
        jQuery( '.yop-poll-vote-as-div' ).hide();
      }
      if( jQuery( '#yop-poll-vote-permisions-registered' ).attr( "checked" ) == 'checked' ) {
          jQuery( '#yop-poll-vote-anonymous' ).show();
      }

      if( jQuery( '#yop-poll-vote-permisions-guest' ).attr( "checked" ) == 'checked' ) {

          jQuery( '#yop-poll-vote-anonymous' ).hide();
          jQuery( '#yop-poll-vote-permisions-anonymous-yes' ).attr( "checked",true );

      }

  } );
  jQuery( '#yop-poll-vote-permisions-registered' ).change( function() {
    if( jQuery( this ).attr( 'checked' ) == "checked" ) {
      jQuery( '.yop-poll-vote-as-div' ).show();
        jQuery( '#yop-poll-vote-anonymous' ).show();

    }
    else {
      jQuery( '.yop-poll-vote-as-div' ).hide();
    }
      if( jQuery( '#yop-poll-vote-permisions-guest' ).attr( "checked" ) == 'checked' ) {

          jQuery( '#yop-poll-vote-anonymous' ).hide();
          jQuery( '#yop-poll-vote-permisions-anonymous-yes' ).attr( "checked",true );
              }

  } );
  //</editor-fold>
    if( jQuery( '#yop-poll-view-results-custom' ).is( ':checked' )==true){
        jQuery( '#yop-poll-display-view-results-div' ).show();
    }
  //<editor-fold desc="Blocking Voters">
  jQuery( ".yop-poll-blocking-voters-hide-interval" ).click( function() {
    jQuery( '#yop-poll-blocking-voters-interval-div' ).hide();
    jQuery( '.yop-poll-blocking-voters-show-interval' ).attr( 'checked', false )
  } );
  jQuery( ".yop-poll-blocking-voters-show-interval" ).click( function() {
    jQuery( '#yop-poll-blocking-voters-interval-div' ).show();
    jQuery( '.yop-poll-blocking-voters-hide-interval' ).attr( 'checked', false );
  } );
  //</editor-fold">

  //<editor-fold desc="Limit number of votes per user">
  jQuery( "#yop-poll-limit-number-of-votes-per-user-no" ).click( function() {
    jQuery( '#yop-poll-number-of-votes-per-user-div' ).hide();
  } );
  jQuery( "#yop-poll-limit-number-of-votes-per-user-yes" ).click( function() {
    jQuery( '#yop-poll-number-of-votes-per-user-div' ).show();
  } );
  //</editor-fold>

  //<editor-fold desc="Show Poll in archive">
  jQuery( "#yop-poll-show-poll-in-archive-yes" ).click( function() {
    jQuery( '#yop-poll-show-poll-in-archive-div' ).show();
  } );
  jQuery( "#yop-poll-show-poll-in-archive-no" ).click( function() {
    jQuery( '#yop-poll-show-poll-in-archive-div' ).hide();
  } );
  //</editor-fold>

  //<editor-fold desc="Sorting Results">
  jQuery( "#yop_poll_sorting_results_as_defined" ).click( function() {
    jQuery( '#yop_poll_sort_results_rule-div' ).hide();
  } );
  jQuery( "#yop_poll_sorting_results_database" ).click( function() {
    jQuery( '#yop_poll_sort_results_rule-div' ).show();
  } );
  jQuery( "#yop_poll_sorting_results_alphabetical" ).click( function() {
    jQuery( '#yop_poll_sort_results_rule-div' ).show();
  } );
  jQuery( "#yop_poll_sorting_results_votes" ).click( function() {
    jQuery( '#yop_poll_sort_results_rule-div' ).show();
  } );
  //</editor-fold>
    jQuery( "#yop-poll-use-same-template-for-widget" ).click( function() {

        if( jQuery( '#yop-poll-use-same-template-for-widget' ).is(':checked'))

            jQuery( '#widget-templates' ).hide();
        else{
            jQuery( '#widget-templates' ).show();
            if(jQuery("#slider_init" ).val()==0)
                yop_poll_slider('widget');
            jQuery("#slider_init" ).val(1);
        }
    } );
    jQuery( ".yop-poll-blocking-voters-show-interval" ).click( function() {

        jQuery( '#yop-poll-blocking-voters-interval-div' ).show();

        jQuery( '.yop-poll-blocking-voters-hide-interval' ).attr( 'checked', false );

    } );

  //<editor-fold desc="Yop Poll Preview">
  jQuery( '#yop-poll-dialog' ).dialog( {
    create: function( event, ui ) {
      var widget = jQuery( this ).dialog( "widget" );
      jQuery( ".ui-dialog-titlebar-close span", widget ).removeClass( "ui-icon-closethick" );
    },

    modal: true,
    autoOpen: false,
    draggable: false,
    open: function( event, ui ) {
      jQuery( 'html' ).css( "overflow", "hidden" );
    },
    close: function( event, ui ) {
      jQuery( 'html' ).css( "overflow", "scroll" );
    },
    closeOnEscape: true,
    title: "YOP Poll Preview"
  } );
  //</editor-fold>

  //<editor-fold desc="Redirect after vote">
  jQuery( "#yop-poll-redirect-after-vote-yes" ).click( function() {
    jQuery( '#yop-poll-redirect-after-vote-url-div' ).show();
  } );
  jQuery( "#yop-poll-redirect-after-vote-no" ).click( function() {
    jQuery( '#yop-poll-redirect-after-vote-url-div' ).hide();
  } );
  //</editor-fold>

  jQuery( ".yop-poll-default-answer" ).click( function() {
    yop_poll_default_answer( this );
  } );
    jQuery( "#yop-poll-schedule-reset-poll-stats-no" ).click( function() {

        jQuery( '.yop-poll-schedule-reset-poll-stats-options-div' ).hide();

    } );

    jQuery( "#yop-poll-schedule-reset-poll-stats-yes" ).click( function() {

        jQuery( '.yop-poll-schedule-reset-poll-stats-options-div' ).show();

    } );

  //yop_poll_reorder_questions();
   jQuery(".yop_poll_tooltip-buy_pro" ).click( function(){
       var id=this.id;
       //console.log(id);
       if(id=='add_new_media_question2'){
           jQuery('.yop-poll-buy-template-li').removeClass('yop-poll-buy-template-selected');
           jQuery('#yop-poll-buy-template-2').addClass('yop-poll-buy-template-selected');
       }
       if(id=='add_new_text_question2')
       {
           jQuery('.yop-poll-buy-template-li').removeClass('yop-poll-buy-template-selected');
           jQuery('#yop-poll-buy-template-1').addClass('yop-poll-buy-template-selected');
       }
       if(id=='yop-poll-1'){
           jQuery('.yop-poll-buy-template-li').removeClass('yop-poll-buy-template-selected');
           jQuery('#yop-poll-buy-template-4').addClass('yop-poll-buy-template-selected');
       }
       if(id=='yop-poll-vote-permisions-facebook-integration-yes' || id=='yop-poll-vote-permisions-facebook-no' ||
           id=='yop-poll-facebook-share-after-vote-yes' || id=='yop-poll-facebook-share-after-vote-no'  ||
           id=='yop-poll-vote-permisions-google-yes' || id=='yop-poll-vote-permisions-google-no'||
           id=='yop-poll-vote-permisions-show-g-share-button-yes'|| id=='yop-poll-vote-permisions-show-g-share-button-no' ||
           id=='yop_poll_google_integration-yes' || id=='yop_poll_google_integration-no'
            || id=='yop-poll-for-slider-page-4'||id=='yop-poll-for-slider-page2'
           || id=='yop-poll-for-slider-page3'){



           jQuery('.yop-poll-buy-template-li').removeClass('yop-poll-buy-template-selected');

           jQuery("#yop-poll-buy-template-3").addClass('yop-poll-buy-template-selected');
       }
       if(id=='yop-poll-user-interface-type-beginner' || id=='yop-poll-user-interface-type-advanced'){
           jQuery('.yop-poll-buy-template-li').removeClass('yop-poll-buy-template-selected');
           jQuery("#yop-poll-buy-template-0").addClass('yop-poll-buy-template-selected');
       }
       if(id=='yop-poll-for-slider-page'||id=='yop-poll-for-slider-page1'){
           jQuery('.yop-poll-buy-template-li').removeClass('yop-poll-buy-template-selected');
           jQuery("#yop-poll-buy-template-3").addClass('yop-poll-buy-template-selected');
       }
       if(id=='yop-poll-for-slider-page-7'){
           jQuery('.yop-poll-buy-template-li').removeClass('yop-poll-buy-template-selected');
           jQuery("#yop-poll-buy-template-5").addClass('yop-poll-buy-template-selected');
       }




       jQuery(".yop_poll_pro_feature").dialog({

           height: '650',

           width: 'auto',

           resizable: false,

           modal: true,

           dialogClass: 'fixed-dialog'

           //position:{top:'top+100'}

       });
       jQuery( "#yop-poll-buy-template-slider" ).jcarousel( 'scroll', jQuery( '.yop-poll-buy-template-selected' ) );
       //if (jQuery(this).is(':radio')) {
       //    jQuery(this ).attr('checked', false);

      // }
      // jQuery(".yop_poll_pro_feature").removeClass('yop-poll-buy-template-selected');
   });
    jQuery('#yop-poll-pro-close').click(function() {

        jQuery(".yop_poll_pro_feature").dialog('close');

    });

} );

function yop_poll_add_new_answer( question_id, answer_id, current_button, type ) {

    var answers_container = jQuery( '#yop-poll-question-' + question_id + '-answers-table' );
    jQuery('input').removeClass('answers_focus');
    jQuery('textarea').removeClass('answers_focus');
    jQuery.ajax( {

        type: 'POST',

        url: yop_poll_global_settings.ajax_url,

        data: 'action=yop_poll_get_new_poll_answer_template&question_id=' + question_id + '&answer_id=' + answer_id +

            '&type=' + type,

        dataType: 'html',

        cache: false,

        async :false,

        beforeSend: function() {

            jQuery( current_button ).parent().children( '.spinner' ).css( "display", "inline" );

        },

        error: function() {

            jQuery( current_button ).parent().children( '.spinner' ).css( "display", "none" );

            alert( 'error' );

        },

        success: function( data ) {

            answers_container.children( 'tbody' ).append( data );

            yoppolltitlehint( 'yop-poll-subtitle' );
            jQuery(".answers_focus").focus()
            jQuery('input').removeClass('answers_focus');
            yop_poll_answers_sortable();

            yop_poll_reorder_answers( question_id );

            jQuery( current_button ).parent().children( '.spinner' ).css( "display", "none" );


        }

    } );

}



function yop_poll_reorder_answers( question_id ) {
  var AnswerOrder = jQuery( '#yop-poll-question-' + question_id + '-answers-table' ).find( '.yop-poll-question-' +
      question_id + '-answer-order' );
  AnswerOrder.each( function( index, value ) {
    jQuery( this ).val( parseInt( index + 1 ) );
  } );
  return false;
}

function yop_poll_reorder_questions() {
  var QuestionOrder = jQuery( '.stuffbox' ).find( '.yop-poll-question-order-span' );
  QuestionOrder.each( function( index, value ) {
    jQuery( this ).html( parseInt( index + 1 ) );
  } );

  QuestionOrder = jQuery( '.stuffbox' ).find( '.yop-poll-question-order-input' );
  QuestionOrder.each( function( index, value ) {
    jQuery( this ).val( parseInt( index + 1 ) );
  } );
  return false;
}

function yop_poll_remove_answer( question_id, answer_id ) {
  jQuery( '#yop-poll-tr-answer-' + question_id + '-' + answer_id ).remove();
  yop_poll_reorder_answers( question_id );
}

function yop_poll_remove_question( question_id ) {
  jQuery( '#stuffbox-question-' + question_id ).remove();
  yop_poll_reorder_questions();
}

function yop_poll_change_question_summar( question_id, text ) {
  jQuery( '#yop-poll-question-' + question_id + '-summar' ).text( ' - ' + text.substring( 0, 30 ) + '...' );
}

function save_poll( fromWizard ) {

    fromWizard = (typeof fromWizard === "undefined") ? 0 : fromWizard;

    isBeginner = (typeof isBeginner === "undefined") ? 0 : isBeginner;

    var response = new Object();

    jQuery.ajax( {

        type: 'POST',

        url: yop_poll_global_settings.ajax_url,

        data: 'action=yop_poll_add_edit_poll' + '&' + jQuery( "#yop-poll-edit-add-new-form" ).serialize(),

        cache: false,

        async: false,

        beforeSend: function() {

            if( fromWizard == 1 || isBeginner == 1 ) {

                jQuery( 'html, body' ).animate( {scrollTop: '0px'}, 800 );

                jQuery( '#message' ).html( '<p>' + yop_poll_global_settings.message_before_ajax_send + '</p>' );

                jQuery( "#message" ).removeClass();

                jQuery( '#message' ).addClass( 'updated' );

                jQuery( '#message' ).show();

            }

            else {

                jQuery( 'html, body' ).animate( {scrollTop: '0px'}, 800 );

                jQuery( '#message' ).html( '<p>' + yop_poll_global_settings.message_before_ajax_send + '</p>' );

                jQuery( "#message" ).removeClass();

                jQuery( '#message' ).addClass( 'updated' );

                jQuery( '#message' ).show();

            }

        },

        error: function() {

            if( fromWizard == 1 || isBeginner == 1 ) {

                jQuery( 'html, body' ).animate( {scrollTop: '0px'}, 800 );

                jQuery( '#message' ).html( '<p>' + yop_poll_global_settings.error_message_ajax + '</p>' );

                jQuery( "#message" ).removeClass();

                jQuery( '#message' ).addClass( 'error' );

                jQuery( '#message' ).show();


            }

            else {

                jQuery( 'html, body' ).animate( {scrollTop: '0px'}, 800 );

                jQuery( '#message' ).html( '<p>' + yop_poll_global_settings.error_message_ajax + '</p>' );

                jQuery( "#message" ).removeClass();

                jQuery( '#message' ).addClass( 'error' );

                jQuery( '#message' ).show();

            }

        },

        success: function( data ) {

            data = JSON.parse( data );

            response = data;

            if( fromWizard == 1 || isBeginner == 1 ) {

                jQuery( 'html, body' ).animate( {scrollTop: '0px'}, 800 );

                jQuery( '#message' ).html( '<p>' + data.message + '</p>' );

                jQuery( "#message" ).removeClass();

                jQuery( '#message' ).addClass( 'updated' );

                jQuery( '#message' ).show();

                if( data.success == 1 ) {

                    jQuery( '#yop-poll-wizard' ).smartWizard( "enableFinish", true );
                    jQuery( '#yop-poll-wizard' ).smartWizard("enableStep",2);
                    jQuery( '#yop-poll-wizard' ).smartWizard("enableStep",3);
                    jQuery( '#yop-poll-wizard' ).smartWizard("enableStep",4);
                    jQuery( '#yop-poll-wizard' ).smartWizard("enableStep",5);
                    if(jQuery( '#yop-poll-wizard').smartWizard("currentStep")==4)
                        jQuery( '#yop-poll-wizard' ).smartWizard("goToStep",5);
                    if(jQuery( "input[name*='action_type']" ).val(  )!='edit')
                        jQuery("#yop_poll_show_shortcode").dialog({

                            height: '130',

                            width: '320',


                            modal: true
                        });
                    jQuery( '#yop_poll_shortcode' ).val( '[yop_poll id="' + response.id + '"]' );

                    jQuery( '#yop_poll_shortcode' ).val( '[yop_poll id="' + response.id + '"]' );



                }

                else {

                    jQuery( 'html, body' ).animate( {scrollTop: '0px'}, 800 );
                    //  jQuery( '#yop-poll-wizard' ).smartWizard( "goToStep", 1 );

                }

            }

            else {

                jQuery( 'html, body' ).animate( {scrollTop: '0px'}, 800 );

                jQuery( '#message' ).html( '<p>' + data.message + '</p>' );

                jQuery( "#message" ).removeClass();

                jQuery( '#message' ).addClass( 'updated' );

                jQuery( '#message' ).show();
                if(response.success==1){
                    jQuery("#yop_poll_shortcode_input" ).val( "[yop_poll id="+'"'+response.id+'"'+"]");
                    if(jQuery( "input[name*='action_type']" ).val(  )!='edit')
                        jQuery("#yop_poll_show_shortcode").dialog({

                            height: '130',

                            width: '320',


                            modal: true

                        });
                }

            }

        }

    } );

    return response;

}

function yop_poll_toggle_options( element, tShow, sMsg, hMsg ) {
  jQuery( tShow ).toggle( function() {
    if( jQuery( tShow ).css( 'display' ) == 'none' ) {
      jQuery( element ).val( sMsg );
    }
    else {
      jQuery( element ).val( hMsg );
    }
  } );
}

function yop_poll_default_answer( e, el_class ) {
    if( jQuery( e ).is( ":checked" ) ) {
        jQuery( el_class ).prop( "checked", false );
        jQuery( e ).prop( "checked", true );
    }
    else {
        jQuery( e ).prop( "checked", false );
    }
}

function yop_poll_add_table_customfield( table, question_id ) {
  var i = jQuery( '#yop-poll-question-' + question_id + '-custom-fields-no' ).val();
    yop_poll_add_new_config.text_customfield="Custom Field";

    var jQuerytr = '' + '<tr class="yop_poll_tr_customfields" id="yop_poll_tr_customfield-' + question_id + '-' + i +
      '">' + '<th scope="row">' + '<label class="yop_poll_customfield_label" for="yop_poll_customfield-' + question_id +
      '-' + i + '">' + yop_poll_add_new_config.text_customfield + ' ' + i + '</label>' + '</th>' + '<td>' +
      '<input class="yop-small-input" type="text" value="" id="yop-poll-customfield-' + question_id + '-' + i +
      '" name="yop_poll_question[question_' + question_id + '][custom_fields][' + i + '][custom_field]"> ' +
      '<label for="yop-poll-customfield-required-' + question_id + '-' + i + '">' +
      '<input value="yes" id="yop-poll-customfield-required-' + question_id + '-' + i +
      '" type="checkbox" name="yop_poll_question[question_' + question_id + '][custom_fields][' + i + '][required]">' +
      yop_poll_add_new_config.text_requiered_customfield + '</label>' + '</td>' + '<td align="right">' +
      '<input onclick="yop_poll_remove_customfield( \'#yop-poll-customfields-table-' + question_id + '\', \'' +
      question_id + '\', \'' + i + '\' )" type="button" value="' + yop_poll_add_new_config.text_remove_customfield +
      '" class="button yop-poll-button-delete" />' + '</td>' + '</tr>';

  if( 1 == i ) {
    jQuery( table ).children( 'tbody' ).html( jQuerytr );
  }
  else {
    jQuery( table ).children( 'tbody' ).children( 'tr:last' ).after( jQuerytr );
  }
  jQuery( '#yop_poll_tr_customfield' + question_id + '-' + i ).hide().fadeIn( 'medium' );
  jQuery( '#yop-poll-question-' + question_id + '-custom-fields-no' ).val( parseInt( i ) + 1 );
    jQuery('#yop-poll-customfield-' + question_id + '-' + i ).focus();
  //yop_poll_reorder_customfields( table );
}

function yop_poll_reorder_customfields( table, question_id ) {
  jQuerytr = jQuery( table ).find( "tbody .yop_poll_tr_customfields" );
  jQuerytr.each( function( index, value ) {
    jQuery( this ).find( ".yop_poll_customfield_label" ).html( yop_poll_add_new_config.text_customfield + ' ' +
        parseInt( index + 1 ) );
  } );
  jQuery( '#yop-poll-question-' + question_id + '-custom-fields-no' ).val( parseInt( jQuery( '#yop-poll-question-' +
      question_id + '-custom-fields-no' ).val() ) - 1 );
  return false;
}

function yop_poll_remove_customfield( table, question_id, customfield_id ) {
  jQuery( '#yop_poll_tr_customfield-' + question_id + '-' + customfield_id ).fadeOut( 'medium', function() {
    jQuery( this ).remove();
    yop_poll_reorder_customfields( table, question_id );
    return false;
  } );
  return false;
}

function yop_poll_show_div( div ) {
  jQuery( div ).show();
}

function yop_poll_hide_div( div ) {
  jQuery( div ).hide();
}

function yop_poll_select_template( id, location ) {
  jQuery( "#yop-poll-" + location + "-template" ).val( id );
  jQuery( ".yop-poll-" + location + "-template-selected" ).removeClass( "yop-poll-" + location + "-template-selected" );
  jQuery( "#yop-poll-" + location + "-template-" + id ).addClass( "yop-poll-" + location + "-template-selected" );
}

function yop_poll_preview_add_edit() {
  jQuery.ajax( {
    type: 'POST',
    url: yop_poll_global_settings.ajax_url,
    data: 'action=yop_poll_preview_add_edit' + '&' + jQuery( "#yop-poll-edit-add-new-form" ).serialize(),
    cache: false,
    beforeSend: function() {
      jQuery( "#yop-poll-spinner" ).css( "display", "inline" );
    },
    error: function() {
    },
    success: function( data ) {
      jQuery( '#yop-poll-dialog' ).html( data );
      jQuery( '#yop-poll-dialog button' ).click( function() { return false; } );
      jQuery( '#yop-poll-dialog' ).dialog( "option", "modal", true );
      jQuery( '#yop-poll-dialog' ).dialog( "open" );
    },
    complete: function() {
      jQuery( "#yop-poll-spinner" ).css( "display", "none" );
    }
  } );
  return false;
}
function yop_poll_show_poll_shortcode(poll_id){
    jQuery("#yop_poll_shortcode_input" ).val( "[yop_poll id="+'"'+poll_id+'"'+"]");
    jQuery("#yop_poll_show_shortcode").dialog({

        height: '130',

        width: '320',


        modal: true

    });

}







