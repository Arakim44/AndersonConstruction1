import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
 



var mobileMenu = new MobileMenu();

new RevealOnScroll($(".feature-item"),"85%");
new RevealOnScroll($(".members"),"80%");
new RevealOnScroll($(".lightbox"),"75%");
// var revealOnScroll = new RevealOnScroll();

var stickyHeader = new StickyHeader();
 