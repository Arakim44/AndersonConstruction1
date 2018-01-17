import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
    constructor() {
        this.siteHeader = $(".site-header");
        this.headerTriggerElement = $(".banner__text-content");
        this.createHeaderWaypoint();
        // this.createStickyHeader();
    }


    createHeaderWaypoint() {
        var that = this;
        new Waypoint({
            element:this.headerTriggerElement[0],
            handler: function(direction) {
                if(direction == "down"){
                    that.siteHeader.addClass("site-header--dark");
                } else {
                    that.siteHeader.removeClass("site-header--dark");
                }
            } 
        });
    }

    
    //my attempt on sticky header with call usdiv on top

    // createStickyHeader() {
    //     var sticky = this.siteHeader.offsetTop;
    //     var that = this;
    //     new waypoints({
    //         element: that.siteHeader,
    //         handler: function() {
    //             if(window.pageYOffset >= sticky) {
    //                 that.siteHeader.addClass("site-header--sticky");
    //             } else {
    //                 that.siteHeader.removeClass("site-header--sticky");
    //             }
    //         }
    //     })
    // }



}

export default StickyHeader;