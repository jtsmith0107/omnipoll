// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery.countdown
//= require TimeCircles
//= require underscore
//= require backbone
//= require bootstrap
//= require Chart
//= require serialize_json
//= require omnipoll
//= require_tree ../templates
//= require_tree ./utils
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers
//= require_tree .

// Color Constants for app
OmniPoll.colors = ['#00B7D6',
                 '#1695A3', 
                 '#ACF0F2',
                 /*'#F3FFE2', */
                 '#EB7F00',
                 '#B8731F', // addtional colors
                 '#6B5233', 
                 '#0D8EA3',
                 '#EEB670',
                 '#40C1D6',
                 '#6B4312', 
                 '#EB9428',
                 ];
OmniPoll.highlights = [ '#00B7D6',
                 '#127985', 
                 '#8FC8C9',
                /* '#B6BFA9', */
                 '#D17100',
                 '#A3661C', //additional colors
                  '#574229', 
                  '#0C889D',
                  '#DDA868',
                  '#37A5B8',
                  '#57360F', 
                  '#D68624'];